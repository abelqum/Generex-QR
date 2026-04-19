// src/components/AdSenseScript.jsx
"use client";

import Script from "next/script";

export default function AdSenseScript() {
  const isProduction = process.env.NODE_ENV === "production";
  const adSenseId = process.env.NEXT_PUBLIC_ADSENSE_ID;

  if (!isProduction || !adSenseId) return null;

  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adSenseId}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}
