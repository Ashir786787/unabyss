"use client";

import { useState } from "react";
import {
  Check,
  ChevronDown,
  Hourglass,
  Layers,
  Lock,
  RefreshCw,
  Shuffle,
  Sparkles,
  X,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import CompareHero from "@/components/sections/compare/CompareHero";
import CompareCta from "@/components/sections/compare/CompareCta";
import SectionHeader from "@/components/sections/compare/SectionHeader";

const glanceRows = [
  {
    dimension: "How it's built",
    memory: "Learned from past conversations",
    context: "Extracted from your actual sources",
  },
  {
    dimension: "Starting point",
    memory: "Starts empty, builds over time",
    context: "Starts accurate from day one",
  },
  {
    dimension: "Where it lives",
    memory: "Inside one platform",
    context: "Independent of any platform",
  },
  {
    dimension: "Who controls it",
    memory: "The platform decides what to store",
    context: "You decide what's included",
  },
  {
    dimension: "When you switch tools",
    memory: "Starts over from zero",
    context: "Travels with you",
  },
  {
    dimension: "How it stays current",
    memory: "Only learns from new conversations",
    context: "Updates as your sources change",
  },
];

const gapCards = [
  {
    icon: Hourglass,
    title: "Starts empty",
    body: "The first time you open ChatGPT, it knows nothing about you. Over dozens of conversations, it builds a picture - your role, your projects, how you like to communicate. That process takes weeks, and the result is fragmented and unverifiable.",
  },
  {
    icon: Shuffle,
    title: "Unstructured",
    body: "The platform decides what's worth remembering and what isn't. You can't audit it, you can't edit it, and you can't export it in a useful form.",
  },
  {
    icon: Lock,
    title: "Platform-locked",
    body: "Your ChatGPT memory stays in ChatGPT. Your Claude context stays in Claude. Every new tool you use starts from zero - because there's nowhere for that knowledge to live outside of each individual app.",
  },
];

const alternativePoints = [
  { icon: Layers, text: "Single structured vault" },
  { icon: Sparkles, text: "Authoritative sources" },
  { icon: RefreshCw, text: "MCP-connected agents" },
  { icon: Lock, text: "You own the files" },
];

const faqs = [
  {
    q: "Is AI memory the same as AI context?",
    a: "No. AI memory is built reactively from past conversations and stays locked inside the platform that created it. AI context is intentional - pre-extracted from authoritative sources, structured, portable, and user-owned. They can coexist: memory handles 'what we discussed last time,' context handles 'who I am and what I'm working on.'",
  },
  {
    q: "Can I use both AI memory and a context layer?",
    a: "Yes, and many people do. They serve different purposes. Platform memory captures the specifics of past interactions within one tool. A context layer provides foundational identity and role information that every tool can access before the first interaction begins.",
  },
  {
    q: "What is MCP context?",
    a: "MCP (Model Context Protocol) is the open standard that lets AI tools pull structured data from external sources. When your context vault is connected via MCP, AI tools like Claude Desktop or Cursor automatically load your context at the start of each session - no copy-pasting, no re-prompting.",
  },
  {
    q: "Which AI tools support context layers today?",
    a: "Any tool that supports MCP can connect to a user context vault. This currently includes Claude Desktop, Claude Code, Cursor, and a growing list of MCP-compatible agents. Tools without MCP support can still access exported context files directly.",
  },
];

function FaqItem({
  item,
  open,
  onToggle,
}: {
  item: (typeof faqs)[number];
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-white/8 last:border-b-0">
      <button
        type="button"
        aria-expanded={open}
        onClick={onToggle}
        className="flex w-full cursor-pointer items-start justify-between gap-4 py-5 text-left"
      >
        <span className="text-[16px] font-medium text-white sm:text-[17px]">
          {item.q}
        </span>
        <ChevronDown
          strokeWidth={2}
          className={`size-4 shrink-0 translate-y-0.5 text-white/50 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open ? (
        <div className="pb-5 text-[15px] font-light leading-[1.7] text-white/60">
          {item.a}
        </div>
      ) : null}
    </div>
  );
}

export default function ContextVsMemoryPageSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <CompareHero
        label="Guide"
        title="AI Memory vs. AI Context: What's the Difference?"
        subtitle="AI memory and AI context get used interchangeably. They shouldn't. Memory is what an AI learns about you from past conversations — reactive, unstructured, and locked inside the platform that built it. Context is who you are, pre-structured from authoritative sources, portable across every tool you use."
        cta={false}
      />

      <section className="relative px-6 py-16 sm:px-10 sm:py-20 lg:px-12">
        <div className="relative mx-auto max-w-[1100px]">
          <SectionHeader label="At a glance" title="Memory vs. context" />

          <Reveal>
            <div className="v2-shine v2-shine--light v2-card-glass relative overflow-hidden rounded-[22px]">
              <div className="grid grid-cols-1 gap-3 border-b border-white/8 px-5 py-5 sm:grid-cols-[1fr_1.1fr_1.1fr] sm:px-8 sm:py-6">
                <span className="hidden text-[11px] font-medium uppercase tracking-[0.14em] text-white/40 sm:block">
                  Dimension
                </span>
                <div className="flex items-center gap-2">
                  <span
                    className="inline-flex size-7 items-center justify-center rounded-full bg-white/6 text-white/50"
                    aria-hidden="true"
                  >
                    <X className="size-3.5" strokeWidth={2} />
                  </span>
                  <span className="text-[13px] font-medium uppercase tracking-[0.12em] text-white/55">
                    AI Memory
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className="inline-flex size-7 items-center justify-center rounded-full bg-[var(--gold-muted)]/20 text-[var(--gold-bright)]"
                    aria-hidden="true"
                  >
                    <Check className="size-3.5" strokeWidth={2} />
                  </span>
                  <span className="text-[13px] font-medium uppercase tracking-[0.12em] text-[var(--gold-bright)]">
                    AI Context
                  </span>
                </div>
              </div>

              <div className="divide-y divide-white/6">
                {glanceRows.map((row) => (
                  <div
                    key={row.dimension}
                    className="grid grid-cols-1 gap-3 px-5 py-4 sm:grid-cols-[1fr_1.1fr_1.1fr] sm:px-8 sm:py-5"
                  >
                    <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-white/45 sm:pt-0.5">
                      {row.dimension}
                    </p>
                    <p className="text-[15px] font-light leading-[1.55] text-white/55">
                      {row.memory}
                    </p>
                    <p className="text-[15px] font-light leading-[1.55] text-white/88">
                      {row.context}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative px-6 py-20 sm:px-10 sm:py-28 lg:px-12">
        <div className="relative mx-auto max-w-[1100px]">
          <SectionHeader
            label="The gap"
            title="Why AI memory isn't enough"
            paragraph="Every major AI platform has shipped some form of memory. ChatGPT remembers things from past chats. Claude builds up context within Projects. Gemini tracks preferences across sessions. These are genuinely useful — for what they are. The problem is what they're not."
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
            {gapCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 80} className="h-full">
                <div className="v2-shine v2-shine--light v2-card-glass flex h-full flex-col gap-4 rounded-[18px] p-6 sm:p-8">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/6 text-white/55">
                    <card.icon className="size-4" strokeWidth={1.6} />
                  </span>
                  <h3 className="text-[17px] font-medium leading-snug text-white">
                    {card.title}
                  </h3>
                  <p className="text-[15px] font-light leading-[1.65] text-white/60">
                    {card.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 py-20 sm:px-10 sm:py-28 lg:px-12">
        <div className="relative mx-auto max-w-[1100px]">
          <SectionHeader
            label="The alternative"
            title="What context infrastructure looks like"
          />

          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-16">
            <Reveal className="flex flex-col gap-6">
              <p className="text-[16px] font-light leading-[1.8] text-white/65 sm:text-[17px]">
                Context infrastructure inverts the model. Instead of each AI
                tool building its own siloed picture of you, you maintain a
                single structured vault — and every tool pulls from it.
              </p>
              <p className="text-[16px] font-light leading-[1.8] text-white/65 sm:text-[17px]">
                That vault is built from authoritative sources: your LinkedIn
                profile, your Notion workspace, your Gmail, your GitHub. Not
                from what you&apos;ve said to an AI, but from what you&apos;ve actually
                done and written and built. It starts accurate and stays
                accurate because it stays connected to the sources that reflect
                who you are right now.
              </p>
              <p className="text-[16px] font-light leading-[1.8] text-white/65 sm:text-[17px]">
                The interface between your context vault and AI tools is MCP
                (Model Context Protocol) — an open standard co-developed by
                Anthropic, OpenAI, and Block. When you connect your context via
                MCP, Claude Code, Cursor, or any compatible agent loads your
                identity, role, and priorities before you type a word.
              </p>
              <p className="text-[16px] font-light leading-[1.8] text-white/65 sm:text-[17px]">
                Context infrastructure is also user-owned. You have the files.
                You control what each tool can see. You can revoke access
                instantly. Nothing is trapped inside a platform.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <ul className="flex flex-col gap-3 sm:pt-1">
                {alternativePoints.map((point) => (
                  <li key={point.text} className="flex items-center gap-3">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[var(--gold-muted)]/15 text-[var(--gold-bright)]">
                      <point.icon className="size-3.5" strokeWidth={1.8} />
                    </span>
                    <span className="text-[14px] font-medium text-white/85">
                      {point.text}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative px-6 py-20 sm:px-10 sm:py-28 lg:px-12">
        <div className="relative mx-auto max-w-[1100px]">
          <SectionHeader
            label="Portability"
            title="The portability problem"
            paragraph="Here's the scenario that makes the difference concrete."
          />

          <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5">
            <Reveal className="h-full">
              <div className="v2-shine v2-shine--light v2-card-glass flex h-full flex-col gap-4 rounded-[18px] p-6 sm:p-8">
                <span className="w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-white/45">
                  Platform memory
                </span>
                <p className="text-[16px] font-light leading-[1.7] text-white/65">
                  You&apos;ve used ChatGPT for six months. It knows your company,
                  your role, your communication style. You decide to try Claude
                  for coding. You open Claude for the first time.
                </p>
                <p className="text-[16px] font-light leading-[1.7] text-white/65">
                  It knows nothing about you.
                </p>
                <p className="mt-2 border-t border-white/8 pt-4 text-[20px] font-light leading-snug text-white/40">
                  Everything your ChatGPT memory accumulated - gone. You&apos;re
                  re-introducing yourself, re-establishing context,
                  re-teaching preferences. And when a third tool becomes
                  relevant, you&apos;ll do it again.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120} className="h-full">
              <div className="v2-shine v2-shine--gold v2-glass-panel--gold flex h-full flex-col gap-4 rounded-[18px] p-6 sm:p-8">
                <span className="w-fit rounded-full border border-[var(--gold-muted)]/30 bg-[var(--gold-muted)]/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--gold-bright)]">
                  Context vault
                </span>
                <p className="mt-2 text-[16px] font-light leading-[1.7] text-white/60">
                  This isn&apos;t a UX problem that gets fixed with better
                  onboarding. It&apos;s structural. Memory is platform-specific by
                  design. Every new tool is a clean slate.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <p className="mx-auto mt-10 max-w-[52ch] text-center text-[17px] font-light leading-[1.7] text-[var(--gold-bright)]/90">
              Context infrastructure solves this at the source. Your context
              vault exists independently of any platform. Connect a new tool -
              it already knows who you are.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative px-6 py-12 sm:px-10 lg:px-12">
        <div className="relative mx-auto max-w-[720px]">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <span className="v2-print-label">Unabyss</span>
            <p className="text-[17px] font-light leading-[1.75] text-white/65">
              Unabyss is a personal context vault for AI tools. Connect your
              sources, and Unabyss generates your structured context in under
              90 seconds. From that point, any MCP-compatible agent - Claude,
              Cursor, and others - pulls your context automatically. One setup.
              Every tool.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative px-6 py-20 sm:px-10 sm:py-24 lg:px-12">
        <div className="relative mx-auto max-w-[800px]">
          <Reveal className="mb-10 flex flex-col items-center gap-3 text-center">
            <span className="v2-print-label">FAQ</span>
            <h2
              className="v2-print-display text-white"
              style={{ fontSize: "clamp(26px, 3vw, 38px)", lineHeight: 1.2 }}
            >
              Common questions
            </h2>
          </Reveal>

          <Reveal>
            <div className="v2-shine v2-shine--light v2-card-glass rounded-[20px] px-5 py-2 sm:px-8">
              {faqs.map((item, index) => (
                <FaqItem
                  key={item.q}
                  item={item}
                  open={openFaq === index}
                  onToggle={() => setOpenFaq(openFaq === index ? null : index)}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CompareCta
        title="Ready to build your context vault?"
        sub="Connect one source in under a minute."
      />
    </>
  );
}
