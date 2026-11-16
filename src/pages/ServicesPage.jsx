import React, { useState } from 'react';
import { ChefHat, DoorClosed, Tv, Sparkles, Check, ArrowRight, ShieldCheck, Layers, ChevronRight } from 'lucide-react';
import { SERVICES } from '../data/companyData';
import MoodboardVisualizer from '../components/MoodboardVisualizer';

export default function ServicesPage({ onOpenConsultation, onNavigate }) {
  const [activeService, setActiveService] = useState(SERVICES[0]);

  const iconMap = {
    ChefHat: ChefHat,
    DoorClosed: DoorClosed,
    Tv: Tv,
    Sparkles: Sparkles
  };

  return (
    <div className="pt-24 sm:pt-32 pb-20 sm:pb-28 space-y-12 sm:space-y-16">
      
      {/* Page Header */}
      <section className="relative py-12 sm:py-16 bg-[#090C12] border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="classical-divider w-36 sm:w-48 mx-auto text-[#D4AF37] opacity-70 text-xs">
            <span>◆</span>
          </div>
          <span className="font-cinzel text-[10px] sm:text-xs font-bold text-[#D4AF37] tracking-[0.25em] sm:tracking-[0.3em] uppercase block">
            Dedicated Services Studio
          </span>
          <h1 className="text-2xl xs:text-3xl sm:text-5xl font-serif font-bold text-white max-w-3xl mx-auto leading-tight">
            Architectural Joinery & <br />
            <span className="text-gold-gradient italic font-serif">Complete Finishing Solutions</span>
          </h1>
          <p className="mt-3 sm:mt-4 text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto font-light leading-relaxed px-2">
            Every piece is tailored to your floor plan and spatial constraints. Precision fabricated in our Nairobi workshop using European-grade hardware and moisture-resistant cores.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Navigation Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
          {SERVICES.map((srv) => {
            const Icon = iconMap[srv.icon] || Sparkles;
            const isSelected = activeService.id === srv.id;
            return (
              <button
                key={srv.id}
                onClick={() => setActiveService(srv)}
                className={`p-3.5 sm:p-5 rounded-xl sm:rounded-2xl text-left border transition-all duration-300 min-h-[70px] ${
                  isSelected
                    ? 'bg-gradient-to-br from-[#0F141E] to-[#0A0D14] border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.3)] -translate-y-0.5 sm:-translate-y-1'
                    : 'bg-[#0E131C] border-slate-800 hover:border-slate-700 text-slate-300'
                }`}
              >
                <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 shrink-0 ${
                  isSelected ? 'bg-[#D4AF37] text-[#07090D]' : 'bg-[#090C12] text-[#D4AF37]'
                }`}>
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h3 className="font-serif font-bold text-white text-xs sm:text-base line-clamp-1">{srv.title}</h3>
                <div className="text-[10px] sm:text-[11px] text-[#D4AF37] font-cinzel font-semibold mt-0.5">{srv.startingPrice}</div>
              </button>
            );
          })}
        </div>

        {/* Selected Service Deep Dive Showcase */}
        <div className="classical-frame p-4 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-[#D4AF37]/40 shadow-luxury-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            
            <div className="lg:col-span-6 relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl border border-slate-800">
              <img
                src={activeService.image}
                alt={activeService.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 p-3 sm:p-4 rounded-xl bg-[#07090D]/85 backdrop-blur-md border border-[#D4AF37]/30 flex flex-col xs:flex-row items-start xs:items-center justify-between gap-2">
                <div>
                  <div className="text-[10px] text-slate-400">Guaranteed Durability</div>
                  <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5 font-serif">
                    <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                    5-Year Craftsmanship Warranty
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] text-[10px] sm:text-xs font-cinzel font-bold border border-[#D4AF37]/30 shrink-0">
                  {activeService.startingPrice}
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4 sm:space-y-6">
              <div>
                <span className="text-[10px] sm:text-xs font-cinzel font-semibold text-[#D4AF37] uppercase tracking-widest block mb-1">
                  Signature Specialty
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
                  {activeService.title}
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  {activeService.fullDesc}
                </p>
              </div>

              <div className="space-y-2.5 sm:space-y-3">
                <h4 className="text-[11px] sm:text-xs font-cinzel font-bold text-[#FFF2CF] uppercase tracking-wider">
                  Included Architectural Specifications:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                  {activeService.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                      <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 sm:pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => onOpenConsultation(activeService.title)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B89225] text-[#07090D] font-cinzel font-bold text-xs uppercase tracking-[0.16em] shadow-[0_0_20px_rgba(212,175,55,0.35)] hover:brightness-110 active:scale-95 transition-all min-h-[44px]"
                >
                  <span>Request Quote For This</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('estimator')}
                  className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 rounded-full border border-slate-700 text-slate-300 hover:text-[#D4AF37] hover:border-[#D4AF37]/40 text-xs font-cinzel tracking-wider uppercase transition-all min-h-[44px]"
                >
                  Calculate Estimated Cost
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Material Moodboard Studio */}
        <div className="pt-2 sm:pt-4">
          <MoodboardVisualizer onOpenConsultation={onOpenConsultation} />
        </div>

        {/* Quality Standards Comparison Table */}
        <div className="classical-frame p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-800 space-y-5 sm:space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-1">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
              The Skyrock Quality Standard vs. Generic Contractors
            </h3>
            <p className="text-xs text-slate-400 font-light">
              Why our custom installations endure over decades without swelling, peeling, or misalignment.
            </p>
          </div>

          <div className="overflow-x-auto no-scrollbar -mx-2 px-2 sm:mx-0 sm:px-0">
            <table className="w-full min-w-[500px] text-left text-xs text-slate-300 border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 font-cinzel uppercase text-[10px] tracking-wider">
                  <th className="py-2.5 sm:py-3 px-3 sm:px-4">Component</th>
                  <th className="py-2.5 sm:py-3 px-3 sm:px-4 text-[#D4AF37] font-bold">Skyrock Standard</th>
                  <th className="py-2.5 sm:py-3 px-3 sm:px-4 text-slate-500">Generic Market</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-light">
                <tr>
                  <td className="py-3 px-3 sm:px-4 font-semibold text-white">Cabinet Carcass Cores</td>
                  <td className="py-3 px-3 sm:px-4 text-[#FFF2CF] font-medium">E1 Moisture-Resistant Marine/MDF</td>
                  <td className="py-3 px-3 sm:px-4 text-slate-400">Standard chipboard (swells with water)</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 sm:px-4 font-semibold text-white">Hinges & Runners</td>
                  <td className="py-3 px-3 sm:px-4 text-[#FFF2CF] font-medium">Soft-close German Blumotion</td>
                  <td className="py-3 px-3 sm:px-4 text-slate-400">Generic unbranded friction runners</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 sm:px-4 font-semibold text-white">Edge Sealing</td>
                  <td className="py-3 px-3 sm:px-4 text-[#FFF2CF] font-medium">Hot-melt PUR seamless water-tight</td>
                  <td className="py-3 px-3 sm:px-4 text-slate-400">Iron-on paper edges that peel</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 sm:px-4 font-semibold text-white">Countertops</td>
                  <td className="py-3 px-3 sm:px-4 text-[#FFF2CF] font-medium">Engineered Quartz / Sintered Stone</td>
                  <td className="py-3 px-3 sm:px-4 text-slate-400">Formica laminate prone to knife cuts</td>
                </tr>
                <tr>
                  <td className="py-3 px-3 sm:px-4 font-semibold text-white">Warranty & Handover</td>
                  <td className="py-3 px-3 sm:px-4 text-[#FFF2CF] font-medium">5-Year Written Handover Warranty</td>
                  <td className="py-3 px-3 sm:px-4 text-slate-400">No formal guarantee</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Bottom Action CTA */}
        <div className="classical-frame p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#D4AF37]/40 text-center space-y-3">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
            Have a custom architectural floor plan?
          </h3>
          <p className="text-xs text-slate-300 font-light max-w-lg mx-auto">
            Send us your architectural blueprints or site sketches on WhatsApp and get a prompt feasibility assessment.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenConsultation('Custom Floor Plan')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B89225] text-[#07090D] font-cinzel font-bold text-xs uppercase tracking-[0.18em] shadow-[0_0_20px_rgba(212,175,55,0.35)] hover:brightness-110 min-h-[44px]"
            >
              Upload Blueprint & Schedule Measurement
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
