import type { Metadata } from "next";
import FAQPageSection from "@/components/sections/FAQPageSection";
import { faqGroups } from "@/data/faq-page";

export const metadata: Metadata = {
  title: "FAQ - Unabyss",
  description:
    "Answers about Unabyss: how your AI context is built, how it stays current, how your data is protected, and how to connect it to Claude, ChatGPT, Cursor and any MCP-compatible tool.",
  alternates: { canonical: "https://unabyss.com/faq" },
};

function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqGroups.flatMap((group) =>
      group.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer.join(" "),
        },
      })),
    ),
  };
}

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }}
      />
      <FAQPageSection />
    </>
  );
}
