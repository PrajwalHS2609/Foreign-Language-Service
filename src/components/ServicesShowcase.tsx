import React, { useState } from 'react';
import { SERVICES, ServiceItem } from '../data/translationsData';
import { ArrowRight, CheckCircle2, Clock, ShieldCheck, FileText, ChevronRight, Sparkles } from 'lucide-react';
import legalImage from '../assets/images/legal_document_translation_1794402415765.jpg';
import medicalImage from '../assets/images/medical_technical_translation_1794402416076.jpg';

interface ServicesShowcaseProps {
  onOpenUpload: (prefilledService?: string) => void;
}

export const ServicesShowcase: React.FC<ServicesShowcaseProps> = ({ onOpenUpload }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const categories = [
    { id: 'all', label: 'All 12 Services' },
    { id: 'personal', label: 'Personal & Academic' },
    { id: 'legal', label: 'Legal & Certified' },
    { id: 'technical', label: 'Technical & Medical' },
    { id: 'business', label: 'Corporate & Business' },
    { id: 'digital', label: 'Digital, Audio & Voice' }
  ];

  const filteredServices = activeCategory === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold tracking-wider text-[#18A6A0] uppercase">
              Comprehensive Linguistic Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142C45] tracking-tight">
              Our Foreign Language Translation Services
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Rigorous, human-certified translation delivered across 12 dedicated disciplines. Tailored for embassies, universities, courts, and corporate enterprises.
            </p>
          </div>

          {/* Interactive Category Segmented Tabs (Functional Buttons, No Pills) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-[#142C45] text-white shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Deep Dives: Legal & Medical (Visual Editorial Spotlight) */}
        {activeCategory === 'all' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Spotlight 1: Certified Legal Translation */}
            <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 flex flex-col md:flex-row shadow-sm hover:shadow-md transition-shadow">
              <div className="md:w-5/12 relative h-52 md:h-auto">
                <img
                  src={legalImage}
                  alt="Certified legal translation document with gold seal and ribbon"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-[#142C45]/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider backdrop-blur-xs">
                  Legal & Judiciary
                </div>
              </div>
              <div className="p-6 md:w-7/12 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                    <span>Sworn Affidavits</span>
                    <span>·</span>
                    <span>Arbitration</span>
                    <span>·</span>
                    <span>Contracts</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#142C45]">
                    Certified Legal Translation
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Precise legal translations executed by qualified jurilinguists with complete terminology harmonization for high courts, international arbitration, cross-border M&A, and embassies.
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#18A6A0] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> 48 – 72 Hrs
                  </span>
                  <button
                    onClick={() => onOpenUpload('Legal Translation')}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#142C45] hover:text-[#2855A6] cursor-pointer"
                  >
                    <span>Request Legal Quote</span>
                    <ChevronRight className="w-4 h-4 text-[#C9A45C]" />
                  </button>
                </div>
              </div>
            </div>

            {/* Spotlight 2: Medical & Technical Translation */}
            <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 flex flex-col md:flex-row shadow-sm hover:shadow-md transition-shadow">
              <div className="md:w-5/12 relative h-52 md:h-auto">
                <img
                  src={medicalImage}
                  alt="Multilingual clinical trial document and medical terminology tablet"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-[#18A6A0]/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider backdrop-blur-xs">
                  Life Sciences & Pharma
                </div>
              </div>
              <div className="p-6 md:w-7/12 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                    <span>Clinical Protocols</span>
                    <span>·</span>
                    <span>SmPC</span>
                    <span>·</span>
                    <span>Regulatory</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#142C45]">
                    Medical & Life Sciences
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Handled by qualified medical linguists and pharmacologists for clinical trial protocols, patient records, and biomedical export packaging under strict EMA and FDA terminology standards.
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#18A6A0] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> 48 – 96 Hrs
                  </span>
                  <button
                    onClick={() => onOpenUpload('Medical Translation')}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#142C45] hover:text-[#2855A6] cursor-pointer"
                  >
                    <span>Request Medical Quote</span>
                    <ChevronRight className="w-4 h-4 text-[#C9A45C]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Dynamic Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-[#2855A6]/40 hover:shadow-lg transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-3 text-xs text-slate-500">
                  <span className="font-mono text-slate-400 font-semibold">{String(index + 1).padStart(2, '0')}.</span>
                  <span className="text-slate-500 font-medium">{service.turnaround}</span>
                </div>

                <h3 className="text-lg font-bold text-[#142C45] group-hover:text-[#2855A6] transition-colors mb-2">
                  {service.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {service.description}
                </p>

                <div className="space-y-1.5 mb-5 pt-3 border-t border-slate-100">
                  <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-1">
                    Common Documents:
                  </span>
                  {service.documents.slice(0, 3).map((doc, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-1.5 text-xs text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#18A6A0]" />
                      <span className="truncate">{doc}</span>
                    </div>
                  ))}
                  {service.documents.length > 3 && (
                    <span className="text-[11px] text-slate-400 block pl-3">
                      +{service.documents.length - 3} more document types
                    </span>
                  )}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
                >
                  View Details & Scope
                </button>

                <button
                  onClick={() => onOpenUpload(service.title)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#142C45] hover:text-[#2855A6] group-hover:translate-x-0.5 transition-all cursor-pointer"
                >
                  <span>Get Quote</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C9A45C]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal: Service Detail Inspection */}
        {selectedService && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-200">
              <div className="flex items-start justify-between pb-4 border-b border-slate-200">
                <div>
                  <span className="text-xs font-bold text-[#18A6A0] uppercase tracking-wider">
                    Service Scope & Delivery
                  </span>
                  <h3 className="text-xl font-bold text-[#142C45] mt-1">
                    {selectedService.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-slate-400 hover:text-slate-700 text-lg p-1 font-bold"
                >
                  ✕
                </button>
              </div>

              <div className="py-4 space-y-4 text-xs sm:text-sm text-slate-600">
                <p className="leading-relaxed">
                  {selectedService.description}
                </p>

                <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-semibold text-slate-800">Ideal For:</div>
                  <div>{selectedService.idealFor}</div>
                </div>

                <div>
                  <div className="font-bold text-slate-800 mb-2">Supported Document Categories:</div>
                  <ul className="space-y-1.5">
                    {selectedService.documents.map((doc, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#18A6A0] shrink-0" />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs">
                  <div>
                    <span className="text-slate-500">Standard Delivery: </span>
                    <strong className="text-slate-900">{selectedService.turnaround}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500">Certification: </span>
                    <strong className="text-[#142C45]">{selectedService.certificationAvailable ? 'Available' : 'N/A'}</strong>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const title = selectedService.title;
                    setSelectedService(null);
                    onOpenUpload(title);
                  }}
                  className="px-5 py-2.5 text-xs font-bold text-white bg-[#142C45] hover:bg-[#1f3f61] rounded-xl shadow-xs"
                >
                  Upload Document for this Service
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
