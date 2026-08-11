"use client";

import PageContainer from "@/components/layout/PageContainer";
import HeroVideoShowcase from "@/components/visuals/HeroVideoShowcase";
import { fadeUp, fadeUpMedium } from "@/lib/animations";
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
      className="relative overflow-hidden bg-[#0c0c0c] pb-20 pt-[210px] sm:pt-[225px] lg:pt-[245px]"
    >
      <div className="pointer-events-none absolute left-1/2 top-[70px] h-[430px] w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,100,74,0.08),transparent_68%)]" />

      <PageContainer className="relative">
        <div className="mx-auto max-w-[980px] text-center">
          <motion.div
            variants={fadeUpMedium}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            className="mx-auto inline-flex items-center gap-3 rounded-[12px] border border-white/[0.06] bg-[#1b171d] px-4 py-3 shadow-[0_14px_30px_rgba(0,0,0,0.22)]"
          >
            <div className="flex size-8 items-center justify-center rounded-full bg-[#f3c51d] text-[13px] font-bold text-black">
              1
            </div>

            <div className="text-left">
              <p className="text-[8px] font-semibold uppercase tracking-[0.08em] text-white/45">
                Product Hunt
              </p>

              <p className="mt-0.5 text-[12px] font-semibold text-white">
                #1 Product of the Day
              </p>
            </div>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.08, duration: 0.6 }}
            className="mt-10 text-balance text-[40px] font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-[56px] md:text-[66px] lg:text-[78px]"
          >
            Your <span className="text-[#ff7657]">AI</span> doesn&apos;t talk to
            <br className="hidden sm:block" /> your other tools
          </motion.h1>

          <motion.p
            variants={fadeUpMedium}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.14, duration: 0.55 }}
            className="mx-auto mt-6 max-w-[640px] text-[12px] leading-6 text-white/38 sm:text-[14px]"
          >
            Connect your tools once and give every AI access to the context it
            needs, without repeating yourself again.
          </motion.p>

          <motion.div
            variants={fadeUpMedium}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2, duration: 0.55 }}
            className="mt-7 flex justify-center"
          >
            <a
              href="https://app.unabyss.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-full bg-white px-5 text-[11px] font-semibold text-black transition-transform hover:scale-[1.025]"
            >
              Start free now
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.22, duration: 0.6 }}
          className="mx-auto mt-10 max-w-[860px]"
        >
          <p className="mb-3 text-center text-[9px] uppercase tracking-[0.18em] text-white/18">
            Works with
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            {aiTools.map((tool) => (
              <span
                key={tool}
                className="text-[10px] font-medium text-white/32 transition-colors hover:text-white/65"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>

        <HeroVideoShowcase />

        <div className="mt-5 text-center">
          <span className="text-[10px] text-white/25">800,000+ items synced</span>
        </div>
      </PageContainer>
    </section>
  );
}
