import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogosBar from "@/components/LogosBar";
import WhatIsSection from "@/components/WhatIsSection";
import ForWhomSection from "@/components/ForWhomSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ExamplesSection from "@/components/ExamplesSection";
import ComparisonSection from "@/components/ComparisonSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LogosBar />
      <WhatIsSection />
      <ForWhomSection />
      <HowItWorksSection />
      <ExamplesSection />
      <ComparisonSection />
      <PricingSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
