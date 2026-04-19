// src/app/robots.js

export default function robots() {
  // Reemplaza esto con tu dominio real
  const baseUrl = "https://tudominio.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
