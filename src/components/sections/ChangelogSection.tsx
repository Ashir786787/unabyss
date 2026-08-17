"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { changelogEntries, type ChangelogEntry } from "@/data/changelog";

const PAGE_SIZE = 10;

function ChangelogRow({ entry }: { entry: ChangelogEntry }) {
  return (
    <a
      href={`/changelog/${entry.slug}`}
      className="v2-shine v2-glass-panel group flex flex-col gap-3 rounded-[18px] p-6 no-underline transition-colors sm:p-7"
    >
      <div className="flex flex-wrap items-center gap-3">
        <span className="v2-mono inline-flex items-center rounded-full border border-white/15 bg-white/[0.04] px-2.5 py-1 text-[11px] tracking-[0.14em] text-white/75">
          v{entry.version}
        </span>
        {entry.major ? (
          <span
            className="v2-mono inline-flex items-center rounded-full border border-[var(--gold-muted)]/35 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em]"
            style={{ color: "var(--gold-text)" }}
          >
            Major update
          </span>
        ) : null}
        <span className="v2-mono ml-auto text-[11.5px] tracking-[0.1em] text-white/40">
          {entry.date}
        </span>
      </div>

      <h2 className="text-[19px] font-medium leading-snug text-white sm:text-[21px]">
        {entry.title}
      </h2>

      <div className="flex items-end justify-between gap-4">
        <p className="max-w-[58ch] text-[14.5px] font-light leading-[1.7] text-white/55">
          {entry.summary}
        </p>
        <span className="hidden shrink-0 text-white/40 transition-colors group-hover:text-white sm:block">
          <ArrowUpRight
            strokeWidth={1.8}
            className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
    </a>
  );
}

export default function ChangelogSection() {
  const [page, setPage] = useState(1);

  const pageCount = Math.max(1, Math.ceil(changelogEntries.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const visible = changelogEntries.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  return (
    <>
      <section className="relative px-6 pb-10 pt-28 sm:px-10 sm:pt-32 lg:px-12">
        <div className="relative mx-auto max-w-[760px]">
          <Reveal className="flex flex-col items-center text-center">
            <span className="v2-print-label">Changelog</span>
            <h1
              className="v2-print-display mt-5 text-white"
              style={{ fontSize: "clamp(38px, 5.4vw, 66px)", lineHeight: 1.05 }}
            >
              What&apos;s new in Unabyss
            </h1>
            <p className="mt-6 max-w-[54ch] text-[17px] font-light leading-[1.7] text-white/65 sm:text-[18px]">
              What is new and what got better in Unabyss — focused on the
              product you use every day.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative px-6 py-10 sm:px-10 lg:px-12">
        <div className="relative mx-auto flex max-w-[760px] flex-col gap-3.5">
          {visible.map((entry) => (
            <Reveal key={entry.slug}>
              <ChangelogRow entry={entry} />
            </Reveal>
          ))}

          <div className="mt-8 flex items-center justify-between gap-4 border-t border-white/[0.07] pt-6">
            <p className="v2-mono text-[12px] tracking-[0.12em] text-white/45">
              Page {currentPage} of {pageCount}
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                disabled={currentPage <= 1}
                onClick={() => setPage(currentPage - 1)}
                aria-label="Previous page"
                className="inline-flex size-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors enabled:hover:bg-white/[0.06] enabled:hover:text-white disabled:opacity-30"
              >
                <ArrowLeft className="size-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                disabled={currentPage >= pageCount}
                onClick={() => setPage(currentPage + 1)}
                aria-label="Next page"
                className="inline-flex size-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors enabled:hover:bg-white/[0.06] enabled:hover:text-white disabled:opacity-30"
              >
                <ArrowRight className="size-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
