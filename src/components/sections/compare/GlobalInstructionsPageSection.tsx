"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Copy,
  Search,
  Sparkles,
  Settings,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";

type Agent = "claude" | "chatgpt";

const copyCards = [
  {
    title: "Save only what matters",
    recommended: true,
    body: "Unabyss saves only the important things — decisions, preferences, projects, tools you commit to.",
    text: `Before answering, load my current context from Unabyss if you don't have the full information needed to answer my prompt.

As we work, save only what matters to Unabyss: decisions, preferences, projects, and tools I commit to. Don't save trivial or one-off exchanges.`,
  },
  {
    title: "Save everything",
    recommended: false,
    body: "A short summary of every conversation lands in your Unabyss vault, plus anything durable as it comes up.",
    text: `Before answering, load my current context from Unabyss if you don't have the full information needed to answer my prompt.

After every conversation, save a short summary to my Unabyss vault, plus anything durable — decisions, preferences, projects, tools I commit to — as it comes up.`,
  },
  {
    title: "Don't save anything",
    recommended: false,
    body: "Unabyss stores a conversation only when you explicitly ask.",
    text: `Before answering, load my current context from Unabyss if you don't have the full information needed to answer my prompt.

Don't save anything from our conversations to my Unabyss vault unless I explicitly ask you to.`,
  },
];

const instructionText = `Before answering, load my current context from Unabyss if you don't have the full information needed to answer my prompt.

As we work, save only what matters to Unabyss: decisions, preferences, projects, and tools I commit to. Don't save trivial or one-off exchanges.`;

const claudeHelp =
  "Claude will keep these in mind across chats and Cowork within Anthropic's guidelines. Learn more";
const chatgptHelp =
  "ChatGPT will keep this in mind across all chats. It never includes this section in its responses to you.";

