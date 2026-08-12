"use client";

import { useState } from "react";
import { ArrowUpRight, BadgeCheck, Copy } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const SETUP_MESSAGE = "Let's set up Unabyss";

export default function ClaudeSetupSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(SETUP_MESSAGE);
    } catch {
      return;
    }

    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <section className="relative hidden px-6 py-24 sm:block sm:px-10 sm:py-32 lg:px-12">
      <div className="relative mx-auto max-w-[1100px]">
        <Reveal className="mb-14 flex flex-col items-center text-center">
          <span className="v2-print-label">Connect</span>
          <h2
            className="v2-print-display mt-5 max-w-[20ch] text-white"
            style={{ fontSize: "clamp(30px, 4vw, 48px)", lineHeight: 1.2 }}
          >
            Add Unabyss to Claude in two steps
          </h2>
          <p className="mt-5 max-w-[52ch] text-[15px] font-light leading-[1.7] text-white/60">
            Unabyss is an official connector in Claude&apos;s directory. Add it
            in one click, send one message, and every conversation pulls your
            real context.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mx-auto flex max-w-[640px] items-center gap-4">
            <span className="step-num shrink-0">1</span>

            <a
              href="https://app.unabyss.com/register"
              target="_blank"
              rel="noreferrer"
              aria-label="Connect Claude to Unabyss"
              className="claude-connect-card group relative flex flex-1 cursor-pointer items-center gap-4 overflow-hidden rounded-xl px-6 py-5 text-left shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              <img
                src="/images/tools/claude.svg"
                alt=""
                aria-hidden="true"
                width={44}
                height={44}
                className="size-11 shrink-0"
              />

              <span className="flex min-w-0 flex-1 flex-col items-start gap-1">
                <span className="block text-[17px] font-semibold leading-tight text-white">
                  Connect Claude to Unabyss
                </span>
                <span className="block text-[14px] text-white/85 sm:whitespace-nowrap">
                  Finish signing up and onboarding right inside Claude
                </span>
                <span className="mt-0.5 inline-flex shrink-0 items-center gap-1 rounded-full bg-white/90 px-1.5 py-px text-[11px] font-semibold text-[#9a3f22]">
                  <BadgeCheck className="size-3 shrink-0" />
                  Official connector
                </span>
              </span>

              <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-white px-4 py-2 text-[14px] font-semibold text-[#9a3f22]">
                Connect
                <ArrowUpRight className="size-4 shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          </div>

          <div className="mt-4 flex justify-center">
            <a
              href="https://app.unabyss.com/register"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer rounded-md px-2 py-1 text-[13px] font-medium text-white/55 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              Connect to a different agent
            </a>
          </div>
        </Reveal>

        <Reveal delay={200} className="mt-12">
          <div className="mx-auto flex max-w-[640px] items-start gap-4">
            <span className="step-num mt-5 shrink-0">2</span>

            <div className="flex-1 rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <h3 className="text-[15px] font-medium text-white">
                Say hello to finish setup
              </h3>
              <p className="mt-2 text-[14px] font-light leading-[1.6] text-white/60">
                Open a new chat in Claude and send this. Unabyss walks you
                through the rest right there.
              </p>

              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex min-w-0 flex-1 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-2">
                  <span className="min-w-0 flex-1 truncate px-2 text-[15px] text-white/90">
                    {SETUP_MESSAGE}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-[13px] font-medium text-white transition-colors hover:bg-white/10"
                  >
                    {copied ? (
                      <BadgeCheck className="size-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="size-3.5" />
                    )}
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>

                <a
                  href="https://claude.ai/new?q=Let's%20set%20up%20Unabyss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-11 shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-white px-5 text-[15px] font-medium text-black no-underline transition-all hover:bg-white/90"
                >
                  Continue in
                  <img
                    src="/images/hero/claude-mark.svg"
                    alt=""
                    aria-hidden="true"
                    width={256}
                    height={257}
                    className="size-4 object-contain"
                  />
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
