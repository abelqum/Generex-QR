export default function Terminos() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6">Términos de Servicio</h1>
        <p className="text-gray-600 mb-4">
          Última actualización: {new Date().toLocaleDateString("es-MX")}
        </p>

        <div className="space-y-4 text-gray-700">
          <p>
            Al usar Generex, aceptas estos términos. El servicio se proporciona
            tal cual sin garantías.
          </p>
          <p>
            Eres responsable del contenido que conviertes en QR. No nos hacemos
            responsables por el mal uso de los códigos generados.
          </p>
        </div>
      </div>
    </div>
  );
}
