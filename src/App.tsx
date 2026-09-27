/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useCallback, lazy, Suspense } from 'react';
import { IntroLoader } from './components/IntroLoader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Nosotros } from './components/Nosotros';
import { Servicios } from './components/Servicios';
import { Oportunidades } from './components/Oportunidades';
import { ComoFunciona } from './components/ComoFunciona';
import { Transparencia } from './components/Transparencia';
import { FAQ } from './components/FAQ';
import { Contacto } from './components/Contacto';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';

// Code splitting for secondary overlay modals: only loaded when invoked
const PrivacyModal = lazy(() =>
  import('./components/PrivacyModal').then((m) => ({ default: m.PrivacyModal }))
);
const CustomOpportunityModal = lazy(() =>
  import('./components/CustomOpportunityModal').then((m) => ({
    default: m.CustomOpportunityModal,
  }))
);

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isCustomOppOpen, setIsCustomOppOpen] = useState(false);
  const [customOppPreset, setCustomOppPreset] = useState('');
  const [contactInitialInterest, setContactInitialInterest] = useState('');

  // Smooth navigation helper memoized
  const navigateToSection = useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleContactClick = useCallback(() => {
    navigateToSection('contacto');
  }, [navigateToSection]);

  const handleExploreOpportunities = useCallback(() => {
    navigateToSection('oportunidades');
  }, [navigateToSection]);

  const handleExploreServices = useCallback(() => {
    navigateToSection('servicios');
  }, [navigateToSection]);

  const handleServiceSelect = useCallback(
    (serviceTitle: string) => {
      setContactInitialInterest(serviceTitle);
      navigateToSection('contacto');
    },
    [navigateToSection]
  );

  const handleRequestCustomOpportunity = useCallback(
    (presetInterest?: string) => {
      setCustomOppPreset(presetInterest || 'Oportunidades Residenciales Exclusivas');
      setIsCustomOppOpen(true);
    },
    []
  );

  const handleReplayIntro = useCallback(() => {
    setShowIntro(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleIntroComplete = useCallback(() => {
    setShowIntro(false);
  }, []);

  return (
    <div className="min-h-screen bg-[#071A2B] text-[#F7F4EC] relative selection:bg-[#C6A052] selection:text-[#071A2B]">
      {/* 2. PANTALLA DE CARGA INICIAL (LOADER / INTRO SCREEN) */}
      {showIntro && <IntroLoader onComplete={handleIntroComplete} />}

      {/* 1. Header / Navbar */}
      <Navbar onContactClick={handleContactClick} />

      {/* Main Content Container with strict section order */}
      <main>
        {/* 2. Hero / Inicio */}
        <Hero
          onExploreOpportunities={handleExploreOpportunities}
          onExploreServices={handleExploreServices}
        />

        {/* 3. Nosotros (3 Interactive Pillars: Análisis, Claridad, Seguimiento) */}
        <Nosotros onNavigate={navigateToSection} />

        {/* 4. Servicios (6 tarjetas con micro-interacciones) */}
        <Servicios onSelectService={handleServiceSelect} />

        {/* 5. Oportunidades (Inventario - Empty State Elegante Antialucinación) */}
        <Oportunidades onRequestCustom={handleRequestCustomOpportunity} />

        {/* 6. Cómo Funciona (4 etapas con línea de tiempo visual) */}
        <ComoFunciona />

        {/* 7. Transparencia (Certeza jurídica y cero letras chiquitas) */}
        <Transparencia />

        {/* 8. FAQ (Acordeón interactivo con 6 preguntas esenciales) */}
        <FAQ />

        {/* 9. Contacto (Formulario con validación y honeypot + Canales) */}
        <Contacto
          initialInterest={contactInitialInterest}
          onOpenPrivacy={() => setIsPrivacyOpen(true)}
        />
      </main>

      {/* 10. Footer y Widget Flotante */}
      <Footer
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
        onReplayIntro={handleReplayIntro}
      />

      {/* Floating WhatsApp Widget */}
      <WhatsAppWidget />

      {/* Lazily loaded Modals (only mounted when active) */}
      {isPrivacyOpen && (
        <Suspense fallback={null}>
          <PrivacyModal
            isOpen={isPrivacyOpen}
            onClose={() => setIsPrivacyOpen(false)}
          />
        </Suspense>
      )}

      {isCustomOppOpen && (
        <Suspense fallback={null}>
          <CustomOpportunityModal
            isOpen={isCustomOppOpen}
            onClose={() => setIsCustomOppOpen(false)}
            presetInterest={customOppPreset}
          />
        </Suspense>
      )}
    </div>
  );
}
