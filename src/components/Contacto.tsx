import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
} from 'lucide-react';
import { AnimatedReveal } from './AnimatedReveal';

interface ContactoProps {
  initialInterest?: string;
  onOpenPrivacy?: () => void;
}

export const Contacto: React.FC<ContactoProps> = ({
  initialInterest,
  onOpenPrivacy,
}) => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    correo: '',
    interes: 'Comprar',
    mensaje: '',
    honeypot: '', // anti-bot trap
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedFolio, setSubmittedFolio] = useState('');

  useEffect(() => {
    if (initialInterest) {
      if (initialInterest.toLowerCase().includes('vender') || initialInterest.toLowerCase().includes('comercial')) {
        setFormData((prev) => ({ ...prev, interes: 'Vender', mensaje: `Deseo informes sobre: ${initialInterest}` }));
      } else if (initialInterest.toLowerCase().includes('invert') || initialInterest.toLowerCase().includes('patrimon')) {
        setFormData((prev) => ({ ...prev, interes: 'Invertir', mensaje: `Deseo informes sobre: ${initialInterest}` }));
      } else {
        setFormData((prev) => ({ ...prev, interes: 'Comprar', mensaje: `Deseo informes sobre: ${initialInterest}` }));
      }
    }
  }, [initialInterest]);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.nombre.trim() || formData.nombre.trim().length < 3) {
      newErrors.nombre = 'Por favor ingrese su nombre completo (mínimo 3 caracteres).';
    }

    const phoneDigits = formData.telefono.replace(/\D/g, '');
    if (!phoneDigits || phoneDigits.length < 10) {
      newErrors.telefono = 'Por favor ingrese un número de teléfono válido a 10 dígitos.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.correo || !emailRegex.test(formData.correo)) {
      newErrors.correo = 'Por favor ingrese un correo electrónico válido.';
    }

    if (!formData.mensaje.trim() || formData.mensaje.trim().length < 5) {
      newErrors.mensaje = 'Por favor comparta un breve detalle de su solicitud.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) {
      console.warn('Bot submission blocked via honeypot.');
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const folio = `PMX-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedFolio(folio);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 900);
  };

  const handleReset = () => {
    setFormData({
      nombre: '',
      telefono: '',
      correo: '',
      interes: 'Comprar',
      mensaje: '',
      honeypot: '',
    });
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <section id="contacto" className="py-28 md:py-36 bg-[#071A2B] text-[#F7F4EC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Reveal */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <AnimatedReveal delay={0} distance={16}>
            <div className="flex items-center gap-3 text-xs tracking-[0.25em] text-[#C6A052] font-semibold uppercase mb-4">
              <span className="w-8 h-[1px] bg-[#C6A052]" />
              <span>Atención Directa y Personalizada</span>
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={120} distance={20}>
            <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight text-white mb-6 [text-wrap:balance]">
              Inicie su Conversación Patrimonial con PROMOMEX
            </h2>
          </AnimatedReveal>

          <AnimatedReveal delay={240} distance={20}>
            <p className="text-base sm:text-lg text-[#F7F4EC]/75 font-light leading-relaxed">
              Nuestro equipo de asesores senior le atenderá con total discreción y rigor técnico para orientarle en su próxima adquisición, venta o valuación.
            </p>
          </AnimatedReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Contact Form Bento Card with Reveal */}
          <div className="lg:col-span-7">
            <AnimatedReveal delay={150} distance={24}>
              <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/[0.08] hover:border-[#C6A052]/30 p-8 sm:p-12 rounded-3xl shadow-2xl shadow-black/60 transition-all duration-300 ease-apple">
                {isSuccess ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#C6A052] shadow-inner">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
                      Solicitud Recibida Exitosamente
                    </h3>
                    <p className="text-xs tracking-widest text-[#C6A052] font-semibold uppercase mb-4">
                      Folio de Asignación: {submittedFolio}
                    </p>
                    <p className="text-sm text-[#F7F4EC]/80 max-w-md mx-auto mb-8 font-light leading-relaxed">
                      Un asesor patrimonial senior de PROMOMEX ha recibido sus datos y se comunicará con usted en un lapso no mayor a 2 horas hábiles.
                    </p>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-8 py-3 border border-[#C6A052] text-[#C6A052] hover:bg-[#C6A052]/10 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-300 ease-apple hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                    >
                      Enviar otra consulta
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    {/* Honeypot field */}
                    <div className="hidden" aria-hidden="true">
                      <label htmlFor="website_check">No llene este campo:</label>
                      <input
                        type="text"
                        id="website_check"
                        name="website_check"
                        value={formData.honeypot}
                        onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    <div className="space-y-6">
                      {/* Nombre */}
                      <div>
                        <label htmlFor="nombre" className="block text-xs uppercase tracking-wider font-medium text-[#F7F4EC] mb-2">
                          Nombre Completo <span className="text-[#C6A052]">*</span>
                        </label>
                        <input
                          type="text"
                          id="nombre"
                          value={formData.nombre}
                          onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                          placeholder="Ej. Ing. Roberto Mendoza Garza"
                          className={`w-full bg-white/[0.02] border px-4 py-3.5 text-sm text-white placeholder-white/30 rounded-2xl focus:outline-none transition-all duration-300 ease-apple ${
                            errors.nombre ? 'border-red-500' : 'border-white/[0.1] focus:border-[#C6A052] focus:bg-white/[0.04]'
                          }`}
                        />
                        {errors.nombre && (
                          <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.nombre}
                          </p>
                        )}
                      </div>

                      {/* Grid Teléfono & Correo */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="telefono" className="block text-xs uppercase tracking-wider font-medium text-[#F7F4EC] mb-2">
                            Teléfono / WhatsApp <span className="text-[#C6A052]">*</span>
                          </label>
                          <input
                            type="tel"
                            id="telefono"
                            value={formData.telefono}
                            onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                            placeholder="+52 55 1234 5678"
                            className={`w-full bg-white/[0.02] border px-4 py-3.5 text-sm text-white placeholder-white/30 rounded-2xl focus:outline-none transition-all duration-300 ease-apple ${
                              errors.telefono ? 'border-red-500' : 'border-white/[0.1] focus:border-[#C6A052] focus:bg-white/[0.04]'
                            }`}
                          />
                          {errors.telefono && (
                            <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                              <AlertCircle className="w-3.5 h-3.5" />
                              {errors.telefono}
                            </p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="correo" className="block text-xs uppercase tracking-wider font-medium text-[#F7F4EC] mb-2">
                            Correo Electrónico <span className="text-[#C6A052]">*</span>
                          </label>
                          <input
                            type="email"
                            id="correo"
                            value={formData.correo}
                            onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
                            placeholder="contacto@suempresa.com"
                            className={`w-full bg-white/[0.02] border px-4 py-3.5 text-sm text-white placeholder-white/30 rounded-2xl focus:outline-none transition-all duration-300 ease-apple ${
                              errors.correo ? 'border-red-500' : 'border-white/[0.1] focus:border-[#C6A052] focus:bg-white/[0.04]'
                            }`}
                          />
                          {errors.correo && (
                            <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                              <AlertCircle className="w-3.5 h-3.5" />
                              {errors.correo}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Tipo de Interés (Pill Tabs) */}
                      <div>
                        <label className="block text-xs uppercase tracking-wider font-medium text-[#F7F4EC] mb-2.5">
                          Tipo de Interés Patrimonial <span className="text-[#C6A052]">*</span>
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {['Comprar', 'Vender', 'Invertir', 'Valuación', 'Asesoría Jurídica'].map((type) => (
                            <button
                              type="button"
                              key={type}
                              onClick={() => setFormData({ ...formData, interes: type })}
                              className={`py-2 px-4 text-xs uppercase tracking-wider font-semibold rounded-full border transition-all duration-300 ease-apple cursor-pointer hover:scale-[1.02] active:scale-[0.98] ${
                                formData.interes === type
                                  ? 'bg-[#C6A052] text-[#071A2B] border-[#C6A052] shadow-sm'
                                  : 'bg-white/[0.02] text-[#F7F4EC]/70 border-white/[0.08] hover:border-white/20 hover:text-white'
                              }`}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Mensaje */}
                      <div>
                        <label htmlFor="mensaje" className="block text-xs uppercase tracking-wider font-medium text-[#F7F4EC] mb-2">
                          Detalle de su Requerimiento <span className="text-[#C6A052]">*</span>
                        </label>
                        <textarea
                          id="mensaje"
                          rows={4}
                          value={formData.mensaje}
                          onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                          placeholder="Describa brevemente la zona de interés, características deseadas o tipo de asesoría requerida..."
                          className={`w-full bg-white/[0.02] border px-4 py-3.5 text-sm text-white placeholder-white/30 rounded-2xl focus:outline-none transition-all duration-300 ease-apple resize-none ${
                            errors.mensaje ? 'border-red-500' : 'border-white/[0.1] focus:border-[#C6A052] focus:bg-white/[0.04]'
                          }`}
                        />
                        {errors.mensaje && (
                          <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            {errors.mensaje}
                          </p>
                        )}
                      </div>

                      {/* Privacy Policy disclaimer */}
                      <p className="text-xs text-[#F7F4EC]/60 leading-normal">
                        Sus datos están protegidos bajo estricto secreto profesional conforme a nuestro{' '}
                        <button
                          type="button"
                          onClick={onOpenPrivacy}
                          className="text-[#C6A052] underline hover:text-[#d8b464] cursor-pointer"
                        >
                          Aviso de Privacidad
                        </button>.
                      </p>

                      {/* Submit Button (Apple-style Pill) */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-[#C6A052] to-[#D4B268] text-[#071A2B] font-semibold text-xs sm:text-sm tracking-wider uppercase rounded-full hover:from-[#d8b464] hover:to-[#dfc179] transition-all duration-300 ease-apple hover:scale-[1.015] active:scale-[0.98] shadow-xl hover:shadow-[#C6A052]/25 cursor-pointer disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-[#071A2B] border-t-transparent rounded-full animate-spin" />
                            Procesando Solicitud...
                          </span>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Solicitar Contacto con Asesor</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </AnimatedReveal>
          </div>

          {/* Right Column: Direct Channels in Staggered Bento Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <AnimatedReveal delay={200} distance={20}>
              <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] hover:border-[#C6A052]/30 p-6 rounded-3xl transition-all duration-300 ease-apple hover:scale-[1.01]">
                <div className="flex items-center gap-3 text-[#C6A052] mb-3">
                  <Clock className="w-5 h-5" />
                  <h4 className="font-display text-base font-semibold text-white">
                    Horarios de Atención
                  </h4>
                </div>
                <p className="text-xs text-[#F7F4EC]/80 leading-relaxed font-light">
                  <strong>Lunes a Viernes:</strong> 09:00 - 19:00 hrs<br />
                  <strong>Sábados:</strong> 10:00 - 14:00 hrs (Atención y visitas con previa cita)<br />
                  <strong>Domingos:</strong> Guardia ejecutiva para clientes VIP
                </p>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={300} distance={20}>
              <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] hover:border-[#C6A052]/30 p-6 rounded-3xl transition-all duration-300 ease-apple hover:scale-[1.01]">
                <div className="flex items-center gap-3 text-[#C6A052] mb-3">
                  <Phone className="w-5 h-5" />
                  <h4 className="font-display text-base font-semibold text-white">
                    Línea Telefónica y WhatsApp
                  </h4>
                </div>
                <p className="text-xs text-[#F7F4EC]/80 leading-relaxed font-light mb-2">
                  Atención personalizada directa con la dirección comercial:
                </p>
                <a
                  href="https://wa.me/525584329000?text=Hola,%20solicito%20atención%20inmobiliaria%20con%20PROMOMEX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-semibold text-[#C6A052] hover:underline"
                >
                  +52 (55) 8432-9000
                </a>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={400} distance={20}>
              <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] hover:border-[#C6A052]/30 p-6 rounded-3xl transition-all duration-300 ease-apple hover:scale-[1.01]">
                <div className="flex items-center gap-3 text-[#C6A052] mb-3">
                  <Mail className="w-5 h-5" />
                  <h4 className="font-display text-base font-semibold text-white">
                    Correo Electrónico Institucional
                  </h4>
                </div>
                <p className="text-xs text-[#F7F4EC]/80 leading-relaxed font-light mb-2">
                  Recepción de expedientes, avalúos y propuestas de compra:
                </p>
                <a
                  href="mailto:contacto@promomex.com.mx"
                  className="text-sm font-semibold text-[#C6A052] hover:underline"
                >
                  contacto@promomex.com.mx
                </a>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={500} distance={20}>
              <div className="bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] hover:border-[#C6A052]/30 p-6 rounded-3xl transition-all duration-300 ease-apple hover:scale-[1.01]">
                <div className="flex items-center gap-3 text-[#C6A052] mb-3">
                  <MapPin className="w-5 h-5" />
                  <h4 className="font-display text-base font-semibold text-white">
                    Oficinas Corporativas
                  </h4>
                </div>
                <p className="text-xs text-[#F7F4EC]/80 leading-relaxed font-light">
                  Paseo de la Reforma 483, Piso 14<br />
                  Col. Cuauhtémoc, Alcaldía Cuauhtémoc<br />
                  C.P. 06500, Ciudad de México, CDMX<br />
                  <span className="text-[#C6A052] font-medium mt-1 block">Cobertura Nacional en Zonas de Alta Plusvalía</span>
                </p>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={600} distance={20}>
              <div className="flex items-center gap-3 bg-white/[0.02] border border-[#C6A052]/20 p-4 rounded-2xl">
                <ShieldCheck className="w-5 h-5 text-[#C6A052] shrink-0" />
                <p className="text-xs text-[#F7F4EC]/80 font-light">
                  Todas las solicitudes son gestionadas bajo estrictos acuerdos de confidencialidad patrimonial (NDA).
                </p>
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
