import React, { useState } from 'react';
import { X, Search, CheckCircle2, AlertCircle } from 'lucide-react';

interface CustomOpportunityModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetInterest?: string;
}

export const CustomOpportunityModal: React.FC<CustomOpportunityModalProps> = ({
  isOpen,
  onClose,
  presetInterest = '',
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [budgetRange, setBudgetRange] = useState('$10M a $25M MXN');
  const [zone, setZone] = useState('Poniente / Bosques / Santa Fe');
  const [notes, setNotes] = useState(presetInterest ? `Interés particular: ${presetInterest}` : '');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim()) {
      setError('Por favor complete los campos obligatorios de contacto.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setError('');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="custom-opp-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
    >
      <div className="relative w-full max-w-lg bg-[#071A2B]/95 backdrop-blur-2xl border border-white/[0.1] text-[#F7F4EC] rounded-3xl shadow-2xl shadow-black/80 overflow-hidden">
        {/* Header */}
        <div className="p-6 sm:p-7 bg-white/[0.02] border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-[#C6A052]">
              <Search className="w-5 h-5" />
            </div>
            <div>
              <h3 id="custom-opp-title" className="font-display text-lg sm:text-xl font-bold text-white">
                Búsqueda Patrimonial Privada
              </h3>
              <p className="text-[11px] text-[#C6A052] uppercase tracking-wider font-medium">
                Acceso a Portafolio Off-Market
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-2 text-[#F7F4EC]/60 hover:text-white hover:bg-white/5 rounded-full transition-colors cursor-pointer"
            aria-label="Cerrar modal de oportunidades"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#C6A052] shadow-inner">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
                Perfil de Búsqueda Registrado
              </h4>
              <p className="text-xs text-[#C6A052] uppercase tracking-widest font-semibold mb-4">
                Folio Confidencial: VIP-{Math.floor(1000 + Math.random() * 9000)}
              </p>
              <p className="text-xs sm:text-sm text-[#F7F4EC]/80 leading-relaxed font-light mb-6">
                Hemos asignado su perfil a nuestro comité de adquisiciones. En cuanto un inmueble que cumpla con sus especificaciones concluya su auditoría notarial, le contactaremos de forma prioritaria y privada.
              </p>
              <button
                type="button"
                onClick={handleClose}
                className="px-8 py-2.5 bg-[#C6A052] text-[#071A2B] text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-[#d8b464] transition-colors cursor-pointer"
              >
                Cerrar
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-[#F7F4EC]/75 font-light leading-relaxed mb-2">
                Especifique los parámetros de su requerimiento. Toda la información se procesa bajo estricto sigilo fiduciario.
              </p>

              {error && (
                <div className="flex items-center gap-2 p-3 bg-red-900/30 border border-red-500/50 text-red-200 text-xs rounded-xl">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div>
                <label className="block text-xs uppercase tracking-wider font-medium text-[#F7F4EC] mb-1.5">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nombre y Apellidos"
                  className="w-full bg-white/[0.02] border border-white/[0.1] focus:border-[#C6A052] text-xs text-white px-4 py-3 rounded-2xl focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-[#F7F4EC] mb-1.5">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="correo@ejemplo.com"
                    className="w-full bg-white/[0.02] border border-white/[0.1] focus:border-[#C6A052] text-xs text-white px-4 py-3 rounded-2xl focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-[#F7F4EC] mb-1.5">
                    Teléfono Celular *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="10 dígitos"
                    className="w-full bg-white/[0.02] border border-white/[0.1] focus:border-[#C6A052] text-xs text-white px-4 py-3 rounded-2xl focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-[#F7F4EC] mb-1.5">
                    Rango de Inversión Estimado
                  </label>
                  <select
                    value={budgetRange}
                    onChange={(e) => setBudgetRange(e.target.value)}
                    className="w-full bg-[#071A2B] border border-white/[0.1] focus:border-[#C6A052] text-xs text-white px-4 py-3 rounded-2xl focus:outline-none"
                  >
                    <option value="$5M a $10M MXN">$5M a $10M MXN</option>
                    <option value="$10M a $25M MXN">$10M a $25M MXN</option>
                    <option value="$25M a $50M MXN">$25M a $50M MXN</option>
                    <option value="Más de $50M MXN">Más de $50M MXN</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-[#F7F4EC] mb-1.5">
                    Zona Predilecta
                  </label>
                  <select
                    value={zone}
                    onChange={(e) => setZone(e.target.value)}
                    className="w-full bg-[#071A2B] border border-white/[0.1] focus:border-[#C6A052] text-xs text-white px-4 py-3 rounded-2xl focus:outline-none"
                  >
                    <option value="Poniente / Bosques / Santa Fe">Poniente / Bosques / Santa Fe</option>
                    <option value="Polanco / Lomas de Chapultepec">Polanco / Lomas</option>
                    <option value="San Ángel / Pedregal / Sur">San Ángel / Pedregal / Sur</option>
                    <option value="Querétaro / Juriquilla">Querétaro / Bajío</option>
                    <option value="Nacional / Riviera Maya">Oportunidad Nacional</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-medium text-[#F7F4EC] mb-1.5">
                  Detalles o Características Especiales
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Número de recámaras, jardín, doble altura, amenidades o especificaciones especiales..."
                  className="w-full bg-white/[0.02] border border-white/[0.1] focus:border-[#C6A052] text-xs text-white px-4 py-2.5 rounded-2xl focus:outline-none resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-[#C6A052] to-[#D4B268] text-[#071A2B] font-semibold text-xs tracking-wider uppercase rounded-full hover:from-[#d8b464] hover:to-[#dfc179] transition-all cursor-pointer shadow-lg active:scale-95"
                >
                  Registrar Requerimiento Patrimonial
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
