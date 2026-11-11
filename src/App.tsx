import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustHighlights } from './components/TrustHighlights';
import { AboutCompany } from './components/AboutCompany';
import { ServicesShowcase } from './components/ServicesShowcase';
import { LanguageSelector } from './components/LanguageSelector';
import { IndustrySolutions } from './components/IndustrySolutions';
import { OfficialTranslationGuide } from './components/OfficialTranslationGuide';
import { ProcessTimeline } from './components/ProcessTimeline';
import { QualityAssurance } from './components/QualityAssurance';
import { QuoteCalculator } from './components/QuoteCalculator';
import { UseCasesAndPortfolio } from './components/UseCasesAndPortfolio';
import { TestimonialsAndFaq } from './components/TestimonialsAndFaq';
import { BlogSection } from './components/BlogSection';
import { ConversionCta } from './components/ConversionCta';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DocumentUploadModal } from './components/DocumentUploadModal';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';

export default function App() {
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState<string>('Certified Document Translation');

  const handleOpenUpload = (serviceName?: string) => {
    if (serviceName) {
      setPrefilledService(serviceName);
    }
    setUploadModalOpen(true);
  };

  const handleCloseUpload = () => {
    setUploadModalOpen(false);
  };

  const handleNavigateTo = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA] text-[#252B33]">
      {/* Sticky Header with Top Bar Contract */}
      <Header onOpenUpload={handleOpenUpload} onNavigateTo={handleNavigateTo} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Section 2: Hero Banner */}
        <Hero onOpenUpload={handleOpenUpload} onNavigateTo={handleNavigateTo} />

        {/* Section 3: Trust & Service Highlights */}
        <TrustHighlights />

        {/* Section 4: About Our Translation Company */}
        <AboutCompany onNavigateTo={handleNavigateTo} onOpenUpload={handleOpenUpload} />

        {/* Section 5: Our Foreign Language Translation Services */}
        <ServicesShowcase onOpenUpload={handleOpenUpload} />

        {/* Section 6: Languages We Translate */}
        <LanguageSelector onOpenUpload={handleOpenUpload} onNavigateTo={handleNavigateTo} />

        {/* Section 7: Industry-Specific Translation Solutions */}
        <IndustrySolutions onOpenUpload={handleOpenUpload} />

        {/* Section 8: Certified, Notarized & Official Document Translation */}
        <OfficialTranslationGuide onOpenUpload={handleOpenUpload} />

        {/* Section 9: Our Translation Process */}
        <ProcessTimeline onOpenUpload={() => handleOpenUpload()} onNavigateTo={handleNavigateTo} />

        {/* Sections 10 & 11: Why Choose Us & Quality Assurance Architecture */}
        <QualityAssurance />

        {/* Section 12: Translation Pricing & Instant Quote Calculator */}
        <QuoteCalculator onOpenUpload={handleOpenUpload} />

        {/* Sections 13 & 15: Client Use Cases & Sample Portfolio */}
        <UseCasesAndPortfolio onOpenUpload={handleOpenUpload} />

        {/* Sections 14 & 16: Verified Testimonials & Searchable FAQs */}
        <TestimonialsAndFaq onOpenUpload={() => handleOpenUpload()} />

        {/* Section 17: Blog & Educational Guides */}
        <BlogSection />

        {/* Section 18: Strong Conversion CTA Banner */}
        <ConversionCta onOpenUpload={handleOpenUpload} onNavigateTo={handleNavigateTo} />

        {/* Section 19: Contact Us & Document Upload Form */}
        <ContactSection onOpenUpload={handleOpenUpload} />
      </main>

      {/* Section 20: Footer */}
      <Footer onNavigateTo={handleNavigateTo} onOpenUpload={handleOpenUpload} />

      {/* Global Document Upload Modal */}
      <DocumentUploadModal
        isOpen={uploadModalOpen}
        onClose={handleCloseUpload}
        prefilledService={prefilledService}
      />

      {/* Floating Quick Action Bar for Mobile & Direct Enquiries */}
      <div className="fixed bottom-4 right-4 z-40 flex items-center gap-2">
        <a
          href="https://wa.me/919845012890?text=Hello%20TransLumina%20Global%2C%20I%20have%20an%20urgent%20translation%20enquiry."
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl flex items-center justify-center transition-transform hover:scale-110"
          title="Chat on WhatsApp (+91 98450 12890)"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
        <a
          href="tel:+918041237890"
          className="w-12 h-12 rounded-full bg-[#142C45] hover:bg-[#1f3f61] text-[#C9A45C] shadow-xl flex items-center justify-center transition-transform hover:scale-110"
          title="Call Translation Office (+91 80 4123 7890)"
          aria-label="Call Translation Office"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
