import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import ConsultationModal from './components/ConsultationModal';
import LookbookModal from './components/LookbookModal';

// Dedicated Individual Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import TransformationsPage from './pages/TransformationsPage';
import EstimatorPage from './pages/EstimatorPage';
import PortfolioPage from './pages/PortfolioPage';
import ProcessPage from './pages/ProcessPage';
import ReviewsPage from './pages/ReviewsPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const getInitialPage = () => {
    const hash = window.location.hash.replace('#', '').trim();
    const validPages = ['home', 'services', 'transformations', 'estimator', 'portfolio', 'process', 'reviews', 'contact'];
    return validPages.includes(hash) ? hash : 'home';
  };

  const [currentPage, setCurrentPage] = useState(getInitialPage);
  const [pageKey, setPageKey] = useState(0);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isLookbookOpen, setIsLookbookOpen] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLightMode, setIsLightMode] = useState(() => {
    return localStorage.getItem('skyrock_theme') === 'light';
  });

  // Scroll progress bar
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setScrollProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Toggle theme & store preference
  const toggleTheme = () => {
    setIsLightMode((prev) => {
      const next = !prev;
      localStorage.setItem('skyrock_theme', next ? 'light' : 'dark');
      return next;
    });
  };

  // Synchronize hash on browser back/forward
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').trim();
      const validPages = ['home', 'services', 'transformations', 'estimator', 'portfolio', 'process', 'reviews', 'contact'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (pageId) => {
    setCurrentPage(pageId);
    setPageKey(k => k + 1);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenConsultation = (serviceName = '') => {
    setSelectedServiceForQuote(serviceName || '');
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
    setSelectedServiceForQuote('');
  };

  const renderActivePage = () => {
    switch (currentPage) {
      case 'services':
        return <ServicesPage onOpenConsultation={handleOpenConsultation} onNavigate={handleNavigate} />;
      case 'transformations':
        return <TransformationsPage onOpenConsultation={handleOpenConsultation} onNavigate={handleNavigate} />;
      case 'estimator':
        return <EstimatorPage onOpenConsultation={handleOpenConsultation} />;
      case 'portfolio':
        return <PortfolioPage onOpenConsultation={handleOpenConsultation} />;
      case 'process':
        return <ProcessPage onOpenConsultation={handleOpenConsultation} />;
      case 'reviews':
        return <ReviewsPage onOpenConsultation={handleOpenConsultation} />;
      case 'contact':
        return <ContactPage />;
      case 'home':
      default:
        return <HomePage onNavigate={handleNavigate} onOpenConsultation={handleOpenConsultation} />;
    }
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans selection:bg-gold-500 selection:text-black transition-colors duration-300 ${
      isLightMode 
        ? 'bg-[#FAF8F5] text-slate-800' 
        : 'bg-obsidian-950 text-slate-100'
    }`}>
      {/* Gold scroll progress bar */}
      <div
        id="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Top Fixed Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation('')}
        onOpenLookbook={() => setIsLookbookOpen(true)}
        isLightMode={isLightMode}
        onToggleTheme={toggleTheme}
      />

      {/* Main Dynamic Viewport with Page Flip Transition */}
      <main className="flex-1">
        <div key={pageKey} className="page-enter">
          {renderActivePage()}
        </div>
      </main>

      {/* Luxury Footer with Page Links & Lookbook Trigger */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation('')}
      />

      {/* Persistent WhatsApp & Hotline Dialing Buttons */}
      <FloatingActions />

      {/* Site Consultation & Laser Measurement Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
        initialService={selectedServiceForQuote}
      />

      {/* Digital Lookbook & Catalog Modal */}
      <LookbookModal
        isOpen={isLookbookOpen}
        onClose={() => setIsLookbookOpen(false)}
      />
    </div>
  );
}
