import React, { useState } from 'react';
import { SAMPLE_TRANSLATIONS, SampleTranslation } from '../data/translationsData';
import { GraduationCap, Briefcase, Building, Scale, Stethoscope, ArrowRight, Eye, FileText, CheckCircle2 } from 'lucide-react';

interface UseCasesAndPortfolioProps {
  onOpenUpload: (prefilledService?: string) => void;
}

export const UseCasesAndPortfolio: React.FC<UseCasesAndPortfolioProps> = ({ onOpenUpload }) => {
  const [activeSample, setActiveSample] = useState<SampleTranslation>(SAMPLE_TRANSLATIONS[0]);

  const useCases = [
    {
      icon: GraduationCap,
      category: 'Higher Education & Visa',
      title: 'University Admission to Germany (Uni-Assist)',
      scenario: 'An engineering graduate from Bengaluru required official German translations of 8 semester mark sheets, consolidated transcript, and provisional degree certificate for admission to TU Munich.',
      outcome: 'Delivered digitally signed certified translations with German grading scale footnotes within 36 hours. The application passed Uni-Assist verification on the first review.'
    },
    {
      icon: Briefcase,
      category: 'Global Mobility & Blue Card',
      title: 'European Employment & Visa Dossier',
      scenario: 'A senior software architect relocating to Paris needed birth certificate, marriage certificate, police clearance certificate, and work experience letters translated into French for the French consulate.',
      outcome: 'Format-matched translations rendered on corporate letterhead with translator affidavit. Accepted smoothly at the VFS Global French visa center.'
    },
    {
      icon: Scale,
      category: 'Cross-Border Litigation',
      title: 'International Commercial Arbitration',
      scenario: 'A corporate legal team in Mumbai required rapid translation of 300+ pages of French and Spanish distribution agreements for an urgent SIAC arbitration hearing.',
      outcome: 'Dual-pass jurilinguist team delivered synchronized bilingual glossaries and verified affidavits within 4 business days.'
    },
    {
      icon: Stethoscope,
      category: 'Biotech & Pharma Clinical Trials',
      title: 'Multi-Center Clinical Study Report',
      scenario: 'A biopharmaceutical enterprise in Hyderabad needed clinical trial consent protocols translated into Japanese and German for overseas ethics board submissions.',
      outcome: 'Medical specialist linguists ensured total compliance with ICH GCP and pharmacovigilance terminology standards.'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#F8F9FA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Part 1: Real-World Use Cases */}
        <div className="mb-20">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-xs font-bold tracking-wider text-[#18A6A0] uppercase">
              Proven Outcomes in Critical Contexts
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142C45] tracking-tight">
              Real-World Translation Applications
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Discover how our certified linguists support students, legal counsels, multinational corporations, and relocating professionals across diverse scenarios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((uc, index) => {
              const Icon = uc.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs hover:border-[#2855A6]/40 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-[#2855A6]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold text-[#18A6A0] uppercase tracking-wider block">
                          {uc.category}
                        </span>
                        <h3 className="text-base font-bold text-[#142C45]">
                          {uc.title}
                        </h3>
                      </div>
                    </div>

                    <div className="space-y-2 text-xs sm:text-sm text-slate-600">
                      <p>
                        <strong className="text-slate-800">Requirement: </strong>
                        {uc.scenario}
                      </p>
                      <p className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-700">
                        <strong className="text-[#142C45]">Result: </strong>
                        {uc.outcome}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-500">
                      Standard NDA & Certified Seal
                    </span>
                    <button
                      onClick={() => onOpenUpload(uc.title)}
                      className="text-xs font-bold text-[#142C45] hover:text-[#2855A6] inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>Similar Requirement?</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C9A45C]" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Part 2: Interactive Portfolio & Anonymized Sample Translations */}
        <div id="portfolio" className="pt-8 border-t border-slate-200/80">
          <div className="max-w-3xl mb-10 space-y-3">
            <span className="text-xs font-bold tracking-wider text-[#18A6A0] uppercase">
              Anonymized Translation Portfolio
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#142C45] tracking-tight">
              Sample Translations & Layout Matching
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Examine side-by-side excerpts of our work demonstrating layout fidelity, footnote grading explanations, and statutory phrasing. (Confidential details strictly anonymized).
            </p>
          </div>

          {/* Sample Selector Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {SAMPLE_TRANSLATIONS.map((sample) => (
              <button
                key={sample.id}
                onClick={() => setActiveSample(sample)}
                className={`px-4 py-2 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
                  activeSample.id === sample.id
                    ? 'bg-[#142C45] text-white border-[#142C45] shadow-xs'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
              >
                {sample.title} ({sample.sourceLang.split(' ')[0]} → English)
              </button>
            ))}
          </div>

          {/* Side-by-Side Comparison Box */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-slate-200 gap-3">
              <div>
                <span className="text-[11px] font-bold text-[#18A6A0] uppercase tracking-wider">
                  {activeSample.industry} · {activeSample.documentType}
                </span>
                <h3 className="text-lg font-bold text-[#142C45] mt-0.5">
                  {activeSample.title}
                </h3>
              </div>
              <button
                onClick={() => onOpenUpload(activeSample.title)}
                className="px-4 py-2 text-xs font-bold text-white bg-[#142C45] hover:bg-[#1f3f61] rounded-lg transition-colors cursor-pointer self-start sm:self-auto"
              >
                Request Quote for this Type
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Source Text Snippet */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-700 uppercase tracking-wider pb-1 border-b border-slate-100">
                  <span>Source Excerpt ({activeSample.sourceLang})</span>
                  <span className="text-[10px] text-slate-400 font-mono">Original Document</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-800 font-mono leading-relaxed min-h-[140px] whitespace-pre-line">
                  {activeSample.sourceSnippet}
                </div>
              </div>

              {/* Target Translated Rendition */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-700 uppercase tracking-wider pb-1 border-b border-slate-100">
                  <span>Certified Translation ({activeSample.targetLang})</span>
                  <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> TransLumina Certified
                  </span>
                </div>
                <div className="p-4 bg-[#142C45]/5 rounded-xl border border-[#2855A6]/20 text-xs text-slate-900 leading-relaxed min-h-[140px] whitespace-pre-line font-medium">
                  {activeSample.targetSnippet}
                </div>
              </div>
            </div>

            {/* Linguist Explanatory Footnote */}
            <div className="mt-5 p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
              <span className="font-bold text-[#142C45] whitespace-nowrap">Editorial Methodology:</span>
              <span>{activeSample.linguistNotes}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
