"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  EyeOff,
  Lock,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import TeamFlow from "@/components/visuals/TeamFlow";
import Moments from "@/components/visuals/Moments";

const permissionPeople = [
  {
    initials: "DS",
    name: "Dwight",
    role: "Sales",
    caption:
      "Dwight's context is built from the five tools Dwight can already open.",
    tools: [
      { name: "Gmail", src: "/images/tools/gmail.svg", locked: false },
      { name: "Google Drive", src: "/images/tools/google-drive.svg", locked: false },
      { name: "Slack", src: "/images/tools/slack.svg", locked: false },
      { name: "Notion", src: "/images/tools/notion.svg", locked: false },
      { name: "HubSpot", src: "/images/tools/hubspot.svg", locked: false },
      { name: "Sheets", src: "/images/tools/google-sheets.svg", locked: true },
      { name: "Calendar", src: "/images/tools/google-calendar.svg", locked: true },
    ],
  },
  {
    initials: "OM",
    name: "Oscar",
    role: "Accounting",
    caption:
      "Oscar never had the CRM or the sales drive - so their context never does either.",
    tools: [
      { name: "Gmail", src: "/images/tools/gmail.svg", locked: false },
      { name: "Google Drive", src: "/images/tools/google-drive.svg", locked: true },
      { name: "Slack", src: "/images/tools/slack.svg", locked: false },
      { name: "Notion", src: "/images/tools/notion.svg", locked: true },
      { name: "HubSpot", src: "/images/tools/hubspot.svg", locked: true },
      { name: "Sheets", src: "/images/tools/google-sheets.svg", locked: false },
      { name: "Calendar", src: "/images/tools/google-calendar.svg", locked: false },
    ],
  },
];

const seatPerks = [
  {
    title: "Unlimited agents.",
    body: "Connect as many AI tools as they use - Claude, ChatGPT, Cursor, and more.",
    tools: [
      { name: "Claude", src: "/images/tools/claude.svg" },
      { name: "ChatGPT", src: "/images/tools/chatgpt.svg" },
      { name: "Cursor", src: "/images/tools/cursor.svg" },
      { name: "Gemini", src: "/images/tools/gemini.svg" },
    ],
  },
  {
    title: "Unlimited connected accounts.",
    body: "Every source they work in, not a capped handful.",
    tools: [
      { name: "Gmail", src: "/images/tools/gmail.svg" },
      { name: "Slack", src: "/images/tools/slack.svg" },
      { name: "Notion", src: "/images/tools/notion.svg" },
      { name: "Google Drive", src: "/images/tools/google-drive.svg" },
    ],
  },
  { title: "Deep research queries.", body: "The heavier, reasoning-based questions, not just fast lookups.", tools: [] },
  { title: "Priority support", body: "and early access to new features.", tools: [] },
  { title: "Unified billing.", body: "One payment, one invoice.", tools: [] },
];

const trustBlocks = [
  {
    title: "You own it.",
    body: "Unabyss is an independent context layer - not memory trapped inside one vendor. Plug in any agent, connect any source, and take your context anywhere.",
  },
  {
    title: "Granular permissions.",
    body: "Per app and per data type - confidential, sensitive, private. Each person decides what each tool can see.",
  },
  {
    title: "Never sold.",
    body: "Never used to train models. Your context stays yours.",
  },
  {
    title: "Audit trail.",
    body: "Every context request logged: what was shared, with whom, when.",
  },
  {
    title: "Access inherited, not invented.",
    body: "Context is bounded by the source permissions your company already maintains.",
  },
];

const trustLogos = [
  { name: "Claude", src: "/images/tools/claude.svg" },
  { name: "ChatGPT", src: "/images/tools/chatgpt.svg" },
  { name: "Gemini", src: "/images/tools/gemini.svg" },
  { name: "Perplexity", src: "/images/tools/perplexity.svg" },
  { name: "Cursor", src: "/images/tools/cursor.svg" },
  { name: "Gmail", src: "/images/tools/gmail.svg" },
  { name: "Notion", src: "/images/tools/notion.svg" },
  { name: "Slack", src: "/images/tools/slack.svg" },
  { name: "Google Calendar", src: "/images/tools/google-calendar.svg" },
  { name: "Google Drive", src: "/images/tools/google-drive.svg" },
  { name: "Linear", src: "/images/tools/linear.svg" },
];

