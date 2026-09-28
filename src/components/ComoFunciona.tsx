import React, { useState } from 'react';
import {
  FileSearch,
  Building,
  Scale,
  KeyRound,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react';
import { AnimatedReveal } from './AnimatedReveal';

export const ComoFunciona: React.FC = () => {
  const [activeNode, setActiveNode] = useState<number>(0);

  const nodes = [
    {
      step: '01',
      title: 'Diagnóstico',
      microSummary: 'Perfil y alcance',
      icon: FileSearch,
      chips: ['Mapeo financiero', 'Rango de inversión', 'Acuerdo confidencial'],
      deliverable: 'Dossier de Especificaciones',
    },
    {
      step: '02',
      title: 'Filtro Técnico',
      microSummary: 'Inspección de activo',
      icon: Building,
      chips: ['Auditoría física', 'Entorno y plusvalía', 'Visitas privadas'],
      deliverable: 'Ficha Técnica Dictaminada',
    },
    {
      step: '03',
      title: 'Dictamen Jurídico',
      microSummary: 'Blindaje notarial total',
      icon: Scale,
      chips: ['Libertad de gravamen', 'Revisión en RPP', 'Contrato homologado'],
      deliverable: 'Dictamen de Viabilidad Legal',
    },
    {
      step: '04',
      title: 'Firma',
      microSummary: 'Escrituración y llaves',
      icon: KeyRound,
      chips: ['Firma notarial', 'Revisión fiscal', 'Posesión material'],
      deliverable: 'Escritura Pública Notariada',
    },
  ];

  return (
    <section id="como-funciona" className="py-24 md:py-32 bg-[#F7F4EC] text-[#071A2B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 md:mb-16">
          <AnimatedReveal delay={0} distance={16}>
            <div className="flex items-center gap-2.5 text-xs tracking-[0.25em] text-[#C6A052] font-bold uppercase mb-3">
              <span className="w-6 h-[2px] bg-[#C6A052]" />
              <span>Metodología Certificada</span>
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={100} distance={18}>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#071A2B] mb-3">
              Cómo Funciona el Proceso
            </h2>
          </AnimatedReveal>

          <AnimatedReveal delay={180} distance={18}>
            <p className="text-sm sm:text-base text-[#071A2B]/75 leading-relaxed font-normal">
              Cuatro etapas lineales y transparentes para adquirir o colocar activos con absoluta certeza notarial.
            </p>
          </AnimatedReveal>
        </div>

        {/* ESQUEMA 1: LÍNEA DE TIEMPO HORIZONTAL INTERACTIVA (4 NODOS) */}
        <div className="relative mb-8">
          {/* Glowing Gold Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-[8%] right-[8%] -translate-y-1/2 h-[2px] z-0 pointer-events-none">
            <svg className="w-full h-4 overflow-visible" preserveAspectRatio="none">
              <line
                x1="0%"
                y1="50%"
                x2="100%"
                y2="50%"
                stroke="#C6A052"
                strokeWidth="2"
                strokeDasharray="6 6"
                className="animate-connector-flow"
              />
            </svg>
          </div>

          {/* 4 Compact Bento Nodes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative z-10">
            {nodes.map((node, idx) => {
              const Icon = node.icon;
              const isSelected = activeNode === idx;
              return (
                <AnimatedReveal key={node.step} delay={100 * idx} distance={20} className="h-full">
                  <div
                    onClick={() => setActiveNode(idx)}
                    className={`cursor-pointer p-6 rounded-3xl border transition-all duration-300 ease-apple flex flex-col justify-between h-full group ${
                      isSelected
                        ? 'bg-white border-[#C6A052] shadow-2xl shadow-[#C6A052]/15 -translate-y-1.5 ring-2 ring-[#C6A052]'
                        : 'bg-white/80 border-[#071A2B]/[0.08] hover:border-[#C6A052]/40 hover:bg-white hover:scale-[1.015]'
                    }`}
                  >
                    <div>
                      {/* Top Row: Number & Icon */}
                      <div className="flex items-center justify-between mb-5">
                        <span className="font-display text-2xl font-bold text-[#C6A052] tabular-nums">
                          {node.step}.
                        </span>
                        <div
                          className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-colors duration-300 ${
                            isSelected
                              ? 'bg-[#071A2B] text-[#C6A052]'
                              : 'bg-[#071A2B]/[0.05] text-[#071A2B] group-hover:bg-[#071A2B] group-hover:text-[#C6A052]'
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>

                      {/* Node Title & 3-word Micro-Summary */}
                      <h3 className="font-display text-lg font-bold text-[#071A2B] mb-1">
                        {node.title}
                      </h3>
                      <p className="text-xs font-semibold text-[#C6A052] uppercase tracking-wide mb-4">
                        {node.microSummary}
                      </p>
                    </div>

                    {/* Compact Interactive Chips Preview */}
                    <div className="pt-3 border-t border-[#071A2B]/[0.06] flex items-center justify-between text-[11px] text-[#071A2B]/60 font-medium">
                      <span>Fase {idx + 1} de 4</span>
                      <ChevronRight
                        className={`w-4 h-4 text-[#C6A052] transition-transform duration-300 ${
                          isSelected ? 'translate-x-1' : 'opacity-40 group-hover:opacity-100'
                        }`}
                      />
                    </div>
                  </div>
                </AnimatedReveal>
              );
            })}
          </div>
        </div>

        {/* Active Node Detail Card (Apple Bento View) */}
        <AnimatedReveal delay={200} distance={16}>
          <div className="bg-white border border-[#071A2B]/[0.08] rounded-3xl p-6 sm:p-8 shadow-xl shadow-black/[0.03] flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#071A2B] text-[#C6A052] flex items-center justify-center shrink-0">
                <span className="font-display text-lg font-bold">{nodes[activeNode].step}</span>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs uppercase tracking-widest text-[#C6A052] font-bold">
                    Etapa Activa:
                  </span>
                  <h4 className="font-display text-base sm:text-lg font-bold text-[#071A2B]">
                    {nodes[activeNode].title}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {nodes[activeNode].chips.map((chip, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F7F4EC] border border-[#071A2B]/[0.08] text-xs font-medium text-[#071A2B]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C6A052]" />
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Deliverable Badge */}
            <div className="md:text-right border-t md:border-t-0 md:border-l border-[#071A2B]/[0.08] pt-4 md:pt-0 md:pl-6 shrink-0">
              <span className="text-[10px] uppercase tracking-wider text-[#C6A052] font-bold block mb-1">
                Entregable Notarial:
              </span>
              <span className="text-xs sm:text-sm font-bold text-[#071A2B]">
                {nodes[activeNode].deliverable}
              </span>
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
};
