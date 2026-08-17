import type { Metadata } from "next";
import LegacySection from "@/components/sections/LegacySection";

export const metadata: Metadata = {
  title: "Unabyss — Your context headquarter.",
  description:
    "Self-updating context for your AI. Connect your sources once and every MCP-capable agent reads the same up-to-date picture. Available via MCP to agents and LLMs.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://unabyss.com/legacy",
  },
};

export default function LegacyPage() {
  return (
    <div className="legacy">
      <LegacySection />
    </div>
  );
}
