import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, Sparkles, MessageCircle, Info, ShieldCheck, CreditCard } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function EstimatorPage({ onOpenConsultation }) {
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
    medium: { label: 'Executive Residence', multiplier: 1.0, desc: 'Standard 3-4 bedroom townhouse or villa' },
    large: { label: 'Grand Villa / Mansion', multiplier: 1.5, desc: 'Expansive custom architectural layout' },
  };

  const finishGrades = {
    standard: {
      name: 'Classic Premium',
      multiplier: 1.0,
      desc: 'High-density moisture-resistant MDF, woodgrain laminates, heavy-duty soft-close hinges.'
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
    const text = `Hello Skyrock Interiors Limited! 🛋️✨%0A%0AI used your online Bespoke Investment Planner and would like to get a formal quote for my project:%0A%0A*Project Scope:* ${selectedProj.name}%0A*Space Size:* ${sizeMultipliers[sizeTier].label}%0A*Finishing Grade:* ${finishGrades[finishGrade].name}%0A*Selected Add-ons:* ${addons.map(id => addonList.find(a => a.id === id)?.name).join(', ')}%0A*Estimated Range:* ${formatKes(lowEstimate)} - ${formatKes(highEstimate)}%0A%0ACan you schedule a site visit or send me the design catalog?`;
    return `https://wa.me/${COMPANY_INFO.whatsappNumber.replace('+', '')}?text=${text}`;
  };

  return (
    <div className="pt-32 pb-28 space-y-16">
      
      {/* Classical Header */}
      <section className="relative py-16 bg-[#090C12] border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="classical-divider w-48 mx-auto text-[#D4AF37] opacity-70 text-xs">
            <span>◆</span>
          </div>
          <span className="font-cinzel text-xs font-bold text-[#D4AF37] tracking-[0.3em] uppercase block">
            Transparent Commission Studio
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white max-w-3xl mx-auto leading-tight">
            Estimate Your Architectural <br />
            <span className="text-gold-gradient italic font-serif">Interior Investment</span>
          </h1>
          <p className="mt-4 text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto font-light leading-relaxed">
            Select your space type, desired dimensions, and material finishes below to calculate an instant transparent budget in Kenyan Shillings.
          </p>
        </div>
      </section>

      {/* Main Form Body */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8 classical-frame p-6 sm:p-10 rounded-3xl shadow-luxury-card">
            
            {/* Step 1 */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="font-cinzel font-bold text-xs text-[#D4AF37]">I.</span>
                <label className="text-xs font-cinzel font-bold text-[#FFF2CF] uppercase tracking-[0.16em]">
                  The Scope of Commission:
                </label>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {projectTypes.map((pt) => (
                  <button
                    key={pt.id}
                    onClick={() => setProjectType(pt.id)}
                    className={`p-3.5 rounded-xl text-left border text-xs font-medium transition-all ${
                      projectType === pt.id
                        ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-white shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                        : 'bg-[#0E131C] border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="font-serif font-bold text-sm text-white">{pt.name}</div>
                    <div className="text-[10px] text-slate-400 mt-1">{pt.unit}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2 */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="font-cinzel font-bold text-xs text-[#D4AF37]">II.</span>
                <label className="text-xs font-cinzel font-bold text-[#FFF2CF] uppercase tracking-[0.16em]">
                  Spatial Proportions & Layout:
                </label>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {Object.entries(sizeMultipliers).map(([key, val]) => (
                  <button
                    key={key}
                    onClick={() => setSizeTier(key)}
                    className={`p-3.5 rounded-xl text-left border text-xs transition-all ${
                      sizeTier === key
                        ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-white shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                        : 'bg-[#0E131C] border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="font-serif font-bold text-sm text-white">{val.label}</div>
                    <div className="text-[10px] text-slate-400 mt-1 font-light">{val.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3 */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="font-cinzel font-bold text-xs text-[#D4AF37]">III.</span>
                <label className="text-xs font-cinzel font-bold text-[#FFF2CF] uppercase tracking-[0.16em]">
                  Material Tier & Artistry:
                </label>
              </div>
              <div className="space-y-2.5">
                {Object.entries(finishGrades).map(([key, val]) => (
                  <div
                    key={key}
                    onClick={() => setFinishGrade(key)}
                    className={`p-4 rounded-xl border text-xs cursor-pointer flex items-center justify-between transition-all ${
                      finishGrade === key
                        ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-white shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                        : 'bg-[#0E131C] border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <div className="font-serif font-bold text-base text-[#FFF2CF]">{val.name}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5 font-light">{val.desc}</div>
                    </div>
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ml-3 ${
                      finishGrade === key ? 'border-[#D4AF37] bg-[#D4AF37] text-[#07090D]' : 'border-slate-600'
                    }`}>
                      {finishGrade === key && <Check className="w-3.5 h-3.5 font-bold" />}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 4 */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="font-cinzel font-bold text-xs text-[#D4AF37]">IV.</span>
                <label className="text-xs font-cinzel font-bold text-[#FFF2CF] uppercase tracking-[0.16em]">
                  Architectural Accents & Upgrades:
                </label>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {addonList.map((addon) => {
                  const isChecked = addons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3.5 rounded-xl border text-xs cursor-pointer flex items-center justify-between transition-all ${
                        isChecked
                          ? 'bg-[#D4AF37]/15 border-[#D4AF37]/70 text-white shadow-sm'
                          : 'bg-[#0E131C] border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <div className="pr-2">
                        <div className="font-semibold text-slate-200">{addon.name}</div>
                        <div className="text-[10px] text-[#D4AF37] font-cinzel font-bold mt-0.5">
                          {addon.free ? 'FREE INCLUDED' : `+ ${formatKes(addon.price)}`}
                        </div>
                      </div>
                      <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                        isChecked ? 'border-[#D4AF37] bg-[#D4AF37] text-[#07090D]' : 'border-slate-600'
                      }`}>
                        {isChecked && <Check className="w-3 h-3 font-bold" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Symmetrical Pedestal Summary Card */}
          <div className="lg:col-span-5 static lg:sticky lg:top-32 space-y-4">
            <div className="classical-frame p-6 sm:p-8 rounded-3xl border border-[#D4AF37]/50 shadow-luxury-card relative overflow-hidden bg-gradient-to-b from-[#0F141E] to-[#07090D]">
              <div className="flex items-center justify-between pb-4 border-b border-[#D4AF37]/20 font-cinzel">
                <span className="text-[11px] uppercase font-bold text-[#D4AF37] tracking-[0.2em]">
                  Investment Estimate
                </span>
                <span className="text-[10px] text-slate-400">Kenya</span>
              </div>

              {/* Price Figures */}
              <div className="my-6">
                <div className="text-xs text-slate-400 mb-1 font-cinzel tracking-wider">Estimated Budget Bracket:</div>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-gold-gradient tracking-tight">
                  {formatKes(lowEstimate)}
                </div>
                <div className="text-sm font-serif font-bold text-slate-400">
                  to {formatKes(highEstimate)}
                </div>
                <div className="text-[11px] text-slate-400 mt-2 flex items-center gap-1.5 font-light">
                  <Info className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                  <span>Includes 3D CAD engineering, fabrication & site handover.</span>
                </div>
              </div>

              {/* Configuration Details */}
              <div className="space-y-2 py-4 border-t border-b border-slate-800 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">Commission Scope:</span>
                  <span className="text-white font-serif font-semibold">{selectedProj.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Spatial Scale:</span>
                  <span className="text-white font-semibold">{sizeMultipliers[sizeTier].label}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Artisan Tier:</span>
                  <span className="text-[#FFF2CF] font-semibold">{finishGrades[finishGrade].name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Add-ons:</span>
                  <span className="text-white font-semibold">{addons.length} items</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Guarantee:</span>
                  <span className="text-emerald-400 font-cinzel font-semibold">5-Year Written Handover</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-6 space-y-3">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-4 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all min-h-[44px]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Estimate to WhatsApp</span>
                </a>

                <button
                  onClick={onOpenConsultation}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full border border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37]/10 font-cinzel font-bold text-xs uppercase tracking-[0.16em] transition-all min-h-[44px]"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Book Laser Measurement</span>
                </button>
              </div>
            </div>

            {/* Payment Milestones */}
            <div className="classical-frame p-5 rounded-2xl text-xs space-y-2.5">
              <div className="flex items-center gap-2 text-[#D4AF37] font-cinzel font-bold">
                <CreditCard className="w-3.5 h-3.5" />
                <span className="tracking-wider">Stately Payment Stages</span>
              </div>
              <div className="space-y-1.5 text-slate-300 font-light">
                <div className="flex justify-between">
                  <span>1. Initial CNC Material Deposit:</span>
                  <span className="font-semibold text-white font-serif">50%</span>
                </div>
                <div className="flex justify-between">
                  <span>2. Delivery to Site Milestone:</span>
                  <span className="font-semibold text-white font-serif">40%</span>
                </div>
                <div className="flex justify-between">
                  <span>3. Final Handover & 5-Yr Warranty:</span>
                  <span className="font-semibold text-emerald-400 font-serif">10%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
