import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JobDetailSection from "@/components/sections/JobDetailSection";
import { jobPostings } from "@/data/jobs";

function getJob(slug: string) {
  return jobPostings.find((job) => job.slug === slug);
}

export function generateStaticParams() {
  return jobPostings.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) {
    return {};
  }
  return {
    title: `${job.title} — Jobs — Unabyss`,
    description: job.description,
  };
}

export default async function JobPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) {
    notFound();
  }
  return <JobDetailSection job={job} />;
}
