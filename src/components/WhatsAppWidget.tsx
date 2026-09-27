import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppWidget: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const phoneNumber = '525584329000';
  const defaultMessage = encodeURIComponent(
    'Hola, deseo solicitar asesoría inmobiliaria patrimonial con PROMOMEX.'
  );
  const waUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <aside
      aria-label="Atención por WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Descriptive Tooltip */}
      <div
        className={`absolute right-16 bg-[#071A2B]/90 backdrop-blur-xl text-[#F7F4EC] text-xs py-2.5 px-4 rounded-2xl border border-white/[0.12] shadow-2xl shadow-black/60 whitespace-nowrap transition-all duration-300 pointer-events-none ${
          showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        <span className="font-semibold text-[#C6A052] block text-[11px] uppercase tracking-wider">Atención Inmediata</span>
        <span className="text-white/90">Hablar con un asesor patrimonial vía WhatsApp</span>
      </div>

      {/* Floating Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar a PROMOMEX por WhatsApp"
        className="relative group w-14 h-14 rounded-full bg-gradient-to-tr from-[#25D366] to-[#128C7E] text-white flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 ring-2 ring-[#C6A052]/50 hover:ring-[#C6A052]"
      >
        {/* Subtle Pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping opacity-75 pointer-events-none" />

        <MessageCircle className="w-7 h-7 fill-white stroke-[#25D366]" />
      </a>
    </aside>
  );
};
