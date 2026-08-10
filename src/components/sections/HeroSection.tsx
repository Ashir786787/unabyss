"use client";

import PageContainer from "@/components/layout/PageContainer";
import HeroWorkspacePreview from "@/components/visuals/HeroWorkspacePreview";
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
            className="text-balance text-[34px] font-semibold leading-[1.03] tracking-[-0.05em] text-white sm:text-[42px] md:text-[48px] lg:text-[54px]"
          >
            Your <span className="text-[#ff7657]">AI</span> doesn&apos;t talk to
            <br className="hidden sm:block" /> your other tools
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.55 }}
            className="mx-auto mt-3 max-w-[520px] text-[11px] leading-5 text-white/38 sm:text-[12px]"
          >
            Connect your tools once and give every AI access to the context it
            needs, without repeating yourself again.
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

        <HeroWorkspacePreview />

        <div className="mt-5 text-center">
          <span className="text-[10px] text-white/25">800,000+ items synced</span>
        </div>
      </PageContainer>
    </section>
  );
}
