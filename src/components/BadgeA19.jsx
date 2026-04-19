"use client";

export default function BadgeA19() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-white/95 backdrop-blur-sm shadow-xl px-5 py-2.5 rounded-full border border-gray-200 flex items-center gap-2 hover:shadow-2xl transition-shadow">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <span className="text-sm text-gray-600">Hecho por</span>
        <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          A19
        </span>
      </div>
    </div>
  );
}
