const PIXEL_ID = "L85FobyWsNupoD1CVoUKYy";

export async function sha256(value) {
  if (!value) return undefined;

  const normalized = value.trim();

  if (!normalized) return undefined;

  const buffer = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(normalized)
  );

  return Array.from(new Uint8Array(buffer))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

export async function initializeOpenAIMatching({
  email,
  externalId,
}) {
  if (typeof window.oaiq !== "function") return;

  const user = {};

  if (email) {
    user.email_sha256 = await sha256(email.toLowerCase().trim());
  }

  if (externalId) {
    // External IDs are trimmed but their case is preserved.
    user.external_id_sha256 = await sha256(externalId);
  }

  if (Object.keys(user).length === 0) return;

  window.oaiq("init", {
    pixelId: PIXEL_ID,
    user,
  });
}