import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { COMPANY_INFO } from '../data/companyData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    projectType: 'Custom Kitchen',
    location: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch (err) {
      // safe fallback
    }

    // Prepare WhatsApp message
    const msg = `Hello Skyrock Interiors Limited! 🛋️%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Project:* ${formData.projectType}%0A*Location:* ${formData.location}%0A*Details:* ${formData.message}`;
    const waUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber.replace('+', '')}?text=${msg}`;

    // Open WhatsApp in new tab after brief delay
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-obsidian-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect With Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-white">
            Let's Discuss Your <br />
            <span className="text-gold-gradient italic">Next Interior Project</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base font-light">
            Whether you need a full turnkey residential finishing, custom kitchen, or TV feature wall, our lead master carpenters and designers are ready to advise you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
              <h3 className="text-xl font-serif font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-gold-400" />
                Skyrock Interiors Limited
              </h3>

              {/* Phones */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold text-gold-300 uppercase tracking-wider block">
                  Direct Phone Lines:
                </span>
                {COMPANY_INFO.phones.map((phone, i) => (
                  <a
                    key={i}
                    href={`tel:${phone.international}`}
                    className="flex items-center gap-3 p-3 rounded-xl bg-obsidian-850 hover:bg-gold-500/10 border border-slate-800 hover:border-gold-500/40 text-slate-200 transition-all group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-gold-500/20 text-gold-400 flex items-center justify-center shrink-0 group-hover:bg-gold-500 group-hover:text-obsidian-950 transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">{phone.display}</div>
                      <div className="text-[11px] text-slate-400">{phone.label}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* WhatsApp direct chat button */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent(
                    "Hello Skyrock Interiors Limited! I would like to enquire about your custom kitchens, wardrobes, and finishing services."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 p-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:brightness-110 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Start WhatsApp Conversation</span>
                </a>
              </div>

              {/* Location & Hours */}
              <div className="space-y-4 pt-4 border-t border-slate-800/80 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Workshop & Design Studio:</span>
                    <span className="text-slate-400">{COMPANY_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Working Hours:</span>
                    <span className="text-slate-400">{COMPANY_INFO.hours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Official Email:</span>
                    <span className="text-slate-400">{COMPANY_INFO.email}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Areas Pill List */}
            <div className="glass-panel p-5 rounded-2xl border border-slate-800">
              <span className="text-xs font-bold text-gold-300 uppercase tracking-wider block mb-2">
                Service Coverage Areas:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {COMPANY_INFO.serviceAreas.map((area, i) => (
                  <span
                    key={i}
                    className="text-[11px] px-2.5 py-1 rounded-md bg-obsidian-850 text-slate-300 border border-slate-700/60"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Booking Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-gold-500/30 shadow-luxury-card relative">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white">
                    Thank You, {formData.name}!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Your inquiry has been received. We are automatically opening WhatsApp so our senior joinery consultant can respond immediately.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full bg-slate-800 text-xs font-semibold text-slate-300 hover:text-white"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                      Request A Site Consultation
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Fill in the details below. Our team responds within 2-4 hours.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. David Mwangi"
                        className="w-full px-4 py-3 rounded-xl bg-obsidian-850 border border-slate-700 text-white placeholder-slate-500 text-sm focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 0712 345 678"
                        className="w-full px-4 py-3 rounded-xl bg-obsidian-850 border border-slate-700 text-white placeholder-slate-500 text-sm focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Project Scope *
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-obsidian-850 border border-slate-700 text-white text-sm focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-all"
                      >
                        <option value="Custom Kitchen">Custom Luxury Kitchen</option>
                        <option value="Bespoke Wardrobe">Bespoke Walk-in Wardrobe</option>
                        <option value="TV Feature Wall">Designer TV Wall & Floating Console</option>
                        <option value="Gypsum Ceiling & Lighting">Gypsum Ceiling & Lighting</option>
                        <option value="Complete House Finishing">Complete House Finishing & Facade</option>
                        <option value="Office Fit-out">Commercial / Office Fit-out</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Property Location (Estate / Town) *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g. Runda, Karen, Ruaka, Syokimau"
                        className="w-full px-4 py-3 rounded-xl bg-obsidian-850 border border-slate-700 text-white placeholder-slate-500 text-sm focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Tell Us About Your Vision & Timeline
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share dimensions, preferred colors (e.g. matte black, gold, oak), or when you'd like site measurements taken..."
                      className="w-full px-4 py-3 rounded-xl bg-obsidian-850 border border-slate-700 text-white placeholder-slate-500 text-sm focus:border-gold-500 focus:outline-none focus:ring-1 focus:ring-gold-500 transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2.5 py-4 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-obsidian-950 font-bold text-xs uppercase tracking-wider shadow-gold-glow hover:shadow-gold-glow-lg hover:brightness-110 active:scale-95 transition-all"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry & Open WhatsApp</span>
                    </button>
                    <p className="text-[11px] text-center text-slate-400 mt-2.5">
                      We respect your privacy. No spam. You will speak directly with our joinery project lead.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
