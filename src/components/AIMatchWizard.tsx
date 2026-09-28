import React, { useState } from 'react';
import {
  Sparkles,
  Send,
  RotateCcw,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
} from 'lucide-react';
import { AnimatedReveal } from './AnimatedReveal';

interface AIMatchWizardProps {
  onApplyProfileToContact?: (summary: string) => void;
}

export const AIMatchWizard: React.FC<AIMatchWizardProps> = ({
  onApplyProfileToContact,
}) => {
  const [objetivo, setObjetivo] = useState<'Habitar' | 'Invertir' | 'Patrimonio'>('Habitar');
  const [tipo, setTipo] = useState<'Residencial' | 'Terreno' | 'Comercial'>('Residencial');
  const [plazo, setPlazo] = useState<'Inmediato' | 'Preventa'>('Inmediato');
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [hasResult, setHasResult] = useState<boolean>(false);

  const objetivos = ['Habitar', 'Invertir', 'Patrimonio'] as const;
  const tipos = ['Residencial', 'Terreno', 'Comercial'] as const;
  const plazos = ['Inmediato', 'Preventa'] as const;

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setHasResult(true);
    }, 1200);
  };

  const handleReset = () => {
    setHasResult(false);
    setIsAnalyzing(false);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hola PROMOMEX, configuré el siguiente perfil en el Match Patrimonial:\n- Objetivo: ${objetivo}\n- Tipo: ${tipo}\n- Plazo: ${plazo}\n\n¿Tienen opciones dictaminadas off-market compatibles con este perfil?`
    );
    window.open(`https://wa.me/525584329000?text=${text}`, '_blank');
  };

  return (
    <section id="ai-match" className="py-24 md:py-32 bg-[#040E18] text-[#F7F4EC] relative overflow-hidden">
      {/* Background Subtle Grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#C6A052 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute top-1/3 right-10 w-[500px] h-[400px] bg-[#C6A052]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <AnimatedReveal delay={0} distance={16}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-[#C6A052]/30 text-xs tracking-[0.2em] text-[#C6A052] font-semibold uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Match Patrimonial IA</span>
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={100} distance={18}>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-3">
              Selector Rápido de Inversión
            </h2>
          </AnimatedReveal>

          <AnimatedReveal delay={180} distance={18}>
            <p className="text-sm sm:text-base text-[#F7F4EC]/75 font-light leading-relaxed">
              Seleccione 3 parámetros en un clic para recibir un dictamen preliminar y opciones off-market.
            </p>
          </AnimatedReveal>
        </div>

        {/* ESQUEMA 3: SELECTOR RÁPIDO DE 3 CLICS (APPLE BENTO) */}
        <AnimatedReveal delay={200} distance={20}>
          <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 hover:border-[#C6A052]/30 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-black/80 transition-all duration-300">
            {isAnalyzing ? (
              /* Minimalist Loading Bar */
              <div className="py-14 text-center">
                <div className="w-12 h-12 rounded-full bg-[#C6A052]/10 border border-[#C6A052] mx-auto flex items-center justify-center text-[#C6A052] mb-5">
                  <Sparkles className="w-6 h-6 animate-spin" style={{ animationDuration: '3s' }} />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  Calculando Compatibilidad Patrimonial...
                </h3>
                <p className="text-xs text-[#F7F4EC]/60 mb-6">
                  Cotejando {objetivo} · {tipo} · {plazo} con el inventario notariado disponible.
                </p>
                <div className="w-56 h-1.5 bg-white/10 rounded-full mx-auto overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#C6A052] to-[#F3E5AB] animate-ai-scanner" />
                </div>
              </div>
            ) : hasResult ? (
              /* Clean Conceptual Result Card */
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-6 border-b border-white/[0.08]">
                  <div>
                    <span className="text-[10px] tracking-widest text-[#C6A052] uppercase font-bold block">
                      Resultado Algorítmico
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                      Dictamen de Viabilidad Preliminar
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#C6A052]/15 border border-[#C6A052]/40 text-xs font-semibold text-[#F3E5AB]">
                      98.4% Match
                    </span>
                    <span className="text-[11px] font-mono text-[#F7F4EC]/50">
                      FOLIO: PMX-{Math.floor(1000 + Math.random() * 9000)}
                    </span>
                  </div>
                </div>

                {/* Architecture Visual & Key Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center mb-8">
                  {/* Image with Visualización Arquitectónica Badge */}
                  <div className="md:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden border border-[#C6A052]/20">
                    <img
                      src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
                      alt="Visualización Arquitectónica PROMOMEX"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B] via-transparent to-transparent opacity-80" />
                    <div className="absolute top-3 left-3 bg-[#071A2B]/85 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[10px] font-medium text-[#C6A052] uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                      <Sparkles className="w-3 h-3 text-[#C6A052]" />
                      <span>Visualización Arquitectónica</span>
                    </div>
                    <div className="absolute bottom-3 left-3 text-xs text-white font-medium">
                      Perfil Seleccionado: {objetivo} · {tipo}
                    </div>
                  </div>

                  {/* Summary Metric Chips */}
                  <div className="md:col-span-6 space-y-3">
                    <div className="bg-white/[0.02] p-4 rounded-2xl border border-white/[0.06]">
                      <span className="text-[10px] uppercase font-bold text-[#C6A052] tracking-wider block mb-1 flex items-center gap-1.5">
                        <TrendingUp className="w-3.5 h-3.5" /> Plusvalía Anual Proyectada
                      </span>
                      <p className="text-xs text-[#F7F4EC]/85 font-light leading-snug">
                        Rango zonal estimado del <strong>8.5% al 11.2%</strong> anual bajo esquema de {plazo.toLowerCase()}.
                      </p>
                    </div>

                    <div className="bg-white/[0.02] p-4 rounded-2xl border border-white/[0.06]">
                      <span className="text-[10px] uppercase font-bold text-[#C6A052] tracking-wider block mb-1 flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5" /> Requisito Notarial Indispensable
                      </span>
                      <p className="text-xs text-[#F7F4EC]/85 font-light leading-snug">
                        Certificado de Libertad de Gravamen vigente y contrato homologado NOM-247.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3">
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-1.5 text-xs text-white/60 hover:text-white transition-colors cursor-pointer py-2"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reconfigurar parámetros</span>
                  </button>

                  <button
                    onClick={handleWhatsApp}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Enviar Perfil a un Asesor vía WhatsApp</span>
                  </button>
                </div>
              </div>
            ) : (
              /* The 3-Click Selector Interface */
              <div className="space-y-6">
                {/* Paso 1: Objetivo */}
                <div>
                  <label className="text-xs uppercase tracking-wider font-semibold text-[#C6A052] block mb-2.5">
                    1. Objetivo de Inversión:
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {objetivos.map((obj) => (
                      <button
                        key={obj}
                        type="button"
                        onClick={() => setObjetivo(obj)}
                        className={`py-3 px-4 rounded-2xl text-xs font-semibold tracking-wide transition-all duration-300 ease-apple cursor-pointer text-center ${
                          objetivo === obj
                            ? 'bg-[#C6A052] text-[#071A2B] shadow-lg shadow-[#C6A052]/20 scale-[1.02]'
                            : 'bg-white/[0.03] text-white/70 border border-white/10 hover:border-white/20 hover:text-white'
                        }`}
                      >
                        {obj}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Paso 2: Zona / Tipo */}
                <div>
                  <label className="text-xs uppercase tracking-wider font-semibold text-[#C6A052] block mb-2.5">
                    2. Tipología de Activo:
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {tipos.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTipo(t)}
                        className={`py-3 px-4 rounded-2xl text-xs font-semibold tracking-wide transition-all duration-300 ease-apple cursor-pointer text-center ${
                          tipo === t
                            ? 'bg-[#C6A052] text-[#071A2B] shadow-lg shadow-[#C6A052]/20 scale-[1.02]'
                            : 'bg-white/[0.03] text-white/70 border border-white/10 hover:border-white/20 hover:text-white'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Paso 3: Plazo */}
                <div>
                  <label className="text-xs uppercase tracking-wider font-semibold text-[#C6A052] block mb-2.5">
                    3. Plazo de Entrega Deseado:
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {plazos.map((plz) => (
                      <button
                        key={plz}
                        type="button"
                        onClick={() => setPlazo(plz)}
                        className={`py-3 px-4 rounded-2xl text-xs font-semibold tracking-wide transition-all duration-300 ease-apple cursor-pointer text-center ${
                          plazo === plz
                            ? 'bg-[#C6A052] text-[#071A2B] shadow-lg shadow-[#C6A052]/20 scale-[1.02]'
                            : 'bg-white/[0.03] text-white/70 border border-white/10 hover:border-white/20 hover:text-white'
                        }`}
                      >
                        {plz}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-2 text-center">
                  <button
                    onClick={handleAnalyze}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-3.5 rounded-full bg-gradient-to-r from-[#C6A052] to-[#D4B268] text-[#071A2B] font-semibold text-xs tracking-wider uppercase transition-all duration-300 ease-apple hover:scale-[1.02] active:scale-[0.98] shadow-xl hover:shadow-[#C6A052]/25 cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Ver Viabilidad</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
};
