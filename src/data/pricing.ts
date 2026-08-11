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
  features: string[];
  buttonLabel: string;
  image: StaticImageData;
  highlighted?: boolean;
  badge?: string;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Pro",
    description: "For people using AI across their daily work.",
    monthlyPrice: 19,
    yearlyPrice: 15,
    buttonLabel: "Start with Pro",
    image: proImage,
    highlighted: true,
    badge: "Most popular",
    features: [
      "Everything in Free",
      "More connected sources",
      "Extended context history",
      "Multiple AI tools",
      "Priority synchronization",
    ],
  },
  {
    name: "Max",
    description: "For power users with larger context needs.",
    monthlyPrice: 49,
    yearlyPrice: 39,
    buttonLabel: "Get Max",
    image: maxImage,
    features: [
      "Everything in Pro",
      "Higher context limits",
      "Advanced memory controls",
      "Priority processing",
      "Expanded integrations",
    ],
  },
  {
    name: "Team",
    description: "Shared context infrastructure for teams.",
    monthlyPrice: 99,
    yearlyPrice: 79,
    buttonLabel: "Contact sales",
    image: teamImage,
    features: [
      "Everything in Max",
      "Team workspaces",
      "Centralized controls",
      "Advanced permissions",
      "Business support",
    ],
  },
];