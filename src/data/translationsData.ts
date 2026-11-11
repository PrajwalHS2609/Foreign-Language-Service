export interface ServiceItem {
  id: string;
  title: string;
  category: 'personal' | 'legal' | 'technical' | 'business' | 'digital';
  subtitle: string;
  description: string;
  documents: string[];
  turnaround: string;
  certificationAvailable: boolean;
  idealFor: string;
}

export interface LanguageItem {
  code: string;
  name: string;
  nativeName: string;
  region: 'European' | 'Asian' | 'Middle Eastern' | 'Indian';
  script: string;
  sampleGreeting: string;
  commonPair: string;
  popularFor: string;
  swornLinguists: number;
}

export interface IndustryItem {
  id: string;
  name: string;
  description: string;
  requirements: string[];
  keyDocuments: string[];
  caseHighlight: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'certified' | 'pricing' | 'confidentiality';
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  content: string[];
}

export interface SampleTranslation {
  id: string;
  title: string;
  sourceLang: string;
  targetLang: string;
  documentType: string;
  industry: string;
  sourceSnippet: string;
  targetSnippet: string;
  linguistNotes: string;
}

// 12 Major Foreign Language Translation Services
export const SERVICES: ServiceItem[] = [
  {
    id: 'document-translation',
    title: 'Document Translation',
    category: 'personal',
    subtitle: 'High-precision translation for personal, civil, and academic records.',
    description: 'Accurate translation of official personal records, identity cards, civil registrations, and certificates with strict adherence to source layouts and nomenclature.',
    documents: ['Birth & Marriage Certificates', 'Passports & National IDs', 'Police Clearance Certificates (PCC)', 'Educational Mark Sheets & Diplomas', 'Affidavits & Declarations'],
    turnaround: '24 – 48 Hours',
    certificationAvailable: true,
    idealFor: 'Individuals applying for PR, higher education, or overseas employment.'
  },
  {
    id: 'legal-translation',
    title: 'Legal Translation',
    category: 'legal',
    subtitle: 'Certified translation for jurisprudence, cross-border contracts, and court filings.',
    description: 'Handled exclusively by legal linguists with expertise in civil law, common law, and international arbitration procedures to preserve legal validity.',
    documents: ['Commercial Contracts & NDAs', 'Court Judgments & Petitions', 'Power of Attorney (PoA)', 'Patents & IP Filings', 'Arbitration Submissions'],
    turnaround: '48 – 72 Hours',
    certificationAvailable: true,
    idealFor: 'Corporate law firms, in-house general counsels, and international litigants.'
  },
  {
    id: 'technical-translation',
    title: 'Technical Translation',
    category: 'technical',
    subtitle: 'Domain-accurate translation for engineering, industrial machinery, and aerospace.',
    description: 'Precise translation of complex scientific schematics, user guides, engineering standards, and patent documentation using standardized glossaries.',
    documents: ['User Operation Manuals', 'Engineering Specifications', 'Bill of Materials (BOM)', 'Standard Operating Procedures (SOPs)', 'Safety Data Sheets (SDS)'],
    turnaround: '3 – 5 Business Days',
    certificationAvailable: true,
    idealFor: 'Automotive OEMs, manufacturing plants, and heavy engineering exporters.'
  },
  {
    id: 'medical-translation',
    title: 'Medical Translation',
    category: 'technical',
    subtitle: 'Rigorous linguistic validation for healthcare, clinical trials, and pharma.',
    description: 'Medical translations conducted by certified healthcare professionals and pharmacologists to ensure patient safety and global regulatory compliance.',
    documents: ['Clinical Study Reports (CSR)', 'Informed Consent Forms (ICF)', 'Patient Medical Records', 'Summary of Product Characteristics (SmPC)', 'Medical Device Manuals'],
    turnaround: '48 – 96 Hours',
    certificationAvailable: true,
    idealFor: 'CROs, pharmaceutical enterprises, hospital chains, and medical device exporters.'
  },
  {
    id: 'business-translation',
    title: 'Business & Corporate Translation',
    category: 'business',
    subtitle: 'Elevate international investor relations, stakeholder communication, and bids.',
    description: 'Tailored for multinational corporate communication, cross-border M&A transactions, financial disclosures, and strategic market expansion.',
    documents: ['Annual Reports & Balance Sheets', 'M&A Due Diligence Filings', 'Corporate Governance Charters', 'Global RFP & Tender Bids', 'Investor Pitch Decks'],
    turnaround: '2 – 4 Business Days',
    certificationAvailable: true,
    idealFor: 'Multinational corporations, venture funds, and export-import houses.'
  },
  {
    id: 'academic-translation',
    title: 'Academic Translation',
    category: 'personal',
    subtitle: 'Accredited translation for university admissions and academic evaluations.',
    description: 'Specialized translation of scholastic documents aligned with guidelines of Uni-Assist (Germany), WES, Campus France, and international universities.',
    documents: ['University Degree Certificates', 'Consolidated Academic Transcripts', 'Syllabus Descriptions', 'Recommendation Letters (LOR)', 'Statement of Purpose (SOP)'],
    turnaround: '24 – 48 Hours',
    certificationAvailable: true,
    idealFor: 'Indian students pursuing Masters, MBA, or Doctoral programs abroad.'
  },
  {
    id: 'immigration-translation',
    title: 'Immigration & Visa Translation',
    category: 'personal',
    subtitle: 'Flawless document preparation for global consular and embassy submissions.',
    description: 'Meticulously formatted translations formatted to meet the strict criteria of embassies including Germany, France, Spain, Italy, UAE, and the USA.',
    documents: ['Visa Application Dossiers', 'Bank Statements & ITR Filings', 'Employment & Experience Letters', 'Sponsorship Declarations', 'Travel Affidavits'],
    turnaround: '24 – 48 Hours',
    certificationAvailable: true,
    idealFor: 'Visa consultants, corporate transferees, and permanent residency applicants.'
  },
  {
    id: 'website-software-translation',
    title: 'Website & Software Localisation',
    category: 'digital',
    subtitle: 'Native multilingual user experiences for web apps, mobile apps, and SaaS.',
    description: 'Beyond literal translation: comprehensive cultural adaptation, string extraction (.json, .po, .xliff), UI truncation testing, and SEO keyword localisation.',
    documents: ['Web Platforms & Mobile Apps', 'Software UI Strings & Strings Tables', 'E-Commerce Catalogues', 'Terms of Service & Privacy Policies', 'Help Centers & Knowledge Bases'],
    turnaround: 'Sprint / Project Based',
    certificationAvailable: false,
    idealFor: 'SaaS unicorns, tech scaleups, and direct-to-consumer international brands.'
  },
  {
    id: 'certified-translation',
    title: 'Certified Translation',
    category: 'legal',
    subtitle: 'Official certified statements on letterhead with authorized stamp & seal.',
    description: 'Formal certification declarations bearing the translator’s credentials, company registration, date, and official stamp attesting to verbatim fidelity.',
    documents: ['All official certificates', 'Court evidence documentation', 'Immigration dossiers', 'Corporate registration deeds', 'International regulatory submissions'],
    turnaround: 'Same Day to 48 Hours',
    certificationAvailable: true,
    idealFor: 'Legal proceedings, consulate visa appointments, and government verifications.'
  },
  {
    id: 'proofreading-editing',
    title: 'Proofreading & Editing',
    category: 'personal',
    subtitle: 'Independent dual-pass linguistic audit for existing translated materials.',
    description: 'A second senior native linguist verifies semantic accuracy, dialectal nuance, punctuation, and industry-specific terminology against the source document.',
    documents: ['Existing translated manuscripts', 'Bilingual contracts', 'Marketing collateral', 'Doctoral theses & journals', 'Pre-publication books'],
    turnaround: '24 – 48 Hours',
    certificationAvailable: true,
    idealFor: 'Publishers, academic authors, and quality-conscious marketing teams.'
  },
  {
    id: 'transcription-services',
    title: 'Multilingual Transcription',
    category: 'digital',
    subtitle: 'Time-coded human audio and video transcription across multiple languages.',
    description: 'Accurate transcription from audio/video recordings directly into the source language or translated into English and other target foreign tongues.',
    documents: ['Legal Depositions & Hearings', 'Business Conference Recordings', 'Market Research Focus Groups', 'Interviews & Podcasts', 'Academic Research Recordings'],
    turnaround: '48 – 72 Hours',
    certificationAvailable: true,
    idealFor: 'Media houses, legal investigators, and qualitative research firms.'
  },
  {
    id: 'interpretation-services',
    title: 'Interpretation Services',
    category: 'business',
    subtitle: 'Simultaneous and consecutive professional interpreters for global dialogue.',
    description: 'Subject-matter expert interpreters available for in-person bilateral negotiations, executive delegations, or virtual video conferences across India.',
    documents: ['Boardroom Bilateral Talks', 'International Trade Expos', 'Court & Police Depositions', 'Medical Consultations', 'Virtual Zoom/Teams Summits'],
    turnaround: 'Advance Booking Required',
    certificationAvailable: true,
    idealFor: 'Diplomatic missions, multinational boards, and trade conference organizers.'
  }
];

