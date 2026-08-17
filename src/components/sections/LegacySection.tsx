"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { Marquee } from "@/components/ui/Marquee";
import PhBadge from "@/components/ui/PhBadge";
import PricingCard from "@/components/pricing/PricingCard";
import BlogSection from "@/components/sections/BlogSection";
import { tools } from "@/data/tools";
import { type BillingPeriod, pricingPlans } from "@/data/pricing";

const heroPairs = [
  {
    headline: "Your context headquarter.",
    tagline: "Self-updating · Available via MCP to agents and LLMs · Segmented",
  },
  {
    headline: "Welcome to context chaos.",
    tagline: "Fragmented · Invisible to agents · Lost between tools",
  },
];

const decayFiles = [
  { name: "team-standup.md", age: "5d ago", opacity: 0.85 },
  { name: "product-pricing.md", age: "2w ago", opacity: 0.6 },
  { name: "linear-roadmap.md", age: "5w ago", opacity: 0.38 },
  { name: "investor-followup.md", age: "3mo", opacity: 0.2 },
];

const sprawlFiles: { name: string; w: number; h: number }[] = [
  { name: "meeting.md", w: 2, h: 1 },
  { name: "log.md", w: 1, h: 2 },
  { name: "todo.md", w: 1, h: 1 },
  { name: "roadmap-q3.md", w: 2, h: 1 },
  { name: "investor-update.md", w: 2, h: 2 },
  { name: "notes.md", w: 1, h: 1 },
  { name: "spec.md", w: 1, h: 1 },
  { name: "feedback.md", w: 2, h: 1 },
  { name: "draft.md", w: 1, h: 2 },
  { name: "v3.md", w: 1, h: 1 },
  { name: "design-review.md", w: 2, h: 1 },
  { name: "retro.md", w: 1, h: 1 },
  { name: "doc.md", w: 1, h: 1 },
  { name: "scratch.md", w: 2, h: 1 },
];

const steps = [
  {
    number: "01",
    title: "Connect sources once.",
    body: "From hundreds of integrations, extract data, segment it and prepare for retrieval.",
  },
  {
    number: "02",
    title: "Plug the agent.",
    body: "Plug Claude Code, OpenClaw, Perplexity via MCP and make sure it has always up-to-date context.",
  },
  {
    number: "03",
    title: "Choose access level.",
    body: "On granular item-level or topical / confidence level.",
  },
];

const engineLayers = [
  {
    title: "Context segmentation",
    body: "Every piece of incoming context is automatically tagged across topic, confidence, sensitivity, source app, and personal versus professional axes. Retrieval can then target any slice — only the bucket relevant to the current question is surfaced, not your whole life history.",
  },
  {
    title: "Retrieval efficiency",
    body: "Standard RAG dumps every loosely-matched chunk into the prompt. Unabyss scores and extracts only the lines that actually answer the question — the same response with up to 10\u00d7 fewer tokens. Cheaper, faster, and far less context-rot in the model.",
  },
  {
    title: "Permission layer",
    body: "Four toggleable scopes the assistant respects on every single retrieval: no restriction, exclude private information, exclude company confidential, or exclude an entire source app. Filters apply at retrieval time so blocked context never reaches the model \u2014 not even partially.",
  },
];

const engineItems = [
  { label: "Slack \u2014 design sync", type: "message" },
  { label: "Mom \u2014 birthday plans", type: "mail" },
  { label: "AI Summit \u00b7 12 Jun", type: "event" },
  { label: "Lease renewal.pdf", type: "file" },
  { label: "Roadmap-v2.md", type: "file" },
  { label: "Indie hackers \u00b7 MCP", type: "message" },
];

const retDocs = [
  {
    title: "Last week\u2019s emails",
    lines: [
      { kept: false },
      { kept: true },
      { kept: false },
    ],
  },
  {
    title: "Investor summary \u00b7 Q3",
    lines: [
      { kept: false },
      { kept: true },
    ],
  },
  {
    title: "Brand guidelines \u00b7 v4",
    lines: [
      { kept: true },
      { kept: false },
    ],
  },
];

const retRightDocs = [
  { label: "Q3 financial report", type: "file" },
  { label: "Company mission", type: "file" },
  { label: "AWS payroll \u00b7 CSV", type: "file" },
  { label: "Attended events", type: "event" },
  { label: "Sprint roadmap (private)", type: "message" },
  { label: "Public blog drafts", type: "file" },
  { label: "Investor deck", type: "file" },
  { label: "Conference talk \u00b7 MCP", type: "message" },
];

