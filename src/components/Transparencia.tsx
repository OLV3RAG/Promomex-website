import React, { useState } from 'react';
import {
  ShieldCheck,
  FileCheck,
  HelpCircle,
  FileText,
  BadgeCheck,
  Lock,
} from 'lucide-react';
import { AnimatedReveal } from './AnimatedReveal';

export const Transparencia: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'compromisos' | 'auditoria'>('compromisos');

  const legalPillars = [
    {
      title: 'Dictamen de Libertad de Gravamen',
      description:
        'Ninguna propiedad se comercializa sin verificar ante el Registro Público que esté libre de hipotecas, embargos, litigios sucesorios o gravámenes fiscales.',
      icon: ShieldCheck,
    },
    {
      title: 'Cero Letras Chiquitas en Contratos',
      description:
        'Redactamos contratos transparentes con lenguaje directo, cláusulas equilibradas y penalizaciones claras y simétricas para ambas partes.',
      icon: FileText,
    },
    {
      title: 'Desglose Financiero Total Anticipado',
      description:
        'Conozca desde el día uno los costos exactos de escrituración, derechos registrales, avalúos notariales e impuestos (ISAI / ISR), sin cargos sorpresa.',
      icon: BadgeCheck,
    },
    {
      title: 'Verificación de Identidad y Poderes',
      description:
        'Validamos la titularidad legítima del vendedor, facultades notariales vigentes y congruencia de datos personales ante el Instituto Nacional Electoral.',
      icon: Lock,
    },
  ];

  const auditChecklist = [
    { item: 'Título de Propiedad (Escritura inscrita en RPP)', required: true },
    { item: 'Certificado de Libertad de Gravámenes vigente (máx. 30 días)', required: true },
    { item: 'Boletas de Predial y Agua al corriente (últimos 5 años)', required: true },
    { item: 'Planos Arquitectónicos y Licencia de Construcción original', required: true },
    { item: 'Constancia de No Adeudo de Cuotas de Mantenimiento / Condominio', required: true },
    { item: 'Acta de Matrimonio del vendedor y régimen patrimonial', required: true },
    { item: 'Constancia de Situación Fiscal (RFC) validada ante el SAT', required: true },
  ];

  return (
    <section id="transparencia" className="py-28 md:py-36 bg-[#071A2B] text-[#F7F4EC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Reveal */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <AnimatedReveal delay={0} distance={16}>
            <div className="flex items-center gap-3 text-xs tracking-[0.25em] text-[#C6A052] font-semibold uppercase mb-4">
              <span className="w-8 h-[1px] bg-[#C6A052]" />
              <span>Integridad Innegociable</span>
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={120} distance={20}>
            <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight text-white mb-6 [text-wrap:balance]">
              Cero Letras Chiquitas, Máxima Seguridad Jurídica
            </h2>
          </AnimatedReveal>

          <AnimatedReveal delay={240} distance={20}>
            <p className="text-base sm:text-lg text-[#F7F4EC]/75 font-light leading-relaxed">
              La reputación de PROMOMEX se ha forjado en la certeza documental. Blindamos cada compra, venta o inversión patrimonial para que usted disfrute de total tranquilidad y resguardo legal.
            </p>
          </AnimatedReveal>
        </div>

        {/* Apple-style Tab Controls with Reveal */}
        <AnimatedReveal delay={260} distance={16}>
          <div className="flex items-center gap-3 mb-10 pb-4 border-b border-white/[0.08]">
            <button
              onClick={() => setActiveTab('compromisos')}
              className={`px-6 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ease-apple rounded-full cursor-pointer hover:scale-[1.02] active:scale-[0.98] ${
                activeTab === 'compromisos'
                  ? 'bg-[#C6A052] text-[#071A2B] shadow-md shadow-[#C6A052]/20'
                  : 'text-white/70 hover:text-white bg-white/[0.03] hover:bg-white/[0.08]'
              }`}
            >
              Nuestros Compromisos Legales
            </button>
            <button
              onClick={() => setActiveTab('auditoria')}
              className={`px-6 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ease-apple rounded-full cursor-pointer hover:scale-[1.02] active:scale-[0.98] ${
                activeTab === 'auditoria'
                  ? 'bg-[#C6A052] text-[#071A2B] shadow-md shadow-[#C6A052]/20'
                  : 'text-white/70 hover:text-white bg-white/[0.03] hover:bg-white/[0.08]'
              }`}
            >
              Checklist de Auditoría Notarial
            </button>
          </div>
        </AnimatedReveal>

        {/* Content based on Active Tab */}
        {activeTab === 'compromisos' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {legalPillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <AnimatedReveal
                  key={idx}
                  delay={120 * (idx + 1)}
                  distance={20}
                  className="h-full"
                >
                  <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] hover:border-[#C6A052]/40 p-8 sm:p-10 rounded-3xl transition-all duration-300 ease-apple hover:scale-[1.015] active:scale-[0.98] hover:shadow-2xl hover:shadow-black/50 h-full">
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-[#C6A052] mb-6">
                      <Icon className="w-5 h-5 transition-transform duration-300 hover:scale-110" />
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-semibold text-white mb-3">
                      {p.title}
                    </h3>
                    <p className="text-sm text-[#F7F4EC]/70 leading-relaxed font-light">
                      {p.description}
                    </p>
                  </div>
                </AnimatedReveal>
              );
            })}
          </div>
        ) : (
          <AnimatedReveal delay={150} distance={24}>
            <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] p-8 sm:p-12 rounded-3xl shadow-2xl shadow-black/50">
              <div className="mb-8">
                <h3 className="font-display text-2xl font-semibold text-white mb-2">
                  Protocolo de Auditoría Preventiva de Expedientes
                </h3>
                <p className="text-xs sm:text-sm text-[#F7F4EC]/70">
                  Cada inmueble comercializado por PROMOMEX debe contar con este expediente auditado y sellado:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {auditChecklist.map((check, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3.5 bg-white/[0.02] p-4 sm:p-5 border border-white/[0.06] rounded-2xl transition-all duration-300 hover:bg-white/[0.04] hover:translate-x-1"
                  >
                    <FileCheck className="w-5 h-5 text-[#C6A052] shrink-0" />
                    <span className="text-xs sm:text-sm text-[#F7F4EC]/90 font-light">
                      {check.item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F7F4EC]/60">
                <span className="flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#C6A052]" />
                  Auditorías coordinadas con Notarías Públicas de la Ciudad de México y entidades federativas.
                </span>
                <span className="text-[#C6A052] font-semibold tracking-wider uppercase text-[11px]">
                  Norma Oficial NOM-247-SE-2021
                </span>
              </div>
            </div>
          </AnimatedReveal>
        )}
      </div>
    </section>
  );
};