// Languages We Translate (Categorized)
export const LANGUAGES: LanguageItem[] = [
  // European
  { code: 'de', name: 'German', nativeName: 'Deutsch', region: 'European', script: 'Latin', sampleGreeting: 'Guten Tag', commonPair: 'German ↔ English', popularFor: 'Engineering, Study in Germany (Uni-Assist), Visas', swornLinguists: 14 },
  { code: 'fr', name: 'French', nativeName: 'Français', region: 'European', script: 'Latin', sampleGreeting: 'Bonjour', commonPair: 'French ↔ English', popularFor: 'Campus France, Quebec PR, Luxury & Aerospace', swornLinguists: 16 },
  { code: 'es', name: 'Spanish', nativeName: 'Español', region: 'European', script: 'Latin', sampleGreeting: 'Hola', commonPair: 'Spanish ↔ English', popularFor: 'LATAM Trade, Spanish Consulate, Legal contracts', swornLinguists: 12 },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', region: 'European', script: 'Latin', sampleGreeting: 'Olá', commonPair: 'Portuguese ↔ English', popularFor: 'Portugal D7/Golden Visa, Brazil Commerce', swornLinguists: 8 },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', region: 'European', script: 'Latin', sampleGreeting: 'Ciao', commonPair: 'Italian ↔ English', popularFor: 'Italian Consulate, Automotive & Fashion design', swornLinguists: 9 },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', region: 'European', script: 'Cyrillic', sampleGreeting: 'Здравствуйте', commonPair: 'Russian ↔ English', popularFor: 'Defense, Medical studies, Energy & Metallurgy', swornLinguists: 11 },
  { code: 'nl', name: 'Dutch', nativeName: 'Nederlands', region: 'European', script: 'Latin', sampleGreeting: 'Hallo', commonPair: 'Dutch ↔ English', popularFor: 'Netherlands MVV Visa, Tech & Logistics', swornLinguists: 7 },
  { code: 'pl', name: 'Polish', nativeName: 'Polski', region: 'European', script: 'Latin', sampleGreeting: 'Dzień dobry', commonPair: 'Polish ↔ English', popularFor: 'EU Work Permits, IT offshoring', swornLinguists: 6 },
  { code: 'ro', name: 'Romanian', nativeName: 'Română', region: 'European', script: 'Latin', sampleGreeting: 'Bună ziua', commonPair: 'Romanian ↔ English', popularFor: 'Medical transcripts, EU Employment', swornLinguists: 5 },
  { code: 'el', name: 'Greek', nativeName: 'Ελληνικά', region: 'European', script: 'Greek', sampleGreeting: 'Γειά σας', commonPair: 'Greek ↔ English', popularFor: 'Maritime, Shipping, Golden Visa', swornLinguists: 4 },

  // Asian
  { code: 'zh', name: 'Chinese (Mandarin)', nativeName: '中文 (简体/繁體)', region: 'Asian', script: 'Hanzi', sampleGreeting: '你好', commonPair: 'Chinese ↔ English', popularFor: 'Electronics OEM, Supply Chain, Taiwan Trade', swornLinguists: 15 },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', region: 'Asian', script: 'Kanji / Kana', sampleGreeting: 'こんにちは', commonPair: 'Japanese ↔ English', popularFor: 'JLPT N1/N2 Legal, Automotive, IT patents', swornLinguists: 14 },
  { code: 'ko', name: 'Korean', nativeName: '한국어', region: 'Asian', script: 'Hangul', sampleGreeting: '안녕하세요', commonPair: 'Korean ↔ English', popularFor: 'Semiconductor, Gaming, Corporate JV', swornLinguists: 10 },
  { code: 'th', name: 'Thai', nativeName: 'ไทย', region: 'Asian', script: 'Thai', sampleGreeting: 'สวัสดี', commonPair: 'Thai ↔ English', popularFor: 'Tourism, Medical Tourism, Agro-processing', swornLinguists: 6 },
  { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', region: 'Asian', script: 'Latin', sampleGreeting: 'Xin chào', commonPair: 'Vietnamese ↔ English', popularFor: 'Manufacturing transfer, Textile supply', swornLinguists: 7 },
  { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', region: 'Asian', script: 'Latin', sampleGreeting: 'Halo', commonPair: 'Indonesian ↔ English', popularFor: 'Mining, FinTech, Consumer products', swornLinguists: 6 },

  // Middle Eastern
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', region: 'Middle Eastern', script: 'Arabic (RTL)', sampleGreeting: 'مرحباً', commonPair: 'Arabic ↔ English', popularFor: 'UAE MOFA, Saudi Vision 2030, Gulf Employment', swornLinguists: 18 },
  { code: 'fa', name: 'Persian (Farsi)', nativeName: 'فارسی', region: 'Middle Eastern', script: 'Perso-Arabic', sampleGreeting: 'سلام', commonPair: 'Persian ↔ English', popularFor: 'Academic records, Trade & Cultural exchange', swornLinguists: 5 },
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', region: 'Middle Eastern', script: 'Latin', sampleGreeting: 'Merhaba', commonPair: 'Turkish ↔ English', popularFor: 'Cross-continental Logistics, Construction', swornLinguists: 7 },
  { code: 'he', name: 'Hebrew', nativeName: 'עברית', region: 'Middle Eastern', script: 'Hebrew (RTL)', sampleGreeting: 'שלום', commonPair: 'Hebrew ↔ English', popularFor: 'Defense, Agri-tech, Cyber Security R&D', swornLinguists: 5 },

  // Indian
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', region: 'Indian', script: 'Devanagari', sampleGreeting: 'नमस्ते', commonPair: 'Hindi ↔ Foreign Languages', popularFor: 'National Gazettes, Central Govt filings', swornLinguists: 22 },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', region: 'Indian', script: 'Kannada', sampleGreeting: 'ನಮಸ್ಕಾರ', commonPair: 'Kannada ↔ English/Foreign', popularFor: 'Karnataka Revenue records, Bangalore Tech', swornLinguists: 12 },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', region: 'Indian', script: 'Tamil', sampleGreeting: 'வணக்கம்', commonPair: 'Tamil ↔ English/Foreign', popularFor: 'Singapore/Malaysia Visas, Land Deeds', swornLinguists: 14 },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', region: 'Indian', script: 'Telugu', sampleGreeting: 'నమస్కారం', commonPair: 'Telugu ↔ English/Foreign', popularFor: 'US/EU Student transcripts, Civil records', swornLinguists: 13 },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം', region: 'Indian', script: 'Malayalam', sampleGreeting: 'നമസ്കാരം', commonPair: 'Malayalam ↔ English/Arabic', popularFor: 'Gulf Nursing credentials, Middle East Visas', swornLinguists: 15 },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', region: 'Indian', script: 'Bengali', sampleGreeting: 'নমস্কার', commonPair: 'Bengali ↔ English/Foreign', popularFor: 'Academic degrees, International trade', swornLinguists: 10 },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी', region: 'Indian', script: 'Devanagari', sampleGreeting: 'नमस्कार', commonPair: 'Marathi ↔ English/Foreign', popularFor: 'Bombay High Court filings, Land records', swornLinguists: 11 },
  { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી', region: 'Indian', script: 'Gujarati', sampleGreeting: 'નમસ્તે', commonPair: 'Gujarati ↔ English/Foreign', popularFor: 'Diamond trade, UK/US immigration records', swornLinguists: 9 },
  { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ', region: 'Indian', script: 'Gurmukhi', sampleGreeting: 'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ', commonPair: 'Punjabi ↔ English/Foreign', popularFor: 'Canada, UK & Australia migration dossiers', swornLinguists: 12 }
];

// Industry-Specific Translation Solutions
export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'legal',
    name: 'Legal & Law Firms',
    description: 'Bilingual legal precision with court-tested terminology and confidentiality for litigations and arbitration.',
    requirements: ['Verbatim semantic fidelity', 'Sworn certification statements', 'Strict non-disclosure compliance'],
    keyDocuments: ['Cross-Border Mergers & Acquisitions', 'Commercial Arbitration Pleadings', 'Bilingual NDAs & Licensing Agreements', 'Court Affidavits & Power of Attorney'],
    caseHighlight: 'Over 350+ bilingual briefs translated for Singapore & London international arbitration disputes.'
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Medical',
    description: 'Life sciences and clinical document translation preserving precision where human health is at stake.',
    requirements: ['Medical doctor linguist review', 'Pharmacovigilance terminology compliance', 'GDPR & HIPAA data handling'],
    keyDocuments: ['Clinical Study Reports (CSR)', 'Patient Information Leaflets (PIL)', 'Informed Consent Forms (ICF)', 'Hospital Discharge Summaries'],
    caseHighlight: 'Multi-center clinical trial documentation localized across German, French, and Japanese for a Bangalore biotech firm.'
  },
  {
    id: 'education',
    name: 'Education & Universities',
    description: 'Flawless academic transcript and diploma evaluation translation for study abroad applicants.',
    requirements: ['Grading system conversion notes', 'Uni-Assist & WES accepted formatting', 'Official university stamp preservation'],
    keyDocuments: ['Degree Certificates & Mark Sheets', 'Course Syllabus Equivalencies', 'Professorial Letters of Recommendation', 'School Leaving Certificates'],
    caseHighlight: 'Helped 12,000+ Indian graduate students submit verified German and French dossier translations.'
  },
  {
    id: 'immigration',
    name: 'Immigration & Overseas Employment',
    description: 'Dossier preparation for consulates, high commissions, and international immigration authorities.',
    requirements: ['Acceptance by receiving embassies', 'Apostille guidance assistance', 'Bilingual identity record layout matching'],
    keyDocuments: ['Birth & Marriage Certificates', 'Police Clearance Certificates (PCC)', 'Experience & Relocation Letters', 'Financial Proof & Bank Statements'],
    caseHighlight: 'Trusted partner for leading Bangalore and Mumbai immigration consultancies for German Opportunity Cards & EU Blue Cards.'
  },
  {
    id: 'technology',
    name: 'Information Technology & SaaS',
    description: 'Software localisation, string translation, and technical manuals for digital products expanding globally.',
    requirements: ['Code tag preservation (HTML/JSON/YAML)', 'Terminology management via CAT tools', 'UI context truncation checks'],
    keyDocuments: ['SaaS User Interfaces & Dashboards', 'Developer API Documentation', 'Terms of Service & DPA Agreements', 'App Store & Play Store Product Pages'],
    caseHighlight: 'Localized a SaaS enterprise platform into Japanese, German, and Spanish with continuous CI/CD localization pipelines.'
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing & Engineering',
    description: 'Safety-critical technical documentation for automotive, industrial machinery, and precision components.',
    requirements: ['ISO 17100 aligned engineering glossaries', 'CAD diagram callout translation', 'Machinery safety warnings compliance'],
    keyDocuments: ['Heavy Machinery Operator Manuals', 'Engineering Schematics & Blueprints', 'Material Safety Data Sheets (MSDS)', 'Factory Assembly Line Protocols'],
    caseHighlight: 'Over 2,000 pages of CNC machine manuals translated from German to English for Indian tier-1 automotive suppliers.'
  },
  {
    id: 'finance',
    name: 'Finance & Banking',
    description: 'High-stakes financial translation for annual reports, investor prospectuses, and cross-border taxation.',
    requirements: ['IFRS and US GAAP accounting fluency', 'Double-pass numeric accuracy checks', 'Strict data encryption protocols'],
    keyDocuments: ['Statutory Audit Reports', 'Fund Prospectuses & Factsheets', 'Credit Rating Reports', 'Tax Clearance & Form 16 Equivalents'],
    caseHighlight: 'Translated comprehensive audit filings and compliance documents for European banks operating in India.'
  },
  {
    id: 'international-business',
    name: 'International Business & Trade',
    description: 'Empower cross-border trade, customs clearance, and global brand positioning in overseas markets.',
    requirements: ['Customs tariff nomenclature accuracy', 'Cultural brand resonance', 'Speedy turnaround for export consignments'],
    keyDocuments: ['Commercial Invoices & Bills of Lading', 'Certificates of Origin', 'Distributor & Agency Agreements', 'Global Tender Bids & RFPs'],
    caseHighlight: 'Supported Indian engineering exporters bidding on major public infrastructure tenders in the Middle East and Latin America.'
  }
];

