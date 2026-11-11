import React from 'react';
import { ArrowRight, Check, ShieldCheck, MapPin, Building2, Award } from 'lucide-react';
import corporateImage from '../assets/images/corporate_global_business_1794402415402.jpg';

interface AboutCompanyProps {
  onNavigateTo: (sectionId: string) => void;
  onOpenUpload: () => void;
}

export const AboutCompany: React.FC<AboutCompanyProps> = ({ onNavigateTo, onOpenUpload }) => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-[#F8F9FA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Split Screen Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold tracking-wider text-[#18A6A0] uppercase">
                About TransLumina Global
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142C45] tracking-tight leading-tight">
                Connecting People, Businesses, and Opportunities{' '}
                <span className="font-serif-editorial italic font-normal text-[#2855A6]">Through Language.</span>
              </h2>
            </div>

            <p className="text-base text-slate-700 leading-relaxed">
              Founded in Bengaluru with regional support across Mumbai and New Delhi, <strong>TransLumina Global</strong> operates as a premier language solutions partner for individuals and organizations navigating multilingual environments.
            </p>

            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-3">
              <p className="font-serif-editorial italic text-base sm:text-lg text-[#142C45] leading-relaxed">
                "In official documentation, there is no margin for approximate phrasing. A single mistranslated legal term or grade scale error can halt a visa or jeopardize a multi-million dollar international tender."
              </p>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                — TransLumina Linguistic Quality Charter
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              Whether you are an engineering graduate submitting certified transcripts to German universities via Uni-Assist, a law firm filing bilingual pleadings in international commercial arbitration, or an IT scaleup localizing SaaS products for Japan and Latin America, our dedicated subject-matter linguists ensure uncompromising accuracy and cultural resonance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#18A6A0]/10 text-[#18A6A0] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-medium text-slate-800">
                  Dual-pass 4-eye editorial verification
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#18A6A0]/10 text-[#18A6A0] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-medium text-slate-800">
                  Strict client NDA & data protection
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#18A6A0]/10 text-[#18A6A0] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-medium text-slate-800">
                  Authorized company stamp & certification
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#18A6A0]/10 text-[#18A6A0] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-medium text-slate-800">
                  Pan-India digital & courier delivery
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => onNavigateTo('services')}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-[#142C45] hover:bg-[#1f3f61] rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                <span>Explore Translation Services</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C9A45C]" />
              </button>
              
              <button
                onClick={() => onOpenUpload()}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-[#142C45] bg-white border border-slate-300 hover:border-slate-400 rounded-xl transition-colors cursor-pointer"
              >
                <span>Request Document Evaluation</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Composition */}
          <div className="lg:col-span-6">
            <div className="relative">
              {/* Main Visual */}
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <img
                  src={corporateImage}
                  alt="TransLumina Global international executive translation meeting"
                  className="w-full h-80 sm:h-96 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Overlaid Editorial Card */}
              <div className="absolute -bottom-8 -left-4 sm:-left-8 bg-white p-5 sm:p-6 rounded-xl shadow-xl border border-slate-200 max-w-xs sm:max-w-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#142C45] text-white flex items-center justify-center">
                    <Building2 className="w-4 h-4 text-[#C9A45C]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#142C45] uppercase tracking-wide">
                      Pan-India Operations
                    </h4>
                    <p className="text-[11px] text-slate-500">Bengaluru · Mumbai · New Delhi</p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Serving individual applicants, leading Indian corporate exporters, research institutions, and multinational businesses with seamless digital workflows.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
