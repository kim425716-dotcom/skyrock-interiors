import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, SlidersHorizontal, ArrowLeftRight, Check, MapPin } from 'lucide-react';
import { TRANSFORMATION_SHOWCASES } from '../data/companyData';

export default function BeforeAfterSlider({ onOpenConsultation }) {
  const [activeTab, setActiveTab] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const currentShowcase = TRANSFORMATION_SHOWCASES[activeTab];

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
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
    <section id="transformations" className="py-24 bg-obsidian-900 relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Transformations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white">
            Transform Your House Into A <br />
            <span className="text-gold-gradient italic">Home You'll Truly Love</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base font-light">
            Slide horizontally to reveal the before-and-after craftsmanship. From raw masonry and dated spaces to immaculate turnkey luxury.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          {TRANSFORMATION_SHOWCASES.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(idx);
                setSliderPosition(50);
              }}
              className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === idx
                  ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-obsidian-950 shadow-gold-glow'
                  : 'bg-obsidian-800 text-slate-300 hover:text-gold-400 hover:bg-obsidian-700 border border-slate-700'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* The Interactive Slider Container */}
        <div className="max-w-5xl mx-auto glass-panel p-3 sm:p-5 rounded-3xl shadow-luxury-card border border-gold-500/30">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onClick={(e) => handleMove(e.clientX)}
            className="relative h-[340px] sm:h-[460px] md:h-[540px] rounded-2xl overflow-hidden select-none cursor-ew-resize group"
          >
            {/* After Image (Full background) */}
            <img
              src={currentShowcase.afterImage}
              alt={`${currentShowcase.title} - After`}
              className="absolute inset-0 w-full h-full object-cover object-center"
              draggable="false"
            />

            {/* Before Image (Clipped overlay) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={currentShowcase.beforeImage}
                alt={`${currentShowcase.title} - Before`}
                className="absolute inset-0 w-full h-full object-cover object-center max-w-none"
                style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%' }}
                draggable="false"
              />
              <div className="absolute inset-0 bg-black/25 pointer-events-none" />
            </div>

            {/* Divider Line & Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-gold-300 via-gold-500 to-gold-700 shadow-gold-glow pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Draggable Circle Controller */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-obsidian-950 border-2 border-gold-400 shadow-gold-glow flex items-center justify-center text-gold-400 group-hover:scale-110 transition-transform">
                <ArrowLeftRight className="w-5 h-5 animate-pulse" />
              </div>
            </div>

            {/* Visual Badges */}
            <div className="absolute top-4 left-4 z-20 pointer-events-none">
              <span className="px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-red-500/40 text-red-300 text-xs font-bold tracking-wider uppercase">
                {currentShowcase.beforeLabel}
              </span>
            </div>
            <div className="absolute top-4 right-4 z-20 pointer-events-none">
              <span className="px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-gold-500/60 text-gold-300 text-xs font-bold tracking-wider uppercase shadow-gold-glow">
                {currentShowcase.afterLabel}
              </span>
            </div>

            {/* Bottom hint pill */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
              <div className="px-4 py-1.5 rounded-full bg-obsidian-950/80 backdrop-blur-md border border-slate-700 text-slate-300 text-xs flex items-center gap-2 shadow-lg">
                <SlidersHorizontal className="w-3.5 h-3.5 text-gold-400" />
                <span>Drag slider left or right to compare</span>
              </div>
            </div>
          </div>

          {/* Project Details Strip Below Slider */}
          <div className="mt-6 px-2 sm:px-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-gold-400 text-xs font-medium mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{currentShowcase.location}</span>
              </div>
              <h3 className="text-xl font-bold font-serif text-white">{currentShowcase.title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mt-1 leading-relaxed">
                {currentShowcase.description}
              </p>
            </div>

            <button
              onClick={onOpenConsultation}
              className="w-full md:w-auto px-6 py-3 rounded-xl bg-gold-500/20 hover:bg-gold-500/30 border border-gold-500 text-gold-300 text-xs font-bold uppercase tracking-wider transition-all shrink-0"
            >
              Get Quote For Similar Project
            </button>
          </div>

          {/* Scope Tags */}
          <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-wrap gap-2 px-2 sm:px-4">
            <span className="text-xs text-slate-400 font-semibold self-center mr-2">Skyrock Scope:</span>
            {currentShowcase.scope.map((tag, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-obsidian-800 text-slate-300 text-xs border border-slate-700/60"
              >
                <Check className="w-3 h-3 text-gold-400" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
