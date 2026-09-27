import React from 'react';
import { BarChart3, Eye, UserCheck } from 'lucide-react';
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
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
      </div>
    </section>
  );
};
