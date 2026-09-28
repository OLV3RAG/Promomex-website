import React, { useState } from 'react';
import {
  Search,
  Sparkles,
  CheckCircle2,
  Lock,
  ArrowRight,
  Maximize2,
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

  const conceptualTypologies = [
    {
      id: 'villa-bosques',
      title: 'Villa Minimalista en Voladizo',
      zone: 'Zona Poniente / Bosques',
      description: 'Líneas puras, grandes volados de concreto aparente y ventanales panorámicos hacia cañadas arboladas.',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
      specs: 'Terrenos desde 650 m² · Arquitectura bioclimática',
    },
    {
      id: 'biofilica-pedregal',
      title: 'Residencia Biofílica de Cristal y Piedra',
      zone: 'Jardines del Pedregal / San Ángel',
      description: 'Integración orgánica con roca volcánica, espejos de agua reflectantes y jardines interiores de doble altura.',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
      specs: 'Privacidad absoluta · Orientación solar pasiva',
    },
    {
      id: 'penthouse-polanco',
      title: 'Penthouse Contemporáneo con Sky Garden',
      zone: 'Polanco / Campos Elíseos',
      description: 'Residencia en altura con terraza perimetral de 360°, madera de encino ahumado y elevador privado a piso.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
      specs: 'Acceso restringido · Acabados de importación',
    },
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
          <div className="max-w-4xl mx-auto bg-white/[0.03] backdrop-blur-2xl border border-white/[0.08] hover:border-[#C6A052]/30 rounded-3xl p-8 sm:p-14 shadow-2xl shadow-black/60 relative transition-all duration-300 ease-apple hover:scale-[1.01] mb-20">
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

        {/* 3. IMÁGENES ARQUITECTÓNICAS GENERADAS CON IA: TIPOLOGÍAS CONCEPTUALES */}
        <div>
          <div className="max-w-3xl mb-10">
            <AnimatedReveal delay={0} distance={16}>
              <div className="flex items-center gap-3 text-xs tracking-[0.25em] text-[#C6A052] font-semibold uppercase mb-3">
                <Sparkles className="w-4 h-4" />
                <span>Tipologías Arquitectónicas en Curaduría</span>
              </div>
            </AnimatedReveal>
            <AnimatedReveal delay={100} distance={20}>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-2">
                Lenguajes Constructivos de Alta Gama
              </h3>
            </AnimatedReveal>
            <AnimatedReveal delay={150} distance={20}>
              <p className="text-xs sm:text-sm text-[#F7F4EC]/70 font-light">
                Modelos visuales representativos de los estándares de diseño, iluminación crepuscular y materialidad que evaluamos para nuestro portafolio.
              </p>
            </AnimatedReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {conceptualTypologies.map((item, idx) => (
              <AnimatedReveal key={item.id} delay={120 * idx} distance={24} className="h-full">
                <div className="group h-full bg-white/[0.02] backdrop-blur-xl border border-[#C6A052]/20 hover:border-[#C6A052]/60 rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.015] flex flex-col justify-between shadow-xl">
                  {/* Image Frame with Ultra-Fine Gold Border & AI Badge */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#071A2B]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-apple group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B] via-transparent to-transparent opacity-75" />

                    {/* Badge: Visualización Arquitectónica */}
                    <div className="absolute top-3.5 left-3.5 bg-[#071A2B]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-[11px] font-medium text-[#C6A052] tracking-wider uppercase flex items-center gap-1.5 shadow-md">
                      <Sparkles className="w-3 h-3 text-[#C6A052]" />
                      <span>Visualización Arquitectónica</span>
                    </div>

                    <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-[11px] text-white/90">
                      <span className="font-medium bg-black/40 px-2.5 py-1 rounded-md backdrop-blur-sm">
                        {item.zone}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                    <div>
                      <h4 className="font-display text-lg font-bold text-white mb-2 group-hover:text-[#f3e5ab] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#F7F4EC]/70 leading-relaxed font-light mb-4">
                        {item.description}
                      </p>
                      <p className="text-[11px] text-[#C6A052] font-semibold mb-6">
                        {item.specs}
                      </p>
                    </div>

                    <button
                      onClick={() => onRequestCustom(`${item.title} (${item.zone})`)}
                      className="w-full pt-4 border-t border-white/[0.08] inline-flex items-center justify-between text-xs tracking-wider uppercase font-semibold text-[#C6A052] group-hover:text-white transition-colors cursor-pointer"
                    >
                      <span>Consultar disponibilidad afín</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </AnimatedReveal>
            ))}
          </div>

          <div className="mt-8 text-center text-[11px] text-[#F7F4EC]/50 font-light">
            * Las imágenes exhibidas son representaciones conceptuales de ultra alta definición generadas con IA para ilustrar tipologías arquitectónicas. Los expedientes de activos reales se presentan en sesión privada.
          </div>
        </div>
      </div>
    </section>
  );
};
