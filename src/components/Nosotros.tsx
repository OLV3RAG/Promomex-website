import React from 'react';
import { BarChart3, Eye, UserCheck, Sparkles, ShieldCheck } from 'lucide-react';
import { AnimatedReveal } from './AnimatedReveal';

interface NosotrosProps {
  onNavigate: (sectionId: string) => void;
}

export const Nosotros: React.FC<NosotrosProps> = ({ onNavigate }) => {
  const pillars = [
    {
      id: 'analisis',
      title: 'Análisis',
      subtitle: 'Diagnóstico Técnico y Proyección',
      icon: BarChart3,
      targetSection: 'servicios',
      targetLabel: 'Explorar Servicios',
      description:
        'Evaluamos cada propiedad mediante rigurosos modelos de valuación física, vocación de suelo, comparativas zonales y proyecciones de plusvalía real a corto, mediano y largo plazo.',
      highlights: ['Valuación comercial y catastral', 'Estudio de absorción y plusvalía', 'Revisión urbanística integral'],
    },
    {
      id: 'claridad',
      title: 'Claridad',
      subtitle: 'Transparencia y Cero Letras Chiquitas',
      icon: Eye,
      targetSection: 'transparencia',
      targetLabel: 'Ver Transparencia',
      description:
        'Cero ambigüedades. Cada contrato, certificado de gravámenes y esquema financiero se revisa y expone con total apertura para que usted decida con absoluta tranquilidad patrimonial.',
      highlights: ['Contratos claros y homologados', 'Verificación registral abierta', 'Desglose financiero sin sorpresas'],
    },
    {
      id: 'seguimiento',
      title: 'Seguimiento',
      subtitle: 'Acompañamiento Integral y Humano',
      icon: UserCheck,
      targetSection: 'como-funciona',
      targetLabel: 'Conocer Cómo Funciona',
      description:
        'Un equipo senior asignado a su caso desde el primer contacto hasta la firma notarial y entrega física de llaves, gestionando cada interacción legal, financiera y comercial.',
      highlights: ['Interlocutor senior permanente', 'Gestión notarial personalizada', 'Atención post-cierre y escrituración'],
    },
  ];

  return (
    <section id="nosotros" className="py-28 md:py-36 bg-[#F7F4EC] text-[#071A2B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Reveal */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <AnimatedReveal delay={0} distance={16}>
            <div className="flex items-center gap-3 text-xs tracking-[0.25em] text-[#C6A052] font-bold uppercase mb-4">
              <span className="w-8 h-[2px] bg-[#C6A052]" />
              <span>Nuestra Filosofía Patrimonial</span>
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={120} distance={20}>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#071A2B] mb-6 [text-wrap:balance]">
              Tres Pilares que Sustentan Nuestra Reputación
            </h2>
          </AnimatedReveal>

          <AnimatedReveal delay={240} distance={20}>
            <p className="text-base sm:text-lg text-[#071A2B]/80 font-normal leading-relaxed">
              En PROMOMEX entendemos que un bien raíz no es una simple transacción: es la consolidación del esfuerzo familiar o el resguardo estratégico de un portafolio corporativo. Guiamos cada paso con rigor ético y excelencia técnica.
            </p>
          </AnimatedReveal>
        </div>

        {/* 3 Interactive Bento Cards with Staggered Cascading Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <AnimatedReveal
                key={pillar.id}
                delay={150 * (idx + 1)}
                distance={24}
                className="h-full"
              >
                <div className="group relative bg-white border border-[#071A2B]/[0.08] hover:border-[#C6A052]/50 p-8 sm:p-10 rounded-3xl transition-all duration-300 ease-apple shadow-xl shadow-black/[0.03] hover:shadow-2xl hover:shadow-[#C6A052]/10 hover:scale-[1.015] active:scale-[0.98] flex flex-col justify-between h-full">
                  <div>
                    {/* Pillar Index & Icon */}
                    <div className="flex items-center justify-between mb-8">
                      <span className="font-display text-xs tracking-[0.25em] font-bold text-[#C6A052] uppercase">
                        Pilar 0{idx + 1}
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-[#071A2B]/[0.04] flex items-center justify-center text-[#071A2B] group-hover:bg-[#071A2B] group-hover:text-[#C6A052] transition-colors duration-300">
                        <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                    </div>

                    {/* Pillar Title */}
                    <h3 className="font-display text-2xl font-bold text-[#071A2B] mb-1.5">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#C6A052] uppercase tracking-wider mb-4">
                      {pillar.subtitle}
                    </p>

                    {/* Body description */}
                    <p className="text-sm text-[#071A2B]/75 leading-relaxed mb-8 font-normal">
                      {pillar.description}
                    </p>

                    {/* Bullet Highlights */}
                    <ul className="space-y-2.5 mb-8 pt-6 border-t border-[#071A2B]/[0.08] text-xs text-[#071A2B]/85">
                      {pillar.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C6A052]" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Apple-style Interactive Action Link with Animated Chevron */}
                  <button
                    onClick={() => onNavigate(pillar.targetSection)}
                    className="w-full inline-flex items-center justify-between pt-5 border-t border-[#071A2B]/[0.08] text-xs font-semibold tracking-wider text-[#071A2B] group-hover:text-[#C6A052] transition-colors cursor-pointer"
                  >
                    <span className="uppercase">{pillar.targetLabel}</span>
                    <span
                      className="text-lg font-normal transition-transform duration-200 ease-apple group-hover:translate-x-1.5"
                      aria-hidden="true"
                    >
                      ›
                    </span>
                  </button>
                </div>
              </AnimatedReveal>
            );
          })}
        </div>

        {/* High-Resolution Architectural Spotlight Frame in Nosotros */}
        <AnimatedReveal delay={200} distance={20}>
          <div className="relative rounded-3xl overflow-hidden border border-[#C6A052]/20 shadow-2xl shadow-black/10 group hover:scale-[1.008] transition-all duration-500 bg-[#071A2B]">
            <div className="relative aspect-[21/9] min-h-[300px] sm:min-h-[380px] w-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
                alt="Visualización Arquitectónica de Excelencia PROMOMEX"
                className="w-full h-full object-cover transition-transform duration-700 ease-apple group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#071A2B]/90 via-[#071A2B]/50 to-transparent" />

              {/* Discrete Upper Corner Badge */}
              <div className="absolute top-4 left-4 bg-[#071A2B]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-[11px] font-medium text-[#C6A052] tracking-wider uppercase flex items-center gap-1.5 shadow-lg">
                <Sparkles className="w-3 h-3 text-[#C6A052]" />
                <span>Visualización Arquitectónica</span>
              </div>

              {/* Content overlay on left side */}
              <div className="absolute inset-y-0 left-0 flex flex-col justify-center p-8 sm:p-14 max-w-xl text-white">
                <span className="text-xs uppercase tracking-widest text-[#C6A052] font-semibold mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Curaduría Espacial & Rigor Documental</span>
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold mb-3 leading-snug">
                  Espacios Concebidos para Trasceder Generaciones
                </h3>
                <p className="text-xs sm:text-sm text-[#F7F4EC]/80 leading-relaxed font-light mb-6">
                  Cada propiedad respaldada por PROMOMEX conjuga armonía arquitectónica contemporánea con solvencia jurídica absoluta, protegiendo tanto el bienestar cotidiano como la plusvalía patrimonial.
                </p>
                <div>
                  <button
                    onClick={() => onNavigate('servicios')}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#C6A052] text-[#071A2B] text-xs font-semibold uppercase tracking-wider hover:bg-[#d8b464] transition-all hover:scale-105 cursor-pointer shadow-md"
                  >
                    <span>Conocer Nuestro Proceso</span>
                    <span className="text-sm">›</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
};
