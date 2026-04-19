"use client";
import Link from "next/link";
export default function FooterA19() {
  return (
    <footer className="mt-16 text-center border-t border-gray-200 pt-8">
      <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-50 to-white rounded-full shadow-sm border border-gray-200">
        <span className="text-gray-400 text-sm">✨</span>
        <span className="text-gray-600">
          Hecho con <span className="text-red-500">❤️</span> por
          <span className="ml-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold text-lg">
            A19
          </span>
        </span>
        <span className="text-gray-400 text-sm">✨</span>
      </div>
      <p className="text-xs text-gray-400 mt-4">
        © {new Date().getFullYear()} Generex - Herramienta gratuita de
        generación QR
      </p>
      <div className="mt-6 flex gap-4 justify-center text-xs text-gray-500">
        <Link
          href="/privacidad"
          className="hover:text-gray-700 transition-colors"
        >
          Privacidad
        </Link>
        <span>•</span>
        <Link
          href="/terminos"
          className="hover:text-gray-700 transition-colors"
        >
          Términos
        </Link>
        <span>•</span>
        <Link
          href="/contacto"
          className="hover:text-gray-700 transition-colors"
        >
          Contacto
        </Link>
      </div>
    </footer>
  );
}
