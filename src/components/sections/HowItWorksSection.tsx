"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, Link2 } from "lucide-react";
import BrandMark from "@/components/ui/BrandMark";
import Reveal from "@/components/ui/Reveal";
import { useInView } from "@/lib/useInView";

const connectedSources = [
  { name: "Gmail", src: "/images/tools/gmail.svg" },
  { name: "Notion", src: "/images/tools/notion.svg" },
  { name: "Calendar", src: "/images/tools/google-calendar.svg" },
  { name: "GitHub", src: "/images/tools/github.svg" },
  { name: "Linear", src: "/images/tools/linear.svg" },
];

const inboxRows = [
  { icon: "/images/tools/gmail.svg", title: "Re: Q3 roadmap — shipping the ingest rewrite" },
  { icon: "/images/tools/notion.svg", title: "PRD: unify context under one envelope" },
  { icon: "/images/tools/google-calendar.svg", title: "Weekly sync · Growth · Thu 10:00" },
];

const profileRows = [
  { label: "Role", value: "Founder" },
  { label: "Project", value: "Ingest" },
  { label: "Focus", value: "Growth" },
  { label: "Stack", value: "MCP" },
];

const readyAgents = [
  { name: "Claude", src: "/images/tools/claude.svg" },
  { name: "Cursor", src: "/images/tools/cursor.svg" },
  { name: "ChatGPT", src: "/images/tools/chatgpt.svg" },
];

const yourApps = [
  { name: "Gmail", src: "/images/tools/gmail.svg" },
  { name: "Notion", src: "/images/tools/notion.svg" },
  { name: "Calendar", src: "/images/tools/google-calendar.svg" },
  { name: "GitHub", src: "/images/tools/github.svg" },
  { name: "Linear", src: "/images/tools/linear.svg" },
  { name: "Slack", src: "/images/tools/slack.svg" },
  { name: "LinkedIn", src: "/images/tools/linkedin.svg" },
  { name: "Google Drive", src: "/images/tools/google-drive.svg" },
  { name: "Obsidian", src: "/images/tools/obsidian.svg" },
  { name: "HubSpot", src: "/images/tools/hubspot.svg" },
];

const pillars = [
  {
    title: "Extract",
    body: "Unabyss pulls context from where your information already lives - email, calendar, docs, repos - and keeps pulling as things change.",
  },
  {
    title: "Structure",
    body: "It turns that raw material into a clean, organized profile: tagged by topic, source, and sensitivity. Not a transcript - a structured picture.",
  },
  {
    title: "Control",
    body: "You decide what each tool sees, per app and per file. Nothing is shared that you didn't allow.",
  },
  {
    title: "Distribute",
    body: "Any AI tool that speaks MCP pulls the right slice on demand. Connect once; every authorized tool gets fresh context every session.",
  },
];

const yourTools = [
  { name: "Claude", src: "/images/tools/claude.svg" },
  { name: "Cursor", src: "/images/tools/cursor.svg" },
  { name: "ChatGPT", src: "/images/tools/chatgpt.svg" },
];

const inSyncAgents = [
  { name: "ChatGPT", src: "/images/tools/chatgpt.svg" },
  { name: "OpenClaw", src: "/images/tools/openclaw.svg" },
  { name: "Claude", src: "/images/tools/claude.svg" },
  { name: "Hermes", src: "/images/tools/hermes.webp" },
];

const compares = [
  {
    title: "Unabyss vs. built-in AI memory",
    body: "Built-in memory is useful, but it's trapped in one tool - what ChatGPT learns stays in ChatGPT, and Claude's memory can't help Cursor. Unabyss is a context layer you own, served to every AI tool over MCP.",
    href: "/unabyss-vs-llm-memory",
  },
  {
    title: "Unabyss vs. context files",
    body: "A context file is a snapshot the moment you write it - stale the minute anything changes. Unabyss stays live and two-way, so every AI reads what's actually happening, not what you remembered to paste.",
    href: "/unabyss-vs-context-files",
  },
  {
    title: "Unabyss vs. building your own context system",
    body: "Building your own means maintaining sync, permissions, and structure yourself - forever. Unabyss does the extraction, structuring, and distribution for you, out of the box.",
    href: "/unabyss-vs-external-knowledge",
  },
];

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

