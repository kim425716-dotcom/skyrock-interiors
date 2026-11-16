import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function FloatingActions() {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent(
    "Hello Skyrock Interiors Limited. I am browsing your website and would like to speak to a senior consultant."
  )}`;

  return (
    <div className="fixed bottom-4 right-3 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5 pointer-events-auto">
      
      {/* Quick Phone Call Pill */}
      <a
        href={`tel:${COMPANY_INFO.phones[0].international}`}
        className="flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-[#07090D]/95 border border-[#D4AF37]/50 text-[#D4AF37] shadow-xl hover:scale-105 transition-all text-xs font-semibold backdrop-blur-md group"
        title="Call Primary Hotline"
      >
        <span className="w-2 h-2 rounded-full bg-[#D4AF37] group-hover:animate-ping" />
        <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
        <span className="hidden sm:inline font-sans">{COMPANY_INFO.phones[0].display}</span>
        <span className="sm:hidden font-cinzel text-[10px] tracking-wider uppercase">Call</span>
      </a>

      {/* Floating WhatsApp Action Button with Notification Pulse */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-2.5 sm:py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold text-xs uppercase tracking-wider shadow-2xl hover:brightness-110 hover:scale-105 active:scale-95 transition-all duration-300 min-h-[44px]"
        title="Chat on WhatsApp with Skyrock Interiors"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-40 group-hover:opacity-75 blur-sm animate-ping pointer-events-none" />
        
        <div className="relative flex items-center gap-1.5 sm:gap-2">
          <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 fill-white shrink-0" />
          <span className="font-sans font-bold tracking-normal normal-case text-xs sm:text-sm">
            WhatsApp
          </span>
        </div>
      </a>
    </div>
  );
}
