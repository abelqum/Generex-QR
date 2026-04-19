export const metadata = {
  title: "Política de Privacidad | Generex",
  description: "Política de privacidad del generador de QR Generex.",
};

export default function Privacidad() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6">Política de Privacidad</h1>

        <p className="text-gray-600 mb-6">
          Última actualización: {new Date().toLocaleDateString("es-MX")}
        </p>

        <div className="space-y-5 text-gray-700 leading-relaxed">
          <p>
            En <strong>Generex</strong>, tu privacidad es importante. Esta
            política explica cómo manejamos la información dentro de nuestra
            aplicación.
          </p>

          <h2 className="text-xl font-semibold mt-6">
            1. Información que no recopilamos
          </h2>
          <p>
            Generex funciona completamente del lado del cliente (en tu
            navegador). No almacenamos, guardamos ni enviamos a servidores el
            contenido que conviertes en códigos QR. Tampoco recopilamos datos
            personales como nombres, correos electrónicos o información
            sensible.
          </p>

          <h2 className="text-xl font-semibold mt-6">2. Procesamiento local</h2>
          <p>
            Todo el proceso de generación de códigos QR se realiza directamente
            en tu dispositivo. Esto garantiza un alto nivel de privacidad y
            seguridad para el usuario.
          </p>

          <h2 className="text-xl font-semibold mt-6">
            3. Publicidad de terceros
          </h2>
          <p>
            Utilizamos servicios de terceros como Google AdSense para mostrar
            anuncios. Estos servicios pueden usar cookies o tecnologías
            similares para mostrar anuncios relevantes basados en tus intereses.
          </p>

          <p>
            Puedes obtener más información o gestionar tus preferencias en{" "}
            <a
              href="https://adssettings.google.com"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              Configuración de anuncios de Google
            </a>
            .
          </p>

          <h2 className="text-xl font-semibold mt-6">4. Cookies</h2>
          <p>
            Generex no utiliza cookies propias. Sin embargo, los servicios de
            terceros como Google pueden utilizar cookies para personalización de
            anuncios y análisis.
          </p>

          <h2 className="text-xl font-semibold mt-6">5. Seguridad</h2>
          <p>
            Aunque no almacenamos datos, aplicamos buenas prácticas para
            asegurar que la aplicación sea segura y confiable para los usuarios.
          </p>

          <h2 className="text-xl font-semibold mt-6">
            6. Cambios en esta política
          </h2>
          <p>
            Esta política puede actualizarse ocasionalmente. Se recomienda
            revisar esta página periódicamente para estar informado de cualquier
            cambio.
          </p>

          <h2 className="text-xl font-semibold mt-6">7. Contacto</h2>
          <p>
            Si tienes preguntas sobre esta política, puedes comunicarte a través
            de los medios disponibles en la aplicación.
          </p>
        </div>
      </div>
    </div>
  );
}
