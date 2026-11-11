import React, { useState } from 'react';
import { ShieldCheck, Phone, Mail, MapPin, MessageCircle, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigateTo: (sectionId: string) => void;
  onOpenUpload: (prefilledService?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateTo, onOpenUpload }) => {
  const [activePolicyModal, setActivePolicyModal] = useState<string | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#142C45] text-slate-300 border-t border-slate-800">
      {/* Main Multi-Column Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1 & 2: Brand & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white/10 text-white flex items-center justify-center font-bold text-base border border-white/20">
                <span className="text-[#18A6A0]">T</span>
                <span className="text-[#C9A45C]">L</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                TransLumina Global
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Established foreign language translation solutions provider headquartered in Bengaluru, India. Delivering human-certified translations for embassies, universities, courts, healthcare institutions, and multinational corporate clients worldwide.
            </p>

            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-[#18A6A0]" />
                <span>ISO 17100:2015 & ISO 27001 Data Privacy Standards</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-[#C9A45C]" />
                <a href="tel:+918041237890" className="hover:text-white font-medium">
                  +91 80 4123 7890 / +91 98450 12890
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-[#18A6A0]" />
                <a href="mailto:translations@transluminaglobal.com" className="hover:text-white">
                  translations@transluminaglobal.com
                </a>
              </div>
            </div>

            <div className="pt-3 flex items-center gap-3">
              <a
                href="https://wa.me/919845012890?text=Hello%20TransLumina%2C%20I%20have%20an%20enquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 text-xs font-semibold hover:bg-emerald-600/40 transition-colors inline-flex items-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Desk</span>
              </a>
              <button
                onClick={() => onOpenUpload()}
                className="px-3.5 py-1.5 rounded-lg bg-white/10 text-[#C9A45C] border border-white/20 text-xs font-semibold hover:bg-white/15 transition-colors"
              >
                Upload Document
              </button>
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigateTo('hero')} className="hover:text-white transition-colors cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('about')} className="hover:text-white transition-colors cursor-pointer">
                  About Our Agency
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('services')} className="hover:text-white transition-colors cursor-pointer">
                  All Translation Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('languages')} className="hover:text-white transition-colors cursor-pointer">
                  Languages & Pair Checker
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('official-docs')} className="hover:text-white transition-colors cursor-pointer">
                  Official & Certified Documents
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('process')} className="hover:text-white transition-colors cursor-pointer">
                  6-Stage Translation Process
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('calculator')} className="hover:text-white transition-colors cursor-pointer">
                  Instant Price Calculator
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('faq')} className="hover:text-white transition-colors cursor-pointer">
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateTo('blog')} className="hover:text-white transition-colors cursor-pointer">
                  Blog & Resource Guides
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Translation Disciplines */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Specialized Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onOpenUpload('Academic Translation')} className="hover:text-white transition-colors cursor-pointer">
                  Academic Degree & Marksheets
                </button>
              </li>
              <li>
                <button onClick={() => onOpenUpload('Legal Translation')} className="hover:text-white transition-colors cursor-pointer">
                  Legal Contracts & Court Pleadings
                </button>
              </li>
              <li>
                <button onClick={() => onOpenUpload('Certified Translation')} className="hover:text-white transition-colors cursor-pointer">
                  Official Certified Translations
                </button>
              </li>
              <li>
                <button onClick={() => onOpenUpload('Technical Translation')} className="hover:text-white transition-colors cursor-pointer">
                  Technical Engineering Manuals
                </button>
              </li>
              <li>
                <button onClick={() => onOpenUpload('Medical Translation')} className="hover:text-white transition-colors cursor-pointer">
                  Clinical & Medical Reports
                </button>
              </li>
              <li>
                <button onClick={() => onOpenUpload('Immigration Translation')} className="hover:text-white transition-colors cursor-pointer">
                  Immigration & Consular Dossiers
                </button>
              </li>
              <li>
                <button onClick={() => onOpenUpload('Website Translation')} className="hover:text-white transition-colors cursor-pointer">
                  Software & SaaS Localisation
                </button>
              </li>
              <li>
                <button onClick={() => onOpenUpload('Interpretation')} className="hover:text-white transition-colors cursor-pointer">
                  Conference Interpretation
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Key Languages & Pan-India Service */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Popular Languages
            </h4>
            <div className="flex flex-wrap gap-1.5 text-xs">
              {['German', 'French', 'Spanish', 'Japanese', 'Arabic', 'Russian', 'Chinese', 'Italian', 'Portuguese', 'Dutch', 'Korean', 'Hindi'].map((l) => (
                <button
                  key={l}
                  onClick={() => onOpenUpload(`${l} Translation`)}
                  className="px-2 py-1 rounded bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors text-[11px]"
                >
                  {l}
                </button>
              ))}
            </div>

            <h4 className="text-xs font-bold text-white uppercase tracking-wider pt-3">
              Pan-India Service Hubs
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Serving clients with digital delivery & speed courier in: Bengaluru, Mumbai, New Delhi NCR, Hyderabad, Chennai, Pune, Kolkata, Ahmedabad, and Kochi.
            </p>
          </div>

        </div>

        {/* Legal & Compliance Disclaimer Strip */}
        <div className="mt-12 pt-6 border-t border-slate-800 text-[11px] text-slate-400 space-y-2">
          <p className="leading-relaxed">
            <strong>Regulatory Disclaimer:</strong> TransLumina Global Translation Services India Pvt Ltd provides certified translations executed by qualified linguists with signed certification declarations. We do not represent government embassies, high commissions, courts, or visa authorities. Document legalizations, apostilles (MEA), notarizations, and consular attestations are distinct official procedures governed by specific destination authorities. Acceptance of any translated record is subject to the receiving institution’s sole jurisdiction.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Policies */}
        <div className="mt-6 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} TransLumina Global Translation Services India Pvt Ltd. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <button 
              onClick={() => setActivePolicyModal('privacy')}
              className="hover:text-white underline cursor-pointer"
            >
              Privacy & Data Protection Policy
            </button>
            <span>·</span>
            <button 
              onClick={() => setActivePolicyModal('terms')}
              className="hover:text-white underline cursor-pointer"
            >
              Terms of Service
            </button>
            <span>·</span>
            <button 
              onClick={() => setActivePolicyModal('nda')}
              className="hover:text-white underline cursor-pointer"
            >
              Standard NDA Policy
            </button>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="hover:text-white flex items-center gap-1 cursor-pointer pl-2"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#C9A45C]" />
            </button>
          </div>
        </div>

      </div>

      {/* Policy Reader Modal */}
      {activePolicyModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white text-slate-900 rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <h3 className="text-lg font-bold text-[#142C45]">
                {activePolicyModal === 'privacy' && 'Privacy & Document Data Protection Policy'}
                {activePolicyModal === 'terms' && 'Terms of Translation Services'}
                {activePolicyModal === 'nda' && 'Confidentiality & Non-Disclosure Charter'}
              </h3>
              <button
                onClick={() => setActivePolicyModal(null)}
                className="text-slate-400 hover:text-slate-700 text-lg font-bold"
              >
                ✕
              </button>
            </div>
            <div className="py-4 text-xs sm:text-sm text-slate-600 space-y-3 leading-relaxed">
              {activePolicyModal === 'privacy' && (
                <>
                  <p>
                    TransLumina Global treats all client documents—including academic records, legal affidavits, medical files, and financial statements—with strict confidentiality.
                  </p>
                  <p>
                    All files uploaded to our servers are encrypted using TLS 1.3 in transit and stored in protected, access-controlled repositories. Files are retained only for the duration required for translation, verification, and customer delivery, after which they are subject to automated data purge schedules unless long-term archiving is requested in writing.
                  </p>
                </>
              )}
              {activePolicyModal === 'terms' && (
                <>
                  <p>
                    Our translation quotations are calculated based on word count, source and target language pairs, subject-matter complexity, and agreed delivery schedules.
                  </p>
                  <p>
                    Translations reflect the source text faithfully. Clients are responsible for ensuring the legality and legibility of the source documents provided. Any stylistic or terminology adjustments requested within 14 days of delivery are addressed promptly without charge.
                  </p>
                </>
              )}
              {activePolicyModal === 'nda' && (
                <>
                  <p>
                    Our linguists, proofreaders, and project managers execute binding non-disclosure agreements prior to accessing client documents.
                  </p>
                  <p>
                    For corporate and high-stakes legal projects, we provide signed bilateral NDA documentation upon request prior to document transfer.
                  </p>
                </>
              )}
            </div>
            <div className="pt-3 border-t border-slate-200 text-right">
              <button
                onClick={() => setActivePolicyModal(null)}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#142C45] rounded-lg"
              >
                Close Policy
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
