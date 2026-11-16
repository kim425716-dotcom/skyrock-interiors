import React from 'react';
import { Compass, Box, Hammer, ShieldCheck } from 'lucide-react';
import { WORK_PROCESS } from '../data/companyData';
import MaterialsShowcase from '../components/MaterialsShowcase';

export default function ProcessPage({ onOpenConsultation }) {
  const stepIcons = [Compass, Box, Hammer, ShieldCheck];

  return (
    <div className="pt-24 sm:pt-32 pb-20 sm:pb-28 space-y-12 sm:space-y-16">
      
      {/* Page Header */}
      <section className="relative py-12 sm:py-16 bg-[#090C12] border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="classical-divider w-36 sm:w-48 mx-auto text-[#D4AF37] opacity-70 text-xs">
            <span>◆</span>
          </div>
          <span className="font-cinzel text-[10px] sm:text-xs font-bold text-[#D4AF37] tracking-[0.25em] sm:tracking-[0.3em] uppercase block">
            The Skyrock Standard
          </span>
          <h1 className="text-2xl xs:text-3xl sm:text-5xl font-serif font-bold text-white max-w-3xl mx-auto leading-tight">
            From Architectural Vision <br />
            <span className="text-gold-gradient italic font-serif">To Turnkey Reality</span>
          </h1>
          <p className="mt-3 sm:mt-4 text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto font-light leading-relaxed px-2">
            We eliminate the guesswork with photorealistic 3D CAD modeling, laser measurements, and automated CNC factory joinery before anything touches your property.
          </p>
        </div>
      </section>

      {/* 4-Step Process Section */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 space-y-1">
          <span className="text-xs font-cinzel font-bold text-[#D4AF37] uppercase tracking-widest block">Methodology</span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">4-Step Execution Framework</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {WORK_PROCESS.map((step, idx) => {
            const Icon = stepIcons[idx] || Compass;
            return (
              <div
                key={step.step}
                className="classical-frame rounded-2xl p-5 sm:p-7 hover:border-[#D4AF37]/50 transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#D4AF37]/20 to-[#8C6D1F]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 group-hover:bg-[#D4AF37] group-hover:text-[#07090D] transition-all duration-300 shadow-md">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="font-serif font-black text-2xl sm:text-3xl text-slate-700 group-hover:text-[#D4AF37]/40 transition-colors">
                    {step.step}
                  </span>
                </div>

                <div>
                  <div className="text-[10px] sm:text-[11px] font-cinzel font-bold text-[#D4AF37] uppercase tracking-widest mb-1">
                    {step.duration}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold font-serif text-white mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-slate-800/80 flex items-center gap-2 text-[10px] sm:text-[11px] text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <span>Quality Assured Milestone</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quality Materials Breakdown */}
        <div className="pt-4 sm:pt-8">
          <MaterialsShowcase />
        </div>

        {/* Consultation Callout */}
        <div className="classical-frame p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-[#D4AF37]/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-serif font-bold text-white">
              Ready to schedule your site laser measurements?
            </h4>
            <p className="text-xs text-slate-300 font-light">
              Our site engineer will visit with material samples, swatch boards, and measurement equipment.
            </p>
          </div>
          <button
            onClick={() => onOpenConsultation('Site Laser Measurement')}
            className="w-full sm:w-auto px-7 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B89225] text-[#07090D] font-cinzel font-bold text-xs uppercase tracking-[0.16em] shadow-[0_0_20px_rgba(212,175,55,0.35)] hover:brightness-110 shrink-0 min-h-[44px]"
          >
            Schedule Site Measurement
          </button>
        </div>
      </section>
    </div>
  );
}
