// lib/getServerTrafficSource.js
import { cookies } from "next/headers";
import { TRAFFIC_SOURCES } from "@/lib/getTrafficSource";

export async function getServerTrafficSource() {
  const store = await cookies();
  const raw = (store.get("traffic_source")?.value || "").toLowerCase();

  // The cookie is user-editable, so only accept the known values
  return TRAFFIC_SOURCES.includes(raw) ? raw : "direct";
}