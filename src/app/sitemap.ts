import type { MetadataRoute } from "next";
import { blogPosts, featuredPost } from "@/data/blog";
import { changelogEntries } from "@/data/changelog";
import { jobPostings } from "@/data/jobs";
import { promotionTermsList } from "@/data/promotionTerms";

const BASE = "https://unabyss.com";

const staticRoutes = [
  "/",
  "/blog",
  "/changelog",
  "/connect-chatgpt",
  "/connect-claude",
  "/context-vs-memory",
  "/faq",
  "/global-instructions",
  "/how-it-works",
  "/integrations",
  "/jobs",
  "/mcp-docs",
  "/polityka-prywatnosci",
  "/privacy",
  "/referrals",
  "/regulamin",
  "/restricted-jurisdictions",
  "/security",
  "/see-what-unabyss-can-do",
  "/skills",
  "/teams",
  "/terms",
  "/unabyss-for-agencies",
  "/unabyss-for-builders",
  "/unabyss-for-founders",
  "/unabyss-for-gtm",
  "/unabyss-vs-context-files",
  "/unabyss-vs-external-knowledge",
  "/unabyss-vs-llm-memory",
  "/would-unabyss-help",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const allPosts = [featuredPost, ...blogPosts];
  return [
    ...staticRoutes.map((route) => ({ url: `${BASE}${route}` })),
    ...allPosts.map((post) => ({ url: `${BASE}${post.href}` })),
    ...changelogEntries.map((entry) => ({
      url: `${BASE}/changelog/${entry.slug}`,
    })),
    ...jobPostings.map((job) => ({ url: `${BASE}/jobs/${job.slug}` })),
    ...promotionTermsList.map((promotion) => ({
      url: `${BASE}/terms/promotion/${promotion.slug}`,
    })),
  ];
}
