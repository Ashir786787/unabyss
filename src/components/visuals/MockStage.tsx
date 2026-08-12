"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  AudioLines,
  Check,
  ChevronDown,
  Clock,
  Forward,
  Loader2,
  Mic,
  PanelLeft,
  Plus,
  Search,
} from "lucide-react";
import type { AnswerBlock, Demo, TraceStep } from "@/data/demos";

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

type TraceTiming = {
  step: TraceStep;
  typeMs: number;
  reqMs: number;
  readMs: number;
  doneMs: number;
  start: number;
};

type AnswerTiming = {
  block: AnswerBlock;
  start: number;
};

type Timeline = {
  composerMs: number;
  questionStart: number;
  summaryStart: number;
  summaryMs: number;
  traces: TraceTiming[];
  answersStart: number;
  answers: AnswerTiming[];
  listItemStep: number;
};

function buildTimeline(demo: Demo): Timeline {
  const composerMs = clamp(demo.question.length * 26, 1200, 7000);
  const questionStart = composerMs;
  const summaryStart = questionStart + 400;
  const summaryMs = clamp(demo.summary.length * 24, 900, 3600);

  let cursor = summaryStart + summaryMs;
  const traces = demo.trace.map((step) => {
    const delay = Math.max(350, step.delay);
    const typeMs = Math.min(clamp(step.text.length * 22, 350, 2200), delay * 0.5);
    let reqMs = 0;
    if (step.request) {
      reqMs = Math.min(clamp(step.request.length * 22, 400, 2600), delay * 0.6);
    }
    const readMs = step.resultText ? Math.max(350, delay - typeMs - reqMs) : 0;
    const doneMs = step.resultText === "completed" ? Math.min(650, readMs) : readMs;
    const seg = { step, typeMs, reqMs, readMs, doneMs, start: cursor };
    cursor += delay;
    return seg;
  });

  const answersStart = cursor;
  const answers = demo.answerBlocks.map((block) => {
    const seg = { block, start: cursor };
    cursor += block.items
      ? 500 + block.items.length * 220
      : clamp((block.text ?? "").length * 20, 600, 3200);
    return seg;
  });

  return {
    composerMs,
    questionStart,
    summaryStart,
    summaryMs,
    traces,
    answersStart,
    answers,
    listItemStep: 220,
  };
}

function floorClamped(value: number, max: number) {
  if (value <= 0) return 0;
  if (value >= max) return max;
  return Math.floor(value);
}

function parseInline(text: string) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, index) => ({
    bold: index % 2 === 1,
    text: part,
  }));
}

function Burst({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" className={className}>
      <g fill="currentColor">
        {Array.from({ length: 12 }, (_, index) => (
          <ellipse
            key={index}
            cx="50"
            cy="27"
            rx="4.6"
            ry="22"
            transform={`rotate(${index * 30} 50 50)`}
          />
        ))}
      </g>
    </svg>
  );
}

function TraceIcon({ icon }: { icon: TraceStep["icon"] }) {
  if (icon === "find") {
    return (
      <Search
        className="size-[1.4cqw]"
        strokeWidth={1.9}
        aria-hidden="true"
      />
    );
  }
  if (icon === "reason") {
    return (
      <Clock className="size-[1.4cqw]" strokeWidth={1.8} aria-hidden="true" />
    );
  }
  return <Burst className="mock-burst size-[1.5cqw]" />;
}

type MockStageProps = {
  demo: Demo;
};

