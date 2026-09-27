import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ShieldCheck, Compass, Award } from 'lucide-react';
import { AnimatedReveal } from './AnimatedReveal';

interface HeroProps {
  onExploreOpportunities: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreOpportunities,
  onExploreServices,
}) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    let rafId: number | null = null;

    const handleScroll = () => {
      if (!ticking) {
        rafId = window.requestAnimationFrame(() => {
          // Only update state if Hero is within visible range
          if (window.scrollY <= window.innerHeight * 1.2) {
            setScrollY(window.scrollY);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  // Subtle Parallax calculation (capped for performance and restraint)
  const parallaxOffset = Math.min(scrollY * 0.08, 40);

  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] pt-32 pb-24 md:pt-44 md:pb-36 flex items-center bg-[#071A2B] overflow-hidden"
    >
      {/* Background Architectural Grid Lines */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #C6A052 1px, transparent 1px),
            linear-gradient(to bottom, #C6A052 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Atmospheric Gold Radial Gradient */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-[#C6A052]/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full bg-[#C6A052]/5 blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Column Left: High-Impact Typography & Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Architectural Kicker */}
            <AnimatedReveal delay={100} distance={16}>
              <div className="flex items-center gap-3 text-xs tracking-[0.25em] text-[#C6A052] font-semibold uppercase mb-5">
                <span className="w-8 h-[1px] bg-[#C6A052]" />
                <span>Bienes Raíces Corporativos y Patrimoniales</span>
              </div>
            </AnimatedReveal>

            {/* Main Headline */}
            <AnimatedReveal delay={200} distance={20}>
              <h1 className="font-display text-4xl sm:text-6xl xl:text-[4.2rem] font-semibold tracking-tight text-white leading-[1.08] mb-6 [text-wrap:balance]">
                Arquitectura Patrimonial,{' '}
                <span className="text-gold-gradient font-bold">Certeza Inmobiliaria.</span>
              </h1>
            </AnimatedReveal>

            {/* Subtitle required by prompt */}
            <AnimatedReveal delay={300} distance={20}>
              <p className="font-display text-xl sm:text-2xl text-[#E5C378] font-light italic mb-6 leading-relaxed">
                «Da el primer paso hacia el hogar que imaginas»
              </p>
            </AnimatedReveal>

            {/* Supporting Copy */}
            <AnimatedReveal delay={400} distance={20}>
              <p className="text-sm sm:text-base text-[#F7F4EC]/75 max-w-xl leading-relaxed font-light mb-8">
                En PROMOMEX acompañamos a inversionistas y familias en la toma de decisiones patrimoniales trascendentes, garantizando transparencia absoluta, análisis de plusvalía y blindaje jurídico en cada activo.
              </p>
            </AnimatedReveal>

            {/* Clean Unboxed Value Proposition Badges */}
            <AnimatedReveal delay={500} distance={20}>
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-[#F7F4EC]/90 font-medium mb-10 pb-3 border-b border-white/10">
                <span className="flex items-center gap-1.5 text-[#F7F4EC]">
                  <ShieldCheck className="w-4 h-4 text-[#C6A052]" />
                  Certeza Jurídica 100%
                </span>
                <span className="text-[#C6A052]" aria-hidden="true">·</span>
                <span className="flex items-center gap-1.5 text-[#F7F4EC]">
                  <Compass className="w-4 h-4 text-[#C6A052]" />
                  Asesoría Patrimonial Exclusiva
                </span>
                <span className="text-[#C6A052]" aria-hidden="true">·</span>
                <span className="flex items-center gap-1.5 text-[#F7F4EC]">
                  <Award className="w-4 h-4 text-[#C6A052]" />
                  Trato Directo y Transparente
                </span>
              </div>
            </AnimatedReveal>

            {/* Call To Action Buttons (Apple-style pill & chevron link) */}
            <AnimatedReveal delay={600} distance={20}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6">
                <button
                  onClick={onExploreOpportunities}
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-[#C6A052] to-[#D4B268] text-[#071A2B] font-semibold text-xs sm:text-sm tracking-wider uppercase rounded-full hover:from-[#d8b464] hover:to-[#dfc179] transition-all duration-300 hover:scale-[1.015] active:scale-[0.98] shadow-xl hover:shadow-[#C6A052]/25 cursor-pointer group"
                >
                  <span>Explorar Oportunidades</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                <button
                  onClick={onExploreServices}
                  className="inline-flex items-center justify-center gap-1.5 text-[#C6A052] hover:text-[#e8cb80] font-medium text-sm tracking-wide transition-colors cursor-pointer group py-2"
                >
                  <span>Conocer servicios</span>
                  <span className="text-base transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true">
                    ›
                  </span>
                </button>
              </div>
            </AnimatedReveal>

            {/* Quantitative Proof Row (Tabular Numerals) */}
            <AnimatedReveal delay={700} distance={20}>
              <div className="grid grid-cols-3 gap-6 pt-10 mt-10 border-t border-white/[0.08] max-w-lg">
                <div>
                  <p className="font-display text-2xl sm:text-3xl font-bold text-white tabular-nums">
                    100%
                  </p>
                  <p className="text-[11px] sm:text-xs text-[#F7F4EC]/60 font-light mt-0.5">
                    Blindaje registral & notarial
                  </p>
                </div>
                <div>
                  <p className="font-display text-2xl sm:text-3xl font-bold text-white tabular-nums">
                    +15
                  </p>
                  <p className="text-[11px] sm:text-xs text-[#F7F4EC]/60 font-light mt-0.5">
                    Años de rigor patrimonial
                  </p>
                </div>
                <div>
                  <p className="font-display text-2xl sm:text-3xl font-bold text-white tabular-nums">
                    0%
                  </p>
                  <p className="text-[11px] sm:text-xs text-[#F7F4EC]/60 font-light mt-0.5">
                    Costos ocultos o letras chicas
                  </p>
                </div>
              </div>
            </AnimatedReveal>
          </div>

          {/* Column Right: Architectural Frame with Subtle Parallax Depth */}
          <div className="lg:col-span-5 relative">
            <AnimatedReveal delay={350} distance={30}>
              <div
                className="relative p-3.5 sm:p-4 rounded-[2rem] border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl shadow-2xl shadow-black/60 group hover:border-[#C6A052]/30 transition-all duration-500 hover:scale-[1.015] will-change-transform"
                style={{
                  transform: `translate3d(0, -${parallaxOffset}px, 0)`,
                  transition: 'transform 0.2s ease-out, border-color 0.5s ease',
                }}
              >
                {/* Subtle ambient interior glow */}
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-[#C6A052]/5 to-transparent pointer-events-none" />

                {/* Architectural Residence Canvas Artwork */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0A2238] rounded-2xl">
                  {/* Vector Architectural Scene: Luxury Modern Residence at Twilight */}
                  <svg
                    viewBox="0 0 600 450"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Residencia arquitectónica de lujo representativa de PROMOMEX"
                  >
                    <defs>
                      <linearGradient id="twilightSky" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#0B1C2D" />
                        <stop offset="60%" stopColor="#142C44" />
                        <stop offset="100%" stopColor="#253D57" />
                      </linearGradient>
                      <radialGradient id="interiorWarmth" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#FFE082" stopOpacity="0.95" />
                        <stop offset="60%" stopColor="#C6A052" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#071A2B" stopOpacity="0" />
                      </radialGradient>
                      <linearGradient id="waterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#1B3852" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#0A1826" stopOpacity="0.95" />
                      </linearGradient>
                    </defs>

                    {/* Twilight Sky */}
                    <rect width="600" height="450" fill="url(#twilightSky)" />

                    {/* Atmospheric sparkle in sky */}
                    <circle cx="120" cy="50" r="1" fill="#F7F4EC" opacity="0.6" />
                    <circle cx="280" cy="35" r="1.2" fill="#F7F4EC" opacity="0.8" />
                    <circle cx="450" cy="65" r="0.9" fill="#F7F4EC" opacity="0.5" />
                    <circle cx="510" cy="40" r="1.1" fill="#F7F4EC" opacity="0.7" />

                    {/* Distant Topographic Mountain Silhouette */}
                    <path d="M0 240 Q150 180 300 230 T600 210 L600 350 L0 350 Z" fill="#0D2033" opacity="0.7" />

                    {/* Main Luxury Architectural Pavilions */}
                    <rect x="110" y="140" width="380" height="90" fill="#0B1A28" stroke="#C6A052" strokeWidth="1.2" />

                    {/* Floor-to-ceiling Glass Glazing */}
                    <rect x="130" y="155" width="100" height="60" fill="#FFE082" fillOpacity="0.15" stroke="#48627D" strokeWidth="0.8" />
                    <rect x="250" y="155" width="140" height="60" fill="#FFE082" fillOpacity="0.25" stroke="#48627D" strokeWidth="0.8" />
                    <rect x="410" y="155" width="60" height="60" fill="#FFE082" fillOpacity="0.12" stroke="#48627D" strokeWidth="0.8" />

                    {/* Architectural Mullions */}
                    <line x1="180" y1="155" x2="180" y2="215" stroke="#C6A052" strokeWidth="0.7" opacity="0.6" />
                    <line x1="320" y1="155" x2="320" y2="215" stroke="#C6A052" strokeWidth="0.7" opacity="0.6" />

                    {/* Warm Glowing Chandelier Inside Main Living Room */}
                    <circle cx="320" cy="180" r="45" fill="url(#interiorWarmth)" opacity="0.7" />
                    <circle cx="320" cy="175" r="4" fill="#FFF9C4" />

                    {/* Ground Level Glass Pavilion & Cantilever Terrace */}
                    <rect x="80" y="230" width="440" height="110" fill="#0E2336" stroke="#C6A052" strokeWidth="1.4" />
                    
                    {/* Ground Floor Glass Panels */}
                    <rect x="100" y="245" width="180" height="85" fill="#FFE082" fillOpacity="0.2" stroke="#3A536E" strokeWidth="0.8" />
                    <rect x="300" y="245" width="200" height="85" fill="#FFE082" fillOpacity="0.18" stroke="#3A536E" strokeWidth="0.8" />
                    
                    {/* Minimalist Column Supports */}
                    <rect x="95" y="230" width="10" height="110" fill="#EAD9BA" />
                    <rect x="285" y="230" width="12" height="110" fill="#EAD9BA" />
                    <rect x="505" y="230" width="10" height="110" fill="#EAD9BA" />

                    {/* Outdoor Reflecting Water Mirror / Pool */}
                    <rect x="40" y="340" width="520" height="75" fill="url(#waterGrad)" stroke="#C6A052" strokeWidth="0.8" />
                    
                    {/* Water Reflection of Windows */}
                    <rect x="100" y="342" width="180" height="35" fill="#FFE082" fillOpacity="0.1" />
                    <rect x="300" y="342" width="200" height="35" fill="#FFE082" fillOpacity="0.08" />
                    <line x1="60" y1="365" x2="540" y2="365" stroke="#4F718F" strokeWidth="0.5" opacity="0.4" />
                    <line x1="80" y1="385" x2="520" y2="385" stroke="#4F718F" strokeWidth="0.5" opacity="0.3" />

                    {/* Landscaping */}
                    <path d="M50 340 L58 220 L66 340 Z" fill="#071521" />
                    <path d="M68 340 L74 240 L80 340 Z" fill="#071521" />
                    <path d="M530 340 L538 215 L546 340 Z" fill="#071521" />
                    <path d="M548 340 L554 250 L560 340 Z" fill="#071521" />

                    {/* Architectural Dimensioning / Grid Accent Lines */}
                    <line x1="80" y1="120" x2="520" y2="120" stroke="#C6A052" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.6" />
                    <text x="300" y="112" fill="#C6A052" fontSize="9" letterSpacing="3" textAnchor="middle" fontFamily="sans-serif">
                      ESTRUCTURA DE ALTA GAMA · PATRIMONIO CERTIFICADO
                    </text>
                  </svg>

                  {/* Gradient Scrim at Bottom of Image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B] via-transparent to-transparent pointer-events-none" />

                  {/* Image Overlay Badge */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#F7F4EC] bg-[#071A2B]/85 backdrop-blur-md px-4 py-2.5 border border-white/10 rounded-xl">
                    <span className="font-display tracking-wider text-xs">
                      Curaduría Notarial & Valuación
                    </span>
                    <span className="text-[#C6A052] font-semibold text-[11px] tracking-widest uppercase">
                      PROMOMEX
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
