import React, { useState } from 'react';
import { Camera, Eye, MapPin, Clock, Star, X, ArrowRight, Check } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/companyData';

export default function Portfolio({ onOpenConsultation }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', name: 'All Masterpieces' },
    { id: 'kitchens', name: 'Kitchens' },
    { id: 'wardrobes', name: 'Wardrobes' },
    { id: 'tv-units', name: 'TV Media Walls' },
    { id: 'finishing', name: 'Full Finishing' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-obsidian-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Curated Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white">
            Our Portfolio of <br />
            <span className="text-gold-gradient italic">Recent Handover Projects</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base font-light">
            Explore authentic transformations executed for residences across Karen, Runda, Kileleshwa, Kilimani, and Kiambu Road.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-obsidian-950 shadow-gold-glow scale-105'
                  : 'bg-obsidian-850 text-slate-300 hover:text-gold-400 hover:bg-obsidian-800 border border-slate-800'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group glass-panel rounded-2xl overflow-hidden border border-slate-800 hover:border-gold-500/50 transition-all duration-500 cursor-pointer flex flex-col shadow-lg hover:-translate-y-1.5"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Category Pill */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full bg-obsidian-950/80 backdrop-blur-md text-[10px] font-bold text-gold-400 border border-gold-500/30 uppercase tracking-wider">
                    {project.categoryName}
                  </span>
                </div>

                {/* Hover Quick Action */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[2px] bg-obsidian-950/40">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500 text-obsidian-950 font-bold text-xs uppercase tracking-wider shadow-gold-glow scale-90 group-hover:scale-100 transition-transform">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Project</span>
                  </span>
                </div>
              </div>

              {/* Content Block */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1.5">
                    <span className="flex items-center gap-1 text-gold-300 font-medium">
                      <MapPin className="w-3 h-3" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <Clock className="w-3 h-3" />
                      {project.timeframe}
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-base text-white group-hover:text-gold-300 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {project.details}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-gold-400">
                    {[...Array(project.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400 group-hover:text-gold-400 flex items-center gap-1 font-medium transition-colors">
                    Inspect <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 sm:px-8 rounded-2xl glass-panel border border-gold-500/30">
            <span className="text-sm text-slate-200">
              Have architectural plans or inspiration photos from Pinterest/Instagram?
            </span>
            <button
              onClick={onOpenConsultation}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-obsidian-950 font-bold text-xs uppercase tracking-wider shadow-gold-glow hover:brightness-110"
            >
              Upload Inspiration & Get Quote
            </button>
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian-950/90 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="relative max-w-3xl w-full glass-panel rounded-3xl overflow-hidden border border-gold-500/50 shadow-luxury-card animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-obsidian-950/80 border border-slate-700 text-slate-300 hover:text-white flex items-center justify-center hover:scale-105 transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-video max-h-[420px] overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-6">
                  <span className="px-3 py-1 rounded-full bg-gold-500 text-obsidian-950 text-xs font-bold uppercase tracking-wider">
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
                    <div className="flex items-center gap-3 text-xs text-gold-400 mt-1 font-medium">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {selectedProject.location}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-slate-300">
                        <Clock className="w-3.5 h-3.5 text-gold-400" />
                        Turnaround: {selectedProject.timeframe}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-gold-400">
                    {[...Array(selectedProject.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold-400" />
                    ))}
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  {selectedProject.details} Crafted specifically to fit the spatial constraints and aesthetic vision of the client using moisture-resistant cores and European soft-closing Blum runners.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      onOpenConsultation();
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 text-obsidian-950 font-bold text-xs uppercase tracking-wider shadow-gold-glow hover:brightness-110"
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
                    className="w-full sm:w-auto text-center px-6 py-3 rounded-xl border border-emerald-500/50 text-emerald-300 hover:bg-emerald-500/10 text-xs font-semibold"
                  >
                    Discuss on WhatsApp
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
