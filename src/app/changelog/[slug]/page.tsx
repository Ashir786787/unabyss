import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import {
  changelogEntries,
  getChangelogEntry,
  type ChangelogEntry,
} from "@/data/changelog";

export function generateStaticParams() {
  return changelogEntries.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getChangelogEntry(slug);
  if (!entry) {
    return {};
  }
  return {
    title: `Unabyss v${entry.version} — ${entry.title} | Unabyss`,
    description: entry.summary,
  };
}

function earlierUpdates(current: ChangelogEntry): ChangelogEntry[] {
  return changelogEntries
    .filter((entry) => entry.slug !== current.slug)
    .slice(0, 3);
}

export default async function ChangelogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getChangelogEntry(slug);
  if (!entry) {
    notFound();
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `Unabyss v${entry.version}`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    softwareVersion: entry.version,
    url: `https://unabyss.com/changelog/${entry.slug}`,
    datePublished: entry.datePublished ?? entry.dateIso,
    dateModified: entry.datePublished ?? entry.dateIso,
    releaseNotes: entry.summary,
  };

  const earlier = earlierUpdates(entry);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="relative px-6 pb-10 pt-32 sm:px-10 sm:pt-40 lg:px-12">
        <div className="relative mx-auto max-w-[760px]">
          <Link
            href="/changelog"
            className="group inline-flex items-center gap-1.5 text-[13px] font-medium text-white/60 no-underline transition-colors hover:text-white"
          >
            <ArrowLeft
              strokeWidth={1.8}
              className="size-3.5 transition-transform group-hover:-translate-x-0.5"
            />
            All updates
          </Link>

          <div className="mt-8 flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="v2-mono inline-flex items-center rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-[12px] tracking-[0.14em] text-white/80">
                v{entry.version}
              </span>
              {entry.major ? (
                <span
                  className="v2-mono inline-flex items-center rounded-full border border-[var(--gold-muted)]/35 px-3 py-1 text-[10px] uppercase tracking-[0.16em]"
                  style={{ color: "var(--gold-text)" }}
                >
                  Major update
                </span>
              ) : null}
              <span className="v2-mono text-[12px] tracking-[0.1em] text-white/40">
                {entry.date}
              </span>
            </div>
            <h1
              className="v2-print-display max-w-[22ch] text-white"
              style={{ fontSize: "clamp(30px, 4.4vw, 52px)", lineHeight: 1.1 }}
            >
              {entry.title}
            </h1>
          </div>
        </div>
      </section>

      <section className="relative px-6 py-10 sm:px-10 sm:py-14 lg:px-12">
        <div className="relative mx-auto max-w-[760px]">
          <Reveal className="flex flex-col gap-8">
            <p className="max-w-[60ch] text-[16.5px] font-light leading-[1.75] text-white/70">
              {entry.lead ?? entry.summary}
            </p>

            {entry.sections?.map((section) => (
              <div key={section.heading}>
                <h3 className="v2-mono text-[12px] font-medium uppercase tracking-[0.2em] text-white/50">
                  {section.heading}
                </h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-[15px] font-light leading-[1.75] text-white/65"
                    >
                      <span
                        className="mt-2.5 size-1.5 shrink-0 rounded-full"
                        style={{ background: "var(--gold-muted)" }}
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="relative px-6 py-14 sm:px-10 sm:py-20 lg:px-12">
        <div className="relative mx-auto max-w-[760px]">
          <h2 className="mb-6 text-[20px] font-medium text-white">
            Earlier updates
          </h2>
          <div className="flex flex-col gap-3.5">
            {earlier.map((item) => (
              <Link
                key={item.slug}
                href={`/changelog/${item.slug}`}
                className="v2-shine v2-glass-panel group flex items-center justify-between gap-4 rounded-[16px] px-5 py-4 no-underline transition-colors"
              >
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2.5">
                    <span className="v2-mono text-[11.5px] tracking-[0.12em] text-white/70">
                      v{item.version}
                    </span>
                    {item.major ? (
                      <span
                        className="v2-mono text-[9px] uppercase tracking-[0.16em]"
                        style={{ color: "var(--gold-text)" }}
                      >
                        Major
                      </span>
                    ) : null}
                    <span className="v2-mono text-[11px] tracking-[0.08em] text-white/35">
                      {item.date}
                    </span>
                  </div>
                  <span className="text-[14.5px] font-medium text-white/85">
                    {item.title}
                  </span>
                </div>
                <span className="shrink-0 text-white/40 transition-colors group-hover:text-white">
                  <ArrowUpRight
                    strokeWidth={1.8}
                    className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
