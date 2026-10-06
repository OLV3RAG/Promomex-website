import React, { useState, useEffect, useRef } from 'react';
import promomexOfficialLogo from '../PROMOMEX 1.svg';

interface IntroLoaderProps {
  onComplete?: () => void;
}

export const IntroLoader: React.FC<IntroLoaderProps> = ({ onComplete }) => {
  // Cronología secuencial:
  // 0.0s – 1.8s: Trazo vectorial de la letra "P" desde su origen
  // 1.8s – 3.4s: Trazo vectorial de la silueta de la "M" central (vértice, llave y casa)
  // ~3.5s: Fade-in suave del relleno completo y de la frase de bienvenida
  // 5.2s: Fade-out suave de la pantalla de carga completa (opacity-0, duration-700)
  // 5.9s: Desmontaje absoluto del DOM (return null)
  const [showFullFill, setShowFullFill] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const timersRef = useRef<number[]>([]);

  useEffect(() => {
    // A los 3.5s: Fade-in del logo completo y frase
    const t1 = window.setTimeout(() => {
      setShowFullFill(true);
    }, 3500);

    // A los 5.2s: Fade-out suave de la pantalla completa (700ms)
    const t2 = window.setTimeout(() => {
      setIsFading(true);
    }, 5200);

    // A los 5.9s: Desmontaje definitivo del DOM
    const t3 = window.setTimeout(() => {
      setIsFinished(true);
      if (onComplete) onComplete();
    }, 5900);

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
      {/* Resplandor radial de fondo sutil */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[#C6A052]/10 blur-[130px] pointer-events-none" />

      {/* Centro Absoluto */}
      <div className="flex flex-col items-center justify-center text-center px-4 w-full relative z-10">
        
        {/* Contenedor del Isotipo Vectorial (Aspect-Square Responsivo) */}
        <div className="w-64 max-w-[70vw] md:w-80 lg:w-96 max-w-md aspect-square relative flex items-center justify-center">
          
          {/* 1. Trazado Vectorial Secuencial Nativo SVG (P: 0s-1.8s, M: 1.8s-3.4s) */}
          <svg
            viewBox="0 0 400 400"
            className="w-full h-full absolute inset-0 pointer-events-none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Gradiente de trazo en oro corporativo */}
              <linearGradient id="goldStrokeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF2C2" />
                <stop offset="50%" stopColor="#C6A052" />
                <stop offset="100%" stopColor="#9B7832" />
              </linearGradient>

              {/* Resplandor dorado sutil en la punta del trazo */}
              <filter id="goldGlow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* FASE 1 (0s a 1.8s): Trazo de la letra "P" desde su origen (curva y asta vertical izquierda) */}
            <g filter="url(#goldGlow)">
              {/* Asta vertical izquierda de la P */}
              <path
                d="M 112 180 L 112 300"
                stroke="url(#goldStrokeGrad)"
                strokeWidth="3.5"
                strokeLinecap="round"
                className="animate-draw-p"
              />
              {/* Curva y bucle superior de la P */}
              <path
                d="M 112 180 H 156 C 176 180 186 192 186 210 C 186 228 176 240 156 240 H 112"
                stroke="url(#goldStrokeGrad)"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-draw-p"
              />
            </g>

            {/* FASE 2 (1.8s a 3.4s): Trazo de la silueta de la "M" central (vértice, llave y geometría de la casa) */}
            <g filter="url(#goldGlow)">
              {/* Geometría exterior de la casa y frontón arquitectónico */}
              <path
                d="M 200 45 L 340 145 L 320 160 L 200 75 L 80 160 L 60 145 Z"
                stroke="url(#goldStrokeGrad)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-draw-m"
              />
              <path
                d="M 72 155 L 72 325 L 328 325 L 328 155"
                stroke="url(#goldStrokeGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-draw-m"
              />
              <line
                x1="52"
                y1="325"
                x2="348"
                y2="325"
                stroke="url(#goldStrokeGrad)"
                strokeWidth="3"
                strokeLinecap="round"
                className="animate-draw-m"
              />

              {/* Silueta central de la M */}
              <path
                d="M 226 300 L 226 185 L 258 242 L 290 185 L 290 300"
                stroke="url(#goldStrokeGrad)"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-draw-m"
              />

              {/* Llave central patrimonial en el vértice */}
              <circle
                cx="200"
                cy="150"
                r="20"
                stroke="url(#goldStrokeGrad)"
                strokeWidth="2.5"
                className="animate-draw-m"
              />
              <circle
                cx="200"
                cy="150"
                r="8"
                stroke="url(#goldStrokeGrad)"
                strokeWidth="1.5"
                className="animate-draw-m"
              />
              <line
                x1="200"
                y1="170"
                x2="200"
                y2="295"
                stroke="url(#goldStrokeGrad)"
                strokeWidth="3"
                strokeLinecap="round"
                className="animate-draw-m"
              />
              <path
                d="M 200 258 H 222 M 200 282 H 224"
                stroke="url(#goldStrokeGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="animate-draw-m"
              />
            </g>
          </svg>

          {/* 2. Fade-In suave del logotipo completo con su relleno y acabados (~3.5s) */}
          <div
            className={`absolute inset-0 flex items-center justify-center p-3 transition-opacity duration-700 ease-out ${
              showFullFill ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={promomexOfficialLogo}
              alt="Promomex"
              className="w-full h-full object-contain block select-none pointer-events-none filter drop-shadow-[0_4px_24px_rgba(198,160,82,0.4)]"
            />
          </div>
        </div>

        {/* 3. Frase de Bienvenida (~3.5s): Fade-In suave */}
        <div
          className={`flex flex-col items-center mt-6 md:mt-8 transition-opacity duration-700 ease-out px-4 ${
            showFullFill ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          {/* Separador fino en oro */}
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

      {/* Botón Saltar Intro */}
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
