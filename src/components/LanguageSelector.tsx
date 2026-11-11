import React, { useState } from 'react';
import { LANGUAGES, LanguageItem } from '../data/translationsData';
import { Globe, ArrowRight, CheckCircle2, Search, ArrowLeftRight, Sparkles } from 'lucide-react';

interface LanguageSelectorProps {
  onOpenUpload: (prefilledService?: string) => void;
  onNavigateTo: (sectionId: string) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ onOpenUpload, onNavigateTo }) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Interactive Pair Lookup State
  const [sourceCode, setSourceCode] = useState('de');
  const [targetCode, setTargetCode] = useState('en');

  const regions = [
    { id: 'all', label: 'All Regions' },
    { id: 'European', label: 'European' },
    { id: 'Asian', label: 'East & Southeast Asian' },
    { id: 'Middle Eastern', label: 'Middle Eastern' },
    { id: 'Indian', label: 'Indian (Indic Scripts)' }
  ];

  const filteredLanguages = LANGUAGES.filter(l => {
    const matchesRegion = selectedRegion === 'all' || l.region === selectedRegion;
    const matchesSearch = l.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          l.nativeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          l.popularFor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  const sourceLangObj = LANGUAGES.find(l => l.code === sourceCode) || {
    name: 'English',
    nativeName: 'English',
    popularFor: 'Global Business, Legal & Academia'
  };

  const targetLangObj = LANGUAGES.find(l => l.code === targetCode) || {
    name: 'English',
    nativeName: 'English',
    popularFor: 'Global Business, Consulates & Visa authorities'
  };

  return (
    <section id="languages" className="py-16 lg:py-24 bg-[#F8F9FA] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <span className="text-xs font-bold tracking-wider text-[#18A6A0] uppercase">
            Multilingual Scale & Script Fluency
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142C45] tracking-tight">
            Speak Globally. Communicate Without Boundaries.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            From European civil law certifications to East Asian technical specifications and Middle Eastern consular dossiers, our network of verified native translators preserves semantic nuance across scripts and cultures.
          </p>
        </div>

        {/* Interactive Language Pair Feasibility Explorer (Interactive Feature) */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 mb-14">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-slate-100 gap-4">
            <div>
              <h3 className="text-lg font-bold text-[#142C45]">
                Language Pair Feasibility & Turnaround Checker
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Select your source and target languages to view specialist availability and certified turnaround.
              </p>
            </div>
            <div className="text-xs text-slate-500 font-medium flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 self-start md:self-auto">
              <span className="w-2 h-2 rounded-full bg-[#18A6A0]" />
              <span>All 50+ Pairs Fully Supported</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
            {/* Source Selector */}
            <div className="md:col-span-5 space-y-1.5">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Source Document Language
              </label>
              <select
                value={sourceCode}
                onChange={(e) => setSourceCode(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm font-medium bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#18A6A0] focus:bg-white"
              >
                <option value="de">German (Deutsch)</option>
                <option value="fr">French (Français)</option>
                <option value="es">Spanish (Español)</option>
                <option value="ja">Japanese (日本語)</option>
                <option value="zh">Chinese (中文)</option>
                <option value="ar">Arabic (العربية)</option>
                <option value="ru">Russian (Русский)</option>
                <option value="it">Italian (Italiano)</option>
                <option value="pt">Portuguese (Português)</option>
                <option value="nl">Dutch (Nederlands)</option>
                <option value="en">English</option>
                <option value="hi">Hindi (हिन्दी)</option>
                <option value="kn">Kannada (ಕನ್ನಡ)</option>
                <option value="ta">Tamil (தமிழ்)</option>
                <option value="te">Telugu (తెలుగు)</option>
                <option value="ml">Malayalam (മലയാളം)</option>
              </select>
              <span className="text-[11px] text-slate-500 block truncate">
                Native script: {sourceLangObj.nativeName}
              </span>
            </div>

            {/* Swap Button / Divider */}
            <div className="md:col-span-2 flex justify-center py-2 md:py-0">
              <button
                type="button"
                onClick={() => {
                  const temp = sourceCode;
                  setSourceCode(targetCode);
                  setTargetCode(temp);
                }}
                className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-[#142C45] border border-slate-200 transition-colors shadow-xs"
                title="Swap Languages"
              >
                <ArrowLeftRight className="w-4 h-4" />
              </button>
            </div>

            {/* Target Selector */}
            <div className="md:col-span-5 space-y-1.5">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Target Translation Language
              </label>
              <select
                value={targetCode}
                onChange={(e) => setTargetCode(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm font-medium bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#18A6A0] focus:bg-white"
              >
                <option value="en">English (Universal Consular & Academic Standard)</option>
                <option value="de">German (Deutsch)</option>
                <option value="fr">French (Français)</option>
                <option value="es">Spanish (Español)</option>
                <option value="ja">Japanese (日本語)</option>
                <option value="ar">Arabic (العربية)</option>
                <option value="ru">Russian (Русский)</option>
                <option value="it">Italian (Italiano)</option>
                <option value="hi">Hindi (हिन्दी)</option>
              </select>
              <span className="text-[11px] text-slate-500 block truncate">
                Target script: {targetLangObj.nativeName}
              </span>
            </div>
          </div>

          {/* Feasibility Result Banner */}
          <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <span className="font-bold text-[#142C45]">Active Pair Verified: </span>
                <span className="text-slate-700 font-medium">{sourceLangObj.name} → {targetLangObj.name}</span>
                <span className="text-slate-400 mx-1.5">·</span>
                <span className="text-slate-500">Standard Turnaround: 24 – 48 Hours</span>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => onNavigateTo('calculator')}
                className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer w-full sm:w-auto text-center"
              >
                Price Calculator
              </button>
              <button
                onClick={() => onOpenUpload(`${sourceLangObj.name} to ${targetLangObj.name} Translation`)}
                className="px-4 py-2 text-xs font-bold text-white bg-[#142C45] hover:bg-[#1f3f61] rounded-lg transition-colors cursor-pointer w-full sm:w-auto text-center flex items-center justify-center gap-1.5"
              >
                <span>Upload Document</span>
                <ArrowRight className="w-3 h-3 text-[#C9A45C]" />
              </button>
            </div>
          </div>
        </div>

        {/* Directory Controls: Search and Region Filters */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-200/70 rounded-xl border border-slate-200 w-full sm:w-auto">
            {regions.map((region) => (
              <button
                key={region.id}
                onClick={() => setSelectedRegion(region.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  selectedRegion === region.id
                    ? 'bg-white text-[#142C45] shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {region.label}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search language or script..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3.5 py-2 text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#18A6A0]"
            />
          </div>
        </div>

        {/* Languages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredLanguages.map((lang) => (
            <div
              key={lang.code}
              className="bg-white rounded-xl border border-slate-200 p-5 hover:border-[#18A6A0] hover:shadow-md transition-all group"
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="text-base font-bold text-[#142C45] group-hover:text-[#2855A6] transition-colors">
                    {lang.name}
                  </h4>
                  <p className="text-xs font-serif-editorial text-[#C9A45C] font-semibold mt-0.5">
                    {lang.nativeName}
                  </p>
                </div>
                <span className="text-[10px] font-mono font-medium text-slate-400 bg-slate-50 border border-slate-200 px-1.5 py-0.5 rounded">
                  {lang.script}
                </span>
              </div>

              <div className="space-y-1 text-xs text-slate-600 pt-2 border-t border-slate-100">
                <div className="text-[11px] text-slate-500">
                  <span className="font-semibold text-slate-700">Common: </span>
                  {lang.commonPair}
                </div>
                <div className="text-[11px] text-slate-500 line-clamp-1">
                  <span className="font-semibold text-slate-700">Scope: </span>
                  {lang.popularFor}
                </div>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-500">
                  {lang.swornLinguists} Verified Linguists
                </span>
                <button
                  onClick={() => onOpenUpload(`${lang.name} Translation`)}
                  className="text-xs font-bold text-[#142C45] hover:text-[#2855A6] flex items-center gap-1 cursor-pointer"
                >
                  <span>Select</span>
                  <ArrowRight className="w-3 h-3 text-[#C9A45C]" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
