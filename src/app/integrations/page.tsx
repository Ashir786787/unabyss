import type { Metadata } from "next";
import IntegrationsSection from "@/components/sections/IntegrationsSection";

export const metadata: Metadata = {
  title: "Integrations — Unabyss",
  description:
    "Plug Unabyss into every AI client via MCP and connect the sources that already hold your context — LinkedIn, Gmail, Google Drive, Slack, GitHub and more.",
  openGraph: {
    title: "Integrations — Unabyss",
    description:
      "Plug Unabyss into every AI client via MCP and connect the sources that already hold your context.",
  },
};

export default function IntegrationsPage() {
  return <IntegrationsSection />;
}
