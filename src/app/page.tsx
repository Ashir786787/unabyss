import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogSection from "@/components/sections/BlogSection";
import ClaudeSetupSection from "@/components/sections/ClaudeSetupSection";
import DifferenceSection from "@/components/sections/DifferenceSection";
import FAQSection from "@/components/sections/FAQSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HeroSection from "@/components/sections/HeroSection";
import IntegrationsSection from "@/components/sections/IntegrationsSection";
import OwnershipSection from "@/components/sections/OwnershipSection";
import PricingSection from "@/components/sections/PricingSection";
import ProblemsSection from "@/components/sections/ProblemsSection";
import SharedMemorySection from "@/components/sections/SharedMemorySection";
import StatisticsSection from "@/components/sections/StatisticsSection";
import UseCasesSection from "@/components/sections/UseCasesSection";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0c0c0c]">
      <Header />
      <HeroSection />
      <ClaudeSetupSection />
      <ProblemsSection />
      <DifferenceSection />
      <SharedMemorySection />
      <StatisticsSection />
      <IntegrationsSection />
      <OwnershipSection />
      <FeaturesSection />
      <UseCasesSection />
      <PricingSection />
      <FAQSection />
      <BlogSection />
      <Footer />
    </main>
  );
}