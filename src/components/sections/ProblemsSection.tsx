"use client";

import PageContainer from "@/components/layout/PageContainer";
import { fadeLeft, fadeRight, fadeUp, fadeUpMedium, viewportFifth, viewportOnce, viewportQuarter } from "@/lib/animations";
import {
  Brain,
  FileText,
  FolderGit2,
  Mail,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";

const workspaceSources = [
  {
    name: "Slack",
    icon: MessageSquare,
    color: "bg-[#6e4b8b]",
  },
  {
    name: "Gmail",
    icon: Mail,
    color: "bg-[#ea4335]",
  },
  {
    name: "GitHub",
    icon: FolderGit2,
    color: "bg-[#24292f]",
  },
  {
    name: "Notion",
    icon: FileText,
    color: "bg-white",
    darkIcon: true,
  },
];

const aiTools = [
  {
    name: "Claude",
    color: "bg-[#d97757]",
  },
  {
    name: "Cursor",
    color: "bg-[#252525]",
  },
  {
    name: "ChatGPT",
    color: "bg-[#10a37f]",
  },
];

export default function ProblemsSection() {
  return (
    <section className="relative overflow-hidden bg-[#0c0c0c] py-28 sm:py-32 lg:py-36">
      <div className="pointer-events-none absolute left-1/2 top-[42%] h-[560px] w-[840px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,111,82,0.045),transparent_70%)]" />

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
              The problem
            </p>

            <h2 className="mt-4 text-[30px] font-semibold leading-[1.03] tracking-[-0.045em] text-white sm:text-[40px] lg:text-[48px]">
              Two gaps, every day
            </h2>

            <p className="mx-auto mt-5 max-w-[600px] text-[11px] leading-5 text-white/30 sm:text-[12px]">
              Your tools know the work. Your AI knows how to help. They still
              don&apos;t share the same context.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportFifth}
              transition={{ duration: 0.55 }}
              className="overflow-hidden rounded-[18px] border border-white/[0.07] bg-[#111111]"
            >
              <div className="border-b border-white/[0.06] px-5 py-5">
                <p className="text-[8px] uppercase tracking-[0.16em] text-[#ff8067]/60">
                  Gap one
                </p>

                <h3 className="mt-3 text-[18px] font-semibold tracking-[-0.025em] text-white">
                  Your AI can&apos;t see your work
                </h3>

                <p className="mt-2 max-w-[360px] text-[10px] leading-5 text-white/28">
                  The answer is already in your apps, files and conversations.
                  Your AI just doesn&apos;t have access to it.
                </p>
              </div>

              <div className="p-5">
                <div className="rounded-[13px] border border-white/[0.06] bg-[#161616] p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-[9px] font-medium text-white/40">
                      Your workspace
                    </p>

                    <span className="text-[8px] text-white/18">
                      Context exists here
                    </span>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-2.5">
                    {workspaceSources.map((source) => {
                      const Icon = source.icon;

                      return (
                        <div
                          key={source.name}
                          className="flex items-center rounded-[9px] border border-white/[0.05] bg-[#1a1a1a] p-3"
                        >
                          <div
                            className={`flex size-8 items-center justify-center rounded-[8px] ${source.color}`}
                          >
                            <Icon
                              size={13}
                              className={
                                source.darkIcon ? "text-black" : "text-white"
                              }
                            />
                          </div>

                          <span className="ml-2.5 text-[9px] text-white/45">
                            {source.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="my-5 flex items-center justify-center">
                  <div className="h-9 w-px bg-gradient-to-b from-white/10 via-white/[0.04] to-transparent" />
                </div>

                <div className="rounded-[13px] border border-[#ff7657]/15 bg-[#ff7657]/[0.04] p-4">
                  <div className="flex items-center gap-2">
                    <div className="flex size-7 items-center justify-center rounded-full bg-[#d97757]">
                      <Sparkles size={11} className="text-white" />
                    </div>

                    <span className="text-[9px] font-medium text-white/48">
                      AI assistant
                    </span>
                  </div>

                  <p className="mt-4 text-[10px] leading-5 text-white/28">
                    “Can you send me the client notes, latest email, project
                    status and previous discussion?”
                  </p>

                  <div className="mt-4 rounded-[9px] border border-white/[0.05] bg-black/10 px-3 py-2.5">
                    <p className="text-[8px] text-[#ff8067]/60">
                      Missing workspace context
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportFifth}
              transition={{ delay: 0.08, duration: 0.55 }}
              className="overflow-hidden rounded-[18px] border border-white/[0.07] bg-[#111111]"
            >
              <div className="border-b border-white/[0.06] px-5 py-5">
                <p className="text-[8px] uppercase tracking-[0.16em] text-[#ff8067]/60">
                  Gap two
                </p>

                <h3 className="mt-3 text-[18px] font-semibold tracking-[-0.025em] text-white">
                  Your AI tools don&apos;t share memory
                </h3>

                <p className="mt-2 max-w-[360px] text-[10px] leading-5 text-white/28">
                  Claude remembers one conversation. Cursor knows another.
                  ChatGPT starts again from zero.
                </p>
              </div>

              <div className="p-5">
                <div className="grid grid-cols-3 gap-2.5">
                  {aiTools.map((tool) => (
                    <div
                      key={tool.name}
                      className="rounded-[11px] border border-white/[0.06] bg-[#161616] p-3.5"
                    >
                      <div
                        className={`flex size-8 items-center justify-center rounded-[8px] ${tool.color}`}
                      >
                        <Brain size={13} className="text-white" />
                      </div>

                      <p className="mt-3 text-[9px] font-medium text-white/50">
                        {tool.name}
                      </p>

                      <div className="mt-4 space-y-1.5">
                        <div className="h-1.5 rounded-full bg-white/[0.08]" />
                        <div className="h-1.5 w-[76%] rounded-full bg-white/[0.04]" />
                        <div className="h-1.5 w-[55%] rounded-full bg-white/[0.025]" />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="my-5 flex items-center justify-center">
                  <div className="flex items-center gap-2">
                    <span className="h-px w-10 bg-white/[0.05]" />
                    <span className="text-[8px] uppercase tracking-[0.12em] text-white/15">
                      disconnected
                    </span>
                    <span className="h-px w-10 bg-white/[0.05]" />
                  </div>
                </div>

                <div className="rounded-[13px] border border-white/[0.06] bg-[#151515] p-4 text-center">
                  <p className="text-[9px] text-white/24">
                    Same person. Same project.
                  </p>

                  <p className="mt-1.5 text-[12px] font-medium text-white/55">
                    Three separate memories.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUpMedium}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={{ delay: 0.12, duration: 0.5 }}
            className="mt-9 text-center"
          >
            <p className="text-[12px] font-medium text-white/48">
              More switching. More repeating yourself.
            </p>

            <p className="mt-1.5 text-[10px] text-white/20">
              And no AI ever gets the complete picture.
            </p>
          </motion.div>
        </div>
      </PageContainer>
    </section>
  );
}