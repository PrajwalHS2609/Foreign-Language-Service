import React from 'react';
import { PROCESS_STEPS } from '../data/translationsData';
import { ArrowRight, CheckCircle2, UploadCloud, Search, Calculator, UserCheck, ShieldCheck, Send } from 'lucide-react';

interface ProcessTimelineProps {
  onOpenUpload: () => void;
  onNavigateTo: (sectionId: string) => void;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ onOpenUpload, onNavigateTo }) => {
  const stepIcons = [UploadCloud, Search, Calculator, UserCheck, ShieldCheck, Send];

  return (
    <section id="process" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold tracking-wider text-[#18A6A0] uppercase">
            Transparent Workflow Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142C45] tracking-tight">
            Our Translation & Certification Process
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            From initial document submission to certified delivery, our systematic 6-stage quality pipeline guarantees linguistic fidelity and strict confidentiality at every step.
          </p>
        </div>

        {/* 6-Step Visual Journey */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {PROCESS_STEPS.map((step, index) => {
            const Icon = stepIcons[index];
            return (
              <div 
                key={step.step}
                className="bg-[#F8F9FA] rounded-2xl border border-slate-200 p-6 sm:p-7 flex flex-col justify-between hover:border-[#18A6A0] hover:shadow-md transition-all group relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-black font-mono text-[#2855A6]/40 group-hover:text-[#2855A6] transition-colors">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#142C45] shadow-xs group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5 text-[#142C45]" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#142C45] mb-2.5">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/80 flex items-center gap-1.5 text-xs font-semibold text-[#18A6A0]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{step.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Bar */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#142C45] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white">
              Ready to begin your document translation?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Upload your files online or get an instant estimation with our interactive pricing tool.
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => onNavigateTo('calculator')}
              className="px-4 py-2.5 text-xs font-semibold text-slate-200 bg-white/10 hover:bg-white/20 rounded-xl transition-colors w-full sm:w-auto cursor-pointer"
            >
              Price Estimator
            </button>
            <button
              onClick={onOpenUpload}
              className="px-5 py-2.5 text-xs font-bold text-[#142C45] bg-[#C9A45C] hover:bg-[#d6b165] rounded-xl shadow-md transition-all whitespace-nowrap w-full sm:w-auto cursor-pointer"
            >
              Upload Document Now
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
