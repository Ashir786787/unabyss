import BlogSection from "@/components/sections/BlogSection";
import ClaudeSetupSection from "@/components/sections/ClaudeSetupSection";
import DifferenceSection from "@/components/sections/DifferenceSection";
import FAQSection from "@/components/sections/FAQSection";
import HeroSection from "@/components/sections/HeroSection";
import LoomSection from "@/components/sections/LoomSection";
import PricingSection from "@/components/sections/PricingSection";
import ProblemsSection from "@/components/sections/ProblemsSection";
import SharedMemorySection from "@/components/sections/SharedMemorySection";
import StatisticsSection from "@/components/sections/StatisticsSection";
import UseCasesSection from "@/components/sections/UseCasesSection";
import WhyUnabyssSection from "@/components/sections/WhyUnabyssSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <LoomSection />
      <ClaudeSetupSection />
      <ProblemsSection />
      <DifferenceSection />
      <SharedMemorySection />
      <StatisticsSection />
      <WhyUnabyssSection />
      <UseCasesSection />
      <PricingSection />
      <FAQSection />
      <BlogSection limit={3} />
    </>
  );
}