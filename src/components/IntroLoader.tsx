import React, { useState, useEffect, useRef } from 'react';
import promomexOfficialLogo from '../PROMOMEX 1.svg';

interface IntroLoaderProps {
  onComplete?: () => void;
}

export const IntroLoader: React.FC<IntroLoaderProps> = ({ onComplete }) => {
  // Cronología expandida para apreciación pausada:
  // 0.0s – 2.6s: Trazo pausado de la letra "P" (duración: 2.6s)
  // 2.6s – 5.4s: Trazo continuo de la "M", llave central y casa (duración: 2.8s)
  // 5.4s – 6.2s: Momento de fijación (0.8s): figura armada visible y quieta en dorado
  // 6.2s – 8.5s: Entrada de la frase (fade-in 1.2s) y tiempo de lectura tranquila
  // 8.5s: Fade-out suave de toda la pantalla (700ms)
  // 9.2s: Desmontaje definitivo del DOM (return null)
  const [showFullLogo, setShowFullLogo] = useState(false);
  const [showPhrase, setShowPhrase] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const timersRef = useRef<number[]>([]);

  useEffect(() => {
    // 1. Segundo 5.4: Momento de fijación, figura armada en dorado quieta
    const t1 = window.setTimeout(() => {
      setShowFullLogo(true);
    }, 5400);

    // 2. Segundo 6.2: Entrada suave de la frase de bienvenida (fade-in 1.2s)
    const t2 = window.setTimeout(() => {
      setShowPhrase(true);
    }, 6200);

    // 3. Segundo 8.5: Fade-out suave de toda la pantalla de carga (duración: 700ms)
    const t3 = window.setTimeout(() => {
      setIsFading(true);
    }, 8500);

    // 4. Segundo 9.2: Desmontaje total del componente
    const t4 = window.setTimeout(() => {
      setIsFinished(true);
      if (onComplete) onComplete();
    }, 9200);

    timersRef.current = [t1, t2, t3, t4];

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
      {/* Resplandor radial de fondo sutil en Navy/Oro */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-[#C6A052]/10 blur-[140px] pointer-events-none" />

      {/* Botón Saltar Intro (Siempre accesible con z-index alto en la esquina) */}
      <button
        type="button"
        onClick={handleSkip}
        className="absolute top-6 right-6 md:top-8 md:right-8 z-50 text-xs tracking-widest text-[#C6A052]/80 hover:text-[#C6A052] transition-colors duration-200 py-2.5 px-5 rounded-full border border-white/10 hover:border-[#C6A052]/50 bg-white/[0.03] hover:bg-white/[0.08] cursor-pointer active:scale-95 shadow-lg backdrop-blur-sm"
      >
        SALTAR INTRO
      </button>

      {/* Centro Absoluto Vertical y Horizontal */}
      <div className="flex flex-col items-center justify-center text-center px-4 w-full relative z-10">
        
        {/* Contenedor del Isotipo Vectorial (Aspect-Square Responsivo) */}
        <div className="w-64 max-w-[70vw] md:w-80 lg:w-96 max-w-md aspect-square relative flex items-center justify-center">
          
          {/* Trazado Vectorial Secuencial Nativo SVG (P: 0s-2.6s | M: 2.6s-5.4s) */}
          <svg
            viewBox="0 0 400 400"
            className="w-full h-full absolute inset-0 pointer-events-none drop-shadow-[0_0_14px_rgba(198,160,82,0.45)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Gradiente de trazo en oro corporativo intenso */}
              <linearGradient id="goldStrokeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF4D0" />
                <stop offset="45%" stopColor="#C6A052" />
                <stop offset="100%" stopColor="#9E782E" />
              </linearGradient>

              {/* Resplandor dorado pronunciado (glow con rgba(198,160,82,0.4)) */}
              <filter id="goldGlow" x="-40%" y="-40%" width="180%" height="180%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* FASE 1 (0.0s a 2.6s): Trazo visible y nítido de la letra "P" */}
            <g filter="url(#goldGlow)">
              {/* Asta vertical de la P */}
              <path
                d="M 112 180 L 112 300"
                stroke="url(#goldStrokeGrad)"
                strokeWidth="4.5"
                strokeLinecap="round"
                className="animate-draw-p"
              />
              {/* Bucle superior curvo de la P */}
              <path
                d="M 112 180 H 156 C 176 180 186 192 186 210 C 186 228 176 240 156 240 H 112"
                stroke="url(#goldStrokeGrad)"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-draw-p"
              />
            </g>

            {/* FASE 2 (2.6s a 5.4s): Trazo de la silueta "M", la llave central y la casa */}
            <g filter="url(#goldGlow)">
              {/* Frontón y geometría de la casa */}
              <path
                d="M 200 45 L 340 145 L 320 160 L 200 75 L 80 160 L 60 145 Z"
                stroke="url(#goldStrokeGrad)"
                strokeWidth="3.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-draw-m"
              />
              <path
                d="M 72 155 L 72 325 L 328 325 L 328 155"
                stroke="url(#goldStrokeGrad)"
                strokeWidth="3.2"
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
                strokeWidth="3.8"
                strokeLinecap="round"
                className="animate-draw-m"
              />

              {/* Silueta central de la M */}
              <path
                d="M 226 300 L 226 185 L 258 242 L 290 185 L 290 300"
                stroke="url(#goldStrokeGrad)"
                strokeWidth="4.5"
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
                strokeWidth="3.2"
                className="animate-draw-m"
              />
              <circle
                cx="200"
                cy="150"
                r="8"
                stroke="url(#goldStrokeGrad)"
                strokeWidth="2.2"
                className="animate-draw-m"
              />
              <line
                x1="200"
                y1="170"
                x2="200"
                y2="295"
                stroke="url(#goldStrokeGrad)"
                strokeWidth="3.8"
                strokeLinecap="round"
                className="animate-draw-m"
              />
              <path
                d="M 200 258 H 222 M 200 282 H 224"
                stroke="url(#goldStrokeGrad)"
                strokeWidth="3.2"
                strokeLinecap="round"
                className="animate-draw-m"
              />
            </g>
          </svg>

          {/* Momento de Fijación (5.4s): Logo completo quieto en dorado (#C6A052) */}
          <div
            className={`absolute inset-0 flex items-center justify-center p-3 transition-opacity duration-700 ease-out ${
              showFullLogo ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={promomexOfficialLogo}
              alt="Promomex"
              className="w-full h-full object-contain block select-none pointer-events-none filter drop-shadow-[0_4px_28px_rgba(198,160,82,0.5)]"
            />
          </div>
        </div>

        {/* Frase de Bienvenida (Entra a los 6.2s con fade-in suave de 1.2s) */}
        <div
          className={`flex flex-col items-center mt-6 md:mt-8 transition-opacity duration-[1200ms] ease-out px-4 ${
            showPhrase ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          {/* Divisor sutil en oro */}
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
