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
import { AIMatchWizard } from './components/AIMatchWizard';
import { Oportunidades } from './components/Oportunidades';
import { ComoFunciona } from './components/ComoFunciona';
import { Transparencia } from './components/Transparencia';
import { FAQ } from './components/FAQ';
import { Contacto } from './components/Contacto';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { AIAdvisorWidget } from './components/AIAdvisorWidget';

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

  const handleApplyAIProfileToContact = useCallback(
    (profileSummary: string) => {
      setContactInitialInterest(profileSummary);
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
      {/* PANTALLA DE CARGA INICIAL: Trazado vectorial PROMOMEX 1.svg y frase oficial */}
      {showIntro && <IntroLoader onComplete={handleIntroComplete} />}

      {/* Header / Navbar con Frosted Glass y Enlaces Estilizados */}
      <Navbar onContactClick={handleContactClick} />

      {/* Main Content Container: Esquemas visuales minimalistas estilo Apple Bento */}
      <main>
        {/* 1. Hero / Inicio: Tipografía balanceada, prueba cuantitativa y render arquitectónico */}
        <Hero
          onExploreOpportunities={handleExploreOpportunities}
          onExploreServices={handleExploreServices}
        />

        {/* 2. Nosotros: 3 pilares Bento compactos y banner arquitectónico de alta gama */}
        <Nosotros onNavigate={navigateToSection} />

        {/* 3. Servicios: 6 tarjetas Bento condensadas con chips rápidos */}
        <Servicios onSelectService={handleServiceSelect} />

        {/* 4. ESQUEMA 3: Módulo IA "Match Patrimonial" (Selector rápido de 3 clics) */}
        <AIMatchWizard onApplyProfileToContact={handleApplyAIProfileToContact} />

        {/* 5. Oportunidades: Estado vacío (Empty State) con curaduría notarial activa */}
        <Oportunidades onRequestCustom={handleRequestCustomOpportunity} />

        {/* 6. ESQUEMA 1: Cómo Funciona (Línea de tiempo horizontal de 4 nodos 1-2-3-4) */}
        <ComoFunciona />

        {/* 7. ESQUEMA 2: Ecosistema de Certeza Jurídica (Dashboard de 3 tarjetas métricas) */}
        <Transparencia />

        {/* 8. FAQ: Preguntas frecuentes con acordeón interactivo sin saltos */}
        <FAQ />

        {/* 9. Contacto: Formulario con técnica honeypot y canales directos */}
        <Contacto
          initialInterest={contactInitialInterest}
          onOpenPrivacy={() => setIsPrivacyOpen(true)}
        />
      </main>

      {/* Footer y Enlace para Revivir la Intro */}
      <Footer
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
        onReplayIntro={handleReplayIntro}
      />

      {/* Floating Interactive Assistants */}
      <WhatsAppWidget />
      <AIAdvisorWidget />

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
