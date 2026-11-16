import React, { useState } from 'react';
import { ChefHat, DoorClosed, Tv, Sparkles, Check, ArrowRight, ShieldCheck, Layers, ChevronRight } from 'lucide-react';
import { SERVICES } from '../data/companyData';

export default function Services({ onSelectServiceForQuote }) {
  const [selectedService, setSelectedService] = useState(SERVICES[0]);

  const iconMap = {
    ChefHat: ChefHat,
    DoorClosed: DoorClosed,
    Tv: Tv,
    Sparkles: Sparkles
  };

  return (
    <section id="services" className="py-24 bg-obsidian-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Core Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white">
            Architectural Joinery & <br />
            <span className="text-gold-gradient italic">Complete Finishing Solutions</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base font-light">
            Every piece is tailored to your exact floor plan, lifestyle preferences, and interior aesthetic. Built in our Nairobi fabrication facility using European-grade hardware.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {SERVICES.map((srv) => {
            const Icon = iconMap[srv.icon] || Sparkles;
            const isSelected = selectedService.id === srv.id;

            return (
              <div
                key={srv.id}
                onClick={() => setSelectedService(srv)}
                className={`relative cursor-pointer rounded-2xl p-6 transition-all duration-300 glass-panel ${
                  isSelected
                    ? 'border-gold-500 shadow-gold-glow-lg -translate-y-2 bg-obsidian-850'
                    : 'hover:border-gold-500/40 hover:-translate-y-1'
                }`}
              >
                {srv.popular && (
                  <span className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-[10px] font-bold text-obsidian-950 uppercase tracking-widest shadow-md">
                    Featured
                  </span>
                )}

                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors ${
                  isSelected 
                    ? 'bg-gradient-to-br from-gold-400 to-gold-600 text-obsidian-950' 
                    : 'bg-obsidian-800 text-gold-400 border border-slate-700'
                }`}>
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-bold font-serif text-white mb-2">{srv.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">{srv.shortDesc}</p>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-gold-400 font-semibold">{srv.startingPrice}</span>
                  <span className="flex items-center gap-1 text-slate-400 hover:text-white font-medium">
                    Details <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Service Deep-Dive Showcase */}
        {selectedService && (
          <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-gold-500/40 shadow-luxury-card animate-in fade-in duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Visual Showcase */}
              <div className="lg:col-span-6 relative rounded-2xl overflow-hidden aspect-[4/3] group shadow-2xl">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-obsidian-950/80 backdrop-blur-md border border-gold-500/30 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400">Guaranteed Durability</span>
                    <h5 className="text-sm font-bold text-white flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-gold-400" />
                      5-Year Craftsmanship Warranty
                    </h5>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-gold-500/20 text-gold-300 text-xs font-bold border border-gold-500/30">
                    {selectedService.startingPrice}
                  </span>
                </div>
              </div>

              {/* Right Column: Specifications & Feature Checklist */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-gold-400 uppercase tracking-widest mb-1">
                    <span>Signature Joinery</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white">
                    {selectedService.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed font-light">
                    {selectedService.fullDesc}
                  </p>
                </div>

                <div className="space-y-2.5">
                  <h4 className="text-xs font-bold text-gold-300 uppercase tracking-wider">
                    Included Specifications & Highlights:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedService.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                        <Check className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={() => onSelectServiceForQuote(selectedService.title)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 text-obsidian-950 font-bold text-xs uppercase tracking-wider shadow-gold-glow hover:brightness-110 active:scale-95 transition-all"
                  >
                    <span>Request Quote For This</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href="#estimator"
                    className="w-full sm:w-auto text-center px-5 py-3 rounded-xl border border-slate-700 text-slate-300 hover:text-gold-400 hover:border-gold-500/40 text-xs font-semibold transition-all"
                  >
                    Calculate Estimated Cost
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
