import React, { useState } from 'react';
import { Phone, MessageCircle, UploadCloud, Menu, X, ArrowRight, ShieldCheck, Mail, Globe2 } from 'lucide-react';

interface HeaderProps {
  onOpenUpload: (prefilledService?: string) => void;
  onNavigateTo: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenUpload, onNavigateTo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Services', target: 'services' },
    { label: 'Languages', target: 'languages' },
    { label: 'Industries', target: 'industries' },
    { label: 'Official Documents', target: 'official-docs' },
    { label: 'Process', target: 'process' },
    { label: 'Quote Calculator', target: 'calculator' },
    { label: 'FAQ', target: 'faq' },
    { label: 'Contact', target: 'contact' },
  ];

  const handleNavClick = (target: string) => {
    onNavigateTo(target);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all">
      {/* Top Utility Ribbon */}
      <div className="bg-[#142C45] text-slate-200 text-xs py-2 px-4 md:px-8 border-b border-slate-700/60">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 text-[13px]">
            <span className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-[#18A6A0]" />
              <span>Certified Foreign Language Translation · ISO 17100 & ISO 27001 Aligned</span>
            </span>
            <span className="hidden lg:inline text-slate-500">|</span>
            <span className="hidden lg:inline text-slate-300">Offices in Bengaluru, Mumbai & New Delhi</span>
          </div>
          
          <div className="flex items-center gap-5 text-[13px]">
            <a 
              href="tel:+918041237890" 
              className="flex items-center gap-1.5 text-slate-200 hover:text-[#C9A45C] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#18A6A0]" />
              <span className="font-medium">+91 80 4123 7890</span>
            </a>
            <a 
              href="https://wa.me/919845012890?text=Hello%20TransLumina%20Global%2C%20I%20would%20like%20a%20translation%20quote." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span className="font-medium">WhatsApp Us</span>
            </a>
            <a 
              href="mailto:translations@transluminaglobal.com" 
              className="hidden sm:flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#18A6A0]" />
              <span>translations@transluminaglobal.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar (Strict 3-Zone Contract: Brand — 4-5 single-line links — 1 primary action) */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3.5 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element, no adjacent badges) */}
        <button 
          onClick={() => handleNavClick('hero')} 
          className="text-left group cursor-pointer focus:outline-none"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-[#142C45] text-white flex items-center justify-center font-bold text-lg shadow-sm border border-[#2855A6]/40">
              <span className="text-[#18A6A0]">T</span>
              <span className="text-[#C9A45C]">L</span>
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-[#142C45] block leading-none">
                TransLumina Global
              </span>
              <span className="text-[11px] font-medium tracking-wider text-slate-500 uppercase mt-0.5 block">
                Foreign Language Services India
              </span>
            </div>
          </div>
        </button>

        {/* Zone 2: Single-line text navigation links */}
        <nav className="hidden xl:flex items-center gap-7 text-[14px] font-medium text-slate-700">
          {navLinks.map((link) => (
            <button
              key={link.target}
              onClick={() => handleNavClick(link.target)}
              className="hover:text-[#2855A6] transition-colors whitespace-nowrap shrink-0 py-1 cursor-pointer focus:outline-none"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Zone 3: Primary Action & Quick Buttons */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onOpenUpload()}
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#142C45] bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
          >
            <UploadCloud className="w-3.5 h-3.5 text-[#18A6A0]" />
            <span>Upload Document</span>
          </button>

          <button
            onClick={() => handleNavClick('calculator')}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#142C45] hover:bg-[#1f3f61] rounded-lg shadow-sm transition-all whitespace-nowrap cursor-pointer"
          >
            <span>Get a Free Quote</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C9A45C]" />
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-200 bg-white px-4 py-5 shadow-xl transition-all">
          <div className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => handleNavClick(link.target)}
                className="text-left px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100 rounded-md transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-slate-200 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenUpload();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-[#142C45] bg-slate-100 border border-slate-300 rounded-lg"
            >
              <UploadCloud className="w-4 h-4 text-[#18A6A0]" />
              <span>Upload Document Securely</span>
            </button>
            <a
              href="tel:+918041237890"
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-[#142C45] rounded-lg"
            >
              <Phone className="w-4 h-4 text-[#C9A45C]" />
              <span>Call +91 80 4123 7890</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
