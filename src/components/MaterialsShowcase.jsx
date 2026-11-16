import React, { useState } from 'react';
import { Layers, ShieldCheck, Check } from 'lucide-react';

export default function MaterialsShowcase() {
  const [activeMaterial, setActiveMaterial] = useState('acrylic');

  const materials = [
    {
      id: 'acrylic',
      name: 'Super-Matte & Gloss Acrylic',
      category: 'Cabinetry Faces',
      description: 'Anti-fingerprint, velvety soft-touch matte acrylic and ultra-reflective high-gloss panels. Resistant to UV fading, heat, and everyday kitchen grease.',
      features: ['Zero fingerprint marks', 'Seamless PUR edge-banding', 'Scratch resistant surface', 'Available in 20+ luxury hues'],
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'quartz',
      name: 'Engineered Quartz & Sintered Stone',
      category: 'Countertops & Islands',
      description: '93% natural quartz combined with polymer resins. Non-porous, stain-proof against turmeric, wine, and coffee, and completely food-safe.',
      features: ['Non-porous & antibacterial', 'Heat and thermal shock resistant', 'Calacatta gold & Statuario veining', 'Integrated waterfall mitred edges'],
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'slats',
      name: 'Acoustic Fluted Wood Slats',
      category: 'TV Walls & Bulkheads',
      description: 'Precision CNC-milled fluted wooden slats mounted on sound-dampening acoustic felt backing. Adds warmth, depth, and luxury texture to modern living rooms.',
      features: ['Acoustic sound absorption', 'Real natural veneer finishes (Oak, Walnut, Charcoal)', 'Concealed LED strip channels', 'Precision geometric alignment'],
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'hardware',
      name: 'Blum German Hardware & Runners',
      category: 'Internal Mechanics',
      description: 'We exclusively fit soft-closing Blumotion hinges and undermount tandem runners tested to 200,000 opening cycles without sagging.',
      features: ['Whisper-quiet soft closing', 'Heavy-duty 50kg load capacity', 'Push-to-open tip-on options', 'Lifetime mechanical durability'],
      image: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?q=80&w=800&auto=format&fit=crop'
    }
  ];

  const current = materials.find((m) => m.id === activeMaterial);

  return (
    <div className="space-y-8 sm:space-y-12">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="classical-divider w-36 sm:w-48 mx-auto text-[#D4AF37] opacity-60 text-xs">
          <span>◆</span>
        </div>
        <span className="font-cinzel text-[10px] sm:text-xs font-bold text-[#D4AF37] tracking-[0.25em] uppercase block">
          Materials & Craftsmanship Integrity
        </span>
        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
          Uncompromising Quality, Built To Endure
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 font-light">
          We refuse to cut corners with cheap chipboard or flimsy generic hardware. Inspect the high-performance materials we use in every Skyrock installation.
        </p>
      </div>

      {/* Material Selector Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4">
        {materials.map((mat) => (
          <button
            key={mat.id}
            onClick={() => setActiveMaterial(mat.id)}
            className={`p-3.5 sm:p-5 rounded-xl sm:rounded-2xl text-left border transition-all duration-300 min-h-[70px] ${
              activeMaterial === mat.id
                ? 'bg-[#D4AF37]/20 border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.3)] -translate-y-0.5 sm:-translate-y-1'
                : 'bg-[#0E131C] border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
            }`}
          >
            <div className="text-[9px] sm:text-[10px] font-cinzel font-bold text-[#D4AF37] uppercase tracking-wider">
              {mat.category}
            </div>
            <div className="text-xs sm:text-sm font-serif font-bold text-white mt-1 line-clamp-1">
              {mat.name}
            </div>
          </button>
        ))}
      </div>

      {/* Active Material Feature Box */}
      {current && (
        <div className="classical-frame p-4 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#D4AF37]/35 shadow-luxury-card animate-in fade-in duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <span className="px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] sm:text-xs font-cinzel font-bold uppercase tracking-wider inline-block">
                {current.category}
              </span>
              <h3 className="text-xl sm:text-3xl font-serif font-bold text-white leading-tight">
                {current.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                {current.description}
              </p>

              <div className="space-y-2 sm:space-y-2.5 pt-1">
                <h4 className="text-[10px] sm:text-xs font-cinzel font-bold text-[#FFF2CF] uppercase tracking-wider">
                  Key Performance Advantages:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                  {current.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                      <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs text-[#D4AF37] font-cinzel">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Backed by Skyrock's 5-Year Craftsmanship Guarantee</span>
              </div>
            </div>

            <div className="lg:col-span-5 relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl border border-slate-800">
              <img
                src={current.image}
                alt={current.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090D]/70 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
