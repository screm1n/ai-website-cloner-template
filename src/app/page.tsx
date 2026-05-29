import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutIntroSection } from "@/components/AboutIntroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutExtendedSection } from "@/components/AboutExtendedSection";
import { MetodoGSISection } from "@/components/MetodoGSISection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { BeyondOfficeSection } from "@/components/BeyondOfficeSection";
import { OnlineConsultationSection } from "@/components/OnlineConsultationSection";
import { ContactFormSection } from "@/components/ContactFormSection";
import { FooterSection } from "@/components/FooterSection";
import { FloatingCTA } from "@/components/FloatingCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutIntroSection />
        <ServicesSection />
        <AboutExtendedSection />
        <MetodoGSISection />
        <TestimonialsSection />
        <BeyondOfficeSection />
        <OnlineConsultationSection />
        <ContactFormSection />
      </main>
      <FooterSection />
      <FloatingCTA />
    </>
  );
}
