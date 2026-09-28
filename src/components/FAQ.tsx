import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { AnimatedReveal } from './AnimatedReveal';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: '¿Cómo garantiza PROMOMEX la seguridad jurídica de cada propiedad?',
      a: 'Antes de cualquier firma o anticipo, nuestro departamento legal realiza una investigación registral exhaustiva ante el Registro Público de la Propiedad, tramita el Certificado de Libertad de Gravámenes vigente y corrobora que no existan litigios sucesorios, vicios ocultos ni adeudos fiscales. Cada operación es validada directamente ante Notario Público.',
    },
    {
      q: '¿Cuáles son los esquemas de comisión y honorarios profesionales?',
      a: 'Nos regimos bajo las tarifas estándar del sector inmobiliario corporativo y de alta gama en México (típicamente del 4% al 6% sobre el valor final de cierre, según las características del inmueble). No cobramos cuotas iniciales por enlistar; nuestros honorarios se liquidan únicamente al concluir exitosamente la operación ante Notario.',
    },
    {
      q: '¿Brindan asesoría para la obtención de créditos hipotecarios bancarios?',
      a: 'Sí. Contamos con alianzas con los principales bancos comerciales (Banorte, BBVA, Santander, Scotiabank, HSBC) y brokers hipotecarios certificados. Analizamos su perfil financiero para gestionar la mejor tasa de interés fija, comisiones por apertura preferenciales y agilidad en el avalúo bancario sin costo adicional para usted.',
    },
    {
      q: '¿Cuál es el tiempo promedio para concretar una compra o venta?',
      a: 'Para operaciones de contado con documentación en regla, el proceso de escrituración toma habitualmente entre 3 y 5 semanas. En transacciones con crédito bancario o Cofinavit, el plazo promedio es de 6 a 8 semanas, dependiendo del trámite del avalúo y la notaría seleccionada.',
    },
    {
      q: '¿Puedo comercializar mi propiedad en exclusiva con PROMOMEX?',
      a: 'Sí, de hecho es nuestra modalidad recomendada. La exclusividad nos permite invertir un presupuesto sustancial en fotografía de arquitectura, videos cinemáticos, renderizado, pauta segmentada y perfilamiento minucioso de prospectos, manteniendo el control de precio y la máxima discreción patrimonial.',
    },
    {
      q: '¿Qué documentación básica requiero para iniciar el proceso?',
      a: 'Para propietarios: Copia de Escritura Pública inscrita en RPP, identificación oficial vigente, comprobante de domicilio, boletas recientes de predial y agua, y en su caso acta de matrimonio. Para compradores: Identificación oficial, RFC con homoclave, comprobante de ingresos/domicilio y definición de esquema de pago.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-28 md:py-36 bg-[#F7F4EC] text-[#071A2B] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Reveal */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <AnimatedReveal delay={0} distance={16}>
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] text-[#C6A052] font-bold uppercase mb-4">
              <HelpCircle className="w-4 h-4" />
              <span>Resolución de Dudas Frecuentes</span>
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={120} distance={20}>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#071A2B] mb-6 [text-wrap:balance]">
              Preguntas Frecuentes sobre el Proceso
            </h2>
          </AnimatedReveal>

          <AnimatedReveal delay={240} distance={20}>
            <p className="text-base sm:text-lg text-[#071A2B]/80 font-normal leading-relaxed">
              Claridad desde el primer momento. Si requiere mayor detalle sobre algún aspecto legal o fiscal, nuestro equipo jurídico está a su disposición.
            </p>
          </AnimatedReveal>
        </div>

        {/* Apple-style Fluid Accordion List with Staggered Fade */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <AnimatedReveal
                key={idx}
                delay={80 * idx}
                distance={18}
              >
                <div
                  className="bg-white border border-[#071A2B]/[0.08] hover:border-[#C6A052]/40 rounded-3xl overflow-hidden transition-all duration-300 ease-apple shadow-sm hover:shadow-md"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(idx)}
                    className="w-full py-6 px-6 sm:px-8 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-base sm:text-lg font-bold text-[#071A2B] leading-snug">
                      {faq.q}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ease-apple ${
                        isOpen
                          ? 'bg-[#071A2B] text-[#C6A052] rotate-180'
                          : 'bg-[#071A2B]/[0.04] text-[#071A2B]'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Fluid Height Expansion via CSS Grid Rows */}
                  <div
                    className={`grid transition-all duration-300 ease-apple ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 sm:px-8 pb-7 pt-1 border-t border-[#071A2B]/[0.06] bg-[#F7F4EC]/30">
                        <p className="text-sm sm:text-base text-[#071A2B]/80 font-normal leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedReveal>
            );
          })}
        </div>

        {/* AI Advisor Integrated Invitation Banner */}
        <AnimatedReveal delay={250} distance={20}>
          <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white border border-[#071A2B]/[0.08] shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#071A2B] text-[#C6A052] flex items-center justify-center shrink-0">
                <HelpCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display text-base sm:text-lg font-bold text-[#071A2B]">
                  ¿Desea formular una consulta específica en tiempo real?
                </h4>
                <p className="text-xs sm:text-sm text-[#071A2B]/75 font-normal">
                  Utilice nuestro Asesor Virtual IA en la esquina inferior para resolver dudas sobre aranceles, contratos o escrituración.
                </p>
              </div>
            </div>

            <a
              href="#ai-match"
              className="px-6 py-3 rounded-full bg-[#071A2B] hover:bg-[#0f2e4a] text-[#C6A052] font-semibold text-xs tracking-wider uppercase whitespace-nowrap transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-md"
            >
              Probar Asistente IA
            </a>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
};
