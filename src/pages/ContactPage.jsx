import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, Sparkles, Navigation, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { COMPANY_INFO } from '../data/companyData';

export default function ContactPage() {
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
        particleCount: 90,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (err) {}

    const msg = `Hello Skyrock Interiors Limited! 🛋️%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Project:* ${formData.projectType}%0A*Location:* ${formData.location}%0A*Details:* ${formData.message}`;
    const waUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber.replace('+', '')}?text=${msg}`;

    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 1200);
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "Enterprise Road Industrial Area Nairobi Kenya"
  )}`;

  return (
    <div className="pt-24 sm:pt-32 pb-20 sm:pb-28 space-y-12 sm:space-y-16">
      
      {/* Page Header */}
      <section className="relative py-12 sm:py-16 bg-[#090C12] border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="classical-divider w-36 sm:w-48 mx-auto text-[#D4AF37] opacity-70 text-xs">
            <span>◆</span>
          </div>
          <span className="font-cinzel text-[10px] sm:text-xs font-bold text-[#D4AF37] tracking-[0.25em] sm:tracking-[0.3em] uppercase block">
            Direct Inquiries & Site Bookings
          </span>
          <h1 className="text-2xl xs:text-3xl sm:text-5xl font-serif font-bold text-white max-w-3xl mx-auto leading-tight">
            Connect With Our <br />
            <span className="text-gold-gradient italic font-serif">Senior Joinery Engineers</span>
          </h1>
          <p className="mt-3 sm:mt-4 text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto font-light leading-relaxed px-2">
            Call our hotlines, message on WhatsApp, or send an inquiry below. We visit properties across Nairobi and throughout Kenya for site assessments.
          </p>
        </div>
      </section>

      {/* Main Contact Body */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-start">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <div className="classical-frame p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-800 space-y-5 sm:space-y-6">
              <h3 className="text-lg sm:text-xl font-serif font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37]" />
                Skyrock Interiors Limited
              </h3>

              {/* Direct Call Cards */}
              <div className="space-y-2.5 sm:space-y-3 pt-1">
                <span className="text-xs font-cinzel font-bold text-[#D4AF37] uppercase tracking-[0.16em] block">
                  Primary Hotline Numbers:
                </span>
                {COMPANY_INFO.phones.map((phone, i) => (
                  <a
                    key={i}
                    href={`tel:${phone.international}`}
                    className="flex items-center gap-3 p-3 sm:p-3.5 rounded-xl bg-[#0E131C] hover:bg-[#D4AF37]/10 border border-slate-800 hover:border-[#D4AF37]/40 text-slate-200 transition-all group min-h-[50px]"
                  >
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37] group-hover:text-[#07090D] transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-white">{phone.display}</div>
                      <div className="text-[10px] text-slate-400 font-light">{phone.label}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* WhatsApp Button */}
              <div className="pt-1">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent(
                    "Hello Skyrock Interiors Limited! I would like to schedule a site consultation for my residence."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 p-3.5 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:brightness-110 transition-all min-h-[44px]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Start WhatsApp Conversation</span>
                </a>
              </div>

              {/* Details */}
              <div className="space-y-3.5 pt-4 border-t border-slate-800 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Workshop & Joinery Studio:</span>
                    <span className="text-slate-400 font-light">{COMPANY_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Operating Hours:</span>
                    <span className="text-slate-400 font-light">{COMPANY_INFO.hours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Official Email:</span>
                    <span className="text-slate-400 font-light">{COMPANY_INFO.email}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Coverage Areas */}
            <div className="classical-frame p-4 sm:p-5 rounded-2xl border border-slate-800">
              <span className="text-xs font-cinzel font-bold text-[#D4AF37] uppercase tracking-[0.16em] block mb-2">
                Service Delivery Coverage:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {COMPANY_INFO.serviceAreas.map((area, i) => (
                  <span
                    key={i}
                    className="text-[10px] sm:text-[11px] px-2.5 py-1 rounded-md bg-[#0E131C] text-slate-300 border border-slate-700/60"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="classical-frame p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-[#D4AF37]/30 shadow-luxury-card">
              {submitted ? (
                <div className="py-10 sm:py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                    Thank You, {formData.name}!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed font-light">
                    Your inquiry has been received. We are automatically opening WhatsApp so our senior joinery consultant can respond immediately.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-3 px-6 py-2.5 rounded-full bg-slate-800 text-xs font-semibold text-slate-300 hover:text-white"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                      Request A Site Consultation
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 font-light">
                      Fill in the details below. Our design engineers respond within 2-4 hours.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. David Mwangi"
                        className="w-full px-3.5 sm:px-4 py-3 rounded-xl bg-[#0E131C] border border-slate-700 text-white placeholder-slate-500 text-base sm:text-sm focus:border-[#D4AF37] focus:outline-none min-h-[46px]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 0745 918 724"
                        className="w-full px-3.5 sm:px-4 py-3 rounded-xl bg-[#0E131C] border border-slate-700 text-white placeholder-slate-500 text-base sm:text-sm focus:border-[#D4AF37] focus:outline-none min-h-[46px]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Project Scope *
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-3 sm:px-4 py-3 rounded-xl bg-[#0E131C] border border-slate-700 text-white text-base sm:text-sm focus:border-[#D4AF37] focus:outline-none min-h-[46px]"
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
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Property Location (Estate / Town) *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g. Runda, Karen, Ruaka, Syokimau"
                        className="w-full px-3.5 sm:px-4 py-3 rounded-xl bg-[#0E131C] border border-slate-700 text-white placeholder-slate-500 text-base sm:text-sm focus:border-[#D4AF37] focus:outline-none min-h-[46px]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Tell Us About Your Vision & Timeline
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share dimensions, preferred colors (e.g. matte black, gold, oak), or when you'd like site measurements taken..."
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#0E131C] border border-slate-700 text-white placeholder-slate-500 text-base sm:text-sm focus:border-[#D4AF37] focus:outline-none resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#E5C378] to-[#AA8214] text-[#07090D] font-cinzel font-bold text-xs uppercase tracking-[0.16em] sm:tracking-[0.2em] shadow-[0_0_20px_rgba(212,175,55,0.35)] hover:brightness-110 active:scale-95 transition-all min-h-[46px]"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry & Open WhatsApp</span>
                    </button>
                    <p className="text-[10px] sm:text-[11px] text-center text-slate-400 mt-2 font-light">
                      No spam. You will speak directly with our joinery project lead.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Interactive Location & Workshop Map Card */}
        <div className="classical-frame p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-800 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-cinzel font-bold text-[#D4AF37] uppercase tracking-[0.16em] block mb-0.5">
                Nairobi Joinery Studio
              </span>
              <h4 className="text-lg sm:text-xl font-serif font-bold text-white">
                Visit Our Workshop & Material Showroom
              </h4>
              <p className="text-xs text-slate-300 mt-0.5 font-light">
                Located near Enterprise Road & Mombasa Road Junction, Industrial Area, Nairobi.
              </p>
            </div>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#0E131C] border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37]/10 text-xs font-cinzel font-bold uppercase tracking-wider transition-all shrink-0 min-h-[40px]"
            >
              <Navigation className="w-4 h-4 text-[#D4AF37]" />
              <span>Get Directions on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Interactive Map Embed */}
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/3] xs:aspect-[16/9] sm:aspect-[16/7] border border-slate-800 shadow-xl bg-[#090C12]">
            <iframe
              title="Skyrock Interiors Workshop Nairobi"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.158145719914!2d36.8378875!3d-1.3079975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f111812fa92c7%3A0x6b07c919a3fae89c!2sEnterprise%20Rd%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
              className="w-full h-full border-0 grayscale invert contrast-125 opacity-90"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 p-2.5 sm:p-3.5 rounded-xl bg-[#07090D]/90 backdrop-blur-md border border-[#D4AF37]/40 text-xs text-white max-w-xs pointer-events-none">
              <div className="font-bold text-[#D4AF37] flex items-center gap-1.5 font-cinzel">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                Skyrock Interiors Limited
              </div>
              <div className="text-[10px] sm:text-[11px] text-slate-300 mt-1 font-light">
                Enterprise Rd / Mombasa Rd, Nairobi, Kenya
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
