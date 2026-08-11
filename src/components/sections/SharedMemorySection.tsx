"use client";

import PageContainer from "@/components/layout/PageContainer";
import { fadeUp, fadeUpLarge, fadeUpMedium, viewportOnce, viewportQuarter } from "@/lib/animations";
import {
  Brain,
  Check,
  FolderGit2,
  Mail,
  MessageSquare,
  Search,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";

const sources = [
  {
    name: "Gmail",
    icon: Mail,
    color: "bg-[#ea4335]",
  },
  {
    name: "Slack",
    icon: MessageSquare,
    color: "bg-[#6e4b8b]",
  },
  {
    name: "GitHub",
    icon: FolderGit2,
    color: "bg-[#24292f]",
  },
];

const agents = [
  {
    name: "Claude",
    label: "Reads shared context",
    color: "bg-[#d97757]",
  },
  {
    name: "Cursor",
    label: "Builds on the same memory",
    color: "bg-[#252525]",
  },
  {
    name: "ChatGPT",
    label: "Starts with what you already know",
    color: "bg-[#10a37f]",
  },
];

export default function SharedMemorySection() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-[#0c0c0c] py-28 sm:py-32 lg:py-36"
    >
      <div className="pointer-events-none absolute left-1/2 top-[46%] h-[620px] w-[920px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,118,87,0.055),transparent_70%)]" />

      <PageContainer className="relative">
        <div className="mx-auto max-w-[1000px]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportQuarter}
            transition={{ duration: 0.55 }}
            className="text-center"
          >
            <p className="text-[9px] uppercase tracking-[0.24em] text-white/18">
              Shared memory
            </p>

            <h2 className="mt-4 text-balance text-[30px] font-semibold leading-[1.03] tracking-[-0.045em] text-white sm:text-[40px] lg:text-[48px]">
              Connect once. Every tool works
              <br className="hidden sm:block" /> from the same memory.
            </h2>

            <p className="mx-auto mt-5 max-w-[590px] text-[11px] leading-5 text-white/28 sm:text-[12px]">
              Unabyss sits between your work and your AI tools so every assistant
              can start from the same context.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUpLarge}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: 0.08, duration: 0.65 }}
            className="relative mt-14 grid gap-5 lg:grid-cols-[1fr_190px_1fr]"
          >
            <div className="overflow-hidden rounded-[18px] border border-white/[0.07] bg-[#111111]">
              <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4">
                <div>
                  <p className="text-[8px] uppercase tracking-[0.15em] text-white/18">
                    Your workspace
                  </p>

                  <p className="mt-2 text-[12px] font-medium text-white/50">
                    Context already lives here
                  </p>
                </div>

                <Search size={14} className="text-white/22" />
              </div>

              <div className="space-y-3 p-5">
                {sources.map((source) => {
                  const Icon = source.icon;

                  return (
                    <div
                      key={source.name}
                      className="flex items-center rounded-[11px] border border-white/[0.06] bg-[#171717] p-3.5"
                    >
                      <div
                        className={`flex size-9 items-center justify-center rounded-[9px] ${source.color}`}
                      >
                        <Icon size={14} className="text-white" />
                      </div>

                      <div className="ml-3">
                        <p className="text-[9px] font-medium text-white/50">
                          {source.name}
                        </p>

                        <p className="mt-0.5 text-[8px] text-white/20">
                          Messages, files and activity
                        </p>
                      </div>

                      <Check
                        size={11}
                        className="ml-auto text-emerald-400/70"
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative hidden items-center justify-center lg:flex">
              <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-white/[0.025] via-[#ff7657]/28 to-white/[0.025]" />

              <div className="absolute left-[-18px] top-1/2 h-px w-[40px] -translate-y-1/2 bg-gradient-to-r from-transparent to-[#ff7657]/30" />

              <div className="absolute right-[-18px] top-1/2 h-px w-[40px] -translate-y-1/2 bg-gradient-to-l from-transparent to-[#ff7657]/30" />

              <div className="relative z-10 flex size-[124px] flex-col items-center justify-center rounded-full border border-[#ff7657]/18 bg-[#15110f] shadow-[0_0_70px_rgba(255,118,87,0.08)]">
                <div className="flex size-11 items-center justify-center rounded-[12px] bg-[#ff7657] shadow-[0_10px_30px_rgba(255,118,87,0.18)]">
                  <Brain size={18} className="text-white" />
                </div>

                <p className="mt-3 text-[10px] font-medium text-white/65">
                  Unabyss
                </p>

                <p className="mt-1 text-[7px] uppercase tracking-[0.12em] text-white/20">
                  Shared memory
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[18px] border border-white/[0.07] bg-[#111111]">
              <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4">
                <div>
                  <p className="text-[8px] uppercase tracking-[0.15em] text-white/18">
                    Your AI tools
                  </p>

                  <p className="mt-2 text-[12px] font-medium text-white/50">
                    One memory everywhere
                  </p>
                </div>

                <Sparkles size={14} className="text-[#ff8067]/55" />
              </div>

              <div className="space-y-3 p-5">
                {agents.map((agent) => (
                  <div
                    key={agent.name}
                    className="flex items-center rounded-[11px] border border-white/[0.06] bg-[#171717] p-3.5"
                  >
                    <div
                      className={`flex size-9 items-center justify-center rounded-[9px] ${agent.color}`}
                    >
                      <Sparkles size={13} className="text-white" />
                    </div>

                    <div className="ml-3">
                      <p className="text-[9px] font-medium text-white/50">
                        {agent.name}
                      </p>

                      <p className="mt-0.5 text-[8px] text-white/20">
                        {agent.label}
                      </p>
                    </div>

                    <span className="ml-auto size-1.5 rounded-full bg-[#ff7657]" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUpMedium}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={{ delay: 0.12, duration: 0.55 }}
            className="mt-10 text-center"
          >
            <p className="text-[10px] text-white/22">
              Change tools without rebuilding context.
            </p>

            <p className="mt-1.5 text-[13px] font-medium text-white/48">
              Your memory follows you.
            </p>
          </motion.div>
        </div>
      </PageContainer>
    </section>
  );
}