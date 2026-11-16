import React, { useState, useRef, useEffect, useCallback } from 'react';
import { SlidersHorizontal, ArrowLeftRight, Check, MapPin, Sparkles, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { TRANSFORMATION_SHOWCASES } from '../data/companyData';

export default function TransformationsPage({ onOpenConsultation, onNavigate }) {
  const [activeTab, setActiveTab] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const currentShowcase = TRANSFORMATION_SHOWCASES[activeTab];

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  useEffect(() => {
    const stopDragging = () => setIsDragging(false);
    window.addEventListener('mouseup', stopDragging);
    window.addEventListener('touchend', stopDragging);
    return () => {
      window.removeEventListener('mouseup', stopDragging);
      window.removeEventListener('touchend', stopDragging);
    };
  }, []);

  return (
    <div className="pt-24 sm:pt-32 pb-20 sm:pb-28 space-y-12 sm:space-y-16">
      
      {/* Page Header */}
      <section className="relative py-12 sm:py-16 bg-[#090C12] border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="classical-divider w-36 sm:w-48 mx-auto text-[#D4AF37] opacity-70 text-xs">
            <span>◆</span>
          </div>
          <span className="font-cinzel text-[10px] sm:text-xs font-bold text-[#D4AF37] tracking-[0.25em] sm:tracking-[0.3em] uppercase block">
            Signature Before & After Studio
          </span>
          <h1 className="text-2xl xs:text-3xl sm:text-5xl font-serif font-bold text-white max-w-3xl mx-auto leading-tight">
            TRANSFORM YOUR HOUSE INTO A <br />
            <span className="text-gold-gradient italic font-serif">HOME YOU'LL LOVE</span>
          </h1>
          <p className="mt-3 sm:mt-4 text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto font-light leading-relaxed px-2">
            Drag the interactive slider below to witness authentic before-and-after transformations — from bare concrete shells and outdated spaces to pristine modern luxury.
          </p>
        </div>
      </section>

      {/* Interactive Transformation Studio */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        
        {/* Project Selector Pills (Responsive horizontal scroll / wrap) */}
        <div className="flex flex-wrap sm:flex-nowrap sm:overflow-x-auto justify-center gap-2 sm:gap-3 px-2 no-scrollbar">
          {TRANSFORMATION_SHOWCASES.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(idx);
                setSliderPosition(50);
              }}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-cinzel tracking-[0.12em] sm:tracking-[0.15em] uppercase transition-all duration-300 shrink-0 min-h-[40px] ${
                activeTab === idx
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#B89225] text-[#07090D] font-bold shadow-[0_0_15px_rgba(212,175,55,0.4)] scale-102'
                  : 'bg-[#0E131C] text-slate-300 hover:text-[#D4AF37] hover:bg-[#151C28] border border-slate-800'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* The Slider Showcase Box */}
        <div className="max-w-5xl mx-auto classical-frame p-3 sm:p-6 rounded-2xl sm:rounded-3xl shadow-luxury-card border border-[#D4AF37]/40">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseMove={handleMouseMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchMove={handleTouchMove}
            onClick={(e) => handleMove(e.clientX)}
            className="relative h-[250px] xs:h-[310px] sm:h-[420px] md:h-[500px] lg:h-[560px] rounded-xl sm:rounded-2xl overflow-hidden select-none cursor-ew-resize group touch-pan-y"
          >
            {/* After Image */}
            <img
              src={currentShowcase.afterImage}
              alt={`${currentShowcase.title} - After Handover`}
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
              draggable="false"
            />

            {/* Before Image (Clipped Overlay) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={currentShowcase.beforeImage}
                alt={`${currentShowcase.title} - Before Work`}
                className="absolute inset-0 w-full h-full object-cover object-center max-w-none"
                style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%' }}
                draggable="false"
              />
              <div className="absolute inset-0 bg-black/25" />
            </div>

            {/* Divider Line & Grabber */}
            <div
              className="absolute top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-[#FFF2CF] via-[#D4AF37] to-[#8C6D1F] shadow-[0_0_15px_rgba(212,175,55,0.8)] pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-[#07090D] border-2 border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.6)] flex items-center justify-center text-[#D4AF37] group-hover:scale-110 transition-transform">
                <ArrowLeftRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 animate-pulse" />
              </div>
            </div>

            {/* Badges */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 pointer-events-none">
              <span className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-red-500/40 text-red-300 text-[9px] sm:text-xs font-bold uppercase tracking-wider">
                {currentShowcase.beforeLabel}
              </span>
            </div>
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 pointer-events-none">
              <span className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-[#D4AF37]/60 text-[#D4AF37] text-[9px] sm:text-xs font-bold uppercase tracking-wider shadow-md">
                {currentShowcase.afterLabel}
              </span>
            </div>

            {/* Center Hint (Subtle) */}
            <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
              <div className="px-3 sm:px-4 py-1 rounded-full bg-[#07090D]/85 backdrop-blur-md border border-slate-700 text-slate-300 text-[10px] sm:text-xs flex items-center gap-1.5">
                <SlidersHorizontal className="w-3 h-3 text-[#D4AF37]" />
                <span className="hidden xs:inline">Drag left or right to inspect</span>
                <span className="xs:hidden">Drag to compare</span>
              </div>
            </div>
          </div>

          {/* Description & Details */}
          <div className="mt-4 sm:mt-6 px-1 sm:px-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6">
            <div>
              <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-cinzel mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{currentShowcase.location}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-tight">
                {currentShowcase.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mt-1 leading-relaxed font-light">
                {currentShowcase.description}
              </p>
            </div>

            <button
              onClick={() => onOpenConsultation(`Transformation: ${currentShowcase.title}`)}
              className="w-full md:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B89225] text-[#07090D] font-cinzel font-bold text-xs uppercase tracking-[0.16em] shadow-[0_0_20px_rgba(212,175,55,0.35)] hover:brightness-110 shrink-0 min-h-[44px]"
            >
              Get Quote For My Space
            </button>
          </div>

          {/* Scope Tags */}
          <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5 sm:gap-2 px-1 sm:px-4">
            <span className="text-[11px] text-slate-400 font-cinzel font-semibold self-center mr-1">Execution Scope:</span>
            {currentShowcase.scope.map((tag, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0E131C] text-slate-300 text-[11px] border border-slate-700/60"
              >
                <Check className="w-3 h-3 text-[#D4AF37]" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 pt-4 sm:pt-8">
          <div className="classical-frame p-5 sm:p-6 rounded-2xl space-y-2">
            <Clock className="w-5 h-5 text-[#D4AF37]" />
            <h4 className="text-base font-serif font-bold text-white">Guaranteed Timelines</h4>
            <p className="text-xs text-slate-300 font-light leading-relaxed">
              We stick strictly to our agreed 14–21 day turnaround schedules so you can move into your dream home on time.
            </p>
          </div>

          <div className="classical-frame p-5 sm:p-6 rounded-2xl space-y-2">
            <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
            <h4 className="text-base font-serif font-bold text-white">5-Year Workmanship Warranty</h4>
            <p className="text-xs text-slate-300 font-light leading-relaxed">
              Every hinge, runner, panel, and finish is backed by our comprehensive warranty against defects or sagging.
            </p>
          </div>

          <div className="classical-frame p-5 sm:p-6 rounded-2xl space-y-2">
            <Sparkles className="w-5 h-5 text-[#D4AF37]" />
            <h4 className="text-base font-serif font-bold text-white">3D CAD Before Building</h4>
            <p className="text-xs text-slate-300 font-light leading-relaxed">
              You approve photorealistic 3D virtual renderings of your space before any timber is cut or paint is mixed.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
