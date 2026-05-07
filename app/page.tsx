import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import ProblemSection from "@/components/ProblemSection";
import PillarSection from "@/components/PillarSection";
import MethodologyFlowchart from "@/components/MethodologyFlowchart";
import DeliverableSection from "@/components/DeliverableSection";
import GestoresSection from "@/components/GestoresSection";
import AboutSection from "@/components/AboutSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <StatsBar />
      <ProblemSection />
      <PillarSection />
      <MethodologyFlowchart />
      <DeliverableSection />
      <GestoresSection />
      <AboutSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
