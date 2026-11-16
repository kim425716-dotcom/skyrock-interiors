import React, { useState } from 'react';
import { Palette, Sparkles, Check, MessageSquare, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function MoodboardVisualizer({ onOpenConsultation }) {
  const cabinetFinishes = [
    {
      id: 'obsidian-matte',
      name: 'Matte Obsidian Black',
      category: 'Ultra-Matte Acrylic',
      hex: '#14171E',
      textColor: '#FFFFFF',
      desc: 'Velvety anti-fingerprint coating with modern minimalist depth.'
    },
    {
      id: 'cashmere-cream',
      name: 'Cashmere Alabaster Cream',
      category: 'Soft Satin Lacquer',
      hex: '#EBE5D8',
      textColor: '#1A1D20',
      desc: 'Warm ivory satin finish that reflects natural light beautifully.'
    },
    {
      id: 'scandi-oak',
      name: 'Fluted Scandinavian Oak',
      category: 'Natural Timber Slats',
      hex: '#C8A676',
      textColor: '#1A1D20',
      desc: 'Precision 3D grooved acoustic wood slats with organic oak grain.'
    },
    {
      id: 'smoked-walnut',
      name: 'Deep Smoked Walnut',
      category: 'Architectural Veneer',
      hex: '#4A3728',
      textColor: '#FFFFFF',
      desc: 'Rich, luxurious dark chocolate woodgrain with satin polyurethane seal.'
    }
  ];

  const stoneCountertops = [
    {
      id: 'calacatta-gold',
      name: 'Calacatta Gold Quartz',
      hex: '#F4F2EC',
      accentVein: '#C5A880',
      desc: 'Crisp white base with bold metallic gold and grey veins.'
    },
    {
      id: 'nero-marquina',
      name: 'Nero Marquina Sintered Stone',
      hex: '#1B1C20',
      accentVein: '#FFFFFF',
      desc: 'Deep midnight stone with fine lightning-white crystalline fissures.'
    },
    {
      id: 'statuario-white',
      name: 'Italian Statuario Marble Slab',
      hex: '#EFEFEF',
      accentVein: '#8A92A6',
      desc: 'Classic book-matched grey clouding on immaculate pure white.'
    },
    {
      id: 'terrazzo-luxe',
      name: 'Bespoke Warm Terrazzo',
      hex: '#DDD6CC',
      accentVein: '#8B6A47',
      desc: 'Artisanal stone flecks in bronze, caramel, and quartz stone.'
    }
  ];

  const hardwareAccents = [
    {
      id: 'champagne-gold',
      name: 'Champagne Gold',
      hex: '#D4AF37',
      border: '#F3E4BF'
    },
    {
      id: 'matte-black',
      name: 'Matte Black',
      hex: '#1C1F26',
      border: '#3D4454'
    },
    {
      id: 'brushed-brass',
      name: 'Antique Brass',
      hex: '#B8860B',
      border: '#E6C687'
    },
    {
      id: 'concealed-j-pull',
      name: 'Handleless J-Pull',
      hex: '#8C95A6',
      border: '#CBD5E1'
    }
  ];

  const [selectedCabinet, setSelectedCabinet] = useState(cabinetFinishes[0]);
  const [selectedStone, setSelectedStone] = useState(stoneCountertops[0]);
  const [selectedHardware, setSelectedHardware] = useState(hardwareAccents[0]);

  const generateWhatsAppInquiry = () => {
    const text = `Hello Skyrock Interiors Limited! 🛋️✨%0A%0AI used your online Material Moodboard Visualizer and created a custom palette:%0A%0A*Cabinet Finish:* ${selectedCabinet.name} (${selectedCabinet.category})%0A*Countertop Slab:* ${selectedStone.name}%0A*Hardware Detail:* ${selectedHardware.name}%0A%0ACan you bring physical swatches of these exact materials to my site visit?`;
    return `https://wa.me/${COMPANY_INFO.whatsappNumber.replace('+', '')}?text=${text}`;
  };

  return (
    <div className="classical-frame p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-[#D4AF37]/40 shadow-luxury-card space-y-6 sm:space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5 sm:pb-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-cinzel font-bold text-[#D4AF37] tracking-[0.2em] uppercase mb-1">
            <Palette className="w-3.5 h-3.5" />
            <span>Interactive Material Palette Studio</span>
          </div>
          <h3 className="text-xl sm:text-3xl font-serif font-bold text-white">
            Mix & Match Custom Finishes
          </h3>
          <p className="text-xs text-slate-300 mt-1 font-light">
            Choose your cabinetry texture, countertop stone, and hardware profile to preview your bespoke combination.
          </p>
        </div>

        <a
          href={generateWhatsAppInquiry()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:brightness-110 shrink-0 min-h-[44px]"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Inquire Palette on WhatsApp</span>
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        
        {/* Left Column: Selector Controls */}
        <div className="lg:col-span-7 space-y-5 sm:space-y-6">
          
          {/* 1. Cabinet Finish */}
          <div>
            <label className="block text-xs font-cinzel font-bold text-[#D4AF37] uppercase tracking-[0.16em] mb-2 sm:mb-2.5">
              1. Cabinetry & Door Finish:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              {cabinetFinishes.map((cab) => {
                const isSelected = selectedCabinet.id === cab.id;
                return (
                  <button
                    key={cab.id}
                    onClick={() => setSelectedCabinet(cab)}
                    className={`p-3 rounded-xl text-left border transition-all flex items-start gap-3 min-h-[50px] ${
                      isSelected
                        ? 'bg-[#D4AF37]/20 border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                        : 'bg-[#0E131C] border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div
                      className="w-8 h-8 rounded-lg shrink-0 border border-white/20 shadow-inner"
                      style={{ backgroundColor: cab.hex }}
                    />
                    <div className="min-w-0">
                      <div className="text-xs font-serif font-bold text-white truncate">{cab.name}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5 truncate">{cab.category}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Countertop Stone */}
          <div>
            <label className="block text-xs font-cinzel font-bold text-[#D4AF37] uppercase tracking-[0.16em] mb-2 sm:mb-2.5">
              2. Countertop Stone & Island Slab:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              {stoneCountertops.map((stone) => {
                const isSelected = selectedStone.id === stone.id;
                return (
                  <button
                    key={stone.id}
                    onClick={() => setSelectedStone(stone)}
                    className={`p-3 rounded-xl text-left border transition-all flex items-start gap-3 min-h-[50px] ${
                      isSelected
                        ? 'bg-[#D4AF37]/20 border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                        : 'bg-[#0E131C] border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div
                      className="w-8 h-8 rounded-lg shrink-0 border border-white/30 relative overflow-hidden"
                      style={{ backgroundColor: stone.hex }}
                    >
                      <div
                        className="absolute inset-0 opacity-40 rotate-45 transform scale-150"
                        style={{ borderRight: `2px solid ${stone.accentVein}` }}
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-serif font-bold text-white truncate">{stone.name}</div>
                      <div className="text-[10px] text-slate-400 mt-0.5 truncate font-light">{stone.desc}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Hardware Accent */}
          <div>
            <label className="block text-xs font-cinzel font-bold text-[#D4AF37] uppercase tracking-[0.16em] mb-2 sm:mb-2.5">
              3. Handles & Accent Hardware:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
              {hardwareAccents.map((hw) => {
                const isSelected = selectedHardware.id === hw.id;
                return (
                  <button
                    key={hw.id}
                    onClick={() => setSelectedHardware(hw)}
                    className={`p-2.5 rounded-xl text-center border transition-all min-h-[54px] flex flex-col items-center justify-center ${
                      isSelected
                        ? 'bg-[#D4AF37]/20 border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                        : 'bg-[#0E131C] border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div
                      className="w-4 h-4 sm:w-5 sm:h-5 rounded-full mb-1 border"
                      style={{ backgroundColor: hw.hex, borderColor: hw.border }}
                    />
                    <div className="text-[10px] font-semibold text-white line-clamp-1">{hw.name}</div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Live Composite Moodboard Display */}
        <div className="lg:col-span-5">
          <div className="classical-frame p-5 sm:p-6 rounded-2xl border border-[#D4AF37]/50 shadow-2xl space-y-4 sm:space-y-5 bg-gradient-to-b from-[#0E131C] to-[#07090D]">
            <div className="flex items-center justify-between text-xs text-[#D4AF37] font-cinzel font-bold uppercase tracking-wider pb-3 border-b border-slate-800">
              <span>Bespoke Palette Preview</span>
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            </div>

            {/* Composite Visual Swatch Stack */}
            <div className="space-y-2.5 sm:space-y-3">
              {/* Cabinet Swatch Preview */}
              <div
                className="h-20 sm:h-24 rounded-xl p-3.5 sm:p-4 flex flex-col justify-end shadow-lg relative overflow-hidden transition-all duration-300"
                style={{ backgroundColor: selectedCabinet.hex, color: selectedCabinet.textColor }}
              >
                <div className="text-[9px] uppercase font-cinzel font-bold tracking-wider opacity-70">
                  Primary Cabinetry Body
                </div>
                <div className="text-sm font-serif font-bold leading-tight">{selectedCabinet.name}</div>
                <div className="text-[10px] opacity-80 font-light truncate">{selectedCabinet.desc}</div>
              </div>

              {/* Stone Countertop Preview */}
              <div
                className="h-16 sm:h-20 rounded-xl p-3.5 sm:p-4 flex flex-col justify-end shadow-lg relative overflow-hidden transition-all duration-300 text-slate-900 border border-slate-700/40"
                style={{ backgroundColor: selectedStone.hex }}
              >
                <div
                  className="absolute inset-0 opacity-30 pointer-events-none"
                  style={{
                    background: `linear-gradient(45deg, transparent 40%, ${selectedStone.accentVein} 50%, transparent 60%)`
                  }}
                />
                <div className="text-[9px] uppercase font-cinzel font-bold tracking-wider text-slate-700">
                  Countertop & Island Worktop
                </div>
                <div className="text-sm font-serif font-bold text-slate-900 leading-tight">{selectedStone.name}</div>
              </div>

              {/* Hardware Bar */}
              <div className="p-3 rounded-xl bg-[#090C12] border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-[9px] text-slate-400 font-cinzel uppercase font-semibold">
                    Hardware Accent Profile
                  </div>
                  <div className="text-xs font-bold text-white mt-0.5">{selectedHardware.name}</div>
                </div>
                <div
                  className="w-6 h-6 rounded-full border-2 shadow-md shrink-0"
                  style={{ backgroundColor: selectedHardware.hex, borderColor: selectedHardware.border }}
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 space-y-2">
              <a
                href={generateWhatsAppInquiry()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B89225] text-[#07090D] font-cinzel font-bold text-xs uppercase tracking-[0.16em] shadow-[0_0_20px_rgba(212,175,55,0.35)] hover:brightness-110 transition-all min-h-[44px]"
              >
                <span>Request Physical Swatches</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-[10px] text-center text-slate-400 font-light">
                Our site engineer carries genuine physical swatches to your consultation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
