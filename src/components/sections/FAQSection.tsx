"use client";

import { useState } from "react";
import { ArrowRight, Plus } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { faqItems } from "@/data/faq";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="relative px-6 py-24 sm:px-10 sm:py-32 lg:px-12">
      <div className="relative mx-auto max-w-[820px]">
        <Reveal className="mb-12 flex flex-col items-center text-center">
          <span className="v2-print-label">FAQ</span>
          <h2
            className="v2-print-display mt-5 max-w-[20ch] text-white"
            style={{ fontSize: "clamp(30px, 4vw, 48px)", lineHeight: 1.2 }}
          >
            Before you ask
          </h2>
        </Reveal>

        <Reveal>
          <div className="flex flex-col gap-3">
            {faqItems.map((item, index) => {
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
                      <Plus className="size-4 transition-transform duration-200" />
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
        </Reveal>

        <Reveal delay={120} className="mt-8 flex justify-center">
          <a
            href="/faq"
            className="group inline-flex items-center gap-1.5 text-[13.5px] font-medium text-white/70 no-underline transition-colors hover:text-white"
          >
            See all FAQs
            <ArrowRight
              strokeWidth={1.8}
              className="size-4 transition-transform group-hover:translate-x-0.5"
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
