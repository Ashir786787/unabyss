import type { Metadata } from "next";
import TermsSection from "@/components/sections/TermsSection";

export const metadata: Metadata = {
  title: "Terms and Conditions — Unabyss",
  description:
    "The terms and conditions governing the use of the Unabyss service, provided by OneType Prosta Spółka Akcyjna. Published 30 July 2026, effective 14 August 2026.",
};

export default function TermsPage() {
  return <TermsSection />;
}
