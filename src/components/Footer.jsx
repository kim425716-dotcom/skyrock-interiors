import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/companyData';

export default function Footer({ onNavigate, onOpenConsultation }) {
  return (
    <footer className="bg-[#05070A] border-t border-[#D4AF37]/25 text-slate-400 text-xs relative overflow-hidden">
      {/* Decorative Aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-8 sm:pb-12 relative z-10 space-y-12 sm:space-y-16">

        {/* Top Centered Stately Crest & Statement */}
        <div className="text-center max-w-2xl mx-auto space-y-3 sm:space-y-4">
          <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-full p-0.5 bg-gradient-to-br from-[#FFF2CF] via-[#D4AF37] to-[#8C6D1F] shadow-[0_0_20px_rgba(212,175,55,0.4)]">
            <img
              src="/logo.svg"
              alt="Skyrock Interiors Limited Logo"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <div>
            <h3 className="font-cinzel text-lg sm:text-2xl font-bold tracking-[0.2em] sm:tracking-[0.25em] text-gold-gradient uppercase">
              SKYROCK INTERIORS LIMITED
            </h3>
            <span className="font-cinzel text-[8px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.35em] text-[#C5A880] uppercase block mt-0.5">
              Atelier de Menuiserie & Architectural Finishing
            </span>
          </div>

          <div className="classical-divider w-44 sm:w-56 mx-auto text-[#D4AF37] opacity-60 text-xs">
            <span>◆</span>
          </div>

          <p className="text-xs text-slate-300 font-light leading-relaxed max-w-lg mx-auto px-2">
            "Transforming spaces into timeless masterpieces." Dedicated to precision custom kitchens, master dressing suites, designer media feature walls, and turnkey residential revamps across Kenya.
          </p>
        </div>

        {/* Stately Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 pt-4 border-t border-slate-900">

          {/* Column I: The Atelier Navigation */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-xs font-bold text-[#D4AF37] uppercase tracking-[0.16em] sm:tracking-[0.2em] pb-1 border-b border-[#D4AF37]/20">
              I. Collections
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => onNavigate('services')}
                    className="hover:text-[#FFF2CF] transition-colors text-left font-light py-1 min-h-[30px] flex items-center"
                  >
                    {srv.title}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onNavigate('transformations')}
                  className="hover:text-[#FFF2CF] transition-colors text-left font-light py-1 min-h-[30px] flex items-center"
                >
                  Turnkey Villa Facades
                </button>
              </li>
            </ul>
          </div>

          {/* Column II: Client Salons */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-xs font-bold text-[#D4AF37] uppercase tracking-[0.16em] sm:tracking-[0.2em] pb-1 border-b border-[#D4AF37]/20">
              II. Client Explorations
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-[#FFF2CF] transition-colors text-left font-light py-1 min-h-[30px] flex items-center">
                  Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('transformations')} className="hover:text-[#FFF2CF] transition-colors text-left font-light py-1 min-h-[30px] flex items-center">
                  Before & After Metamorphosis
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('estimator')} className="hover:text-[#FFF2CF] transition-colors text-left font-light py-1 min-h-[30px] flex items-center">
                  Bespoke Investment Planner
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('portfolio')} className="hover:text-[#FFF2CF] transition-colors text-left font-light py-1 min-h-[30px] flex items-center">
                  Curated Handover Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('process')} className="hover:text-[#FFF2CF] transition-colors text-left font-light py-1 min-h-[30px] flex items-center">
                  Craftsmanship Journey
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('reviews')} className="hover:text-[#FFF2CF] transition-colors text-left font-light py-1 min-h-[30px] flex items-center">
                  Homeowner Testimonials & FAQs
                </button>
              </li>
            </ul>
          </div>

          {/* Column III: Direct Hotlines */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-xs font-bold text-[#D4AF37] uppercase tracking-[0.16em] sm:tracking-[0.2em] pb-1 border-b border-[#D4AF37]/20">
              III. Private Consultations
            </h4>
            <div className="space-y-2.5">
              <div className="text-[11px] text-slate-300 font-light">
                Senior joinery consultants are available for in-person measurements:
              </div>
              <div className="space-y-1.5 font-sans">
                {COMPANY_INFO.phones.map((phone, i) => (
                  <a
                    key={i}
                    href={`tel:${phone.international}`}
                    className="flex items-center gap-2 text-slate-200 hover:text-[#D4AF37] font-medium transition-colors py-1 min-h-[32px]"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                    <span>{phone.display}</span>
                    <span className="text-[10px] text-slate-500 font-cinzel uppercase">({phone.label.split(' ')[0]})</span>
                  </a>
                ))}
              </div>
              <div className="pt-1">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-emerald-400 hover:underline min-h-[32px]"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                  <span>WhatsApp Concierge Line</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column IV: Workshop Location */}
          <div className="space-y-3">
            <h4 className="font-cinzel text-xs font-bold text-[#D4AF37] uppercase tracking-[0.16em] sm:tracking-[0.2em] pb-1 border-b border-[#D4AF37]/20">
              IV. Nairobi Atelier
            </h4>
            <p className="text-xs text-slate-300 font-light leading-relaxed">
              {COMPANY_INFO.address}
            </p>
            <div className="text-[11px] text-[#C5A880] font-cinzel">
              Operating Hours: Mon – Sat, 8:00 AM – 6:00 PM
            </div>
            <div className="pt-2">
              <button
                onClick={() => onOpenConsultation('')}
                className="w-full py-3 px-4 rounded-full bg-gradient-to-r from-[#D4AF37]/20 to-[#D4AF37]/10 border border-[#D4AF37]/40 text-[#D4AF37] font-cinzel font-bold text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.2em] hover:bg-[#D4AF37]/20 transition-all min-h-[44px]"
              >
                Schedule Site Visit
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Symmetrical Copyright & Attributions */}
        <div className="pt-6 sm:pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[10px] sm:text-[11px] font-cinzel tracking-wider text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} SKYROCK INTERIORS LIMITED. ALL RIGHTS RESERVED.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 text-slate-400">
            <span>Quality Craftsmanship</span>
            <span>•</span>
            <span>Stylish Designs</span>
            <span>•</span>
            <span>Reliable Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
