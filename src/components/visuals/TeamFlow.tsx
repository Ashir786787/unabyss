"use client";

import { useEffect, useRef, useState } from "react";

const WIRES = [
  "M 88 108 L 88 358 Q 88 372 102 372 L 443 372 Q 457 372 457 386 L 457 414",
  "M 258 348 L 258 358 Q 258 372 272 372 L 443 372 Q 457 372 457 386 L 457 414",
  "M 398 238 L 398 358 Q 398 372 412 372 L 505 372 Q 519 372 519 386 L 519 414",
  "M 658 148 L 658 358 Q 658 372 644 372 L 595 372 Q 581 372 581 386 L 581 414",
  "M 848 308 L 848 358 Q 848 372 834 372 L 595 372 Q 581 372 581 386 L 581 414",
  "M 1008 108 L 1008 358 Q 1008 372 994 372 L 657 372 Q 643 372 643 386 L 643 414",
];

const DOT_DELAYS = [0, 0.42, 0.84, 1.26, 1.68, 2.1];

const GROUPS: {
  left: number;
  top: number;
  initials: string;
  name: string;
  role: string;
  apps: { name: string; src: string }[];
}[] = [
  {
    left: 0,
    top: 0,
    initials: "MS",
    name: "Michael",
    role: "Management",
    apps: [
      { name: "Gmail", src: "/images/tools/gmail.svg" },
      { name: "Google Calendar", src: "/images/tools/google-calendar.svg" },
      { name: "Slack", src: "/images/tools/slack.svg" },
    ],
  },
  {
    left: 310,
    top: 130,
    initials: "DS",
    name: "Dwight",
    role: "Sales",
    apps: [
      { name: "Gmail", src: "/images/tools/gmail.svg" },
      { name: "HubSpot", src: "/images/tools/hubspot.svg" },
      { name: "Slack", src: "/images/tools/slack.svg" },
    ],
  },
  {
    left: 570,
    top: 40,
    initials: "JH",
    name: "Jim",
    role: "Sales",
    apps: [
      { name: "Gmail", src: "/images/tools/gmail.svg" },
      { name: "HubSpot", src: "/images/tools/hubspot.svg" },
      { name: "Google Calendar", src: "/images/tools/google-calendar.svg" },
    ],
  },
  {
    left: 920,
    top: 0,
    initials: "PB",
    name: "Pam",
    role: "Office admin",
    apps: [
      { name: "Gmail", src: "/images/tools/gmail.svg" },
      { name: "Google Drive", src: "/images/tools/google-drive.svg" },
      { name: "Notion", src: "/images/tools/notion.svg" },
    ],
  },
  {
    left: 170,
    top: 240,
    initials: "OM",
    name: "Oscar",
    role: "Accounting",
    apps: [
      { name: "Gmail", src: "/images/tools/gmail.svg" },
      { name: "Google Sheets", src: "/images/tools/google-sheets.svg" },
      { name: "Google Drive", src: "/images/tools/google-drive.svg" },
    ],
  },
  {
    left: 760,
    top: 200,
    initials: "AM",
    name: "Angela",
    role: "Accounting",
    apps: [
      { name: "Google Sheets", src: "/images/tools/google-sheets.svg" },
      { name: "Slack", src: "/images/tools/slack.svg" },
    ],
  },
];

const AGENTS = [
  { name: "Claude", src: "/images/hero/claude-mark.svg" },
  { name: "ChatGPT", src: "/images/tools/chatgpt.svg" },
  { name: "Cursor", src: "/images/tools/cursor.svg" },
];

export default function TeamFlow() {
  const frameRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) {
      return;
    }
    const update = () => {
      const width = frame.getBoundingClientRect().width;
      setScale(Math.min(1, width / 1100));
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(frame);
    return () => observer.disconnect();
  }, []);

  const frameHeight = Math.round(500 * scale);

  return (
    <div className="flex w-full flex-col items-center">
      <div
        ref={frameRef}
        className="relative w-full overflow-hidden"
        style={{ height: frameHeight }}
      >
        <div
          className="absolute left-0 top-0"
          style={
            {
              width: 1100,
              height: 500,
              transform: `scale(${scale})`,
              transformOrigin: "0 0",
              "--chip": "38px",
              "--chip-gap": "7px",
            } as React.CSSProperties
          }
        >
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 1100 500"
            aria-hidden="true"
            style={{ overflow: "visible" }}
          >
            {WIRES.map((d) => (
              <path
                key={d}
                d={d}
                fill="none"
                stroke="rgba(255,255,255,0.16)"
                strokeWidth={1}
                strokeLinecap="round"
              />
            ))}
          </svg>

          {WIRES.map((d, i) => (
            <span
              key={d}
              aria-hidden="true"
              className="team-flow-dot"
              style={{
                offsetPath: `path("${d}")`,
                animationDelay: `${DOT_DELAYS[i]}s`,
              }}
            />
          ))}

          {GROUPS.map((group) => (
            <div
              key={group.initials}
              className="absolute flex w-[176px] flex-col items-center"
              style={{ left: group.left, top: group.top }}
            >
              <div className="flex" style={{ gap: "var(--chip-gap)" }}>
                {group.apps.map((app) => (
                  <span
                    key={app.name}
                    title={app.name}
                    className="grid h-[var(--chip)] w-[var(--chip)] place-items-center rounded-[12px] border border-white/10 bg-white/[0.05]"
                  >
                    <img
                      src={app.src}
                      alt={app.name}
                      loading="lazy"
                      className="h-[19px] w-[19px] object-contain"
                    />
                  </span>
                ))}
              </div>

              <span
                className="block h-5 w-px"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(255,255,255,0.03), rgba(255,255,255,0.24), rgba(255,255,255,0.03))",
                }}
              />

              <div className="flex items-center gap-2.5 rounded-full border border-white/12 bg-[#100f0fe6] py-2 pl-[9px] pr-[15px]">
                <span className="grid size-[34px] flex-shrink-0 place-items-center rounded-full border border-white/14 bg-white/[0.08] text-[11px] font-medium tracking-[0.06em] text-[#ffffffd1]">
                  {group.initials}
                </span>
                <span className="flex min-w-0 flex-col">
                  <span className="whitespace-nowrap text-[13.5px] font-medium leading-[1.25] text-[#ffffffeb]">
                    {group.name}
                  </span>
                  <span className="whitespace-nowrap text-[11px] font-light leading-[1.2] text-[#ffffff7a]">
                    {group.role}
                  </span>
                </span>
              </div>
            </div>
          ))}

          <div
            className="absolute flex items-center justify-center gap-3.5 rounded-[20px]"
            style={{
              left: 419,
              top: 414,
              width: 262,
              height: 76,
              border: "1px solid var(--glass-border, rgba(255,255,255,0.1))",
              background: "var(--glass-bg, rgba(255,255,255,0.05))",
              backdropFilter:
                "blur(var(--glass-blur, 14px)) saturate(var(--glass-saturate, 140%))",
            }}
          >
            {AGENTS.map((agent) => (
              <span
                key={agent.name}
                title={agent.name}
                className="grid size-12 flex-shrink-0 place-items-center rounded-[14px] border border-white/10 bg-white/[0.04]"
              >
                <img
                  src={agent.src}
                  alt={agent.name}
                  loading="lazy"
                  className="size-6 object-contain"
                />
              </span>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-3.5 text-center text-[11.5px] font-light leading-[1.5] text-white/45">
        Every agent reads the same context. Each person&rsquo;s stays their own.
      </p>
    </div>
  );
}
