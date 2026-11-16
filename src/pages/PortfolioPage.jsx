import React, { useState } from 'react';
import { Camera, Eye, MapPin, Clock, Star, X, ArrowRight } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/companyData';

export default function PortfolioPage({ onOpenConsultation }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', name: 'All Works' },
    { id: 'kitchens', name: 'Kitchens' },
    { id: 'wardrobes', name: 'Wardrobes' },
    { id: 'tv-units', name: 'TV Walls' },
    { id: 'finishing', name: 'Full Finishing' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-32 pb-28 space-y-16">
      
      {/* Classical Page Header */}
      <section className="relative py-16 bg-[#090C12] border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="classical-divider w-48 mx-auto text-[#D4AF37] opacity-70 text-xs">
            <span>◆</span>
          </div>
          <span className="font-cinzel text-xs font-bold text-[#D4AF37] tracking-[0.3em] uppercase block">
            Curated Handover Monograph
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white max-w-3xl mx-auto leading-tight">
            Our Portfolio of <br />
            <span className="text-gold-gradient italic font-serif">Recent Architectural Commissions</span>
          </h1>
          <p className="mt-4 text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto font-light leading-relaxed">
            A selective collection of bespoke kitchens, dressing suites, and media feature walls completed for luxury residences across Karen, Runda, Kileleshwa, Kilimani, and Kiambu Road.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Classical Category Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full text-xs font-cinzel tracking-[0.16em] uppercase transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-[#D4AF37] via-[#E5C378] to-[#AA8214] text-[#07090D] font-bold shadow-[0_0_20px_rgba(212,175,55,0.4)]'
                  : 'bg-[#0E131C] text-slate-300 hover:text-[#D4AF37] hover:bg-[#141A26] border border-slate-800'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProjects.map((project, idx) => {
            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="classical-frame rounded-2xl overflow-hidden group cursor-pointer hover:border-[#D4AF37]/60 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between shadow-2xl"
              >
                {/* Image Frame */}
                <div className="relative aspect-[4/3] overflow-hidden border-b border-[#D4AF37]/15">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-[#07090D]/90 backdrop-blur-md text-[9px] font-cinzel font-bold text-[#D4AF37] border border-[#D4AF37]/30 uppercase tracking-[0.18em]">
                      {project.categoryName}
                    </span>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[2px] bg-[#07090D]/50">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37] text-[#07090D] font-cinzel font-bold text-xs uppercase tracking-[0.16em] shadow-lg">
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Monograph</span>
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-[11px] text-[#C5A880] mb-2 font-cinzel">
                      <span className="flex items-center gap-1 font-semibold">
                        <MapPin className="w-3 h-3 text-[#D4AF37]" />
                        {project.location}
                      </span>
                      <span className="flex items-center gap-1 text-slate-400 font-sans text-[10px]">
                        <Clock className="w-3 h-3 text-[#D4AF37]" />
                        {project.timeframe}
                      </span>
                    </div>

                    <h3 className="font-serif font-bold text-base text-white group-hover:text-[#FFF2CF] transition-colors line-clamp-1">
                      {project.title}
                    </h3>

                    <p className="mt-1.5 text-xs text-slate-300 font-light line-clamp-2 leading-relaxed">
                      {project.details}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[#D4AF37]">
                      {[...Array(project.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-[#D4AF37] text-[#D4AF37]" />
                      ))}
                    </div>
                    <span className="font-cinzel text-[10px] uppercase tracking-wider text-slate-400 group-hover:text-[#D4AF37] flex items-center gap-1">
                      Inspect <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Upload Custom Plans Callout */}
        <div className="classical-frame p-8 sm:p-10 rounded-3xl border border-[#D4AF37]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl font-serif font-bold text-white">
              Have architectural blueprints or Pinterest concepts?
            </h4>
            <p className="text-xs text-slate-300 font-light">
              Send your reference images to our design workshop on WhatsApp for an immediate feasibility and quotation response.
            </p>
          </div>
          <button
            onClick={() => onOpenConsultation('Custom Design Blueprint')}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B89225] text-[#07090D] font-cinzel font-bold text-xs uppercase tracking-[0.18em] shadow-[0_0_20px_rgba(212,175,55,0.35)] hover:brightness-110 shrink-0"
          >
            Upload Plans For Estimate
          </button>
        </div>

        {/* Lightbox Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#07090D]/92 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto classical-frame rounded-2xl sm:rounded-3xl border border-[#D4AF37]/60 shadow-[0_0_50px_rgba(0,0,0,0.9)] animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#07090D]/90 border border-slate-700 text-slate-300 hover:text-white flex items-center justify-center hover:scale-105 transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-video max-h-[420px] overflow-hidden border-b border-[#D4AF37]/20">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-6">
                  <span className="px-3 py-1 rounded-full bg-[#D4AF37] text-[#07090D] font-cinzel font-bold text-xs uppercase tracking-wider">
                    {selectedProject.categoryName}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-white">
                      {selectedProject.title}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-[#D4AF37] mt-1 font-cinzel">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {selectedProject.location}
                      </span>
                      <span>•</span>
                      <span className="text-slate-300 font-sans">
                        Turnaround: {selectedProject.timeframe}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-[#D4AF37]">
                    {[...Array(selectedProject.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                    ))}
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  {selectedProject.details} Hand-fitted with moisture-resistant joinery cores, German Blum soft-close mechanics, and Italian stone worktops.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      onOpenConsultation(selectedProject.title);
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B89225] text-[#07090D] font-cinzel font-bold text-xs uppercase tracking-[0.16em] shadow-md hover:brightness-110"
                  >
                    <span>Request Similar Custom Design</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={`https://wa.me/254745918724?text=${encodeURIComponent(
                      `Hello Skyrock Interiors, I am interested in a design similar to your portfolio project: "${selectedProject.title}" in ${selectedProject.location}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto text-center px-6 py-3 rounded-full border border-emerald-500/50 text-emerald-300 hover:bg-emerald-500/10 text-xs font-semibold"
                  >
                    Discuss on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
