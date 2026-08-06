"use client";

import PageContainer from "@/components/layout/PageContainer";
import { ArrowRight, Bot, Check, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pb-20 pt-36 sm:pt-40 lg:pb-28 lg:pt-44"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[850px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,111,77,0.12),transparent_68%)]" />

      <PageContainer className="relative">
        <div className="mx-auto flex max-w-[850px] flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs text-white/65"
          >
            <Sparkles size={13} className="text-[#ff7657]" />
            One context layer for every AI tool
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.65 }}
            className="max-w-[760px] text-balance text-[42px] font-semibold leading-[1.05] tracking-[-0.055em] text-white sm:text-[58px] lg:text-[72px]"
          >
            Your{" "}
            <span className="inline-flex items-center text-[#ff7657]">
              <Bot className="mr-2 size-[0.72em]" />
              AI
            </span>{" "}
            doesn&apos;t talk to your other tools
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.65 }}
            className="mt-6 max-w-[620px] text-pretty text-base leading-7 text-white/48 sm:text-lg"
          >
            Unabyss gives your AI agents one connected memory across every app,
            file, conversation, and workflow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.65 }}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
          >
            <a
              href="#pricing"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-medium text-black transition-all hover:bg-zinc-200"
            >
              Get started
              <ArrowRight size={15} />
            </a>

            <span className="inline-flex items-center gap-2 text-xs text-white/40">
              <Check size={14} />
              Start free. No credit card required.
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.32, duration: 0.8 }}
          className="relative mx-auto mt-16 max-w-[1020px]"
        >
          <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-r from-[#ff7657]/20 via-white/5 to-blue-500/10 blur-2xl" />

          <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-[#141414] shadow-[0_40px_100px_rgba(0,0,0,0.6)]">
            <div className="flex h-11 items-center border-b border-white/[0.07] px-4">
              <div className="flex gap-1.5">
                <span className="size-2.5 rounded-full bg-[#ff5f57]" />
                <span className="size-2.5 rounded-full bg-[#febc2e]" />
                <span className="size-2.5 rounded-full bg-[#28c840]" />
              </div>

              <div className="mx-auto h-6 w-[42%] rounded-md border border-white/[0.06] bg-white/[0.025]" />
            </div>

            <div className="grid min-h-[370px] grid-cols-1 lg:grid-cols-[210px_1fr]">
              <aside className="hidden border-r border-white/[0.07] p-4 lg:block">
                <div className="mb-7 h-7 w-24 rounded-md bg-white/[0.07]" />

                <div className="space-y-2">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div
                      key={index}
                      className={`h-9 rounded-lg ${
                        index === 1
                          ? "bg-[#ff7657]/15"
                          : "bg-white/[0.025]"
                      }`}
                    />
                  ))}
                </div>
              </aside>

              <div className="flex items-center justify-center p-6 sm:p-10">
                <div className="w-full max-w-[540px] rounded-2xl border border-white/[0.08] bg-[#181818] p-5 shadow-2xl">
                  <div className="mb-8 flex items-center justify-between">
                    <div>
                      <div className="h-3 w-24 rounded-full bg-white/20" />
                      <div className="mt-2 h-2 w-40 rounded-full bg-white/[0.07]" />
                    </div>

                    <div className="size-9 rounded-xl bg-[#ff7657]/15" />
                  </div>

                  <div className="flex h-14 items-center rounded-xl border border-white/[0.08] bg-black/20 px-4">
                    <div className="h-2.5 w-[70%] rounded-full bg-white/[0.08]" />
                    <div className="ml-auto size-8 rounded-lg bg-white" />
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-3">
                    {Array.from({ length: 3 }).map((_, index) => (
                      <div
                        key={index}
                        className="h-20 rounded-xl border border-white/[0.06] bg-white/[0.025]"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </PageContainer>
    </section>
  );
}
