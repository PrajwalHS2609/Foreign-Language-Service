import React, { useState } from 'react';
import { OFFICE_LOCATIONS } from '../data/translationsData';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2, ShieldCheck, Lock, UploadCloud, FileText } from 'lucide-react';

interface ContactSectionProps {
  onOpenUpload: (prefilledService?: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenUpload }) => {
  const [selectedCityIndex, setSelectedCityIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    sourceLang: 'German',
    targetLang: 'English',
    service: 'Document Translation',
    pages: '2',
    date: '',
    message: '',
    fileName: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, fileName: e.target.files[0].name });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please complete the required fields (Name, Email, Phone).');
      return;
    }
    const generatedRef = `TLG-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceId(generatedRef);
    setSubmitted(true);
  };

  const currentOffice = OFFICE_LOCATIONS[selectedCityIndex];

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <span className="text-xs font-bold tracking-wider text-[#18A6A0] uppercase">
            Direct Coordination & Enquiries
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#142C45] tracking-tight">
            Contact Our Translation Offices Across India
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Reach out directly to our Bengaluru headquarters or our liaison teams in Mumbai and New Delhi. You can submit documents online for rapid digital quotation or visit during working hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Comprehensive Enquiry Form with Upload */}
          <div className="lg:col-span-7 bg-[#F8F9FA] rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <div className="pb-4 mb-6 border-b border-slate-200 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#142C45]">
                  Detailed Translation & Quotation Form
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Receive an itemized quote and turnaround confirmation within 30 minutes.
                </p>
              </div>
              <ShieldCheck className="w-6 h-6 text-[#18A6A0]" />
            </div>

            {submitted ? (
              <div className="py-10 text-center space-y-4 bg-white rounded-xl border border-slate-200 p-6">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-bold text-[#142C45]">Enquiry Successfully Registered!</h4>
                <div className="inline-block px-3 py-1 bg-slate-100 rounded-md font-mono text-xs font-bold text-[#2855A6]">
                  Reference ID: {referenceId}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Your enquiry for <strong>{formData.sourceLang} → {formData.targetLang}</strong> translation has been assigned to our senior translation desk. An official quotation has been queued to <strong>{formData.email}</strong> and our team will call/WhatsApp you at <strong>{formData.phone}</strong>.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ ...formData, fileName: '', message: '' });
                    }}
                    className="px-5 py-2 text-xs font-semibold text-[#142C45] bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                  >
                    Submit Another Document
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Manjunath Verma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18A6A0]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Company / Institution (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Legal Firm / University"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18A6A0]"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18A6A0]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Mobile Number (WhatsApp Preferred) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98450 12890"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18A6A0]"
                    />
                  </div>
                </div>

                {/* Languages Pair */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Source Language
                    </label>
                    <select
                      value={formData.sourceLang}
                      onChange={(e) => setFormData({ ...formData, sourceLang: e.target.value })}
                      className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18A6A0]"
                    >
                      <option value="German">German (Deutsch)</option>
                      <option value="French">French (Français)</option>
                      <option value="Spanish">Spanish (Español)</option>
                      <option value="Japanese">Japanese (日本語)</option>
                      <option value="Chinese">Chinese (中文)</option>
                      <option value="Arabic">Arabic (العربية)</option>
                      <option value="Russian">Russian (Русский)</option>
                      <option value="Italian">Italian (Italiano)</option>
                      <option value="Portuguese">Portuguese (Português)</option>
                      <option value="English">English</option>
                      <option value="Hindi">Hindi (हिन्दी)</option>
                      <option value="Kannada">Kannada (ಕನ್ನಡ)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Target Language
                    </label>
                    <select
                      value={formData.targetLang}
                      onChange={(e) => setFormData({ ...formData, targetLang: e.target.value })}
                      className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18A6A0]"
                    >
                      <option value="English">English (Global / Consular Standard)</option>
                      <option value="German">German (Deutsch)</option>
                      <option value="French">French (Français)</option>
                      <option value="Spanish">Spanish (Español)</option>
                      <option value="Japanese">Japanese (日本語)</option>
                      <option value="Arabic">Arabic (العربية)</option>
                      <option value="Russian">Russian (Русский)</option>
                      <option value="Hindi">Hindi (हिन्दी)</option>
                    </select>
                  </div>
                </div>

                {/* Service & Pages */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Service Required
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18A6A0]"
                    >
                      <option value="Document Translation">Document Translation (Personal/Academic)</option>
                      <option value="Certified Translation">Certified Translation (With Company Seal)</option>
                      <option value="Legal Translation">Legal Translation (Court/Agreements)</option>
                      <option value="Technical Translation">Technical Manual / Engineering</option>
                      <option value="Medical Translation">Medical & Clinical Reports</option>
                      <option value="Immigration Translation">Immigration & Consular Dossier</option>
                      <option value="Website & Software">Website & Software Localisation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Estimated Page Count
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="500"
                      value={formData.pages}
                      onChange={(e) => setFormData({ ...formData, pages: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18A6A0]"
                    />
                  </div>
                </div>

                {/* Document Upload Drop Area */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Attach Document Scans (PDF, JPG, PNG, DOCX up to 25MB)
                  </label>
                  <label className="border-2 border-dashed border-slate-300 hover:border-[#18A6A0] bg-white rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer transition-colors group">
                    <UploadCloud className="w-6 h-6 text-slate-400 group-hover:text-[#18A6A0] transition-colors mb-1" />
                    {formData.fileName ? (
                      <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                        <FileText className="w-3.5 h-3.5" />
                        <span>Attached: {formData.fileName}</span>
                      </span>
                    ) : (
                      <>
                        <span className="text-xs font-semibold text-slate-700 group-hover:text-[#142C45]">
                          Click to browse or drag file here
                        </span>
                        <span className="text-[11px] text-slate-400 mt-0.5">
                          PDF, DOCX, JPG, PNG supported (Encrypted transmission)
                        </span>
                      </>
                    )}
                    <input
                      type="file"
                      className="hidden"
                      accept=".pdf,.docx,.doc,.jpg,.jpeg,.png,.tiff"
                      onChange={handleFileChange}
                    />
                  </label>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Special Instructions / Receiving Authority Details (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Submitting to Uni-Assist Germany, need grading footnote. Delivery required by Friday."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18A6A0]"
                  />
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 text-xs sm:text-sm font-bold text-white bg-[#142C45] hover:bg-[#1a3858] rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-[#C9A45C]" />
                    <span>Submit Request for Free Translation Quotation</span>
                  </button>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                  <span className="flex items-center gap-1">
                    <Lock className="w-3 h-3 text-[#18A6A0]" />
                    <span>Encrypted & Protected Under Strict NDA</span>
                  </span>
                  <span>Instant Confirmation</span>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Office Locations & Direct Contacts */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* City Selector Tabs */}
            <div className="p-1 bg-slate-100 rounded-xl border border-slate-200 flex">
              {OFFICE_LOCATIONS.map((loc, idx) => (
                <button
                  key={loc.city}
                  onClick={() => setSelectedCityIndex(idx)}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    selectedCityIndex === idx
                      ? 'bg-white text-[#142C45] shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {loc.city.split(' ')[0]}
                </button>
              ))}
            </div>

            {/* Active Office Card */}
            <div className="bg-[#142C45] text-white rounded-2xl p-6 sm:p-7 shadow-md space-y-5">
              <div>
                <span className="text-[11px] font-bold text-[#C9A45C] uppercase tracking-wider block">
                  {currentOffice.tag}
                </span>
                <h4 className="text-xl font-bold text-white mt-1">
                  {currentOffice.city}
                </h4>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#18A6A0] shrink-0 mt-1" />
                  <span className="leading-relaxed">{currentOffice.address}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#18A6A0] shrink-0" />
                  <a href={`tel:${currentOffice.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white font-medium">
                    {currentOffice.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <a href={`https://wa.me/${currentOffice.mobile.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-white font-medium">
                    {currentOffice.mobile} (WhatsApp Direct)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#18A6A0] shrink-0" />
                  <a href={`mailto:${currentOffice.email}`} className="hover:text-white">
                    {currentOffice.email}
                  </a>
                </div>

                <div className="flex items-center gap-3 pt-1 border-t border-slate-700/80">
                  <Clock className="w-4 h-4 text-[#C9A45C] shrink-0" />
                  <span>{currentOffice.hours}</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${currentOffice.mobile.replace(/[^0-9]/g, '')}?text=Hello%20TransLumina%2C%20I%20am%20enquiring%20about%20translation%20services%20at%20your%20${currentOffice.city.split(' ')[0]}%20office.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp ({currentOffice.city.split(' ')[0]})</span>
                </a>
              </div>
            </div>

            {/* Quick Contact Numbers Box */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <h5 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                Emergency & Same-Day Translation Desk
              </h5>
              <p className="text-xs text-slate-600 leading-relaxed">
                Need urgent certified translation for a next-day visa appointment or court hearing? Call our 24/7 priority project manager directly:
              </p>
              <div className="flex items-center gap-2 text-sm font-bold text-[#142C45]">
                <Phone className="w-4 h-4 text-[#18A6A0]" />
                <a href="tel:+919845012890" className="hover:underline">
                  +91 98450 12890 (Priority Hotline)
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
