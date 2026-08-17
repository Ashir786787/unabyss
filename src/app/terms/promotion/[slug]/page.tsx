import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PromotionTermsSection from "@/components/sections/PromotionTermsSection";
import { promotionTermsList } from "@/data/promotionTerms";

export function generateStaticParams() {
  return promotionTermsList.map((promotion) => ({ slug: promotion.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const promotion = promotionTermsList.find((item) => item.slug === slug);
  if (!promotion) {
    return {};
  }
  return {
    title: `Unabyss Promotion Terms (${promotion.name}) — Unabyss`,
    description: `Terms and conditions for the Unabyss ${promotion.name} promotion.`,
  };
}

export default async function PromotionTermsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const promotion = promotionTermsList.find((item) => item.slug === slug);
  if (!promotion) {
    notFound();
  }
  return <PromotionTermsSection promotion={promotion} />;
}
