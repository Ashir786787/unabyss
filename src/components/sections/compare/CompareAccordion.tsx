"use client";

import { useState } from "react";
import { ArrowUpRight, Plus } from "lucide-react";
import { compareAccordion } from "@/data/compare-pages";

export default function CompareAccordion({
  defaultIndex,
}: {
  defaultIndex?: number;
}) {
  const [openIndex, setOpenIndex] = useState(defaultIndex ?? 0);

  return (
    <div className="flex flex-col gap-3">
      {compareAccordion.map((item, index) => {
        const open = openIndex === index;

        return (
          <div
            key={item.title}
            className="v2-shine v2-shine--light v2-glass-panel rounded-[16px]"
          >
            <button
              type="button"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? -1 : index)}
              className="flex w-full cursor-pointer items-center justify-between gap-4 rounded-[16px] px-5 py-4 text-left"
            >
              <span
                className={`text-[16px] font-normal transition-colors ${
                  open ? "text-white" : "text-white/80 hover:text-white"
                }`}
              >
                {item.title}
              </span>
              <span
                className={`flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full border border-white/14 text-white/55 transition-[transform,colors] duration-200 ${
                  open
                    ? "rotate-45 border-[#e8be7666] text-[var(--gold-bright)]"
                    : ""
                }`}
                aria-hidden="true"
              >
                <Plus className="size-3.5" />
              </span>
            </button>

            {open ? (
              <div className="px-5 pb-5 sm:px-6">
                <p className="max-w-[62ch] text-[15px] font-light leading-[1.7] text-white/60">
                  {item.body}
                </p>
                <a
                  href={item.href}
                  className="group mt-3.5 inline-flex items-center gap-1.5 text-[14px] font-medium text-[var(--gold-bright)] no-underline transition-colors hover:text-[var(--gold-text-strong)]"
                >
                  Read the full comparison
                  <ArrowUpRight
                    strokeWidth={1.8}
                    className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
