"use client";

import PageContainer from "@/components/layout/PageContainer";
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
  { name: "Claude", accent: "bg-[#d97757]" },
  { name: "ChatGPT", accent: "bg-[#10a37f]" },
  { name: "Cursor", accent: "bg-[#252525]" },
  { name: "Gemini", accent: "bg-[#252525]" },
  { name: "Perplexity", accent: "bg-[#252525]" },
  { name: "Codex", accent: "bg-[#252525]" },
];

export default function IntegrationsSection() {
  return (
    <section
      id="integrations"
      className="relative overflow-hidden bg-[#0c0c0c] py-24 sm:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-[35%] h-[550px] w-[850px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,111,82,0.06),transparent_68%)]" />

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
              Integrations
            </p>

            <h2 className="mt-4 text-balance text-[28px] font-semibold leading-[1.06] tracking-[-0.045em] text-white sm:text-[36px] lg:text-[42px]">
              Everything you use,
              <br className="hidden sm:block" /> finally connected.
            </h2>

            <p className="mx-auto mt-4 max-w-[560px] text-[12px] leading-5 text-white/35 sm:text-[13px]">
              Connect the tools where your work already happens and make that
              context available to every AI you use.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="rounded-[16px] border border-white/[0.07] bg-[#111111] p-5 sm:p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-white/20">
                    Connect your workspace
                  </p>

                  <h3 className="mt-2 text-[16px] font-semibold tracking-[-0.025em] text-white">
                    Your context lives everywhere.
                  </h3>
                </div>

                <Search size={15} className="text-white/25" />
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {workspaceApps.map((app) => {
                  const Icon = app.icon;

                  return (
                    <div
                      key={app.name}
                      className="flex items-center rounded-[11px] border border-white/[0.06] bg-[#171717] p-3 transition-colors hover:bg-[#1b1b1b]"
                    >
                      <div
                        className={`flex size-9 shrink-0 items-center justify-center rounded-[9px] ${app.color}`}
                      >
                        <Icon
                          size={15}
                          className={
                            app.darkIcon ? "text-black" : "text-white"
                          }
                        />
                      </div>

                      <div className="ml-3 min-w-0">
                        <p className="text-[10px] font-medium text-white/65">
                          {app.name}
                        </p>

                        <p className="mt-0.5 truncate text-[9px] text-white/22">
                          {app.description}
                        </p>
                      </div>

                      <span className="ml-auto size-1.5 shrink-0 rounded-full bg-emerald-400/70" />
                    </div>
                  );
                })}
              </div>

              <p className="mt-5 text-center text-[9px] text-white/20">
                And many more integrations
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.08, duration: 0.55 }}
              className="rounded-[16px] border border-white/[0.07] bg-[#111111] p-5 sm:p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-white/20">
                    Use any AI
                  </p>

                  <h3 className="mt-2 text-[16px] font-semibold tracking-[-0.025em] text-white">
                    The same memory follows you.
                  </h3>
                </div>

                <Sparkles size={15} className="text-[#ff8067]/65" />
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {aiApps.map((app) => (
                  <div
                    key={app.name}
                    className="flex min-h-[82px] flex-col justify-between rounded-[11px] border border-white/[0.06] bg-[#171717] p-3"
                  >
                    <div
                      className={`flex size-8 items-center justify-center rounded-[8px] ${app.accent}`}
                    >
                      <Sparkles size={13} className="text-white" />
                    </div>

                    <p className="mt-3 text-[10px] font-medium text-white/55">
                      {app.name}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12, duration: 0.5 }}
            className="mt-9 text-center"
          >
            <p className="text-[11px] text-white/25">
              Connect once. Keep using the tools you already love.
            </p>
          </motion.div>
        </div>
      </PageContainer>
    </section>
  );
}