// Official Document Differences & Compliance
export const OFFICIAL_DOC_TYPES = [
  {
    title: 'Standard Translation',
    description: 'Direct translation of documents by a qualified professional linguist without formal certifications or legal declarations.',
    useCase: 'Internal corporate understanding, business correspondence, informal draft evaluations, marketing research.',
    authorityAcceptance: 'Not accepted by government authorities, courts, or visa consulates for official record changes.',
    badge: 'Informational Use'
  },
  {
    title: 'Certified Translation',
    description: 'Translation accompanied by a formal signed statement on corporate letterhead bearing our official seal, translator credentials, date, and declaration of completeness and accuracy.',
    useCase: 'University admissions (Uni-Assist, Campus France), foreign employment, visa applications, general civil registration.',
    authorityAcceptance: 'Widely accepted by overseas universities, consulates, and corporate employers.',
    badge: 'Consulate & Academic'
  },
  {
    title: 'Notarized Translation',
    description: 'A certified translation where the translator or authorized company representative signs the certification statement before a commissioned Notary Public, who affixes a notary stamp and seal.',
    useCase: 'Court submissions, legal proceedings, foreign corporate entity registrations, certain embassy visa files.',
    authorityAcceptance: 'Required when institutions specifically mandate verification of the translator’s identity.',
    badge: 'Legal & Judicial'
  },
  {
    title: 'Apostille (MEA)',
    description: 'An international certification under the Hague Apostille Convention of 1961, issued in India by the Ministry of External Affairs (MEA) validating the official signature on a public document.',
    useCase: 'Public documents originating in India to be submitted in Hague member countries (e.g. Germany, France, USA, Japan).',
    authorityAcceptance: 'Legally required for public documents in 120+ Hague convention countries.',
    badge: 'Inter-Governmental'
  },
  {
    title: 'Embassy / Consular Attestation',
    description: 'Official legalization performed directly by the diplomatic mission (embassy or consulate) of the destination country for non-Hague nations (such as UAE, Qatar, Kuwait).',
    useCase: 'Gulf visas, work permits in non-Hague member states, foreign business branch setup.',
    authorityAcceptance: 'Mandatory for official validity in non-Hague destination countries.',
    badge: 'Diplomatic Mission'
  }
];

