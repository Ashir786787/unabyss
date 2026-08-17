import { ArrowLeft, Mail } from "lucide-react";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import type { JobPosting } from "@/data/jobs";

function ListSection({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <Reveal>
      <div className="flex flex-col gap-4">
        <h2
          className="v2-print-display text-white"
          style={{ fontSize: "clamp(20px, 2.4vw, 26px)", lineHeight: 1.3 }}
        >
          {title}
        </h2>
        <ul className="flex flex-col gap-3">
          {items.map((item) => (
            <li key={item} className="flex gap-3 text-[15px] font-light leading-[1.7] text-white/60">
              <span className="mt-[11px] size-1 shrink-0 rounded-full bg-white/30" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

export default function JobDetailSection({ job }: { job: JobPosting }) {
  const mailHref = `mailto:jobs@unabyss.com?subject=${encodeURIComponent(job.applySubject)}`;
  return (
    <>
      <section className="relative px-6 pb-10 pt-24 sm:px-10 sm:pt-28 lg:px-12">
        <div className="relative mx-auto max-w-[820px]">
          <Reveal>
            <Link
              href="/jobs"
              className="v2-mono inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.16em] text-white/45 no-underline transition-colors hover:text-white"
            >
              <ArrowLeft className="size-3.5" aria-hidden="true" />
              All jobs
            </Link>
            <h1
              className="v2-print-display mt-6 max-w-[16ch] text-white"
              style={{ fontSize: "clamp(32px, 4.6vw, 54px)", lineHeight: 1.08 }}
            >
              {job.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="v2-mono rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-white/55">
                {job.roleType}
              </span>
              <span className="v2-mono rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-white/55">
                {job.level}
              </span>
              <span className="v2-mono rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-white/55">
                {job.schedule}
              </span>
              <span className="v2-mono rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-white/55">
                {job.location}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative px-6 py-10 sm:px-10 lg:px-12">
        <div className="relative mx-auto flex max-w-[820px] flex-col gap-14">
          <Reveal>
            <div className="flex flex-col gap-4">
              <h2
                className="v2-print-display text-white"
                style={{ fontSize: "clamp(20px, 2.4vw, 26px)", lineHeight: 1.3 }}
              >
                About Unabyss
              </h2>
              {job.about.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-[15px] font-light leading-[1.75] text-white/60 sm:text-[16px]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <ListSection title="What you're gonna do" items={job.responsibilities} />
          <ListSection title="What we require from you" items={job.requirements} />
          <ListSection title="What's nice to have" items={job.niceToHave} />
          <ListSection title="What you'll get" items={job.perks} />

          <Reveal>
            <div className="v2-shine v2-shine--light v2-glass-panel v2-glass-panel--gold rounded-[24px] p-8 sm:p-10">
              <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col gap-2">
                  <span className="v2-print-label">Apply</span>
                  <p className="max-w-[46ch] text-[15px] font-light leading-[1.7] text-white/70">
                    Send your CV and a short note to jobs@unabyss.com — we
                    reply to every application.
                  </p>
                </div>
                <a
                  href={mailHref}
                  className="group inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 text-[15px] font-medium text-black no-underline transition-all hover:bg-white/90"
                >
                  <Mail className="size-4" aria-hidden="true" />
                  Apply now
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
