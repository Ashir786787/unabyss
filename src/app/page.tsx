import Header from "@/components/layout/Header";
import ClaudeSetupSection from "@/components/sections/ClaudeSetupSection";
import HeroSection from "@/components/sections/HeroSection";
import ProblemsSection from "@/components/sections/ProblemsSection";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0c0c0c]">
      <Header />
      <HeroSection />
      <ClaudeSetupSection />
      <ProblemsSection />
    </main>
  );
}
