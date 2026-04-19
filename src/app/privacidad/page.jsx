export const metadata = {
  title: "Política de Privacidad | Generex",
  description: "Política de privacidad del generador de QR Generex.",
};

export default function Privacidad() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6">Política de Privacidad</h1>
        <p className="text-gray-600 mb-4">
          Última actualización: {new Date().toLocaleDateString("es-MX")}
        </p>

        <div className="space-y-4 text-gray-700">
          <p>
            En <strong>Generex</strong>, respetamos tu privacidad. Esta política
            explica qué datos manejamos.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            1. Información que NO recopilamos
          </h2>
          <p>
            Generex es una herramienta 100% del lado del cliente.{" "}
            <strong>No almacenamos, guardamos ni transmitimos</strong> el texto
            que conviertes en QR ni ningún dato personal. Todo el proceso ocurre
            en tu navegador.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">
            2. Anuncios de Terceros
          </h2>
          <p>
            Utilizamos Google AdSense para mostrar anuncios. Google puede usar
            cookies para mostrar anuncios personalizados. Puedes deshabilitar la
            personalización en{" "}
            <a
              href="https://adssettings.google.com"
              className="text-blue-600 hover:underline"
            >
              Configuración de anuncios de Google
            </a>
            .
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">3. Cookies</h2>
          <p>
            Google AdSense utiliza cookies para mejorar la relevancia de los
            anuncios. Al usar Generex, aceptas el uso de estas cookies.
          </p>
        </div>
      </div>
    </div>
  );
}
