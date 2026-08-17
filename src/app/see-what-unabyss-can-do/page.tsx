import type { Metadata } from "next";
import SeeWhatUnabyssCanDoSection from "@/components/sections/SeeWhatUnabyssCanDoSection";

export const metadata: Metadata = {
  title: "See what Unabyss can do for you — Unabyss",
  description:
    "Open Claude or ChatGPT with a prompt that reads your real Unabyss context and shows you the areas of your work where having your context available to AI changes how you operate.",
};

export default function SeeWhatUnabyssCanDoPage() {
  return <SeeWhatUnabyssCanDoSection />;
}
