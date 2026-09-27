import React from 'react';
import { PromomexLogo } from './PromomexLogo';
import { ShieldCheck, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onReplayIntro?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onReplayIntro }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#040E18] text-[#F7F4EC] border-t border-white/[0.08] relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Col 1 & 2: Brand & Mission */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <PromomexLogo size="md" lightText={true} />
            </div>
            <p className="text-xs sm:text-sm text-[#F7F4EC]/65 leading-relaxed font-light max-w-sm mb-6">
              Firma inmobiliaria especializada en intermediación patrimonial, consultoría jurídica y comercialización estratégica de activos inmobiliarios de alta plusvalía en México.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#C6A052] font-medium">
              <ShieldCheck className="w-4 h-4 text-[#C6A052]" />
              <span>Certeza Jurídica · Dictámenes Notariales</span>
            </div>
          </div>

          {/* Col 3: Secciones */}
          <div>
            <h4 className="font-display text-xs uppercase tracking-widest text-[#C6A052] font-semibold mb-4">
              Navegación
            </h4>
            <ul className="space-y-3 text-xs text-[#F7F4EC]/75 font-light">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-white transition-colors">
                  Filosofía y Nosotros
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Servicios Patrimoniales
                </a>
              </li>
              <li>
                <a href="#oportunidades" className="hover:text-white transition-colors">
                  Oportunidades en Curaduría
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-white transition-colors">
                  Metodología de Trabajo
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Garantías y Legal */}
          <div>
            <h4 className="font-display text-xs uppercase tracking-widest text-[#C6A052] font-semibold mb-4">
              Marco Legal
            </h4>
            <ul className="space-y-3 text-xs text-[#F7F4EC]/75 font-light">
              <li>
                <a href="#transparencia" className="hover:text-white transition-colors">
                  Política de Transparencia
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenPrivacy}
                  className="hover:text-white transition-colors text-left cursor-pointer underline"
                >
                  Aviso de Privacidad Integral
                </button>
              </li>
              <li>
                <span className="text-[#F7F4EC]/50 text-[11px] block mt-1">
                  Adheridos a la NOM-247-SE-2021
                </span>
              </li>
            </ul>
          </div>

          {/* Col 5: Contacto Directo */}
          <div>
            <h4 className="font-display text-xs uppercase tracking-widest text-[#C6A052] font-semibold mb-4">
              Contacto
            </h4>
            <div className="space-y-2.5 text-xs text-[#F7F4EC]/75 font-light">
              <p>Paseo de la Reforma 483, CDMX</p>
              <p className="text-[#C6A052] font-medium">+52 (55) 8432-9000</p>
              <p>contacto@promomex.com.mx</p>
              <p className="text-[11px] text-[#F7F4EC]/50 pt-2">
                promomex.com.mx
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Replay Intro */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F7F4EC]/60">
          <p>
            © {currentYear} PROMOMEX (promomex.com.mx). Todos los derechos reservados. Registro Inmobiliario Corporativo.
          </p>

          <div className="flex items-center gap-4 sm:gap-6">
            {onReplayIntro && (
              <button
                onClick={onReplayIntro}
                className="px-4 py-1.5 rounded-full border border-white/[0.08] hover:border-[#C6A052]/40 text-xs text-[#C6A052]/80 hover:text-[#C6A052] transition-colors cursor-pointer"
              >
                Ver animación de bienvenida
              </button>
            )}

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-white/[0.1] hover:border-white/30 text-xs text-white/80 hover:text-white transition-all cursor-pointer"
              aria-label="Volver al inicio"
            >
              <span>Subir</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
