"use client";

import { useState } from "react";

type PhBadgeProps = {
  period: "day" | "week" | "month";
  delay?: number;
  className?: string;
};

const badgeSrc: Record<PhBadgeProps["period"], string> = {
  day: "/images/ph-product-of-the-day.svg",
  week: "/images/ph-product-of-the-week.svg",
  month: "/images/ph-product-of-the-month.svg",
};

const badgeAlt: Record<PhBadgeProps["period"], string> = {
  day: "Unabyss - MCP-native self-updating context layer for your AI | Product Hunt Product of the Day",
  week: "Unabyss - MCP-native self-updating context layer for your AI | Product Hunt Product of the Week",
  month: "Unabyss - MCP-native self-updating context layer for your AI | Product Hunt Product of the Month",
};

const href =
  "https://www.producthunt.com/products/unabyss?embed=true&utm_source=badge-top-post-badge&utm_medium=badge&utm_campaign=badge-unabyss";

export default function PhBadge({
  period,
  className = "",
}: PhBadgeProps) {
  const [hovered, setHovered] = useState(false);
  const expanded = period === "day" || hovered;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={`Product of the ${
        period === "day" ? "Day" : period === "week" ? "Week" : "Month"
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative block h-[43px] shrink-0 overflow-hidden rounded-[8px] border border-[#221d21] bg-[#221d21] transition-[width] duration-500 ease-in-out ${
        expanded ? "w-[200px]" : "w-[43px]"
      } ${className}`}
    >
      <div
        aria-hidden="true"
        className={`absolute inset-y-0 left-0 flex size-[43px] items-center justify-center transition-opacity duration-500 ease-in-out ${
          expanded ? "opacity-0" : "opacity-100"
        }`}
      >
        <img
          src="/images/ph-product-of-the-month-icon.svg"
          alt=""
          width="43"
          height="43"
          className="size-[43px]"
        />
      </div>

      <img
        alt={badgeAlt[period]}
        width="200"
        height="43"
        src={badgeSrc[period]}
        className={`h-[43px] w-[200px] max-w-none transition-opacity duration-500 ease-in-out ${
          expanded ? "opacity-100" : "opacity-0"
        }`}
      />
    </a>
  );
}
