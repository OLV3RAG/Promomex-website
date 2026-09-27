import React, { useState } from 'react';
import {
  FileSearch,
  Building,
  Scale,
  KeyRound,
  CheckCircle,
} from 'lucide-react';
import { AnimatedReveal } from './AnimatedReveal';

export const ComoFunciona: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      step: '01',
      title: 'Diagnóstico y Requerimientos',
      subtitle: 'Definición de Alcance Patrimonial',
      icon: FileSearch,
      summary:
        'Entendimiento profundo de su objetivo: compra residencial, inversión de capital o desincorporación de un activo.',
      actions: [
        'Mapeo de necesidades financieras, fiscales y familiares.',
        'Definición de rango de inversión, zonas deseadas y amenidades esenciales.',
        'Elaboración de cronograma de trabajo y acuerdo de confidencialidad.',
      ],
      deliverable: 'Dossier de Especificaciones Patrimoniales.',
    },
    {
      step: '02',
      title: 'Selección y Evaluación Técnica',
      subtitle: 'Filtro Físico y Análisis Urbanístico',
      icon: Building,
      summary:
        'Criba de propiedades mediante visitas técnicas presenciales y verificación de planos arquitectónicos.',
      actions: [
        'Auditoría física: instalaciones hidrosanitarias, eléctricas y estructurales.',
        'Análisis del entorno: vías de acceso, planes de desarrollo urbano y plusvalía.',
        'Presentación ejecutiva de opciones pre-calificadas y visitas privadas.',
      ],
      deliverable: 'Ficha Técnica Dictaminada de cada Propiedad.',
    },
    {
      step: '03',
      title: 'Negociación y Dictamen Jurídico',
      subtitle: 'Certeza Notarial y Blindaje Legal',
      icon: Scale,
      summary:
        'Investigación registral exhaustiva y redacción de contratos homologados con total equilibrio de partes.',
      actions: [
        'Búsqueda en Registro Público de la Propiedad y Catastro.',
        'Certificado de Libertad de Gravamen y constancia de no adeudos.',
        'Estructuración del contrato de promesa de compraventa con cláusulas claras.',
      ],
      deliverable: 'Dictamen de Viabilidad Jurídica Inmobiliaria.',
    },
    {
      step: '04',
      title: 'Cierre y Entrega de Llaves',
      subtitle: 'Firma Notarial y Posesión Material',
      icon: KeyRound,
      summary:
        'Acompañamiento personal ante el Notario Público, coordinación de liquidación y recepción física del inmueble.',
      actions: [
        'Revisión final de proyecto de escritura notarial e impuestos calculados.',
        'Presencia y asesoría durante la firma protocolaria ante el Notario.',
        'Recorrido de entrega formal, acta de inventario y entrega física de llaves.',
      ],
      deliverable: 'Escritura Pública y Acta de Entrega Definitiva.',
    },
  ];

  return (
    <section id="como-funciona" className="py-28 md:py-36 bg-[#F7F4EC] text-[#071A2B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Reveal */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <AnimatedReveal delay={0} distance={16}>
            <div className="flex items-center gap-3 text-xs tracking-[0.25em] text-[#C6A052] font-bold uppercase mb-4">
              <span className="w-8 h-[2px] bg-[#C6A052]" />
              <span>Metodología Certificada</span>
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={120} distance={20}>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#071A2B] mb-6 [text-wrap:balance]">
              Cómo Funciona el Proceso PROMOMEX
            </h2>
          </AnimatedReveal>

          <AnimatedReveal delay={240} distance={20}>
            <p className="text-base sm:text-lg text-[#071A2B]/80 font-normal leading-relaxed">
              Un recorrido ordenado en cuatro etapas sucesivas diseñado para eliminar incertidumbres, optimizar tiempos y garantizar que su inversión sea un éxito rotundo.
            </p>
          </AnimatedReveal>
        </div>

        {/* Desktop Bento Stepper Grid with 120ms Staggered Cascading Reveal */}
        <div className="grid grid-cols-4 gap-5 mb-8 hidden lg:grid">
          {steps.map((item, idx) => {
            const isSelected = activeStep === idx;
            const Icon = item.icon;
            return (
              <AnimatedReveal
                key={item.step}
                delay={130 * idx}
                distance={24}
              >
                <button
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-6 sm:p-7 transition-all duration-300 ease-apple rounded-3xl border cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#C6A052] shadow-xl shadow-[#C6A052]/10 -translate-y-1.5 ring-1 ring-[#C6A052]'
                      : 'bg-white/70 border-[#071A2B]/[0.08] hover:border-[#C6A052]/40 hover:bg-white hover:scale-[1.015] active:scale-[0.98]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className={`font-display text-xs font-bold tracking-widest ${
                        isSelected ? 'text-[#C6A052]' : 'text-[#071A2B]/50'
                      }`}
                    >
                      ETAPA {item.step}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-colors duration-300 ${
                        isSelected
                          ? 'bg-[#071A2B] text-[#C6A052]'
                          : 'bg-[#071A2B]/[0.04] text-[#071A2B]'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="font-display text-base font-bold text-[#071A2B] leading-tight mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#C6A052] font-semibold tracking-wide">
                    {item.subtitle}
                  </p>
                </button>
              </AnimatedReveal>
            );
          })}
        </div>

        {/* Selected Step Detail Bento Card (Desktop) */}
        <AnimatedReveal delay={250} distance={20} className="hidden lg:block">
          <div className="bg-white border border-[#071A2B]/[0.08] p-10 sm:p-12 rounded-3xl shadow-xl shadow-black/[0.04] transition-all duration-500">
            <div className="grid grid-cols-12 gap-10 items-center">
              <div className="col-span-4 border-r border-[#071A2B]/[0.08] pr-8">
                <span className="text-xs tracking-widest uppercase font-bold text-[#C6A052] block mb-2">
                  Etapa {steps[activeStep].step}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#071A2B] mb-2">
                  {steps[activeStep].title}
                </h3>
                <p className="text-xs text-[#071A2B]/60 uppercase tracking-wider mb-5">
                  {steps[activeStep].subtitle}
                </p>
                <p className="text-sm text-[#071A2B]/80 leading-relaxed font-normal mb-8">
                  {steps[activeStep].summary}
                </p>
                <div className="bg-[#F7F4EC] p-4 rounded-2xl border-l-2 border-[#C6A052]">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#C6A052] block mb-1">
                    Entregable Oficial:
                  </span>
                  <span className="text-xs font-semibold text-[#071A2B]">
                    {steps[activeStep].deliverable}
                  </span>
                </div>
              </div>

              <div className="col-span-8 pl-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#071A2B] mb-5">
                  Acciones Clave en esta Etapa:
                </h4>
                <div className="space-y-3.5">
                  {steps[activeStep].actions.map((act, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3.5 bg-[#F7F4EC]/60 p-4 rounded-2xl transition-all duration-300 hover:bg-[#F7F4EC] hover:translate-x-1"
                    >
                      <CheckCircle className="w-4 h-4 text-[#C6A052] shrink-0 mt-0.5" />
                      <span className="text-sm text-[#071A2B]/85 font-normal">{act}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedReveal>

        {/* Mobile Accordion View with Rounded Cards */}
        <div className="lg:hidden space-y-4">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            const isExpanded = activeStep === idx;
            return (
              <div
                key={item.step}
                className="bg-white border border-[#071A2B]/[0.08] rounded-2xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setActiveStep(isExpanded ? -1 : idx)}
                  className="w-full p-5 text-left flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#071A2B]/[0.04] text-[#C6A052] flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] tracking-widest text-[#C6A052] font-bold block">
                        ETAPA {item.step}
                      </span>
                      <h3 className="font-display text-base font-bold text-[#071A2B]">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <span className="text-lg text-[#C6A052] ml-2">
                    {isExpanded ? '−' : '+'}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-apple ${
                    isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-5 pt-0 border-t border-[#071A2B]/[0.06] bg-[#F7F4EC]/30">
                      <p className="text-xs text-[#071A2B]/75 leading-relaxed my-3 font-normal">
                        {item.summary}
                      </p>
                      <div className="space-y-2 mb-4">
                        {item.actions.map((act, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-[#071A2B]/85">
                            <CheckCircle className="w-3.5 h-3.5 text-[#C6A052] shrink-0 mt-0.5" />
                            <span>{act}</span>
                          </div>
                        ))}
                      </div>
                      <div className="bg-white p-3.5 rounded-xl border-l-2 border-[#C6A052] text-xs">
                        <strong className="text-[#C6A052] uppercase text-[10px] block">
                          Entregable:
                        </strong>
                        <span className="text-[#071A2B]">{item.deliverable}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
