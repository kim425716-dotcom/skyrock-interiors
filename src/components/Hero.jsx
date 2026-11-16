import React from 'react';
import { ArrowRight, Sparkles, CheckCircle, ShieldCheck, Clock, Award, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function Hero({ onOpenConsultation }) {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent(
    "Hello Skyrock Interiors Limited! I am visiting your website and I would like to enquire about your interior design, custom kitchens, wardrobes, and finishing services."
  )}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background with luxury gradient overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop"
          alt="Skyrock Interiors Luxury Living Room and Kitchen Showcase"
          className="w-full h-full object-cover object-center brightness-[0.28] scale-105 transform motion-safe:animate-pulse-subtle"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/80 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-500/15 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span>Skyrock Interiors Limited • Kenya's Finishing Specialists</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif leading-[1.15] text-white">
              Transform Your House Into A <br className="hidden sm:inline" />
              <span className="text-gold-gradient italic font-serif">Home You'll Love</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl leading-relaxed font-light">
              We engineer bespoke interior solutions — from custom modular kitchens and luxury walk-in wardrobes to designer fluted TV media walls and turnkey architectural finishing.
            </p>

            {/* Key trust badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 max-w-xl text-left">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <CheckCircle className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Custom Precision Joinery</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0" />
                <span>5-Year Craftsmanship Guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                <Clock className="w-4 h-4 text-gold-400 shrink-0" />
                <span>14-21 Days Delivery</span>
              </div>
            </div>

            {/* Call to action buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-obsidian-950 font-bold text-sm uppercase tracking-wider shadow-gold-glow hover:shadow-gold-glow-lg hover:brightness-110 active:scale-95 transition-all"
              >
                <span>Request Free Site Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 font-semibold text-sm transition-all backdrop-blur-md"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="#transformations"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-all text-sm font-medium"
              >
                <span>See Real Projects</span>
              </a>
            </div>

            {/* Direct hotline reminder */}
            <div className="pt-2 text-xs text-slate-400 flex items-center justify-center sm:justify-start gap-4">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-gold-400" />
                Call Hotline: <a href="tel:+254745918724" className="text-gold-300 font-semibold hover:underline">0745 918 724</a> or <a href="tel:+254716223230" className="text-gold-300 font-semibold hover:underline">0716 223 230</a>
              </span>
            </div>
          </div>

          {/* Right Hero Feature Card */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="relative p-6 rounded-2xl glass-panel shadow-luxury-card border border-gold-500/30 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
                <div className="w-10 h-10 rounded-full bg-gold-500/20 border border-gold-500/40 flex items-center justify-center">
                  <Award className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Full Interior & Exterior Finishing</h4>
                  <p className="text-xs text-slate-400">Turnkey residential solutions</p>
                </div>
              </div>

              <div className="py-4 space-y-3">
                <div className="flex items-center justify-between text-xs py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400">Custom Kitchens</span>
                  <span className="text-gold-300 font-semibold">Acrylic / Quartz / Blum</span>
                </div>
                <div className="flex items-center justify-between text-xs py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400">Master Wardrobes</span>
                  <span className="text-gold-300 font-semibold">Tinted Glass & Sensor LED</span>
                </div>
                <div className="flex items-center justify-between text-xs py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400">TV Media Walls</span>
                  <span className="text-gold-300 font-semibold">Fluted Wood & Marble Slabs</span>
                </div>
                <div className="flex items-center justify-between text-xs py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400">Gypsum & Ceilings</span>
                  <span className="text-gold-300 font-semibold">Cove & Track Lighting</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-2.5 rounded-lg bg-gold-500/15 hover:bg-gold-500/25 border border-gold-500/40 text-gold-300 text-xs font-bold tracking-wider uppercase transition-all"
                >
                  Book Free Site Assessment
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Stats Counter Strip */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          {COMPANY_INFO.stats.map((stat, idx) => (
            <div key={idx} className="text-center sm:text-left group">
              <div className="text-3xl sm:text-4xl font-serif font-bold text-gold-gradient group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-slate-200 mt-1">{stat.label}</div>
              <div className="text-xs text-slate-400 font-light">{stat.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
