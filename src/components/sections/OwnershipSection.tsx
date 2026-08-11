"use client";

import PageContainer from "@/components/layout/PageContainer";
import { fadeUp, fadeUpLargest, fadeUpMedium, fadeUpSixteen, viewportOnce, viewportQuarter } from "@/lib/animations";
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
      "Your connected knowledge remains your data instead of becoming another locked AI memory silo.",
    icon: ShieldCheck,
  },
  {
    title: "One place for your memory",
    description:
      "Keep projects, conversations and files available through one context layer instead of rebuilding them in every AI.",
    icon: Brain,
  },
  {
    title: "Move your context",
    description:
      "Switch tools without leaving your working memory behind.",
    icon: Download,
  },
];

export default function OwnershipSection() {
  return (
    <section
      id="teams"
      className="relative overflow-hidden bg-[#0c0c0c] py-28 sm:py-32 lg:py-36"
    >
      <div className="pointer-events-none absolute left-1/2 top-[43%] h-[680px] w-[960px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,118,87,0.05),transparent_70%)]" />

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
              Your context
            </p>

            <h2 className="mt-4 text-balance text-[30px] font-semibold leading-[1.03] tracking-[-0.045em] text-white sm:text-[40px] lg:text-[48px]">
              Your memory should belong
              <br className="hidden sm:block" /> to you.
            </h2>

            <p className="mx-auto mt-5 max-w-[610px] text-[11px] leading-5 text-white/28 sm:text-[12px]">
              Keep one context layer that stays with you while the AI tools
              around it can change.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUpLargest}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: 0.08, duration: 0.65 }}
            className="relative mx-auto mt-14 max-w-[900px]"
          >
            <div className="absolute inset-x-[14%] -bottom-6 h-24 bg-[#ff7657]/10 blur-[72px]" />

            <div className="relative overflow-hidden rounded-[18px] border border-white/[0.07] bg-[#111111] shadow-[0_30px_80px_rgba(0,0,0,0.28)]">
              <div className="flex h-10 items-center border-b border-white/[0.06] bg-[#151515] px-4">
                <div className="flex gap-1.5">
                  <span className="size-[6px] rounded-full bg-[#ff5f57]" />
                  <span className="size-[6px] rounded-full bg-[#febc2e]" />
                  <span className="size-[6px] rounded-full bg-[#28c840]" />
                </div>

                <p className="mx-auto text-[8px] text-white/18">
                  Unabyss Context
                </p>
              </div>

              <div className="grid min-h-[390px] md:grid-cols-[185px_1fr]">
                <aside className="hidden border-r border-white/[0.06] bg-[#0f0f0f] p-4 md:block">
                  <div className="flex items-center gap-2">
                    <div className="flex size-8 items-center justify-center rounded-[8px] bg-[#ff7657]">
                      <Sparkles size={12} className="text-white" />
                    </div>

                    <span className="text-[9px] font-medium text-white/52">
                      Unabyss
                    </span>
                  </div>

                  <div className="mt-7 space-y-2">
                    <div className="rounded-[8px] bg-[#ff7657]/10 px-3 py-2.5 text-[8px] text-[#ff8a73]">
                      Context
                    </div>

                    <div className="rounded-[8px] px-3 py-2.5 text-[8px] text-white/20">
                      Connections
                    </div>

                    <div className="rounded-[8px] px-3 py-2.5 text-[8px] text-white/20">
                      AI tools
                    </div>

                    <div className="rounded-[8px] px-3 py-2.5 text-[8px] text-white/20">
                      Settings
                    </div>
                  </div>
                </aside>

                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[8px] uppercase tracking-[0.14em] text-white/18">
                        Context library
                      </p>

                      <h3 className="mt-2 text-[17px] font-semibold tracking-[-0.025em] text-white/72">
                        Everything your AI should know
                      </h3>

                      <p className="mt-2 text-[9px] leading-4 text-white/22">
                        Your working memory, connected sources and project
                        knowledge in one place.
                      </p>
                    </div>

                    <div className="flex size-9 shrink-0 items-center justify-center rounded-[10px] border border-white/[0.06] bg-white/[0.025]">
                      <Lock size={14} className="text-white/35" />
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-[12px] border border-white/[0.06] bg-[#171717] p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex size-9 items-center justify-center rounded-[9px] bg-[#242424]">
                          <Database size={13} className="text-white/50" />
                        </div>

                        <div>
                          <p className="text-[9px] font-medium text-white/52">
                            Project knowledge
                          </p>

                          <p className="mt-0.5 text-[8px] text-white/18">
                            4,830 items
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 space-y-2">
                        <div className="h-1.5 rounded-full bg-white/[0.06]" />
                        <div className="h-1.5 w-[72%] rounded-full bg-white/[0.03]" />
                      </div>
                    </div>

                    <div className="rounded-[12px] border border-[#ff7657]/12 bg-[#171717] p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex size-9 items-center justify-center rounded-[9px] bg-[#ff7657]/12">
                          <Brain size={13} className="text-[#ff8067]" />
                        </div>

                        <div>
                          <p className="text-[9px] font-medium text-white/52">
                            Working memory
                          </p>

                          <p className="mt-0.5 text-[8px] text-white/18">
                            Always available
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 space-y-2">
                        <div className="h-1.5 rounded-full bg-[#ff7657]/10" />
                        <div className="h-1.5 w-[60%] rounded-full bg-white/[0.03]" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 rounded-[12px] border border-white/[0.06] bg-[#151515] p-4">
                    <div className="flex items-center">
                      <ShieldCheck
                        size={14}
                        className="text-emerald-400/70"
                      />

                      <p className="ml-2 text-[9px] font-medium text-white/45">
                        You control your context
                      </p>

                      <span className="ml-auto rounded-full border border-emerald-400/10 bg-emerald-400/[0.06] px-2 py-1 text-[7px] text-emerald-400/70">
                        Protected
                      </span>
                    </div>

                    <p className="mt-3 max-w-[500px] text-[8px] leading-4 text-white/19">
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
                  variants={fadeUpSixteen}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  transition={{
                    delay: index * 0.07,
                    duration: 0.5,
                  }}
                  className="rounded-[14px] border border-white/[0.06] bg-[#111111] p-5"
                >
                  <div className="flex size-9 items-center justify-center rounded-[10px] border border-white/[0.06] bg-white/[0.025]">
                    <Icon size={14} className="text-white/45" />
                  </div>

                  <h3 className="mt-5 text-[12px] font-medium text-white/58">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-[9px] leading-5 text-white/24">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            variants={fadeUpMedium}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={{ delay: 0.12, duration: 0.5 }}
            className="mt-10 flex justify-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] px-4 py-2">
              <Check size={10} className="text-emerald-400/70" />

              <span className="text-[8px] text-white/25">
                Your context remains yours
              </span>
            </div>
          </motion.div>
        </div>
      </PageContainer>
    </section>
  );
}