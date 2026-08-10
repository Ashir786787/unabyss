"use client";

import PageContainer from "@/components/layout/PageContainer";
import {
  Brain,
  Check,
  Database,
  Download,
  Lock,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";

const ownershipFeatures = [
  {
    title: "Your context stays yours",
    description:
      "Your connected knowledge remains your data. Unabyss gives your AI tools access without turning your memory into another silo.",
    icon: ShieldCheck,
  },
  {
    title: "One place for your memory",
    description:
      "Keep conversations, files, projects and activity connected through one context layer instead of rebuilding memory inside every AI.",
    icon: Brain,
  },
  {
    title: "Move your context",
    description:
      "Your context is designed to remain portable so your workflow is not locked to a single AI tool.",
    icon: Download,
  },
];

export default function OwnershipSection() {
  return (
    <section
      id="teams"
      className="relative overflow-hidden bg-[#0c0c0c] py-24 sm:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-[45%] h-[650px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,111,82,0.06),transparent_70%)]" />

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
              Your context
            </p>

            <h2 className="mt-4 text-balance text-[28px] font-semibold leading-[1.06] tracking-[-0.045em] text-white sm:text-[36px] lg:text-[42px]">
              Your memory should belong
              <br className="hidden sm:block" /> to you.
            </h2>

            <p className="mx-auto mt-4 max-w-[590px] text-[12px] leading-5 text-white/35 sm:text-[13px]">
              Build one context layer that stays with you while the AI tools
              around it can change.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: 0.08, duration: 0.65 }}
            className="relative mx-auto mt-14 max-w-[820px]"
          >
            <div className="absolute inset-x-[15%] bottom-0 h-24 bg-[#ff6f52]/10 blur-[70px]" />

            <div className="relative overflow-hidden rounded-[18px] border border-white/[0.07] bg-[#111111]">
              <div className="flex h-10 items-center border-b border-white/[0.06] px-4">
                <div className="flex gap-1.5">
                  <span className="size-[6px] rounded-full bg-[#ff5f57]" />
                  <span className="size-[6px] rounded-full bg-[#febc2e]" />
                  <span className="size-[6px] rounded-full bg-[#28c840]" />
                </div>

                <p className="mx-auto text-[9px] text-white/20">
                  Context Library
                </p>
              </div>

              <div className="grid min-h-[360px] md:grid-cols-[175px_1fr]">
                <aside className="hidden border-r border-white/[0.06] bg-[#0f0f0f] p-4 md:block">
                  <div className="flex items-center gap-2">
                    <div className="flex size-7 items-center justify-center rounded-[8px] bg-[#ff6f52]">
                      <Sparkles size={12} className="text-white" />
                    </div>

                    <span className="text-[10px] font-medium text-white/60">
                      Unabyss
                    </span>
                  </div>

                  <div className="mt-7 space-y-2">
                    <div className="rounded-[7px] bg-[#ff6f52]/10 px-3 py-2 text-[9px] text-[#ff8a73]">
                      Context
                    </div>

                    <div className="rounded-[7px] px-3 py-2 text-[9px] text-white/25">
                      Connections
                    </div>

                    <div className="rounded-[7px] px-3 py-2 text-[9px] text-white/25">
                      AI tools
                    </div>

                    <div className="rounded-[7px] px-3 py-2 text-[9px] text-white/25">
                      Settings
                    </div>
                  </div>
                </aside>

                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-[10px] text-white/25">
                        Your context
                      </p>

                      <h3 className="mt-2 text-[17px] font-semibold tracking-[-0.025em] text-white">
                        Everything your AI should know
                      </h3>
                    </div>

                    <div className="flex size-9 items-center justify-center rounded-[10px] border border-white/[0.06] bg-white/[0.025]">
                      <Lock size={14} className="text-white/40" />
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-[12px] border border-white/[0.06] bg-[#171717] p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex size-8 items-center justify-center rounded-[8px] bg-[#242424]">
                          <Database size={13} className="text-white/55" />
                        </div>

                        <div>
                          <p className="text-[10px] font-medium text-white/60">
                            Project knowledge
                          </p>

                          <p className="mt-0.5 text-[9px] text-white/20">
                            4,830 items
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 space-y-2">
                        <div className="h-2 rounded-full bg-white/[0.06]" />
                        <div className="h-2 w-[72%] rounded-full bg-white/[0.035]" />
                      </div>
                    </div>

                    <div className="rounded-[12px] border border-white/[0.06] bg-[#171717] p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex size-8 items-center justify-center rounded-[8px] bg-[#ff6f52]/15">
                          <Brain size={13} className="text-[#ff8067]" />
                        </div>

                        <div>
                          <p className="text-[10px] font-medium text-white/60">
                            Working memory
                          </p>

                          <p className="mt-0.5 text-[9px] text-white/20">
                            Always available
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 space-y-2">
                        <div className="h-2 rounded-full bg-[#ff6f52]/10" />
                        <div className="h-2 w-[60%] rounded-full bg-white/[0.035]" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 rounded-[12px] border border-white/[0.06] bg-[#151515] p-4">
                    <div className="flex items-center">
                      <ShieldCheck
                        size={14}
                        className="text-emerald-400/70"
                      />

                      <p className="ml-2 text-[10px] font-medium text-white/50">
                        You control your context
                      </p>

                      <span className="ml-auto rounded-full bg-emerald-400/10 px-2 py-1 text-[8px] text-emerald-400">
                        Protected
                      </span>
                    </div>

                    <p className="mt-3 max-w-[470px] text-[9px] leading-4 text-white/22">
                      Connect, manage and move the knowledge your AI tools use
                      from one shared context layer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {ownershipFeatures.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.07,
                    duration: 0.5,
                  }}
                  className="rounded-[14px] border border-white/[0.06] bg-[#111111] p-5"
                >
                  <div className="flex size-9 items-center justify-center rounded-[10px] border border-white/[0.06] bg-white/[0.025]">
                    <Icon size={15} className="text-white/50" />
                  </div>

                  <h3 className="mt-5 text-[13px] font-medium text-white/65">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-[10px] leading-5 text-white/27">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12, duration: 0.5 }}
            className="mt-10 flex justify-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] px-4 py-2">
              <Check size={11} className="text-emerald-400/70" />

              <span className="text-[9px] text-white/30">
                Your context remains yours
              </span>
            </div>
          </motion.div>
        </div>
      </PageContainer>
    </section>
  );
}