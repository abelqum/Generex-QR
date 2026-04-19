export const metadata = {
  title: "Términos de Servicio | Generex",
  description: "Términos de uso del generador de códigos QR Generex.",
};

export default function Terminos() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6">Términos de Servicio</h1>

        <p className="text-gray-600 mb-6">
          Última actualización: {new Date().toLocaleDateString("es-MX")}
        </p>

        <div className="space-y-5 text-gray-700 leading-relaxed">
          <p>
            Bienvenido a <strong>Generex</strong>. Al acceder y utilizar esta
            aplicación, aceptas cumplir con estos términos de servicio. Si no
            estás de acuerdo con alguno de ellos, te recomendamos no utilizar la
            plataforma.
          </p>

          <h2 className="text-xl font-semibold mt-6">1. Uso del servicio</h2>
          <p>
            Generex es una herramienta para generar códigos QR. El usuario es
            responsable del contenido que convierte y del uso que haga de los
            códigos generados, debiendo cumplir con la legislación aplicable.
          </p>

          <h2 className="text-xl font-semibold mt-6">
            2. Responsabilidad del usuario
          </h2>
          <p>
            Eres completamente responsable del contenido que decides convertir
            en códigos QR. No debes utilizar Generex para generar códigos que
            redirijan a contenido ilegal, fraudulento, malicioso o que infrinja
            derechos de terceros.
          </p>

          <h2 className="text-xl font-semibold mt-6">
            3. Disponibilidad del servicio
          </h2>
          <p>
            El servicio se proporciona &quot;tal cual&quot; y &quot;según
            disponibilidad&quot;. No garantizamos que la aplicación esté libre
            de errores, interrupciones o fallos en todo momento.
          </p>

          <h2 className="text-xl font-semibold mt-6">
            4. Limitación de responsabilidad
          </h2>
          <p>
            Generex no se hace responsable por el uso indebido de los códigos QR
            generados, ni por daños directos o indirectos derivados de su uso.
          </p>

          <h2 className="text-xl font-semibold mt-6">
            5. Propiedad intelectual
          </h2>
          <p>
            El diseño, marca y funcionamiento de Generex son propiedad del
            desarrollador. El código de la aplicación no es de acceso público ni
            open source.
          </p>

          <h2 className="text-xl font-semibold mt-6">
            6. Cambios en los términos
          </h2>
          <p>
            Nos reservamos el derecho de modificar estos términos en cualquier
            momento. Los cambios entrarán en vigor inmediatamente después de su
            publicación.
          </p>

          <h2 className="text-xl font-semibold mt-6">7. Contacto</h2>
          <p>
            Si tienes dudas sobre estos términos, puedes contactar a través de
            los medios disponibles en la plataforma.
          </p>
        </div>
      </div>
    </div>
  );
}
