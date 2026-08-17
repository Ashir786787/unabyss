import type { Metadata } from "next";
import BlogPageSection from "@/components/sections/BlogPageSection";

export const metadata: Metadata = {
  title: "The Unabyss Vault - Blog",
  description:
    "Everything we know about personal context for AI - what it is, how it works, how to build it, and why the difference between context and memory matters more...",
  openGraph: {
    type: "website",
    url: "https://unabyss.com/blog",
    title: "The Unabyss Vault - Blog",
    description:
      "Everything we know about personal context for AI - what it is, how it works, how to build it, and why the difference between context and memory matters more...",
  },
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string; page?: string }>;
}) {
  const { tag, page } = await searchParams;
  const activeTag = tag === "product" || tag === "knowledge" ? tag : "all";
  const pageNum = Math.max(1, parseInt(page ?? "1", 10) || 1);

  return <BlogPageSection tag={activeTag} page={pageNum} />;
}