const teamFaq = [
  {
    question: "Is this a shared team knowledge base?",
    answer:
      "No. We deliberately mirror your team's access structure. Team is one subscription, one invoice, and one set of admin controls over a group of people, but each person keeps their own context, within the access levels they already have.",
  },
  {
    question: "Is there a way to share my context with my teammates?",
    answer:
      "Yes. You securely share your MCP token with them. They would then need to configure their agent to use your context in some situations and their own in others.",
  },
  {
    question: "Can an admin read what's in a teammate's context?",
    answer:
      "No. Admins manage seats, invites, roles, and billing. There is no admin view of a member's context and no way to export it to the company.",
  },
  {
    question: "What happens when someone leaves?",
    answer:
      "An admin removes them, their access ends immediately, and their Unabyss context is purged. The seat frees up for the next hire. Nothing is left sitting in a dormant account.",
  },
  {
    question: "How secure is Unabyss?",
    answer:
      "Your data stays yours. Everything is encrypted, read-only by design, never used to train AI models, and always under your control - you can disconnect integrations or permanently delete your data at any time. We are also going through SOC 2 Type II certification, and we are compliant with GDPR. Read the full details.",
  },
  {
    question: "How do teammates join?",
    answer:
      "An admin sends an invite by email and the teammate creates their Unabyss account from that invite. Invites are good for 7 days. One thing to know: if someone already has their own Unabyss account, they cannot move it into the team right now - they will need to join with a different email address, or delete their existing account first. If that is a problem for your rollout, email support@unabyss.com and we will help sort it out.",
  },
  {
    question: "Can someone keep a personal plan alongside Team?",
    answer:
      "When Team activates, an existing personal Pro or Max subscription ends so there is no double billing, and the Team seat replaces it with equal or better access. You can, however, run two accounts on two different email addresses and split personal and team context that way.",
  },
];

