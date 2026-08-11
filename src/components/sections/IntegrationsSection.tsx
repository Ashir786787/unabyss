"use client";

import PageContainer from "@/components/layout/PageContainer";
import { fadeLeft, fadeRight, fadeUp, fadeUpMedium, viewportFifth, viewportOnce, viewportQuarter } from "@/lib/animations";
import {
  CalendarDays,
  FileText,
  FolderGit2,
  Mail,
  MessageSquare,
  Search,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";

const workspaceApps = [
  {
    name: "Gmail",
    description: "Email and conversations",
    icon: Mail,
    color: "bg-[#ea4335]",
  },
  {
    name: "Slack",
    description: "Messages and channels",
    icon: MessageSquare,
    color: "bg-[#6e4b8b]",
  },
  {
    name: "GitHub",
    description: "Repositories and issues",
    icon: FolderGit2,
    color: "bg-[#24292f]",
  },
  {
    name: "Notion",
    description: "Docs and knowledge",
    icon: FileText,
    color: "bg-white",
    darkIcon: true,
  },
  {
    name: "Calendar",
    description: "Meetings and events",
    icon: CalendarDays,
    color: "bg-[#4285f4]",
  },
  {
    name: "Drive",
    description: "Files and documents",
    icon: FileText,
    color: "bg-[#34a853]",
  },
];

const aiApps = [
  {
    name: "Claude",
    accent: "bg-[#d97757]",
  },
  {
    name: "ChatGPT",
    accent: "bg-[#10a37f]",
  },
  {
    name: "Cursor",
    accent: "bg-[#222222]",
  },
  {
    name: "Gemini",
    accent: "bg-[#3154d9]",
  },
  {
    name: "Perplexity",
    accent: "bg-[#1b5155]",
  },
  {
    name: "Codex",
    accent: "bg-[#252525]",
  },
];

export default function IntegrationsSection() {
  return (
    <section
      id="integrations"
      className="relative overflow-hidden bg-[#0c0c0c] py-28 sm:py-32 lg:py-36"
    >
      <div className="pointer-events-none absolute left-1/2 top-[42%] h-[620px] w-[920px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,118,87,0.05),transparent_70%)]" />

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
              Integrations
            </p>

            <h2 className="mt-4 text-balance text-[30px] font-semibold leading-[1.03] tracking-[-0.045em] text-white sm:text-[40px] lg:text-[48px]">
              Everything you use,
              <br className="hidden sm:block" /> finally connected.
            </h2>

            <p className="mx-auto mt-5 max-w-[590px] text-[11px] leading-5 text-white/28 sm:text-[12px]">
              Connect the tools where your work already happens and make that
              context available wherever you use AI.
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
              <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4">
                <div>
                  <p className="text-[8px] uppercase tracking-[0.15em] text-white/18">
                    Your workspace
                  </p>

                  <h3 className="mt-2 text-[14px] font-semibold tracking-[-0.025em] text-white/60">
                    Context lives across your tools
                  </h3>
                </div>

                <Search size={14} className="text-white/22" />
              </div>

              <div className="p-5">
                <div className="grid gap-3 sm:grid-cols-2">
                  {workspaceApps.map((app) => {
                    const Icon = app.icon;

                    return (
                      <div
                        key={app.name}
                        className="group flex items-center rounded-[11px] border border-white/[0.06] bg-[#171717] p-3.5 transition-colors hover:bg-[#1a1a1a]"
                      >
                        <div
                          className={`flex size-9 shrink-0 items-center justify-center rounded-[9px] ${app.color}`}
                        >
                          <Icon
                            size={14}
                            className={
                              app.darkIcon ? "text-black" : "text-white"
                            }
                          />
                        </div>

                        <div className="ml-3 min-w-0">
                          <p className="text-[9px] font-medium text-white/52">
                            {app.name}
                          </p>

                          <p className="mt-0.5 truncate text-[8px] text-white/19">
                            {app.description}
                          </p>
                        </div>

                        <span className="ml-auto size-1.5 shrink-0 rounded-full bg-emerald-400/70" />
                      </div>
                    );
                  })}
                </div>

                <div className="mt-5 flex items-center justify-center gap-2">
                  <span className="h-px w-12 bg-white/[0.04]" />

                  <span className="text-[8px] uppercase tracking-[0.12em] text-white/15">
                    25+ apps
                  </span>

                  <span className="h-px w-12 bg-white/[0.04]" />
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
              <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4">
                <div>
                  <p className="text-[8px] uppercase tracking-[0.15em] text-white/18">
                    Your AI tools
                  </p>

                  <h3 className="mt-2 text-[14px] font-semibold tracking-[-0.025em] text-white/60">
                    The same memory follows you
                  </h3>
                </div>

                <Sparkles size={14} className="text-[#ff8067]/55" />
              </div>

              <div className="grid grid-cols-2 gap-3 p-5">
                {aiApps.map((app) => (
                  <div
                    key={app.name}
                    className="group flex min-h-[92px] flex-col justify-between rounded-[11px] border border-white/[0.06] bg-[#171717] p-3.5 transition-colors hover:bg-[#1a1a1a]"
                  >
                    <div
                      className={`flex size-8 items-center justify-center rounded-[8px] ${app.accent}`}
                    >
                      <Sparkles size={12} className="text-white" />
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <p className="text-[9px] font-medium text-white/48">
                        {app.name}
                      </p>

                      <span className="size-1.5 rounded-full bg-[#ff7657]" />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUpMedium}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={{ delay: 0.12, duration: 0.5 }}
            className="mt-10 text-center"
          >
            <p className="text-[10px] text-white/21">
              Connect once. Keep using the tools you already love.
            </p>

            <p className="mt-1.5 text-[12px] font-medium text-white/42">
              Your context moves with you.
            </p>
          </motion.div>
        </div>
      </PageContainer>
    </section>
  );
}