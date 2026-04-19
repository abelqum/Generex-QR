// src/components/Generex.jsx
"use client";

import { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import FooterA19 from "./FooterA19";
import BadgeA19 from "./BadgeA19";
import AdBanner from "./AdBanner";
import DonationSection from "./DonationSection";

export default function Generex() {
  // Nuevo estado para el tipo de QR
  const [qrType, setQrType] = useState("url");

  // Estados originales y nuevos para los inputs
  const [inputText, setInputText] = useState("");
  const [wifiSsid, setWifiSsid] = useState("");
  const [wifiPassword, setWifiPassword] = useState("");
  const [wifiEncryption, setWifiEncryption] = useState("WPA");
  const [waPhone, setWaPhone] = useState("");
  const [waMessage, setWaMessage] = useState("");

  const [qrValue, setQrValue] = useState("");
  const [isDownloading, setIsDownloading] = useState(false);
  const [fileName, setFileName] = useState("mi-qr");
  const qrRef = useRef(null);
  const [qrSize, setQrSize] = useState(300);

  // Estados para estilos
  const [qrStyle, setQrStyle] = useState("classic");
  const [qrBgColor, setQrBgColor] = useState("#ffffff");
  const [qrFgColor, setQrFgColor] = useState("#000000");
  const [showStylePanel, setShowStylePanel] = useState(false);

  // Generación adaptada a los múltiples tipos
  const handleGenerate = (e) => {
    e.preventDefault();
    let finalValue = "";
    let suggestedName = "mi-qr";

    if (qrType === "url") {
      if (!inputText.trim()) return;
      finalValue = inputText;
      suggestedName = inputText
        .replace(/^https?:\/\//, "")
        .replace(/[^a-zA-Z0-9]/g, "-")
        .substring(0, 20)
        .toLowerCase();
    } else if (qrType === "wifi") {
      if (!wifiSsid.trim()) return;
      finalValue = `WIFI:T:${wifiEncryption};S:${wifiSsid};P:${wifiPassword};;`;
      suggestedName = `wifi-${wifiSsid.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase()}`;
    } else if (qrType === "whatsapp") {
      if (!waPhone.trim()) return;
      finalValue = `https://wa.me/${waPhone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(waMessage)}`;
      suggestedName = `wa-${waPhone.replace(/[^0-9]/g, "")}`;
    }

    setQrValue(finalValue);
    setFileName(suggestedName || "mi-qr");
  };

  // Descarga corregida usando qrRef
  const handleDownload = () => {
    const canvas = qrRef.current?.querySelector("canvas");
    if (!canvas) return;

    const link = document.createElement("a");
    const finalName = fileName.trim() || "generex-qr";
    link.download = `${finalName}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  // Reset actualizado para limpiar todos los campos
  const handleReset = () => {
    setQrValue("");
    setInputText("");
    setWifiSsid("");
    setWifiPassword("");
    setWaPhone("");
    setWaMessage("");
    setFileName("mi-qr");
    setQrStyle("classic");
    setQrBgColor("#ffffff");
    setQrFgColor("#000000");
    setShowStylePanel(false);
  };

  // Plantillas predefinidas
  const templates = [
    {
      name: "Clásico",
      style: "classic",
      bg: "#ffffff",
      fg: "#000000",
      icon: "⬛",
    },
    {
      name: "Moderno",
      style: "modern",
      bg: "#1a1a2e",
      fg: "#e94560",
      icon: "🎨",
    },
    {
      name: "Corporativo",
      style: "corp",
      bg: "#f8f9fa",
      fg: "#2c3e50",
      icon: "💼",
    },
    {
      name: "Ecológico",
      style: "eco",
      bg: "#f0fdf4",
      fg: "#166534",
      icon: "🌱",
    },
    {
      name: "Elegante",
      style: "elegant",
      bg: "#fdf2f8",
      fg: "#831843",
      icon: "✨",
    },
  ];

  const applyTemplate = (template) => {
    setQrStyle(template.style);
    setQrBgColor(template.bg);
    setQrFgColor(template.fg);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header (Intacto) */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
            ⚡ Generex
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Genera códigos QR ilimitados, sin caducidad y completamente gratis.
            Todo se procesa en tu navegador, sin servidores externos.
          </p>
          <div className="inline-flex mt-5 items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            100% Gratis • Sin registro • QR permanentes
          </div>
        </div>

        {/* Features Grid (Intacto) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* Card 1 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-100">
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mb-3">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-1">100% Gratuito</h3>
            <p className="text-sm text-gray-600">
              Sin límites ni pagos ocultos
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-100">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-3">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-1">
              Privacidad Total
            </h3>
            <p className="text-sm text-gray-600">
              Todo se genera en tu navegador
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-100">
            <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mb-3">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800 mb-1">Sin Caducidad</h3>
            <p className="text-sm text-gray-600">
              Tus QR funcionan para siempre
            </p>
          </div>
        </div>

        {/* Input Form modificado con pestañas */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-gray-100">
          {/* Selector de Pestañas */}
          <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-100 pb-4">
            <button
              onClick={() => setQrType("url")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${qrType === "url" ? "bg-blue-100 text-blue-700" : "bg-gray-50 text-gray-600 hover:bg-gray-100"}`}
            >
              🔗 Enlace / Texto
            </button>
            <button
              onClick={() => setQrType("wifi")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${qrType === "wifi" ? "bg-blue-100 text-blue-700" : "bg-gray-50 text-gray-600 hover:bg-gray-100"}`}
            >
              📶 Red WiFi
            </button>
            <button
              onClick={() => setQrType("whatsapp")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${qrType === "whatsapp" ? "bg-blue-100 text-blue-700" : "bg-gray-50 text-gray-600 hover:bg-gray-100"}`}
            >
              💬 WhatsApp
            </button>
          </div>

          <form onSubmit={handleGenerate}>
            {qrType === "url" && (
              <>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ¿Qué quieres convertir en QR?
                </label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    maxLength={500}
                    aria-label="Contenido del código QR"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Ej: https://tusitio.com o +52 123 456 7890"
                    className="flex-1 px-5 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-700 placeholder-gray-400"
                    disabled={isDownloading}
                  />
                  <button
                    type="submit"
                    aria-label="Generar código QR"
                    className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 shadow-lg"
                    disabled={isDownloading}
                  >
                    Generar QR
                  </button>
                </div>
              </>
            )}

            {qrType === "wifi" && (
              <>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Ingresa los datos de tu red WiFi
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    maxLength={100}
                    aria-label="Nombre de la red WiFi"
                    value={wifiSsid}
                    onChange={(e) => setWifiSsid(e.target.value)}
                    placeholder="Nombre de la Red (SSID)"
                    className="px-5 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-700 placeholder-gray-400"
                    disabled={isDownloading}
                    required
                  />
                  <input
                    type="password"
                    maxLength={100}
                    aria-label="Contraseña de la red WiFi"
                    value={wifiPassword}
                    onChange={(e) => setWifiPassword(e.target.value)}
                    placeholder="Contraseña"
                    className="px-5 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-700 placeholder-gray-400"
                    disabled={isDownloading}
                  />
                  <select
                    value={wifiEncryption}
                    aria-label="Tipo de seguridad WiFi"
                    onChange={(e) => setWifiEncryption(e.target.value)}
                    className="md:col-span-2 px-5 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-700 bg-white"
                  >
                    <option value="WPA">Seguridad: WPA/WPA2/WPA3</option>
                    <option value="WEP">Seguridad: WEP</option>
                    <option value="nopass">Sin contraseña</option>
                  </select>
                </div>
                <button
                  type="submit"
                  aria-label="Generar código QR WiFi"
                  className="w-full px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
                >
                  Generar QR
                </button>
              </>
            )}

            {qrType === "whatsapp" && (
              <>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Ingresa tu número y un mensaje opcional
                </label>
                <div className="grid grid-cols-1 gap-4 mb-4">
                  <input
                    type="tel"
                    maxLength={20}
                    aria-label="Número de teléfono de WhatsApp"
                    value={waPhone}
                    onChange={(e) => setWaPhone(e.target.value)}
                    placeholder="Número con código de país (Ej: 525512345678)"
                    className="px-5 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-700 placeholder-gray-400"
                    disabled={isDownloading}
                    required
                  />
                  <textarea
                    maxLength={300}
                    aria-label="Mensaje predeterminado de WhatsApp"
                    value={waMessage}
                    onChange={(e) => setWaMessage(e.target.value)}
                    placeholder="Mensaje predeterminado (Ej: Hola, quiero más información)"
                    className="px-5 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-700 placeholder-gray-400 resize-none h-24"
                    disabled={isDownloading}
                  />
                </div>
                <button
                  type="submit"
                  aria-label="Generar código QR WhatsApp"
                  className="w-full px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
                >
                  Generar QR
                </button>
              </>
            )}
          </form>
        </div>

        {/* Anuncio antes del QR */}
        {!qrValue && <AdBanner />}

        {/* QR Result (Intacto visualmente, modificado el ref) */}
        {qrValue && (
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="text-center">
              {/* Panel de personalización */}
              <div className="mb-6">
                <button
                  onClick={() => setShowStylePanel(!showStylePanel)}
                  aria-expanded={showStylePanel}
                  aria-label="Abrir panel de personalización de colores"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-gray-700 font-medium mb-4"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                  Personalizar QR
                  <svg
                    className={`w-4 h-4 transform transition-transform ${showStylePanel ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Panel de estilos */}
                {showStylePanel && (
                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <h3 className="font-semibold text-gray-800 mb-4">
                      Plantillas rápidas
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
                      {templates.map((template) => (
                        <button
                          key={template.style}
                          onClick={() => applyTemplate(template)}
                          className={`p-3 rounded-lg border-2 transition-all hover:scale-105 ${qrStyle === template.style ? "border-blue-500 bg-blue-50" : "border-gray-200 bg-white hover:border-gray-300"}`}
                        >
                          <div className="text-2xl mb-1">{template.icon}</div>
                          <div className="font-medium text-sm">
                            {template.name}
                          </div>
                          <div className="flex gap-1 mt-2 justify-center">
                            <div
                              className="w-4 h-4 rounded"
                              style={{
                                backgroundColor: template.bg,
                                border: "1px solid #e5e7eb",
                              }}
                            ></div>
                            <div
                              className="w-4 h-4 rounded"
                              style={{ backgroundColor: template.fg }}
                            ></div>
                          </div>
                        </button>
                      ))}
                    </div>

                    <h3 className="font-semibold text-gray-800 mb-4">
                      Colores personalizados
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Color de fondo
                        </label>
                        <div className="flex gap-2">
                          <input
                            type="color"
                            aria-label="Seleccionar color de fondo"
                            value={qrBgColor}
                            onChange={(e) => setQrBgColor(e.target.value)}
                            className="w-12 h-10 rounded border border-gray-300 cursor-pointer"
                          />
                          <input
                            type="text"
                            aria-label="Código hexadecimal de color de fondo"
                            value={qrBgColor}
                            onChange={(e) => setQrBgColor(e.target.value)}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                            placeholder="#ffffff"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Color del QR
                        </label>
                        <div className="flex gap-2">
                          <input
                            type="color"
                            aria-label="Seleccionar color del QR"
                            value={qrFgColor}
                            onChange={(e) => setQrFgColor(e.target.value)}
                            className="w-12 h-10 rounded border border-gray-300 cursor-pointer"
                          />
                          <input
                            type="text"
                            aria-label="Código hexadecimal de color del QR"
                            value={qrFgColor}
                            onChange={(e) => setQrFgColor(e.target.value)}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                            placeholder="#000000"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div
                ref={qrRef}
                className="inline-block p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-inner"
              >
                <div className="mb-4 flex items-center justify-between gap-4">
                  <label className="text-sm font-medium text-gray-700">
                    Tamaño:
                  </label>
                  <select
                    value={qrSize}
                    aria-label="Seleccionar tamaño del QR"
                    onChange={(e) => setQrSize(Number(e.target.value))}
                    className="px-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-700 bg-white"
                  >
                    <option value={200}>Pequeño (200px)</option>
                    <option value={300}>Mediano (300px)</option>
                    <option value={400}>Grande (400px)</option>
                    <option value={500}>Extra Grande (500px)</option>
                  </select>
                </div>

                <div
                  className="flex justify-center p-4 rounded-xl transition-all"
                  style={{ backgroundColor: qrBgColor }}
                >
                  <QRCodeCanvas
                    value={qrValue}
                    size={qrSize}
                    level="H"
                    includeMargin={true}
                    bgColor={qrBgColor}
                    fgColor={qrFgColor}
                  />
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre del archivo:
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      aria-label="Nombre de archivo para descargar"
                      value={fileName}
                      onChange={(e) => setFileName(e.target.value)}
                      placeholder="nombre-del-archivo"
                      className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-700"
                    />
                    <span className="text-gray-500">.png</span>
                  </div>
                </div>

                <p className="mt-4 text-sm text-gray-600 break-all max-w-[400px] bg-gray-50 p-3 rounded-lg">
                  <span className="font-semibold text-gray-700">
                    Contenido:
                  </span>{" "}
                  {qrValue}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleDownload}
                  aria-label="Descargar imagen del código QR"
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Descargar QR
                </button>

                <button
                  onClick={handleReset}
                  aria-label="Crear un nuevo código QR"
                  className="px-8 py-4 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-all transform hover:scale-105 border-2 border-gray-200"
                >
                  Crear Nuevo QR
                </button>
              </div>
            </div>

            {/* Anuncio después del QR */}
            <div className="mt-8">
              <AdBanner />
            </div>
          </div>
        )}

        {/* Sección de donación - Solo cuando no hay QR */}
        {!qrValue && <DonationSection />}

        {/* Footer Info cuando no hay QR */}
        {!qrValue && (
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 text-gray-500 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Los QR generados nunca caducan y son 100% gratuitos</span>
            </div>
          </div>
        )}

        {/* Footer con firma A19 */}
        <FooterA19 />

        {/* Badge flotante A19 */}
        <BadgeA19 />
      </div>
    </div>
  );
}
