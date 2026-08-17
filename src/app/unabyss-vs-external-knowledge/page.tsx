import type { Metadata } from "next";
import ExternalKnowledgePageSection from "@/components/sections/compare/ExternalKnowledgePageSection";

export const metadata: Metadata = {
  title: "Unabyss vs. Building Your Own Context System",
  description:
    "GitHub repos, Karpathy's LLM Wiki, GBrain - ways to give the AI context you build and run yourself. Here's how a managed context layer compares.",
  keywords:
    "second brain AI, LLM Wiki, gBrain, GitHub context, self-hosted AI knowledge base, MCP knowledge graph, Unabyss",
  alternates: { canonical: "https://unabyss.com/unabyss-vs-external-knowledge" },
  openGraph: {
    title: "Unabyss vs. Building Your Own Context System",
    description:
      "GitHub repos, Karpathy's LLM Wiki, GBrain - ways to give the AI context you build and run yourself. Here's how a managed context layer compares.",
  },
};

function articleJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Unabyss vs. Building Your Own Context System",
    description:
      "GitHub repos, Karpathy's LLM Wiki, GBrain - ways to give the AI context you build and run yourself. Here's how a managed context layer compares.",
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

export default function UnabyssVsExternalKnowledgePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd()) }}
      />
      <ExternalKnowledgePageSection />
    </>
  );
}
