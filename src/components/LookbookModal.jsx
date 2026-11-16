import React, { useState, useEffect } from 'react';
import { X, Printer, ArrowRight, ChevronLeft, ChevronRight, BookOpen, Check } from 'lucide-react';
import { SERVICES } from '../data/companyData';

export default function LookbookModal({ isOpen, onClose }) {
  const [currentPage, setCurrentPage] = useState(0);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const lookbookPages = [
    {
      title: "Skyrock Interiors 2026 Lookbook",
      subtitle: "Bespoke Joinery & Architectural Finishing in Kenya",
      type: "cover",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      overview: "Crafted for homeowners, architects, and interior connoisseurs seeking uncompromising quality, European Blum mechanics, and precision moisture-resistant joinery."
    },
    ...SERVICES.map((srv) => ({
      title: srv.title,
      subtitle: srv.startingPrice,
      type: "service",
      image: srv.image,
      overview: srv.fullDesc,
      features: srv.features
    })),
    {
      title: "The Skyrock Craftsmanship Guarantee",
      subtitle: "5-Year Written Handover Warranty",
      type: "warranty",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
      overview: "Every kitchen, wardrobe, and media wall manufactured in our Nairobi facility comes backed by a comprehensive 5-year guarantee against joint failure, sagging, or moisture swelling.",
      hotlines: ["0745 918 724", "0716 223 230"]
    }
  ];

  const current = lookbookPages[currentPage];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#07090D]/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full classical-frame rounded-2xl sm:rounded-3xl overflow-hidden border border-[#D4AF37]/50 shadow-[0_0_50px_rgba(0,0,0,0.9)] animate-in zoom-in-95 duration-200 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Action Bar */}
        <div className="p-3 sm:p-4 sm:px-6 bg-[#07090D] border-b border-slate-800 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 truncate">
            <BookOpen className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span className="text-[10px] sm:text-xs font-cinzel font-bold text-white uppercase tracking-wider truncate">
              2026 Collection Lookbook
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0E131C] border border-slate-700 text-slate-300 hover:text-white text-xs font-medium transition-all min-h-[36px]"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-[#0E131C] border border-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-all min-h-[36px]"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Lookbook Content Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Visual Image Side */}
            <div className="md:col-span-6 relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl border border-slate-800">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090D]/80 via-transparent to-transparent" />
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 rounded-full bg-[#D4AF37] text-[#07090D] text-[9px] sm:text-[10px] font-cinzel font-bold uppercase tracking-wider shadow-md">
                  Page {currentPage + 1} of {lookbookPages.length}
                </span>
              </div>
            </div>

            {/* Information Side */}
            <div className="md:col-span-6 space-y-3 sm:space-y-4">
              <div>
                <span className="text-[10px] sm:text-xs font-cinzel font-bold text-[#D4AF37] uppercase tracking-widest block mb-1">
                  {current.subtitle}
                </span>
                <h3 className="text-xl sm:text-3xl font-serif font-bold text-white leading-tight">
                  {current.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                {current.overview}
              </p>

              {current.features && (
                <div className="space-y-2 pt-1 sm:pt-2">
                  <span className="text-[10px] sm:text-[11px] font-cinzel font-bold text-[#FFF2CF] uppercase tracking-wider block">
                    Collection Specifications:
                  </span>
                  <div className="space-y-1.5">
                    {current.features.slice(0, 4).map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                        <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {current.hotlines && (
                <div className="p-3.5 sm:p-4 rounded-xl bg-[#0E131C] border border-slate-800 space-y-1.5 text-xs">
                  <div className="text-[#D4AF37] font-cinzel font-bold uppercase tracking-wider text-[11px]">
                    Direct Workshop Inquiries:
                  </div>
                  <div className="text-slate-200 font-semibold font-sans">
                    {current.hotlines.join(' • ')}
                  </div>
                </div>
              )}

              <div className="pt-2">
                <a
                  href={`https://wa.me/254745918724?text=${encodeURIComponent(
                    `Hello Skyrock Interiors, I am viewing page ${currentPage + 1} ("${current.title}") in your 2026 digital lookbook and would like more details.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B89225] text-[#07090D] font-cinzel font-bold text-xs uppercase tracking-[0.16em] shadow-[0_0_20px_rgba(212,175,55,0.35)] hover:brightness-110 min-h-[44px]"
                >
                  <span>Inquire Look on WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Paging Controller */}
        <div className="p-3 sm:p-4 sm:px-6 bg-[#07090D] border-t border-slate-800 flex items-center justify-between text-xs">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
            disabled={currentPage === 0}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#0E131C] border border-slate-700 text-slate-300 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all min-h-[38px]"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden xs:inline">Previous</span>
          </button>

          <div className="flex items-center gap-1 sm:gap-1.5">
            {lookbookPages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx)}
                className={`h-2 sm:h-2.5 rounded-full transition-all ${
                  currentPage === idx ? 'w-5 sm:w-6 bg-[#D4AF37]' : 'w-2 sm:w-2.5 bg-slate-700 hover:bg-slate-500'
                }`}
                aria-label={`Go to page ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrentPage((prev) => Math.min(lookbookPages.length - 1, prev + 1))}
            disabled={currentPage === lookbookPages.length - 1}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#0E131C] border border-slate-700 text-slate-300 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all min-h-[38px]"
          >
            <span className="hidden xs:inline">Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
