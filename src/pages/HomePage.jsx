import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sparkles, Check, ShieldCheck, Clock, Award, Phone, SlidersHorizontal, ChefHat, DoorClosed, Tv, Layers, ChevronDown } from 'lucide-react';
import { COMPANY_INFO, SERVICES, TRANSFORMATION_SHOWCASES } from '../data/companyData';

/* Single animated stat counter */
function StatCounter({ value, className = '' }) {
  const raw = String(value);
  const match = raw.match(/^([^0-9.]*)([0-9.]+)(.*)$/);
  const prefix = match ? match[1] : '';
  const num = match ? parseFloat(match[2]) : NaN;
  const suffix = match ? match[3] : '';

  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started || isNaN(num)) return;
    const duration = 1600;
    let startTime = null;

    const step = (now) => {
      if (!startTime) startTime = now;
      const progress = Math.min((now - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * num));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(num);
      }
    };
    requestAnimationFrame(step);
  }, [started, num]);

  if (isNaN(num)) {
    return <span className={className}>{raw}</span>;
  }

  return (
    <span ref={ref} className={className}>
      {prefix}{started ? count : 0}{suffix}
    </span>
  );
}

export default function HomePage({ onNavigate, onOpenConsultation }) {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent(
    "Hello Skyrock Interiors Limited. I am enquiring about your architectural joinery and custom interior finishing services."
  )}`;

  return (
    <div className="space-y-16 sm:space-y-24 lg:space-y-32 pb-20 sm:pb-28">
      
      {/* 1. Classical Hero Pavilion */}
      <section className="relative min-h-[88vh] sm:min-h-[92vh] flex items-center justify-center pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
        {/* Cinematic Classical Backdrop */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2200&auto=format&fit=crop"
            alt="Skyrock Interiors Bespoke Architectural Residence"
            className="w-full h-full object-cover object-center brightness-[0.22] sm:brightness-[0.24] scale-105 transform motion-safe:animate-pulse-subtle"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-[#07090D]/85 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/12 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
          
          {/* Classical Crest / Insignia Header */}
          <div className="inline-flex flex-col items-center gap-1.5 sm:gap-2">
            <div className="classical-divider w-44 sm:w-64 lg:w-80 text-[#D4AF37] opacity-80 text-xs">
              <span>◆</span>
            </div>
            <span className="font-cinzel text-[9px] sm:text-xs font-semibold tracking-[0.25em] sm:tracking-[0.35em] text-[#C5A880] uppercase">
              Atelier de Menuiserie & Architectural Finishing
            </span>
            <div className="classical-divider w-44 sm:w-64 lg:w-80 text-[#D4AF37] opacity-80 text-xs">
              <span>◆</span>
            </div>
          </div>

          {/* Stately Classical Headline */}
          <div className="space-y-3 sm:space-y-4 max-w-4xl mx-auto">
            <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.2] sm:leading-[1.18] tracking-tight">
              Transform Your House Into A <br className="hidden xs:inline" />
              <span className="text-gold-gradient italic font-serif">Home You'll Truly Love</span>
            </h1>

            <p className="text-xs sm:text-base lg:text-lg text-slate-300 font-light max-w-2xl mx-auto leading-relaxed px-2">
              We engineer bespoke interior solutions — from custom modular kitchens and luxury walk-in wardrobes to designer fluted TV media walls and complete residential transformations.
            </p>
          </div>

          {/* Classical Symmetrical Pedestal Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-8 text-[11px] sm:text-xs font-cinzel tracking-widest text-[#E5C378] pt-1 sm:pt-2">
            <div className="flex items-center gap-1.5">
              <span className="text-[#D4AF37]">I.</span>
              <span>Precision Joinery</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[#D4AF37]">II.</span>
              <span>5-Year Guarantee</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[#D4AF37]">III.</span>
              <span>14–21 Days Handover</span>
            </div>
          </div>

          {/* Classical Dignified Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4 max-w-md sm:max-w-none mx-auto">
            <button
              onClick={() => onOpenConsultation('')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#E5C378] to-[#AA8214] text-[#07090D] font-cinzel font-bold text-xs uppercase tracking-[0.16em] sm:tracking-[0.2em] shadow-[0_0_20px_rgba(212,175,55,0.35)] hover:shadow-[0_0_35px_rgba(212,175,55,0.5)] hover:brightness-110 active:scale-95 transition-all duration-300 min-h-[44px]"
            >
              <span>Schedule Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('transformations')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-[#0E131C] border border-[#D4AF37]/35 text-[#D4AF37] hover:bg-[#D4AF37]/10 font-cinzel font-semibold text-xs uppercase tracking-[0.14em] sm:tracking-[0.16em] transition-all min-h-[44px]"
            >
              <SlidersHorizontal className="w-4 h-4 text-[#D4AF37]" />
              <span>Explore Before & After</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 rounded-full bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-900/40 font-medium text-xs tracking-wider transition-all min-h-[44px]"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>WhatsApp Direct</span>
            </a>
          </div>

          {/* Hotline Crest */}
          <div className="pt-2 text-[11px] sm:text-xs text-slate-400 font-cinzel tracking-wider flex flex-wrap items-center justify-center gap-2">
            <span className="text-[#D4AF37]">Nairobi Hotlines:</span>
            <a href="tel:+254745918724" className="text-slate-200 hover:text-[#D4AF37] font-sans font-medium">0745 918 724</a>
            <span className="text-[#D4AF37]/40">•</span>
            <a href="tel:+254716223230" className="text-slate-200 hover:text-[#D4AF37] font-sans font-medium">0716 223 230</a>
          </div>

          {/* Scroll Cue Chevron */}
          <div className="hidden sm:flex flex-col items-center gap-1 pt-4 opacity-50">
            <span className="font-cinzel text-[9px] tracking-[0.3em] text-[#D4AF37] uppercase">Scroll</span>
            <ChevronDown className="w-4 h-4 text-[#D4AF37] animate-scroll-cue" />
          </div>

          {/* Mobile Stats 2x2 Pedestal (Visible only on mobile/tablet below md) */}
          <div className="md:hidden pt-4 border-t border-[#D4AF37]/20 grid grid-cols-2 gap-3 max-w-sm mx-auto">
            {COMPANY_INFO.stats.map((stat, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-[#0F141E]/80 border border-[#D4AF37]/20 text-center">
                <div className="font-serif text-xl font-bold text-gold-gradient">
                  <StatCounter value={stat.value} />
                </div>
                <div className="text-[10px] font-cinzel uppercase tracking-wider text-slate-200 mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Classical Stat Pedestal Bar (Visible md+) */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-[#D4AF37]/20 bg-[#07090D]/90 backdrop-blur-md hidden md:block">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-5 grid grid-cols-4 divide-x divide-[#D4AF37]/20">
            {COMPANY_INFO.stats.map((stat, idx) => (
              <div key={idx} className="px-4 lg:px-6 text-center group">
                <div className="font-serif text-2xl lg:text-3xl font-bold text-gold-gradient group-hover:scale-105 transition-transform duration-300">
                  <StatCounter value={stat.value} />
                </div>
                <div className="text-[10px] lg:text-[11px] font-cinzel uppercase tracking-[0.18em] text-slate-300 mt-0.5">
                  {stat.label}
                </div>
                <div className="text-[9px] lg:text-[10px] text-slate-500 font-light">{stat.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Classical Transformation Metamorphosis */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 space-y-2">
          <div className="classical-divider w-36 sm:w-48 mx-auto text-[#D4AF37] opacity-60 text-xs">
            <span>◆</span>
          </div>
          <span className="font-cinzel text-[10px] sm:text-xs font-bold text-[#D4AF37] tracking-[0.25em] uppercase block">
            Case Study Metamorphosis
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
            From Bare Masonry to Turnkey Luxury
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 font-light">
            As showcased in our signature Kiambu Road villa project, we transform raw scaffolded concrete structures into prestigious modern estates.
          </p>
        </div>

        <div className="classical-frame p-4 sm:p-8 rounded-2xl sm:rounded-3xl shadow-luxury-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            <div className="lg:col-span-7 relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/10] border border-[#D4AF37]/30 shadow-2xl group cursor-pointer" onClick={() => onNavigate('transformations')}>
              <img
                src={TRANSFORMATION_SHOWCASES[0].afterImage}
                alt="Kiambu Road Villa Completed Transformation"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-white">
                <div>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#D4AF37] text-[#07090D] font-cinzel font-bold text-[9px] uppercase tracking-wider inline-block">
                    Completed Residence
                  </span>
                  <h4 className="text-base sm:text-lg font-serif font-bold mt-1 text-white">
                    {TRANSFORMATION_SHOWCASES[0].title}
                  </h4>
                </div>
                <span className="text-[#D4AF37] font-cinzel font-bold tracking-wider underline flex items-center gap-1 text-[11px]">
                  Compare Slider →
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4 sm:space-y-5">
              <span className="text-[10px] sm:text-[11px] font-cinzel font-bold text-[#D4AF37] uppercase tracking-[0.2em] block">
                The Skyrock Execution
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-snug">
                Complete Architectural Finishing & Joinery
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                We handle the complete scope: exterior textured plaster, modern black architectural window suites, suspended tray gypsum ceilings with indirect LED channels, and bespoke cabinetry.
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-800">
                {TRANSFORMATION_SHOWCASES[0].scope.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                    <span className="text-[#D4AF37] text-xs">◆</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 sm:pt-3">
                <button
                  onClick={() => onNavigate('transformations')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B89225] text-[#07090D] font-cinzel font-bold text-xs uppercase tracking-[0.16em] shadow-md hover:brightness-110 transition-all min-h-[44px]"
                >
                  <span>Launch Interactive Comparison</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Four Classical Ateliers (Services) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16 space-y-2">
          <div className="classical-divider w-36 sm:w-48 mx-auto text-[#D4AF37] opacity-60 text-xs">
            <span>◆</span>
          </div>
          <span className="font-cinzel text-[10px] sm:text-xs font-bold text-[#D4AF37] tracking-[0.25em] uppercase block">
            The Atelier Collections
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
            Four Pillars of Interior Craftsmanship
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 font-light">
            Engineered in our specialized Nairobi fabrication workshop with moisture-resistant E1 cores and German Blum soft-close mechanics.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {SERVICES.map((srv, idx) => {
            const romans = ['I', 'II', 'III', 'IV'];
            return (
              <div
                key={srv.id}
                onClick={() => onNavigate('services')}
                className="classical-frame p-5 sm:p-6 rounded-2xl group cursor-pointer hover:border-[#D4AF37]/60 transition-all duration-300 sm:duration-500 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-cinzel font-bold text-xs sm:text-sm text-[#D4AF37] tracking-widest">
                      COLLECTION {romans[idx]}
                    </span>
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#07090D] transition-colors shrink-0">
                      {srv.id === 'kitchens' && <ChefHat className="w-4 h-4" />}
                      {srv.id === 'wardrobes' && <DoorClosed className="w-4 h-4" />}
                      {srv.id === 'tv-units' && <Tv className="w-4 h-4" />}
                      {srv.id === 'finishing' && <Layers className="w-4 h-4" />}
                    </div>
                  </div>

                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 border border-slate-800">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-transparent to-transparent opacity-60" />
                  </div>

                  <h3 className="font-serif font-bold text-base sm:text-lg text-white group-hover:text-[#FFF2CF] transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-slate-300 font-light leading-relaxed mt-1.5 line-clamp-3">
                    {srv.shortDesc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-[#D4AF37] font-semibold tracking-wider font-cinzel">
                    {srv.startingPrice}
                  </span>
                  <span className="text-slate-400 group-hover:text-white flex items-center gap-1 font-cinzel text-[10px] tracking-wider uppercase">
                    Inspect <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8 sm:mt-10">
          <button
            onClick={() => onNavigate('services')}
            className="font-cinzel text-xs font-semibold text-[#D4AF37] hover:text-[#FFF2CF] tracking-[0.2em] sm:tracking-[0.25em] uppercase underline py-2 inline-block"
          >
            Explore Complete Service Specifications & Finishes →
          </button>
        </div>
      </section>

      {/* 4. Classical Quotation Studio Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="classical-frame p-6 sm:p-10 lg:p-12 rounded-2xl sm:rounded-3xl border border-[#D4AF37]/40 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
            <div className="md:col-span-8 space-y-2 sm:space-y-3 text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-cinzel font-bold text-[#D4AF37] tracking-[0.2em] uppercase">
                <span>◆ Bespoke Investment Studio ◆</span>
              </div>
              <h3 className="text-xl sm:text-3xl font-serif font-bold text-white">
                Estimate Your Architectural Project in Seconds
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light max-w-xl leading-relaxed mx-auto md:mx-0">
                Select your room dimensions, cabinetry finishes (Acrylic, Oak, Smoked Walnut), and European hardware accessories to calculate transparent pricing in Kenyan Shillings.
              </p>
            </div>

            <div className="md:col-span-4 text-center md:text-right">
              <button
                onClick={() => onNavigate('estimator')}
                className="w-full sm:w-auto px-7 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#E5C378] to-[#AA8214] text-[#07090D] font-cinzel font-bold text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] shadow-[0_0_20px_rgba(212,175,55,0.35)] hover:brightness-110 transition-all min-h-[44px]"
              >
                Open Cost Estimator
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
