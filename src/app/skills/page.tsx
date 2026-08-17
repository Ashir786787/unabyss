import type { Metadata } from "next";
import SkillsSection from "@/components/sections/SkillsSection";

export const metadata: Metadata = {
  title: "Unabyss Skills Library — context-aware skills for Claude",
  description:
    "A library of 68 Claude skills enriched with your real Unabyss context. Download any skill, preview what it does, and add it to Claude in seconds.",
  openGraph: {
    title: "Unabyss Skills Library — context-aware skills for Claude",
    description:
      "A library of 68 Claude skills enriched with your real Unabyss context. Download any skill, preview what it does, and add it to Claude in seconds.",
  },
};

export default async function SkillsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const page = params?.page ? Number(params.page) : 1;

  return <SkillsSection initialPage={Number.isFinite(page) && page > 0 ? page : 1} />;
}
