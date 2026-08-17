import type { Metadata } from "next";
import GlobalInstructionsPageSection from "@/components/sections/compare/GlobalInstructionsPageSection";

export const metadata: Metadata = {
  title: "How to set custom instructions in Claude and ChatGPT",
  description:
    "A guide to custom instructions in Claude and ChatGPT: where the field lives in each app's settings, and how to paste your Unabyss context rules so your context is loaded automatically.",
  keywords:
    "Claude global instructions, Instructions for Claude, Claude custom instructions, ChatGPT custom instructions, ChatGPT personalization, custom instructions, Unabyss",
  alternates: { canonical: "https://unabyss.com/global-instructions" },
  openGraph: {
    title: "How to set custom instructions in Claude and ChatGPT",
    description:
      "A guide to custom instructions in Claude and ChatGPT: where the field lives in each app's settings, and how to paste your Unabyss context rules so your context is loaded automatically.",
  },
};

function howToJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to set custom instructions in Claude and ChatGPT",
    description:
      "A guide to custom instructions in Claude and ChatGPT: where the field lives in each app's settings, and how to paste your Unabyss context rules so your context is loaded automatically.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Open Settings and find the instructions field",
        text: "In Claude, open Settings > Profile and find the Instructions for Claude field. In ChatGPT, open Settings > Personalization > Customize ChatGPT.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Copy your instructions",
        text: "Pick how much Unabyss should save back from your conversations, then copy the matching instruction text.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Paste your instructions and save",
        text: "Paste your instructions into the field and save. Every new conversation starts with your rules.",
      },
    ],
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

export default function GlobalInstructionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd()) }}
      />
      <GlobalInstructionsPageSection />
    </>
  );
}
