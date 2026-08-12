"use client";

import { type ReactNode } from "react";
import { type Tool } from "@/data/tools";

type MarqueeProps = {
  tools: Tool[];
  duration?: string;
  counter?: string;
  children?: ReactNode;
};

export function Marquee({ tools, duration = "55s", counter, children }: MarqueeProps) {
  const loop = [...tools, ...tools];

  return (
    <div className="mx-auto mt-16 flex w-full min-w-0 max-w-[1100px] flex-col items-center gap-4">
      <div className="v2-shine v2-glass-panel relative flex w-full min-w-0 flex-col gap-3 overflow-hidden rounded-2xl p-3 sm:flex-row sm:items-center sm:gap-5 sm:px-6 sm:py-3">
        <span className="w-full shrink-0 text-center text-[10.5px] font-medium uppercase tracking-[0.22em] text-white/55 sm:w-auto sm:text-left">
          Works with
        </span>
        <div className="w-full min-w-0 flex-1">
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div
              className="v2-marquee-track flex w-max items-center gap-6"
              style={{ "--marquee-duration": duration } as React.CSSProperties}
            >
              {loop.map((tool, index) => (
                <div key={`${tool.name}-${index}`} className="flex shrink-0 items-center gap-3 pr-2">
                  <span
                    title={tool.name}
                    aria-label={tool.name}
                    className="inline-flex size-9 shrink-0 items-center justify-center rounded-[10px] border border-white/10 bg-white/[0.04] font-medium text-[13px] ring-1 ring-inset ring-white/[0.03]"
                    style={{ "--brand": tool.brand } as React.CSSProperties}
                  >
                    <img
                      src={tool.src}
                      alt=""
                      aria-hidden="true"
                      className="size-[62%] object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </span>
                  <span className="whitespace-nowrap text-[14px] font-light text-foreground/70">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {counter ? (
          <p className="shrink-0 whitespace-nowrap text-center text-[10px] font-medium uppercase tracking-[0.22em] text-white/45 sm:text-[10.5px]">
            <span className="text-white/80">{counter}</span> items synced
          </p>
        ) : null}
      </div>
      {children}
    </div>
  );
}
