import React from 'react';
import { ArrowRight, UploadCloud, Phone, MessageCircle, ShieldCheck } from 'lucide-react';

interface ConversionCtaProps {
  onOpenUpload: (prefilledService?: string) => void;
  onNavigateTo: (sectionId: string) => void;
}

export const ConversionCta: React.FC<ConversionCtaProps> = ({ onOpenUpload, onNavigateTo }) => {
  return (
    <section className="relative overflow-hidden bg-[#142C45] text-white py-20 lg:py-24 border-b border-slate-800">
      {/* Decorative typographic backdrop */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] select-none flex flex-wrap gap-16 p-8 font-serif-editorial text-5xl leading-none text-white overflow-hidden">
        <span>Précision</span>
        <span>Genauigkeit</span>
        <span>Accuratezza</span>
        <span>точность</span>
        <span>دقة</span>
        <span>正確さ</span>
        <span>ನಿಖರತೆ</span>
        <span>सटीकता</span>
      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-8 text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#C9A45C] border border-white/15">
          <ShieldCheck className="w-4 h-4 text-[#18A6A0]" />
          <span>Trusted by Over 45,000+ Indian Applicants & Global Brands</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white text-balance">
          Your Message Deserves to Be Understood in{' '}
          <span className="font-serif-editorial italic font-normal text-[#C9A45C]">Every Language.</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Share your translation requirements with our team and receive personalised assistance for your documents, overseas admissions, cross-border contracts, or international expansion.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={() => onOpenUpload()}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-bold text-[#142C45] bg-[#C9A45C] hover:bg-[#d6b165] rounded-xl shadow-lg transition-all cursor-pointer"
          >
            <UploadCloud className="w-4 h-4 text-[#142C45]" />
            <span>Upload Your Document</span>
          </button>

          <button
            onClick={() => onNavigateTo('calculator')}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all cursor-pointer"
          >
            <span>Get a Free Quote</span>
            <ArrowRight className="w-4 h-4 text-[#C9A45C]" />
          </button>

          <a
            href="https://wa.me/919845012890?text=Hello%20TransLumina%20Global%2C%20I%20have%20an%20urgent%20translation%20enquiry."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-semibold text-emerald-400 bg-white/5 hover:bg-white/15 border border-emerald-500/30 rounded-xl transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Our Team</span>
          </a>
        </div>

        <div className="pt-6 border-t border-slate-700/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <span>Same-Day & 24h Express Delivery Available</span>
          <span>·</span>
          <span>100% Confidential Under Non-Disclosure</span>
          <span>·</span>
          <span>ISO 17100 Aligned Quality</span>
        </div>
      </div>
    </section>
  );
};
