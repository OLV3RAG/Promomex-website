import React, { useState, useEffect } from 'react';
import promomexOfficialLogo from '../PROMOMEX 1.svg';

interface IntroLoaderProps {
  onComplete?: () => void;
}

export const IntroLoader: React.FC<IntroLoaderProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'drawing' | 'settled' | 'fading' | 'finished'>('drawing');

  useEffect(() => {
    // Stage 1: Logo is drawn stroke-by-stroke over 2.2s.
    // At 2.25s, drawing completes: logo settles into final finish & phrase slides up.
    const settledTimer = setTimeout(() => {
      setStage('settled');
    }, 2250);

    // Stage 2: Logo and phrase remain together for ~1.5s (until t = 3.95s ~ 4.0s).
    // Entire screen smoothly fades out (opacity-0, scale-105, duration-700).
    const fadeTimer = setTimeout(() => {
      setStage('fading');
    }, 3950);

    // Stage 3: Complete transition and unmount after 4.7s
    const finishTimer = setTimeout(() => {
      setStage('finished');
      if (onComplete) onComplete();
    }, 4700);

    return () => {
      clearTimeout(settledTimer);
      clearTimeout(fadeTimer);
      clearTimeout(finishTimer);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setStage('finished');
    if (onComplete) onComplete();
  };

  // Completely remove from DOM when finished to release GPU/CPU memory
  if (stage === 'finished') {
    return null;
  }

  const isDrawn = stage === 'settled' || stage === 'fading';
  const isFading = stage === 'fading';

  return (
    <aside
      aria-label="Pantalla de bienvenida PROMOMEX"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#071A2B] text-[#F7F4EC] transition-all duration-700 ease-in-out select-none will-change-transform ${
        isFading ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background Architectural Geometry Grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #C6A052 1px, transparent 1px),
            linear-gradient(to bottom, #C6A052 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Atmospheric Gold Radial Glow */}
      <div className="absolute w-[550px] h-[550px] rounded-full bg-[#C6A052]/10 blur-[140px] pointer-events-none" />

      {/* Main Centered Container */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-xl w-full">
        {/* Logo Drawing Canvas & Official Image Container */}
        <div className="relative w-64 sm:w-80 md:w-96 aspect-square max-w-[85vw] flex items-center justify-center mb-2">
          {/* 1. Underlying Official PROMOMEX 1.svg with progressive reveal */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
              isDrawn
                ? 'opacity-100 animate-golden-settle'
                : 'opacity-85 animate-reveal-bottom'
            }`}
          >
            <img
              src={promomexOfficialLogo}
              alt="PROMOMEX Logo Oficial"
              className="w-full h-full object-contain filter drop-shadow-[0_2px_16px_rgba(198,160,82,0.3)]"
            />
          </div>

          {/* 2. SVG Line-by-Line Drawing Overlay (Stroke-dashoffset animation + Golden Guide Strokes) */}
          <svg
            viewBox="0 0 400 400"
            className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-500 ${
              isDrawn ? 'opacity-0' : 'opacity-100'
            }`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="goldStrokeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF2C2" />
                <stop offset="50%" stopColor="#C6A052" />
                <stop offset="100%" stopColor="#9B7832" />
              </linearGradient>
              <filter id="goldGlowFilter" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Silhouette 1: Architectural Gable Roof & Outer House Frame */}
            <path
              d="M 200 45 L 340 145 L 320 160 L 200 75 L 80 160 L 60 145 Z"
              stroke="url(#goldStrokeGrad)"
              strokeWidth="2.5"
              strokeLinejoin="round"
              strokeLinecap="round"
              className="animate-draw-stroke"
              filter="url(#goldGlowFilter)"
            />

            {/* Silhouette 2: Outer Columns and Plinth Base */}
            <path
              d="M 72 155 L 72 325 L 328 325 L 328 155"
              stroke="url(#goldStrokeGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-draw-stroke"
              style={{ animationDelay: '100ms' }}
              filter="url(#goldGlowFilter)"
            />

            {/* Silhouette 3: Foundation Horizontal Baseline */}
            <line
              x1="50"
              y1="325"
              x2="350"
              y2="325"
              stroke="url(#goldStrokeGrad)"
              strokeWidth="3"
              strokeLinecap="round"
              className="animate-draw-stroke"
              style={{ animationDelay: '180ms' }}
              filter="url(#goldGlowFilter)"
            />

            {/* Silhouette 4: Left Architectural 'P' */}
            <path
              d="M 112 185 L 112 295 M 112 185 H 152 C 168 185 178 195 178 212 C 178 229 168 239 152 239 H 112"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-draw-stroke"
              style={{ animationDelay: '250ms' }}
            />

            {/* Silhouette 5: Central Golden Key (Bow, Shaft, Bit cuts) with Glowing Leading Edge */}
            <g filter="url(#goldGlowFilter)">
              {/* Key Head Bow */}
              <circle
                cx="200"
                cy="150"
                r="22"
                stroke="url(#goldStrokeGrad)"
                strokeWidth="2.5"
                className="animate-draw-stroke"
                style={{ animationDelay: '350ms' }}
              />
              <circle
                cx="200"
                cy="150"
                r="9"
                stroke="url(#goldStrokeGrad)"
                strokeWidth="1.5"
                className="animate-draw-stroke"
                style={{ animationDelay: '400ms' }}
              />

              {/* Key Shaft */}
              <line
                x1="200"
                y1="172"
                x2="200"
                y2="295"
                stroke="url(#goldStrokeGrad)"
                strokeWidth="3"
                strokeLinecap="round"
                className="animate-draw-stroke"
                style={{ animationDelay: '450ms' }}
              />

              {/* Key Bit Teeth Cuts */}
              <path
                d="M 200 258 H 222 M 200 282 H 224"
                stroke="url(#goldStrokeGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="animate-draw-stroke"
                style={{ animationDelay: '520ms' }}
              />
            </g>

            {/* Silhouette 6: Right Architectural 'M' */}
            <path
              d="M 226 295 L 226 185 L 256 242 L 286 185 L 286 295"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-draw-stroke"
              style={{ animationDelay: '300ms' }}
            />

            {/* Silhouette 7: Apex Crown Star & Trim */}
            <polygon
              points="200,32 204,42 215,44 207,51 209,61 200,55 191,61 193,51 185,44 196,42"
              fill="#F9E8B2"
              className="animate-draw-stroke"
              style={{ animationDelay: '600ms' }}
            />
          </svg>

          {/* Golden Sweep Glow traveling across the silhouette during drawing */}
          {!isDrawn && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-full">
              <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C6A052] to-transparent shadow-[0_0_20px_#FFE28A] animate-gold-sweep" />
            </div>
          )}
        </div>

        {/* 2. FRASE DE BIENVENIDA (Appears right at ~2.3s with fade-in and slide-up of 15px) */}
        <div
          className={`transition-all duration-700 ease-apple flex flex-col items-center ${
            isDrawn
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-[15px]'
          }`}
        >
          {/* Subtle gold divider bar */}
          <div className="flex items-center gap-3 w-40 my-3">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C6A052]/80" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6A052] shadow-[0_0_8px_#C6A052]" />
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#C6A052]/80" />
          </div>

          {/* Phrase in refined elegant typography */}
          <p className="font-display text-base sm:text-xl italic text-[#F7F4EC] tracking-wide max-w-md font-light">
            «Bienvenido, descubre la casa de tus sueños»
          </p>

          <span className="text-[10px] tracking-[0.3em] uppercase text-[#C6A052] font-semibold mt-2">
            Inmobiliaria Patrimonial
          </span>
        </div>
      </div>

      {/* Skip Button (Saltar intro) */}
      <button
        onClick={handleSkip}
        className="absolute bottom-8 right-8 text-xs tracking-widest text-[#C6A052]/70 hover:text-[#C6A052] transition-all duration-300 py-2 px-4 rounded-full border border-white/10 hover:border-[#C6A052]/40 bg-white/[0.02] hover:bg-white/[0.06] cursor-pointer active:scale-95"
      >
        SALTAR INTRO
      </button>
    </aside>
  );
};
