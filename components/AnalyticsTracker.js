"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { getTrafficSource } from "@/lib/getTrafficSource";

export default function AnalyticsTracker() {
const pathname = usePathname();

useEffect(() => {
  if (pathname.startsWith("/admin") || pathname.startsWith("/api")) return;
  const source = getTrafficSource();
  fetch("/api/log-view", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ path: pathname, source }),
    keepalive: true,
  }).catch((err) => console.error("Analytics error:", err));
}, [pathname]);

  return null;
}