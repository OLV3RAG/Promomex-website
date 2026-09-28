import React, { useState, useEffect, useRef } from 'react';
import promomexOfficialLogo from '../PROMOMEX 1.svg';

interface IntroLoaderProps {
  onComplete?: () => void;
}

export const IntroLoader: React.FC<IntroLoaderProps> = ({ onComplete }) => {
  // Estados discretos (sin re-renders continuos ni requestAnimationFrame):
  const [showPhrase, setShowPhrase] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isSkipping, setIsSkipping] = useState(false);

  // Referencias a los timers para limpieza segura
  const timersRef = useRef<number[]>([]);

  useEffect(() => {
    // 1. A los 3.2s: Aparece la frase con fade-in (0.8s)
    const t1 = window.setTimeout(() => {
      setShowPhrase(true);
    }, 3200);

    // 2. A los 5.0s: Fade-out completo de la pantalla completa (600ms)
    const t2 = window.setTimeout(() => {
      setIsFading(true);
    }, 5000);

    // 3. A los 5.6s: Desmontaje absoluto del DOM
    const t3 = window.setTimeout(() => {
      setIsFinished(true);
      if (onComplete) onComplete();
    }, 5600);

    timersRef.current = [t1, t2, t3];

    return () => {
      timersRef.current.forEach((t) => window.clearTimeout(t));
    };
  }, [onComplete]);

  // Salto rápido en 200ms si el usuario presiona "Saltar intro"
  const handleSkip = () => {
    timersRef.current.forEach((t) => window.clearTimeout(t));
    setIsSkipping(true);
    window.setTimeout(() => {
      setIsFinished(true);
      if (onComplete) onComplete();
    }, 200);
  };

  // Desmontaje total del DOM para liberar memoria y evitar empalmes
  if (isFinished) {
    return null;
  }

  return (
    <aside
      aria-label="Pantalla de bienvenida PROMOMEX"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#071A2B] text-[#F7F4EC] select-none transition-opacity ${
        isSkipping
          ? 'duration-200 opacity-0 pointer-events-none'
          : isFading
          ? 'duration-[600ms] opacity-0 pointer-events-none'
          : 'opacity-100'
      }`}
    >
      {/* Contenedor Centrado */}
      <div className="flex flex-col items-center text-center px-6 max-w-xl w-full">
        {/* Contenedor relativo con overflow-hidden y dimensiones fijas para el logo */}
        <div className="relative overflow-hidden w-64 sm:w-72 md:w-80 h-auto flex items-center justify-center">
          {/* Logo estático sin recalcular el árbol DOM SVG */}
          <img
            src={promomexOfficialLogo}
            alt="Promomex"
            className="w-64 sm:w-72 md:w-80 h-auto block select-none pointer-events-none filter drop-shadow-[0_4px_16px_rgba(198,160,82,0.25)]"
          />

          {/* Cortina oscura acelerada 100% por GPU (0.0s – 3.2s) */}
          <div className="absolute inset-0 bg-[#071A2B] pointer-events-none animate-reveal-up">
            {/* Línea dorada inferior que descubre el logo de abajo hacia arriba */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C6A052] to-transparent shadow-[0_0_8px_#C6A052]" />
          </div>
        </div>

        {/* Frase: aparece a los 3.2s con fade-in (opacity: 0 -> 1) en 0.8s */}
        <div
          className={`flex flex-col items-center mt-6 transition-opacity duration-[800ms] ease-out ${
            showPhrase ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          {/* Divisor sutil */}
          <div className="flex items-center gap-3 w-36 mb-3">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C6A052]/70" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6A052]" />
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#C6A052]/70" />
          </div>

          <p className="font-display text-xs sm:text-sm md:text-base font-semibold tracking-[0.16em] uppercase text-[#F7F4EC] text-center max-w-md leading-relaxed">
            «BIENVENIDO, DESCUBRE LA CASA DE TUS SUEÑOS»
          </p>

          <span className="text-[10px] tracking-[0.25em] uppercase text-[#C6A052] font-semibold mt-2">
            Inmobiliaria Patrimonial
          </span>
        </div>
      </div>

      {/* Botón Saltar Intro (dentro del contenedor z-[100] para desvanecerse en conjunto) */}
      <button
        type="button"
        onClick={handleSkip}
        className="absolute bottom-8 right-8 text-xs tracking-widest text-[#C6A052]/80 hover:text-[#C6A052] transition-colors duration-200 py-2 px-4 rounded-full border border-white/10 hover:border-[#C6A052]/50 bg-white/[0.03] hover:bg-white/[0.08] cursor-pointer active:scale-95 z-[101]"
      >
        SALTAR INTRO
      </button>
    </aside>
  );
};
