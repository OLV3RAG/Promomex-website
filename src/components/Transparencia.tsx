import React from 'react';
import { ShieldCheck, FileCheck, KeyRound, Check } from 'lucide-react';
import { AnimatedReveal } from './AnimatedReveal';

export const Transparencia: React.FC = () => {
  const metricCards = [
    {
      metric: '100%',
      title: 'Blindaje Legal',
      subtitle: 'Verificación notarial y de gravamen',
      icon: ShieldCheck,
      desc: 'Cotejo directo en RPP, constancia de libertad de gravamen y no adeudo predial o de agua.',
      chips: ['Libertad de Gravámenes', 'Sin litigios abiertos', 'Dictamen Notarial'],
    },
    {
      metric: '0%',
      title: 'Cero Letras Chiquitas',
      subtitle: 'Contratos en marfil y oro',
      icon: FileCheck,
      desc: 'Redacción simétrica con cláusulas equilibradas y desglose total de impuestos anticipado.',
      chips: ['Norma NOM-247-SE', 'Desglose ISAI / ISR', 'Equidad Contractual'],
    },
    {
      metric: '360°',
      title: 'Acompañamiento',
      subtitle: 'Asesor asignado de punta a punta',
      icon: KeyRound,
      desc: 'Dirección jurídica y patrimonial presente en cada firma notarial y en la entrega física de llaves.',
      chips: ['Atención Directa', 'Presencia Notarial', 'Post-Cierre Activo'],
    },
  ];

  return (
    <section id="transparencia" className="py-24 md:py-32 bg-[#071A2B] text-[#F7F4EC] relative overflow-hidden">
      {/* Background radial gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#C6A052]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 md:mb-16">
          <AnimatedReveal delay={0} distance={16}>
            <div className="flex items-center gap-2.5 text-xs tracking-[0.25em] text-[#C6A052] font-semibold uppercase mb-3">
              <span className="w-6 h-[1px] bg-[#C6A052]" />
              <span>Certeza Jurídica</span>
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={100} distance={18}>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-3">
              Ecosistema de Certeza Jurídica
            </h2>
          </AnimatedReveal>

          <AnimatedReveal delay={180} distance={18}>
            <p className="text-sm sm:text-base text-[#F7F4EC]/75 font-light leading-relaxed">
              Matriz de seguridad notarial diseñada para resguardar cada decisión patrimonial sin asimetrías de información.
            </p>
          </AnimatedReveal>
        </div>

        {/* ESQUEMA 2: DASHBOARD DE 3 TARJETAS MÉTRICAS (APPLE BENTO) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {metricCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <AnimatedReveal key={card.title} delay={120 * idx} distance={22} className="h-full">
                <div className="h-full p-8 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-[#C6A052]/40 transition-all duration-300 ease-apple hover:scale-[1.015] flex flex-col justify-between group shadow-xl shadow-black/40">
                  <div>
                    {/* Top Row: Big Number & Minimalist Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight tabular-nums group-hover:text-[#F3E5AB] transition-colors">
                        {card.metric}
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#C6A052] group-hover:bg-[#C6A052] group-hover:text-[#071A2B] transition-colors duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Card Title & Subtitle */}
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-1">
                      {card.title}
                    </h3>
                    <p className="text-xs uppercase tracking-wider font-semibold text-[#C6A052] mb-3">
                      {card.subtitle}
                    </p>

                    {/* Micro-Copy (Strictly <= 2 lines) */}
                    <p className="text-xs sm:text-sm text-[#F7F4EC]/75 font-light leading-relaxed mb-6">
                      {card.desc}
                    </p>
                  </div>

                  {/* Interactive Verification Chips */}
                  <div className="pt-5 border-t border-white/[0.08] flex flex-wrap gap-2">
                    {card.chips.map((chip, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-[11px] text-[#F7F4EC]/85 font-medium"
                      >
                        <Check className="w-3 h-3 text-[#C6A052]" />
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