// 6-Step Visual Process
export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Submit Your Document',
    description: 'Upload your scanned document or PDF securely through our portal or share via WhatsApp/email with your desired source and target language pairs.',
    highlight: 'Instant receipt & automated file scan'
  },
  {
    step: '02',
    title: 'Requirement Assessment',
    description: 'Our project managers evaluate source script, technical complexity, target authority requirements (e.g., Uni-Assist, German consulate), and formatting needs.',
    highlight: 'Authority-specific compliance check'
  },
  {
    step: '03',
    title: 'Quotation & Timeline',
    description: 'Receive a transparent, itemized quotation detailing per-word/page fees, certification additions, turnaround schedule, and secure payment link.',
    highlight: 'Transparent pricing with no hidden costs'
  },
  {
    step: '04',
    title: 'Expert Linguist Assignment',
    description: 'Your project is assigned to a verified native linguist possessing subject-matter mastery in your domain (legal, academic, clinical, or technical).',
    highlight: '100% Native human translators'
  },
  {
    step: '05',
    title: 'Dual-Review Quality Assurance',
    description: 'A second independent senior editor conducts a strict 4-eye audit verifying terminology, numbers, layout fidelity, and cultural nuance against source records.',
    highlight: 'Rigorous 4-eye editorial audit'
  },
  {
    step: '06',
    title: 'Secure Delivery & Certification',
    description: 'Receive high-resolution digitally signed certified PDFs instantly, with optional physical hard copies dispatched across India via priority speed courier.',
    highlight: 'Digital delivery + Physical stamped courier'
  }
];

