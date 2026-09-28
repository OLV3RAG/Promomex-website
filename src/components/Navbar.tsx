import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { PromomexLogo } from './PromomexLogo';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    let rafId: number | null = null;

    const handleScroll = () => {
      if (!ticking) {
        rafId = window.requestAnimationFrame(() => {
          const scrolled = window.scrollY > 20;
          setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Match IA', href: '#ai-match', isAI: true },
    { label: 'Oportunidades', href: '#oportunidades' },
    { label: 'Proceso', href: '#como-funciona' },
    { label: 'Certeza Jurídica', href: '#transparencia' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#071A2B]/75 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl shadow-black/40'
          : 'bg-[#071A2B]/60 backdrop-blur-md border-b border-white/[0.06] py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Brand Wordmark & Emblem */}
          <a
            href="#inicio"
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="flex items-center gap-2 group transition-opacity hover:opacity-90 cursor-pointer"
            aria-label="PROMOMEX Bienes Raíces Inicio"
          >
            <PromomexLogo size="md" lightText={true} />
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-8 text-[13px] font-medium text-white/70">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`hover:text-white transition-colors duration-200 relative py-1 hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C6A052] after:transition-all after:duration-300 whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  link.isAI ? 'text-[#C6A052] font-semibold' : ''
                }`}
              >
                <span>{link.label}</span>
                {link.isAI && (
                  <span className="px-1.5 py-0.2 text-[9px] font-bold rounded-full bg-[#C6A052]/20 border border-[#C6A052]/40 text-[#f9e8b2]">
                    IA
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action CTA (Apple-style Pill) */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onContactClick}
              className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-[#C6A052] to-[#D4B268] text-[#071A2B] font-semibold text-xs tracking-wider uppercase rounded-full hover:from-[#d8b464] hover:to-[#dfc179] transition-all duration-300 hover:scale-[1.03] shadow-md hover:shadow-[#C6A052]/25 whitespace-nowrap cursor-pointer active:scale-95"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Contactar Asesor</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white/80 hover:text-white transition-colors rounded-full"
            aria-label="Abrir menú de navegación"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#071A2B]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 transition-all duration-300">
          <nav className="flex flex-col gap-3.5 text-sm font-medium text-white/80">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="py-2 border-b border-white/5 hover:text-[#C6A052] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onContactClick();
                }}
                className="w-full py-3 bg-[#C6A052] text-[#071A2B] font-semibold text-xs tracking-wider uppercase text-center rounded-full hover:bg-[#d8b464] transition-colors shadow-md"
              >
                Contactar Asesor Patrimonial
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
