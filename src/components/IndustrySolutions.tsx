import React, { useState } from 'react';
import { INDUSTRIES, IndustryItem } from '../data/translationsData';
import { ArrowRight, CheckCircle2, Building, ShieldCheck, Scale, Stethoscope, GraduationCap, Plane, Cpu, Wrench, Coins, Globe, Landmark, BookOpen } from 'lucide-react';

interface IndustrySolutionsProps {
  onOpenUpload: (prefilledService?: string) => void;
}

export const IndustrySolutions: React.FC<IndustrySolutionsProps> = ({ onOpenUpload }) => {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryItem>(INDUSTRIES[0]);

  // Industry Icon mapping
  const getIndustryIcon = (id: string) => {
    switch (id) {
      case 'legal': return Scale;
      case 'healthcare': return Stethoscope;
      case 'education': return GraduationCap;
      case 'immigration': return Plane;
      case 'technology': return Cpu;
      case 'manufacturing': return Wrench;
      case 'finance': return Coins;
      default: return Globe;
    }
  };

  return (
    <section id="industries" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <span className="text-xs font-bold tracking-wider text-[#18A6A0] uppercase">
            Domain-Specific Linguistic Governance
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142C45] tracking-tight">
            Industry-Specific Translation Solutions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Every sector possesses its own statutory standards, nomenclature, and risk profile. Our translators are domain practitioners who understand the exact context in which your documents will be evaluated.
          </p>
        </div>

        {/* Interactive Industry Showcase: Two Column Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Industry Selector List */}
          <div className="lg:col-span-5 space-y-2">
            {INDUSTRIES.map((ind) => {
              const Icon = getIndustryIcon(ind.id);
              const isSelected = selectedIndustry.id === ind.id;
              return (
                <button
                  key={ind.id}
                  onClick={() => setSelectedIndustry(ind)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-[#142C45] text-white border-[#142C45] shadow-md'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200/80'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                      isSelected ? 'bg-white/10 text-[#C9A45C]' : 'bg-white text-[#2855A6] border border-slate-200'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className={`text-sm font-bold ${isSelected ? 'text-white' : 'text-[#142C45]'}`}>
                        {ind.name}
                      </h4>
                      <p className={`text-xs truncate max-w-[220px] sm:max-w-xs ${
                        isSelected ? 'text-slate-300' : 'text-slate-500'
                      }`}>
                        {ind.description}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className={`w-4 h-4 shrink-0 transition-transform ${
                    isSelected ? 'text-[#C9A45C] translate-x-1' : 'text-slate-400'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep-Dive Card for Selected Industry */}
          <div className="lg:col-span-7 bg-[#F8F9FA] rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs sticky top-24">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div className="flex items-center gap-3">
                {(() => {
                  const ActiveIcon = getIndustryIcon(selectedIndustry.id);
                  return (
                    <div className="w-10 h-10 rounded-xl bg-[#142C45] text-[#C9A45C] flex items-center justify-center">
                      <ActiveIcon className="w-5 h-5" />
                    </div>
                  );
                })()}
                <div>
                  <span className="text-[11px] font-bold text-[#18A6A0] uppercase tracking-wider">
                    Sector Specification
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#142C45]">
                    {selectedIndustry.name}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => onOpenUpload(`${selectedIndustry.name} Translation`)}
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-white bg-[#142C45] hover:bg-[#1a3858] rounded-lg transition-colors cursor-pointer"
              >
                <span>Upload Files</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C9A45C]" />
              </button>
            </div>

            <div className="py-5 space-y-6">
              <p className="text-sm text-slate-700 leading-relaxed">
                {selectedIndustry.description}
              </p>

              {/* Verified Case Highlight */}
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                <span className="text-[11px] font-bold text-[#2855A6] uppercase tracking-wider block mb-1">
                  Track Record Highlight
                </span>
                <p className="text-xs sm:text-sm font-medium text-slate-800 leading-relaxed">
                  {selectedIndustry.caseHighlight}
                </p>
              </div>

              {/* Core Quality Protocols */}
              <div>
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                  Linguistic & Regulatory Requirements
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {selectedIndustry.requirements.map((req, rIdx) => (
                    <div key={rIdx} className="p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-700 font-medium flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#18A6A0] shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Documents in this Sector */}
              <div>
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                  Frequently Translated Records
                </h4>
                <div className="space-y-2">
                  {selectedIndustry.keyDocuments.map((doc, dIdx) => (
                    <div key={dIdx} className="flex items-center justify-between p-2.5 bg-white rounded-lg border border-slate-200/80 text-xs">
                      <span className="font-semibold text-slate-800">{doc}</span>
                      <span className="text-slate-400 text-[11px]">Certified format ready</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Action Bar */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-slate-500">
                  Dual-review QA included on all projects.
                </span>
                <button
                  onClick={() => onOpenUpload(`${selectedIndustry.name} Translation`)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-[#142C45] hover:bg-[#1a3858] rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  <span>Request {selectedIndustry.name} Translation Quote</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C9A45C]" />
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
