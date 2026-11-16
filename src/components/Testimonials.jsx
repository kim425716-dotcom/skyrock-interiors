import React, { useState } from 'react';
import { Star, MessageSquareQuote, ChevronDown, CheckCircle2, HelpCircle } from 'lucide-react';
import { TESTIMONIALS, FAQS } from '../data/companyData';

export default function Testimonials() {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section id="reviews" className="py-24 bg-obsidian-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Testimonials Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Client Praise & Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white">
            Trusted By Discerning <br />
            <span className="text-gold-gradient italic">Homeowners Across Kenya</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base font-light">
            Read real reviews from homeowners who entrusted their kitchens, wardrobes, and living room transformations to Skyrock Interiors Limited.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="glass-panel p-7 rounded-3xl border border-slate-800 hover:border-gold-500/40 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                {/* Star rating */}
                <div className="flex items-center gap-1 text-gold-400 mb-4">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-400" />
                  ))}
                  <span className="text-xs text-slate-400 ml-2 font-medium">5.0 Verified</span>
                </div>

                {/* Comment */}
                <p className="text-sm text-slate-300 leading-relaxed italic font-light">
                  "{review.comment}"
                </p>
              </div>

              {/* Author & Project Details */}
              <div className="mt-6 pt-5 border-t border-slate-800/80">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-white text-base">
                      {review.name}
                    </h4>
                    <p className="text-xs text-gold-400 font-medium">
                      {review.location}
                    </p>
                  </div>
                  <span className="text-[10px] text-slate-500">{review.date}</span>
                </div>
                <div className="mt-2 text-[11px] text-slate-400 bg-obsidian-950/60 px-3 py-1.5 rounded-lg border border-slate-800 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-gold-400 shrink-0" />
                  <span className="truncate">{review.project}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto pt-8 border-t border-slate-800/80">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-gold-400 uppercase tracking-widest mb-2">
              <HelpCircle className="w-4 h-4" />
              <span>Got Questions?</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="glass-panel rounded-2xl border border-slate-800 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 text-white hover:text-gold-300 transition-colors"
                  >
                    <span className="font-serif font-semibold text-base sm:text-lg">
                      {faq.q}
                    </span>
                    <div className={`w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 border-gold-500 text-gold-400' : 'text-slate-400'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-sm text-slate-300 leading-relaxed font-light border-t border-slate-800/50 pt-3 animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
