import React from 'react';
import {
  Compass,
  Building2,
  TrendingUp,
  Scale,
  FileCheck2,
  Landmark,
} from 'lucide-react';
import { AnimatedReveal } from './AnimatedReveal';

interface ServiciosProps {
  onSelectService: (serviceName: string) => void;
}

export const Servicios: React.FC<ServiciosProps> = ({ onSelectService }) => {
  const services = [
    {
      id: 'asesoria',
      title: 'Asesoría Inmobiliaria Integral',
      shortTitle: 'Asesoría Integral',
      icon: Compass,
      description:
        'Acompañamiento estratégico personalizado para compradores e inversionistas. Mapeo de necesidades residenciales y análisis de viabilidad financiera adaptada a su estilo de vida y objetivos.',
      features: ['Definición de perfil de búsqueda', 'Preselección rigurosa de propiedades', 'Análisis comparativo de zonas'],
    },
    {
      id: 'comercializacion',
      title: 'Comercialización de Propiedades',
      shortTitle: 'Comercialización',
      icon: Building2,
      description:
        'Estrategias de colocación de alta gama para propietarios que buscan vender su patrimonio con discreción, perfilamiento estricto de prospectos y optimización del valor comercial.',
      features: ['Fotografía y renderizado profesional', 'Filtrado previo de compradores calificados', 'Negociación estratégica'],
    },
    {
      id: 'inversion',
      title: 'Oportunidades de Inversión Patrimonial',
      shortTitle: 'Inversión Patrimonial',
      icon: TrendingUp,
      description:
        'Detección de activos con alta tasa de capitalización (Cap Rate), terrenos estratégicos y desarrollos con plusvalía anticipada para resguardar y hacer crecer el capital familiar.',
      features: ['Cálculo de rendimientos proyectados', 'Diversificación en activos inmobiliarios', 'Estructuras patrimoniales seguras'],
    },
    {
      id: 'valuacion',
      title: 'Valuación y Análisis de Mercado',
      shortTitle: 'Valuación y Mercado',
      icon: Scale,
      description:
        'Dictámenes técnicos de valor basados en metodologías homologadas, características físicas, estado de conservación y tendencias macroeconómicas del entorno local.',
      features: ['Estudio de mercado zonal en tiempo real', 'Análisis de costos de reposición', 'Opinión de valor certificada'],
    },
    {
      id: 'legal',
      title: 'Gestión Legal y Contractual',
      shortTitle: 'Gestión Legal',
      icon: FileCheck2,
      description:
        'Revisión exhaustiva de antecedentes registrales, libertad de gravamen, títulos de propiedad y redacción de contratos de promesa y compraventa con total blindaje jurídico.',
      features: ['Auditoría en Registro Público', 'Cero letras chiquitas ni cláusulas abusivas', 'Protección contra contingencias'],
    },
    {
      id: 'notarial',
      title: 'Acompañamiento Notarial y Financiero',
      shortTitle: 'Acompañamiento Notarial',
      icon: Landmark,
      description:
        'Coordinación directa con las mejores notarías públicas y entidades financieras para estructuración de créditos hipotecarios bancarios y firma protocolaria sin contratiempos.',
      features: ['Cálculo anticipado de impuestos y derechos', 'Enlace directo con Notario Público', 'Supervisión en la firma protocolaria'],
    },
  ];

  return (
    <section id="servicios" className="py-28 md:py-36 bg-[#071A2B] text-[#F7F4EC] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#C6A052]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Reveal */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <AnimatedReveal delay={0} distance={16}>
            <div className="flex items-center gap-3 text-xs tracking-[0.25em] text-[#C6A052] font-semibold uppercase mb-4">
              <span className="w-8 h-[1px] bg-[#C6A052]" />
              <span>Nuestras Especialidades</span>
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={120} distance={20}>
            <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight text-white mb-6 [text-wrap:balance]">
              Servicios Profesionales Diseñados para Proteger su Patrimonio
            </h2>
          </AnimatedReveal>

          <AnimatedReveal delay={240} distance={20}>
            <p className="text-base sm:text-lg text-[#F7F4EC]/75 font-light leading-relaxed">
              Un portafolio integral de soluciones inmobiliarias, jurídicas y financieras para que cada decisión esté respaldada por experiencia, rigor técnico y confidencialidad.
            </p>
          </AnimatedReveal>
        </div>

        {/* 6 Service Bento Cards with 100ms - 150ms Staggered Fade */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <AnimatedReveal
                key={service.id}
                delay={120 * index}
                distance={24}
                className="h-full"
              >
                <div className="group relative bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] hover:border-[#C6A052]/40 p-8 sm:p-10 rounded-3xl transition-all duration-300 ease-apple hover:scale-[1.015] active:scale-[0.98] hover:shadow-2xl hover:shadow-black/50 flex flex-col justify-between h-full">
                  {/* Subtle soft gold ambient glow on hover */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-[#C6A052]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="relative z-10">
                    {/* Card Index & Icon */}
                    <div className="flex items-center justify-between mb-8">
                      <span className="font-display text-xs tracking-[0.25em] font-semibold text-[#C6A052]">
                        0{index + 1}.
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-[#C6A052] group-hover:bg-[#C6A052] group-hover:text-[#071A2B] transition-colors duration-300">
                        <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-xl sm:text-2xl font-semibold text-white mb-3 group-hover:text-[#F3E5AB] transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-[#F7F4EC]/70 leading-relaxed font-light mb-8">
                      {service.description}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-2.5 mb-8 pt-6 border-t border-white/[0.06] text-xs text-[#F7F4EC]/80 font-light">
                      {service.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C6A052]" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Apple-style Secondary Action Link with Animated Chevron */}
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="relative z-10 w-full pt-5 border-t border-white/[0.08] inline-flex items-center justify-between text-xs tracking-wider text-[#C6A052] group-hover:text-white transition-colors cursor-pointer"
                  >
                    <span className="uppercase font-semibold">Solicitar Asesoría</span>
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
