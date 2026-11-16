import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, Sparkles, MessageCircle, RefreshCw, Info } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function CostCalculator({ onOpenConsultation }) {
  const [projectType, setProjectType] = useState('kitchen');
  const [sizeTier, setSizeTier] = useState('medium');
  const [finishGrade, setFinishGrade] = useState('acrylic');
  const [addons, setAddons] = useState(['led', 'cad']);

  const projectTypes = [
    { id: 'kitchen', name: 'Custom Kitchen', basePrice: 220000, unit: 'Full Fitted Cabinetry' },
    { id: 'wardrobe', name: 'Master Wardrobe', basePrice: 150000, unit: 'Floor-to-Ceiling Closet' },
    { id: 'tv-wall', name: 'TV Media Feature Wall', basePrice: 85000, unit: 'Slat & Stone Wall Unit' },
    { id: 'gypsum', name: 'Gypsum Ceiling & Lighting', basePrice: 140000, unit: 'Living & Dining Area' },
    { id: 'turnkey', name: 'Complete House Finishing', basePrice: 650000, unit: 'Turnkey Residential' },
  ];

  const sizeMultipliers = {
    compact: { label: 'Compact / Standard', multiplier: 0.8, desc: 'Apartment or smaller dimensions' },
    medium: { label: 'Executive / Townhouse', multiplier: 1.0, desc: 'Standard 3-4 bedroom residence' },
    large: { label: 'Luxury Villa / Mansion', multiplier: 1.5, desc: 'Expansive custom spatial layout' },
  };

  const finishGrades = {
    standard: {
      name: 'Classic Premium',
      multiplier: 1.0,
      desc: 'High-density moisture-resistant MDF, wood-grain laminates, heavy-duty soft-close hinges.'
    },
    acrylic: {
      name: 'High-Gloss / Super-Matte Acrylic',
      multiplier: 1.35,
      desc: 'Anti-fingerprint matte/mirror acrylic, German Blum runners, quartz/granite stone worktops.'
    },
    prestige: {
      name: 'Ultra-Luxury Italian Prestige',
      multiplier: 1.75,
      desc: 'Sintered porcelain stone, natural fluted hardwood, bronze tinted glass, integrated concealed channels.'
    }
  };

  const addonList = [
    { id: 'led', name: 'Recessed Sensor Warm LED Profile Strips', price: 25000 },
    { id: 'blum', name: 'German Blum Tandem Pullouts & Pantries', price: 38000 },
    { id: 'marble', name: 'Backlit UV Marble / Porcelain Slab Backdrop', price: 45000 },
    { id: 'fluted', name: 'Acoustic Fluted Wood Slat Accent Wall', price: 32000 },
    { id: 'cad', name: 'Photorealistic 3D CAD Virtual Walkthrough', price: 0, free: true },
  ];

  const toggleAddon = (id) => {
    setAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Calculation
  const selectedProj = projectTypes.find((p) => p.id === projectType);
  const base = selectedProj.basePrice;
  const sizeMult = sizeMultipliers[sizeTier].multiplier;
  const gradeMult = finishGrades[finishGrade].multiplier;

  const addonsTotal = addons.reduce((sum, currentId) => {
    const item = addonList.find((a) => a.id === currentId);
    return sum + (item ? item.price : 0);
  }, 0);

  const rawTotal = Math.round((base * sizeMult * gradeMult + addonsTotal) / 1000) * 1000;
  const lowEstimate = Math.round((rawTotal * 0.95) / 1000) * 1000;
  const highEstimate = Math.round((rawTotal * 1.08) / 1000) * 1000;

  const formatKes = (amount) => {
    return 'KES ' + amount.toLocaleString('en-KE');
  };

  const generateWhatsAppMessage = () => {
    const text = `Hello Skyrock Interiors Limited! 🛋️✨%0A%0AI used your online project estimator and would like to get a formal quote for my project:%0A%0A*Project Scope:* ${selectedProj.name}%0A*Space Size:* ${sizeMultipliers[sizeTier].label}%0A*Finishing Grade:* ${finishGrades[finishGrade].name}%0A*Selected Add-ons:* ${addons.map(id => addonList.find(a => a.id === id)?.name).join(', ')}%0A*Estimated Range:* ${formatKes(lowEstimate)} - ${formatKes(highEstimate)}%0A%0ACan you schedule a site visit or send me the design catalog?`;
    return `https://wa.me/${COMPANY_INFO.whatsappNumber.replace('+', '')}?text=${text}`;
  };

  return (
    <section id="estimator" className="py-24 bg-obsidian-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Quotation Builder</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white">
            Estimate Your Dream <br />
            <span className="text-gold-gradient italic">Interior Project Cost</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base font-light">
            Select your space type, desired dimensions, and material finishes below to get an instant transparent estimate. Then dispatch it directly to our workshop on WhatsApp.
          </p>
        </div>

        {/* The Calculator UI Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Form Controls */}
          <div className="lg:col-span-7 space-y-8 glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800">
            
            {/* Step 1: Project Type */}
            <div>
              <label className="block text-xs font-bold text-gold-300 uppercase tracking-wider mb-3">
                1. Select What You Want Built:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {projectTypes.map((pt) => (
                  <button
                    key={pt.id}
                    onClick={() => setProjectType(pt.id)}
                    className={`p-3 rounded-xl text-left border text-xs font-medium transition-all ${
                      projectType === pt.id
                        ? 'bg-gold-500/20 border-gold-500 text-white shadow-gold-glow'
                        : 'bg-obsidian-800/80 border-slate-700 text-slate-300 hover:border-slate-600'
                    }`}
                  >
                    <div className="font-bold">{pt.name}</div>
                    <div className="text-[10px] text-slate-400 mt-1">{pt.unit}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Dimensions / Space Size */}
            <div>
              <label className="block text-xs font-bold text-gold-300 uppercase tracking-wider mb-3">
                2. Approximate Size & Layout:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {Object.entries(sizeMultipliers).map(([key, val]) => (
                  <button
                    key={key}
                    onClick={() => setSizeTier(key)}
                    className={`p-3 rounded-xl text-left border text-xs transition-all ${
                      sizeTier === key
                        ? 'bg-gold-500/20 border-gold-500 text-white shadow-gold-glow'
                        : 'bg-obsidian-800/80 border-slate-700 text-slate-300 hover:border-slate-600'
                    }`}
                  >
                    <div className="font-bold">{val.label}</div>
                    <div className="text-[10px] text-slate-400 mt-1">{val.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Material & Finish Tier */}
            <div>
              <label className="block text-xs font-bold text-gold-300 uppercase tracking-wider mb-3">
                3. Material & Finishing Grade:
              </label>
              <div className="space-y-2">
                {Object.entries(finishGrades).map(([key, val]) => (
                  <div
                    key={key}
                    onClick={() => setFinishGrade(key)}
                    className={`p-3.5 rounded-xl border text-xs cursor-pointer flex items-center justify-between transition-all ${
                      finishGrade === key
                        ? 'bg-gold-500/20 border-gold-500 text-white shadow-gold-glow'
                        : 'bg-obsidian-800/80 border-slate-700 text-slate-300 hover:border-slate-600'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-sm text-gold-200">{val.name}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">{val.desc}</div>
                    </div>
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ml-3 ${
                      finishGrade === key ? 'border-gold-400 bg-gold-500 text-obsidian-950' : 'border-slate-600'
                    }`}>
                      {finishGrade === key && <Check className="w-3.5 h-3.5 font-bold" />}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 4: Add-ons */}
            <div>
              <label className="block text-xs font-bold text-gold-300 uppercase tracking-wider mb-3">
                4. Optional Add-ons & Customizations:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {addonList.map((addon) => {
                  const isChecked = addons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3 rounded-xl border text-xs cursor-pointer flex items-center justify-between transition-all ${
                        isChecked
                          ? 'bg-gold-500/15 border-gold-500/60 text-white'
                          : 'bg-obsidian-800/50 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <div className="pr-2">
                        <div className="font-semibold text-slate-200">{addon.name}</div>
                        <div className="text-[10px] text-gold-400 font-bold mt-0.5">
                          {addon.free ? 'FREE INCLUDED' : `+ ${formatKes(addon.price)}`}
                        </div>
                      </div>
                      <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                        isChecked ? 'border-gold-400 bg-gold-500 text-obsidian-950' : 'border-slate-600'
                      }`}>
                        {isChecked && <Check className="w-3 h-3 font-bold" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Live Estimate Card */}
          <div className="lg:col-span-5 sticky top-28 space-y-4">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-gold-500/50 shadow-gold-glow relative overflow-hidden bg-gradient-to-b from-obsidian-850 to-obsidian-950">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs uppercase font-bold text-gold-400 tracking-wider">
                  Live Project Estimate
                </span>
                <span className="text-[11px] text-slate-400">Nairobi & Kenya</span>
              </div>

              {/* Price Range Banner */}
              <div className="my-6">
                <div className="text-xs text-slate-400 mb-1">Estimated Budget Range:</div>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-gold-gradient tracking-tight">
                  {formatKes(lowEstimate)}
                </div>
                <div className="text-sm font-serif font-bold text-slate-400">
                  to {formatKes(highEstimate)}
                </div>
                <div className="text-[11px] text-slate-400 mt-2 flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                  <span>Includes 3D CAD design, material fabrication & on-site installation.</span>
                </div>
              </div>

              {/* Configuration Summary */}
              <div className="space-y-2 py-4 border-t border-b border-slate-800/80 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">Chosen Scope:</span>
                  <span className="text-white font-semibold">{selectedProj.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Scale / Tier:</span>
                  <span className="text-white font-semibold">{sizeMultipliers[sizeTier].label}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Finish:</span>
                  <span className="text-gold-300 font-semibold">{finishGrades[finishGrade].name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Add-ons Count:</span>
                  <span className="text-white font-semibold">{addons.length} items</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Warranty:</span>
                  <span className="text-emerald-400 font-semibold">5-Year Full Coverage</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 space-y-3">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Estimate to WhatsApp</span>
                </a>

                <button
                  onClick={onOpenConsultation}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gold-500/20 hover:bg-gold-500/30 border border-gold-500/60 text-gold-300 font-bold text-xs uppercase tracking-wider transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Book Free Laser Measurement</span>
                </button>
              </div>

              <div className="mt-4 text-center">
                <p className="text-[10px] text-slate-500">
                  Exact pricing confirmed following our free in-person site inspection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
