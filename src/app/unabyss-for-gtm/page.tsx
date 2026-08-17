import type { Metadata } from "next";
import UseCasePageSection from "@/components/sections/UseCasePageSection";
import { useCasePages } from "@/data/use-case-pages";

const page = useCasePages.find((p) => p.slug === "unabyss-for-gtm")!;

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
};

export default function UnabyssForGtmPage() {
  return <UseCasePageSection page={page} />;
}
