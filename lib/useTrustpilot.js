"use client";

import { useEffect } from "react";

export function useTrustpilot() {
  useEffect(() => {
    const load = () => {
      if (typeof window !== "undefined" && window.Trustpilot) {
        const widgets = document.querySelectorAll(".trustpilot-widget");
        widgets.forEach((el) => {
          window.Trustpilot.loadFromElement(el);
        });
      }
    };

    // Run on mount
    load();

    // Run on route change (Next.js App Router event)
    window.addEventListener("trustpilot-load", load);

    return () => {
      window.removeEventListener("trustpilot-load", load);
    };
  }, []);
}
