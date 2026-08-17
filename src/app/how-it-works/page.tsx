import type { Metadata } from "next";
import HowItWorksSection from "@/components/sections/HowItWorksSection";

export const metadata: Metadata = {
  title: "How Unabyss Works: 90 Seconds to Context-Ready | Unabyss",
  description:
    "Connect your tools to Unabyss, plug it into your AI tools over MCP, and stop re-explaining yourself. Here's how - and how fast.",
};

export default function HowItWorksPage() {
  return <HowItWorksSection />;
}
