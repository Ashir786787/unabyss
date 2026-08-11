"use client";

import PageContainer from "@/components/layout/PageContainer";
import { fadeLeft, fadeRight, fadeUp, fadeUpSixteen, viewportFifth, viewportOnce, viewportQuarter } from "@/lib/animations";
import { ArrowRight, Check, Search, Sparkles } from "lucide-react";
import { motion } from "motion/react";

function ClaudeWindow({
  connected = false,
}: {
  connected?: boolean;
}) {
  return (
    <div
      className={`overflow-hidden rounded-[18px] border bg-[#111111] ${
        connected
          ? "border-[#ff7657]/18 shadow-[0_20px_60px_rgba(255,118,87,0.05)]"
          : "border-white/[0.07]"
      }`}
    >
      <div className="flex h-10 items-center border-b border-white/[0.06] bg-[#151515] px-3">
        <div className="flex gap-1.5">
          <span className="size-[6px] rounded-full bg-[#ff5f57]" />
          <span className="size-[6px] rounded-full bg-[#febc2e]" />
          <span className="size-[6px] rounded-full bg-[#28c840]" />
        </div>

        <span className="mx-auto text-[8px] text-white/20">
          Claude
        </span>
      </div>

      <div className="min-h-[330px] p-5">
        <div className="mb-7 flex justify-end">
          <div className="max-w-[82%] rounded-[13px] rounded-br-[4px] border border-white/[0.05] bg-[#1d1d1d] px-4 py-3">
            <p className="text-[10px] leading-5 text-white/45">
              Can you prepare the follow-up for this client?
            </p>
          </div>
        </div>

        {!connected ? (
          <div>
            <div className="flex items-center gap-2">
              <div className="flex size-7 items-center justify-center rounded-full bg-[#d97757]">
                <Sparkles size={11} className="text-white" />
              </div>

              <p className="text-[9px] font-medium text-white/48">
                Claude
              </p>
            </div>

            <div className="mt-4 pl-9">
              <p className="text-[10px] leading-5 text-white/28">
                Sure. Can you share the client name, the latest conversation,
                the project status, and what you want to follow up on?
              </p>

              <div className="mt-5 rounded-[10px] border border-white/[0.05] bg-white/[0.02] p-3">
                <p className="text-[8px] text-white/18">
                  Missing context from your workspace
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-5 flex items-center gap-2 rounded-[10px] border border-[#ff7657]/15 bg-[#ff7657]/[0.045] px-3 py-2.5">
              <Search size={11} className="text-[#ff8067]" />

              <span className="text-[8px] font-medium text-[#ff8a73]">
                Pulled context from Unabyss
              </span>

              <Check size={11} className="ml-auto text-emerald-400/80" />
            </div>

            <div className="flex items-center gap-2">
              <div className="flex size-7 items-center justify-center rounded-full bg-[#d97757]">
                <Sparkles size={11} className="text-white" />
              </div>

              <p className="text-[9px] font-medium text-white/48">
                Claude
              </p>
            </div>

            <div className="mt-4 pl-9">
              <p className="text-[10px] leading-5 text-white/30">
                I found the latest conversation, current project status, and
                outstanding action items. Here&apos;s the follow-up:
              </p>

              <div className="mt-4 rounded-[10px] border border-white/[0.06] bg-[#171717] p-4">
                <p className="text-[9px] font-medium text-white/48">
                  Subject: Next steps
                </p>

                <p className="mt-2 text-[9px] leading-4 text-white/24">
                  Hi — following up on our latest discussion. The implementation
                  is moving forward and the remaining action items are...
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-white/[0.06] p-3">
        <div className="flex h-10 items-center rounded-[9px] border border-white/[0.06] bg-[#101010] px-3">
          <span className="text-[8px] text-white/18">
            Message Claude...
          </span>

          <span className="ml-auto text-[7px] text-white/12">
            Sonnet
          </span>
        </div>
      </div>
    </div>
  );
}

export default function DifferenceSection() {
  return (
    <section className="relative overflow-hidden bg-[#0c0c0c] py-28 sm:py-32 lg:py-36">
      <div className="pointer-events-none absolute left-1/2 top-[44%] h-[600px] w-[860px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,111,82,0.045),transparent_70%)]" />

      <PageContainer className="relative">
        <div className="mx-auto max-w-[980px]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportQuarter}
            transition={{ duration: 0.55 }}
            className="text-center"
          >
            <p className="text-[9px] uppercase tracking-[0.24em] text-white/18">
              The difference
            </p>

            <h2 className="mt-4 text-balance text-[30px] font-semibold leading-[1.03] tracking-[-0.045em] text-white sm:text-[40px] lg:text-[48px]">
              Don&apos;t answer questions.
              <br className="hidden sm:block" /> Just work.
            </h2>

            <p className="mx-auto mt-5 max-w-[580px] text-[11px] leading-5 text-white/28 sm:text-[12px]">
              Without context, your AI asks you for the background. With Unabyss,
              it can start from what already happened.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportFifth}
              transition={{ duration: 0.55 }}
            >
              <div className="mb-3 flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-white/20" />

                <span className="text-[9px] font-medium text-white/28">
                  Without Unabyss
                </span>
              </div>

              <ClaudeWindow />
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportFifth}
              transition={{ delay: 0.08, duration: 0.55 }}
            >
              <div className="mb-3 flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-[#ff7657]" />

                <span className="text-[9px] font-medium text-white/48">
                  With Unabyss
                </span>
              </div>

              <ClaudeWindow connected />
            </motion.div>
          </div>

          <motion.div
            variants={fadeUpSixteen}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={{ delay: 0.12, duration: 0.55 }}
            className="mx-auto mt-16 max-w-[560px] text-center"
          >
            <h3 className="text-[23px] font-semibold tracking-[-0.035em] text-white sm:text-[27px]">
              What you tell one AI, they all know.
            </h3>

            <p className="mt-3 text-[10px] leading-5 text-white/24 sm:text-[11px]">
              No more copying context between tools that don&apos;t talk.
            </p>

            <a
              href="https://app.unabyss.com"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex h-9 items-center gap-2 rounded-full bg-white px-5 text-[9px] font-medium text-black transition-transform hover:scale-[1.025]"
            >
              Start now
              <ArrowRight size={11} />
            </a>
          </motion.div>
        </div>
      </PageContainer>
    </section>
  );
}