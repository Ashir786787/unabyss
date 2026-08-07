"use client";

import PageContainer from "@/components/layout/PageContainer";
import { motion } from "motion/react";

const aiTools = [
  { name: "Claude", iconClass: "bg-[#d97757]" },
  { name: "Cursor", iconClass: "bg-[#252525]" },
  { name: "ChatGPT", iconClass: "bg-[#1f1f1f]" },
];

export default function ProblemsSection() {
  return (
    <section className="relative bg-[#0c0c0c] py-24 sm:py-28 lg:py-32">
      <PageContainer>
        <div className="mx-auto max-w-[860px]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="text-center"
          >
            <p className="text-[10px] uppercase tracking-[0.22em] text-white/20">
              The problem
            </p>

            <h2 className="mt-4 text-[28px] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[36px] lg:text-[42px]">
              Two gaps, every day
            </h2>

            <p className="mx-auto mt-4 max-w-[560px] text-[12px] leading-5 text-white/35 sm:text-[13px]">
              Your tools have the context. Your AI has the intelligence.
              They still do not share what they know.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="overflow-hidden rounded-[16px] border border-white/[0.07] bg-[#111111]"
            >
              <div className="border-b border-white/[0.06] p-5">
                <p className="text-[10px] uppercase tracking-[0.16em] text-white/20">
                  Gap one
                </p>

                <h3 className="mt-3 text-[18px] font-semibold tracking-[-0.025em] text-white">
                  Your AI cannot see your work
                </h3>

                <p className="mt-2 max-w-[330px] text-[11px] leading-5 text-white/35">
                  The answer is already sitting in Slack, Gmail, Notion,
                  GitHub, Drive or another tool.
                </p>
              </div>

              <div className="p-5">
                <div className="rounded-[12px] border border-white/[0.06] bg-[#171717] p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-white/30">
                      Your workspace
                    </span>

                    <span className="size-2 rounded-full bg-[#ff6f52]" />
                  </div>

                  <div className="mt-4 space-y-2">
                    <div className="h-9 rounded-[7px] border border-white/[0.05] bg-white/[0.025]" />
                    <div className="h-9 rounded-[7px] border border-white/[0.05] bg-white/[0.025]" />
                    <div className="h-9 rounded-[7px] border border-white/[0.05] bg-white/[0.025]" />
                  </div>
                </div>

                <div className="my-4 flex items-center justify-center">
                  <div className="h-8 w-px bg-gradient-to-b from-white/10 to-transparent" />
                </div>

                <div className="rounded-[12px] border border-[#ff6f52]/20 bg-[#ff6f52]/[0.06] p-4">
                  <p className="text-[10px] text-[#ff8a70]">AI assistant</p>

                  <div className="mt-3 space-y-2">
                    <div className="h-2 w-[75%] rounded-full bg-white/10" />
                    <div className="h-2 w-[60%] rounded-full bg-white/[0.06]" />
                  </div>

                  <p className="mt-4 text-[10px] leading-4 text-white/28">
                    Missing context. Asking you to explain the same thing again.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.08, duration: 0.55 }}
              className="overflow-hidden rounded-[16px] border border-white/[0.07] bg-[#111111]"
            >
              <div className="border-b border-white/[0.06] p-5">
                <p className="text-[10px] uppercase tracking-[0.16em] text-white/20">
                  Gap two
                </p>

                <h3 className="mt-3 text-[18px] font-semibold tracking-[-0.025em] text-white">
                  Your AI tools do not share memory
                </h3>

                <p className="mt-2 max-w-[330px] text-[11px] leading-5 text-white/35">
                  Claude knows one conversation. Cursor knows another.
                  ChatGPT starts from zero.
                </p>
              </div>

              <div className="p-5">
                <div className="grid grid-cols-3 gap-2">
                  {aiTools.map((tool) => (
                    <div
                      key={tool.name}
                      className="rounded-[10px] border border-white/[0.06] bg-[#171717] p-3"
                    >
                      <div
                        className={`size-7 rounded-[8px] ${tool.iconClass}`}
                      />

                      <p className="mt-3 text-[10px] text-white/55">
                        {tool.name}
                      </p>

                      <div className="mt-3 space-y-1.5">
                        <div className="h-1.5 rounded-full bg-white/[0.08]" />
                        <div className="h-1.5 w-[70%] rounded-full bg-white/[0.05]" />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-[12px] border border-white/[0.06] bg-[#151515] p-4 text-center">
                  <p className="text-[10px] text-white/28">
                    Same person. Same project.
                  </p>

                  <p className="mt-1 text-[11px] font-medium text-white/55">
                    Three separate memories.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12, duration: 0.5 }}
            className="mt-8 text-center"
          >
            <p className="text-[13px] font-medium text-white/55">
              More context switching. More repeating yourself.
            </p>

            <p className="mt-1 text-[11px] text-white/25">
              And none of your AI tools ever gets the full picture.
            </p>
          </motion.div>
        </div>
      </PageContainer>
    </section>
  );
}