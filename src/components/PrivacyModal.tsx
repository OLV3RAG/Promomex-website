import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity"
    >
      <div className="relative w-full max-w-3xl max-h-[85vh] bg-[#071A2B]/95 backdrop-blur-2xl border border-white/[0.1] text-[#F7F4EC] rounded-3xl shadow-2xl shadow-black/80 flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="p-6 sm:p-7 border-b border-white/[0.08] flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-[#C6A052]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 id="privacy-modal-title" className="font-display text-lg sm:text-xl font-bold text-white">
                Aviso de Privacidad Integral
              </h3>
              <p className="text-[11px] text-[#C6A052] uppercase tracking-wider font-medium">
                PROMOMEX · promomex.com.mx
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#F7F4EC]/60 hover:text-white hover:bg-white/5 rounded-full transition-colors cursor-pointer"
            aria-label="Cerrar aviso de privacidad"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-5 text-xs sm:text-sm text-[#F7F4EC]/80 font-light leading-relaxed">
          <p className="text-white font-medium">
            En cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP), su Reglamento y los Lineamientos del Aviso de Privacidad vigentes en los Estados Unidos Mexicanos, <strong>PROMOMEX</strong> pone a su disposición el presente Aviso de Privacidad.
          </p>

          <h4 className="font-display text-sm font-bold text-[#C6A052] uppercase tracking-wider pt-2">
            1. Identidad y Domicilio del Responsable
          </h4>
          <p>
            PROMOMEX, con domicilio en Paseo de la Reforma 483, Colonia Cuauhtémoc, C.P. 06500, Ciudad de México, es responsable del uso, tratamiento y salvaguarda de sus datos personales y patrimoniales recabados a través del portal <strong>promomex.com.mx</strong> o mediante atención personalizada presencial o remota.
          </p>

          <h4 className="font-display text-sm font-bold text-[#C6A052] uppercase tracking-wider pt-2">
            2. Datos Personales Recabados
          </h4>
          <p>
            Para la adecuada prestación de nuestros servicios de intermediación inmobiliaria y consultoría jurídica, podemos recabar: datos de identificación (nombre completo, RFC, CURP, estado civil), datos de contacto (correo electrónico, teléfonos) y, en etapas formales de adquisición o venta, antecedentes registrales, escrituras públicas y datos financieros relativos a solvencia y créditos hipotecarios.
          </p>

          <h4 className="font-display text-sm font-bold text-[#C6A052] uppercase tracking-wider pt-2">
            3. Finalidades Primarias del Tratamiento
          </h4>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Elaborar perfiles y recomendaciones de inmuebles adaptados a sus requerimientos patrimoniales.</li>
            <li>Gestionar citas de inspección técnica y visitas privadas a propiedades.</li>
            <li>Realizar investigaciones registrales y dictámenes de viabilidad jurídica ante el Registro Público de la Propiedad.</li>
            <li>Coordinar contratos de promesa, compraventa y escrituración protocolaria ante Notario Público.</li>
            <li>Dar cumplimiento a la Norma Oficial Mexicana NOM-247-SE-2021.</li>
          </ul>

          <h4 className="font-display text-sm font-bold text-[#C6A052] uppercase tracking-wider pt-2">
            4. Secreto Profesional y Confidencialidad
          </h4>
          <p>
            PROMOMEX no comercializa, transfiere ni cede sus datos personales a terceros con fines mercadotécnicos. Sus datos únicamente serán compartidos con Notarías Públicas, peritos valuadores acreditados e instituciones bancarias estrictamente involucradas en su proceso de adquisición o venta.
          </p>

          <h4 className="font-display text-sm font-bold text-[#C6A052] uppercase tracking-wider pt-2">
            5. Derechos ARCO
          </h4>
          <p>
            Usted tiene derecho en cualquier momento a ejercer sus derechos de Acceso, Rectificación, Cancelación y Oposición (ARCO) sobre sus datos personales, enviando una solicitud formal al correo:{' '}
            <a href="mailto:contacto@promomex.com.mx" className="text-[#C6A052] underline font-medium">
              contacto@promomex.com.mx
            </a>.
          </p>

          <p className="text-[11px] text-[#F7F4EC]/60 pt-4 border-t border-white/10">
            Última actualización: Enero de 2026. PROMOMEX se reserva el derecho de efectuar modificaciones al presente aviso, las cuales se publicarán oportunamente en promomex.com.mx.
          </p>
        </div>

        {/* Modal Footer */}
        <div className="p-5 sm:p-6 bg-white/[0.02] border-t border-white/[0.08] flex justify-end">
          <button
            onClick={onClose}
            className="px-8 py-2.5 bg-[#C6A052] text-[#071A2B] text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-[#d8b464] transition-colors cursor-pointer"
          >
            Entendido y Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};
