import React, { useState, useRef, useEffect } from 'react';
import {
  Sparkles,
  X,
  Send,
  Bot,
  User,
  ShieldCheck,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
  actionUrl?: string;
  actionText?: string;
}

export const AIAdvisorWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const initialMessages: Message[] = [
    {
      id: 'm1',
      sender: 'ai',
      text: 'Bienvenido a PROMOMEX. Soy su Asistente Virtual Inteligente. Estoy capacitado en nuestro protocolo de auditoría notarial, régimen fiscal inmobiliario y esquema de curaduría patrimonial. ¿En qué aspecto de su proyecto inmobiliario puedo orientarle hoy?',
      timestamp: 'Ahora',
    },
  ];

  const [messages, setMessages] = useState<Message[]>(initialMessages);

  const quickQuestions = [
    {
      label: '¿Cómo garantizan la libertad de gravámenes?',
      prompt: '¿Cómo garantizan la libertad de gravámenes?',
      response:
        'En PROMOMEX, ninguna propiedad se oferta sin antes tramitar un Certificado de Libertad de Gravámenes vigente ante el Registro Público de la Propiedad. Además, nuestro departamento jurídico audita que no existan demandas civiles, embargos mercantiles ni litigios testamentarios abiertos. Cero apartados sin expediente dictaminado.',
    },
    {
      label: '¿Cuáles son sus comisiones y honorarios?',
      prompt: '¿Cuáles son sus comisiones y honorarios?',
      response:
        'Nos regimos por la práctica corporativa estándar del 4% al 6% sobre el valor final escriturado ante Notario Público. No existen cuotas por enlistar ni cargos ocultos. Nuestros honorarios se liquidan única y exclusivamente al concluir con éxito la firma protocolaria.',
    },
    {
      label: '¿Qué impuestos debo pagar (ISAI / ISR)?',
      prompt: '¿Qué impuestos debo pagar (ISAI / ISR)?',
      response:
        'Al comprar un inmueble, el comprador cubre el ISAI (Impuesto sobre Adquisición de Inmuebles, del 2% al 5.5% según la entidad) más aranceles y gastos notariales. Al vender, el vendedor puede pagar ISR por enajenación, aunque existe la exención fiscal legal de hasta 700,000 UDIS si es casa habitación acreditada. Brindamos un cálculo fiscal anticipado exacto sin costo.',
    },
    {
      label: '¿Cómo funciona el portafolio Off-Market?',
      prompt: '¿Cómo funciona el portafolio Off-Market?',
      response:
        'Las residencias y activos más exclusivos de nuestro catálogo no se publican en portales masivos para proteger la privacidad patrimonial de los propietarios. A través de nuestro perfilador o cita privada con un asesor senior, se comparte el acceso a fichas técnicas dictaminadas bajo estricto acuerdo de confidencialidad (NDA).',
    },
    {
      label: '¿Asesoran en créditos bancarios?',
      prompt: '¿Asesoran en créditos bancarios?',
      response:
        'Sí. Mantenemos convenios directos con las mesas de banca patrimonial e hipotecaria de BBVA, Banorte, Santander, Scotiabank y HSBC. Evaluamos su perfil crediticio para gestionar la tasa fija más competitiva, reducciones en comisión por apertura y avalúos bancarios expeditos sin honorarios adicionales para usted.',
    },
  ];

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSendQuery = (queryText: string) => {
    if (!queryText.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: queryText,
      timestamp: 'Ahora',
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // AI Semantic evaluation response
    setTimeout(() => {
      const lower = queryText.toLowerCase();
      let responseText = '';

      if (lower.includes('comision') || lower.includes('honorario') || lower.includes('costo') || lower.includes('cobro')) {
        responseText =
          'Nuestra tarifa oscila entre el 4% y 6% sobre el valor final de cierre protocolizado. En PROMOMEX no cobramos pagos por adelantado ni cuotas de gestión; nuestros honorarios se devengan únicamente con la firma notarial y entrega física exitosa.';
      } else if (lower.includes('impuesto') || lower.includes('isai') || lower.includes('isr') || lower.includes('notari')) {
        responseText =
          'El cálculo fiscal depende de si usted compra (cubre ISAI y derechos de registro, ~4% a 6% global) o vende (cubre ISR por enajenación, con posibilidad de exentar hasta ~700,000 UDIS). Nuestro equipo notarial formula una corrida financiera preventiva sin costo para usted.';
      } else if (lower.includes('gravamen') || lower.includes('seguridad') || lower.includes('legal') || lower.includes('fraude') || lower.includes('riesgo')) {
        responseText =
          'Cero riesgo: Toda propiedad de PROMOMEX cuenta con Certificado de Libertad de Gravámenes expedido por el Registro Público, constancias de no adeudo predial y de agua, y contrato homologado conforme a la norma federal NOM-247-SE-2021. Nunca solicitamos apartados sin dictamen notarial en mano.';
      } else if (lower.includes('propiedad') || lower.includes('casa') || lower.includes('departamento') || lower.includes('terreno') || lower.includes('precio')) {
        responseText =
          'Por rigurosa discreción y resguardo patrimonial, nuestro inventario activo se maneja mediante curaduría privada (Off-Market). Le sugerimos utilizar el módulo "AI Match" en este portal o solicitar contacto directo para compartirle opciones dictaminadas que coincidan exactamente con sus requerimientos.';
      } else if (lower.includes('asesor') || lower.includes('contacto') || lower.includes('telefono') || lower.includes('cita')) {
        responseText =
          'Puede comunicarse inmediatamente con nuestra dirección comercial al teléfono +52 (55) 8432-9000 o mediante el botón de WhatsApp ubicado en este sitio. Un asesor senior le atenderá con total confidencialidad.';
      } else {
        responseText =
          'Excelente consulta. En PROMOMEX cada caso patrimonial es analizado de forma individualizada por nuestro cuerpo jurídico y comercial en Paseo de la Reforma 483, CDMX. Para una respuesta pormenorizada a este requerimiento específico, le invitamos a agendar una sesión privada con uno de nuestros directores patrimoniales.';
      }

      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: responseText,
        timestamp: 'Ahora',
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 750);
  };

  return (
    <>
      {/* Floating Trigger Button (Positioned gracefully at bottom left) */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir Asesor Virtual IA de PROMOMEX"
          className="group relative flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-full bg-[#071A2B]/90 backdrop-blur-xl border border-[#C6A052]/40 hover:border-[#C6A052] text-white shadow-2xl hover:shadow-[#C6A052]/20 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
        >
          {/* Subtle pulse orb */}
          <div className="relative w-2.5 h-2.5 rounded-full bg-[#C6A052]">
            <div className="absolute inset-0 rounded-full bg-[#C6A052] animate-ping opacity-75" />
          </div>

          <Sparkles className="w-4 h-4 text-[#C6A052]" />
          <span className="font-medium text-xs tracking-wide">
            Asesor Virtual IA
          </span>
        </button>
      </div>

      {/* Floating Conversational Window */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="ai-advisor-title"
          className="fixed bottom-22 left-4 sm:left-6 z-50 w-[calc(100vw-32px)] sm:w-[410px] h-[550px] max-h-[82vh] bg-[#071A2B]/95 backdrop-blur-2xl border border-white/[0.12] rounded-3xl shadow-2xl shadow-black/80 flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        >
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-white/[0.08] bg-white/[0.02] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-2xl bg-[#C6A052]/15 border border-[#C6A052]/40 flex items-center justify-center text-[#C6A052]">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 id="ai-advisor-title" className="font-display text-sm font-bold text-white flex items-center gap-1.5">
                  <span>Asesor IA PROMOMEX</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                </h3>
                <p className="text-[10px] uppercase tracking-wider text-[#C6A052] font-medium">
                  Certeza Patrimonial & Legal
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-white/60 hover:text-white rounded-full hover:bg-white/5 transition-colors cursor-pointer"
              aria-label="Cerrar Asesor Virtual"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-2.5 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.sender === 'ai' && (
                  <div className="w-7 h-7 rounded-xl bg-[#C6A052]/20 border border-[#C6A052]/30 flex items-center justify-center text-[#C6A052] shrink-0 mt-0.5">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                )}
                <div
                  className={`p-3.5 rounded-2xl max-w-[85%] leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-gradient-to-r from-[#C6A052] to-[#D4B268] text-[#071A2B] font-medium rounded-tr-none'
                      : 'bg-white/[0.04] border border-white/[0.08] text-white/90 font-light rounded-tl-none'
                  }`}
                >
                  <p>{m.text}</p>
                </div>
                {m.sender === 'user' && (
                  <div className="w-7 h-7 rounded-xl bg-white/10 flex items-center justify-center text-white shrink-0 mt-0.5">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2.5 items-center text-white/50 text-[11px] pl-9">
                <div className="flex gap-1 py-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C6A052] animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C6A052] animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C6A052] animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
                <span>Consultando base de conocimientos jurídicos...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions Horizontal Scroll */}
          <div className="px-3 py-2 border-t border-white/[0.06] bg-white/[0.01]">
            <span className="text-[10px] text-[#C6A052] font-semibold uppercase tracking-wider block mb-1.5 px-1">
              Preguntas Frecuentes Rápidas:
            </span>
            <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {quickQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendQuery(q.prompt)}
                  className="shrink-0 text-[11px] text-white/80 bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-[#C6A052]/40 rounded-full px-3 py-1 transition-all whitespace-nowrap cursor-pointer"
                >
                  {q.label}
                </button>
              ))}
            </div>
          </div>

          {/* Footer Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendQuery(inputValue);
            }}
            className="p-3 border-t border-white/[0.08] bg-[#071A2B] flex items-center gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Escriba su duda legal o inmobiliaria..."
              className="flex-1 bg-white/[0.03] border border-white/[0.1] focus:border-[#C6A052] text-xs text-white placeholder-white/30 px-3.5 py-2.5 rounded-full focus:outline-none"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="p-2.5 rounded-full bg-[#C6A052] text-[#071A2B] disabled:opacity-40 hover:bg-[#d8b464] transition-colors cursor-pointer"
              aria-label="Enviar pregunta"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
