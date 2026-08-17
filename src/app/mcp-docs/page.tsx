import type { Metadata } from "next";
import McpDocsSection from "@/components/sections/McpDocsSection";

export const metadata: Metadata = {
  title: "Unabyss MCP API Reference",
  description:
    "Streamable HTTP JSON-RPC API for personal context tools at mcp.unabyss.com. Base URL, authentication, methods, tools, error codes, rate limits and credits.",
  openGraph: {
    title: "Unabyss MCP API Reference",
    description:
      "Streamable HTTP JSON-RPC API for personal context tools at mcp.unabyss.com.",
  },
};

export default function McpDocsPage() {
  return <McpDocsSection />;
}
