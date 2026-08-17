"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { ArrowUpRight, Download, Eye, X, Zap } from "lucide-react";
import { skillCategories, skills, type Skill } from "@/data/skills";

const PAGE_SIZE = 12;

type Filter = "all" | "unabyss" | "fork" | (typeof skillCategories)[number];

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "unabyss", label: "Unabyss" },
  { id: "fork", label: "Forks" },
  ...skillCategories.map((category) => ({
    id: category as Filter,
    label: category,
  })),
];

function SkillCard({
  skill,
  onPreview,
}: {
  skill: Skill;
  onPreview: (skill: Skill) => void;
}) {
  const bundlePath = `/skill-bundles/${skill.source}/${skill.slug}.skill`;

  return (
    <div className="v2-shine v2-shine--light v2-glass-panel group/card relative flex min-h-[230px] flex-col rounded-[16px] p-5 transition-colors hover:border-white/20">
      <a
        href={bundlePath}
        download={`${skill.slug}.skill`}
        aria-label={`Download the ${skill.title} skill`}
        className="absolute inset-0 z-0 rounded-[16px]"
      />

      <div className="pointer-events-none relative z-10 flex items-start justify-between gap-3">
        {skill.source === "unabyss" ? (
          <span className="v2-mono inline-flex items-center gap-1.5 rounded-full border border-amber-300/25 bg-amber-200/[0.06] px-2.5 py-1 text-[9.5px] uppercase tracking-[0.16em] text-amber-100/75">
            Unabyss skill
          </span>
        ) : (
          <span className="v2-mono inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[9.5px] uppercase tracking-[0.16em] text-white/55">
            Fork
          </span>
        )}

        <button
          type="button"
          aria-label={`Preview the ${skill.title} skill`}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onPreview(skill);
          }}
          className="pointer-events-auto inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/55 transition-colors hover:border-white/25 hover:text-white"
        >
          <Eye className="size-4" aria-hidden="true" />
        </button>
      </div>

      <div className="pointer-events-none relative z-[1] mt-4 flex flex-1 flex-col">
        <h3 className="text-[16px] font-medium leading-snug text-white">
          {skill.title}
        </h3>

        <p className="mt-2 text-[13px] font-light leading-[1.6] text-white/55">
          {skill.description}
        </p>

        {skill.secondary ? (
          <p className="mt-3 text-[12px] font-light italic leading-[1.55] text-white/40">
            {skill.secondary}
          </p>
        ) : null}

        <div className="mt-auto flex items-center justify-between gap-3 pt-4">
          <Download
            className="size-3.5 text-white/60 transition-colors group-hover/card:text-white"
            aria-hidden="true"
          />
          <span className="v2-mono text-[9.5px] uppercase tracking-[0.16em] text-white/30">
            {skill.category}
          </span>
        </div>
      </div>
    </div>
  );
}

function SkillPreview({
  skill,
  onClose,
}: {
  skill: Skill;
  onClose: () => void;
}) {
  const bundlePath = `/skill-bundles/${skill.source}/${skill.slug}.skill`;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        className="v2-glass-panel relative max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-[20px] p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close preview"
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex size-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/60 transition-colors hover:border-white/25 hover:text-white"
        >
          <X className="size-4" aria-hidden="true" />
        </button>

        {skill.source === "unabyss" ? (
          <span className="v2-mono inline-flex items-center gap-1.5 rounded-full border border-amber-300/25 bg-amber-200/[0.06] px-2.5 py-1 text-[9.5px] uppercase tracking-[0.16em] text-amber-100/75">
            Unabyss skill
          </span>
        ) : (
          <span className="v2-mono inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[9.5px] uppercase tracking-[0.16em] text-white/55">
            Fork
          </span>
        )}

        <h2 className="v2-print-display mt-4 text-[20px] font-medium text-white">
          {skill.title}
        </h2>

        <p className="mt-3 text-[14px] font-light leading-[1.7] text-white/65">
          {skill.description}
        </p>

        {skill.secondary ? (
          <p className="mt-3 text-[13px] font-light italic leading-[1.6] text-white/45">
            {skill.secondary}
          </p>
        ) : null}

        <div className="mt-6 flex items-center gap-3">
          <a
            href={bundlePath}
            download={`${skill.slug}.skill`}
            className="inline-flex h-10 items-center gap-1.5 rounded-full bg-white px-5 text-[13px] font-medium text-black transition-all hover:bg-white/90"
          >
            <Download className="size-3.5" aria-hidden="true" />
            Download
          </a>

          {skill.sourceUrl ? (
            <a
              href={skill.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-1.5 rounded-full border border-white/15 px-5 text-[13px] font-medium text-white/75 transition-colors hover:border-white/25 hover:text-white"
            >
              Source
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </a>
          ) : null}
        </div>

        <p className="v2-mono mt-4 text-[11px] uppercase tracking-[0.14em] text-white/30">
          {skill.category}
        </p>
      </div>
    </div>
  );
}

