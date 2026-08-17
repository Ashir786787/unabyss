import type { Metadata } from "next";
import SecuritySection from "@/components/sections/SecuritySection";

export const metadata: Metadata = {
  title: "Security & Trust — Unabyss",
  description:
    "How Unabyss protects your data: encrypted in transit and at rest, read-only by design, never used to train models. SOC 2 Type II in progress, GDPR aligned.",
  openGraph: {
    title: "Security & Trust — Unabyss",
    description:
      "How Unabyss protects your data: encrypted in transit and at rest, read-only by design, never used to train models. SOC 2 Type II in progress, GDPR aligned.",
  },
};

export default function SecurityPage() {
  return <SecuritySection />;
}
