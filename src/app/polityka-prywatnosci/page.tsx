import type { Metadata } from "next";
import PolitykaPrywatnosciSection from "@/components/sections/PolitykaPrywatnosciSection";

export const metadata: Metadata = {
  title: "Polityka prywatności — Unabyss",
  description:
    "Polityka prywatności Unabyss — w jaki sposób OneType Prosta Spółka Akcyjna zbiera, wykorzystuje, przetwarza i chroni dane osobowe użytkowników.",
};

export default function PolitykaPrywatnosciPage() {
  return <PolitykaPrywatnosciSection />;
}
