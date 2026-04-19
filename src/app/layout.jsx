// src/app/layout.jsx
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AdSenseScript from "@/components/AdSenseScript"; // <-- Importa tu script

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Generex QR | Generador de Códigos QR Gratis",
  description:
    "Crea códigos QR personalizados, con colores y logos. 100% gratis, sin registro y sin fecha de caducidad. Genera QR para enlaces, WiFi, vCards y más.",
  keywords:
    "generador qr, crear qr gratis, codigo qr personalizado, qr sin caducidad, generex",
  openGraph: {
    title: "Generex QR | Generador Gratuito",
    description: "Genera códigos QR fácil, rápido y completamente gratis.",
    url: "https://tudominio.com",
    siteName: "Generex",
    locale: "es_MX",
    type: "website",
  },
  other: {
    "google-adsense-account": process.env.NEXT_PUBLIC_ADSENSE_ID,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <AdSenseScript />
        <meta
          name="google-site-verification"
          content="am_8WKb5kJt9jhiPnEBtBy2QFDM1BSDUxyNF33kx4A8"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
