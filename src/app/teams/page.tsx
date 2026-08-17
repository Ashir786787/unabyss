import type { Metadata } from "next";
import TeamsSection from "@/components/sections/TeamsSection";

export const metadata: Metadata = {
  title: "Unabyss for Teams | Unabyss",
  description:
    "An AI memory for every teammate. Each person's connected sources flow into one memory every AI they use can read - nothing pooled across the company.",
};

export default function TeamsPage() {
  return <TeamsSection />;
}
