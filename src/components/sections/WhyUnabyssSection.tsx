"use client";

import type { CSSProperties, ReactNode } from "react";
import {
  ArrowUpRight,
  Brain,
  FileText,
  Hammer,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import BrandMark from "@/components/ui/BrandMark";

const reachNodes = [
  { src: "/images/tools/github.svg", x: 17.5, y: 3.3, w: 13 },
  { src: "/images/tools/grok.svg", x: 56, y: 0, w: 13 },
  { src: "/images/tools/openclaw.svg", x: 77, y: 9.5, w: 12 },
  { src: "/images/tools/opencode.svg", x: 100, y: 13.9, w: 14 },
  { src: "/images/tools/claude.svg", x: 86.4, y: 55.9, w: 12 },
  { src: "/images/tools/vs-code.svg", x: 93.6, y: 95.2, w: 17 },
  { src: "/images/tools/codex.svg", x: 62.3, y: 89.7, w: 12.5 },
  { src: "/images/tools/gemini.svg", x: 38.6, y: 100, w: 15 },
  { src: "/images/tools/chatgpt.svg", x: 22.4, y: 56.4, w: 12.5 },
  { src: "/images/tools/cursor.svg", x: 13.8, y: 88, w: 13.5 },
  { src: "/images/tools/perplexity.svg", x: 10.6, y: 30.4, w: 13.5 },
  { src: "/images/tools/slack.svg", x: 41.9, y: 18.6, w: 10 },
];

const compare = [
  { href: "/unabyss-vs-llm-memory", label: "Built-in memory", icon: Brain },
  { href: "/unabyss-vs-context-files", label: "Context files", icon: FileText },
  {
    href: "/unabyss-vs-external-knowledge",
    label: "Building your own",
    icon: Hammer,
  },
];

function ReachDiagram() {
  const lines = reachNodes.map((node, i) => (
    <line
      key={node.src}
      x1="50"
      y1="50"
      x2={node.x}
      y2={node.y}
      stroke={`url(#ub-reach-grad-${i})`}
    />
  ));

  return (
    <div className="v2-reach" aria-hidden="true">
      <svg
        className="v2-reach__lines"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          {reachNodes.map((node, i) => {
            const gid = `ub-reach-grad-${i}`;

            return (
              <linearGradient
                key={gid}
                id={gid}
                gradientUnits="userSpaceOnUse"
                x1="50"
                y1="50"
                x2={node.x}
                y2={node.y}
              >
                <stop offset="0" stopColor="rgba(224, 166, 90, 0.4)" />
                <stop offset="0.5" stopColor="rgba(224, 166, 90, 0.28)" />
                <stop offset="1" stopColor="rgba(224, 166, 90, 0)" />
              </linearGradient>
            );
          })}
        </defs>
        {lines}
      </svg>

      {reachNodes.map((node) => (
        <span
          key={node.src}
          className="v2-reach__node"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            width: `${node.w}cqw`,
          }}
        >
          <img src={node.src} alt="" loading="lazy" draggable={false} />
        </span>
      ))}

      <span className="v2-reach__hub">
        <BrandMark />
      </span>
    </div>
  );
}

function ReachVisual() {
  return (
    <div className="v2-why-visual v2-why-visual--reach">
      <ReachDiagram />
    </div>
  );
}

function WindowVisual({
  title,
  live,
  children,
}: {
  title: string;
  live?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="v2-why-visual">
      <div className="v2-win" aria-hidden="true">
        <div className="v2-win__head">
          <span className="v2-win__icon">
            <BrandMark className="size-3.5" />
          </span>
          <span className="v2-win__title">{title}</span>
          {live ? (
            <span className="v2-win__pill v2-win__pill--live">
              <span className="v2-win__pill-dot" />
              In sync
            </span>
          ) : null}
        </div>
        <div className="v2-win__body">{children}</div>
      </div>
    </div>
  );
}

function LiveWindow() {
  return (
    <WindowVisual title="Your context" live>
      <div className="v2-win__body--list">
        <span className="v2-lrow">
          <span className="v2-lrow__ic">
            <img src="/images/tools/slack.svg" alt="" loading="lazy" />
          </span>
          <span className="v2-lrow__bar" />
          <span className="v2-stamp">just now</span>
        </span>
        <span className="v2-lrow">
          <span className="v2-lrow__ic">
            <img src="/images/tools/gmail.svg" alt="" loading="lazy" />
          </span>
          <span className="v2-lrow__bar v2-lrow__bar--short" />
          <span className="v2-stamp">2 min ago</span>
        </span>
      </div>
    </WindowVisual>
  );
}

function TaggedWindow() {
  return (
    <WindowVisual title="One line, tagged">
      <p className="v2-rline">“Q3 launch ships Oct 24”</p>
      <div className="v2-chips">
        <span className="v2-chip">topic: launch</span>
        <span className="v2-chip v2-chip--gold">confidential</span>
        <span className="v2-chip">source: Slack</span>
        <span className="v2-chip">work</span>
      </div>
    </WindowVisual>
  );
}

const plugAgents = [
  { name: "Claude", src: "/images/hero/claude-mark.svg", dark: false, order: 0 },
  { name: "Cursor", src: "/images/tools/cursor.svg", dark: true, order: 2 },
  { name: "ChatGPT", src: "/images/tools/chatgpt.svg", dark: true, order: 1 },
];

