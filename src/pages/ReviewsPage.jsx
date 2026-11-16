import React, { useState } from 'react';
import { Star, MessageSquareQuote, ChevronDown, CheckCircle2, HelpCircle } from 'lucide-react';
import { TESTIMONIALS, FAQS } from '../data/companyData';

export default function ReviewsPage({ onOpenConsultation }) {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
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
            Reputation & Trust
          </span>
          <h1 className="text-2xl xs:text-3xl sm:text-5xl font-serif font-bold text-white max-w-3xl mx-auto leading-tight">
            Trusted By Discerning <br />
            <span className="text-gold-gradient italic font-serif">Homeowners Across Kenya</span>
          </h1>
          <p className="mt-3 sm:mt-4 text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto font-light leading-relaxed px-2">
            Read authentic reviews from homeowners who entrusted their kitchens, wardrobes, and living room transformations to Skyrock Interiors Limited.
          </p>
        </div>
      </section>

      {/* Main Reviews & FAQs */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Rating Trust Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6">
          <div className="classical-frame p-5 sm:p-6 rounded-2xl text-center">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-gold-gradient">5.0 / 5.0</div>
            <div className="text-xs text-slate-300 mt-1 font-cinzel">Average Client Rating</div>
            <div className="flex items-center justify-center gap-1 text-[#D4AF37] mt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#D4AF37]" />
              ))}
            </div>
          </div>

          <div className="classical-frame p-5 sm:p-6 rounded-2xl text-center">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-gold-gradient">350+</div>
            <div className="text-xs text-slate-300 mt-1 font-cinzel">Handover Projects</div>
            <div className="text-[11px] text-slate-400 mt-1 font-light">Villas, apartments & offices</div>
          </div>

          <div className="classical-frame p-5 sm:p-6 rounded-2xl text-center">
            <div className="text-2xl sm:text-3xl font-serif font-bold text-gold-gradient">100%</div>
            <div className="text-xs text-slate-300 mt-1 font-cinzel">Written 5-Year Guarantee</div>
            <div className="text-[11px] text-slate-400 mt-1 font-light">Comprehensive hardware warranty</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="classical-frame p-6 sm:p-7 rounded-2xl sm:rounded-3xl hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center gap-1 text-[#D4AF37] mb-3 sm:mb-4">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#D4AF37]" />
                  ))}
                  <span className="text-xs text-slate-400 ml-2 font-medium font-cinzel">5.0 Verified</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic font-light">
                  "{review.comment}"
                </p>
              </div>

              <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-slate-800/80">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-white text-sm sm:text-base">
                      {review.name}
                    </h4>
                    <p className="text-xs text-[#D4AF37] font-medium font-cinzel">
                      {review.location}
                    </p>
                  </div>
                  <span className="text-[10px] text-slate-500">{review.date}</span>
                </div>
                <div className="mt-2 text-[10px] sm:text-[11px] text-slate-400 bg-[#07090D]/60 px-3 py-1.5 rounded-lg border border-slate-800 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-[#D4AF37] shrink-0" />
                  <span className="truncate">{review.project}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto pt-6 sm:pt-8 border-t border-slate-800/80">
          <div className="text-center mb-8 sm:mb-10 space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-cinzel font-semibold text-[#D4AF37] uppercase tracking-widest mb-1">
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
                  className="classical-frame rounded-xl sm:rounded-2xl border border-slate-800 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 text-white hover:text-[#FFF2CF] transition-colors min-h-[52px]"
                  >
                    <span className="font-serif font-semibold text-sm sm:text-base lg:text-lg pr-2 leading-snug">
                      {faq.q}
                    </span>
                    <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-slate-700 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 border-[#D4AF37] text-[#D4AF37]' : 'text-slate-400'
                    }`}>
                      <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed font-light border-t border-slate-800/50 pt-3 animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-4 sm:pt-8">
          <button
            onClick={() => onOpenConsultation('Inquiry from Reviews Page')}
            className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B89225] text-[#07090D] font-cinzel font-bold text-xs uppercase tracking-[0.18em] shadow-[0_0_20px_rgba(212,175,55,0.35)] hover:brightness-110 min-h-[44px]"
          >
            Start Your Project With Skyrock
          </button>
        </div>
      </section>
    </div>
  );
}
