import React, { useState, useEffect, useRef } from 'react';
import promomexOfficialLogo from '../PROMOMEX 1.svg';

interface IntroLoaderProps {
  onComplete?: () => void;
}

export const IntroLoader: React.FC<IntroLoaderProps> = ({ onComplete }) => {
  // Estados discretos para rendimiento a 60 FPS
  const [showPhrase, setShowPhrase] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  // Referencias a los timers para limpieza segura
  const timersRef = useRef<number[]>([]);

  useEffect(() => {
    // 1. A los 3.2s: Aparece la frase de bienvenida
    const t1 = window.setTimeout(() => {
      setShowPhrase(true);
    }, 3200);

    // 2. A los 5.0s: Inicia el fade-out suave de toda la pantalla (duración 700ms)
    const t2 = window.setTimeout(() => {
      setIsFading(true);
    }, 5000);

    // 3. A los 5.7s: Desmontaje inmediato del DOM
    const t3 = window.setTimeout(() => {
      setIsFinished(true);
      if (onComplete) onComplete();
    }, 5700);

    timersRef.current = [t1, t2, t3];

    return () => {
      timersRef.current.forEach((t) => window.clearTimeout(t));
    };
  }, [onComplete]);

  // Salto inmediato si el usuario pulsa "Saltar intro"
  const handleSkip = () => {
    timersRef.current.forEach((t) => window.clearTimeout(t));
    setIsFading(true);
    window.setTimeout(() => {
      setIsFinished(true);
      if (onComplete) onComplete();
    }, 200);
  };

  // Desmontaje total del componente para liberar memoria
  if (isFinished) {
    return null;
  }

  return (
    <aside
      aria-label="Pantalla de bienvenida PROMOMEX"
      className={`fixed inset-0 w-screen h-screen z-50 flex flex-col items-center justify-center bg-[#071A2B] text-[#F7F4EC] select-none transition-opacity duration-700 ease-out ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Centro Absoluto Vertical y Horizontal */}
      <div className="flex flex-col items-center justify-center text-center px-4 w-full">
        {/* Contenedor del Logo Responsivo y Aspect-Square */}
        <div className="w-64 max-w-[70vw] md:w-80 lg:w-96 max-w-md aspect-square relative overflow-hidden flex items-center justify-center">
          {/* Logo Estático que se adapta a las dimensiones */}
          <img
            src={promomexOfficialLogo}
            alt="Promomex"
            className="w-full h-full object-contain block select-none pointer-events-none p-3"
          />

          {/* Cortina de Revelado Basada en Porcentajes (0% -> -100%) */}
          <div className="absolute inset-0 w-full h-full bg-[#071A2B] pointer-events-none animate-reveal-up border-b-2 border-[#C6A052] shadow-[0_4px_12px_rgba(198,160,82,0.4)]" />
        </div>

        {/* Frase de Bienvenida en Laptop y Móvil */}
        <div
          className={`flex flex-col items-center mt-6 md:mt-8 transition-opacity duration-700 ease-out px-4 ${
            showPhrase ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          {/* Separador fino */}
          <div className="flex items-center gap-3 w-32 md:w-48 mb-3">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C6A052]/80" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6A052]" />
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#C6A052]/80" />
          </div>

          <p className="font-display text-sm md:text-lg lg:text-xl tracking-[0.2em] uppercase font-light text-[#C6A052] text-center max-w-xl leading-relaxed">
            «BIENVENIDO, DESCUBRE LA CASA DE TUS SUEÑOS»
          </p>

          <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#F7F4EC]/60 font-normal mt-2.5">
            Arquitectura Patrimonial & Certeza Inmobiliaria
          </span>
        </div>
      </div>

      {/* Botón Saltar Intro (Ubicación fija sin empalmarse) */}
      <button
        type="button"
        onClick={handleSkip}
        className="absolute bottom-6 inset-x-0 mx-auto w-fit md:bottom-8 md:right-8 md:inset-x-auto text-xs tracking-widest text-[#C6A052]/80 hover:text-[#C6A052] transition-colors duration-200 py-2.5 px-5 rounded-full border border-white/10 hover:border-[#C6A052]/50 bg-white/[0.03] hover:bg-white/[0.08] cursor-pointer active:scale-95 z-10"
      >
        SALTAR INTRO
      </button>
    </aside>
  );
};
