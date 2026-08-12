"use client";

import { useCallback, useRef, useState, type CSSProperties } from "react";
import {
  ArrowRight,
  Calendar,
  Check,
  FileText,
  Mail,
  Unplug,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const LOOP = 7500;

const sources = [
  { name: "Gmail", src: "/images/tools/gmail.svg" },
  { name: "Notion", src: "/images/tools/notion.svg" },
  { name: "Calendar", src: "/images/tools/google-calendar.svg" },
  { name: "GitHub", src: "/images/tools/github.svg" },
  { name: "Linear", src: "/images/tools/linear.svg" },
];

const fragments = [
  { icon: Mail, text: "Re: Q3 roadmap — shipping the ingest rewrite" },
  { icon: FileText, text: "PRD: unify context under one envelope" },
  { icon: Calendar, text: "Weekly sync · Growth · Thu 10:00" },
];

const tags = ["Role: Founder", "Project: Ingest", "Focus: Growth", "Stack: MCP"];

const agents = [
  { name: "Claude", src: "/images/hero/claude-mark.svg", dark: false, order: 0 },
  { name: "Cursor", src: "/images/tools/cursor.svg", dark: true, order: 2 },
  { name: "ChatGPT", src: "/images/tools/chatgpt.svg", dark: false, order: 1 },
];

const cards = [
  {
    time: "0:30",
    title: "Connect your sources once",
    text: "Link the tools where your context already lives - Slack, Gmail, Notion, Calendar, GitHub, and 20+ more.",
  },
  {
    time: "0:60",
    title: "One memory, built for you",
    text: "Everything from your connected tools becomes one memory - always up to date, no upkeep.",
  },
  {
    time: "0:90",
    title: "Every AI tool pulls it over MCP",
    text: "Claude, ChatGPT, Cursor and the rest all work from the same picture - no re-explaining.",
  },
];

function HubGrid() {
  const dots = [];

  for (let y = 0; y < 4; y += 1) {
    for (let x = 0; x < 4; x += 1) {
      const cx = 4 + x * 8;
      const cy = 4 + y * 8;
      const dur = 1.3 + ((x * 7 + y * 3) % 20) / 10;
      const delay = -(((x * 3 + y * 5) % 35) + 5) / 10;

      dots.push(
        <circle
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          r="3"
          fill="#fff"
          style={{ "--dur": `${dur}s`, "--delay": `${delay}s` } as CSSProperties}
        />,
      );
    }
  }

  return (
    <svg className="v2-hub-grid" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
      {dots}
    </svg>
  );
}

export default function SharedMemorySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [doneSet, setDoneSet] = useState<Set<number>>(() => new Set());
  const activeRef = useRef(0);

  const activate = useCallback((index: number) => {
    if (index === activeRef.current) {
      return;
    }

    setDoneSet((prev) => {
      const next = new Set(prev);
      next.add(activeRef.current);
      return next;
    });
    activeRef.current = index;
    setActiveIndex(index);
  }, []);

  const renderDemo = (index: number, cls: string) => {
    if (index === 0) {
      return (
        <div className={`v2-demo v2-demo--list${cls}`} aria-hidden="true">
          <div className="v2-list">
            {sources.map((source, i) => (
              <div
                key={source.name}
                className="row"
                style={{ "--i": i } as CSSProperties}
              >
                <div className="row__icon">
                  <img src={source.src} alt="" loading="lazy" />
                  <span className="row__dot" />
                </div>
                <span className="row__name">{source.name}</span>
                <span className="row__status">Connected</span>
              </div>
            ))}
          </div>

          <span className="v2-cursor">
            <svg viewBox="0 0 24 24" width="17" height="17">
              <path
                d="M5 2.5 L5 19.5 L9.3 15.4 L12 21.2 L14.4 20.1 L11.7 14.4 L17.4 14.4 Z"
                fill="#fff"
                stroke="rgba(0,0,0,0.55)"
                strokeWidth="1.1"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      );
    }

    if (index === 1) {
      return (
        <div className={`v2-demo v2-demo--raw${cls}`} aria-hidden="true">
          <div className="v2-raw">
            {fragments.map((fragment) => {
              const Icon = fragment.icon;

              return (
                <div key={fragment.text} className="v2-frag">
                  <span className="v2-frag__icon">
                    <Icon className="size-3" />
                  </span>
                  <span className="v2-frag__text">{fragment.text}</span>
                </div>
              );
            })}
          </div>

          <div className="v2-profile">
            <div className="v2-profile__head">
              <span className="v2-profile__dot" />
              <span className="v2-profile__title">Structured profile</span>
            </div>
            <div className="v2-profile__tags">
              <span className="v2-thinking">
                <span className="v2-thinking__bar" />
                <span className="v2-thinking__bar" />
              </span>
              {tags.map((tag, i) => (
                <span
                  key={tag}
                  className="v2-tag"
                  style={{ "--i": i } as CSSProperties}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className={`v2-demo v2-demo--hub${cls}`} aria-hidden="true">
        <div className="v2-hub">
          <span className="v2-hub__icon">
            <HubGrid />
          </span>
          <span className="v2-hub__label">Unabyss · MCP</span>
          <span className="v2-hub__badge">context layer</span>
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
          {agents.map((agent) => (
            <div
              key={agent.name}
              className={`v2-agent${agent.dark ? " v2-agent--dark" : ""}`}
              style={{ "--order": agent.order } as CSSProperties}
            >
              <span className="v2-agent__icon">
                <img src={agent.src} alt="" loading="lazy" />
              </span>
              <span className="v2-agent__name">{agent.name}</span>
              <span className="v2-agent__state">
                <span className="v2-agent__status v2-agent__status--off">
                  <Unplug className="size-2.5" />
                  Isolated
                </span>
                <span className="v2-agent__status v2-agent__status--on">
                  <Check className="size-2.5" />
                  Context ready
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section
      id="how-it-works"
      className="relative px-6 py-24 sm:px-10 sm:py-32 lg:px-12"
    >
      <div className="relative mx-auto max-w-[1100px]">
        <Reveal className="mb-12 flex flex-col items-center text-center">
          <span className="v2-print-label">How it works</span>
          <h2
            className="v2-print-display mt-5 max-w-[22ch] text-white"
            style={{
              fontSize: "clamp(30px, 4vw, 48px)",
              lineHeight: 1.2,
            }}
          >
            Connect once. Every tool works with and builds the same memory.
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div
            className="v2-slider"
            style={{ "--loop": `${LOOP}ms` } as CSSProperties}
            onMouseLeave={() => activate(0)}
          >
            <div className="row">
              {cards.map((card, index) => {
                const isActive = index === activeIndex;
                const isDone = doneSet.has(index);

                const cls = `${isActive ? " active" : ""}${
                  isDone ? " done" : ""
                }`;

                return (
                  <button
                    key={card.title}
                    type="button"
                    className={`card${cls}`}
                    aria-label={card.title}
                    aria-current={isActive ? "true" : "false"}
                    onMouseEnter={() => activate(index)}
                    onClick={() => activate(index)}
                  >
                    <div className="card__graphic">
                      <div className="card__graphic-inner">
                        {renderDemo(index, cls)}
                      </div>
                    </div>

                    <div className="card__body">
                      <span className="card__time">{card.time}</span>
                      <h3 className="card__title">{card.title}</h3>
                      <p className="card__text">{card.text}</p>
                    </div>

                    <div className="card__bar">
                      <span className="card__bar-fill" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        <Reveal delay={220} className="mt-8 flex justify-center">
          <a
            href="/how-it-works"
            className="group inline-flex items-center gap-1.5 text-[13.5px] font-medium text-white/70 no-underline transition-colors hover:text-white"
          >
            See how it works in detail
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
