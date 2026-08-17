"use client";

import { ArrowUpRight, Bot, Check, Copy, Sparkles } from "lucide-react";
import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import { agentLink, wouldUnabyssHelpPrompt } from "@/data/prompts";

export default function WouldUnabyssHelpSection() {
  const [copied, setCopied] = useState(false);

  const copyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(wouldUnabyssHelpPrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <>
      <section className="relative isolate flex flex-col overflow-hidden px-6 pb-10 pt-32 sm:px-10 sm:pt-40 lg:px-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 60% 45% at 50% 30%, rgba(255,255,255,0.06), transparent 70%)",
          }}
        />
        <div className="relative mx-auto flex max-w-[760px] flex-col items-center text-center">
          <Reveal className="flex flex-col items-center gap-4">
            <span className="v2-print-label">Ask your AI</span>
            <h1
              className="v2-print-display max-w-[16ch] text-white"
              style={{ fontSize: "clamp(38px, 5.4vw, 66px)", lineHeight: 1.05 }}
            >
              Would Unabyss help you?
            </h1>
            <p className="mt-4 text-[17px] font-light leading-[1.6] text-white/70">
              Don&apos;t take our word for it.
            </p>
            <p className="max-w-[56ch] text-[16px] font-light leading-[1.75] text-white/65 sm:text-[17px]">
              Your AI already knows how you work. This prompt makes it score,
              1–10, whether Unabyss would actually help you, with concrete
              examples from your own work and an honest answer about where it
              would add little.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative px-6 py-14 sm:px-10 sm:py-16 lg:px-12">
        <div className="relative mx-auto flex max-w-[820px] flex-col gap-5">
          <Reveal>
            <div className="v2-shine v2-shine--light v2-glass-panel rounded-[22px] p-6 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <p className="flex-1 text-[14.5px] font-light leading-[1.8] text-white/80 sm:text-[15.5px]">
                  &ldquo;{wouldUnabyssHelpPrompt}&rdquo;
                </p>
                <button
                  type="button"
                  onClick={copyPrompt}
                  aria-label={copied ? "Copied" : "Copy prompt"}
                  className="group inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:bg-white/[0.06] hover:text-white"
                >
                  {copied ? (
                    <Check className="size-4 text-[var(--gold-text)]" aria-hidden="true" />
                  ) : (
                    <Copy className="size-4" aria-hidden="true" />
                  )}
                </button>
              </div>
              <div className="mt-5 flex flex-col items-start gap-2">
                <span className="v2-mono text-[10.5px] uppercase tracking-[0.18em] text-white/40">
                  Copy prompt
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center">
              <a
                href={agentLink("claude", wouldUnabyssHelpPrompt)}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-white px-7 text-[15px] font-medium text-black no-underline transition-all hover:bg-white/90"
              >
                <Bot className="size-4" aria-hidden="true" />
                Ask Claude
                <ArrowUpRight
                  strokeWidth={1.8}
                  className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <a
                href={agentLink("chatgpt", wouldUnabyssHelpPrompt)}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full border border-white/15 px-7 text-[15px] font-medium text-white no-underline transition-colors hover:bg-white/[0.06]"
              >
                <Sparkles className="size-4" aria-hidden="true" />
                Ask ChatGPT
                <ArrowUpRight
                  strokeWidth={1.8}
                  className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
            <p className="mx-auto mt-6 max-w-[52ch] text-center text-[13.5px] font-light leading-[1.7] text-white/45">
              Works best in an account you already use for work: the more your
              AI knows about you, the more honest the score.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
