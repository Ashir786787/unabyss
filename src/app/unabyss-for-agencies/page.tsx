import type { Metadata } from "next";
import UseCasePageSection from "@/components/sections/UseCasePageSection";
import { useCasePages } from "@/data/use-case-pages";

const page = useCasePages.find((p) => p.slug === "unabyss-for-agencies")!;

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
};

export default function UnabyssForAgenciesPage() {
  return <UseCasePageSection page={page} />;
}
