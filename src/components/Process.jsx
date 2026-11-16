import React from 'react';
import { Compass, Box, Hammer, ShieldCheck, ArrowRight } from 'lucide-react';
import { WORK_PROCESS } from '../data/companyData';

export default function Process({ onOpenConsultation }) {
  const stepIcons = [Compass, Box, Hammer, ShieldCheck];

  return (
    <section id="process" className="py-24 bg-obsidian-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>The Skyrock Standard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white">
            From Vision To Reality <br />
            <span className="text-gold-gradient italic">In 4 Seamless Steps</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base font-light">
            We eliminate the guesswork with photorealistic 3D previews, exact laser measurements, and automated CNC factory joinery before anything touches your home.
          </p>
        </div>

        {/* Process Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {WORK_PROCESS.map((step, idx) => {
            const Icon = stepIcons[idx] || Compass;
            return (
              <div
                key={step.step}
                className="relative glass-panel rounded-2xl p-6 sm:p-7 border border-slate-800 hover:border-gold-500/50 transition-all duration-300 group flex flex-col justify-between"
              >
                {/* Step Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500/20 to-gold-700/20 border border-gold-500/40 flex items-center justify-center text-gold-400 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-obsidian-950 transition-all duration-300 shadow-gold-glow">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-serif font-black text-3xl text-slate-700 group-hover:text-gold-400/40 transition-colors">
                    {step.step}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <div className="text-[11px] font-bold text-gold-400 uppercase tracking-widest mb-1.5">
                    {step.duration}
                  </div>
                  <h3 className="text-lg font-bold font-serif text-white mb-2.5">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom line marker */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-[11px] text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                  <span>Quality Assured Milestone</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-obsidian-850 via-obsidian-800 to-obsidian-850 border border-gold-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl font-bold font-serif text-white">
              Ready to begin your space transformation?
            </h4>
            <p className="text-xs text-slate-300">
              Book a zero-obligation site visit with our design engineers in Nairobi & nationwide.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 text-obsidian-950 font-bold text-xs uppercase tracking-wider shadow-gold-glow hover:brightness-110 shrink-0"
          >
            Schedule Free Site Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
