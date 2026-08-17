import type { Metadata } from "next";
import JobsSection from "@/components/sections/JobsSection";

export const metadata: Metadata = {
  title: "Jobs at Unabyss — We're Hiring",
  description:
    "We just raised pre-seed and are building the universal context layer for AI. Open roles: Backend Engineer with DevOps and ML Engineer / LLM Specialist.",
  openGraph: {
    title: "Jobs at Unabyss — We're Hiring",
    description:
      "We just raised pre-seed and are building the universal context layer for AI.",
  },
};

export default function JobsPage() {
  return <JobsSection />;
}
