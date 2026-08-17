"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, Mail, Plus, Search } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { faqGroups, type FaqGroup } from "@/data/faq-page";

function FaqAccordion({ group }: { group: FaqGroup }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="flex flex-col gap-3">
      {group.items.map((item, index) => {
        const open = openIndex === index;

        return (
          <div
            key={item.question}
            className={`group rounded-2xl border backdrop-blur-[var(--glass-blur)] backdrop-saturate-[var(--glass-saturate)] transition-colors ${
              open
                ? "border-[var(--glass-border-hover)] bg-[var(--glass-bg-hover)]"
                : "border-[var(--glass-border)] bg-[var(--glass-bg)] hover:border-[var(--glass-border-hover)] hover:bg-[var(--glass-bg-hover)]"
            }`}
          >
            <button
              type="button"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? -1 : index)}
              className="flex w-full flex-1 items-center justify-between gap-4 rounded-2xl px-5 py-3.5 text-left text-[15px] font-medium leading-[1.4] text-white outline-none transition-colors focus-visible:ring-2 focus-visible:ring-white/30 sm:px-6 sm:py-4 sm:text-[16px]"
            >
              <span className="block max-w-[64ch]">{item.question}</span>
              <span
                className={`shrink-0 text-white/45 transition-[transform,colors] duration-200 group-hover:text-white/75 ${
                  open ? "rotate-45 text-white" : ""
                }`}
                aria-hidden="true"
              >
                <Plus className="size-4 transition-transform duration-200" />
              </span>
            </button>

            {open && (
              <div className="px-6 pb-6 pt-0 sm:px-7 sm:pb-7">
                <div className="flex flex-col gap-3 border-t border-white/10 pt-4 text-[14.5px] font-light leading-[1.75] text-white/70 sm:text-[15px]">
                  {item.answer.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function FAQPageSection() {
  const [query, setQuery] = useState("");

  const filteredGroups = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return faqGroups;

    return faqGroups
      .map((group) => ({
        ...group,
        items: group.items.filter(
          (item) =>
            item.question.toLowerCase().includes(q) ||
            item.answer.some((p) => p.toLowerCase().includes(q)),
        ),
      }))
      .filter((group) => group.items.length > 0);
  }, [query]);

  return (
    <>
      <section className="relative px-6 pb-8 pt-28 sm:px-10 sm:pt-32 lg:px-12">
        <div className="relative mx-auto max-w-[860px]">
          <Reveal className="flex flex-col items-center text-center">
            <span className="v2-print-label">FAQ</span>
            <h1
              className="v2-print-display mt-5 text-white"
              style={{
                fontSize: "clamp(38px, 5.4vw, 66px)",
                lineHeight: 1.08,
              }}
            >
              Frequently asked questions
            </h1>
            <p className="mt-6 max-w-[54ch] text-[17px] font-light leading-[1.7] text-white/65 sm:text-[18px]">
              What Unabyss is, how your context is built and protected, and how
              to plug it into the AI tools you already use. Tap any question to
              expand the answer.
            </p>
          </Reveal>

          <Reveal delay={60} className="mx-auto mt-10 max-w-[540px]">
            <div className="relative">
              <Search
                className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-white/40"
                aria-hidden="true"
              />
              <input
                id="faq-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search questions"
                className="v2-mono w-full rounded-full border border-white/10 bg-white/[0.03] py-3 pl-9 pr-4 text-[14px] tracking-[0.14em] text-white/80 outline-none transition-colors placeholder:text-white/35 focus:border-white/25"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative px-6 pb-12 sm:px-10 lg:px-12">
        <div className="relative mx-auto flex max-w-[820px] flex-col gap-12 sm:gap-16">
          {filteredGroups.map((group) => (
            <Reveal key={group.id}>
              <div className="flex flex-col gap-5">
                <h2
                  className="v2-print-display text-white"
                  style={{ fontSize: "clamp(22px, 2.6vw, 30px)", lineHeight: 1.3 }}
                >
                  {group.title}
                </h2>
                <FaqAccordion group={group} />
              </div>
            </Reveal>
          ))}

          {filteredGroups.length === 0 ? (
            <Reveal>
              <p className="text-center text-[15px] font-light text-white/50">
                No questions match your search.
              </p>
            </Reveal>
          ) : null}
        </div>
      </section>

      <section className="relative px-6 pb-24 sm:px-10 sm:pb-28 lg:px-12">
        <Reveal delay={120} className="relative mx-auto max-w-[820px]">
          <div className="v2-shine v2-shine--light v2-glass-panel v2-glass-panel--gold relative rounded-[28px] p-8 sm:p-10">
            <div
              className="pointer-events-none absolute -top-32 left-1/2 size-80 -translate-x-1/2 rounded-full"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(var(--gold-glow-rgb), 0.2), transparent 70%)",
              }}
              aria-hidden="true"
            />
            <div className="relative z-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col gap-2">
                <span className="v2-print-label">Support</span>
                <h2
                  className="v2-print-display mt-2 text-white"
                  style={{ fontSize: "clamp(24px, 3vw, 32px)", lineHeight: 1.25 }}
                >
                  Still have a question?
                </h2>
                <p className="max-w-[44ch] text-[15px] font-light leading-[1.7] text-white/60 sm:text-[16px]">
                  Email us and we will get back to you, or book a call to talk
                  it through with the team.
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-3">
                <a
                  href="mailto:support@unabyss.com"
                  className="group inline-flex h-11 items-center justify-center gap-2 rounded-full bg-white px-5 text-[15px] font-medium text-black no-underline transition-all hover:bg-white/90"
                >
                  <Mail className="size-4" aria-hidden="true" />
                  Email us
                </a>
                <a
                  href="#"
                  className="group inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/15 px-5 text-[15px] font-medium text-white no-underline transition-colors hover:bg-white/5"
                >
                  Book a call
                  <ArrowUpRight
                    strokeWidth={1.8}
                    className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
