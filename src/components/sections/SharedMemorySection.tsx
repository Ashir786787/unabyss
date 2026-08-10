"use client";

import PageContainer from "@/components/layout/PageContainer";
import { motion } from "motion/react";
import {
  Brain,
  Check,
  FolderGit2,
  Mail,
  MessageSquare,
  Search,
  Sparkles,
} from "lucide-react";

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
    color: "bg-[#202020]",
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
      className="relative overflow-hidden bg-[#0c0c0c] py-24 sm:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,111,82,0.07),transparent_68%)]" />

      <PageContainer className="relative">
        <div className="mx-auto max-w-[940px]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="text-center"
          >
            <p className="text-[10px] uppercase tracking-[0.22em] text-white/20">
              Shared memory
            </p>

            <h2 className="mt-4 text-balance text-[28px] font-semibold leading-[1.06] tracking-[-0.045em] text-white sm:text-[36px] lg:text-[42px]">
              Connect once. Every tool works
              <br className="hidden sm:block" /> with the same memory.
            </h2>

            <p className="mx-auto mt-4 max-w-[560px] text-[12px] leading-5 text-white/35 sm:text-[13px]">
              Unabyss keeps one context layer between your workspace and every AI
              you use.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: 0.08, duration: 0.65 }}
            className="mt-14 grid gap-5 lg:grid-cols-[1fr_180px_1fr]"
          >
            <div className="rounded-[16px] border border-white/[0.07] bg-[#111111] p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-white/20">
                    Your workspace
                  </p>

                  <p className="mt-2 text-[13px] font-medium text-white/60">
                    Context already exists here
                  </p>
                </div>

                <Search size={14} className="text-white/25" />
              </div>

              <div className="mt-5 space-y-3">
                {sources.map((source) => {
                  const Icon = source.icon;

                  return (
                    <div
                      key={source.name}
                      className="flex items-center rounded-[11px] border border-white/[0.06] bg-[#171717] p-3"
                    >
                      <div
                        className={`flex size-8 items-center justify-center rounded-[8px] ${source.color}`}
                      >
                        <Icon size={14} className="text-white" />
                      </div>

                      <div className="ml-3">
                        <p className="text-[10px] font-medium text-white/55">
                          {source.name}
                        </p>

                        <p className="mt-0.5 text-[9px] text-white/22">
                          Messages, files and activity
                        </p>
                      </div>

                      <Check
                        size={12}
                        className="ml-auto text-emerald-400/70"
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative hidden items-center justify-center lg:flex">
              <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-white/[0.03] via-[#ff6f52]/30 to-white/[0.03]" />

              <div className="relative z-10 flex size-[116px] flex-col items-center justify-center rounded-full border border-[#ff6f52]/20 bg-[#14110f] shadow-[0_0_60px_rgba(255,111,82,0.08)]">
                <div className="flex size-10 items-center justify-center rounded-[12px] bg-[#ff6f52]">
                  <Brain size={18} className="text-white" />
                </div>

                <p className="mt-3 text-[10px] font-medium text-white/70">
                  Unabyss
                </p>

                <p className="mt-1 text-[8px] text-white/25">
                  Shared context
                </p>
              </div>
            </div>

            <div className="rounded-[16px] border border-white/[0.07] bg-[#111111] p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-white/20">
                    Your AI tools
                  </p>

                  <p className="mt-2 text-[13px] font-medium text-white/60">
                    One memory everywhere
                  </p>
                </div>

                <Sparkles size={14} className="text-[#ff8067]/60" />
              </div>

              <div className="mt-5 space-y-3">
                {agents.map((agent) => (
                  <div
                    key={agent.name}
                    className="flex items-center rounded-[11px] border border-white/[0.06] bg-[#171717] p-3"
                  >
                    <div
                      className={`flex size-8 items-center justify-center rounded-[8px] ${agent.color}`}
                    >
                      <Sparkles size={13} className="text-white" />
                    </div>

                    <div className="ml-3">
                      <p className="text-[10px] font-medium text-white/55">
                        {agent.name}
                      </p>

                      <p className="mt-0.5 text-[9px] text-white/22">
                        {agent.label}
                      </p>
                    </div>

                    <span className="ml-auto size-1.5 rounded-full bg-[#ff6f52]" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12, duration: 0.55 }}
            className="mt-10 text-center"
          >
            <p className="text-[11px] text-white/28">
              Change tools without losing context.
            </p>

            <p className="mt-1 text-[13px] font-medium text-white/55">
              Your memory follows you.
            </p>
          </motion.div>
        </div>
      </PageContainer>
    </section>
  );
}