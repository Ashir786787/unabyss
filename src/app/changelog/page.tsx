import type { Metadata } from "next";
import ChangelogSection from "@/components/sections/ChangelogSection";
import {
  changelogEntries,
  latestChangelogVersion,
} from "@/data/changelog";

export const metadata: Metadata = {
  title: "Changelog — Unabyss",
  description:
    "What is new and what got better in Unabyss — focused on the product you use every day.",
  openGraph: {
    title: "Changelog — Unabyss",
    description:
      "What is new and what got better in Unabyss — focused on the product you use every day.",
  },
};

const softwareStructuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Unabyss",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  softwareVersion: latestChangelogVersion.version,
  releaseNotes: changelogEntries.map((entry) => ({
    "@type": "SoftwareApplication",
    name: `Unabyss v${entry.version}`,
    url: `https://unabyss.com/changelog/${entry.slug}`,
    version: entry.version,
    datePublished: entry.datePublished ?? entry.dateIso,
    releaseNotes: entry.summary,
  })),
};

export default function ChangelogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareStructuredData) }}
      />
      <ChangelogSection />
    </>
  );
}