const accessRows = [
  { label: "Exclude private", desc: "Personal items stay yours" },
  { label: "Exclude confidential", desc: "Hide work-restricted notes" },
  { label: "Exclude apps", desc: "Pick which sources to omit" },
];

const personas = [
  {
    title: "Builder / vibe coder",
    body: "Every coding agent picks up where the last one left off.",
    lgSpan: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Founder",
    body: "Every AI you touch sounds like the company, not like ChatGPT.",
    lgSpan: "lg:col-span-2",
  },
  {
    title: "Angel investor",
    body: "Triage cold inbound and remember every founder you\u2019ve ever met.",
    lgSpan: "lg:col-span-2",
  },
  {
    title: "Marketer",
    body: "Generate copy that sounds on-brand from the first draft.",
    lgSpan: "lg:col-span-2",
  },
  {
    title: "GTM engineer",
    body: "Plug your context into every outbound and ops workflow.",
    lgSpan: "lg:col-span-2",
  },
];

function LegacyHero() {
  const [pairIndex, setPairIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setPairIndex((index) => (index + 1) % heroPairs.length);
    }, 4200);
    return () => window.clearInterval(interval);
  }, []);

  const pair = heroPairs[pairIndex];

  return (
    <section className="relative flex flex-col items-center px-6 pb-16 pt-40 sm:px-10 sm:pt-48 lg:px-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 20%, rgba(255,255,255,0.07), transparent 70%)",
        }}
      />

      <div className="flex flex-col items-center text-center">
        <Reveal className="flex items-center gap-3">
          <img
            src="/images/elevenlabs-grants.webp"
            alt="Backed by ElevenLabs Grants"
            className="h-8 w-auto"
            loading="eager"
            decoding="async"
          />
        </Reveal>

        <Reveal delay={60} className="mt-8">
          <h1
            className="v2-print-display max-w-[16ch] text-white"
            style={{ fontSize: "clamp(38px, 6vw, 74px)", lineHeight: 1.02 }}
          >
            {pair.headline}
          </h1>
          <p
            className="mx-auto mt-6 max-w-[46ch] text-[15px] font-light leading-[1.7] text-white/55 sm:text-[16px]"
            key={pair.tagline}
          >
            {pair.tagline}
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://app.unabyss.com/register"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-11 items-center gap-2 rounded-full bg-white px-6 text-[15px] font-medium text-black no-underline transition-all hover:bg-white/90"
          >
            Try it free
            <ArrowUpRight
              strokeWidth={1.8}
              className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <a
            href="/connect-claude"
            className="group inline-flex h-11 items-center gap-2 rounded-full border border-white/15 px-6 text-[15px] font-medium text-white no-underline transition-colors hover:bg-white/5"
          >
            Connect to Claude
          </a>
        </Reveal>

        <Reveal delay={180} className="mt-12 flex items-center justify-center gap-3">
          <PhBadge period="day" />
          <PhBadge period="week" />
          <PhBadge period="month" />
        </Reveal>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section id="how" className="relative px-6 py-24 sm:px-10 sm:py-32 lg:px-12">
      <div className="relative mx-auto max-w-[1100px]">
        <Reveal className="mb-14 flex flex-col items-center text-center">
          <span className="v2-print-label">Problem</span>
          <h2
            className="v2-print-display mt-5 text-white"
            style={{ fontSize: "clamp(34px, 4.5vw, 56px)", lineHeight: 1.2 }}
          >
            Your{" "}
            <span className="inline-flex items-center gap-[0.35em] px-1 tracking-tight">
              <img src="/images/tools/openclaw.svg" alt="" className="inline-block h-[0.8em] w-[0.8em]" />
              <span className="sr-only">OpenClaw</span>
              OpenClaw
            </span>{" "}
            doesn&apos;t talk to{" "}
            <span className="inline-flex items-center gap-[0.35em] px-1 tracking-tight">
              <img src="/images/tools/cursor.svg" alt="" className="inline-block h-[0.8em] w-[0.8em]" />
              <span className="sr-only">Cursor</span>
              Cursor
            </span>{" "}
            <span className="block text-white/45">
              and doesn&apos;t know what happens in{" "}
              <span className="inline-flex items-center gap-[0.35em] px-1 tracking-tight">
                <img src="/images/tools/github.svg" alt="" className="inline-block h-[0.8em] w-[0.8em]" />
                <span className="sr-only">GitHub</span>
                GitHub
              </span>
            </span>
          </h2>
        </Reveal>

        <Reveal delay={120} className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
          <div className="problem-card v2-shine v2-shine--light v2-card-glass relative flex flex-col overflow-hidden rounded-[18px]">
            <div className="problem-card__viz relative flex-1" />
            <div className="problem-card__body px-6 pb-6 pt-2">
              <p className="text-center text-[15px] font-light leading-[1.4] text-white/90">
                No single source of truth.
              </p>
            </div>
          </div>

          <div className="problem-card v2-shine v2-shine--light v2-card-glass relative flex flex-col overflow-hidden rounded-[18px]">
            <div className="problem-card__viz relative flex-1">
              <div className="decay flex h-full flex-col justify-center gap-2 px-5 py-6">
                {decayFiles.map((f) => (
                  <div key={f.name} className="decay__row" style={{ opacity: f.opacity }}>
                    <span className="decay__dot" />
                    <span className="decay__name">{f.name}</span>
                    <span className="decay__stale">{f.age}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="problem-card__body px-6 pb-6 pt-2">
              <p className="text-center text-[15px] font-light leading-[1.4] text-white/90">
                Your context is outdated within a week.
              </p>
            </div>
          </div>

          <div className="problem-card v2-shine v2-shine--light v2-card-glass relative flex flex-col overflow-hidden rounded-[18px]">
            <div className="problem-card__viz relative flex-1">
              <div className="sprawl absolute inset-0 p-3">
                <div className="sprawl__grid">
                  {sprawlFiles.map((f) => (
                    <div
                      key={f.name}
                      className={`sprawl__chip${f.h > 1 ? " sprawl__chip--tall" : ""}`}
                      style={{ "--w": f.w, "--h": f.h } as React.CSSProperties}
                    >
                      <div className="sprawl__chip-row">
                        <span className="sprawl__name">{f.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="problem-card__body px-6 pb-6 pt-2">
              <p className="text-center text-[15px] font-light leading-[1.4] text-white/90">
                You flood under tons of .md files.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function HowItWorksDemo({ step }: { step: number }) {
  const [active, setActive] = useState(step === 1);

  useEffect(() => {
    if (step !== 1) return;
    const t = window.setInterval(() => setActive((a) => !a), 3000);
    return () => window.clearInterval(t);
  }, [step]);

  if (step === 1) {
    return (
      <div className="demo">
        <div className="tiles">
          {(["Notion", "Slack", "Gmail"] as const).map((name, i) => (
            <div key={name} className={`tile${i === 1 ? " tile--target" : ""}`}>
              <div className="tile__icon">
                <img src={`/images/tools/${name.toLowerCase()}.svg`} alt="" className="size-7" />
                <span className="tile__dot" aria-hidden="true" />
              </div>
              <div className="tile__meta">
                <p className="tile__name">{name}</p>
              </div>
              <div className="tile__cta">
                <span className="tile__cta-connect">
                  <span>Connect</span>
                </span>
                <span className="tile__cta-connected">
                  <span>Connected</span>
                </span>
                {i === 1 && <div className="cursor" aria-hidden="true" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="demo">
        <div className="card card--issue">
          <div className="card__head">
            <span className="card__icon" />
            <div className="card__head-text">
              <p className="card__title">Need a token for an MCP host?</p>
              <p className="card__sub">Just generate one!</p>
            </div>
          </div>
          <button type="button" className="card__cta" tabIndex={-1}>
            <span>Generate token</span>
          </button>
        </div>
        <div className="card card--success">
          <div className="card__head">
            <span className="card__icon card__icon--ok" />
            <div className="card__head-text">
              <p className="card__title">Token created</p>
              <p className="card__sub">Copy it now &mdash; it won&apos;t be shown again.</p>
            </div>
          </div>
          <div className="card__token">
            <span className="card__token-value">una_live_8f2b3c&hellip;d91a</span>
            <span className="card__token-copy" aria-hidden="true" />
          </div>
        </div>
        <div className="cta-anchor" aria-hidden="true">
          <div className="cursor" />
        </div>
      </div>
    );
  }

  return (
    <div className="demo">
      <div className="popup">
        <div className="popup__header">
          <p className="popup__title">Access for Claude</p>
        </div>
        <div className="popup__rows">
          {accessRows.map((row, i) => (
            <div key={row.label} className="row">
              <div className="row__text">
                <p className="row__label">{row.label}</p>
                <p className="row__desc">{row.desc}</p>
              </div>
              <button
                type="button"
                className={`row__switch${i < 2 ? " row__switch--target" : ""}`}
                data-idx={i}
                tabIndex={-1}
                aria-hidden="true"
                aria-label={row.label}
              >
                <span className="row__switch-thumb" />
              </button>
            </div>
          ))}
        </div>
        <div className="popup__actions">
          <button type="button" className="popup__save" tabIndex={-1}>
            Save
          </button>
        </div>
      </div>
      <div className="confirm">
        <span className="confirm__check" />
        <span>Saved</span>
      </div>
      <div className="cursor" aria-hidden="true" />
    </div>
  );
}

function HowItWorksSection() {
  return (
    <section className="relative px-6 py-24 sm:px-10 sm:py-32 lg:px-12">
      <div className="relative mx-auto max-w-[1100px]">
        <Reveal className="mb-14 flex flex-col items-center gap-3 text-center">
          <span className="v2-print-label">How it works</span>
          <h2
            className="v2-print-display max-w-[24ch] text-white"
            style={{ fontSize: "clamp(34px, 4.5vw, 56px)", lineHeight: 1.2 }}
          >
            A few clicks from AI finally doing its job right.
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="how-row v2-shine v2-shine--light">
            {steps.map((step, i) => (
              <div key={step.number} className={`how-card${i === 0 ? " active" : ""}`} role="button" tabIndex={0}>
                <div className="how-card__graphic">
                  <div className="how-card__graphic-inner">
                    <HowItWorksDemo step={i + 1} />
                  </div>
                </div>
                <div className="how-card__body">
                  <span className="how-card__num">{step.number}</span>
                  <h3 className="how-card__title">{step.title}</h3>
                  <p className="how-card__text">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={220} className="mx-auto mt-10 max-w-[60ch] text-center">
          <p className="text-[14px] font-light italic leading-[1.75] text-white/55">
            And forget. From now on, your context is always up-to-date in every agent, LLM and app you use.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function IntegrationsSection() {
  return (
    <section className="relative px-6 py-24 sm:px-10 sm:py-32 lg:px-12">
      <div className="relative mx-auto max-w-[1100px]">
        <Reveal className="mb-14 flex flex-col items-start gap-3 sm:items-center sm:text-center">
          <span className="v2-print-label">Integrations</span>
          <h2
            className="v2-print-display max-w-[26ch] text-white"
            style={{ fontSize: "clamp(32px, 4.2vw, 52px)", lineHeight: 1.2 }}
          >
            Integrates with all apps that you use daily.
          </h2>
        </Reveal>

        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
          {tools.map((tool, i) => (
            <Reveal key={tool.name} delay={60 + i * 25}>
              <div
                className="v2-shine v2-card-glass group relative flex aspect-square flex-col items-center justify-center gap-2 rounded-[16px]"
                title={tool.name}
              >
                <span className="relative z-10 inline-flex size-15 items-center justify-center rounded-[12px] bg-white/[0.04] ring-1 ring-inset ring-white/[0.04] transition-colors sm:size-15">
                  <img src={tool.src} alt="" className="size-7" />
                </span>
                <span className="relative z-10 hidden text-[10.5px] font-light tracking-wide text-white/55 sm:inline">
                  {tool.name}
                </span>
              </div>
            </Reveal>
          ))}
          <Reveal delay={60 + tools.length * 25}>
            <a
              href="/integrations"
              className="v2-shine v2-card-glass group relative flex aspect-square flex-col items-center justify-center gap-2 rounded-[16px] no-underline"
            >
              <span className="relative z-10 text-[12px] font-medium text-white/70 group-hover:text-white">
                + and more
              </span>
              <span className="relative z-10 hidden text-[10.5px] font-light tracking-wide text-white/40 sm:inline">
                See all integrations
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function EngineSection() {
  return (
    <section className="relative px-6 pb-32 pt-44 sm:px-10 sm:pb-44 sm:pt-56 lg:px-12">
      <div className="relative mx-auto max-w-[1100px]">
        <div className="engine">
          <div className="engine__head">
            <span className="kicker">Engine</span>
            <h2 className="heading" style={{ lineHeight: 1.2 }}>
              State of art context technology
            </h2>
            <p className="intro">
              Raw signal in at the top. Three layers of context engineering segment, compress and
              gate it on the way down. Clean, scoped context out at the bottom.
            </p>
          </div>

          <div className="engine__stack">
            <Reveal delay={60} className="layer layer--sim-left v2-shine v2-shine--light">
              <div className="layer__sim">
                <div className="seg">
                  <div className="seg__lane" aria-hidden="true">
                    {engineItems.map((item, i) => (
                      <div
                        key={item.label}
                        className={`seg__item seg__item--${item.type}`}
                        style={
                          {
                            "--start-x": [-0.55, 0.45, -0.1, 0.5, -0.45, 0.35][i],
                            "--ad": `-${i * 1.6}s`,
                          } as React.CSSProperties
                        }
                      >
                        <div className="seg__item-inner">
                          <span className="seg__icon" aria-hidden="true" />
                          <span className="seg__label">{item.label}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="seg__drains" aria-hidden="true">
                    {["Personal", "Company", "Interests"].map((label) => (
                      <div key={label} className="seg__drain" data-bucket={label.toLowerCase()}>
                        <span className="seg__drain-glow" />
                        <span className="seg__drain-dot" />
                        <span className="seg__drain-label">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="layer__text">
                <h3 className="layer__title">{engineLayers[0].title}</h3>
                <p className="layer__desc">{engineLayers[0].body}</p>
              </div>
            </Reveal>

            <Reveal delay={85} className="layer layer--sim-right v2-shine v2-shine--light">
              <div className="layer__text">
                <h3 className="layer__title">{engineLayers[1].title}</h3>
                <p className="layer__desc">{engineLayers[1].body}</p>
              </div>
              <div className="layer__sim">
                <div className="ret">
                  {retDocs.map((doc, i) => (
                    <article
                      key={doc.title}
                      className="ret__doc"
                      style={{ animationDelay: `${i * 6}s` }}
                    >
                      <div className="ret__scan" aria-hidden="true" style={{ animationDelay: `${i * 6}s` }} />
                      <header className="ret__title">{doc.title}</header>
                      <div className="ret__lines">
                        {doc.lines.map((line, j) => (
                          <div
                            key={j}
                            className={`ret__line${line.kept ? " ret__line--keep" : ""}`}
                            style={{ animationDelay: `${i * 6 + j * 0.5}s` }}
                          >
                            {Array.from({ length: 5 + j * 2 }).map((_, k) => (
                              <span
                                key={k}
                                className="ret__word"
                                style={{
                                  width: `${2 + Math.random() * 3}ch`,
                                  "--op": line.kept ? 0.7 + Math.random() * 0.3 : 0.15 + Math.random() * 0.2,
                                } as React.CSSProperties}
                              />
                            ))}
                          </div>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={110} className="layer layer--full v2-shine v2-shine--light">
              <div className="layer__sim">
                <div className="perm">
                  {engineItems.map((item, i) => (
                    <div
                      key={`perm-${item.label}`}
                      className={`perm__item${i === 3 ? " perm__item--confidential" : ""}`}
                      style={
                        {
                          "--start-x": [-0.4, 0.2, -0.1, 0.3, -0.3, 0.15][i],
                          "--ad": `-${i * 1.6}s`,
                        } as React.CSSProperties
                      }
                    >
                      {i === 3 && (
                        <span className="perm__lock" aria-hidden="true">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                            <path d="M7 11V7a5 5 0 0110 0v4" />
                          </svg>
                        </span>
                      )}
                      <span>{item.label}</span>
                    </div>
                  ))}
                  <div className="perm__gate">
                    <span className="perm__gate-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0110 0v4" />
                      </svg>
                    </span>
                    <span className="perm__gate-label perm__gate-label--full">Exclude company confidential</span>
                    <span className="perm__gate-label perm__gate-label--short">Exclude confidential</span>
                    <div className="perm__toggle">
                      <div className="perm__toggle-knob" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="layer__text">
                <h3 className="layer__title">{engineLayers[2].title}</h3>
                <p className="layer__desc">{engineLayers[2].body}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function MCPSection() {
  return (
    <section className="relative px-6 py-24 sm:px-10 sm:py-32 lg:px-12">
      <div className="relative mx-auto max-w-[920px]">
        <Reveal className="mb-12 flex flex-col items-center gap-3 text-center">
          <span className="v2-print-label">MCP</span>
          <h2
            className="v2-print-display max-w-[24ch] text-white"
            style={{ fontSize: "clamp(32px, 4.2vw, 52px)", lineHeight: 1.2 }}
          >
            Use your context via MCP everywhere
          </h2>
          <p className="max-w-[52ch] text-[14.5px] font-light leading-[1.75] text-white/65">
            One install command. Instant up-to-date context inside every agent.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="v2-shine v2-shine--gold v2-glass-panel v2-glass-panel--gold relative isolate overflow-hidden rounded-[18px]">
            <div className="relative z-[2] flex items-center justify-between px-5 py-4">
              <div className="flex items-center gap-3">
                <span className="v2-mono text-[11px] tracking-[0.08em] text-white/80">
                  unabyss &middot; install
                </span>
                <span className="text-white/30">&crarr;</span>
              </div>
            </div>
            <div className="relative z-[2] border-t border-white/[0.06] px-5 py-4">
              <pre className="overflow-x-auto">
                <code className="v2-mono block whitespace-pre text-[13px] leading-[1.7] text-white/80">
                  $ claude mcp add --transport http unabyss https://mcp.unabyss.com/
                </code>
              </pre>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function BuilderPersona() {
  const builderTools = [
    { name: "Cursor", src: "/images/tools/cursor.svg" },
    { name: "Claude Code", src: "/images/tools/claude.svg" },
    { name: "Codex", src: "/images/tools/codex.svg" },
    { name: "GitHub", src: "/images/tools/github.svg" },
  ];

  return (
    <div className="demo">
      <div className="tiles">
        {builderTools.map((t) => (
          <div key={t.name} className="tile">
            <div className="tile__icon">
              <img src={t.src} alt="" className="size-7" />
            </div>
            <div className="tile__name">{t.name}</div>
            <div className="pill pill--ok">
              <span>Context: in sync</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FounderPersona() {
  return (
    <div className="demo demo--compact">
      <div className="founder">
        <div className="founder__sources">
          {["Notion", "Slack", "Drive"].map((name) => (
            <div key={name} className="source-chip">
              <div className="source-chip__icon">
                <img src={`/images/tools/${name.toLowerCase().replace(" ", "-")}.svg`} alt="" className="size-4" />
              </div>
              <span>{name}</span>
            </div>
          ))}
        </div>
        <div className="founder__output">
          <div className="founder__output-head">
            <span className="founder__draft-label">Draft</span>
            <span className="founder__draft-title">Investor Update &middot; Week 38</span>
          </div>
          <div className="founder__badges">
            <span className="badge">revenue</span>
            <span className="badge">active users</span>
            <span className="badge">runway</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function InvestorPersona() {
  return (
    <div className="demo demo--compact">
      <div className="investor">
        <div className="investor__card">
          <span className="investor__card-label">AI startup &middot; Series A</span>
        </div>
        <div className="investor__card">
          <span className="investor__card-label">Promising Devtools seed deck</span>
        </div>
        <div className="investor__card">
          <span className="investor__card-label">Skip YC W25 founder intro</span>
        </div>
        <div className="investor__footer">
          <span>Promising 2 follow-ups &middot; saved to shortlist</span>
        </div>
      </div>
    </div>
  );
}

function MarketerPersona() {
  return (
    <div className="demo demo--compact">
      <div className="marketer">
        <div className="marketer__badges">
          <span className="badge">LinkedIn &middot; Q3</span>
          <span className="badge">Best Email &middot; Q3</span>
        </div>
        <div className="marketer__stats">
          <span className="marketer__stat">
            <span className="marketer__stat-value">48%</span>
            <span className="marketer__stat-label">Webinar</span>
          </span>
          <span className="marketer__stat">
            <span className="marketer__stat-value">28%</span>
            <span className="marketer__stat-label">Email</span>
          </span>
        </div>
      </div>
    </div>
  );
}

function GtmPersona() {
  return (
    <div className="demo demo--compact">
      <div className="gtm">
        <div className="gtm__call">
          <span className="gtm__call-label">Acme call &middot; 47m transcript</span>
        </div>
        <div className="gtm__draft">
          <span className="gtm__draft-channel">#deals &rarr; Acme Draft</span>
        </div>
      </div>
    </div>
  );
}

function PersonaMock({ index }: { index: number }) {
  if (index === 0) return <BuilderPersona />;
  if (index === 1) return <FounderPersona />;
  if (index === 2) return <InvestorPersona />;
  if (index === 3) return <MarketerPersona />;
  return <GtmPersona />;
}

function BuiltForSection() {
  return (
    <section className="relative px-6 py-24 sm:px-10 sm:py-32 lg:px-12">
      <div className="relative mx-auto max-w-[1100px]">
        <Reveal className="mb-14 flex flex-col items-start gap-3 sm:items-center sm:text-center">
          <span className="v2-print-label">Built for</span>
          <h2
            className="v2-print-display max-w-[26ch] text-white"
            style={{ fontSize: "clamp(34px, 4.5vw, 56px)", lineHeight: 1.2 }}
          >
            Built for everyone
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:[grid-auto-rows:240px]">
          {personas.map((persona, i) => (
            <Reveal
              key={persona.title}
              delay={120 + i * 90}
              className={`persona-card v2-shine v2-shine--light v2-card-glass group relative flex flex-col gap-4 rounded-[16px] p-6 ${persona.lgSpan}`}
            >
              <div className="relative z-10 flex flex-col gap-1.5">
                <span className="text-[15px] font-medium text-white lg:text-[17px]">
                  {persona.title}
                </span>
              </div>
              <div className="persona-mock relative z-10 flex-1">
                <PersonaMock index={i} />
              </div>
              <p className="relative z-10 text-[12.5px] font-light leading-[1.6] text-white/55 lg:text-[13px]">
                {persona.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function LegacySection() {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("yearly");

  return (
    <>
      <LegacyHero />

      <Marquee tools={tools} duration="55s" counter="900,000+" />

      <ProblemSection />

      <HowItWorksSection />

      <IntegrationsSection />

      <EngineSection />

      <MCPSection />

      <BuiltForSection />

      <section className="relative isolate overflow-hidden px-6 py-32 sm:px-10 sm:py-40 lg:px-12">
        <div className="relative z-10 mx-auto max-w-[1100px]">
          <Reveal className="mb-10 flex flex-col items-center text-center">
            <span className="v2-print-label">Pricing</span>
            <h2
              className="v2-print-display mt-5 text-white"
              style={{ fontSize: "clamp(32px, 4.4vw, 54px)", lineHeight: 1.2 }}
            >
              Start free. Then pick your plan.
            </h2>
            <p className="mt-4 max-w-[52ch] text-[14px] font-light leading-[1.7] text-white/55">
              Every plan starts with a 7-day free trial. Scale up as you connect more agents and accounts.
            </p>
            <div className="mt-8 inline-flex items-center gap-3">
              <div
                className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1"
                role="group"
                aria-label="Billing period"
              >
                <button
                  type="button"
                  onClick={() => setBillingPeriod("monthly")}
                  aria-pressed={billingPeriod === "monthly"}
                  className={`rounded-full px-4 py-1.5 text-[12.5px] font-medium transition-colors ${
                    billingPeriod === "monthly"
                      ? "bg-white text-black"
                      : "text-white/60 hover:text-white/90"
                  }`}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  onClick={() => setBillingPeriod("yearly")}
                  aria-pressed={billingPeriod === "yearly"}
                  className={`rounded-full px-4 py-1.5 text-[12.5px] font-medium transition-colors ${
                    billingPeriod === "yearly"
                      ? "bg-white text-black"
                      : "text-white/60 hover:text-white/90"
                  }`}
                >
                  Annual
                </button>
              </div>
              {billingPeriod === "yearly" && (
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-400">
                  Save up to 20%
                </span>
              )}
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:items-stretch md:gap-5">
            {pricingPlans.map((plan, index) => (
              <Reveal
                key={plan.name}
                delay={120 + index * 90}
                className="flex h-full flex-col"
              >
                <PricingCard plan={plan} billingPeriod={billingPeriod} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={300} className="mt-10">
            <div className="mx-auto flex max-w-[360px] items-center justify-center gap-2.5 text-[12.5px] font-medium text-white/70">
              <Check strokeWidth={2.5} className="size-4 text-emerald-400/90" />
              7-day free trial on every plan. No credit card required.
            </div>
          </Reveal>
        </div>
      </section>

      <BlogSection limit={3} />
    </>
  );
}
