export type BillingPeriod = "monthly" | "yearly";

export type PricingPlan = {
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  buttonLabel: string;
  highlighted?: boolean;
  badge?: string;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Free",
    description: "Get started with shared AI context.",
    monthlyPrice: 0,
    yearlyPrice: 0,
    buttonLabel: "Start free",
    features: [
      "Connect your essential tools",
      "Shared context for AI",
      "Basic memory access",
      "Personal workspace",
    ],
  },
  {
    name: "Pro",
    description: "For people using AI across their daily work.",
    monthlyPrice: 19,
    yearlyPrice: 15,
    buttonLabel: "Start with Pro",
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
    features: [
      "Everything in Pro",
      "Higher context limits",
      "Advanced memory controls",
      "Priority processing",
      "Expanded integrations",
    ],
  },
  {
    name: "Business",
    description: "Shared context infrastructure for teams.",
    monthlyPrice: 99,
    yearlyPrice: 79,
    buttonLabel: "Contact sales",
    features: [
      "Everything in Max",
      "Team workspaces",
      "Centralized controls",
      "Advanced permissions",
      "Business support",
    ],
  },
];