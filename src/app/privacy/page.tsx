import type { Metadata } from "next";
import LegalDocumentSection from "@/components/sections/LegalDocumentSection";
import { privacyLastUpdated, privacySections } from "@/data/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy — Unabyss",
  description:
    "How Unabyss (OneType Prosta Spółka Akcyjna) collects, uses, processes, and protects personal data in accordance with the GDPR.",
};

export default function PrivacyPage() {
  return (
    <LegalDocumentSection
      title="Privacy Policy"
      langSwitcher
      lastUpdated={privacyLastUpdated}
      sections={privacySections}
    />
  );
}
