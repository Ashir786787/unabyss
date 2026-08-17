"use client";

import { ArrowUpRight, Bot, Link2, Sparkles } from "lucide-react";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import {
  agentLink,
  seeWhatUnabyssCanDoPrompt,
} from "@/data/prompts";

export default function SeeWhatUnabyssCanDoSection() {
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
            <span className="v2-print-label">Try it</span>
            <h1
              className="v2-print-display max-w-[16ch] text-white"
              style={{ fontSize: "clamp(38px, 5.4vw, 66px)", lineHeight: 1.05 }}
            >
              See what Unabyss can do for you
            </h1>
            <p className="mt-4 max-w-[56ch] text-[16px] font-light leading-[1.75] text-white/65 sm:text-[17px]">
              Pick your agent. It opens with the prompt already loaded — it
              reads your real Unabyss context and points out where having it on
              hand actually changes how you work.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative px-6 py-14 sm:px-10 sm:py-16 lg:px-12">
        <div className="relative mx-auto flex max-w-[820px] flex-col gap-5">
          <Reveal className="v2-shine v2-shine--light v2-glass-panel rounded-[22px] p-7 sm:p-9">
            <div className="v2-mono text-[11px] uppercase tracking-[0.18em] text-white/45">
              The prompt it opens with
            </div>
            <p className="mt-4 whitespace-pre-line text-[14px] font-light leading-[1.8] text-white/70 sm:text-[15px]">
              {seeWhatUnabyssCanDoPrompt}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center">
              <a
                href={agentLink("claude", seeWhatUnabyssCanDoPrompt)}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-white px-7 text-[15px] font-medium text-black no-underline transition-all hover:bg-white/90"
              >
                <Bot className="size-4" aria-hidden="true" />
                See what Unabyss can do
                <ArrowUpRight
                  strokeWidth={1.8}
                  className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <a
                href={agentLink("chatgpt", seeWhatUnabyssCanDoPrompt)}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-full border border-white/15 px-7 text-[15px] font-medium text-white no-underline transition-colors hover:bg-white/[0.06]"
              >
                <Sparkles className="size-4" aria-hidden="true" />
                See what Unabyss can do
                <ArrowUpRight
                  strokeWidth={1.8}
                  className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
            <p className="mx-auto mt-6 max-w-[52ch] text-center text-[13.5px] font-light leading-[1.7] text-white/45">
              Requires the Unabyss connector to be set up in your agent. Not
              connected yet?{" "}
              <Link
                href="/connect-claude"
                className="text-white/70 no-underline transition-colors hover:text-white"
              >
                Connect Claude
              </Link>{" "}
              or{" "}
              <Link
                href="/connect-chatgpt"
                className="text-white/70 no-underline transition-colors hover:text-white"
              >
                connect ChatGPT
              </Link>{" "}
              first.
            </p>
          </Reveal>

          <Reveal delay={140} className="mx-auto">
            <div className="flex items-center gap-3 text-[13px] font-light text-white/50">
              <Link2 className="size-4" aria-hidden="true" />
              The prompt is pre-filled — just pick your agent and run it.
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
