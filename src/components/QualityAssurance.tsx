import React from 'react';
import { ShieldCheck, UserCheck, FileCheck, Lock, RefreshCw, Layers, Sparkles, CheckCircle2 } from 'lucide-react';

export const QualityAssurance: React.FC = () => {
  const qualitySteps = [
    {
      number: '01',
      title: 'Source Text & Registry Audit',
      description: 'Linguists verify the clarity, stamps, legibility, and completeness of the original source scan before translation initiates.'
    },
    {
      number: '02',
      title: 'Domain Terminology Glossaries',
      description: 'Standardized glossaries and termbases applied for statutory legal, engineering (ISO/JIS), and clinical nomenclature.'
    },
    {
      number: '03',
      title: 'Contextual Semantic Translation',
      description: 'Native human linguist renders the message into natural, idiomatically accurate prose respecting local cultural idioms.'
    },
    {
      number: '04',
      title: 'Independent 4-Eye Proofreading',
      description: 'A second senior linguist independently compares source and target texts line-by-line for terminology and numbers.'
    },
    {
      number: '05',
      title: 'Desktop Publishing (DTP) Formatting',
      description: 'Formatting specialists align tables, seals, signatures, and stamps to mirror the source document layout exactly.'
    },
    {
      number: '06',
      title: 'Certification & Seal Affixing',
      description: 'Authorized certification statement stamped on official corporate letterhead with translator reference details.'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#F8F9FA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <span className="text-xs font-bold tracking-wider text-[#18A6A0] uppercase">
            Quality Assurance Protocol
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142C45] tracking-tight">
            More Than Translation.{' '}
            <span className="font-serif-editorial italic font-normal text-[#2855A6]">A Commitment to Meaning</span> & Accuracy.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Our translation governance adheres to rigorous dual-review standards. We ensure every document retains total semantic fidelity, regulatory precision, and cultural nuance.
          </p>
        </div>

        {/* 6 Quality Verification Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {qualitySteps.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs hover:border-[#18A6A0] transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold font-mono text-[#18A6A0] bg-[#18A6A0]/10 px-2 py-0.5 rounded">
                  STAGE {item.number}
                </span>
                <CheckCircle2 className="w-4 h-4 text-[#C9A45C]" />
              </div>
              <h3 className="text-base font-bold text-[#142C45] mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Data Security & Confidentiality Commitment Box */}
        <div className="bg-[#142C45] text-white rounded-2xl p-6 sm:p-8 border border-slate-700 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#C9A45C] uppercase tracking-wider">
                <Lock className="w-4 h-4" />
                <span>Confidential Document Handling & Data Protection</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Bank-Grade Confidentiality for Sensitive Personal, Legal & Medical Records
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Every document submitted to TransLumina Global is encrypted in transit and at rest. Our linguists operate under strict non-disclosure agreements (NDAs). Once translation and client approval milestones conclude, records are securely purged in alignment with our documented data retention schedule.
              </p>
            </div>

            <div className="lg:col-span-4 bg-white/5 border border-white/10 rounded-xl p-4 sm:p-5 text-xs text-slate-300 space-y-2.5">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#18A6A0]" />
                <span className="font-semibold text-white">Standard Corporate Non-Disclosure Agreement (NDA)</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#18A6A0]" />
                <span className="font-semibold text-white">Encrypted Digital Transmission (TLS 1.3)</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#18A6A0]" />
                <span className="font-semibold text-white">Granular Role-Based Access Controls</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
