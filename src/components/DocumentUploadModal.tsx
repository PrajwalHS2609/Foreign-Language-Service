import React, { useState } from 'react';
import { X, UploadCloud, FileText, CheckCircle2, ShieldCheck, Lock, ArrowRight, AlertCircle } from 'lucide-react';

interface DocumentUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledService?: string;
}

export const DocumentUploadModal: React.FC<DocumentUploadModalProps> = ({
  isOpen,
  onClose,
  prefilledService = 'Certified Document Translation'
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    sourceLang: 'German',
    targetLang: 'English',
    service: prefilledService,
    urgency: 'standard',
    notes: ''
  });

  const [files, setFiles] = useState<File[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  if (!isOpen) return null;

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFiles = Array.from(e.dataTransfer.files);
      setFiles((prev) => [...prev, ...droppedFiles]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selected = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...selected]);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill out your contact details.');
      return;
    }
    if (files.length === 0) {
      alert('Please attach at least one document or scan.');
      return;
    }

    setIsSubmitting(true);
    // Simulate secure transmission
    let progress = 0;
    const interval = setInterval(() => {
      progress += 25;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setIsSubmitting(false);
        const ref = `TLG-${Math.floor(100000 + Math.random() * 900000)}`;
        setReferenceId(ref);
        setSubmitted(true);
      }
    }, 200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[92vh] overflow-y-auto relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-200">
          <div>
            <span className="text-[11px] font-bold text-[#18A6A0] uppercase tracking-wider flex items-center gap-1.5">
              <Lock className="w-3 h-3" />
              <span>TLS 1.3 Encrypted Document Submission</span>
            </span>
            <h3 className="text-xl font-bold text-[#142C45] mt-0.5">
              Secure Document Upload & Quotation
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-800 rounded-lg hover:bg-slate-100"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-xl font-bold text-[#142C45]">Documents Securely Uploaded!</h4>
            <div className="inline-block px-3.5 py-1 bg-slate-100 rounded-lg font-mono text-sm font-bold text-[#2855A6]">
              Tracking Docket: {referenceId}
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              We have safely received {files.length} document(s) from <strong>{formData.name}</strong> for <strong>{formData.sourceLang} → {formData.targetLang}</strong> translation. A project manager has initiated the word count and formatting review.
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 text-left space-y-1">
              <div><strong>Receipt Notice:</strong> Emailed to {formData.email}</div>
              <div><strong>Coordinator Follow-up:</strong> Within 30 minutes via WhatsApp/Call at {formData.phone}</div>
            </div>
            <div className="pt-2">
              <button
                onClick={onClose}
                className="w-full py-2.5 px-4 text-xs font-bold text-white bg-[#142C45] rounded-xl hover:bg-[#1a3858] transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="py-4 space-y-4 text-left">
            
            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Priyesh Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18A6A0]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Mobile / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98450 12890"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18A6A0]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Email Address (For Quote PDF) *
              </label>
              <input
                type="email"
                required
                placeholder="name@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18A6A0]"
              />
            </div>

            {/* Language Pair */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Source Language
                </label>
                <select
                  value={formData.sourceLang}
                  onChange={(e) => setFormData({ ...formData, sourceLang: e.target.value })}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18A6A0]"
                >
                  <option value="German">German</option>
                  <option value="French">French</option>
                  <option value="Spanish">Spanish</option>
                  <option value="Japanese">Japanese</option>
                  <option value="Chinese">Chinese</option>
                  <option value="Arabic">Arabic</option>
                  <option value="Russian">Russian</option>
                  <option value="Italian">Italian</option>
                  <option value="Portuguese">Portuguese</option>
                  <option value="Dutch">Dutch</option>
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Target Language
                </label>
                <select
                  value={formData.targetLang}
                  onChange={(e) => setFormData({ ...formData, targetLang: e.target.value })}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18A6A0]"
                >
                  <option value="English">English (Consular Standard)</option>
                  <option value="German">German</option>
                  <option value="French">French</option>
                  <option value="Spanish">Spanish</option>
                  <option value="Japanese">Japanese</option>
                  <option value="Arabic">Arabic</option>
                  <option value="Russian">Russian</option>
                  <option value="Hindi">Hindi</option>
                </select>
              </div>
            </div>

            {/* Drag & Drop File Upload Area */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Upload Scans or Files (PDF, JPG, PNG, DOCX up to 25MB) *
              </label>
              
              <div
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                className={`border-2 border-dashed rounded-xl p-5 text-center transition-all cursor-pointer ${
                  dragActive ? 'border-[#18A6A0] bg-[#18A6A0]/5' : 'border-slate-300 hover:border-[#142C45] bg-slate-50'
                }`}
                onClick={() => document.getElementById('modalFileInput')?.click()}
              >
                <UploadCloud className="w-8 h-8 text-slate-400 mx-auto mb-1.5" />
                <span className="text-xs font-bold text-slate-700 block">
                  Click to select files or drop here
                </span>
                <span className="text-[11px] text-slate-500">
                  Multiple pages and batch files supported
                </span>
                <input
                  id="modalFileInput"
                  type="file"
                  multiple
                  className="hidden"
                  accept=".pdf,.docx,.doc,.jpg,.jpeg,.png,.tiff"
                  onChange={handleFileInput}
                />
              </div>

              {/* Uploaded File List */}
              {files.length > 0 && (
                <div className="mt-3 space-y-1.5">
                  {files.map((file, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-slate-100 border border-slate-200 text-xs">
                      <div className="flex items-center gap-2 truncate">
                        <FileText className="w-4 h-4 text-[#2855A6] shrink-0" />
                        <span className="truncate font-medium">{file.name}</span>
                        <span className="text-slate-400 text-[11px]">({(file.size / 1024).toFixed(0)} KB)</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile(idx)}
                        className="text-rose-500 hover:text-rose-700 font-bold px-1.5"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Turnaround Preference */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Turnaround Urgency
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'standard', label: 'Standard (48-72h)' },
                  { id: 'express', label: 'Express (24h)' },
                  { id: 'rush', label: 'Priority / Urgent' }
                ].map((u) => (
                  <button
                    key={u.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, urgency: u.id })}
                    className={`py-2 px-2 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                      formData.urgency === u.id
                        ? 'bg-[#142C45] text-white border-[#142C45]'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {u.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Upload Progress Bar if submitting */}
            {isSubmitting && (
              <div className="space-y-1 pt-1">
                <div className="flex justify-between text-xs text-slate-600 font-medium">
                  <span>Encrypting & Uploading...</span>
                  <span>{uploadProgress}%</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#18A6A0] transition-all duration-200"
                    style={{ width: `${uploadProgress}%` }}
                  />
                </div>
              </div>
            )}

            {/* Buttons */}
            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2.5 text-xs font-bold text-white bg-[#142C45] hover:bg-[#1f3f61] rounded-xl shadow-sm transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
              >
                <span>Submit Documents for Free Quote</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C9A45C]" />
              </button>
            </div>

            <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-100 flex items-center justify-between">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#18A6A0]" />
                <span>NDA Protected & Confidential</span>
              </span>
              <span>Never shared with third parties</span>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
