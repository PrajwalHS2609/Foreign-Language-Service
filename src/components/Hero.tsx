import React, { useState } from 'react';
import { ArrowRight, UploadCloud, CheckCircle2, ShieldCheck, Lock, Sparkles, FileText, Send } from 'lucide-react';
import heroImage from '../assets/images/hero_translator_studio_1794402416010.jpg';

interface HeroProps {
  onOpenUpload: (prefilledService?: string) => void;
  onNavigateTo: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenUpload, onNavigateTo }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    sourceLang: 'German',
    targetLang: 'English',
    docType: 'Academic Degree & Marksheets'
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      alert('Please fill in your name, phone number, and email.');
      return;
    }
    setFormSubmitted(true);
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-[#F3F5F7] pt-10 pb-16 lg:py-20 border-b border-slate-200">
      {/* Discrete Multilingual Texture in the background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] select-none flex flex-wrap gap-12 p-8 font-serif-editorial text-4xl leading-relaxed text-[#142C45] overflow-hidden">
        <span>Übersetzung</span>
        <span>Traduction</span>
        <span>Traducción</span>
        <span>翻訳</span>
        <span>الترجمة</span>
        <span>अनुवाद</span>
        <span>번역</span>
        <span>Перевод</span>
        <span>Traduzione</span>
        <span>Vertaling</span>
        <span>மொழிபெயர்ப்பு</span>
        <span>ಅನುವಾದ</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & Editorial Copy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Subtle editorial kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#142C45] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#18A6A0]" />
              <span>Professional Foreign Language Translation Services in India</span>
              <span className="text-slate-400">·</span>
              <span className="text-[#2855A6]">50+ World Languages</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-[#142C45] tracking-tight leading-[1.15] text-balance">
              Every Language.{' '}
              <span className="text-[#2855A6]">Every Document.</span>{' '}
              <span className="font-serif-editorial font-normal italic text-[#C9A45C]">Every Detail</span> Matters.
            </h1>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl">
              Bridge language barriers with accurate, reliable, and confidential translation solutions for personal, academic, legal, and business requirements. Certified translations prepared by experienced native linguists for international submissions.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onNavigateTo('calculator')}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#142C45] hover:bg-[#1a3858] rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <span>Get a Free Translation Quote</span>
                <ArrowRight className="w-4 h-4 text-[#C9A45C]" />
              </button>

              <button
                onClick={() => onOpenUpload()}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-[#142C45] bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-sm hover:border-[#18A6A0] transition-all cursor-pointer"
              >
                <UploadCloud className="w-4 h-4 text-[#18A6A0]" />
                <span>Upload Your Document</span>
              </button>
            </div>

            {/* Trust Markers */}
            <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-600">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#18A6A0]" />
                <span>100% Human Certified Linguists</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-[#142C45]" />
                <span>Strict Non-Disclosure & ISO 27001</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#C9A45C]" />
                <span>Accepted by Global Universities & Consulates</span>
              </div>
            </div>

            {/* Hero Visual Card (Integrated into Left Column on Mobile, or Underneath) */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 group">
              <img 
                src={heroImage} 
                alt="Senior certified translator reviewing multilingual legal and academic documents in modern office" 
                className="w-full h-56 sm:h-72 object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#142C45]/85 via-[#142C45]/30 to-transparent flex items-end p-5">
                <div className="text-white text-xs sm:text-sm">
                  <p className="font-semibold text-[#C9A45C]">Headquartered in Bengaluru, Serving India & Global Clients</p>
                  <p className="text-slate-200 text-xs">Official Translations for German, French, Spanish, Japanese, Arabic, Russian & 45+ Tongues</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Conversion Quick Enquiry Form */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-7 relative">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
                <div>
                  <h3 className="text-lg font-bold text-[#142C45]">Instant Translation Enquiry</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Quick assessment & pricing within 30 minutes</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#F3F5F7] flex items-center justify-center text-[#2855A6]">
                  <FileText className="w-5 h-5" />
                </div>
              </div>

              {formSubmitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-[#142C45]">Enquiry Received!</h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-900">{formData.name}</strong>. Our senior linguistic project manager will review your request ({formData.sourceLang} → {formData.targetLang}) and reach out to <strong className="text-slate-900">{formData.phone}</strong> shortly.
                  </p>
                  <div className="pt-2 flex flex-col gap-2">
                    <button
                      onClick={() => onOpenUpload()}
                      className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-[#142C45] rounded-xl hover:bg-[#1a3858] transition-colors"
                    >
                      Attach Document Scans Now
                    </button>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs text-slate-500 hover:text-slate-800 underline"
                    >
                      Submit Another Query
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Arjun Sharma / Dr. Meera Patel"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18A6A0] focus:bg-white transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98450 12890"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18A6A0] focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18A6A0] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Source Language
                      </label>
                      <select
                        value={formData.sourceLang}
                        onChange={(e) => setFormData({ ...formData, sourceLang: e.target.value })}
                        className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18A6A0] focus:bg-white transition-all"
                      >
                        <option value="German">German (Deutsch)</option>
                        <option value="French">French (Français)</option>
                        <option value="Spanish">Spanish (Español)</option>
                        <option value="Japanese">Japanese (日本語)</option>
                        <option value="Chinese">Chinese (中文)</option>
                        <option value="Arabic">Arabic (العربية)</option>
                        <option value="Russian">Russian (Русский)</option>
                        <option value="Italian">Italian (Italiano)</option>
                        <option value="Portuguese">Portuguese (Português)</option>
                        <option value="Dutch">Dutch (Nederlands)</option>
                        <option value="English">English</option>
                        <option value="Hindi">Hindi (हिन्दी)</option>
                        <option value="Kannada">Kannada (ಕನ್ನಡ)</option>
                        <option value="Tamil">Tamil (தமிழ்)</option>
                        <option value="Telugu">Telugu (తెలుగు)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Target Language
                      </label>
                      <select
                        value={formData.targetLang}
                        onChange={(e) => setFormData({ ...formData, targetLang: e.target.value })}
                        className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18A6A0] focus:bg-white transition-all"
                      >
                        <option value="English">English (Global/US/UK)</option>
                        <option value="German">German (Deutsch)</option>
                        <option value="French">French (Français)</option>
                        <option value="Spanish">Spanish (Español)</option>
                        <option value="Japanese">Japanese (日本語)</option>
                        <option value="Arabic">Arabic (العربية)</option>
                        <option value="Russian">Russian (Русский)</option>
                        <option value="Italian">Italian (Italiano)</option>
                        <option value="Hindi">Hindi (हिन्दी)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Document Type
                    </label>
                    <select
                      value={formData.docType}
                      onChange={(e) => setFormData({ ...formData, docType: e.target.value })}
                      className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18A6A0] focus:bg-white transition-all"
                    >
                      <option value="Academic Degree & Marksheets">Academic Degree & Marksheets (Uni-Assist/WES)</option>
                      <option value="Legal Agreements & Contracts">Legal Agreements & Contracts / Court Documents</option>
                      <option value="Birth / Marriage / PCC Certificates">Birth / Marriage / PCC Certificates (Visa & PR)</option>
                      <option value="Medical & Clinical Reports">Medical & Clinical Reports / Pharma Documentation</option>
                      <option value="Technical Manuals & Engineering Specs">Technical Manuals & Engineering Specifications</option>
                      <option value="Corporate & Financial Statements">Corporate & Financial Statements / Bids</option>
                      <option value="Website & Software UI Strings">Website & Software UI Strings</option>
                    </select>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 px-4 text-sm font-bold text-white bg-[#142C45] hover:bg-[#1a3858] rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4 text-[#C9A45C]" />
                      <span>Submit Translation Enquiry</span>
                    </button>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                    <span className="flex items-center gap-1">
                      <Lock className="w-3 h-3 text-[#18A6A0]" />
                      <span>100% Confidential & Secure</span>
                    </span>
                    <span>No Obligation Quote</span>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