// Interactive Sample Translations
export const SAMPLE_TRANSLATIONS: SampleTranslation[] = [
  {
    id: 'academic-german',
    title: 'Academic Degree & Mark Sheet',
    sourceLang: 'German (Deutsch)',
    targetLang: 'English (US/UK)',
    documentType: 'University Transcript (Master of Science)',
    industry: 'Academic / Uni-Assist',
    sourceSnippet: 'Prüfungsamt der Technischen Universität München\nZeugnis über die Masterprüfung im Studiengang Maschinenwesen.\nHerr Arjun Ramesh, geboren am 14. August 1998 in Bangalore, hat die Masterprüfung mit der Gesamtnote "Sehr Gut" (1,3) bestanden.',
    targetSnippet: 'Examination Office of the Technical University of Munich\nCertificate of Master Examination in Mechanical Engineering.\nMr. Arjun Ramesh, born on August 14, 1998 in Bangalore, has passed the Master’s Examination with the overall grade "Very Good" (1.3).',
    linguistNotes: 'Grading scale converted with explanatory footnote noting German 1.0–5.0 inverted evaluation scale to assist Indian admissions evaluators.'
  },
  {
    id: 'legal-french',
    title: 'Commercial Supply & Non-Disclosure Agreement',
    sourceLang: 'French (Français)',
    targetLang: 'English',
    documentType: 'Commercial Contract Clause',
    industry: 'Corporate & Legal',
    sourceSnippet: 'Article 14. Juridiction compétente et droit applicable.\nLe présent contrat est régi et interprété conformément au droit français. Tout différend relatif à la validité, l’interprétation ou l’exécution sera soumis à la compétence exclusive du Tribunal de Commerce de Paris.',
    targetSnippet: 'Article 14. Governing Law and Dispute Jurisdiction.\nThis agreement shall be governed by and construed in accordance with French substantive law. Any dispute concerning its validity, interpretation, or enforcement shall be subject to the exclusive jurisdiction of the Commercial Court of Paris.',
    linguistNotes: 'Juridical phrasing aligned with international common law contract terminology while honoring French Civil Code stipulations.'
  },
  {
    id: 'technical-japanese',
    title: 'Automotive Precision Sensor Specification',
    sourceLang: 'Japanese (日本語)',
    targetLang: 'English',
    documentType: 'Technical Engineering Guide',
    industry: 'Automotive & Manufacturing',
    sourceSnippet: '第4項：高精度トルクセンサの校正手順\n本センサを取り付ける前に、零点ドリフトを防止するため、動作周囲温度が-20℃から+85℃の範囲内であることを確認してください。トルクレンチを用いて規定のトルク（12.5 N・m ± 0.5）で締結すること。',
    targetSnippet: 'Section 4: High-Precision Torque Sensor Calibration Protocol\nPrior to sensor mounting, ensure operating ambient temperature is maintained within -20°C to +85°C to prevent zero-point thermal drift. Fasten to specified torque rating (12.5 N·m ± 0.5) utilizing a calibrated torque wrench.',
    linguistNotes: 'Preserved exact metric dimensional tolerances and standard international engineering nomenclature (ISO/JIS standards).'
  },
  {
    id: 'civil-arabic',
    title: 'Official Marriage & Civil Registration Certificate',
    sourceLang: 'Arabic (العربية)',
    targetLang: 'English',
    documentType: 'Civil Registry Record',
    industry: 'Immigration & Consular',
    sourceSnippet: 'وزارة العدل - محكمة الأحوال الشخصية\nوثيقة عقد زواج شرعي رقم: ٤٨٢/٢٠٢٢\nتم بعون الله تعالى عقد قران الزوج والزوجة وفقاً لأحكام الشريعة الإسلامية والقوانين المرعية، بحضور الشاهدين العدلين.',
    targetSnippet: 'Ministry of Justice – Personal Status Court\nOfficial Certificate of Marriage Contract No: 482/2022\nBy the grace of the Almighty, the marriage of the Groom and Bride has been solemnized in accordance with statutory civil laws and registered in the presence of two verified witnesses.',
    linguistNotes: 'Full transliteration of Arabic hijri calendar dates alongside Gregorian equivalents for seamless Indian visa authority verification.'
  }
];

