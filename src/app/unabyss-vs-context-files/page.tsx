import type { Metadata } from "next";
import ContextFilesPageSection from "@/components/sections/compare/ContextFilesPageSection";

export const metadata: Metadata = {
  title: "Unabyss vs. Context Files: Why a .md File Goes Stale",
  description:
    "A .md context file is a snapshot that goes stale within a week. Unabyss keeps context alive - connected to your sources, always current, delivered to every AI.",
  keywords:
    "context files, AI context file, markdown context, .md context, system prompt, Unabyss, AI context layer",
  alternates: { canonical: "https://unabyss.com/unabyss-vs-context-files" },
  openGraph: {
    title: "Unabyss vs. Context Files: Why a .md File Goes Stale",
    description:
      "A .md context file is a snapshot that goes stale within a week. Unabyss keeps context alive - connected to your sources, always current, delivered to every AI.",
  },
};

function articleJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Unabyss vs. Context Files: Why a .md File Goes Stale",
    description:
      "A .md context file is a snapshot that goes stale within a week. Unabyss keeps context alive - connected to your sources, always current, delivered to every AI.",
    publisher: {
      "@type": "Organization",
      name: "Unabyss",
      logo: {
        "@type": "ImageObject",
        url: "https://unabyss.com/favicon.svg",
      },
    },
  };
}

export default function UnabyssVsContextFilesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd()) }}
      />
      <ContextFilesPageSection />
    </>
  );
}
