import React, { useState } from 'react';
import { OFFICIAL_DOC_TYPES } from '../data/translationsData';
import { ShieldAlert, Award, FileCheck, CheckCircle2, ArrowRight, AlertCircle, Info, Landmark } from 'lucide-react';

interface OfficialTranslationGuideProps {
  onOpenUpload: (prefilledService?: string) => void;
}

export const OfficialTranslationGuide: React.FC<OfficialTranslationGuideProps> = ({ onOpenUpload }) => {
  const [selectedTypeIndex, setSelectedTypeIndex] = useState(1); // default to Certified Translation

  const officialDocs = [
    'Birth Certificates & Civil Registry',
    'Marriage Certificates & Affidavits',
    'University Degrees & Diplomas',
    'Semester Mark Sheets & Transcripts',
    'Police Clearance Certificates (PCC)',
    'Experience & Relocation Letters',
    'Bank Statements & Tax ITR Proof',
    'National ID Cards & Passports'
  ];

  return (
    <section id="official-docs" className="py-16 lg:py-24 bg-[#F8F9FA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <span className="text-xs font-bold tracking-wider text-[#18A6A0] uppercase">
            Statutory & Consular Guidance
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142C45] tracking-tight">
            Accurate Document Translation for Important Milestones
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Submitting documents to overseas universities, high commissions, embassies, or foreign courts requires strict adherence to legal certification guidelines. We demystify the compliance hierarchy so your application proceeds smoothly.
          </p>
        </div>

        {/* Clear Compliance Matrix (Interactive Comparison) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left Column: Interactive 5 Tiers */}
          <div className="lg:col-span-5 space-y-2.5">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
              Select Certification Category:
            </span>
            {OFFICIAL_DOC_TYPES.map((type, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedTypeIndex(idx)}
                className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                  selectedTypeIndex === idx
                    ? 'bg-[#142C45] text-white border-[#142C45] shadow-md'
                    : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <h4 className={`text-sm font-bold ${selectedTypeIndex === idx ? 'text-white' : 'text-[#142C45]'}`}>
                    {type.title}
                  </h4>
                  <span className={`text-[11px] font-semibold px-2 py-0.5 rounded ${
                    selectedTypeIndex === idx
                      ? 'bg-white/20 text-[#C9A45C]'
                      : 'bg-slate-100 text-slate-600'
                  }`}>
                    {type.badge}
                  </span>
                </div>
                <p className={`text-xs mt-1 line-clamp-1 ${selectedTypeIndex === idx ? 'text-slate-300' : 'text-slate-500'}`}>
                  {type.description}
                </p>
              </button>
            ))}
          </div>

          {/* Right Column: In-Depth Explanation & Legal Boundary */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            {(() => {
              const current = OFFICIAL_DOC_TYPES[selectedTypeIndex];
              return (
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                    <div>
                      <span className="text-xs font-bold text-[#18A6A0] uppercase tracking-wider">
                        {current.badge}
                      </span>
                      <h3 className="text-2xl font-bold text-[#142C45] mt-0.5">
                        {current.title}
                      </h3>
                    </div>
                    <button
                      onClick={() => onOpenUpload(current.title)}
                      className="px-4 py-2 text-xs font-bold text-white bg-[#142C45] hover:bg-[#1f3f61] rounded-lg transition-colors cursor-pointer"
                    >
                      Get Quote
                    </button>
                  </div>

                  <div>
                    <h5 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Scope & Definition:
                    </h5>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {current.description}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <h5 className="text-xs font-bold text-[#142C45] uppercase tracking-wider">
                      Typical Use Cases:
                    </h5>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {current.useCase}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/80 text-amber-950 text-xs sm:text-sm leading-relaxed flex items-start gap-3">
                    <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block mb-0.5">Authority Acceptance Notice:</span>
                      <span>{current.authorityAcceptance}</span>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-xs text-slate-500">
                      Stamp and signature affixed on corporate letterhead.
                    </span>
                    <button
                      onClick={() => onOpenUpload(current.title)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-[#142C45] hover:bg-[#1a3858] rounded-xl shadow-xs transition-colors cursor-pointer"
                    >
                      <span>Upload Document for {current.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C9A45C]" />
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>

        </div>

        {/* Essential Compliance Disclaimer Card */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs mb-12">
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-[#142C45] text-[#C9A45C] flex items-center justify-center shrink-0">
              <Landmark className="w-5 h-5" />
            </div>
            <div className="space-y-2 text-xs sm:text-sm text-slate-600">
              <h4 className="font-bold text-[#142C45] text-sm sm:text-base">
                Important Notice on Government, Embassy & University Acceptance Requirements
              </h4>
              <p className="leading-relaxed">
                Translation, certification, notarization, apostille, and embassy legalizations are distinct procedures. <strong>Translation services alone do not automatically constitute or include notarization, MEA apostille, or consular attestation</strong>. Because statutory acceptance requirements vary substantially depending on the specific receiving authority, foreign university panel, court bench, or destination embassy, we advise all clients to verify their exact submission requirements beforehand. TransLumina Global provides qualified certified translations and can coordinate notarization where authorized.
              </p>
            </div>
          </div>
        </div>

        {/* Common Official Records Grid */}
        <div className="space-y-4">
          <h3 className="text-base font-bold text-[#142C45]">
            Supported Official & Civil Documents in India
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {officialDocs.map((doc, idx) => (
              <div key={idx} className="p-3 bg-white rounded-lg border border-slate-200 text-xs font-medium text-slate-800 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#18A6A0] shrink-0" />
                <span className="truncate">{doc}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