// FAQs
export const FAQS: FaqItem[] = [
  {
    id: 'what-is-foreign-translation',
    category: 'general',
    question: 'What is professional foreign language translation?',
    answer: 'Professional foreign language translation involves rendering written text from a source language into a target language with linguistic fidelity, grammatical precision, and cultural nuance. Unlike automated tools, professional human translation considers legal terminology, cultural context, formatting consistency, and specific receiving authority requirements.'
  },
  {
    id: 'which-languages',
    category: 'general',
    question: 'Which foreign and Indian languages do you translate?',
    answer: 'We support over 50 global and Indian languages. Popular foreign languages include German, French, Spanish, Portuguese, Italian, Russian, Mandarin Chinese, Japanese, Korean, and Arabic. We also translate between foreign tongues and major Indian languages including Hindi, Kannada, Tamil, Telugu, Malayalam, Marathi, Bengali, and Punjabi.'
  },
  {
    id: 'pan-india-service',
    category: 'general',
    question: 'Do you provide translation services across India?',
    answer: 'Yes. While headquartered in Bengaluru with liaison offices in Mumbai and New Delhi, our digital submission platform serves clients across all states and union territories in India. Completed certified translations are delivered as digitally signed PDFs and via speed courier for physical stamped hard copies.'
  },
  {
    id: 'certified-vs-notarized',
    category: 'certified',
    question: 'What is the difference between certified and notarized translation?',
    answer: 'A Certified Translation includes a formal declaration on our company letterhead, signed and stamped by an authorized linguist or representative, stating that the translation is true and accurate. A Notarized Translation adds an additional legal layer where the translator signs this certification statement in the physical presence of a commissioned Notary Public, who affixes an official seal. Note that acceptance depends strictly on the requirements of your receiving authority.'
  },
  {
    id: 'embassy-acceptance',
    category: 'certified',
    question: 'Will your translated documents be accepted by embassies and consulates?',
    answer: 'Our certified translations follow standard international guidelines and are accepted by educational bodies (such as Uni-Assist in Germany and Campus France), corporate employers, and consular visa processing units. However, because specific embassies or court benches may enforce unique internal directives (such as mandatory panel translators or apostilles), we always advise clients to verify their receiving institution’s exact requirements.'
  },
  {
    id: 'pricing-factors',
    category: 'pricing',
    question: 'How is the cost of document translation calculated?',
    answer: 'Translation costs depend on the source and target language pair, document type (standard civil certificates vs complex legal/medical contracts), total word or page volume, requested turnaround urgency, and required certification or physical courier dispatch. We provide transparent, upfront quotations before any project begins.'
  },
  {
    id: 'turnaround-time',
    category: 'pricing',
    question: 'How long does translation typically take?',
    answer: 'Standard personal documents (such as birth certificates or single-page degrees) are usually completed within 24 to 48 hours. Multi-page legal agreements, technical manuals, or corporate dossiers depend on page volume, typically progressing at 1,500 to 2,500 words per business day. Express 24-hour turnaround is available for urgent submissions.'
  },
  {
    id: 'confidentiality',
    category: 'confidentiality',
    question: 'Is my document information kept strictly confidential?',
    answer: 'Absolutely. We treat all personal, legal, medical, and corporate documents as strictly confidential. All files are handled under Non-Disclosure Agreement (NDA) protocols, stored in encrypted workspaces with restricted linguist access, and purged in accordance with our documented data retention and destruction policy.'
  },
  {
    id: 'upload-scans',
    category: 'general',
    question: 'Can I upload scanned copies or photos taken with a smartphone?',
    answer: 'Yes, provided the scans or photos are sharp, flat, and fully legible with all text, seals, stamps, and signatures visible. We accept PDF, JPG, PNG, and TIFF formats up to 25MB per file. High-resolution 300 DPI flatbed scans are strongly recommended for optimal accuracy.'
  },
  {
    id: 'formatting-preservation',
    category: 'general',
    question: 'Can you maintain the original layout and formatting of the document?',
    answer: 'Yes. Our desktop publishing (DTP) specialists mirror the visual layout, tabular alignments, headers, footnotes, and seal positions of the source document so that evaluating officers can cross-reference the translated record line-by-line against the original.'
  }
];