export default function MockStage({ demo }: MockStageProps) {
  const timeline = useMemo(() => buildTimeline(demo), [demo]);
  const [elapsed, setElapsed] = useState(0);
  const startRef = useRef<number>(0);

  useEffect(() => {
    startRef.current = performance.now();

    let frame = 0;
    const tick = (now: number) => {
      const next = (now - startRef.current) % demo.videoMs;
      setElapsed(next);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [demo.id, demo.videoMs]);

  const { composerMs, questionStart, summaryStart, summaryMs, traces, answersStart, answers, listItemStep } =
    timeline;

  const composerTyping = elapsed < composerMs;
  const composerChars = composerTyping
    ? floorClamped((elapsed / composerMs) * demo.question.length, demo.question.length)
    : demo.question.length;

  const showQuestion = elapsed >= questionStart;

  const summaryChars =
    elapsed >= summaryStart
      ? floorClamped(((elapsed - summaryStart) / summaryMs) * demo.summary.length, demo.summary.length)
      : 0;

  const showAnswers = elapsed >= answersStart;

  const typing = (seg: TraceTiming) => {
    if (elapsed <= seg.start) return 0;
    const inType = elapsed - seg.start;
    if (inType >= seg.typeMs) return seg.step.text.length;
    return floorClamped((inType / seg.typeMs) * seg.step.text.length, seg.step.text.length);
  };

  const reqTyping = (seg: TraceTiming) => {
    if (!seg.step.request) return 0;
    const inReq = elapsed - seg.start - seg.typeMs;
    if (inReq <= 0) return 0;
    if (inReq >= seg.reqMs) return seg.step.request.length;
    return floorClamped((inReq / seg.reqMs) * seg.step.request.length, seg.step.request.length);
  };

  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="flex flex-none items-center justify-between px-[1.7cqw] py-[1.5cqw]">
        <div className="flex items-center gap-[1.5cqw]">
          <span className="flex items-center gap-[0.85cqw]">
            <i className="size-[1.17cqw] rounded-full" style={{ background: "#FF5F57" }} />
            <i className="size-[1.17cqw] rounded-full" style={{ background: "#FEBC2E" }} />
            <i className="size-[1.17cqw] rounded-full" style={{ background: "#28C840" }} />
          </span>
          <PanelLeft className="size-[1.76cqw] text-[#9c9a92]" />
          <button
            type="button"
            tabIndex={-1}
            className="ml-[0.4cqw] flex items-center gap-[0.5cqw] rounded-[0.8cqw] bg-transparent px-[0.9cqw] py-[0.4cqw] text-[1.4cqw] font-normal text-[#ecebe4]"
          >
            {demo.chatTitle}
            <ChevronDown className="size-[1.24cqw] text-[#9c9a92]" />
          </button>
        </div>
        <Forward className="size-[1.76cqw] text-[#9c9a92]" />
      </div>

      <div className="flex h-full min-h-0 flex-1 flex-col overflow-hidden">
        <div className="min-h-0 flex-1 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0,#000_7%)]">
          <div className="mx-auto flex h-full w-full max-w-[62cqw] flex-col justify-end px-[0.2cqw] pb-[2.2cqw] [font-size:1.5cqw] [line-height:1.62] [color:var(--mock-text)]">
            <div className="mock-rise flex flex-col gap-[2cqw] pb-[0.5cqw]">
              {showQuestion ? (
                <div className="u-row flex justify-end">
                  <div className="max-w-[80%] rounded-[1.6cqw_1.6cqw_0.5cqw_1.6cqw] border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.06)] px-[1.5cqw] py-[1cqw] text-[1.5cqw] font-light leading-[1.5] [color:var(--mock-text)]">
                    {demo.question}
                  </div>
                </div>
              ) : null}

              {summaryChars > 0 ? (
                <div className="a-block flex flex-col gap-[1.1cqw]">
                  <p className="m-0 min-w-0 text-[1.5cqw] font-light leading-[1.62] [color:var(--mock-text)] [overflow-wrap:anywhere]">
                    {demo.summary.slice(0, summaryChars)}
                    {summaryChars < demo.summary.length ? (
                      <span className="mock-caret" />
                    ) : null}
                  </p>
                  <span className="mock-burst a-mark mock-burst-slow inline-flex size-[1.9cqw] text-[#d97757]" />
                </div>
              ) : null}

              {traces.map((seg) => {
                const visible = elapsed >= seg.start;
                if (!visible) return null;
                const typed = typing(seg);
                const requestTyped = reqTyping(seg);
                const inRead = elapsed >= seg.start + seg.typeMs + seg.reqMs;
                const done = inRead && elapsed >= seg.start + seg.typeMs + seg.reqMs + seg.doneMs;
                const strong = seg.step.icon === "reason" || seg.step.icon === "tool";

                return (
                  <div key={seg.start} className="trace mock-rise flex flex-col gap-[1.15cqw]">
                    <div className="t-item flex flex-col gap-[0.5cqw]">
                      <div className="t-row flex items-start gap-[0.9cqw]">
                        <span
                          className={`flex flex-none justify-center pt-[0.2cqw] [width:1.9cqw] ${
                            seg.step.icon === "tool"
                              ? "text-[#d97757] opacity-85"
                              : "[color:var(--mock-faint)]"
                          }`}
                        >
                          <TraceIcon icon={seg.step.icon} />
                        </span>
                        <span
                          className={`text-[1.4cqw] font-light leading-[1.5] [color:var(--mock-muted)] ${
                            strong ? "font-normal [color:var(--mock-text)]" : ""
                          }`}
                        >
                          {seg.step.text.slice(0, typed)}
                          {typed < seg.step.text.length ? <span className="mock-caret" /> : null}
                        </span>
                      </div>

                      {seg.step.request && requestTyped > 0 ? (
                        <div className="ml-[1cqw] border-l border-[rgba(255,255,255,0.1)] pl-[1.7cqw]">
                          <div className="flex flex-col">
                            <div className="mb-[0.7cqw] text-[1.15cqw] font-medium [color:var(--mock-text)]">
                              Request
                            </div>
                            <div className="text-[1.15cqw] leading-[1.55] [font-family:var(--font-mono-v2),ui-monospace,monospace] [color:var(--mock-muted)] [overflow-wrap:anywhere]">
                              {seg.step.request.slice(0, requestTyped)}
                            </div>
                          </div>
                        </div>
                      ) : null}

                      {seg.step.resultText && inRead ? (
                        <div className="flex py-[0.4cqw] pl-[0.2cqw]">
                          {done ? (
                            <>
                              <Check
                                className="mr-[0.6cqw] mt-[0.1cqw] size-[1.3cqw] text-[#4ca674]"
                                strokeWidth={2.2}
                                aria-hidden="true"
                              />
                              <span className="text-[1.25cqw] [color:var(--mock-faint)]">Done</span>
                            </>
                          ) : (
                            <>
                              <Loader2
                                className="mock-spin mr-[0.6cqw] mt-[0.1cqw] size-[1.3cqw] [color:var(--mock-faint)]"
                                strokeWidth={2.2}
                                aria-hidden="true"
                              />
                              <span className="text-[1.25cqw] [color:var(--mock-faint)]">
                                {seg.step.resultText}
                              </span>
                            </>
                          )}
                        </div>
                      ) : null}
                    </div>
                  </div>
                );
              })}

              {showAnswers ? (
                <div className="a-block mock-rise flex flex-col gap-[1.1cqw]">
                  <div className="a-report flex min-w-0 flex-col gap-[1.1cqw]">
                    {answers.map(({ block, start }) => {
                      const blockVisible = elapsed >= start;
                      if (!blockVisible) return null;

                      if (block.items) {
                        const revealedCount = floorClamped(
                          (elapsed - start - 500) / listItemStep + 1,
                          block.items.length
                        );

                        const ListTag = block.kind === "ol" ? "ol" : "ul";

                        return (
                          <ListTag
                            key={start}
                            className={`m-0 pl-[2.2cqw] ${
                              block.kind === "ol" ? "list-decimal" : "list-disc"
                            }`}
                          >
                            {block.items.slice(0, revealedCount).map((item, index) => (
                              <li
                                key={index}
                                className="mock-rise my-[0.32cqw] pl-[0.4cqw] text-[1.4cqw] font-light leading-[1.62] [color:var(--mock-muted)]"
                              >
                                {parseInline(item).map((part, partIndex) =>
                                  part.bold ? (
                                    <strong
                                      key={partIndex}
                                      className="font-medium [color:var(--mock-text)]"
                                    >
                                      {part.text}
                                    </strong>
                                  ) : (
                                    <span key={partIndex}>{part.text}</span>
                                  )
                                )}
                              </li>
                            ))}
                          </ListTag>
                        );
                      }

                      const text = block.text ?? "";
                      const chars = floorClamped(((elapsed - start) / clamp(text.length * 20, 600, 3200)) * text.length, text.length);
                      const Tag =
                        block.kind === "h3"
                          ? "h3"
                          : block.kind === "h4"
                            ? "h4"
                            : "p";

                      return (
                        <Tag
                          key={start}
                          className={`m-0 leading-[1.45] [color:var(--mock-text)] ${
                            block.kind === "h3"
                              ? "text-[1.65cqw] font-semibold leading-[1.35]"
                              : block.kind === "h4"
                                ? "mt-[0.3cqw] text-[1.45cqw] font-semibold leading-[1.4]"
                                : "mt-[0.2cqw] text-[1.4cqw] font-semibold leading-[1.45]"
                          }`}
                        >
                          {text.slice(0, chars)}
                          {chars < text.length ? <span className="mock-caret" /> : null}
                        </Tag>
                      );
                    })}
                  </div>
                  <span className="mock-burst a-mark mock-burst-slow inline-flex size-[1.9cqw] text-[#d97757]" />
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <div className="flex-none px-[4cqw] pb-[1.2cqw] pt-[3cqw]">
          <div className="rounded-[1.7cqw] border border-[rgba(255,255,255,0.1)] bg-[#30302e] p-[1.6cqw] pb-[1.1cqw] [box-shadow:0_0.4cqw_1.4cqw_-0.8cqw_rgba(0,0,0,0.25)]">
            <div
              className={`min-h-[2.6cqw] pb-[1.7cqw] text-[1.5cqw] font-light [color:var(--mock-faint)] ${
                composerTyping ? "text-[#ecebe4]" : ""
              }`}
            >
              {composerTyping ? demo.question.slice(0, composerChars) : "Write a message..."}
              {composerTyping && composerChars < demo.question.length ? (
                <span className="mock-caret" />
              ) : null}
            </div>
            <div className="flex items-center justify-between">
              <Plus className="size-[1.76cqw] text-[#9c9a92]" />
              <div className="flex items-center gap-[1.4cqw]">
                <span className="flex items-center gap-[0.55cqw] text-[1.32cqw] text-[#9c9a92]">
                  <span className="text-[#ecebe4]">{demo.modelName}</span>
                  {demo.modelLevel}
                  <ChevronDown className="size-[1.24cqw] text-[#9c9a92]" />
                </span>
                <Mic className="size-[1.76cqw] text-[#9c9a92]" />
                <span className="grid size-[2.1cqw] place-items-center rounded-[0.6cqw] text-[#9c9a92]">
                  <AudioLines className="size-[1.76cqw]" />
                </span>
              </div>
            </div>
          </div>
          <p className="mx-auto mt-[1cqw] text-center text-[1.08cqw] [color:var(--mock-faint)]">
            Claude is AI and can make mistakes. Please double-check responses.
          </p>
        </div>
      </div>
    </div>
  );
}
