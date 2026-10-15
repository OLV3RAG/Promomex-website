import React, { useState, useEffect, useRef } from 'react';
import promomexOfficialLogo from '../PROMOMEX 1.svg';

interface IntroLoaderProps {
  onComplete?: () => void;
}

export const IntroLoader: React.FC<IntroLoaderProps> = ({ onComplete }) => {
  // Cronología Apple-style Golden Light Sweep:
  // 0.0s: Logo visible en tono dorado tenue sobre #071A2B
  // 0.8s – 3.2s: Haz de luz dorada brillante recorre diagonalmente la "P", luego la "M" y la llave
  // 1.8s: El logo se enciende en su brillo dorado metálico definitivo
  // 3.0s: Destello sutil (lens flare / twinkle) que corona el vértice de la "M"
  // 3.2s: Entrada con fade-in y ligero desplazamiento hacia arriba de la frase de bienvenida
  // 3.2s – 5.2s: Lectura limpia de 2.0 segundos
  // 5.2s: Fade-out suave de toda la pantalla (duración: 700ms)
  // 5.9s: Desmontaje definitivo del DOM (return null)
  const [isIgnited, setIsIgnited] = useState(false);
  const [showFlare, setShowFlare] = useState(false);
  const [showPhrase, setShowPhrase] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const timersRef = useRef<number[]>([]);

  useEffect(() => {
    // 1. A los 1.8s: El brillo metálico del logotipo se enciende a medida que el haz avanza
    const t1 = window.setTimeout(() => {
      setIsIgnited(true);
    }, 1800);

    // 2. A los 3.0s: Destello sutil (lens flare) en la corona del isotipo
    const t2 = window.setTimeout(() => {
      setShowFlare(true);
    }, 3000);

    // 3. A los 3.2s: Entrada de la frase de bienvenida
    const t3 = window.setTimeout(() => {
      setShowPhrase(true);
    }, 3200);

    // 4. A los 5.2s: Fade-out suave de la pantalla completa (700ms)
    const t4 = window.setTimeout(() => {
      setIsFading(true);
    }, 5200);

    // 5. A los 5.9s: Desmontaje total del componente
    const t5 = window.setTimeout(() => {
      setIsFinished(true);
      if (onComplete) onComplete();
    }, 5900);

    timersRef.current = [t1, t2, t3, t4, t5];

    return () => {
      timersRef.current.forEach((t) => window.clearTimeout(t));
    };
  }, [onComplete]);

  // Salto rápido en 200ms si el usuario pulsa "Saltar intro"
  const handleSkip = () => {
    timersRef.current.forEach((t) => window.clearTimeout(t));
    setIsFading(true);
    window.setTimeout(() => {
      setIsFinished(true);
      if (onComplete) onComplete();
    }, 200);
  };

  if (isFinished) {
    return null;
  }

  return (
    <aside
      aria-label="Pantalla de bienvenida PROMOMEX"
      className={`fixed inset-0 w-screen h-screen z-50 flex flex-col items-center justify-center bg-[#071A2B] text-[#F7F4EC] select-none transition-opacity duration-700 ease-out transform-gpu will-change-transform ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Resplandor radial de fondo cinematográfico */}
      <div className="absolute w-[640px] h-[640px] rounded-full bg-[#C6A052]/10 blur-[150px] pointer-events-none transform-gpu translate-z-0" />

      {/* Botón Saltar Intro (Siempre accesible en la esquina superior) */}
      <button
        type="button"
        onClick={handleSkip}
        className="absolute top-6 right-6 md:top-8 md:right-8 z-50 text-xs tracking-widest text-[#C6A052]/80 hover:text-[#C6A052] transition-colors duration-200 py-2.5 px-5 rounded-full border border-white/10 hover:border-[#C6A052]/50 bg-white/[0.03] hover:bg-white/[0.08] cursor-pointer active:scale-95 shadow-lg backdrop-blur-sm transform-gpu"
      >
        SALTAR INTRO
      </button>

      {/* Centro Absoluto Vertical y Horizontal */}
      <div className="flex flex-col items-center justify-center text-center px-4 w-full relative z-10">
        
        {/* Contenedor del Logotipo con Revelado por Haz de Luz (Aspect-Square) */}
        <div className="w-64 max-w-[70vw] md:w-80 lg:w-96 max-w-md aspect-square relative flex items-center justify-center overflow-hidden rounded-2xl transform-gpu will-change-transform">
          
          {/* Capa 1: Logotipo en tono dorado tenue y elegante inicial */}
          <img
            src={promomexOfficialLogo}
            alt="Promomex"
            className="w-full h-full object-contain block select-none pointer-events-none p-3 filter brightness-[0.38] saturate-[0.8] contrast-125 opacity-70 transition-opacity duration-1000 transform-gpu"
          />

          {/* Capa 2: Logotipo encendido en brillo metálico dorado definitivo */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-out pointer-events-none transform-gpu ${
              isIgnited ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={promomexOfficialLogo}
              alt="Promomex Dorado"
              className="w-full h-full object-contain block select-none pointer-events-none p-3 filter drop-shadow-[0_4px_30px_rgba(198,160,82,0.65)] brightness-105 transform-gpu"
            />
          </div>

          {/* Capa 3: Haz de Luz Dorada Brillante (Golden Light Sweep diagonal estilo Apple) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl transform-gpu">
            <div className="absolute -top-1/2 -bottom-1/2 w-48 bg-gradient-to-r from-transparent via-[#FFF7DB]/80 to-transparent blur-[6px] shadow-[0_0_40px_rgba(255,247,219,0.9)] animate-light-sweep transform-gpu" />
          </div>

          {/* Capa 4: Destello Sutil (Lens Flare / Twinkle) en el vértice superior de la 'M' / corona */}
          {showFlare && (
            <div className="absolute top-[8%] left-1/2 -translate-x-1/2 pointer-events-none transform-gpu z-20">
              <svg
                viewBox="0 0 100 100"
                className="w-12 h-12 text-[#FFF7DB] animate-flare-twinkle"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Rayos en estrella del destello */}
                <path
                  d="M 50 0 C 50 28 28 50 0 50 C 28 50 50 72 50 100 C 50 72 72 50 100 50 C 72 50 50 28 50 0 Z"
                  fill="url(#sparkleGrad)"
                />
                <circle cx="50" cy="50" r="14" fill="#FFFFFF" />
                <defs>
                  <radialGradient id="sparkleGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="45%" stopColor="#FFF2BF" />
                    <stop offset="85%" stopColor="#C6A052" />
                    <stop offset="100%" stopColor="transparent" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          )}
        </div>

        {/* Frase de Bienvenida: entra a los 3.2s con fade-in y desplazamiento sutil hacia arriba */}
        <div
          className={`flex flex-col items-center mt-6 md:mt-8 transition-all duration-1000 ease-out px-4 transform-gpu will-change-transform ${
            showPhrase
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-3 pointer-events-none'
          }`}
        >
          {/* Separador fino en oro */}
          <div className="flex items-center gap-3 w-32 md:w-48 mb-3">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C6A052]/80" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6A052] shadow-[0_0_8px_#C6A052]" />
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
    </aside>
  );
};
