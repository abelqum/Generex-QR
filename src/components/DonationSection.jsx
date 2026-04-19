"use client";

export default function DonationSection() {
  return (
    <div className="mt-8 text-center">
      <button
        className="inline-flex items-center gap-2 bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition-all transform hover:scale-105 shadow-lg opacity-50 cursor-not-allowed"
        disabled
      >
        <span className="text-xl">☕</span>
        <span>Invitame un café (Próximamente)</span>
      </button>
    </div>
  );
}