function TeamAdminMock({
  used,
  total,
  members,
}: {
  used: number;
  total: number;
  members: { initials: string; name: string; role: string }[];
}) {
  return (
    <div className="v2-shine v2-shine--light v2-card-glass overflow-hidden rounded-[18px]">
      <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
        <div className="flex items-center gap-3">
          <span className="flex size-8 items-center justify-center rounded-[9px] bg-white/[0.06] text-[10px] font-medium text-white">
            DM
          </span>
          <div className="flex flex-col">
            <h2 className="text-[13.5px] font-medium text-white">Dunder Mifflin</h2>
            <span className="text-[10.5px] font-light text-white/45">
              Team plan · {used} of {total} seats used
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-medium text-emerald-300">
            <span className="size-1.5 rounded-full bg-emerald-300" />
            Active
          </span>
        </div>
      </div>

      <div className="border-b border-white/[0.07] px-5 py-3">
        <div className="flex flex-wrap items-center gap-2">
          {[
            { label: "Manage billing", danger: false },
            { label: "Change seats", danger: false },
            { label: "Dissolve Team", danger: true },
          ].map((action) => (
            <span
              key={action.label}
              className={`rounded-full border px-3.5 py-1.5 text-[11px] font-medium ${
                action.danger
                  ? "border-red-400/25 bg-red-400/5 text-red-300/80"
                  : "border-white/12 text-white/70"
              }`}
            >
              {action.label}
            </span>
          ))}
        </div>
        <p className="mt-2 text-[10.5px] font-light text-white/35">
          Payment method, billing details and cancellation are managed in the Stripe portal.
        </p>
      </div>

      <div className="px-5 py-4">
        <p className="v2-mono text-[10px] uppercase tracking-[0.18em] text-white/40">Members</p>
        <p className="mt-1 text-[10.5px] font-light text-white/35">
          {used} of {total} seats used.
        </p>
        <div className="mt-3 flex flex-col gap-2.5">
          {members.map((member) => (
            <div key={member.initials} className="flex items-center gap-3">
              <span className="flex size-8 items-center justify-center rounded-full bg-white/[0.07] text-[10.5px] font-medium text-white">
                {member.initials}
              </span>
              <span className="text-[12.5px] text-white/85">{member.name}</span>
              <span className="ml-auto rounded-full border border-white/12 px-2.5 py-0.5 text-[10px] font-light text-white/55">
                {member.role}
              </span>
            </div>
          ))}
          <div className="flex items-center gap-3">
            <span className="flex size-8 items-center justify-center rounded-full border border-dashed border-white/20 text-[10.5px] text-white/40">
              +
            </span>
            <span className="text-[12px] font-light text-white/45">Free seat</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function TeamsFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="flex flex-col gap-3">
      {teamFaq.map((item, index) => {
        const open = openIndex === index;

        return (
          <div
            key={item.question}
            className={`group rounded-2xl border backdrop-blur-[var(--glass-blur)] backdrop-saturate-[var(--glass-saturate)] transition-colors ${
              open
                ? "border-[var(--glass-border-hover)] bg-[var(--glass-bg-hover)]"
                : "border-[var(--glass-border)] bg-[var(--glass-bg)] hover:border-[var(--glass-border-hover)] hover:bg-[var(--glass-bg-hover)]"
            }`}
          >
            <button
              type="button"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? -1 : index)}
              className="flex w-full flex-1 items-center justify-between gap-4 rounded-2xl px-5 py-3.5 text-left text-[15px] font-medium leading-[1.4] text-white outline-none transition-colors focus-visible:ring-2 focus-visible:ring-white/30 sm:px-6 sm:py-4 sm:text-[16px]"
            >
              <span className="block max-w-[64ch]">{item.question}</span>
              <span
                className={`shrink-0 text-white/45 transition-[transform,colors] duration-200 group-hover:text-white/75 ${
                  open ? "rotate-45 text-white" : ""
                }`}
                aria-hidden="true"
              >
                <svg
                  className="size-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </button>

            {open && (
              <div className="px-6 pb-6 pt-0 sm:px-7 sm:pb-7">
                <div className="flex flex-col gap-3 border-t border-white/10 pt-4 text-[14.5px] font-light leading-[1.75] text-white/70 sm:text-[15px]">
                  <p>{item.answer}</p>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function TeamsSection() {
  return (
    <>
      <section className="relative isolate flex flex-col overflow-hidden px-6 pb-10 pt-32 sm:px-10 sm:pt-40 lg:px-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 60% 45% at 50% 30%, rgba(255,255,255,0.06), transparent 70%)",
          }}
        />

        <div className="mx-auto flex w-full max-w-[1100px] flex-col">
          <div className="flex flex-col items-center text-center">
            <Reveal>
              <span className="v2-print-label">Unabyss for Teams</span>
            </Reveal>
            <Reveal delay={80}>
              <h1
                className="v2-print-display mt-6 max-w-[20ch] text-white"
                style={{ fontSize: "clamp(38px, 6vw, 76px)", lineHeight: 1.04 }}
              >
                An AI memory for every teammate.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-7 max-w-[62ch] text-[16.5px] font-light leading-[1.75] text-white/65 sm:text-[18px]">
                Mail, drive, meeting recorders, codebase, CRM and more - plus
                conversations with Claude, ChatGPT, Cursor and other LLMs: each
                teammate&rsquo;s connected sources flow into one memory every AI
                they use can read. Nothing is pooled across the company.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <a
                href="https://app.unabyss.com/register"
                target="_blank"
                rel="noreferrer"
                className="group mt-9 inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 text-[15px] font-medium text-black no-underline transition-all hover:bg-white/90"
              >
                Test it out with a 7-day trial
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </Reveal>
          </div>

          <Reveal delay={140} className="mt-14">
            <TeamFlow />
          </Reveal>
        </div>
      </section>

      <section className="relative px-6 py-24 sm:px-10 sm:py-28 lg:px-12">
        <div className="relative mx-auto max-w-[1100px]">
          <Reveal className="mb-12 flex flex-col items-center gap-3 text-center">
            <span className="v2-print-label">Everyday moments</span>
            <h2
              className="v2-print-display max-w-[20ch] text-white"
              style={{ fontSize: "clamp(26px, 3.2vw, 40px)", lineHeight: 1.2 }}
            >
              Where teams feel it
            </h2>
          </Reveal>

          <Reveal delay={100} className="mt-12">
            <Moments />
          </Reveal>
        </div>
      </section>

      <section className="relative px-6 py-24 sm:px-10 sm:py-28 lg:px-12">
        <div className="relative mx-auto max-w-[1100px]">
          <Reveal className="mb-12 flex flex-col items-center gap-3 text-center">
            <span className="v2-print-label">Permissions</span>
            <h2
              className="v2-print-display max-w-[22ch] text-white"
              style={{ fontSize: "clamp(30px, 4vw, 48px)", lineHeight: 1.2 }}
            >
              Nobody sees anything they couldn&rsquo;t already see
            </h2>
            <p className="mt-6 max-w-[62ch] text-[16px] font-light leading-[1.75] text-white/70 sm:text-[17px]">
              Your company already decided who can see what - Drive folder
              permissions, private Slack channels, Notion page access.{" "}
              <span className="font-medium text-white">Unabyss inherits it:</span>{" "}
              each person connects their own accounts, so their context is
              built from exactly what they can already open, and nothing more.
            </p>
          </Reveal>

          <div className="flex flex-col gap-4">
            {permissionPeople.map((person, index) => (
              <Reveal key={person.initials} delay={index * 80}>
                <div className="v2-shine v2-shine--light v2-card-glass flex flex-col gap-5 rounded-[18px] p-6 sm:p-7">
                  <div className="flex items-center gap-3">
                    <span
                      className="v2-mono flex size-10 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/[0.06] text-[12px] tracking-[0.08em] text-white/75"
                      aria-hidden="true"
                    >
                      {person.initials}
                    </span>
                    <span className="flex min-w-0 flex-col">
                      <span className="text-[15px] font-medium leading-tight text-white">
                        {person.name}
                      </span>
                      <span className="text-[12.5px] font-light text-white/50">
                        {person.role}
                      </span>
                    </span>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {person.tools.map((tool) => (
                      <li
                        key={tool.name}
                        title={
                          tool.locked
                            ? `${tool.name} - ${person.name} has no access`
                            : `${tool.name} - in ${person.name}'s context`
                        }
                        className={`flex items-center gap-2 rounded-full border py-1.5 pl-2 pr-3 transition-colors ${
                          tool.locked
                            ? "border-dashed border-white/8 bg-transparent"
                            : "border-white/15 bg-white/[0.06]"
                        }`}
                      >
                        <img
                          src={tool.src}
                          alt=""
                          loading="lazy"
                          className={`size-4 shrink-0 ${tool.locked ? "opacity-25 grayscale" : ""}`}
                        />
                        <span
                          className={`text-[12px] font-light ${
                            tool.locked ? "text-white/25" : "text-white/75"
                          }`}
                        >
                          {tool.name}
                        </span>
                        {tool.locked && (
                          <Lock className="size-3 shrink-0 text-white/25" strokeWidth={1.8} />
                        )}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-auto text-[13.5px] font-light leading-[1.65] text-white/55">
                    {person.caption}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 py-24 sm:px-10 sm:py-28 lg:px-12">
        <div className="relative mx-auto max-w-[1100px]">
          <Reveal className="mb-10 flex flex-col items-center gap-3 text-center">
            <span className="v2-print-label">Every seat</span>
            <h2
              className="v2-print-display max-w-[22ch] text-white"
              style={{ fontSize: "clamp(26px, 3.2vw, 40px)", lineHeight: 1.2 }}
            >
              Max plan on every team seat
            </h2>
            <p className="mt-2 max-w-[54ch] text-[15px] font-light leading-[1.7] text-white/65">
              Every person on your team gets the full-power plan, not a
              stripped-down team edition:
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="v2-shine v2-shine--gold v2-glass-panel--gold rounded-[22px] p-6 sm:p-8">
              <ul className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                {seatPerks.map((perk) => (
                  <li key={perk.title} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-[rgba(var(--gold-glow-rgb),0.15)] text-[rgb(var(--gold-glow-bright-rgb))]">
                      <Check className="size-3.5" strokeWidth={2} />
                    </span>
                    <span className="flex min-w-0 flex-col gap-2">
                      <span className="text-[15px] font-light leading-[1.6] text-white/72">
                        <span className="font-medium text-white">{perk.title}</span>{" "}
                        {perk.body}
                      </span>
                      {perk.tools.length > 0 && (
                        <span className="flex flex-wrap items-center gap-1.5">
                          {perk.tools.map((tool) => (
                            <span
                              key={tool.name}
                              title={tool.name}
                              className="flex size-7 items-center justify-center rounded-full border border-white/12 bg-white/[0.06]"
                            >
                              <img src={tool.src} alt={tool.name} className="size-3.5" loading="lazy" />
                            </span>
                          ))}
                          <span className="ml-0.5 text-[12px] font-light text-white/40">
                            and more
                          </span>
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={180} className="mt-6">
            <div className="v2-shine v2-glass-panel mx-auto flex w-fit max-w-full flex-col items-center gap-4 rounded-[26px] p-4 sm:flex-row sm:gap-5 sm:rounded-full sm:py-2.5 sm:pl-4 sm:pr-2.5">
              <div className="flex shrink-0 -space-x-2.5">
                <img
                  src="/images/authors/filip.jpg"
                  alt="Filip Thostos"
                  title="Filip Thostos"
                  loading="lazy"
                  width={40}
                  height={40}
                  className="size-10 rounded-full border-2 border-[#0a0a0a] object-cover"
                />
                <img
                  src="/images/authors/marcin.jpg"
                  alt="Marcin Thostos"
                  title="Marcin Thostos"
                  loading="lazy"
                  width={40}
                  height={40}
                  className="size-10 rounded-full border-2 border-[#0a0a0a] object-cover"
                />
              </div>
              <span className="text-center text-[14.5px] font-light text-white/70 sm:text-left">
                Still unsure?
              </span>
              <a
                href="https://cal.com/unabyss/15min"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex h-11 shrink-0 items-center gap-2 rounded-full bg-white px-5 text-[13px] font-medium text-black transition-all hover:bg-white/90"
              >
                Book a call with our team
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative px-6 py-24 sm:px-10 sm:py-28 lg:px-12">
        <div className="relative mx-auto max-w-[1100px]">
          <Reveal className="mb-12 flex flex-col items-center gap-3 text-center">
            <span className="v2-print-label">Admin controls</span>
            <h2
              className="v2-print-display max-w-[30ch] text-white"
              style={{ fontSize: "clamp(24px, 3vw, 36px)", lineHeight: 1.2 }}
            >
              Privacy-first. No one can read your context without your
              knowledge.
            </h2>
            <p className="max-w-[54ch] text-[15px] font-light leading-[1.7] text-white/65">
              Admins get the controls a team purchase actually needs:
            </p>
          </Reveal>

          <div className="mt-10 flex flex-col gap-5">
            <Reveal delay={80} className="flex flex-col gap-4">
              <TeamAdminMock
                used={2}
                total={3}
                members={[
                  { initials: "MS", name: "Michael Scott", role: "Admin · you" },
                  { initials: "DS", name: "Dwight Schrute", role: "Member" },
                ]}
              />
              <div className="px-1">
                <h3 className="text-[19px] font-medium leading-snug text-white sm:text-[20px]">
                  Seats you control.
                </h3>
                <p className="mt-2 text-[14.5px] font-light leading-[1.65] text-white/55 sm:text-[15px]">
                  Buy the seats you need, add more when you hire.
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Reveal delay={160} className="flex flex-col gap-4">
                <TeamAdminMock
                  used={2}
                  total={3}
                  members={[
                    { initials: "MS", name: "Michael Scott", role: "Admin · you" },
                    { initials: "DS", name: "Dwight Schrute", role: "Member" },
                  ]}
                />
                <div className="px-1">
                  <h3 className="text-[19px] font-medium leading-snug text-white sm:text-[20px]">
                    Invite by email.
                  </h3>
                  <p className="mt-2 text-[14.5px] font-light leading-[1.65] text-white/55 sm:text-[15px]">
                    Assign admin or member; multiple admins allowed.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={240} className="flex flex-col gap-4">
                <TeamAdminMock
                  used={3}
                  total={4}
                  members={[
                    { initials: "MS", name: "Michael Scott", role: "Admin · you" },
                    { initials: "DS", name: "Dwight Schrute", role: "Member" },
                    { initials: "PB", name: "Pam Beesly", role: "Member" },
                  ]}
                />
                <div className="px-1">
                  <h3 className="text-[19px] font-medium leading-snug text-white sm:text-[20px]">
                    Offboarding.
                  </h3>
                  <p className="mt-2 text-[14.5px] font-light leading-[1.65] text-white/55 sm:text-[15px]">
                    Remove someone and their access ends immediately, with
                    their Unabyss context purged. No dormant account still
                    holding company information.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal delay={200} className="mt-8">
            <div className="v2-shine v2-shine--gold v2-glass-panel--gold flex flex-col items-center gap-4 rounded-[22px] px-6 py-7 text-center sm:flex-row sm:items-center sm:gap-6 sm:px-8 sm:text-left">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[rgba(var(--gold-glow-rgb),0.15)] text-[rgb(var(--gold-glow-bright-rgb))]">
                <EyeOff className="size-6" strokeWidth={1.6} />
              </span>
              <p className="text-[16px] font-light leading-[1.65] text-white/80 sm:text-[17px]">
                What admins deliberately do not get is a window into a
                teammate&rsquo;s context. There is no admin view of
                someone&rsquo;s memory.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative px-6 py-24 sm:px-10 sm:py-28 lg:px-12">
        <div className="relative mx-auto max-w-[1100px]">
          <Reveal className="mb-12 flex flex-col items-center text-center">
            <span className="v2-print-label">Trust</span>
            <h2
              className="v2-print-display max-w-[20ch] text-white"
              style={{ fontSize: "clamp(28px, 3.5vw, 44px)", lineHeight: 1.2 }}
            >
              Your context. Your rules.
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
              <div className="v2-shine v2-shine--gold v2-glass-panel--gold relative flex flex-col justify-between overflow-hidden rounded-[22px] p-7 sm:col-span-2 sm:row-span-2 sm:p-9">
                <div className="flex flex-col gap-4">
                  <h3
                    className="v2-print-display text-white"
                    style={{ fontSize: "clamp(24px, 2.6vw, 34px)", lineHeight: 1.15 }}
                  >
                    {trustBlocks[0].title}
                  </h3>
                  <p className="max-w-[42ch] text-[15px] font-light leading-[1.7] text-white/65 sm:text-[16px]">
                    {trustBlocks[0].body}
                  </p>
                </div>
                <div className="logo-grid mt-8">
                  {trustLogos.map((logo) => (
                    <span key={logo.name} className="logo-tile" title={logo.name}>
                      <img src={logo.src} alt={logo.name} loading="lazy" />
                    </span>
                  ))}
                </div>
              </div>

              {trustBlocks.slice(1, 3).map((block) => (
                <div
                  key={block.title}
                  className="v2-shine v2-shine--light v2-card-glass flex flex-col gap-3 rounded-[22px] p-7"
                >
                  <h3 className="text-[16px] font-medium leading-snug text-white">
                    {block.title}
                  </h3>
                  <p className="text-[14px] font-light leading-[1.65] text-white/60">
                    {block.body}
                  </p>
                </div>
              ))}

              {trustBlocks.slice(3).map((block, index) => (
                <div
                  key={block.title}
                  className={`v2-shine v2-shine--light v2-card-glass flex flex-col gap-3 rounded-[22px] p-7 ${
                    index === 0 ? "lg:col-span-2" : ""
                  }`}
                >
                  <h3 className="text-[16px] font-medium leading-snug text-white">
                    {block.title}
                  </h3>
                  <p className="text-[14px] font-light leading-[1.65] text-white/60">
                    {block.body}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={160} className="mt-8 flex justify-center">
            <a
              href="/security"
              className="group inline-flex h-11 items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 text-[13px] font-medium text-white no-underline transition-all hover:border-white/30 hover:bg-white/[0.08]"
            >
              Read how we handle your data
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </Reveal>
        </div>
      </section>

      <section id="pricing" className="relative scroll-mt-24 px-6 py-24 sm:px-10 sm:py-28 lg:px-12">
        <div className="relative mx-auto max-w-[1000px]">
          <Reveal className="mb-10 flex flex-col items-center gap-3 text-center">
            <span className="v2-print-label">Pricing</span>
            <h2
              className="v2-print-display max-w-[28ch] text-white"
              style={{ fontSize: "clamp(26px, 3.2vw, 40px)", lineHeight: 1.2 }}
            >
              One price per seat.
              <span className="hidden lg:inline"> </span>
              <span className="block lg:inline text-white/45">Max-plan access behind it.</span>
            </h2>
          </Reveal>

          <Reveal delay={100} className="mt-10">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-5">
              <div className="v2-shine v2-shine--gold v2-glass-panel--gold flex flex-col gap-5 rounded-[22px] p-7 sm:p-8">
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span
                      className="v2-print-display text-white"
                      style={{ fontSize: "clamp(40px, 5vw, 56px)", lineHeight: 1 }}
                    >
                      $49
                    </span>
                    <span className="text-[15px] font-light text-white/55">/seat/mo</span>
                  </div>
                  <p className="mt-2 text-[13.5px] font-light text-white/60">
                    Or $39/seat/mo billed annually.
                  </p>
                </div>
                <p className="text-[15px] font-light leading-[1.7] text-white/70">
                  Individually, this level of access is our Max plan at $89/mo.
                  On Team, every seat gets the same unlimited agents, unlimited
                  accounts, and unlimited usage for $49.
                </p>
                <div className="mt-auto flex flex-col gap-3">
                  <a
                    href="https://app.unabyss.com/register"
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-white px-5 text-[14px] font-medium text-black transition-all hover:bg-white/90"
                  >
                    Start free
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                  <p className="text-center text-[13px] font-light text-white/55">
                    Already on Pro, Max, or a trial?{" "}
                    <a
                      href="https://app.unabyss.com/settings/billing"
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium text-white/85 underline underline-offset-2 hover:text-white"
                    >
                      Set up your team
                    </a>
                  </p>
                </div>
              </div>

              <div className="v2-shine v2-shine--light v2-card-glass flex flex-col gap-4 rounded-[22px] p-7 sm:p-8">
                <h3 className="text-[17px] font-medium leading-snug text-white">
                  How seats work
                </h3>
                <ul className="flex flex-col gap-3">
                  {[
                    "Buy your seats, then invite - so your bill never surprises you.",
                    "Add seats whenever you hire; remove a member and the seat frees up.",
                    "Minimum of 3 seats.",
                    "Monthly or annual, your choice at checkout.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-0.5 inline-flex size-[18px] shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-white/80">
                        <Check className="size-3" strokeWidth={2.5} />
                      </span>
                      <span className="text-[14.5px] font-light leading-[1.6] text-white/70">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-auto text-[13px] font-light leading-[1.6] text-white/45">
                  Save up to 20% on annual billing. Every plan starts with a
                  7-day free trial.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="faq" className="relative px-6 py-24 sm:px-10 sm:py-28 lg:px-12">
        <div className="relative mx-auto max-w-[860px]">
          <Reveal className="mb-10 flex flex-col items-center gap-3 text-center">
            <span className="v2-print-label">FAQ</span>
            <h2
              className="v2-print-display max-w-[20ch] text-white"
              style={{ fontSize: "clamp(26px, 3.2vw, 40px)", lineHeight: 1.2 }}
            >
              Questions teams ask
            </h2>
          </Reveal>

          <Reveal>
            <TeamsFAQ />
          </Reveal>
        </div>
      </section>

      <section className="relative px-6 pb-24 pt-16 sm:px-10 lg:px-12">
        <div className="mx-auto max-w-[1100px]">
          <Reveal>
            <div className="v2-shine v2-shine--gold v2-glass-panel--gold relative isolate overflow-hidden rounded-[26px]">
              <div className="flex flex-col gap-8 px-6 py-12 sm:px-12 sm:py-14 lg:flex-row lg:items-center lg:justify-between lg:gap-14">
                <div className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left">
                  <h2
                    className="v2-print-display max-w-[26ch] text-white"
                    style={{ fontSize: "clamp(22px, 2.5vw, 30px)", lineHeight: 1.2 }}
                  >
                    Get your team out of the re-briefing business
                  </h2>
                  <p className="max-w-[52ch] text-[16px] font-light leading-[1.7] text-white/65 sm:text-[17px]">
                    Start with your own context and see what your next AI
                    conversation already knows. When it&rsquo;s obvious, put the
                    rest of the team on it - setup is a source and a minute per
                    person.
                  </p>
                </div>
                <div className="cta-glow w-full shrink-0 sm:w-auto">
                  <span className="cta-glow__eyebrow">A minute per person</span>
                  <a
                    href="https://app.unabyss.com/register"
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-white px-5 text-[15px] font-medium text-black no-underline transition-all hover:bg-white/90 sm:w-auto"
                  >
                    Test it out with a 7-day trial
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
