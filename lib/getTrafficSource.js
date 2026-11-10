// lib/getTrafficSource.js
const COOKIE_NAME = "traffic_source";
const MAX_AGE = 60 * 60 * 24 * 30; // 30 days

// The only values this app ever stores. Anything else resolves to "direct".
export const TRAFFIC_SOURCES = ["facebook", "google", "openai", "direct"];

// If true, a new visit that carries an explicit campaign signal (utm_source or an
// ad click ID) replaces the saved source. Referrer-only signals never replace a
// saved real source. Set to false for strict first-touch attribution.
const CAMPAIGN_OVERRIDES_SAVED = true;

// Ad platforms append these automatically, often WITHOUT any utm_source.
const CLICK_ID_SOURCES = [
  ["gclid", "google"],
  ["gbraid", "google"],
  ["wbraid", "google"],
  ["fbclid", "facebook"],
];

// Exact utm_source values (after normalising "www." and ".com").
const UTM_ALIASES = {
  facebook: "facebook",
  fb: "facebook",
  meta: "facebook",
  instagram: "facebook",
  ig: "facebook",
  google: "google",
  googleads: "google",
  adwords: "google",
  youtube: "google",
  openai: "openai",
  chatgpt: "openai",
  gpt: "openai",
};

// Hostname rules, used for the referrer (and for utm_source values that are hostnames).
const HOST_RULES = [
  ["facebook", /(^|\.)(facebook\.com|fb\.com|fb\.me|instagram\.com|messenger\.com)$/],
  ["google", /(^|\.)(google\.[a-z.]+|youtube\.com|youtu\.be)$/],
  ["openai", /(^|\.)(openai\.com|chatgpt\.com)$/],
];

const stripWww = (host) => host.replace(/^www\./, "");

// Anything outside the four allowed values (including old cookie values) becomes "direct".
const normalise = (value) =>
  TRAFFIC_SOURCES.includes(value) ? value : "direct";

function readCookie() {
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${COOKIE_NAME}=`));
  if (!match) return null;
  const value = match.slice(COOKIE_NAME.length + 1);
  try {
    return decodeURIComponent(value) || null;
  } catch {
    return value || null;
  }
}

function writeCookie(source) {
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie =
    `${COOKIE_NAME}=${encodeURIComponent(source)}; path=/; max-age=${MAX_AGE}; SameSite=Lax${secure}`;
}

function matchHost(host) {
  for (const [name, regex] of HOST_RULES) {
    if (regex.test(host)) return name;
  }
  return null;
}

function sourceFromUtm(rawUtmSource) {
  const utm = rawUtmSource.trim().toLowerCase();
  if (!utm) return null;

  const normalised = stripWww(utm).replace(/\.(com|org|net)$/, "");
  if (UTM_ALIASES[normalised]) return UTM_ALIASES[normalised];

  // utm_source=chatgpt.com, utm_source=l.facebook.com, etc.
  return matchHost(stripWww(utm));
}

function sourceFromClickId(params) {
  for (const [key, name] of CLICK_ID_SOURCES) {
    if (params.has(key)) return name;
  }
  return null;
}

function sourceFromReferrer() {
  if (!document.referrer) return null;
  let host;
  try {
    host = stripWww(new URL(document.referrer).hostname.toLowerCase());
  } catch {
    return null;
  }
  if (!host) return null;

  // Navigation within your own site is not a traffic source.
  if (host === stripWww(window.location.hostname.toLowerCase())) return null;

  return matchHost(host);
}

export function getTrafficSource() {
  if (typeof window === "undefined") return "direct";

  const existing = normalise(readCookie());
  const params = new URLSearchParams(window.location.search);

  // Explicit campaign signals (UTM, then ad click IDs) beat the referrer.
  const campaign =
    sourceFromUtm(params.get("utm_source") || "") || sourceFromClickId(params);

  // 1. Saved a real source earlier -> keep it, unless this visit is a new campaign click.
  if (existing !== "direct") {
    if (CAMPAIGN_OVERRIDES_SAVED && campaign && campaign !== existing) {
      writeCookie(campaign);
      return campaign;
    }
    return existing;
  }

  // 2. Nothing saved (or only an old/unknown value): detect from this visit.
  const detected = campaign || sourceFromReferrer() || "direct";

  // 3. Only store real sources. "direct" is the default, so no cookie is needed,
  //    and a later visit from Facebook/Google/OpenAI can still be detected.
  if (detected !== "direct") writeCookie(detected);

  return detected;
}

// Helper to read it later in client code (forms, checkout, etc.)
export function getStoredTrafficSource() {
  if (typeof window === "undefined") return "direct";
  return normalise(readCookie());
}