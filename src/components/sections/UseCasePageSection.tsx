"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Plus } from "lucide-react";
import LoomPlayer from "@/components/visuals/LoomPlayer";
import Reveal from "@/components/ui/Reveal";
import {
  useCaseCompares,
  useCaseTrust,
  type UseCasePageData,
} from "@/data/use-case-pages";

const trustLogos = [
  { name: "Claude", src: "/images/tools/claude.svg" },
  { name: "ChatGPT", src: "/images/tools/chatgpt.svg" },
  { name: "Gemini", src: "/images/tools/gemini.svg" },
  { name: "Perplexity", src: "/images/tools/perplexity.svg" },
  { name: "Cursor", src: "/images/tools/cursor.svg" },
  { name: "Gmail", src: "/images/tools/gmail.svg" },
  { name: "Notion", src: "/images/tools/notion.svg" },
  { name: "Slack", src: "/images/tools/slack.svg" },
  { name: "Google Calendar", src: "/images/tools/google-calendar.svg" },
  { name: "Google Drive", src: "/images/tools/google-drive.svg" },
  { name: "Linear", src: "/images/tools/linear.svg" },
];

export default function UseCasePageSection({ page }: { page: UseCasePageData }) {
  return (
    <>
      <section className="relative px-6 pb-8 pt-28 sm:px-10 sm:pt-32 lg:px-12">
        <div className="relative mx-auto max-w-[1100px]">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14">
            <Reveal className="flex flex-col items-start">
              <span className="v2-print-label">Use cases</span>
              <h1
                className="v2-print-display mt-5 max-w-[16ch] text-white"
                style={{ fontSize: "clamp(32px, 4.2vw, 52px)", lineHeight: 1.15 }}
              >
                {page.heroTitle}
              </h1>
              <p className="mt-6 max-w-[56ch] text-[17px] font-light leading-[1.7] text-white/65 sm:text-[18px]">
                {page.heroParagraph}
              </p>
              <a
                href="https://app.unabyss.com/register"
                target="_blank"
                rel="noreferrer"
                className="group mt-8 inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 text-[15px] font-medium text-black no-underline transition-all hover:bg-white/90"
              >
                {page.heroCta}
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.8}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </Reveal>

            <Reveal delay={120} className="w-full">
              <LoomPlayer demo={page.featured.demo} />
              <div className="mt-5">
                <h2 className="text-[16px] font-medium leading-snug text-white">
                  {page.featured.title}
                </h2>
                <p className="mt-2 text-[14px] font-light leading-[1.7] text-white/60">
                  {page.featured.body}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative px-6 py-16 sm:px-10 sm:py-20 lg:px-12">
        <div className="relative mx-auto max-w-[1100px]">
          <Reveal className="flex flex-col items-center gap-3 text-center">
            <span className="v2-print-label">The pain</span>
            <h2
              className="v2-print-display text-white"
              style={{ fontSize: "clamp(26px, 3.2vw, 40px)", lineHeight: 1.2 }}
            >
              {page.painTitle}
            </h2>
          </Reveal>

          <Reveal delay={100} className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
            {page.painCards.map((card) => (
              <div
                key={card.title}
                className="v2-shine v2-shine--light v2-card-glass flex flex-col overflow-hidden rounded-[18px]"
              >
                <div className="aspect-[4/5] w-full">
                  <div className="group relative h-full w-full bg-[#0a0a0a]">
                    <div
                      className="v2-print-grain pointer-events-none absolute inset-0"
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-3 p-6">
                  <h3 className="text-[17px] font-medium leading-snug text-white">
                    {card.title}
                  </h3>
                  <p className="text-[15px] font-light leading-[1.7] text-white/60">
                    {card.body}
                  </p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {page.painCta ? (
        <section className="relative px-6 pb-8 pt-2 sm:px-10 lg:px-12">
          <div className="mx-auto max-w-[900px]">
            <Reveal>
              <div className="v2-shine v2-shine--light v2-card-glass flex flex-col items-center gap-5 rounded-[18px] px-6 py-6 text-center sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-8 sm:text-left">
                <div className="flex flex-col items-center gap-1.5 sm:items-start">
                  <h2 className="text-[19px] font-medium leading-snug text-white sm:text-[20px]">
                    {page.painCta.title}
                  </h2>
                  <p className="max-w-[52ch] text-[14px] font-light leading-[1.6] text-white/60 sm:text-[15px]">
                    {page.painCta.body}
                  </p>
                </div>
                <a
                  href="https://app.unabyss.com/register"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex h-11 w-full shrink-0 items-center justify-center gap-2 rounded-full bg-white px-5 text-[15px] font-medium text-black no-underline transition-all hover:bg-white/90 sm:w-auto"
                >
                  {page.painCta.button}
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.8}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}

      <section className="relative px-6 py-16 sm:px-10 sm:py-24 lg:px-12">
        <div className="relative mx-auto max-w-[1100px]">
          <Reveal className="mb-12 flex flex-col items-center gap-3 text-center">
            <span className="v2-print-label">{page.momentsLabel}</span>
            <h2
              className="v2-print-display text-white"
              style={{ fontSize: "clamp(28px, 3.5vw, 44px)", lineHeight: 1.2 }}
            >
              {page.momentsTitle}
            </h2>
          </Reveal>

          <Reveal delay={120} className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-8">
            {page.momentsDemos.map((demo) => (
              <div key={demo.demo.id} className="flex flex-col">
                <LoomPlayer demo={demo.demo} />
                <div className="mt-5">
                  <h3 className="text-[16px] font-medium leading-snug text-white">
                    {demo.title}
                  </h3>
                  <p className="mt-2 text-[14px] font-light leading-[1.7] text-white/60">
                    {demo.body}
                  </p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="relative px-6 py-14 sm:px-10 sm:py-16 lg:px-12">
        <div className="relative mx-auto max-w-[1000px]">
          <Reveal>
            <div className="v2-shine v2-shine--light v2-card-glass grid grid-cols-1 items-stretch overflow-hidden rounded-[18px] sm:grid-cols-[0.8fr_1.2fr]">
              <div className="aspect-[5/3] w-full sm:aspect-auto sm:h-full sm:min-h-full">
                <div className="group relative h-full w-full bg-[#0a0a0a]">
                  <div
                    className="v2-print-grain pointer-events-none absolute inset-0"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-4 p-7 text-center sm:items-start sm:p-9 sm:text-left">
                <h2
                  className="v2-print-display text-white"
                  style={{ fontSize: "clamp(22px, 2.6vw, 32px)", lineHeight: 1.25 }}
                >
                  {page.bridgeTitle}
                </h2>
                <p className="text-[15px] font-light leading-[1.7] text-white/65 sm:text-[16px]">
                  {page.bridgeBody}
                </p>
                <a
                  href="https://app.unabyss.com/register"
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-2 inline-flex h-11 w-full shrink-0 items-center justify-center gap-2 rounded-full bg-white px-5 text-[15px] font-medium text-black no-underline transition-all hover:bg-white/90 sm:w-fit"
                >
                  {page.bridgeCta}
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.8}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative px-6 py-16 sm:px-10 sm:py-20 lg:px-12">
        <div className="relative mx-auto max-w-[900px]">
          <Reveal className="mb-10 flex flex-col items-center gap-3 text-center">
            <span className="v2-print-label">How you work</span>
            <h2
              className="v2-print-display text-white"
              style={{ fontSize: "clamp(26px, 3.2vw, 40px)", lineHeight: 1.2 }}
            >
              {page.howTitle}
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <div className="v2-shine v2-shine--gold v2-glass-panel--gold rounded-[22px] p-6 sm:p-8">
              <ul className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                {page.howBullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-[var(--gold-muted)]/15 text-[var(--gold-bright)]">
                      <Check className="size-3.5" strokeWidth={2} />
                    </span>
                    <span className="text-[15px] font-light leading-[1.6] text-white/72">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {page.byUs ? (
            <Reveal delay={180}>
              <div className="v2-shine v2-shine--light v2-card-glass mt-4 flex flex-col items-start gap-6 rounded-[22px] p-6 sm:flex-row sm:items-center sm:gap-8 sm:p-8">
                <div className="flex shrink-0 -space-x-3">
                  <img
                    src="/images/team/dominik.jpg"
                    alt="Dominik, CPO of Unabyss"
                    className="size-14 rounded-full border-2 border-[#141416] object-cover"
                    loading="lazy"
                    width="56"
                    height="56"
                  />
                  <img
                    src="/images/team/filip.jpg"
                    alt="Philip, CRO of Unabyss"
                    className="size-14 rounded-full border-2 border-[#141416] object-cover"
                    loading="lazy"
                    width="56"
                    height="56"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="v2-print-label">{page.byUs.eyebrow}</span>
                  <h3 className="text-[19px] font-medium leading-snug text-white">
                    {page.byUs.title}
                  </h3>
                  <p className="text-[15px] font-light leading-[1.7] text-white/65">
                    {page.byUs.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ) : null}
        </div>
      </section>

      <section className="relative px-6 py-16 sm:px-10 sm:py-20 lg:px-12">
        <div className="relative mx-auto max-w-[1100px]">
          <Reveal className="mb-10 flex flex-col items-center gap-3 text-center">
            <span className="v2-print-label">Trust</span>
            <h2
              className="v2-print-display text-white"
              style={{ fontSize: "clamp(28px, 3.5vw, 44px)", lineHeight: 1.2 }}
            >
              Your context. Your rules.
            </h2>
          </Reveal>

          <Reveal delay={100} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            <div className="v2-shine v2-shine--gold v2-glass-panel--gold relative flex flex-col justify-between overflow-hidden rounded-[22px] p-7 sm:col-span-2 sm:row-span-2 sm:p-9">
              <div className="flex flex-col gap-4">
                <h3
                  className="v2-print-display text-white"
                  style={{ fontSize: "clamp(24px, 2.6vw, 34px)", lineHeight: 1.15 }}
                >
                  You own it.
                </h3>
                <p className="max-w-[42ch] text-[15px] font-light leading-[1.7] text-white/65 sm:text-[16px]">
                  Unabyss is an independent context layer - not memory trapped
                  inside one vendor. Plug in any agent, connect any source, and
                  take your context anywhere.
                </p>
              </div>
              <div className="logo-grid mt-8">
                {trustLogos.map((logo) => (
                  <span key={logo.name} className="logo-tile" title={logo.name}>
                    <img src={logo.src} alt={logo.name} loading="lazy" />
                  </span>
                ))}
              </div>
            </div>

            {useCaseTrust.map((item) => (
              <div
                key={item.title}
                className="v2-shine v2-shine--light v2-card-glass flex flex-col gap-3 rounded-[22px] p-7"
              >
                <h3 className="text-[16px] font-medium leading-snug text-white">
                  {item.title}
                </h3>
                <p className="text-[14px] font-light leading-[1.65] text-white/60">
                  {item.body}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="relative px-6 pb-16 pt-4 sm:px-10 lg:px-12">
        <div className="relative mx-auto max-w-[820px]">
          <Reveal className="mb-10 flex flex-col items-center gap-3 text-center">
            <span className="v2-print-label">Compare</span>
            <h2
              className="v2-print-display text-white"
              style={{ fontSize: "clamp(28px, 3.5vw, 44px)", lineHeight: 1.2 }}
            >
              Comparing something else?
            </h2>
            <p className="mt-3 max-w-[54ch] text-[17px] font-light leading-[1.7] text-white/60">
              Weighing Unabyss against another way of giving AI context?
            </p>
          </Reveal>

          <CompareAccordion />
        </div>
      </section>

      <section className="relative px-6 pb-24 pt-16 sm:px-10 lg:px-12">
        <div className="mx-auto max-w-[1100px]">
          <Reveal>
            <div className="v2-shine v2-shine--gold v2-glass-panel--gold relative isolate overflow-hidden rounded-[26px]">
              <div className="flex flex-col gap-8 px-6 py-12 sm:px-12 sm:py-14 lg:flex-row lg:items-center lg:justify-between lg:gap-14">
                <div className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left">
                  <h2
                    className="v2-print-display max-w-[26ch] text-white"
                    style={{ fontSize: "clamp(22px, 2.5vw, 30px)", lineHeight: 1.2 }}
                  >
                    {page.closingTitle}
                  </h2>
                  <p className="max-w-[52ch] text-[16px] font-light leading-[1.7] text-white/65 sm:text-[17px]">
                    {page.closingBody}
                  </p>
                </div>

                <div className="cta-glow w-full shrink-0 sm:w-auto">
                  <span className="cta-glow__eyebrow">
                    Under a minute to set up
                  </span>
                  <a
                    href="https://app.unabyss.com/register"
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-white px-5 text-[15px] font-medium text-black no-underline transition-all hover:bg-white/90 sm:w-auto"
                  >
                    {page.closingCta}
                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.8}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function CompareAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Reveal delay={100} className="flex flex-col gap-3">
      {useCaseCompares.map((item, index) => {
        const open = openIndex === index;

        return (
          <div
            key={item.title}
            className="v2-shine v2-shine--light v2-glass-panel rounded-[16px]"
          >
            <button
              type="button"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? -1 : index)}
              className="flex w-full cursor-pointer items-center justify-between gap-4 rounded-[16px] px-5 py-4 text-left"
            >
              <span
                className={`text-[16px] font-normal transition-colors ${
                  open ? "text-white" : "text-white/80 hover:text-white"
                }`}
              >
                {item.title}
              </span>
              <span
                className={`flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full border border-white/14 text-white/55 transition-[transform,colors] duration-200 ${
                  open
                    ? "rotate-45 border-[#e8be7666] text-[var(--gold-bright)]"
                    : ""
                }`}
                
              >
                <Plus className="size-3.5" />
              </span>
            </button>

            {open ? (
              <div className="px-5 pb-5 sm:px-6">
                <p className="max-w-[62ch] text-[15px] font-light leading-[1.7] text-white/60">
                  {item.body}
                </p>
                <a
                  href={item.href}
                  className="group mt-3.5 inline-flex items-center gap-1.5 text-[14px] font-medium text-[var(--gold-bright)] no-underline transition-colors hover:text-[var(--gold-text-strong)]"
                >
                  Read the full comparison
                  <ArrowUpRight
                    strokeWidth={1.8}
                    className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            ) : null}
          </div>
        );
      })}
    </Reveal>
  );
}
