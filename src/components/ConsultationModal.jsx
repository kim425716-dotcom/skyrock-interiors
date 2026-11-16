import React, { useState, useEffect } from 'react';
import { X, Calendar, Phone, MapPin, Sparkles, CheckCircle2, Send, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { COMPANY_INFO } from '../data/companyData';

export default function ConsultationModal({ isOpen, onClose, initialService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: initialService || 'Custom Kitchens',
    location: '',
    preferredDate: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {}

    const text = `Hello Skyrock Interiors Limited! 🛋️✨%0A%0AI would like to book a *Free Site Consultation / Measurement*:%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Project Scope:* ${formData.service}%0A*Estate / Location:* ${formData.location}%0A*Preferred Date:* ${formData.preferredDate || 'Earliest available'}%0A*Notes:* ${formData.notes || 'None'}`;
    const waUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber.replace('+', '')}?text=${text}`;

    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 1200);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#07090D]/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative max-w-lg w-full classical-frame rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-[#D4AF37]/50 shadow-[0_0_50px_rgba(0,0,0,0.9)] animate-in zoom-in-95 duration-200 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#0C1018] border border-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-all min-h-[36px]"
          aria-label="Close Modal"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {submitted ? (
          <div className="py-8 sm:py-10 text-center space-y-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
              Consultation Scheduled!
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm mx-auto font-light">
              Thank you, {formData.name}. We are transferring you to our WhatsApp lead coordinator right now to finalize the exact time slot for your site visit.
            </p>
            <div className="pt-3">
              <button
                onClick={onClose}
                className="w-full py-3.5 rounded-full bg-[#D4AF37] text-[#07090D] font-cinzel font-bold text-xs uppercase tracking-wider shadow-lg min-h-[44px]"
              >
                Close & Return To Site
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[#D4AF37] text-[10px] sm:text-xs font-cinzel font-semibold uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Zero Commitment Assessment</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-tight">
                Book Free Site Visit & Quote
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 font-light">
                Our site engineer will visit your property with physical material samples, laser measurement tools, and design catalogs.
              </p>
            </div>

            <div className="space-y-2.5 sm:space-y-3 pt-1">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-[#0E131C] border border-slate-700 text-white placeholder-slate-500 text-base sm:text-sm focus:border-[#D4AF37] focus:outline-none min-h-[44px]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 0745 918 724"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-[#0E131C] border border-slate-700 text-white placeholder-slate-500 text-base sm:text-sm focus:border-[#D4AF37] focus:outline-none min-h-[44px]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Project Service *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3 py-2.5 sm:py-3 rounded-xl bg-[#0E131C] border border-slate-700 text-white text-base sm:text-sm focus:border-[#D4AF37] focus:outline-none min-h-[44px]"
                  >
                    <option value="Custom Kitchens">Custom Kitchen</option>
                    <option value="Bespoke Wardrobes">Bespoke Wardrobe</option>
                    <option value="TV Feature Walls">TV Media Wall</option>
                    <option value="Gypsum Ceilings">Gypsum Ceilings & Lighting</option>
                    <option value="Complete House Finishing">Complete House Finishing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Property Location *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Runda, Karen, Ruaka"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-[#0E131C] border border-slate-700 text-white placeholder-slate-500 text-base sm:text-sm focus:border-[#D4AF37] focus:outline-none min-h-[44px]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Preferred Date (Optional)
                </label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-[#0E131C] border border-slate-700 text-white text-base sm:text-sm focus:border-[#D4AF37] focus:outline-none min-h-[44px]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Specific Requirements or Notes
                </label>
                <textarea
                  rows={2}
                  placeholder="Any particular design styles, color preferences or timeline..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 sm:py-2.5 rounded-xl bg-[#0E131C] border border-slate-700 text-white placeholder-slate-500 text-base sm:text-sm focus:border-[#D4AF37] focus:outline-none resize-none"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#E5C378] to-[#AA8214] text-[#07090D] font-cinzel font-bold text-xs uppercase tracking-[0.16em] sm:tracking-[0.2em] shadow-[0_0_20px_rgba(212,175,55,0.35)] hover:brightness-110 active:scale-95 transition-all min-h-[46px]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm Booking on WhatsApp</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
