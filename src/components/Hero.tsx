import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ShieldCheck, Compass, Award, Sparkles } from 'lucide-react';
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

          {/* Column Right: High-Resolution Architectural Concept with Parallax and Gold Border */}
          <div className="lg:col-span-5 relative">
            <AnimatedReveal delay={350} distance={30}>
              <div
                className="relative p-3 sm:p-3.5 rounded-[2rem] border border-[#C6A052]/20 bg-white/[0.02] backdrop-blur-xl shadow-2xl shadow-black/80 group hover:border-[#C6A052]/40 transition-all duration-500 hover:scale-[1.015] will-change-transform"
                style={{
                  transform: `translate3d(0, -${parallaxOffset}px, 0)`,
                  transition: 'transform 0.2s ease-out, border-color 0.5s ease',
                }}
              >
                {/* Subtle ambient interior glow */}
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-[#C6A052]/10 to-transparent pointer-events-none" />

                {/* Architectural Residence Canvas Frame */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0A2238] rounded-2xl border border-[#C6A052]/20">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
                    alt="Visualización Arquitectónica de Alta Gama PROMOMEX"
                    className="w-full h-full object-cover transition-transform duration-700 ease-apple group-hover:scale-105"
                    loading="eager"
                  />

                  {/* Gradient Scrim at Bottom of Image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B] via-transparent to-transparent opacity-85 pointer-events-none" />

                  {/* Discrete Upper Corner Badge */}
                  <div className="absolute top-3.5 left-3.5 bg-[#071A2B]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-[11px] font-medium text-[#C6A052] tracking-wider uppercase flex items-center gap-1.5 shadow-lg">
                    <Sparkles className="w-3 h-3 text-[#C6A052]" />
                    <span>Visualización Arquitectónica</span>
                  </div>

                  {/* Image Overlay Bottom Bar */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-[#F7F4EC] bg-[#071A2B]/85 backdrop-blur-md px-4 py-2.5 border border-white/10 rounded-xl">
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