// Blog Posts
export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'certified-vs-notarized-guide',
    title: 'Certified vs Notarized Translation in India: Key Differences for Visa Applicants',
    category: 'Official Documentation',
    readTime: '5 min read',
    date: 'March 2026',
    summary: 'A detailed breakdown of legal terminology, certification declarations, and notary verification requirements for Indian citizens applying for overseas visas.',
    content: [
      'Applying for an overseas study permit, permanent residency, or cross-border employment often involves presenting personal and academic records in the official language of the destination country.',
      'One of the most frequent points of confusion for applicants is distinguishing between a "Certified Translation" and a "Notarized Translation".',
      'A Certified Translation consists of the translated document accompanied by a formal Certification Statement issued on the translation agency’s letterhead. This statement verifies the translator’s competence and attests that the target document is an accurate representation of the original.',
      'A Notarized Translation goes one step further: the translator or authorized officer signs the certification statement before an appointed Notary Public, who verifies the signatory’s identity. It does not certify the linguistic accuracy of the foreign text, but rather validates the authenticity of the signature on the certification statement.',
      'Receiving authorities such as Uni-Assist for German universities typically require certified translations with the agency’s official stamp, whereas judicial court submissions frequently mandate notarization.'
    ]
  },
  {
    id: 'german-academic-transcripts',
    title: 'Translating Educational Documents for Studies in Germany: Uni-Assist Requirements',
    category: 'Academic & Studies',
    readTime: '6 min read',
    date: 'February 2026',
    summary: 'Essential guidelines for Indian engineering and management students preparing university transcripts, degree certificates, and mark sheets for German admissions.',
    content: [
      'Germany has emerged as one of the premier global destinations for Indian STEM and management students. However, university evaluation portals like Uni-Assist maintain strict documentation standards.',
      'When translating Indian university mark sheets and degree certificates into German (or English where accepted), several critical rules apply:',
      '1. Line-by-Line Consistency: Every course title, credit point, and semester evaluation must align directly with the original university transcript format.',
      '2. Grading Scale Explanation: In India, grading systems vary widely from percentages to 10-point CGPA scales, whereas Germany uses an inverted 1.0 (Best) to 5.0 (Fail) system. Professional translations should include non-intrusive footnotes explaining the Indian university grading schema.',
      '3. Seal & Stamp Preservation: Translators must explicitly transcribe and identify all official rubber stamps, vice-chancellor signatures, and registrar watermarks [e.g., "Official Seal: Registrar, Bangalore University"].'
    ]
  },
  {
    id: 'common-mistakes-legal-translation',
    title: 'Five Critical Mistakes to Avoid in Commercial Contract Translation',
    category: 'Corporate & Legal',
    readTime: '7 min read',
    date: 'January 2026',
    summary: 'Why literal machine translation fails in bilateral agreements and how legal linguists navigate civil law versus common law jurisdictions.',
    content: [
      'Commercial agreements across international borders represent substantial financial risk. An ambiguous clause or mistranslated term can trigger jurisdictional gridlock in arbitration.',
      '1. False Friends in Legal Jargon: Words that appear similar across Romance and Germanic languages frequently carry contradictory legal effects. For instance, the French term "force majeure" operates under distinct statutory criteria compared to common law force majeure clauses.',
      '2. Omission of Punctuation & Sub-clauses: In legal texts, the placement of a single comma can alter indemnification boundaries or liability caps.',
      '3. Inconsistent Defined Terms: Capitalized defined terms (e.g., "Effective Date", "Confidential Information") must remain strictly uniform across hundreds of pages of annexures and disclosures.'
    ]
  }
];