export default function SkillsSection({ initialPage }: { initialPage?: number }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(initialPage ?? 1);
  const [previewSkill, setPreviewSkill] = useState<Skill | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return skills.filter((skill) => {
      if (filter === "unabyss" && skill.source !== "unabyss") return false;
      if (filter === "fork" && skill.source !== "fork") return false;
      if (
        filter !== "all" &&
        filter !== "unabyss" &&
        filter !== "fork" &&
        skill.category !== filter
      ) {
        return false;
      }
      if (q && !skill.title.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [filter, query]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const visible = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  const goTo = useCallback(
    (next: number) => {
      const p = Math.max(1, Math.min(next, pageCount));
      setPage(p);
      window.history.pushState(null, "", p <= 1 ? "/skills" : `/skills?page=${p}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [pageCount],
  );

  useEffect(() => {
    function onPop() {
      const params = new URLSearchParams(window.location.search);
      const p = Number(params.get("page")) || 1;
      setPage(p);
    }
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  function selectFilter(next: Filter) {
    setFilter(next);
    setPage(1);
    window.history.pushState(null, "", "/skills");
  }

  const pageNumbers = useMemo(() => {
    const nums: (number | "...")[] = [];
    if (pageCount <= 7) {
      for (let i = 1; i <= pageCount; i++) nums.push(i);
    } else {
      const set = new Set([1, currentPage, pageCount]);
      if (currentPage > 2) set.add(currentPage - 1);
      if (currentPage < pageCount - 1) set.add(currentPage + 1);
      if (currentPage <= 3) {
        set.add(2);
        set.add(3);
        set.add(4);
      }
      if (currentPage >= pageCount - 2) {
        set.add(pageCount - 2);
        set.add(pageCount - 1);
      }
      const sorted = [...set].sort((a, b) => a - b);
      for (let i = 0; i < sorted.length; i++) {
        if (i > 0 && sorted[i] - sorted[i - 1] > 1) nums.push("...");
        nums.push(sorted[i]);
      }
    }
    return nums;
  }, [currentPage, pageCount]);

  return (
    <>
      <section className="relative px-6 pb-10 pt-28 sm:px-10 sm:pt-32 lg:px-12">
        <div className="relative mx-auto max-w-[1100px]">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_360px] lg:gap-12">
            <div className="flex max-w-3xl flex-col items-start">
              <p className="v2-mono mb-3 text-[10px] uppercase tracking-[0.22em] text-white/40">
                Skills Library
              </p>
              <h1 className="v2-print-display text-[clamp(28px,4vw,42px)] font-medium leading-tight text-white">
                Unabyss Skills Library
              </h1>
              <p className="mt-6 text-[15px] font-light leading-[1.75] text-white/65">
                A growing library of Claude skills, each rewired to run on your
                real Unabyss context instead of a blank template. Download any
                skill and add it to Claude, or preview exactly what it does
                first.{" "}
                {skills.filter((skill) => skill.source === "unabyss").length}{" "}
                built by Unabyss,{" "}
                {skills.filter((skill) => skill.source === "fork").length}{" "}
                forked from the community and adapted.
              </p>
              <a
                href="https://github.com/Unabyss/unabyss-skills/tree/main"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-[13px] font-medium text-white/75 no-underline transition-colors hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                    transform="scale(64)"
                  />
                </svg>
                View skills on GitHub
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </a>
            </div>

            <div className="v2-shine v2-shine--light v2-glass-panel--gold group relative flex flex-col overflow-hidden rounded-[18px] p-6">
              <div
                className="pointer-events-none absolute -right-8 -top-12 size-44 rounded-full opacity-60 blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(var(--gold-glow-rgb), 0.2), transparent 70%)",
                }}
                aria-hidden="true"
              />
              <span className="v2-mono relative z-[1] inline-flex w-fit items-center gap-1.5 rounded-full border border-amber-300/25 bg-amber-200/[0.06] px-2.5 py-1 text-[9.5px] uppercase tracking-[0.16em] text-amber-100/80">
                <Zap className="size-3" aria-hidden="true" />
                Unabyss MCP
              </span>
              <h2 className="v2-print-display relative z-[1] mt-4 text-[19px] font-medium leading-snug text-white">
                One-click setup
              </h2>
              <p className="relative z-[1] mt-2 text-[13px] font-light leading-[1.6] text-white/65">
                Every skill here is already built into the Unabyss MCP, running
                on your real context. Connect once instead of downloading each
                one.
              </p>
              <a
                href="https://app.unabyss.com/register"
                className="group/btn relative z-[1] mt-5 inline-flex h-10 w-full items-center justify-center gap-1.5 rounded-full bg-white px-5 text-[13px] font-medium text-black transition-all hover:bg-white/90"
              >
                Try now{" "}
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-6 py-10 sm:px-10 lg:px-12">
        <div className="relative mx-auto max-w-[1100px]">
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-2">
              <nav
                className="flex min-w-0 flex-1 items-center gap-2"
                aria-label="Filter skills"
              >
                {filters.map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => selectFilter(f.id)}
                    aria-pressed={filter === f.id}
                    className={`v2-mono shrink-0 rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.14em] transition-colors ${
                      filter === f.id
                        ? "border-white/20 bg-white/10 text-white"
                        : "border-white/10 bg-transparent text-white/50 hover:border-white/20 hover:text-white/80"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </nav>
              <div className="relative shrink-0">
                <svg
                  className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-white/40"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <input
                  type="search"
                  value={query}
                  onChange={(event) => {
                    setQuery(event.target.value);
                    setPage(1);
                    window.history.pushState(null, "", "/skills");
                  }}
                  placeholder="Search skills"
                  aria-label="Search skills"
                  className="skills-search-input v2-mono w-full rounded-full border border-white/10 bg-transparent py-2 pl-9 pr-4 text-[11px] uppercase tracking-[0.14em] text-white placeholder:text-white/35 transition-colors focus:border-white/25 focus:outline-none sm:w-[280px]"
                />
              </div>
            </div>
            <p className="mb-8 text-[12px] font-light text-white/35">
              {filtered.length} skills
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((skill) => (
              <SkillCard
                key={skill.slug}
                skill={skill}
                onPreview={setPreviewSkill}
              />
            ))}
          </div>

          {visible.length === 0 ? (
            <p className="mt-16 text-center text-[15px] font-light text-white/50">
              No skills match your filters.
            </p>
          ) : null}

          {pageCount > 1 ? (
            <nav
              className="mt-12 flex flex-wrap items-center justify-center gap-1.5"
              aria-label="Skills pagination"
            >
              {pageNumbers.map((n, i) =>
                n === "..." ? (
                  <span
                    key={`ellipsis-${i}`}
                    className="px-1 text-[13px] font-medium text-white/35"
                    aria-hidden="true"
                  >
                    ...
                  </span>
                ) : (
                  <button
                    key={n}
                    type="button"
                    onClick={() => goTo(n)}
                    className={`flex size-8 items-center justify-center rounded-full text-[13px] font-medium transition-colors ${
                      currentPage === n
                        ? "bg-white/12 text-white"
                        : "text-white/50 hover:text-white/85"
                    }`}
                    aria-current={currentPage === n ? "page" : undefined}
                  >
                    {n}
                  </button>
                ),
              )}
              {currentPage < pageCount ? (
                <button
                  type="button"
                  onClick={() => goTo(currentPage + 1)}
                  className="rounded-full px-3 py-1.5 text-[13px] font-medium text-white/55 transition-colors hover:text-white"
                >
                  Next
                </button>
              ) : null}
            </nav>
          ) : null}
        </div>
      </section>

      <section className="relative px-6 pb-24 pt-10 sm:px-10 sm:pb-28 lg:px-12">
        <div className="relative mx-auto max-w-[1100px]">
          <div className="v2-shine v2-shine--light v2-glass-panel--gold group relative mt-16 flex flex-col items-start gap-6 overflow-hidden rounded-[20px] p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
            <div
              className="pointer-events-none absolute -right-10 -top-16 size-56 rounded-full opacity-60 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(var(--gold-glow-rgb), 0.18), transparent 70%)",
              }}
              aria-hidden="true"
            />
            <div className="relative z-[1] max-w-xl">
              <span className="v2-mono inline-flex items-center gap-1.5 rounded-full border border-amber-300/25 bg-amber-200/[0.06] px-2.5 py-1 text-[9.5px] uppercase tracking-[0.16em] text-amber-100/80">
                <Zap className="size-3" aria-hidden="true" />
                Unabyss MCP
              </span>
              <h2 className="v2-print-display mt-4 text-[clamp(20px,2.4vw,26px)] font-medium leading-tight text-white">
                All {skills.length} skills, live in one MCP
              </h2>
              <p className="mt-3 text-[14px] font-light leading-[1.65] text-white/65">
                Skip the downloads. Connect the Unabyss MCP once and every
                skill runs on your real context inside Claude. One-click setup,
                no config files.
              </p>
            </div>
            <a
              href="https://app.unabyss.com/register"
              className="group/btn relative z-[1] inline-flex h-11 shrink-0 items-center justify-center gap-1.5 rounded-full bg-white px-6 text-[13px] font-medium text-black transition-all hover:bg-white/90"
            >
              Try now{" "}
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {previewSkill ? (
        <SkillPreview
          skill={previewSkill}
          onClose={() => setPreviewSkill(null)}
        />
      ) : null}
    </>
  );
}
