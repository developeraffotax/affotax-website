// components/TrustpilotWidget.jsx
"use client";
import { useEffect } from "react";

export default function TrustpilotWidget() {
  useEffect(() => {
    // Load Trustpilot script only once on the client
    const existingScript = document.querySelector(
      'script[src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"]'
    );
    if (!existingScript) {
      const script = document.createElement("script");
      script.src =
        "https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
   
        <div
      className="trustpilot-widget"
      data-locale="en-GB"
      data-template-id="56278e9abfbbba0bdcd568bc"
      data-businessunit-id="64d63b5dc33d714e75c680f9"
      data-style-height="52px"
      data-style-width="100%"
    >
      <a
        href="https://uk.trustpilot.com/review/affotax.com"
        target="_blank"
        rel="noopener"
      >
        Trustpilot
      </a>
    </div>
     
  );
}
