"use client";

import PageContainer from "@/components/layout/PageContainer";
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
      "Decide what context is available and keep sensitive knowledge separated when needed.",
    icon: Lock,
  },
  {
    title: "Live synchronization",
    description:
      "New messages, documents and project activity can continuously update the context layer.",
    icon: RefreshCcw,
  },
  {
    title: "Context visibility",
    description:
      "See what your AI tools can access instead of treating memory like a black box.",
    icon: Eye,
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative overflow-hidden bg-[#0c0c0c] py-24 sm:py-28 lg:py-32">
      <PageContainer>
        <div className="mx-auto max-w-[940px]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="text-center"
          >
            <p className="text-[10px] uppercase tracking-[0.22em] text-white/20">
              Built for control
            </p>

            <h2 className="mt-4 text-balance text-[28px] font-semibold leading-[1.06] tracking-[-0.045em] text-white sm:text-[36px] lg:text-[42px]">
              The context layer stays
              <br className="hidden sm:block" /> under your control.
            </h2>

            <p className="mx-auto mt-4 max-w-[590px] text-[12px] leading-5 text-white/35 sm:text-[13px]">
              Connect your tools, manage what becomes context, and keep every AI
              working from the knowledge you choose.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="overflow-hidden rounded-[18px] border border-white/[0.07] bg-[#111111]"
            >
              <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4">
                <div>
                  <p className="text-[10px] text-white/25">Context controls</p>

                  <h3 className="mt-1 text-[14px] font-semibold text-white/65">
                    Decide what your AI can use
                  </h3>
                </div>

                <ShieldCheck size={16} className="text-emerald-400/70" />
              </div>

              <div className="p-5">
                <div className="space-y-3">
                  <div className="flex items-center rounded-[11px] border border-white/[0.06] bg-[#171717] p-4">
                    <div className="flex size-9 items-center justify-center rounded-[9px] bg-[#ff6f52]/15">
                      <Sparkles size={14} className="text-[#ff8067]" />
                    </div>

                    <div className="ml-3">
                      <p className="text-[10px] font-medium text-white/60">
                        Project context
                      </p>

                      <p className="mt-0.5 text-[9px] text-white/22">
                        Available to connected AI tools
                      </p>
                    </div>

                    <span className="ml-auto flex h-5 w-9 items-center rounded-full bg-emerald-400/20 p-0.5">
                      <span className="ml-auto size-4 rounded-full bg-emerald-400" />
                    </span>
                  </div>

                  <div className="flex items-center rounded-[11px] border border-white/[0.06] bg-[#171717] p-4">
                    <div className="flex size-9 items-center justify-center rounded-[9px] bg-white/[0.04]">
                      <Layers3 size={14} className="text-white/45" />
                    </div>

                    <div className="ml-3">
                      <p className="text-[10px] font-medium text-white/60">
                        Private notes
                      </p>

                      <p className="mt-0.5 text-[9px] text-white/22">
                        Hidden from shared AI context
                      </p>
                    </div>

                    <span className="ml-auto flex h-5 w-9 items-center rounded-full bg-white/[0.06] p-0.5">
                      <span className="size-4 rounded-full bg-white/25" />
                    </span>
                  </div>

                  <div className="flex items-center rounded-[11px] border border-white/[0.06] bg-[#171717] p-4">
                    <div className="flex size-9 items-center justify-center rounded-[9px] bg-white/[0.04]">
                      <Eye size={14} className="text-white/45" />
                    </div>

                    <div className="ml-3">
                      <p className="text-[10px] font-medium text-white/60">
                        AI visibility
                      </p>

                      <p className="mt-0.5 text-[9px] text-white/22">
                        Review what connected tools can see
                      </p>
                    </div>

                    <Check size={13} className="ml-auto text-emerald-400/70" />
                  </div>
                </div>

                <div className="mt-4 rounded-[12px] border border-[#ff6f52]/15 bg-[#ff6f52]/[0.04] p-4">
                  <p className="text-[9px] uppercase tracking-[0.12em] text-[#ff8067]/70">
                    Shared context
                  </p>

                  <p className="mt-2 text-[10px] leading-5 text-white/34">
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
                    initial={{ opacity: 0, x: 18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.06,
                      duration: 0.5,
                    }}
                    className="rounded-[14px] border border-white/[0.06] bg-[#111111] p-5"
                  >
                    <div className="flex items-start">
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-[10px] border border-white/[0.06] bg-white/[0.025]">
                        <Icon size={15} className="text-white/50" />
                      </div>

                      <div className="ml-4">
                        <h3 className="text-[12px] font-medium text-white/65">
                          {feature.title}
                        </h3>

                        <p className="mt-2 text-[10px] leading-5 text-white/27">
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
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12, duration: 0.5 }}
            className="mt-10 text-center"
          >
            <p className="text-[11px] text-white/25">
              One context layer. Clear controls. Any AI.
            </p>
          </motion.div>
        </div>
      </PageContainer>
    </section>
  );
}