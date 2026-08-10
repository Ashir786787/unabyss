"use client";

import PageContainer from "@/components/layout/PageContainer";
import { ArrowRight, Check, Search, Sparkles } from "lucide-react";
import { motion } from "motion/react";

function ClaudeWindow({
  connected = false,
}: {
  connected?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-[14px] border border-white/[0.07] bg-[#151515]">
      <div className="flex h-9 items-center border-b border-white/[0.06] px-3">
        <div className="flex gap-1.5">
          <span className="size-[6px] rounded-full bg-[#ff5f57]" />
          <span className="size-[6px] rounded-full bg-[#febc2e]" />
          <span className="size-[6px] rounded-full bg-[#28c840]" />
        </div>

        <span className="mx-auto text-[9px] text-white/25">
          Client follow-up
        </span>
      </div>

      <div className="min-h-[260px] p-4">
        <div className="mb-6 flex justify-end">
          <div className="max-w-[78%] rounded-[12px] rounded-br-[4px] bg-[#262626] px-3 py-2">
            <p className="text-[10px] leading-4 text-white/55">
              Can you prepare the follow-up for this client?
            </p>
          </div>
        </div>

        {!connected ? (
          <div>
            <div className="flex items-center gap-2">
              <div className="flex size-6 items-center justify-center rounded-full bg-[#d97757]">
                <Sparkles size={11} className="text-white" />
              </div>

              <p className="text-[10px] font-medium text-white/60">
                Claude
              </p>
            </div>

            <div className="mt-3 space-y-2 pl-8">
              <p className="text-[10px] leading-5 text-white/32">
                Sure. Can you share the client name, the latest conversation,
                the project status, and what you want to follow up on?
              </p>

              <div className="mt-4 rounded-[9px] border border-white/[0.05] bg-white/[0.02] p-3">
                <p className="text-[9px] text-white/22">
                  Missing context from your workspace
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-4 flex items-center gap-2 rounded-[9px] border border-[#ff6f52]/15 bg-[#ff6f52]/[0.05] px-3 py-2">
              <Search size={11} className="text-[#ff836b]" />

              <span className="text-[9px] text-[#ff927d]">
                Pulled client context from Unabyss
              </span>

              <Check
                size={11}
                className="ml-auto text-emerald-400"
              />
            </div>

            <div className="flex items-center gap-2">
              <div className="flex size-6 items-center justify-center rounded-full bg-[#d97757]">
                <Sparkles size={11} className="text-white" />
              </div>

              <p className="text-[10px] font-medium text-white/60">
                Claude
              </p>
            </div>

            <div className="mt-3 pl-8">
              <p className="text-[10px] leading-5 text-white/38">
                I found the latest client conversation, current project status,
                and outstanding action items. Here&apos;s the follow-up:
              </p>

              <div className="mt-3 rounded-[9px] border border-white/[0.06] bg-white/[0.025] p-3">
                <p className="text-[10px] font-medium text-white/55">
                  Subject: Next steps
                </p>

                <p className="mt-2 text-[9px] leading-4 text-white/28">
                  Hi — following up on our latest discussion. The implementation
                  is moving forward and the remaining action items are...
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-white/[0.06] p-3">
        <div className="flex h-9 items-center rounded-[9px] border border-white/[0.06] bg-[#111111] px-3">
          <span className="text-[9px] text-white/22">
            Write a message...
          </span>

          <span className="ml-auto text-[8px] text-white/18">
            Sonnet
          </span>
        </div>

        <p className="mt-2 text-center text-[7px] text-white/15">
          Claude is AI and can make mistakes. Please double-check responses.
        </p>
      </div>
    </div>
  );
}

export default function DifferenceSection() {
  return (
    <section className="relative bg-[#0c0c0c] py-24 sm:py-28 lg:py-32">
      <PageContainer>
        <div className="mx-auto max-w-[920px]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="text-center"
          >
            <p className="text-[10px] uppercase tracking-[0.22em] text-white/20">
              The difference
            </p>

            <h2 className="mt-4 text-balance text-[28px] font-semibold leading-[1.06] tracking-[-0.045em] text-white sm:text-[36px] lg:text-[42px]">
              Don&apos;t answer questions -
              <br className="hidden sm:block" /> just work.
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
            >
              <div className="mb-3 flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-white/20" />

                <span className="text-[10px] font-medium text-white/30">
                  Without Unabyss
                </span>
              </div>

              <ClaudeWindow />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.08, duration: 0.55 }}
            >
              <div className="mb-3 flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-[#ff6f52]" />

                <span className="text-[10px] font-medium text-white/55">
                  With Unabyss
                </span>
              </div>

              <ClaudeWindow connected />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12, duration: 0.55 }}
            className="mx-auto mt-14 max-w-[520px] text-center"
          >
            <h3 className="text-[21px] font-semibold tracking-[-0.035em] text-white sm:text-[24px]">
              What you tell one AI, they all know.
            </h3>

            <p className="mt-3 text-[11px] leading-5 text-white/30 sm:text-[12px]">
              No copy-pasting between tools that don&apos;t talk.
            </p>

            <a
              href="https://app.unabyss.com"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex h-8 items-center gap-2 rounded-full bg-white px-4 text-[10px] font-medium text-black transition-transform hover:scale-[1.03]"
            >
              Start now
              <ArrowRight size={12} />
            </a>
          </motion.div>
        </div>
      </PageContainer>
    </section>
  );
}