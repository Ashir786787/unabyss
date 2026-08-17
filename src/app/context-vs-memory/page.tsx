import type { Metadata } from "next";
import ContextVsMemoryPageSection from "@/components/sections/compare/ContextVsMemoryPageSection";

export const metadata: Metadata = {
  title: "AI Memory vs. AI Context: What's the Difference?",
  description:
    "AI memory and AI context are not the same. Memory is learned from past chats; context is who you are - structured, portable, and usable in every tool.",
  keywords:
    "AI memory, AI context, MCP context, context vault, ChatGPT memory, Claude context, Unabyss",
  alternates: { canonical: "https://unabyss.com/context-vs-memory" },
  openGraph: {
    title: "AI Memory vs. AI Context: What's the Difference?",
    description:
      "AI memory and AI context are not the same. Memory is learned from past chats; context is who you are - structured, portable, and usable in every tool.",
  },
};

const faqData = [
  {
    q: "Is AI memory the same as AI context?",
    a: "No. AI memory is built reactively from past conversations and stays locked inside the platform that created it. AI context is intentional - pre-extracted from authoritative sources, structured, portable, and user-owned. They can coexist: memory handles 'what we discussed last time,' context handles 'who I am and what I'm working on.'",
  },
  {
    q: "Can I use both AI memory and a context layer?",
    a: "Yes, and many people do. They serve different purposes. Platform memory captures the specifics of past interactions within one tool. A context layer provides foundational identity and role information that every tool can access before the first interaction begins.",
  },
  {
    q: "What is MCP context?",
    a: "MCP (Model Context Protocol) is the open standard that lets AI tools pull structured data from external sources. When your context vault is connected via MCP, AI tools like Claude Desktop or Cursor automatically load your context at the start of each session - no copy-pasting, no re-prompting.",
  },
  {
    q: "Which AI tools support context layers today?",
    a: "Any tool that supports MCP can connect to a user context vault. This currently includes Claude Desktop, Claude Code, Cursor, and a growing list of MCP-compatible agents. Tools without MCP support can still access exported context files directly.",
  },
];

function jsonLd() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "AI Memory vs. AI Context: What's the Difference?",
      description:
        "AI memory and AI context are not the same. Memory is learned from past chats; context is who you are - structured, portable, and usable in every tool.",
      publisher: {
        "@type": "Organization",
        name: "Unabyss",
        logo: {
          "@type": "ImageObject",
          url: "https://unabyss.com/favicon.svg",
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqData.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    },
  ];
}

export default function ContextVsMemoryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()) }}
      />
      <ContextVsMemoryPageSection />
    </>
  );
}