function ClaudeDesktopMock({ showDialog }: { showDialog: boolean }) {
  return (
    <div className="mx-auto w-full max-w-[940px] overflow-x-clip">
      <div className="stage w-full [container-type:inline-size]">
        <div
          className="win relative flex flex-col overflow-hidden rounded-[1.4cqw] border border-white/8 bg-[#262624] text-[#ecebe4] shadow-[0_2.5cqw_6cqw_-2cqw_rgba(0,0,0,0.55)]"
          style={{ width: "100%", aspectRatio: "141 / 100" }}
        >
          <header className="flex flex-none items-center gap-[1.2cqw] px-[1.4cqw] pb-[0.6cqw] pt-[1.2cqw]">
            <span className="flex items-center gap-[0.65cqw]">
              <i className="size-[0.92cqw] rounded-full bg-[#FF5F57]" />
              <i className="size-[0.92cqw] rounded-full bg-[#FEBC2E]" />
              <i className="size-[0.92cqw] rounded-full bg-[#28C840]" />
            </span>
          </header>

          <div className="flex min-h-0 flex-1">
            <aside className="relative flex w-[19cqw] flex-none flex-col px-[1cqw] pb-[1cqw]">
              <div className="mb-[1.4cqw] flex gap-[0.4cqw]">
                <span className="inline-flex flex-1 items-center justify-center gap-[0.55cqw] rounded-[0.7cqw] border border-white/6 bg-[#3a3937] px-0 py-[0.55cqw] text-[1cqw] text-[#ecebe4]">
                  <Sparkles className="size-[1.05cqw]" />
                  Home
                </span>
                <span className="inline-flex flex-1 items-center justify-center gap-[0.55cqw] rounded-[0.7cqw] px-0 py-[0.55cqw] text-[1cqw] text-[#9c9a92]">
                  <Settings className="size-[1.05cqw]" />
                  Code
                </span>
              </div>
              <span className="mb-[1cqw] inline-flex items-center gap-[0.9cqw] self-start rounded-[0.7cqw] bg-white/6 px-[0.8cqw] py-[0.6cqw] text-[1.05cqw] text-[#ecebe4]">
                <Sparkles className="size-[1.15cqw]" />
                New
              </span>
              <nav className="mt-[0.4cqw] flex flex-col">
                {["Projects", "Artifacts", "Customize"].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-[0.9cqw] px-[0.8cqw] py-[0.55cqw] text-[1.05cqw] text-[#ecebe4]"
                  >
                    <Sparkles className="size-[1.15cqw] text-[#9c9a92]" />
                    {item}
                  </span>
                ))}
              </nav>
              <span className="mt-[1.2cqw] px-[0.8cqw] text-[0.95cqw] text-[#6f6d67]">
                Recents
              </span>
              <div className="flex-1" />
              <span className="mt-auto flex items-center gap-[0.7cqw] rounded-[0.7cqw] px-[0.4cqw] py-[0.5cqw]">
                <span className="grid size-[1.8cqw] flex-none place-items-center rounded-full bg-[#d97757] text-[0.9cqw] font-medium text-black">
                  M
                </span>
                <span className="text-[1cqw] text-[#ecebe4]">Michael</span>
                <span className="text-[1cqw] text-[#9c9a92]">· Free</span>
                <ChevronDown className="ml-auto size-[0.9cqw] text-[#9c9a92]" />
              </span>
            </aside>

            <main className="flex min-w-0 flex-1 flex-col items-center justify-center gap-[2.2cqw] px-[5cqw] pb-[6cqw]">
              <h2 className="flex items-center gap-[1.2cqw] font-serif text-[3cqw] leading-[1.1] text-[#ecebe4]">
                <Sparkles className="size-[2.3cqw] text-[#d97757]" />
                Afternoon.
                <br />
                How can I help you today?
              </h2>
              <div className="w-full max-w-[46cqw] rounded-[1.3cqw] border border-white/10 bg-[#30302e] px-[1.3cqw] pb-[0.9cqw] pt-[1.2cqw] shadow-[0_0.4cqw_1.4cqw_-0.8cqw_rgba(0,0,0,0.25)]">
                <div className="min-h-[2cqw] pb-[1.5cqw] text-[1.15cqw] font-light text-[#6f6d67]">
                  Ask anything
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[1cqw] text-[#9c9a92]">
                    <span className="inline-flex items-center gap-[0.2cqw] rounded-[0.7cqw] border border-white/8 p-[0.18cqw]">
                      <span className="rounded-[0.55cqw] bg-[#3a3937] px-[0.9cqw] py-[0.35cqw] text-[0.95cqw] text-[#ecebe4]">
                        Chat
                      </span>
                      <span className="px-[0.9cqw] py-[0.35cqw] text-[0.95cqw] text-[#6f6d67]">
                        Cowork
                      </span>
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-[0.45cqw] text-[1cqw] text-[#9c9a92]">
                    <span className="text-[#ecebe4]">Sonnet 5</span> · Medium
                  </span>
                </div>
              </div>
            </main>
          </div>

          {showDialog ? (
            <div className="absolute inset-0 z-10">
              <div className="absolute inset-0 bg-black/45" />
              <div className="absolute inset-[2.8cqw] z-10 flex overflow-hidden rounded-[1.2cqw] border border-white/9 bg-[#2b2a28] shadow-[0_2cqw_5cqw_-1.5cqw_rgba(0,0,0,0.7)]">
                <aside className="flex w-[15cqw] flex-none flex-col gap-[0.15cqw] px-[1cqw] py-[1.1cqw]">
                  <span className="mb-[1cqw] flex items-center gap-[0.7cqw] rounded-[0.7cqw] border border-white/6 bg-black/18 px-[0.8cqw] py-[0.55cqw] text-[0.98cqw] text-[#6f6d67]">
                    <Search className="size-[1.05cqw]" />
                    Search
                  </span>
                  <span className="mt-[0.9cqw] px-[0.8cqw] pb-[0.35cqw] text-[0.88cqw] text-[#6f6d67]">
                    Settings
                  </span>
                  {["General", "Account", "Privacy", "Billing", "Capabilities"].map(
                    (item, index) => (
                      <span
                        key={item}
                        className={`flex items-center gap-[0.8cqw] rounded-[0.6cqw] px-[0.8cqw] py-[0.5cqw] text-[1cqw] text-[#ecebe4] ${
                          index === 0 ? "bg-white/7" : ""
                        }`}
                      >
                        <Sparkles className="size-[1.05cqw] text-[#9c9a92]" />
                        {item}
                      </span>
                    ),
                  )}
                </aside>

                <div className="min-w-0 flex-1 px-[2.4cqw] pt-[1.6cqw]">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[1.35cqw] font-medium text-[#ecebe4]">
                        Settings
                      </span>
                      <p className="text-[0.95cqw] text-[#9c9a92]">General</p>
                    </div>
                  </div>

                  <p className="mb-[0.4cqw] mt-[2.7cqw] text-[1.35cqw] font-medium text-[#ecebe4]">
                    Profile
                  </p>
                  <div className="mt-[1.7cqw] flex items-center justify-between gap-[2cqw]">
                    <span className="text-[1.05cqw] text-[#ecebe4]">Avatar</span>
                    <span className="grid size-[2.1cqw] flex-none place-items-center rounded-full bg-[#d97757] text-[1cqw] font-medium text-black">
                      M
                    </span>
                  </div>
                  <div className="mt-[1.7cqw] flex items-center justify-between gap-[2cqw]">
                    <span className="text-[1.05cqw] text-[#ecebe4]">
                      Full name
                    </span>
                    <span className="inline-flex items-center w-[22cqw] rounded-[0.7cqw] border border-white/10 bg-black/18 px-[1cqw] py-[0.7cqw] text-[1cqw] text-[#ecebe4]">
                      Michael Scott
                    </span>
                  </div>
                  <div className="mt-[1.7cqw] flex items-center justify-between gap-[2cqw]">
                    <span className="text-[1.05cqw] text-[#ecebe4]">
                      What should Claude call you?
                    </span>
                    <span className="inline-flex items-center w-[22cqw] rounded-[0.7cqw] border border-white/10 bg-black/18 px-[1cqw] py-[0.7cqw] text-[1cqw] text-[#ecebe4]">
                      Michael
                    </span>
                  </div>
                  <div className="mt-[1.7cqw] flex items-center justify-between gap-[2cqw]">
                    <span className="text-[1.05cqw] text-[#ecebe4]">
                      What best describes your work?
                    </span>
                    <span className="inline-flex items-center gap-[0.5cqw] w-[22cqw] rounded-[0.7cqw] border border-white/10 bg-black/18 px-[1cqw] py-[0.7cqw] text-[1cqw] text-[#ecebe4]">
                      Founder
                      <ChevronDown className="ml-auto size-[0.9cqw] text-[#9c9a92]" />
                    </span>
                  </div>

                  <div className="mt-[1.8cqw]">
                    <span className="text-[1.05cqw] font-normal text-[#ecebe4]">
                      Instructions for Claude
                    </span>
                    <p className="mt-[0.35cqw] text-[0.95cqw] leading-[1.5] text-[#9c9a92]">
                      {claudeHelp}
                    </p>
                    <div className="mt-[0.8cqw] min-h-[8cqw] rounded-[0.8cqw] border border-white/10 bg-black/18 px-[1.1cqw] py-[0.9cqw] text-[0.98cqw] font-light leading-[1.6] text-[#ecebe4]">
                      {showDialog ? instructionText : ""}
                    </div>
                    <div className="mt-[1.1cqw] flex items-center gap-[1.6cqw]">
                      <span className="inline-flex items-center rounded-[0.7cqw] bg-white px-[1.3cqw] py-[0.65cqw] text-[1cqw] text-[#1f1e1d]">
                        Save changes
                      </span>
                      <span className="text-[1cqw] text-[#ecebe4]">
                        Cancel
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function ChatgptDialogMock() {
  return (
    <div className="mx-auto w-full max-w-[940px] overflow-x-clip">
      <div className="stage w-full [container-type:inline-size]">
        <div
          className="win relative flex flex-col overflow-hidden rounded-[1.4cqw] border border-white/8 bg-[#262624] text-[#ecebe4] shadow-[0_2.5cqw_6cqw_-2cqw_rgba(0,0,0,0.55)]"
          style={{ width: "100%", aspectRatio: "141 / 100" }}
        >
          <header className="flex flex-none items-center gap-[1.2cqw] px-[1.4cqw] pb-[0.6cqw] pt-[1.2cqw]">
            <span className="flex items-center gap-[0.65cqw]">
              <i className="size-[0.92cqw] rounded-full bg-[#FF5F57]" />
              <i className="size-[0.92cqw] rounded-full bg-[#FEBC2E]" />
              <i className="size-[0.92cqw] rounded-full bg-[#28C840]" />
            </span>
            <span className="text-[1.52cqw] font-medium text-[#ecebe4]">
              ChatGPT
            </span>
          </header>

          <div className="flex min-h-0 flex-1 items-center justify-center">
            <div className="flex w-[86%] overflow-hidden rounded-[1.2cqw] border border-white/9 bg-[#2b2a28] shadow-[0_2cqw_5cqw_-1.5cqw_rgba(0,0,0,0.7)]">
              <aside className="flex w-[17cqw] flex-none flex-col gap-[0.15cqw] px-[1cqw] py-[1.1cqw]">
                <span className="mb-[1cqw] flex items-center gap-[0.7cqw] rounded-[0.7cqw] border border-white/6 bg-black/18 px-[0.8cqw] py-[0.55cqw] text-[0.98cqw] text-[#6f6d67]">
                  <Search className="size-[1.05cqw]" />
                  Search
                </span>
                <span className="mt-[0.9cqw] px-[0.8cqw] pb-[0.35cqw] text-[0.88cqw] text-[#6f6d67]">
                  Settings
                </span>
                {["General", "Personalization", "Privacy", "Billing", "Data controls"].map(
                  (item, index) => (
                    <span
                      key={item}
                      className={`flex items-center gap-[0.8cqw] rounded-[0.6cqw] px-[0.8cqw] py-[0.5cqw] text-[1cqw] text-[#ecebe4] ${
                        index === 1 ? "bg-white/7" : ""
                      }`}
                    >
                      <Sparkles className="size-[1.05cqw] text-[#9c9a92]" />
                      {item}
                    </span>
                  ),
                )}
              </aside>

              <div className="min-w-0 flex-1 px-[2.4cqw] pt-[1.6cqw]">
                <p className="mb-[0.4cqw] mt-[0.6cqw] text-[1.35cqw] font-medium text-[#ecebe4]">
                  Customize ChatGPT
                </p>
                <p className="mt-[0.35cqw] text-[0.95cqw] leading-[1.5] text-[#9c9a92]">
                  {chatgptHelp}
                </p>
                <div className="mt-[1.8cqw]">
                  <span className="text-[1.05cqw] font-normal text-[#ecebe4]">
                    What would you like ChatGPT to know about you to provide
                    better responses?
                  </span>
                  <div className="mt-[0.8cqw] min-h-[9cqw] rounded-[0.8cqw] border border-white/10 bg-black/18 px-[1.1cqw] py-[0.9cqw] text-[0.98cqw] font-light leading-[1.6] text-[#ecebe4]">
                    {instructionText}
                  </div>
                </div>
                <div className="mt-[1.1cqw] flex items-center gap-[1.6cqw]">
                  <span className="inline-flex items-center rounded-[0.7cqw] bg-white px-[1.3cqw] py-[0.65cqw] text-[1cqw] text-[#1f1e1d]">
                    Save
                  </span>
                  <span className="text-[1cqw] text-[#ecebe4]">Cancel</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GlobalInstructionsPageSection() {
  const [agent, setAgent] = useState<Agent>("claude");
  const [copied, setCopied] = useState<number | null>(null);

  const copyCardText = async (index: number) => {
    try {
      await navigator.clipboard.writeText(copyCards[index].text);
      setCopied(index);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      setCopied(index);
      setTimeout(() => setCopied(null), 2000);
    }
  };

  const steps = [
    {
      num: 1,
      title:
        agent === "claude"
          ? 'Open Settings and find "Instructions for Claude"'
          : "Open Settings and find “Custom instructions”",
      body:
        agent === "claude"
          ? "In the Claude desktop app, click your account name in the bottom-left corner and choose Settings — or press ⌘, on Mac. Settings opens on the General tab: in the Profile section, right under your name, sits the Instructions for Claude field — whatever you put here, Claude keeps in mind across every chat and Cowork session."
          : "In ChatGPT, click your account in the bottom-left corner and choose Settings → Personalization, then open Customize ChatGPT. The box labelled “What would you like ChatGPT to know about you to provide better responses?” is where anything you put stays with ChatGPT across every new chat.",
      visual: <ClaudeDesktopMock showDialog={agent === "claude"} />,
    },
    {
      num: 2,
      title: "Copy your instructions",
      body: `Pick how much Unabyss should save back from your ${
        agent === "claude" ? "Claude" : "ChatGPT"
      } conversations. All three versions tell ${
        agent === "claude" ? "Claude" : "ChatGPT"
      } to load your context from Unabyss before guessing — they differ only in what gets stored as you chat.`,
      visual: (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {copyCards.map((card, index) => (
            <div
              key={card.title}
              className={`group flex w-full cursor-pointer flex-col gap-4 rounded-2xl border p-5 text-left backdrop-blur-xl backdrop-saturate-150 transition-colors sm:items-center sm:justify-between sm:gap-6 sm:p-6 ${
                card.recommended
                  ? "border-[var(--gold-400)]/45 bg-[var(--gold-500)]/[0.08] shadow-[0_0_28px_-10px_rgba(251,191,36,0.4)] hover:bg-[var(--gold-500)]/[0.13]"
                  : "border-white/10 bg-white/[0.04] hover:bg-white/[0.07]"
              }`}
            >
              <div className="flex w-full flex-col gap-2">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-[15px] font-medium text-white">
                    {card.title}
                  </h3>
                  {card.recommended ? (
                    <span className="v2-mono rounded-full border border-[var(--gold-400)]/40 px-2.5 py-1 text-[9.5px] uppercase tracking-[0.14em] text-[var(--gold-text-strong)]">
                      Recommended
                    </span>
                  ) : null}
                </div>
                <p className="text-[13.5px] font-light leading-[1.6] text-white/55">
                  {card.body}
                </p>
              </div>
              <button
                type="button"
                onClick={() => copyCardText(index)}
                className="inline-flex h-9 w-full shrink-0 items-center justify-center gap-1.5 rounded-full border border-[var(--gold-400)]/35 bg-[var(--gold-400)]/10 px-4 text-[12.5px] font-medium text-[var(--gold-text-strong)] transition-colors hover:bg-[var(--gold-400)]/18"
              >
                {copied === index ? (
                  <>
                    <Check className="size-3.5" strokeWidth={2.2} />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="size-3.5" strokeWidth={1.8} />
                    Copy
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      ),
    },
    {
      num: 3,
      title:
        agent === "claude"
          ? "Paste your instructions and save"
          : "Paste your instructions and save",
      body:
        agent === "claude"
          ? "Paste your instructions into the field and click Save changes. From now on, every new conversation starts with your rules — no re-explaining who you are or how you work."
          : "Paste your instructions into the custom instructions box and click Save. From now on, every new chat starts with your rules — no re-explaining who you are or how you work.",
      visual:
        agent === "claude" ? (
          <ClaudeDesktopMock showDialog />
        ) : (
          <ChatgptDialogMock />
        ),
    },
  ];

  return (
    <>
      <section className="relative px-6 pb-8 pt-28 sm:px-10 sm:pt-32 lg:px-12">
        <div className="relative mx-auto max-w-[1100px]">
          <Reveal className="flex flex-col items-center text-center">
            <span className="v2-print-label">Guide</span>
            <h1
              className="v2-print-display mt-5 max-w-[20ch] text-white"
              style={{ fontSize: "clamp(32px, 4.2vw, 52px)", lineHeight: 1.15 }}
            >
              Set your custom instructions
            </h1>
            <p className="mt-6 max-w-[62ch] text-[17px] font-light leading-[1.7] text-white/65 sm:text-[18px]">
              Custom instructions are one field in your AI&apos;s settings that
              shapes every conversation. It&apos;s where you can tell Claude or
              ChatGPT to use Unabyss automatically when they don&apos;t have
              the full information needed to answer your prompt — this way, you
              always work with context already loaded. Pick your agent below to
              see exactly where to find it.
            </p>

            <div
              role="tablist"
              aria-label="Choose your agent"
              className="mt-8 inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1"
            >
              {(["claude", "chatgpt"] as Agent[]).map((value) => (
                <button
                  key={value}
                  role="tab"
                  aria-selected={agent === value}
                  onClick={() => setAgent(value)}
                  className={`inline-flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 text-[14px] font-medium transition-colors ${
                    agent === value
                      ? "bg-white text-black"
                      : "text-white/70 hover:bg-white/10"
                  }`}
                >
                  <img
                    src={
                      value === "claude"
                        ? "/images/tools/claude.svg"
                        : "/images/tools/chatgpt.svg"
                    }
                    alt=""
                    aria-hidden="true"
                    className="size-4 object-contain"
                  />
                  {value === "claude" ? "Claude" : "ChatGPT"}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {steps.map((step, index) => (
        <section
          key={step.num}
          className="relative px-6 py-14 sm:px-10 sm:py-16 lg:px-12"
        >
          <div className="relative mx-auto max-w-[1100px]">
            <Reveal className="mb-10 flex flex-col items-center gap-3 text-center">
              <span className="step-num">{step.num}</span>
              <h2
                className="v2-print-display max-w-[26ch] text-white"
                style={{ fontSize: "clamp(26px, 3vw, 38px)", lineHeight: 1.2 }}
              >
                {step.title}
              </h2>
              <p className="max-w-[64ch] text-[16px] font-light leading-[1.75] text-white/60 sm:text-[17px]">
                {step.body}
              </p>
            </Reveal>

            <Reveal delay={index % 2 === 0 ? 100 : 0} className="mt-8">
              {step.visual}
            </Reveal>
          </div>
        </section>
      ))}

      <section className="relative px-6 py-16 sm:px-10 sm:py-20 lg:px-12">
        <div className="relative mx-auto max-w-[720px]">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <span className="v2-print-label">Under a minute to set up</span>
            <h2
              className="v2-print-display max-w-[20ch] text-white"
              style={{ fontSize: "clamp(24px, 2.8vw, 34px)", lineHeight: 1.25 }}
            >
              Unabyss writes your instructions for you
            </h2>
            <p className="text-[16px] font-light leading-[1.75] text-white/60 sm:text-[17px]">
              When you connect Unabyss to{" "}
              {agent === "claude" ? "Claude" : "ChatGPT"}, the setup flow hands
              you the exact text to paste — a short prompt that tells{" "}
              {agent === "claude" ? "Claude" : "ChatGPT"} to pull your
              background, projects, and preferences from Unabyss before
              guessing.
            </p>
            <a
              href="https://app.unabyss.com/register"
              target="_blank"
              rel="noreferrer"
              className="group mt-3 inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 text-[15px] font-medium text-black no-underline transition-all hover:bg-white/90"
            >
              Get Unabyss
              <ArrowUpRight
                strokeWidth={1.8}
                className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