// Verified Client Reviews
export const TESTIMONIALS = [
  {
    id: '1',
    author: 'Advocate Rajesh Nair',
    role: 'Partner, Cross-Border Litigation Group',
    organization: 'Nair & Chambers, Bengaluru',
    feedback: 'TransLumina Global handled the translation of over 400 pages of bilingual commercial contracts from French to English for an ICC arbitration proceeding. Their legal linguists preserved exact clause definitions with flawless certification statements.',
    rating: 5,
    service: 'Legal Document Translation'
  },
  {
    id: '2',
    author: 'Dr. Sunita Kulkarni',
    role: 'Director of Regulatory Affairs',
    organization: 'Aura BioSciences India',
    feedback: 'Translating our multi-center clinical study reports into Japanese and German required rigorous scientific precision. Their dual-pass review process and medical glossaries ensured zero queries from our European regulatory auditors.',
    rating: 5,
    service: 'Medical & Clinical Translation'
  },
  {
    id: '3',
    author: 'Karthik Subbaraman',
    role: 'M.Sc Computational Mechanics Candidate',
    organization: 'TU Munich (Munich, Germany)',
    feedback: 'I needed certified German translations of my VTU degree certificate and 8 semesters of engineering transcripts for Uni-Assist. The team delivered stamped PDFs in under 36 hours and my application was accepted without a single objection.',
    rating: 5,
    service: 'Academic Certificate Translation'
  },
  {
    id: '4',
    author: 'Elena Gomez',
    role: 'Head of Global Expansion',
    organization: 'NexTech Solutions, Bangalore & Madrid',
    feedback: 'Exceptional professionalism. We engaged them for Spanish and Portuguese website and SaaS software localization. They not only translated UI strings accurately but also flagged cultural context nuances for Latin America.',
    rating: 5,
    service: 'Software & Website Localisation'
  }
];

// Office Locations
export const OFFICE_LOCATIONS = [
  {
    city: 'Bengaluru (Headquarters)',
    tag: 'Registered Corporate Office',
    address: 'Level 4, Prestige Meridian, 100 Feet Road, Indiranagar, Bengaluru, Karnataka 560038',
    phone: '+91 80 4123 7890',
    mobile: '+91 98450 12890',
    email: 'bangalore@transluminaglobal.com',
    hours: 'Mon – Sat: 9:00 AM – 8:00 PM IST',
    coordinates: '12.9784° N, 77.6408° E'
  },
  {
    city: 'Mumbai',
    tag: 'Regional Liaison Office',
    address: 'Suite 802, Maker Chambers V, Nariman Point, Mumbai, Maharashtra 400021',
    phone: '+91 22 2288 4590',
    mobile: '+91 98201 64510',
    email: 'mumbai@transluminaglobal.com',
    hours: 'Mon – Sat: 9:30 AM – 7:30 PM IST',
    coordinates: '18.9260° N, 72.8238° E'
  },
  {
    city: 'New Delhi NCR',
    tag: 'Consular & Legal Services Office',
    address: '6th Floor, Statesman House, Barakhamba Road, Connaught Place, New Delhi 110001',
    phone: '+91 11 4356 1200',
    mobile: '+91 98112 30980',
    email: 'delhi@transluminaglobal.com',
    hours: 'Mon – Sat: 9:00 AM – 7:30 PM IST',
    coordinates: '28.6289° N, 77.2274° E'
  }
];
