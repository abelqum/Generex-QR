"use client";

export default function AdBanner() {
  return (
    <div className="my-6 flex justify-center">
      <div className="max-w-4xl w-full">
        <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <p className="text-gray-400 text-sm">📢 Espacio publicitario</p>
          <p className="text-gray-300 text-xs mt-1">
            AdSense pendiente de configuración
          </p>
        </div>
      </div>
    </div>
  );
}
