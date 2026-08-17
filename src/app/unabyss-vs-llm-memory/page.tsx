import type { Metadata } from "next";
import LlmMemoryPageSection from "@/components/sections/compare/LlmMemoryPageSection";

export const metadata: Metadata = {
  title: "Unabyss vs. Built-in AI Memory: Where It Stops",
  description:
    "ChatGPT, Claude, Gemini and Perplexity all remember you now. Built-in memory is trapped in one tool. Unabyss is a context layer you own, served to every AI.",
  keywords:
    "AI memory, ChatGPT memory, Claude memory, Gemini memory, built-in AI memory, AI context layer, Unabyss",
  alternates: { canonical: "https://unabyss.com/unabyss-vs-llm-memory" },
  openGraph: {
    title: "Unabyss vs. Built-in AI Memory: Where It Stops",
    description:
      "ChatGPT, Claude, Gemini and Perplexity all remember you now. Built-in memory is trapped in one tool. Unabyss is a context layer you own, served to every AI.",
  },
};

function articleJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Unabyss vs. Built-in AI Memory: Where It Stops",
    description:
      "ChatGPT, Claude, Gemini and Perplexity all remember you now. Built-in memory is trapped in one tool. Unabyss is a context layer you own, served to every AI.",
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

export default function UnabyssVsLlmMemoryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd()) }}
      />
      <LlmMemoryPageSection />
    </>
  );
}
