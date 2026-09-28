import React, { useState, useEffect } from 'react';
import promomexOfficialLogo from '../PROMOMEX 1.svg';

interface IntroLoaderProps {
  onComplete?: () => void;
}

export const IntroLoader: React.FC<IntroLoaderProps> = ({ onComplete }) => {
  // Cronología:
  // 0.0s - 4.0s: Revelado del logo con cortina GPU translateY ease-out
  // 4.2s: Entrada de la frase (fade-in + 10px translate-y)
  // 6.0s: Fade-out suave de la pantalla completa (800ms)
  // 6.8s: Desmontaje total del componente (return null)
  const [stage, setStage] = useState<'revealing' | 'phrase' | 'fading' | 'finished'>('revealing');

  useEffect(() => {
    // A los 4.2 segundos: Entrada de la frase
    const phraseTimer = setTimeout(() => {
      setStage('phrase');
    }, 4200);

    // A los 6.0 segundos: Fade-out suave de la pantalla de bienvenida (800ms)
    const fadeTimer = setTimeout(() => {
      setStage('fading');
    }, 6000);

    // A los 6.8 segundos: Desmonta el componente con return null
    const finishTimer = setTimeout(() => {
      setStage('finished');
      if (onComplete) onComplete();
    }, 6800);

    return () => {
      clearTimeout(phraseTimer);
      clearTimeout(fadeTimer);
      clearTimeout(finishTimer);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setStage('finished');
    if (onComplete) onComplete();
  };

  // A los 6.8s (o al pulsar saltar): Desmontaje del DOM para liberar memoria
  if (stage === 'finished') {
    return null;
  }

  const showPhrase = stage === 'phrase' || stage === 'fading';
  const isFading = stage === 'fading';

  return (
    <aside
      aria-label="Pantalla de bienvenida PROMOMEX"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#071A2B] text-[#F7F4EC] select-none transform-gpu will-change-transform translate-z-0 transition-opacity duration-[800ms] ease-out ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background Architectural Grid Lines */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none transform-gpu will-change-transform translate-z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #C6A052 1px, transparent 1px),
            linear-gradient(to bottom, #C6A052 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Atmospheric Gold Radial Glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[#C6A052]/10 blur-[130px] pointer-events-none transform-gpu will-change-transform translate-z-0" />

      {/* Main Centered Container */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-xl w-full">
        {/* Contenedor Fijo con Overflow-Hidden y Aceleración GPU */}
        <div className="relative overflow-hidden w-64 md:w-80 transform-gpu will-change-transform translate-z-0 flex items-center justify-center rounded-2xl p-2">
          {/* Imagen Estática sin recompilación del DOM SVG */}
          <img
            src={promomexOfficialLogo}
            alt="Promomex"
            className="w-64 md:w-80 h-auto block select-none pointer-events-none transform-gpu will-change-transform translate-z-0 filter drop-shadow-[0_4px_24px_rgba(198,160,82,0.3)]"
          />

          {/* Cortina Divisoria Acelerada 100% por GPU (translateY de 0% a -100%) */}
          <div
            className="absolute inset-0 bg-[#071A2B] pointer-events-none transform-gpu will-change-transform translate-z-0 animate-curtain-reveal"
          >
            {/* Línea Divisoria Dorada Ligeramente Luminosa en el Borde Inferior de la Cortina */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C6A052] to-transparent shadow-[0_0_16px_#C6A052]" />
          </div>
        </div>

        {/* Frase de Bienvenida (Entra a los 4.2s con fade-in y desplazamiento sutil de 10px hacia arriba) */}
        <div
          className={`transition-all duration-[1000ms] ease-out transform-gpu will-change-transform translate-z-0 flex flex-col items-center mt-6 ${
            showPhrase
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-[10px] pointer-events-none'
          }`}
        >
          {/* Divisor Sutil en Oro */}
          <div className="flex items-center gap-3 w-40 mb-3">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C6A052]/70" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6A052] shadow-[0_0_8px_#C6A052]" />
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#C6A052]/70" />
          </div>

          {/* Frase en Tipografía Editorial */}
          <p className="font-display text-base sm:text-xl italic text-[#F7F4EC] tracking-wide max-w-md font-light leading-relaxed">
            «Bienvenido, descubre la casa de tus sueños»
          </p>

          <span className="text-[10px] tracking-[0.3em] uppercase text-[#C6A052] font-semibold mt-2">
            Inmobiliaria Patrimonial
          </span>
        </div>
      </div>

      {/* Botón Saltar Intro */}
      <button
        onClick={handleSkip}
        className="absolute bottom-8 right-8 text-xs tracking-widest text-[#C6A052]/70 hover:text-[#C6A052] transition-all duration-300 py-2 px-4 rounded-full border border-white/10 hover:border-[#C6A052]/40 bg-white/[0.02] hover:bg-white/[0.06] cursor-pointer active:scale-95 transform-gpu will-change-transform translate-z-0"
      >
        SALTAR INTRO
      </button>
    </aside>
  );
};
