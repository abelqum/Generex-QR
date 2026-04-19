// src/components/AdSenseScript.jsx
"use client";

import Script from "next/script";

export default function AdSenseScript() {
  // Solo cargar en producción
  const isProduction = process.env.NODE_ENV === "production";

  if (!isProduction) return null;

  return (
    <Script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-TU-ID-DE-ADSENSE"
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}
