import React, { useState } from 'react';
import {
  Search,
  Sparkles,
  CheckCircle2,
  Lock,
} from 'lucide-react';
import { AnimatedReveal } from './AnimatedReveal';

interface OportunidadesProps {
  onRequestCustom: (presetInterest?: string) => void;
}

export const Oportunidades: React.FC<OportunidadesProps> = ({ onRequestCustom }) => {
  const [selectedAssetType, setSelectedAssetType] = useState('Residencia Exclusiva');
  const [selectedZone, setSelectedZone] = useState('Zona Poniente / Bosques / Santa Fe');

  const assetTypes = [
    'Residencia Exclusiva',
    'Penthouse / Departamento de Lujo',
    'Terreno / Predio Residencial',
    'Activo Corporativo / Inversión',
  ];

  const zones = [
    'Zona Poniente / Bosques / Santa Fe',
    'Polanco / Lomas de Chapultepec',
    'San Ángel / Pedregal / Sur',
    'Querétaro / Juriquilla / Bajío',
    'Oportunidad Nacional / Riviera',
  ];

  const curationCriteria = [
    'Verificación de Títulos de Propiedad y Antecedentes Registrales',
    'Certificado de Libertad de Gravámenes 100% Válido',
    'Avalúo Comercial y Análisis Comparativo de Mercado Homologado',
    'Auditoría Catastral, Predial y Servicios sin Adeudos',
    'Viabilidad Estructural y Dictamen Arquitectónico',
  ];

  return (
    <section id="oportunidades" className="py-28 md:py-36 bg-[#071A2B] text-[#F7F4EC] relative">
      {/* Background architectural accents */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(#C6A052 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Reveal */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <AnimatedReveal delay={0} distance={16}>
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] text-[#C6A052] font-semibold uppercase mb-4">
              <Lock className="w-3.5 h-3.5" />
              <span>Portafolio Patrimonial Seleccionado</span>
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={120} distance={20}>
            <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight text-white mb-6 [text-wrap:balance]">
              Oportunidades Exclusivas en Preparación
            </h2>
          </AnimatedReveal>

          <AnimatedReveal delay={240} distance={20}>
            <p className="text-base sm:text-lg text-[#F7F4EC]/75 font-light leading-relaxed">
              Mantenemos un compromiso innegociable con la integridad: no publicamos inventario ficticio ni activos con incertidumbre legal.
            </p>
          </AnimatedReveal>
        </div>

        {/* Elegant Apple-Style Bento Empty State Card */}
        <AnimatedReveal delay={280} distance={30}>
          <div className="max-w-4xl mx-auto bg-white/[0.03] backdrop-blur-2xl border border-white/[0.08] hover:border-[#C6A052]/30 rounded-3xl p-8 sm:p-14 shadow-2xl shadow-black/60 relative transition-all duration-300 ease-apple hover:scale-[1.01]">
            <div className="text-center max-w-2xl mx-auto mb-12">
              {/* Emblematic Badge */}
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#C6A052] shadow-inner">
                <Sparkles className="w-8 h-8" />
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4">
                Curaduría y Auditoría Notarial en Curso
              </h3>

              <p className="text-sm sm:text-base text-[#F7F4EC]/80 leading-relaxed font-light mb-8">
                Nuestro comité técnico y legal se encuentra dictaminando nuevos activos inmobiliarios residenciales y corporativos. Solo aquellos que superen el 100% de nuestros filtros de seguridad registral y potencial de plusvalía son presentados a nuestros clientes.
              </p>

              <button
                onClick={() => onRequestCustom(selectedAssetType)}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-[#C6A052] to-[#D4B268] text-[#071A2B] font-semibold text-xs sm:text-sm tracking-wider uppercase rounded-full hover:from-[#d8b464] hover:to-[#dfc179] transition-all duration-300 hover:scale-[1.015] active:scale-[0.98] shadow-xl hover:shadow-[#C6A052]/25 cursor-pointer"
              >
                <Search className="w-4 h-4" />
                <span>Solicitar Oportunidades Personalizadas</span>
              </button>
            </div>

            {/* Interactive Off-Market Matching Box */}
            <div className="pt-8 border-t border-white/[0.08] mt-8">
              <div className="mb-5 text-center sm:text-left">
                <span className="text-xs tracking-widest text-[#C6A052] uppercase font-semibold block mb-1">
                  Servicio VIP Off-Market
                </span>
                <p className="text-xs sm:text-sm text-[#F7F4EC]/70">
                  Seleccione el perfil de activo que busca para acceder a nuestro portafolio confidencial privado:
                </p>
              </div>

              {/* Apple-style Asset Type Pill Selectors */}
              <div className="flex flex-wrap gap-2.5 mb-6 justify-center sm:justify-start">
                {assetTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedAssetType(type)}
                    className={`px-4 py-2 text-xs rounded-full border transition-all duration-300 ease-apple cursor-pointer hover:scale-[1.02] active:scale-[0.98] ${
                      selectedAssetType === type
                        ? 'border-[#C6A052] bg-[#C6A052]/15 text-[#F3E5AB] font-semibold shadow-sm'
                        : 'border-white/[0.08] bg-white/[0.02] text-[#F7F4EC]/70 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>

              {/* Zone Selector Bar in Rounded Island */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/[0.02] p-5 border border-white/[0.08] rounded-2xl">
                <div className="w-full sm:w-auto">
                  <label htmlFor="zone-select" className="text-[11px] text-[#C6A052] uppercase tracking-wider block mb-1.5 font-medium">
                    Ubicación Preferente:
                  </label>
                  <select
                    id="zone-select"
                    value={selectedZone}
                    onChange={(e) => setSelectedZone(e.target.value)}
                    className="bg-[#071A2B] border border-white/[0.12] focus:border-[#C6A052] text-xs text-[#F7F4EC] px-4 py-2.5 rounded-full focus:outline-none w-full sm:w-72"
                  >
                    {zones.map((zone) => (
                      <option key={zone} value={zone} className="bg-[#071A2B] text-white">
                        {zone}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Apple-style secondary action link */}
                <button
                  onClick={() => onRequestCustom(`${selectedAssetType} en ${selectedZone}`)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#C6A052] hover:text-[#e8cb80] transition-colors cursor-pointer py-2 group"
                >
                  <span>Solicitar dossier de esta zona</span>
                  <span
                    className="text-base transition-transform duration-200 ease-apple group-hover:translate-x-1.5"
                    aria-hidden="true"
                  >
                    ›
                  </span>
                </button>
              </div>
            </div>

            {/* Rigorous Curation Checklist */}
            <div className="mt-8 pt-6 border-t border-white/[0.06]">
              <span className="text-[11px] font-semibold tracking-wider uppercase text-[#F7F4EC]/50 block mb-3">
                Filtros obligatorios antes de publicación:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {curationCriteria.map((criterion, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#F7F4EC]/75">
                    <CheckCircle2 className="w-4 h-4 text-[#C6A052] shrink-0 mt-0.5" />
                    <span>{criterion}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
};
