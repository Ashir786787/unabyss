import type { Metadata } from "next";
import RegulaminSection from "@/components/sections/RegulaminSection";

export const metadata: Metadata = {
  title: "Regulamin — Unabyss",
  description: "Regulamin korzystania z platformy Unabyss — uniwersalna warstwa kontekstowa dla narzędzi AI.",
};

export default function RegulaminPage() {
  return <RegulaminSection />;
}