function YoursPlug() {
  return (
    <div className="v2-why-visual">
      <div
        className="v2-demo v2-demo--hub active"
        style={{ "--loop": "7500ms" } as CSSProperties}
        aria-hidden="true"
      >
        <div className="v2-hub">
          <span className="v2-hub__icon">
            <BrandMark />
          </span>
          <span className="v2-hub__label">Unabyss · MCP</span>
          <span className="v2-hub__badge">You own it</span>
        </div>

        <div className="v2-wires">
          {[0, 2, 1].map((order) => (
            <span
              key={order}
              className="v2-wire"
              style={{ "--order": order } as CSSProperties}
            >
              <span className="v2-wire__pulse" />
            </span>
          ))}
        </div>

        <div className="v2-agents">
          {plugAgents.map((agent) => (
            <div
              key={agent.name}
              className={`v2-agent${agent.dark ? " v2-agent--dark" : ""}`}
              style={{ "--order": agent.order } as CSSProperties}
            >
              <span className="v2-agent__icon">
                <img src={agent.src} alt="" loading="lazy" />
              </span>
              <span className="v2-agent__name">{agent.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const cardText = "flex flex-1 flex-col gap-2";

export default function WhyUnabyssSection() {
  return (
    <section className="relative px-6 py-24 sm:px-10 sm:py-32 lg:px-12">
      <div className="relative mx-auto max-w-[1100px]">
        <Reveal className="mb-12 flex flex-col items-center text-center">
          <span className="v2-print-label">Why Unabyss</span>
          <h2
            className="v2-print-display mt-5 max-w-[22ch] text-white"
            style={{ fontSize: "clamp(30px, 4vw, 48px)", lineHeight: 1.2 }}
          >
            <span className="block text-white/45">Not memory. Not an md. file.</span>
            <span className="block text-white">A context you own.</span>
          </h2>
          <p className="mt-5 max-w-[60ch] text-[15px] font-light leading-[1.7] text-white/65">
            Built-in memory only works inside the tool that made it - it
            can&apos;t reach your other AIs. A context file is frozen the
            moment you write it. Unabyss is different on every count:
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
            <div className="v2-shine v2-shine--light v2-card-glass group flex overflow-hidden rounded-[18px] transition-colors col-span-1 flex-col sm:col-span-2 sm:flex-row sm:items-center lg:col-span-4">
              <div className="shrink-0 sm:w-[46%]">
                <ReachVisual />
              </div>
              <div className={`${cardText} justify-center px-6 pb-6 pt-1 sm:py-6 sm:pl-2 sm:pr-6`}>
                <h3 className="text-[19px] font-medium leading-[1.3] text-white/92 sm:text-[21px]">
                  It reaches every tool you use
                </h3>
                <p className="text-[13.5px] font-light leading-[1.6] text-white/60">
                  No silos - the same context follows you into Claude, ChatGPT,
                  Cursor and the rest.
                </p>
              </div>
            </div>

            <div className="v2-shine v2-shine--light v2-card-glass group flex overflow-hidden rounded-[18px] transition-colors col-span-1 flex-col lg:col-span-2">
              <LiveWindow />
              <div className={`${cardText} px-6 pb-6 pt-1`}>
                <h3 className="text-[19px] font-medium leading-[1.3] text-white/92 sm:text-[21px]">
                  It stays live
                </h3>
                <p className="text-[13.5px] font-light leading-[1.6] text-white/60">
                  Connected to your real sources, so it is never a stale
                  snapshot.
                </p>
              </div>
            </div>

            <div className="v2-shine v2-shine--light v2-card-glass group flex overflow-hidden rounded-[18px] transition-colors col-span-1 flex-col lg:col-span-2">
              <TaggedWindow />
              <div className={`${cardText} px-6 pb-6 pt-1`}>
                <h3 className="text-[19px] font-medium leading-[1.3] text-white/92 sm:text-[21px]">
                  It&apos;s richer
                </h3>
                <p className="text-[13.5px] font-light leading-[1.6] text-white/60">
                  Others treat your context as a flat dump. Unabyss structures
                  it - tagged by topic, sensitivity, and source - and pulls
                  only the relevant slice.
                </p>
              </div>
            </div>

            <div className="v2-shine v2-shine--light v2-card-glass group flex overflow-hidden rounded-[18px] transition-colors col-span-1 flex-col sm:col-span-2 sm:flex-row sm:items-center lg:col-span-4">
              <div className="shrink-0 sm:w-[46%]">
                <YoursPlug />
              </div>
              <div className={`${cardText} justify-center px-6 pb-6 pt-1 sm:py-6 sm:pl-2 sm:pr-6`}>
                <h3 className="text-[19px] font-medium leading-[1.3] text-white/92 sm:text-[21px]">
                  It&apos;s yours
                </h3>
                <p className="text-[13.5px] font-light leading-[1.6] text-white/60">
                  A layer you own, not memory locked inside one vendor. Export
                  it, move it between models, or take it with you - your
                  context stays yours no matter which AI you use next.
                </p>
                <div className="mt-3">
                  <a
                    href="https://app.unabyss.com/register"
                    className="group inline-flex h-11 shrink-0 items-center justify-center gap-1.5 rounded-full bg-white px-5 text-[13px] font-medium text-black transition-all hover:bg-white/90"
                  >
                    Start now
                    <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-span-1 sm:col-span-2 lg:col-span-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex items-center justify-center sm:justify-start">
                  <p className="text-center text-[16px] font-medium leading-snug text-white/85 sm:text-left">
                    Compare Unabyss with
                  </p>
                </div>

                {compare.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      className="v2-shine v2-shine--light v2-card-glass group flex items-center gap-3 rounded-[16px] px-5 py-4 no-underline transition-colors"
                    >
                      <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-[11px] text-white/80 transition-colors group-hover:text-white">
                        <Icon className="size-[17px]" />
                      </span>
                      <span className="flex-1 text-[13.5px] font-medium text-white/90">
                        {item.label}
                      </span>
                      <ArrowUpRight className="size-4 text-white/40 transition-colors group-hover:text-white" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
