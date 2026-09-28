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
      title: 'Asesoría Integral',
      icon: Compass,
      description: 'Estrategia personalizada para adquisición residencial y planeación patrimonial a largo plazo.',
      features: ['Perfil de búsqueda', 'Cotejo zonal', 'Viabilidad financiera'],
    },
    {
      id: 'comercializacion',
      title: 'Comercialización',
      icon: Building2,
      description: 'Colocación de activos de alta gama con máxima discreción y perfilamiento estricto de compradores.',
      features: ['Curaduría visual', 'Compradores calificados', 'Negociación directa'],
    },
    {
      id: 'inversion',
      title: 'Inversión Patrimonial',
      icon: TrendingUp,
      description: 'Detección de activos con alta plusvalía y flujos de renta para consolidar capital familiar.',
      features: ['Retorno proyectado', 'Terrenos estratégicos', 'Activos corporativos'],
    },
    {
      id: 'valuacion',
      title: 'Valuación Certificada',
      icon: Scale,
      description: 'Dictámenes técnicos de valor basados en metodologías homologadas y análisis de mercado en tiempo real.',
      features: ['Estudio comparativo', 'Costo de reposición', 'Opinión de valor'],
    },
    {
      id: 'legal',
      title: 'Gestión Contractual',
      icon: FileCheck2,
      description: 'Auditoría registral en RPP y redacción de contratos homologados con total blindaje jurídico.',
      features: ['Libertad de gravamen', 'Norma NOM-247-SE', 'Cero letras chiquitas'],
    },
    {
      id: 'notarial',
      title: 'Acompañamiento Notarial',
      icon: Landmark,
      description: 'Coordinación con notarías líderes, cálculo de impuestos anticipado y supervisión en la firma.',
      features: ['Cálculo ISAI/ISR', 'Créditos bancarios', 'Presencia en firma'],
    },
  ];

  return (
    <section id="servicios" className="py-24 md:py-32 bg-[#071A2B] text-[#F7F4EC] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#C6A052]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 md:mb-16">
          <AnimatedReveal delay={0} distance={16}>
            <div className="flex items-center gap-2.5 text-xs tracking-[0.25em] text-[#C6A052] font-semibold uppercase mb-3">
              <span className="w-6 h-[1px] bg-[#C6A052]" />
              <span>Nuestras Especialidades</span>
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={100} distance={18}>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-3">
              Servicios Patrimoniales
            </h2>
          </AnimatedReveal>

          <AnimatedReveal delay={180} distance={18}>
            <p className="text-sm sm:text-base text-[#F7F4EC]/75 font-light leading-relaxed">
              Soluciones inmobiliarias, jurídicas y financieras respaldadas por rigor técnico y confidencialidad.
            </p>
          </AnimatedReveal>
        </div>

        {/* 6 Compact Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <AnimatedReveal
                key={service.id}
                delay={100 * index}
                distance={20}
                className="h-full"
              >
                <div className="group relative bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-[#C6A052]/40 p-7 sm:p-8 rounded-3xl transition-all duration-300 ease-apple hover:scale-[1.015] hover:shadow-2xl hover:shadow-black/50 flex flex-col justify-between h-full">
                  <div>
                    {/* Top Row: Index & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-display text-xs tracking-[0.25em] font-semibold text-[#C6A052]">
                        0{index + 1}.
                      </span>
                      <div className="w-11 h-11 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#C6A052] group-hover:bg-[#C6A052] group-hover:text-[#071A2B] transition-colors duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-xl font-semibold text-white mb-2 group-hover:text-[#F3E5AB] transition-colors">
                      {service.title}
                    </h3>

                    {/* Description (strictly <= 2 lines) */}
                    <p className="text-xs sm:text-sm text-[#F7F4EC]/70 leading-relaxed font-light mb-6">
                      {service.description}
                    </p>

                    {/* Features list as horizontal chips */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {service.features.map((feat, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-[11px] text-[#F7F4EC]/80 font-medium"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Link */}
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="pt-4 border-t border-white/[0.08] inline-flex items-center justify-between text-xs tracking-wider uppercase font-semibold text-[#C6A052] group-hover:text-white transition-colors cursor-pointer"
                  >
                    <span>Solicitar Asesoría</span>
                    <span className="text-base transition-transform duration-200 group-hover:translate-x-1">
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
