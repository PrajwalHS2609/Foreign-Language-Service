import React, { useState } from 'react';
import { Calculator, ArrowRight, ShieldCheck, Clock, CheckCircle2, HelpCircle, UploadCloud } from 'lucide-react';

interface QuoteCalculatorProps {
  onOpenUpload: (prefilledService?: string) => void;
}

export const QuoteCalculator: React.FC<QuoteCalculatorProps> = ({ onOpenUpload }) => {
  const [sourceLangTier, setSourceLangTier] = useState<'tier1' | 'tier2' | 'tier3'>('tier1');
  const [docCategory, setDocCategory] = useState<'standard' | 'specialized'>('standard');
  const [pageCount, setPageCount] = useState<number>(2);
  const [urgency, setUrgency] = useState<'standard' | 'express' | 'rush'>('standard');
  const [needNotary, setNeedNotary] = useState<boolean>(false);
  const [needCourier, setNeedCourier] = useState<boolean>(false);

  // Pricing Model (Realistic benchmark for Indian translation agencies in INR)
  // Tier 1: German, French, Spanish, Russian, Arabic (₹1,100 - ₹1,400 per page ~ 250 words)
  // Tier 2: Japanese, Chinese, Korean, Dutch, Italian (₹1,500 - ₹1,800 per page)
  // Tier 3: Rare Nordic/Eastern European/Hebrew (₹2,000+ per page)
  const baseRatePerPage = {
    tier1: docCategory === 'standard' ? 1200 : 1600,
    tier2: docCategory === 'standard' ? 1600 : 2100,
    tier3: docCategory === 'standard' ? 2200 : 2800,
  }[sourceLangTier];

  const urgencyMultiplier = {
    standard: 1.0,
    express: 1.35, // 24-hour turnaround
    rush: 1.70,     // Same-day / Priority
  }[urgency];

  const subtotal = Math.round(baseRatePerPage * pageCount * urgencyMultiplier);
  const notaryFee = needNotary ? 600 * pageCount : 0;
  const courierFee = needCourier ? 250 : 0;
  const estimatedTotalINR = subtotal + notaryFee + courierFee;
  const estimatedTotalUSD = Math.round(estimatedTotalINR / 86); // Approximate USD conversion

  const turnaroundText = {
    standard: '48 – 72 Business Hours',
    express: '24 – 36 Business Hours',
    rush: 'Same Day / 12 – 18 Hours',
  }[urgency];

  const handleProceed = () => {
    const tierName = sourceLangTier === 'tier1' ? 'European/Arabic' : sourceLangTier === 'tier2' ? 'East Asian/Nordic' : 'Specialist Rare';
    const prefill = `${tierName} Translation (${pageCount} Pages, ${urgency.toUpperCase()} Delivery)`;
    onOpenUpload(prefill);
  };

  return (
    <section id="calculator" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <span className="text-xs font-bold tracking-wider text-[#18A6A0] uppercase">
            Transparent Pricing Guidance
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142C45] tracking-tight">
            Get a Translation Quote That Matches Your Requirements
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Configure your document volume, language complexity, and turnaround speed below for an instant budget estimate. Official project quotes are confirmed following document review.
          </p>
        </div>

        {/* Interactive Calculator Bento Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-[#F8F9FA] rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
            
            {/* Step 1: Language Pair Tier */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                1. Language Pair Complexity
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <button
                  type="button"
                  onClick={() => setSourceLangTier('tier1')}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    sourceLangTier === 'tier1'
                      ? 'bg-[#142C45] text-white border-[#142C45] shadow-xs'
                      : 'bg-white text-slate-800 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="font-bold text-xs">Tier 1: Popular</div>
                  <div className={`text-[11px] mt-0.5 ${sourceLangTier === 'tier1' ? 'text-slate-300' : 'text-slate-500'}`}>
                    German, French, Spanish, Russian, Arabic
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setSourceLangTier('tier2')}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    sourceLangTier === 'tier2'
                      ? 'bg-[#142C45] text-white border-[#142C45] shadow-xs'
                      : 'bg-white text-slate-800 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="font-bold text-xs">Tier 2: East Asian</div>
                  <div className={`text-[11px] mt-0.5 ${sourceLangTier === 'tier2' ? 'text-slate-300' : 'text-slate-500'}`}>
                    Japanese, Chinese, Korean, Dutch, Italian
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setSourceLangTier('tier3')}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    sourceLangTier === 'tier3'
                      ? 'bg-[#142C45] text-white border-[#142C45] shadow-xs'
                      : 'bg-white text-slate-800 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="font-bold text-xs">Tier 3: Specialist</div>
                  <div className={`text-[11px] mt-0.5 ${sourceLangTier === 'tier3' ? 'text-slate-300' : 'text-slate-500'}`}>
                    Nordic, Hebrew, Romanian, Greek & Rare
                  </div>
                </button>
              </div>
            </div>

            {/* Step 2: Document Complexity */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                2. Document Nature
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setDocCategory('standard')}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                    docCategory === 'standard'
                      ? 'bg-white border-[#2855A6] ring-2 ring-[#2855A6]/20'
                      : 'bg-white border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="font-bold text-xs text-[#142C45]">Standard Academic & Civil</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    Degrees, Transcripts, Birth/Marriage Certificates, PCC
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setDocCategory('specialized')}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                    docCategory === 'specialized'
                      ? 'bg-white border-[#2855A6] ring-2 ring-[#2855A6]/20'
                      : 'bg-white border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="font-bold text-xs text-[#142C45]">Specialized Legal / Medical / Tech</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    Court Pleadings, Clinical Trials, Manuals, M&A filings
                  </div>
                </button>
              </div>
            </div>

            {/* Step 3: Page Count / Word Volume */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  3. Estimated Volume (Pages / Documents)
                </label>
                <span className="text-sm font-bold text-[#142C45] bg-white px-3 py-1 rounded-lg border border-slate-200 tabular-nums">
                  {pageCount} {pageCount === 1 ? 'Page' : 'Pages'} (~{pageCount * 250} words)
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="25"
                step="1"
                value={pageCount}
                onChange={(e) => setPageCount(parseInt(e.target.value, 10))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#142C45]"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>1 Page (e.g. Birth Certificate)</span>
                <span>8 Pages (Transcript)</span>
                <span>25+ Pages (Tender/Contract)</span>
              </div>
            </div>

            {/* Step 4: Urgency */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                4. Turnaround Speed
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'standard', label: 'Standard', time: '48–72h' },
                  { id: 'express', label: 'Express', time: '24–36h' },
                  { id: 'rush', label: 'Super Rush', time: '12–18h' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setUrgency(item.id as any)}
                    className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                      urgency === item.id
                        ? 'bg-[#142C45] text-white border-[#142C45]'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <div className="text-xs font-bold">{item.label}</div>
                    <div className={`text-[10px] ${urgency === item.id ? 'text-[#C9A45C]' : 'text-slate-500'}`}>
                      {item.time}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 5: Optional Add-ons */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                5. Optional Certification & Courier Add-ons
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-50">
                  <input
                    type="checkbox"
                    checked={needNotary}
                    onChange={(e) => setNeedNotary(e.target.checked)}
                    className="w-4 h-4 text-[#142C45] rounded-sm accent-[#142C45]"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-slate-900 block">Notarization Attestation (+₹600/doc)</span>
                    <span className="text-slate-500">Signatory verified before a commissioned Indian Notary Public with notary stamp.</span>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-50">
                  <input
                    type="checkbox"
                    checked={needCourier}
                    onChange={(e) => setNeedCourier(e.target.checked)}
                    className="w-4 h-4 text-[#142C45] rounded-sm accent-[#142C45]"
                  />
                  <div className="text-xs">
                    <span className="font-bold text-slate-900 block">Physical Hard Copy Courier Dispatch (+₹250 Pan-India)</span>
                    <span className="text-slate-500">Statically embossed corporate stamped prints sent via priority speed courier.</span>
                  </div>
                </label>
              </div>
            </div>

          </div>

          {/* Quotation Summary Card */}
          <div className="lg:col-span-5 bg-[#142C45] text-white rounded-2xl p-6 sm:p-8 shadow-xl sticky top-24 space-y-6">
            <div className="border-b border-slate-700/80 pb-4">
              <span className="text-xs font-bold text-[#C9A45C] uppercase tracking-wider">
                Instant Quotation Estimate
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                Estimated Project Investment
              </h3>
            </div>

            {/* Price Displays */}
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight tabular-nums">
                ₹{estimatedTotalINR.toLocaleString('en-IN')}
                <span className="text-sm font-normal text-slate-300 ml-2">
                  (Approx. ${estimatedTotalUSD} USD)
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Transparent estimate based on selected volume and urgency.
              </p>
            </div>

            {/* Turnaround Badge */}
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
              <span className="text-slate-300 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#18A6A0]" />
                <span>Estimated Turnaround:</span>
              </span>
              <span className="font-bold text-[#C9A45C]">{turnaroundText}</span>
            </div>

            {/* Itemized Breakdown */}
            <div className="space-y-2 text-xs border-t border-slate-700/80 pt-4">
              <div className="flex justify-between text-slate-300">
                <span>Base Translation ({pageCount} Pages):</span>
                <span className="font-medium text-white tabular-nums">₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Certification Statement on Letterhead:</span>
                <span className="font-medium text-emerald-400">FREE / Included</span>
              </div>
              {needNotary && (
                <div className="flex justify-between text-slate-300">
                  <span>Notary Public Seal ({pageCount} Documents):</span>
                  <span className="font-medium text-white tabular-nums">₹{notaryFee.toLocaleString('en-IN')}</span>
                </div>
              )}
              {needCourier && (
                <div className="flex justify-between text-slate-300">
                  <span>Priority Courier (Pan-India):</span>
                  <span className="font-medium text-white tabular-nums">₹{courierFee}</span>
                </div>
              )}
              <div className="flex justify-between text-slate-300">
                <span>4-Eye Editorial Review QA:</span>
                <span className="font-medium text-emerald-400">Included</span>
              </div>
            </div>

            {/* Proceed CTA */}
            <div className="pt-2">
              <button
                onClick={handleProceed}
                className="w-full py-3.5 px-4 text-xs sm:text-sm font-bold text-[#142C45] bg-[#C9A45C] hover:bg-[#d6b165] rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <UploadCloud className="w-4 h-4 text-[#142C45]" />
                <span>Upload Documents with this Estimate</span>
              </button>
              <p className="text-[11px] text-slate-400 text-center mt-2">
                No payment required upfront. Official quote provided after file review.
              </p>
            </div>

            <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400 pt-2 border-t border-slate-700/80">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#18A6A0]" />
                <span>Strict Non-Disclosure</span>
              </span>
              <span>·</span>
              <span>GST Invoicing Available</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
