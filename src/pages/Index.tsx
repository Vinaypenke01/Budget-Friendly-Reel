import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

// Lazy load heavy sections
const AboutSection = lazy(() => import("@/components/AboutSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const PortfolioSection = lazy(() => import("@/components/PortfolioSection"));
const FounderSection = lazy(() => import("@/components/FounderSection"));
const LocationsSection = lazy(() => import("@/components/LocationsSection"));
const WhyChooseUs = lazy(() => import("@/components/WhyChooseUs"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));

// 🌀 Simple Loading Spinner for Lazy Sections
const SectionLoader = () => (
  <div className="w-full h-48 flex items-center justify-center bg-background">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const Index = () => (
  <div className="min-h-screen bg-background text-foreground scroll-smooth">
    <Navbar />
    <HeroSection />

    <Suspense fallback={<SectionLoader />}>
      {/* <AboutSection /> */}
      <FounderSection />
      <LocationsSection />
      <PortfolioSection />
      <ServicesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <ContactSection />
    </Suspense>

    <Footer />
    <WhatsAppFloat />
  </div>
);

export default Index;
