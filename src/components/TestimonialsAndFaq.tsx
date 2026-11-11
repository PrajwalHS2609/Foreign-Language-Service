import React, { useState } from 'react';
import { FAQS, TESTIMONIALS, FaqItem } from '../data/translationsData';
import { Star, ChevronDown, ChevronUp, Search, MessageSquare, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface TestimonialsAndFaqProps {
  onOpenUpload: () => void;
}

export const TestimonialsAndFaq: React.FC<TestimonialsAndFaqProps> = ({ onOpenUpload }) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('certified-vs-notarized');
  const [faqCategory, setFaqCategory] = useState<string>('all');
  const [faqSearch, setFaqSearch] = useState('');

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory = faqCategory === 'all' || faq.category === faqCategory;
    const matchesSearch = faq.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(faqSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Part 1: Client Testimonials */}
        <div className="mb-20">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-xs font-bold tracking-wider text-[#18A6A0] uppercase">
              Client References & Verification
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142C45] tracking-tight">
              Trusted by Legal Counsel, Academics, and Enterprises
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Read feedback from advocates, clinical directors, students, and technology leaders who rely on our certified translation accuracy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="p-6 sm:p-7 rounded-2xl bg-[#F8F9FA] border border-slate-200 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[#C9A45C]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-[11px] font-semibold text-[#18A6A0] bg-[#18A6A0]/10 px-2 py-0.5 rounded">
                      {t.service}
                    </span>
                  </div>

                  <p className="font-serif-editorial italic text-slate-800 text-sm sm:text-base leading-relaxed">
                    "{t.feedback}"
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#142C45]">
                      {t.author}
                    </h4>
                    <p className="text-[11px] text-slate-500">
                      {t.role} · {t.organization}
                    </p>
                  </div>
                  <ShieldCheck className="w-5 h-5 text-slate-400" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: Searchable Frequently Asked Questions */}
        <div className="pt-8 border-t border-slate-200/80">
          <div className="max-w-3xl mb-10 space-y-3">
            <span className="text-xs font-bold tracking-wider text-[#18A6A0] uppercase">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#142C45] tracking-tight">
              Got Questions? We Have Transparent Answers.
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Everything you need to know about certified translation, apostille differences, embassy acceptance, turnaround times, and confidentiality.
            </p>
          </div>

          {/* Filter Bar & Search */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200 w-full sm:w-auto">
              {[
                { id: 'all', label: 'All FAQs' },
                { id: 'certified', label: 'Certification & Notary' },
                { id: 'pricing', label: 'Pricing & Timelines' },
                { id: 'confidentiality', label: 'Security & NDA' },
                { id: 'general', label: 'General & Online' }
              ].map((c) => (
                <button
                  key={c.id}
                  onClick={() => setFaqCategory(c.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                    faqCategory === c.id
                      ? 'bg-[#142C45] text-white shadow-xs font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search questions..."
                value={faqSearch}
                onChange={(e) => setFaqSearch(e.target.value)}
                className="w-full pl-9 pr-3.5 py-2 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#18A6A0] focus:bg-white"
              />
            </div>
          </div>

          {/* Accordion List */}
          <div className="space-y-3">
            {filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-xl border border-slate-200 overflow-hidden bg-[#F8F9FA] transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-100/70 transition-colors cursor-pointer"
                  >
                    <span className="font-bold text-sm sm:text-base text-[#142C45]">
                      {faq.question}
                    </span>
                    <span className="text-slate-500 shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5 text-[#2855A6]" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-200/60 pt-3 bg-white">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Still have a question? */}
          <div className="mt-8 p-5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <span className="text-slate-600">
              Have a specific embassy or institutional translation requirement not covered above?
            </span>
            <button
              onClick={onOpenUpload}
              className="text-xs font-bold text-[#142C45] hover:text-[#2855A6] flex items-center gap-1.5 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#18A6A0]" />
              <span>Ask Our Translation Coordinator</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
