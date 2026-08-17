import type { Metadata } from "next";
import WouldUnabyssHelpSection from "@/components/sections/WouldUnabyssHelpSection";

export const metadata: Metadata = {
  title: "Would Unabyss help you? Ask your AI — Unabyss",
  description:
    "One prompt for Claude or ChatGPT: it draws on what it already knows about your work and scores 1–10 whether Unabyss would actually help you, with concrete examples and an honest answer.",
};

export default function WouldUnabyssHelpPage() {
  return <WouldUnabyssHelpSection />;
}
