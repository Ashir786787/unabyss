"use client";

import { useEffect, useRef, useState } from "react";

type Logo = {
  src: string;
  name: string;
};

export const aiLogos: Logo[] = [
  { src: "/images/tools/claude.svg", name: "Claude" },
  { src: "/images/tools/chatgpt.svg", name: "ChatGPT" },
  { src: "/images/tools/gemini.svg", name: "Gemini" },
  { src: "/images/tools/vs-code.svg", name: "VS Code" },
  { src: "/images/tools/codex.svg", name: "Codex" },
  { src: "/images/tools/opencode.svg", name: "OpenCode" },
  { src: "/images/tools/perplexity.svg", name: "Perplexity" },
];

export const appLogos: Logo[] = [
  { src: "/images/tools/slack.svg", name: "Slack" },
  { src: "/images/tools/linkedin.svg", name: "LinkedIn" },
  { src: "/images/tools/google-drive.svg", name: "Google Drive" },
  { src: "/images/tools/obsidian.svg", name: "Obsidian" },
  { src: "/images/tools/gmail.svg", name: "Gmail" },
  { src: "/images/tools/google-calendar.svg", name: "Calendar" },
  { src: "/images/tools/x-twitter.svg", name: "X / Twitter" },
  { src: "/images/tools/github.svg", name: "GitHub" },
];

function shiftList(list: Logo[], offset: number) {
  return [...list.slice(offset), ...list.slice(0, offset)];
}

export const aiLogosShifted = shiftList(aiLogos, 3);

const ROTATE_MS = 2500;
const OUT_MS = 420;

export function RotatingSlot({
  logos,
  className = "",
  startDelay = 0,
}: {
  logos: Logo[];
  className?: string;
  startDelay?: number;
}) {
  const [active, setActive] = useState(0);
  const [leaving, setLeaving] = useState<number | null>(null);
  const activeRef = useRef(0);

  useEffect(() => {
    let id: number | undefined;

    const start = () => {
      id = window.setInterval(() => {
        setLeaving(activeRef.current);
        activeRef.current = (activeRef.current + 1) % logos.length;
        setActive(activeRef.current);
      }, ROTATE_MS);
    };

    const timeout = window.setTimeout(start, startDelay);

    return () => {
      window.clearTimeout(timeout);

      if (id !== undefined) {
        window.clearInterval(id);
      }
    };
  }, [logos.length, startDelay]);

  useEffect(() => {
    if (leaving === null) {
      return;
    }

    const id = window.setTimeout(() => setLeaving(null), OUT_MS);

    return () => window.clearTimeout(id);
  }, [leaving]);

  return (
    <span
      aria-live="polite"
      className={`relative inline-grid overflow-hidden align-baseline whitespace-nowrap ${className}`}
    >
      <span className="invisible col-start-1 row-start-1 inline-flex items-center gap-[0.35em] px-1">
        <span className="inline-block h-[0.8em] w-[0.8em]" />
      </span>

      <span className="col-start-1 row-start-1 inline-grid items-center justify-items-start px-1 [perspective:160px] tracking-tight">
        <img
          key={`${active}-in`}
          src={logos[active].src}
          alt={logos[active].name}
          title={logos[active].name}
          className="v2-rotating-in col-start-1 row-start-1 inline-block h-[0.8em] w-[0.8em] shrink-0 object-contain"
          loading="lazy"
          decoding="async"
        />
        {leaving !== null ? (
          <img
            key={`${leaving}-out`}
            src={logos[leaving].src}
            alt=""
            className="v2-rotating-out col-start-1 row-start-1 inline-block h-[0.8em] w-[0.8em] shrink-0 object-contain"
            loading="lazy"
            decoding="async"
          />
        ) : null}
        <span className="sr-only">{logos[active].name}</span>
      </span>
    </span>
  );
}
