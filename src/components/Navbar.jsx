import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowUpRight, Sparkles, BookOpen, Sun, Moon } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function Navbar({ currentPage, onNavigate, onOpenConsultation, onOpenLookbook, isLightMode, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open to prevent background scrolling
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', id: 'home', roman: 'I' },
    { name: 'Services', id: 'services', roman: 'II' },
    { name: 'Transformations', id: 'transformations', roman: 'III' },
    { name: 'Cost Estimator', id: 'estimator', roman: 'IV' },
    { name: 'Portfolio', id: 'portfolio', roman: 'V' },
    { name: 'How It Works', id: 'process', roman: 'VI' },
    { name: 'Reviews', id: 'reviews', roman: 'VII' },
    { name: 'Contact', id: 'contact', roman: 'VIII' },
  ];

  const handleNavClick = (id) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? isLightMode 
          ? 'bg-[#FAF8F5]/98 backdrop-blur-xl py-2.5 sm:py-3 shadow-xl border-b border-[#D4AF37]/30'
          : 'bg-[#07090D]/98 backdrop-blur-xl py-2.5 sm:py-3 shadow-2xl border-b border-[#D4AF37]/25' 
        : 'bg-gradient-to-b from-[#07090D]/95 via-[#07090D]/85 to-transparent py-3 sm:py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Classical Brand Crest */}
          <button 
            onClick={() => handleNavClick('home')} 
            className="flex items-center gap-2 sm:gap-3.5 group text-left cursor-pointer shrink-0"
          >
            <div className="relative w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full p-0.5 bg-gradient-to-br from-[#FFF2CF] via-[#D4AF37] to-[#8C6D1F] shadow-[0_0_15px_rgba(212,175,55,0.35)] group-hover:scale-105 transition-transform duration-300 shrink-0">
              <img 
                src="/logo.svg" 
                alt="Skyrock Interiors Limited Logo" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-cinzel text-sm sm:text-lg md:text-xl font-bold tracking-[0.16em] sm:tracking-[0.2em] text-gold-gradient group-hover:brightness-125 transition-all leading-tight">
                SKYROCK
              </span>
              <span className={`text-[7px] sm:text-[9px] font-semibold tracking-[0.25em] sm:tracking-[0.35em] uppercase leading-tight ${
                isLightMode ? 'text-slate-700' : 'text-[#C5A880]'
              }`}>
                INTERIORS LIMITED
              </span>
            </div>
          </button>

          {/* Stately Classical Navigation (Visible on Large Desktops xl+) */}
          <nav className="hidden xl:flex items-center gap-1 px-3 py-1.5 rounded-full border border-[#D4AF37]/20 bg-[#0C1018]/80 backdrop-blur-md shadow-inner">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-3.5 py-1.5 rounded-full text-[11px] font-cinzel tracking-[0.14em] uppercase transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#D4AF37] via-[#E5C378] to-[#AA8214] text-[#07090D] font-bold shadow-[0_0_20px_rgba(212,175,55,0.4)]'
                      : 'text-slate-300 hover:text-[#FFF2CF] hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Right Symmetrical Actions */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              className="p-1.5 sm:p-2 rounded-full border border-[#D4AF37]/30 bg-[#0C1018] text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all shadow-sm shrink-0"
              title={isLightMode ? "Switch to Obsidian Dark Luxury" : "Switch to Alabaster Light Luxury"}
              aria-label="Toggle Theme"
            >
              {isLightMode ? <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
            </button>

            {/* Lookbook Catalog Button (Hidden on very small screens, visible on md+) */}
            <button
              onClick={onOpenLookbook}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 sm:py-2 rounded-full border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37]/10 text-xs font-cinzel tracking-wider uppercase transition-all shrink-0"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="text-[10px] tracking-[0.15em] font-semibold">Lookbook</span>
            </button>

            {/* Hotline Call Button (Hidden on small, visible on lg+) */}
            <a
              href={`tel:${COMPANY_INFO.phones[0].international}`}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 sm:py-2 rounded-full border border-slate-700/80 text-slate-300 hover:text-white hover:border-[#D4AF37]/50 transition-all text-xs font-medium shrink-0"
              title="Call Primary Hotline"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="tracking-wider text-[11px] font-sans">{COMPANY_INFO.phones[0].display}</span>
            </a>

            {/* Bespoke Enquiry Button */}
            <button
              onClick={() => onOpenConsultation('')}
              className="relative inline-flex items-center gap-1.5 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#E5C378] to-[#AA8214] text-[#07090D] font-cinzel font-bold text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] shadow-[0_0_20px_rgba(212,175,55,0.35)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:brightness-110 active:scale-95 transition-all duration-300 shrink-0"
            >
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span className="hidden xs:inline">Bespoke Quote</span>
              <span className="xs:hidden">Quote</span>
            </button>

            {/* Mobile / Tablet Menu Button (Visible below xl) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-1.5 sm:p-2 text-slate-300 hover:text-[#D4AF37] transition-colors rounded-lg bg-[#0C1018] border border-slate-800 shrink-0"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Touch-Optimized for all phone screen heights) */}
      {mobileMenuOpen && (
        <div className={`xl:hidden border-b px-4 sm:px-6 py-5 mt-2 space-y-4 animate-in slide-in-from-top-3 duration-300 backdrop-blur-2xl max-h-[85vh] overflow-y-auto ${
          isLightMode 
            ? 'bg-[#FAF8F5]/98 border-[#D4AF37]/40 text-slate-800 shadow-2xl' 
            : 'bg-[#07090D]/98 border-[#D4AF37]/30 text-white shadow-2xl'
        }`}>
          {/* Navigation Links Grid / Stack */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pb-4 border-b border-slate-800">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left text-xs font-cinzel tracking-[0.16em] uppercase py-3 px-3.5 rounded-xl flex items-center justify-between transition-all min-h-[44px] ${
                    isActive
                      ? 'bg-gradient-to-r from-[#D4AF37] to-[#B89225] text-[#07090D] font-bold shadow-md'
                      : isLightMode
                        ? 'text-slate-800 hover:text-[#D4AF37] hover:bg-amber-100/60'
                        : 'text-slate-200 hover:text-[#D4AF37] hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-[10px] opacity-60 font-serif w-5">{link.roman}.</span>
                    <span>{link.name}</span>
                  </div>
                  <ArrowUpRight className={`w-3.5 h-3.5 ${isActive ? 'text-[#07090D]' : 'text-[#D4AF37]/60'}`} />
                </button>
              );
            })}
          </div>

          {/* Quick Actions in Mobile Drawer */}
          <div className="pt-1 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLookbook();
              }}
              className="w-full py-3 rounded-xl border border-[#D4AF37]/40 text-[#D4AF37] flex items-center justify-center gap-2 text-xs font-cinzel font-bold uppercase tracking-[0.16em] min-h-[44px]"
            >
              <BookOpen className="w-4 h-4" />
              <span>Browse 2026 Collection Lookbook</span>
            </button>

            <div className="flex flex-col gap-1 text-xs text-slate-400 pt-1">
              <span className="text-[#D4AF37] font-cinzel font-semibold tracking-wider text-[11px]">Direct Hotlines:</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1 font-sans">
                {COMPANY_INFO.phones.map((phone, idx) => (
                  <a 
                    key={idx}
                    href={`tel:${phone.international}`}
                    className="flex items-center gap-2 text-slate-200 hover:text-[#D4AF37] p-2 rounded-lg bg-white/5 border border-white/5 font-medium text-xs min-h-[40px]"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                    <span>{phone.display}</span>
                    <span className="text-[10px] text-slate-500">({phone.label.split(' ')[0]})</span>
                  </a>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation('');
              }}
              className="w-full mt-1 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C378] to-[#AA8214] text-[#07090D] font-cinzel font-bold text-xs uppercase tracking-[0.18em] text-center shadow-lg min-h-[44px]"
            >
              Request Free Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
