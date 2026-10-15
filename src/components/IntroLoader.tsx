import React, { useState, useEffect, useRef } from 'react';

interface IntroLoaderProps {
  onComplete: () => void;
}

export const IntroLoader: React.FC<IntroLoaderProps> = ({ onComplete }) => {
  // Cronología ultra ligera a 60 FPS garantizados:
  // 0.0s – 1.8s: Silueta vectorial limpia en dorado aparece con opacity (0 -> 1) y scale (0.95 -> 1.0)
  // 2.0s: Fade-in suave de la frase «BIENVENIDO, DESCUBRE LA CASA DE TUS SUEÑOS»
  // 3.8s: Salida del loader y montaje del sitio principal con fade-in general de 300ms
  // Saltar intro: Salida inmediata en 0ms
  const [isAppearing, setIsAppearing] = useState(false);
  const [showPhrase, setShowPhrase] = useState(false);

  const timersRef = useRef<number[]>([]);

  useEffect(() => {
    // 1. Inicia inmediatamente la transición suave de escala y opacidad (1.8s)
    const t0 = window.setTimeout(() => {
      setIsAppearing(true);
    }, 50);

    // 2. A los 2.0s: Entrada de la frase de bienvenida
    const t1 = window.setTimeout(() => {
      setShowPhrase(true);
    }, 2000);

    // 3. A los 3.8s: Salida del loader y pase al sitio principal
    const t2 = window.setTimeout(() => {
      onComplete();
    }, 3800);

    timersRef.current = [t0, t1, t2];

    return () => {
      timersRef.current.forEach((t) => window.clearTimeout(t));
    };
  }, [onComplete]);

  // Salida inmediata en 0ms al presionar "Saltar intro"
  const handleInstantSkip = () => {
    timersRef.current.forEach((t) => window.clearTimeout(t));
    onComplete();
  };

  return (
    <aside
      aria-label="Pantalla de bienvenida PROMOMEX"
      className="fixed inset-0 w-screen h-screen z-50 flex flex-col items-center justify-center bg-[#071A2B] text-[#F7F4EC] select-none"
    >
      {/* Botón Saltar Intro Instantáneo (0ms) */}
      <button
        type="button"
        onClick={handleInstantSkip}
        className="absolute top-6 right-6 md:top-8 md:right-8 z-50 text-xs tracking-widest text-[#C6A052]/90 hover:text-[#C6A052] py-2 px-4 rounded-full border border-white/10 hover:border-[#C6A052]/60 bg-white/[0.04] hover:bg-white/[0.08] cursor-pointer active:scale-95 transition-colors"
      >
        SALTAR INTRO
      </button>

      {/* Centro Absoluto */}
      <div className="flex flex-col items-center justify-center text-center px-4 w-full">
        {/* Contenedor del Logo con Transición Pura de Escala y Opacidad (0 -> 1, 0.95 -> 1.0, 1.8s) */}
        <div
          className={`w-60 md:w-72 max-w-[240px] md:max-w-[300px] aspect-square flex items-center justify-center transition-all duration-[1800ms] ease-out transform-gpu ${
            isAppearing ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{
            willChange: 'transform, opacity',
            transform: 'translateZ(0)',
          }}
        >
          {/* Silueta Vectorial Limpia y Minimalista en Oro Corporativo (#C6A052) sin texturas ni filtros pesados */}
          <svg
            viewBox="0 0 400 400"
            className="w-full h-full select-none pointer-events-none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Frontón Arquitectónico de la Casa */}
            <path
              d="M 60 145 L 200 45 L 340 145"
              stroke="#C6A052"
              strokeWidth="5.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 80 155 L 200 70 L 320 155"
              stroke="#C6A052"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Columnas Exteriores y Basamento */}
            <path
              d="M 72 155 L 72 315 L 328 315 L 328 155"
              stroke="#C6A052"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line
              x1="52"
              y1="315"
              x2="348"
              y2="315"
              stroke="#C6A052"
              strokeWidth="5.5"
              strokeLinecap="round"
            />

            {/* Letra 'P' Arquitectónica */}
            <path
              d="M 112 180 L 112 290 M 112 180 H 154 C 170 180 180 192 180 208 C 180 224 170 236 154 236 H 112"
              stroke="#C6A052"
              strokeWidth="5.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Letra 'M' Arquitectónica */}
            <path
              d="M 226 290 L 226 180 L 256 236 L 286 180 L 286 290"
              stroke="#C6A052"
              strokeWidth="5.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Llave Central Patrimonial en el Vértice */}
            <circle cx="200" cy="148" r="18" stroke="#C6A052" strokeWidth="4.5" />
            <circle cx="200" cy="148" r="7" stroke="#C6A052" strokeWidth="2.5" />
            <line
              x1="200"
              y1="166"
              x2="200"
              y2="290"
              stroke="#C6A052"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M 200 252 H 222 M 200 276 H 224"
              stroke="#C6A052"
              strokeWidth="4.5"
              strokeLinecap="round"
            />

            {/* Estrella Ápex Corona */}
            <polygon
              points="200,30 203,38 211,40 205,45 207,53 200,48 193,53 195,45 189,40 197,38"
              fill="#C6A052"
            />

            {/* Tipografía PROMOMEX Limpia */}
            <text
              x="200"
              y="360"
              textAnchor="middle"
              fill="#C6A052"
              fontSize="23"
              fontFamily="Cinzel, Georgia, serif"
              letterSpacing="0.26em"
              fontWeight="600"
            >
              PROMOMEX
            </text>
          </svg>
        </div>

        {/* Frase de Bienvenida: Fade-In a los 2.0s */}
        <div
          className={`flex flex-col items-center mt-6 transition-all duration-700 ease-out px-4 ${
            showPhrase ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
          }`}
        >
          {/* Separador fino en oro */}
          <div className="flex items-center gap-3 w-32 md:w-44 mb-3">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C6A052]/80" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6A052]" />
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#C6A052]/80" />
          </div>

          <p className="font-display text-sm md:text-base lg:text-lg tracking-[0.2em] uppercase font-light text-[#C6A052] text-center max-w-xl leading-relaxed">
            «BIENVENIDO, DESCUBRE LA CASA DE TUS SUEÑOS»
          </p>

          <span className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-[#F7F4EC]/60 font-normal mt-2">
            Arquitectura Patrimonial & Certeza Inmobiliaria
          </span>
        </div>
      </div>
    </aside>
  );
};
