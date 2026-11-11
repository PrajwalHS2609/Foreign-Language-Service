import React from 'react';
import { Globe, Users, ShieldCheck, Award, Clock, FileCheck, Layers, Headphones } from 'lucide-react';

export const TrustHighlights: React.FC = () => {
  const highlights = [
    {
      icon: Globe,
      title: '50+ Global Languages',
      description: 'Comprehensive coverage across European, East Asian, Middle Eastern, and major Indian languages with verified native speakers.'
    },
    {
      icon: Users,
      title: '100% Human Translators',
      description: 'No raw machine translations. Every document is translated by qualified linguists with true cultural and grammatical fluency.'
    },
    {
      icon: Layers,
      title: 'Industry-Specific Expertise',
      description: 'Specialist translators with formal backgrounds in jurisprudence, mechanical engineering, life sciences, and academic evaluation.'
    },
    {
      icon: ShieldCheck,
      title: 'Confidential Document Handling',
      description: 'Strict non-disclosure agreements, end-to-end encrypted file transfers, and compliant data purging protocols.'
    },
    {
      icon: FileCheck,
      title: '4-Eye Quality Review',
      description: 'Dual-pass verification: initial translation is cross-checked by an independent senior proofreader for terminology and numbers.'
    },
    {
      icon: Headphones,
      title: 'Rapid Online Support',
      description: 'Dedicated translation project managers available via phone, email, and WhatsApp for quick quotation updates.'
    }
  ];

  const metrics = [
    { value: '50+', label: 'Languages Supported', context: 'European, Asian & Indic' },
    { value: '12+', label: 'Years in Practice', context: 'Established in Bengaluru' },
    { value: '45,000+', label: 'Certified Documents', context: 'Delivered Worldwide' },
    { value: '1,200+', label: 'Corporate Clients', context: 'Law firms, tech & pharma' },
    { value: '99.4%', label: 'On-Time Delivery', context: 'Committed turnaround' }
  ];

  return (
    <section className="bg-white py-14 lg:py-16 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Metric Bar with tabular numerals */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 pb-12 border-b border-slate-200/80">
          {metrics.map((item, index) => (
            <div key={index} className="text-left space-y-1">
              <div className="text-3xl md:text-4xl font-extrabold text-[#142C45] tracking-tight tabular-nums">
                {item.value}
              </div>
              <div className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                {item.label}
              </div>
              <div className="text-[11px] text-slate-500">
                {item.context}
              </div>
            </div>
          ))}
        </div>

        {/* Six Core Pillars Grid */}
        <div className="pt-12">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold tracking-wider text-[#18A6A0] uppercase">
              Trust & Delivery Standards
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#142C45] tracking-tight">
              A Translation Partner You Can Depend On
            </h2>
            <p className="text-sm text-slate-600">
              We uphold uncompromising standards in linguistic accuracy, document security, and client communication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={idx}
                  className="p-6 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#2855A6]/40 hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#142C45] mb-4 shadow-xs">
                    <Icon className="w-5 h-5 text-[#2855A6]" />
                  </div>
                  <h3 className="text-base font-bold text-[#142C45] mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
