import type { Metadata } from "next";
import ReferralsSection from "@/components/sections/ReferralsSection";
import { referralFaqs } from "@/data/referrals";

export const metadata: Metadata = {
  title: "Referrals — Give a Free Month, Get One Back | Unabyss",
  description:
    "Give a friend a free month of Unabyss and get one back. At 3 referrals we gift you a year of Claude Pro.",
  openGraph: {
    title: "Referrals — Give a Free Month, Get One Back | Unabyss",
    description:
      "Give a friend a free month of Unabyss and get one back. At 3 referrals we gift you a year of Claude Pro.",
  },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: referralFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer.join(" "),
    },
  })),
};

export default function ReferralsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <ReferralsSection />
    </>
  );
}
