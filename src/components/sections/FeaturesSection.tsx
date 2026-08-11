"use client";

import PageContainer from "@/components/layout/PageContainer";
import { fadeLeft, fadeRight, fadeUp, fadeUpMedium, viewportFifth, viewportOnce, viewportQuarter } from "@/lib/animations";
import {
  Brain,
  Check,
  Eye,
  Layers3,
  Lock,
  RefreshCcw,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    title: "Shared context",
    description:
      "Every connected AI can work from the same source of truth instead of starting from zero.",
    icon: Brain,
  },
  {
    title: "Permission control",
    description:
      "Decide what becomes available and keep private knowledge separated when needed.",
    icon: Lock,
  },
  {
    title: "Live synchronization",
    description:
      "New messages, documents and project activity keep the shared context current.",
    icon: RefreshCcw,
  },
  {
    title: "Context visibility",
    description:
      "See what your connected AI tools can use instead of treating memory like a black box.",
    icon: Eye,
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative overflow-hidden bg-[#0c0c0c] py-28 sm:py-32 lg:py-36">
      <div className="pointer-events-none absolute left-1/2 top-[42%] h-[650px] w-[940px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,118,87,0.05),transparent_70%)]" />

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
              Built for control
            </p>

            <h2 className="mt-4 text-balance text-[30px] font-semibold leading-[1.03] tracking-[-0.045em] text-white sm:text-[40px] lg:text-[48px]">
              The context layer stays
              <br className="hidden sm:block" /> under your control.
            </h2>

            <p className="mx-auto mt-5 max-w-[610px] text-[11px] leading-5 text-white/28 sm:text-[12px]">
              Connect your tools, decide what becomes context, and keep every AI
              working from the knowledge you choose.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-5 lg:grid-cols-[1.12fr_0.88fr]">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportFifth}
              transition={{ duration: 0.55 }}
              className="overflow-hidden rounded-[18px] border border-white/[0.07] bg-[#111111]"
            >
              <div className="flex items-center justify-between border-b border-white/[0.06] bg-[#151515] px-5 py-4">
                <div>
                  <p className="text-[8px] uppercase tracking-[0.14em] text-white/18">
                    Context controls
                  </p>

                  <h3 className="mt-2 text-[14px] font-semibold tracking-[-0.02em] text-white/58">
                    Decide what your AI can use
                  </h3>
                </div>

                <ShieldCheck size={15} className="text-emerald-400/65" />
              </div>

              <div className="p-5">
                <div className="space-y-3">
                  <div className="flex items-center rounded-[11px] border border-[#ff7657]/10 bg-[#171717] p-4">
                    <div className="flex size-9 items-center justify-center rounded-[9px] bg-[#ff7657]/12">
                      <Sparkles size={13} className="text-[#ff8067]" />
                    </div>

                    <div className="ml-3">
                      <p className="text-[9px] font-medium text-white/52">
                        Project context
                      </p>

                      <p className="mt-0.5 text-[8px] text-white/18">
                        Available to connected AI tools
                      </p>
                    </div>

                    <span className="ml-auto flex h-5 w-9 items-center rounded-full bg-emerald-400/15 p-0.5">
                      <span className="ml-auto size-4 rounded-full bg-emerald-400" />
                    </span>
                  </div>

                  <div className="flex items-center rounded-[11px] border border-white/[0.06] bg-[#171717] p-4">
                    <div className="flex size-9 items-center justify-center rounded-[9px] bg-white/[0.035]">
                      <Layers3 size={13} className="text-white/38" />
                    </div>

                    <div className="ml-3">
                      <p className="text-[9px] font-medium text-white/50">
                        Private notes
                      </p>

                      <p className="mt-0.5 text-[8px] text-white/18">
                        Hidden from shared AI context
                      </p>
                    </div>

                    <span className="ml-auto flex h-5 w-9 items-center rounded-full bg-white/[0.05] p-0.5">
                      <span className="size-4 rounded-full bg-white/20" />
                    </span>
                  </div>

                  <div className="flex items-center rounded-[11px] border border-white/[0.06] bg-[#171717] p-4">
                    <div className="flex size-9 items-center justify-center rounded-[9px] bg-white/[0.035]">
                      <Eye size={13} className="text-white/38" />
                    </div>

                    <div className="ml-3">
                      <p className="text-[9px] font-medium text-white/50">
                        AI visibility
                      </p>

                      <p className="mt-0.5 text-[8px] text-white/18">
                        Review what connected tools can see
                      </p>
                    </div>

                    <Check size={12} className="ml-auto text-emerald-400/65" />
                  </div>
                </div>

                <div className="mt-4 rounded-[12px] border border-[#ff7657]/12 bg-[#ff7657]/[0.035] p-4">
                  <p className="text-[8px] uppercase tracking-[0.12em] text-[#ff8067]/65">
                    Shared context
                  </p>

                  <p className="mt-2 text-[9px] leading-5 text-white/28">
                    Claude, ChatGPT, Cursor and other connected agents can work
                    from the same approved context.
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.title}
                    variants={fadeRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    transition={{
                      delay: index * 0.06,
                      duration: 0.5,
                    }}
                    className="rounded-[14px] border border-white/[0.06] bg-[#111111] p-5"
                  >
                    <div className="flex items-start">
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-[10px] border border-white/[0.06] bg-white/[0.025]">
                        <Icon size={14} className="text-white/42" />
                      </div>

                      <div className="ml-4">
                        <h3 className="text-[11px] font-medium text-white/55">
                          {feature.title}
                        </h3>

                        <p className="mt-2 text-[9px] leading-5 text-white/23">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div
            variants={fadeUpMedium}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={{ delay: 0.12, duration: 0.5 }}
            className="mt-10 text-center"
          >
            <p className="text-[10px] text-white/20">
              One context layer. Clear controls. Any AI.
            </p>
          </motion.div>
        </div>
      </PageContainer>
    </section>
  );
}