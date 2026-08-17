import type { Metadata } from "next";
import ConnectPageSection from "@/components/sections/ConnectPageSection";
import { connectPages } from "@/data/connect";

const page = connectPages.find((p) => p.slug === "connect-claude")!;

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  keywords: page.keywords,
  alternates: { canonical: page.canonical },
};

function connectHowToJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: page.title,
    description: page.subtitle,
    step: page.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.body,
    })),
  };
}

export default function ConnectClaudePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(connectHowToJsonLd()) }}
      />
      <ConnectPageSection page={page} />
    </>
  );
}
