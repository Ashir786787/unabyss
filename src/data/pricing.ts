import maxImage from "@/assets/pricing/max.png";
import proImage from "@/assets/pricing/pro.png";
import teamImage from "@/assets/pricing/team.png";
import type { StaticImageData } from "next/image";

export type BillingPeriod = "monthly" | "yearly";

export type PricingPlan = {
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  perSeat?: boolean;
  features: string[];
  buttonLabel: string;
  buttonHref?: string;
  image: StaticImageData;
  highlighted?: boolean;
  badge?: string;
  banner?: string;
  note?: string;
  noteCta?: string;
  noteAvatars?: string[];
  amberChecks?: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Pro",
    description: "For individuals plugging AI into their daily work.",
    monthlyPrice: 15,
    yearlyPrice: 13,
    buttonLabel: "Start 7-day free trial",
    buttonHref: "https://app.unabyss.com/register",
    note: "No credit card required",
    image: proImage,
    features: [
      "Up to 3 connected agents via MCP",
      "Up to 20 connected accounts",
      "Premium usage tier",
      "No additional costs",
      "Free 7-day trial",
    ],
  },
  {
    name: "Max",
    description: "For power users who live in AI all day.",
    monthlyPrice: 89,
    yearlyPrice: 79,
    buttonLabel: "Start 7-day free trial",
    buttonHref: "https://app.unabyss.com/register",
    note: "No credit card required",
    image: maxImage,
    highlighted: true,
    banner: "On the Claude Max plan? This is the pick for you.",
    amberChecks: true,
    features: [
      "Unlimited agents",
      "Unlimited connected accounts",
      "Multi-account support for Google apps",
      "Unlimited usage",
      "Early access to new features",
      "No additional costs",
      "Free 7-day trial",
    ],
  },
  {
    name: "Team",
    description: "Everything in Max, for everyone on your team.",
    monthlyPrice: 49,
    yearlyPrice: 39,
    perSeat: true,
    buttonLabel: "See the Team plan",
    buttonHref: "/teams",
    note: "Still unsure?",
    noteCta: "Book a call",
    noteAvatars: [
      "/images/authors/filip.jpg",
      "/images/authors/marcin.jpg",
    ],
    image: teamImage,
    features: [
      "Everything in Max, for every seat",
      "Shared team workspace",
      "Invite teammates by email",
      "Central seat and invoice management",
      "Minimum 3 seats",
    ],
  },
];
