import React, { useState, useEffect, useRef } from 'react';
import promomexOfficialImg from '../promomex-official-transparent.png';

interface IntroLoaderProps {
  onComplete: () => void;
}

export const IntroLoader: React.FC<IntroLoaderProps> = ({ onComplete }) => {
  // 1. 0.0s – 3.0s: Revelado continuo con haz láser dorado de izquierda ("P") a derecha ("M")
  // 2. 3.2s: Entrada de la frase «BIENVENIDO, DESCUBRE LA CASA DE TUS SUEÑOS» con fade-in suave
  // 3. 3.2s – 4.9s: 1.7s de lectura cómoda
  // 4. 4.9s – 5.2s: Fade-out suave (300ms) y pase al sitio web principal (fade-in 300ms)
  // 5. Saltar intro: Salida instantánea en 0ms
  const [showPhrase, setShowPhrase] = useState(false);
  const [isFading, setIsFading] = useState(false);

  const timersRef = useRef<number[]>([]);

  useEffect(() => {
    // Al segundo 3.2: Entrada suave de la frase de bienvenida
    const t1 = window.setTimeout(() => {
      setShowPhrase(true);
    }, 3200);

    // A los 4.9s: Inicia el fade-out de la pantalla
    const t2 = window.setTimeout(() => {
      setIsFading(true);
    }, 4900);

    // A los 5.2s: Conclusión y llamada a onComplete para montar la página principal
    const t3 = window.setTimeout(() => {
      onComplete();
    }, 5200);

    timersRef.current = [t1, t2, t3];

    return () => {
      timersRef.current.forEach((t) => window.clearTimeout(t));
    };
  }, [onComplete]);

  // Salida inmediata en 0ms al hacer clic en "Saltar intro"
  const handleInstantSkip = () => {
    timersRef.current.forEach((t) => window.clearTimeout(t));
    onComplete();
  };

  return (
    <aside
      aria-label="Pantalla de bienvenida PROMOMEX"
      className={`fixed inset-0 w-screen h-screen z-50 flex flex-col items-center justify-center bg-[#071A2B] text-[#F7F4EC] select-none transition-opacity duration-300 ease-out ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Botón Saltar Intro Instantáneo (0ms) */}
      <button
        type="button"
        onClick={handleInstantSkip}
        className="absolute top-6 right-6 md:top-8 md:right-8 z-50 text-xs tracking-widest text-[#C6A052]/90 hover:text-[#C6A052] py-2 px-4 rounded-full border border-white/10 hover:border-[#C6A052]/60 bg-white/[0.04] hover:bg-white/[0.08] cursor-pointer active:scale-95 transition-colors"
      >
        SALTAR INTRO
      </button>

      {/* Centro Absoluto */}
      <div className="flex flex-col items-center justify-center text-center px-4 w-full">
        {/* Contenedor del Logo con Ancho Fijo Controlado (w-64 md:w-80 h-auto) */}
        <div className="w-64 md:w-80 h-auto mx-auto relative overflow-hidden flex items-center justify-center">
          
          {/* Capa de la Imagen Oficial con Revelado Láser de Izquierda ("P") a Derecha ("M") */}
          <div className="w-full h-auto relative animate-laser-reveal">
            <img
              src={promomexOfficialImg}
              alt="Promomex Oficial"
              className="w-full h-auto object-contain block select-none pointer-events-none filter drop-shadow-[0_4px_24px_rgba(198,160,82,0.35)]"
            />
          </div>

          {/* Línea / Destello Láser Vertical Dorado de Avance (#C6A052) con Resplandor */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 bottom-0 w-[2.5px] bg-gradient-to-b from-transparent via-[#FFF7DB] to-transparent shadow-[0_0_12px_#C6A052,0_0_24px_#FFE28A] animate-laser-line">
              {/* Puntos de resplandor sobre el haz láser */}
              <div className="absolute top-1/4 -left-[3px] w-2 h-2 rounded-full bg-[#FFFDF2] shadow-[0_0_8px_#C6A052]" />
              <div className="absolute top-1/2 -left-[4px] w-2.5 h-2.5 rounded-full bg-[#FFFFFF] shadow-[0_0_14px_#FFE28A]" />
              <div className="absolute top-3/4 -left-[3px] w-2 h-2 rounded-full bg-[#FFFDF2] shadow-[0_0_8px_#C6A052]" />
            </div>
          </div>
        </div>

        {/* Frase de Bienvenida: Fade-In a los 3.2s */}
        <div
          className={`flex flex-col items-center mt-6 md:mt-8 transition-all duration-700 ease-out px-4 ${
            showPhrase
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-2 pointer-events-none'
          }`}
        >
          {/* Separador fino en oro */}
          <div className="flex items-center gap-3 w-32 md:w-44 mb-3">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C6A052]/80" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6A052]" />
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#C6A052]/80" />
          </div>

          <p className="font-display text-sm md:text-base lg:text-lg tracking-[0.2em] uppercase font-light text-[#C6A052] text-center max-w-xl leading-relaxed">
            «BIENVENIDO, DESCUBRE LA CASA DE TUS SUEÑOS»
          </p>

          <span className="text-[10px] md:text-xs tracking-[0.28em] uppercase text-[#F7F4EC]/60 font-normal mt-2">
            Arquitectura Patrimonial & Certeza Inmobiliaria
          </span>
        </div>
      </div>
    </aside>
  );
};
