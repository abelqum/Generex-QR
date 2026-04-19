// src/components/AdBanner.jsx
"use client";
import { useEffect } from "react";

export default function AdBanner({ slot }) {
  const isProduction = process.env.NODE_ENV === "production";
  const adSenseId = process.env.NEXT_PUBLIC_ADSENSE_ID;

  useEffect(() => {
    if (isProduction) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.error("AdSense error", err);
      }
    }
  }, [isProduction]);

  if (!isProduction) {
    return (
      <div className="my-6 flex justify-center">
        <div className="max-w-4xl w-full">
          <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <p className="text-gray-400 text-sm">
              📢 Espacio publicitario (Modo Desarrollo)
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="my-6 flex justify-center overflow-hidden w-full">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={adSenseId}
        data-ad-slot={
          slot || "PENDIENTE"
        } /* Aquí irá el ID específico de tu bloque de anuncios cuando lo crees */
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
}