function StepCard({
  index,
  title,
  target,
  intro,
  children,
}: {
  index: number;
  title: string;
  target: number;
  intro: string;
  children?: React.ReactNode;
}) {
  const [ref, inView] = useInView<HTMLDivElement>();
  const [sec, setSec] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const id = setInterval(() => {
      setSec((s) => (s + 1) % (target + 1));
    }, 1000);
    return () => clearInterval(id);
  }, [inView, target]);

  const chipCount = Math.min(connectedSources.length, Math.max(0, Math.floor((sec * 4) / 1) + 1));
  const inboxCount = Math.min(inboxRows.length, Math.max(0, Math.floor(sec / 3) + 1));
  const readyCount = Math.min(readyAgents.length, Math.max(0, Math.floor(sec / 3) + 1));

  return (
    <div
      ref={ref}
      className="v2-shine v2-shine--light v2-card-glass flex flex-col overflow-hidden rounded-[18px]"
    >
      <div className="flex items-center justify-between border-b border-white/[0.07] px-6 py-4">
        <span className="v2-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
          Step {index + 1}
        </span>
        <span className="v2-mono text-[13px] tracking-[0.12em] text-white/85">
          {formatTime(Math.min(sec, target))}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <h3 className="text-[19px] font-medium leading-[1.3] text-white">{title}</h3>
        <p className="text-[13.5px] font-light leading-[1.65] text-white/60">{intro}</p>
        {children
          ? children
          : index === 0
            ? (
                <>
                  <div className="flex flex-wrap gap-2">
                    {connectedSources.slice(0, chipCount).map((source) => (
                      <span
                        key={source.name}
                        className="inline-flex items-center gap-1.5 rounded-[9px] border border-emerald-300/25 bg-emerald-300/[0.08] px-2.5 py-1 text-[11px] font-medium text-emerald-200"
                      >
                        <img src={source.src} alt="" loading="lazy" className="size-3.5" />
                        {source.name}
                        <span className="text-emerald-300/70">Connected</span>
                      </span>
                    ))}
                    <span className="v2-mono text-[10px] uppercase tracking-[0.16em] text-white/30">
                      + {Math.max(0, connectedSources.length - chipCount)} more
                    </span>
                  </div>
                  <div className="mt-1 flex flex-col gap-2">
                    {inboxRows.slice(0, inboxCount).map((row) => (
                      <div
                        key={row.title}
                        className="flex items-center gap-2.5 rounded-[10px] border border-white/[0.07] bg-black/20 px-3 py-2"
                      >
                        <img src={row.icon} alt="" loading="lazy" className="size-4" />
                        <span className="truncate text-[12px] font-light text-white/75">
                          {row.title}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto rounded-[12px] border border-white/[0.07] bg-black/20 p-4">
                    <p className="v2-mono text-[9.5px] uppercase tracking-[0.18em] text-white/40">
                      Structured profile
                    </p>
                    <div className="mt-2.5 grid grid-cols-2 gap-2">
                      {profileRows.map((row) => (
                        <div key={row.label} className="flex flex-col">
                          <span className="v2-mono text-[9px] uppercase tracking-[0.14em] text-white/30">
                            {row.label}
                          </span>
                          <span className="text-[12.5px] font-light text-white/80">
                            {row.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )
            : index === 1
              ? (
                  <>
                    <div className="flex flex-col items-center gap-4 rounded-[14px] border border-white/[0.07] bg-black/20 p-5">
                      <div className="flex gap-1.5">
                        {[0, 1, 2, 3, 4, 5].map((dot) => (
                          <span
                            key={dot}
                            className="size-1.5 animate-pulse rounded-full bg-amber-300/80"
                            style={{ animationDelay: `${dot * 180}ms` }}
                          />
                        ))}
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className="flex size-6 items-center justify-center rounded-[7px] bg-white/[0.07]">
                          <BrandMark className="size-4" />
                        </span>
                        <span className="text-[12.5px] font-light text-white/80">
                          Unabyss · MCP context layer
                        </span>
                        <span className="v2-mono text-[9.5px] uppercase tracking-[0.14em] text-emerald-300/80">
                          building…
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      {readyAgents.slice(0, readyCount).map((agent) => (
                        <div
                          key={agent.name}
                          className="flex items-center gap-2.5 rounded-[10px] border border-white/[0.07] bg-black/20 px-3 py-2"
                        >
                          <img src={agent.src} alt="" loading="lazy" className="size-4" />
                          <span className="text-[12px] font-light text-white/75">
                            {agent.name}
                          </span>
                          <span className="ml-auto text-[10.5px] text-emerald-300/80">
                            Isolated Context ready
                          </span>
                        </div>
                      ))}
                    </div>
                  </>
                )
              : (
                  <>
                    <div className="flex flex-col gap-2.5 rounded-[14px] border border-white/[0.07] bg-black/20 p-5">
                      {[
                        { name: "Claude", src: "/images/tools/claude.svg" },
                        { name: "Cursor", src: "/images/tools/cursor.svg" },
                        { name: "ChatGPT", src: "/images/tools/chatgpt.svg" },
                      ].map((agent) => (
                        <div
                          key={agent.name}
                          className="flex items-center gap-2.5 rounded-[10px] border border-white/[0.07] bg-white/[0.03] px-3 py-2"
                        >
                          <img src={agent.src} alt="" loading="lazy" className="size-4" />
                          <span className="text-[12px] font-light text-white/75">
                            {agent.name}
                          </span>
                          <span className="ml-auto inline-flex items-center gap-1 text-[10.5px] text-emerald-300/80">
                            <Link2 className="size-3" />
                            MCP
                          </span>
                        </div>
                      ))}
                    </div>
                    <a
                      href="/mcp-docs"
                      className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-white/70 no-underline transition-colors hover:text-white"
                    >
                      New to MCP? Follow our setup guides.
                      <ArrowRight className="size-3.5" />
                    </a>
                  </>
                )}
      </div>
    </div>
  );
}

export default function HowItWorksSection() {
  return (
    <>
      <section className="relative isolate flex flex-col overflow-hidden px-6 pb-12 pt-36 sm:px-10 sm:pt-44 lg:px-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 60% 45% at 50% 30%, rgba(255,255,255,0.06), transparent 70%)",
          }}
        />

        <div className="mx-auto flex max-w-[820px] flex-col items-center text-center">
          <Reveal>
            <span className="v2-print-label">90 seconds to context-ready</span>
          </Reveal>
          <Reveal delay={80}>
            <h1
              className="v2-print-display mt-6 text-white"
              style={{ fontSize: "clamp(34px, 5.2vw, 60px)", lineHeight: 1.1 }}
            >
              See how it works
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-[58ch] text-[15px] font-light leading-[1.75] text-white/70 sm:text-[16px]">
              Connect your tools to Unabyss, plug it into your AI tools over
              MCP, and stop re-explaining yourself. Here&rsquo;s how - and how
              fast.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-9">
              <a
                href="https://app.unabyss.com/register"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex h-12 items-center gap-1.5 rounded-full bg-white px-6 text-[14px] font-medium text-black transition-all hover:bg-white/90"
              >
                Start now
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative px-6 py-16 sm:px-10 sm:py-20 lg:px-12">
        <div className="relative mx-auto max-w-[1100px]">
          <Reveal className="mb-12 flex flex-col items-center text-center">
            <span className="v2-print-label">The plus</span>
            <h2
              className="v2-print-display mt-5 text-white"
              style={{ fontSize: "clamp(30px, 4vw, 48px)", lineHeight: 1.2 }}
            >
              90 seconds set-up
            </h2>
            <p className="mt-5 max-w-[52ch] text-[14.5px] font-light leading-[1.7] text-white/60">
              Connect to at least two tools. Wait for Unabyss to extract and
              structure information. Use it in any AI.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <Reveal className="h-full">
              <StepCard
                index={0}
                title="Connect your sources"
                target={30}
                intro="Pick at least two - Gmail, Notion, Calendar, GitHub, Linear. One click each."
              />
            </Reveal>
            <Reveal delay={80} className="h-full">
              <StepCard
                index={1}
                title="Your context builds itself"
                target={60}
                intro="Unabyss extracts and structures a real picture of you from those sources - automatically. No writing, no forms."
              />
            </Reveal>
            <Reveal delay={160} className="h-full">
              <StepCard
                index={2}
                title="Plug it into your AI over MCP"
                target={90}
                intro="Add Unabyss as an MCP connection in Claude, Cursor, ChatGPT, or your automation tool - and it's caught up from the first prompt."
              />
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="v2-shine v2-shine--light v2-card-glass mt-8 flex flex-col items-center gap-5 rounded-[20px] p-8 text-center sm:p-10">
              <p className="max-w-[56ch] text-[17px] font-light leading-[1.7] text-white/80">
                You don&rsquo;t have to finish reading this page to get value.
                Connect your sources and your next AI conversation already
                knows more.
              </p>
              <a
                href="https://app.unabyss.com/register"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex h-11 items-center gap-1.5 rounded-full bg-white px-6 text-[13.5px] font-medium text-black transition-all hover:bg-white/90"
              >
                Connect now
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative px-6 py-16 sm:px-10 sm:py-20 lg:px-12">
        <div className="relative mx-auto max-w-[1100px]">
          <Reveal className="mb-10 flex flex-col items-center text-center">
            <span className="v2-print-label">Quick tour</span>
            <h2
              className="v2-print-display mt-5 text-white"
              style={{ fontSize: "clamp(30px, 4vw, 48px)", lineHeight: 1.2 }}
            >
              Unabyss walkthrough
            </h2>
            <p className="mt-5 max-w-[58ch] text-[14.5px] font-light leading-[1.7] text-white/60">
              See the whole flow end to end - connect your sources, watch your
              context build, and plug it into your AI - in a couple of minutes.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="overflow-hidden rounded-[22px] border border-white/[0.07] bg-black/40 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.youtube.com/embed/TbaxvIEcdyU"
                  title="Unabyss walkthrough"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={160} className="mt-8 flex justify-center">
            <a
              href="https://app.unabyss.com/register"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex h-11 items-center gap-1.5 rounded-full border border-white/15 px-6 text-[13.5px] font-medium text-white transition-colors hover:border-white/35"
            >
              Try it for yourself
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </Reveal>
        </div>
      </section>

      <section className="relative px-6 py-16 sm:px-10 sm:py-20 lg:px-12">
        <div className="relative mx-auto max-w-[1100px]">
          <Reveal className="mb-12 flex flex-col items-center text-center">
            <span className="v2-print-label">The mechanics</span>
            <h2
              className="v2-print-display mt-5 text-white"
              style={{ fontSize: "clamp(30px, 4vw, 48px)", lineHeight: 1.2 }}
            >
              How it actually works
            </h2>
            <p className="mt-5 max-w-[52ch] text-[14.5px] font-light leading-[1.7] text-white/60">
              It&rsquo;s not a one-time import - the flow runs 24/7, in the
              background.
            </p>
          </Reveal>

          <Reveal>
            <div className="v2-shine v2-shine--light v2-card-glass rounded-[20px] p-6 sm:p-8">
              <p className="v2-mono mb-5 text-[10px] uppercase tracking-[0.2em] text-white/40">
                Your apps
              </p>
              <div className="grid grid-cols-5 gap-x-4 gap-y-6 sm:grid-cols-10">
                {yourApps.map((app) => (
                  <div key={app.name} className="flex flex-col items-center gap-2">
                    <img
                      src={app.src}
                      alt={app.name}
                      title={app.name}
                      loading="lazy"
                      className="size-7"
                    />
                    <span className="max-w-full truncate text-[9.5px] font-light text-white/45">
                      {app.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 60} className="h-full">
                <div className="v2-shine v2-shine--light v2-card-glass flex h-full flex-col gap-3 rounded-[16px] p-6">
                  <span className="v2-mono text-[10px] uppercase tracking-[0.2em] text-amber-200/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[17px] font-medium text-white">{pillar.title}</h3>
                  <p className="text-[13px] font-light leading-[1.65] text-white/55">
                    {pillar.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-8 flex flex-col items-center gap-6 rounded-[20px] border border-white/[0.07] bg-white/[0.02] p-8">
              <p className="v2-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                Your AI tools
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8">
                {yourTools.map((tool) => (
                  <div key={tool.name} className="flex flex-col items-center gap-2">
                    <span className="flex size-12 items-center justify-center rounded-[15px] bg-white/[0.05]">
                      <img src={tool.src} alt={tool.name} loading="lazy" className="size-7" />
                    </span>
                    <span className="text-[10.5px] font-light text-white/55">{tool.name}</span>
                  </div>
                ))}
              </div>
              <a
                href="/integrations"
                className="group inline-flex items-center gap-1.5 text-[13px] font-medium text-white/70 no-underline transition-colors hover:text-white"
              >
                See the full list of integrations and agents
                <ArrowUpRight
                  strokeWidth={1.8}
                  className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative px-6 py-16 sm:px-10 sm:py-20 lg:px-12">
        <div className="relative mx-auto max-w-[900px]">
          <Reveal className="mb-10 flex flex-col items-center text-center">
            <span className="v2-print-label">One source of truth</span>
            <h2
              className="v2-print-display mt-5 text-white"
              style={{ fontSize: "clamp(30px, 4vw, 48px)", lineHeight: 1.2 }}
            >
              And they finally talk to each other
            </h2>
            <p className="mt-5 max-w-[60ch] text-[14.5px] font-light leading-[1.7] text-white/60">
              This is the part built-in memory can&rsquo;t do. You run ChatGPT
              for some things and Claude for others - normally they&rsquo;re
              strangers. With Unabyss they pull from the same context, so what
              one knows, they all know. One source of truth, every tool.
            </p>
          </Reveal>

          <Reveal>
            <div className="v2-shine v2-shine--light v2-card-glass rounded-[22px] p-8 sm:p-10">
              <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-[11px] bg-white/[0.06]">
                    <BrandMark className="size-5" />
                  </span>
                  <span className="text-[14px] font-medium text-white">Unabyss · MCP</span>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5">
                  {inSyncAgents.map((agent) => (
                    <div key={agent.name} className="flex flex-col items-center gap-2">
                      <img src={agent.src} alt={agent.name} loading="lazy" className="size-9" />
                      <span className="text-[10px] font-light text-white/55">{agent.name}</span>
                      <span className="v2-mono text-[8.5px] uppercase tracking-[0.14em] text-emerald-300/70">
                        in sync
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="v2-shine v2-shine--light v2-card-glass mt-4 flex flex-col gap-2 rounded-[18px] p-6 sm:flex-row sm:items-baseline sm:gap-8 sm:p-7">
              <div className="flex flex-col gap-1 sm:w-[220px] sm:shrink-0">
                <span className="v2-print-label">Always current</span>
                <h3 className="text-[17px] font-light leading-snug text-white">
                  Why it never goes stale
                </h3>
              </div>
              <p className="text-[15px] font-light leading-[1.7] text-white/60">
                The flow runs continuously, and it&rsquo;s two-way. New email,
                new project, new priority - it flows in. And the work you do in
                your AI tools feeds back too, so your context reflects
                what you&rsquo;re actually doing, not a snapshot from setup day.
                That&rsquo;s what keeps it current without you maintaining
                anything.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative px-6 py-16 sm:px-10 sm:py-20 lg:px-12">
        <div className="relative mx-auto max-w-[1100px]">
          <Reveal className="mb-10 flex flex-col items-center text-center">
            <span className="v2-print-label">Compare</span>
            <h2
              className="v2-print-display mt-5 text-white"
              style={{ fontSize: "clamp(30px, 4vw, 48px)", lineHeight: 1.2 }}
            >
              Comparing something else?
            </h2>
            <p className="mt-5 max-w-[48ch] text-[14.5px] font-light leading-[1.7] text-white/60">
              Weighing Unabyss against another way of giving AI context?
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {compares.map((item, index) => (
              <Reveal key={item.title} delay={index * 80} className="h-full">
                <div className="v2-shine v2-shine--light v2-card-glass group flex h-full flex-col gap-4 rounded-[18px] p-6">
                  <h3 className="text-[17px] font-medium leading-snug text-white">
                    {item.title}
                  </h3>
                  <p className="flex-1 text-[13px] font-light leading-[1.65] text-white/55">
                    {item.body}
                  </p>
                  <a
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-white/70 no-underline transition-colors group-hover:text-white"
                  >
                    Read the full comparison
                    <ArrowUpRight
                      strokeWidth={1.8}
                      className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 py-16 sm:px-10 sm:py-24 lg:px-12">
        <div className="relative mx-auto max-w-[900px]">
          <Reveal className="mb-10 flex flex-col items-center text-center">
            <span className="v2-print-label">See it live</span>
            <h2
              className="v2-print-display mt-5 text-white"
              style={{ fontSize: "clamp(30px, 4vw, 48px)", lineHeight: 1.2 }}
            >
              Your context, one prompt away
            </h2>
            <p className="mt-5 max-w-[58ch] text-[14.5px] font-light leading-[1.7] text-white/60">
              Connect your sources once. Then every question your AI asks pulls
              the right context over MCP - no re-explaining, no copy-paste.
              Plug it in and feel the difference on your next prompt.
            </p>
          </Reveal>

          <Reveal>
            <div className="v2-shine v2-shine--light v2-card-glass overflow-hidden rounded-[22px]">
              <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-3.5">
                <div className="flex items-center gap-2.5">
                  <img src="/images/tools/claude.svg" alt="Claude" className="size-5" />
                  <span className="text-[13px] font-medium text-white">Claude</span>
                </div>
                <span className="v2-mono text-[10px] uppercase tracking-[0.16em] text-emerald-300/80">
                  Context loaded · Unabyss MCP
                </span>
              </div>

              <div className="flex flex-col gap-4 p-6 sm:p-8">
                <div className="self-end rounded-[14px] rounded-br-[4px] bg-white px-4 py-2.5 text-[13px] text-black">
                  Q3 launch status
                </div>
                <div className="max-w-[75%] self-start rounded-[14px] rounded-bl-[4px] border border-white/[0.08] bg-white/[0.04] px-4 py-3">
                  <p className="text-[13px] font-light leading-[1.7] text-white/85">
                    Pulling from your connected sources — Gmail, Notion, Linear,
                    Calendar. Here&rsquo;s where Q3 stands: the ingest rewrite
                    ships this sprint, the unify-context PRD is the one open
                    thread, and the Growth sync is Thursday at 10:00.
                  </p>
                  <p className="mt-2.5 flex flex-wrap gap-1.5">
                    {["Q3 roadmap", "ingest rewrite", "Growth"].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] font-light text-white/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </p>
                </div>
              </div>

              <div className="border-t border-white/[0.07] px-5 py-3">
                <p className="text-[10.5px] font-light text-white/35">
                  Claude is AI and can make mistakes. Please double-check
                  responses.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
              <a
                href="https://app.unabyss.com/register"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex h-12 items-center gap-1.5 rounded-full bg-white px-6 text-[14px] font-medium text-black transition-all hover:bg-white/90"
              >
                Start now
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
