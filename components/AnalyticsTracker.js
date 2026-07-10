"use client"

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
     if (pathname.startsWith("/admin") || pathname.startsWith("/api")) return;

    fetch("/api/log-view", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: pathname }),
    }).catch((err) => console.error("Analytics error:", err));
  }, [pathname]);

  return null;  
}