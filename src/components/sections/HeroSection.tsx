"use client";

import PageContainer from "@/components/layout/PageContainer";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const aiTools = [
  "OpenClaw",
  "Claude",
  "Codex",
  "Cursor",
  "Gemini",
  "Perplexity",
  "VS Code",
  "ChatGPT",
  "Grok",
];

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#0c0c0c] pb-14 pt-[96px] sm:pt-[104px] lg:pt-[112px]"
    >
      <div className="pointer-events-none absolute left-1/2 top-[70px] h-[430px] w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,100,74,0.08),transparent_68%)]" />

      <PageContainer className="relative">
        <div className="mx-auto max-w-[720px] text-center">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="text-balance text-[32px] font-semibold leading-[1.03] tracking-[-0.05em] text-white sm:text-[40px] md:text-[46px] lg:text-[52px]"
          >
            Your <span className="text-[#ff6f52]">AI</span> doesn&apos;t talk to
            <br className="hidden sm:block" /> your other tools
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.55 }}
            className="mx-auto mt-3 max-w-[520px] text-[12px] leading-5 text-white/42 sm:text-[13px]"
          >
            Your complete context in every AI you use. Connect once and never
            explain yourself to AI again.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.55 }}
            className="mt-5"
          >
            <a
              href="https://app.unabyss.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-8 items-center gap-2 rounded-full bg-white px-4 text-[11px] font-medium text-black transition-transform duration-200 hover:scale-[1.03]"
            >
              Start free now
              <ArrowRight size={13} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22, duration: 0.6 }}
          className="mx-auto mt-6 max-w-[760px]"
        >
          <p className="mb-2 text-center text-[9px] uppercase tracking-[0.18em] text-white/20">
            Works with
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            {aiTools.map((tool) => (
              <span
                key={tool}
                className="text-[10px] font-medium text-white/35 transition-colors hover:text-white/70"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 26, scale: 0.99 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.28, duration: 0.75 }}
          className="relative mx-auto mt-7 max-w-[940px]"
        >
          <div className="absolute inset-x-[14%] -bottom-6 h-14 bg-[#ff6f52]/10 blur-[45px]" />

          <div className="relative overflow-hidden rounded-[12px] border border-white/[0.08] bg-[#121212] shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
            <div className="flex h-8 items-center border-b border-white/[0.06] px-3">
              <div className="flex gap-1.5">
                <span className="size-[7px] rounded-full bg-[#ff5f57]" />
                <span className="size-[7px] rounded-full bg-[#febc2e]" />
                <span className="size-[7px] rounded-full bg-[#28c840]" />
              </div>

              <div className="mx-auto h-4 w-[38%] rounded border border-white/[0.05] bg-white/[0.025]" />
            </div>

            <div className="relative aspect-[1.85/1] overflow-hidden bg-[#171717]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.03),transparent_50%)]" />

              <div className="absolute left-0 top-0 hidden h-full w-[150px] border-r border-white/[0.05] bg-[#131313] p-3 md:block">
                <div className="mb-5 h-4 w-20 rounded bg-white/[0.08]" />

                <div className="space-y-2">
                  <div className="h-7 rounded bg-white/[0.03]" />
                  <div className="h-7 rounded bg-[#ff6f52]/15" />
                  <div className="h-7 rounded bg-white/[0.03]" />
                  <div className="h-7 rounded bg-white/[0.03]" />
                  <div className="h-7 rounded bg-white/[0.03]" />
                </div>
              </div>

              <div className="flex h-full items-center justify-center p-5 md:pl-[172px]">
                <div className="w-full max-w-[520px]">
                  <div className="rounded-[10px] border border-white/[0.07] bg-[#1b1b1b] p-4">
                    <div className="mb-5 flex items-center justify-between">
                      <div>
                        <div className="h-2.5 w-28 rounded bg-white/20" />
                        <div className="mt-2 h-2 w-40 rounded bg-white/[0.06]" />
                      </div>

                      <div className="size-8 rounded-lg bg-[#ff6f52]/20" />
                    </div>

                    <div className="flex h-11 items-center rounded-lg border border-white/[0.06] bg-[#141414] px-3">
                      <div className="h-2 w-[70%] rounded bg-white/[0.07]" />

                      <div className="ml-auto flex size-7 items-center justify-center rounded-md bg-white">
                        <ArrowRight size={13} className="text-black" />
                      </div>
                    </div>

                    <div className="mt-3 grid grid-cols-3 gap-2">
                      <div className="h-16 rounded-lg border border-white/[0.05] bg-white/[0.025]" />
                      <div className="h-16 rounded-lg border border-white/[0.05] bg-white/[0.025]" />
                      <div className="h-16 rounded-lg border border-white/[0.05] bg-white/[0.025]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-5 text-center">
          <span className="text-[10px] text-white/25">800,000+ items synced</span>
        </div>
      </PageContainer>
    </section>
  );
}
