"use client";

import PageContainer from "@/components/layout/PageContainer";
import { faqItems } from "@/data/faq";
import { fadeUp, fadeUpSmall, viewportOnce, viewportQuarter, viewportTenth } from "@/lib/animations";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#0c0c0c] py-28 sm:py-32 lg:py-36"
    >
      <div className="pointer-events-none absolute left-1/2 top-[40%] h-[560px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,118,87,0.035),transparent_70%)]" />

      <PageContainer className="relative">
        <div className="mx-auto max-w-[820px]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportQuarter}
            transition={{ duration: 0.55 }}
            className="text-center"
          >
            <p className="text-[9px] uppercase tracking-[0.24em] text-white/18">
              FAQ
            </p>

            <h2 className="mt-4 text-[30px] font-semibold leading-[1.03] tracking-[-0.045em] text-white sm:text-[40px] lg:text-[48px]">
              Questions, answered.
            </h2>

            <p className="mx-auto mt-5 max-w-[520px] text-[11px] leading-5 text-white/28 sm:text-[12px]">
              Everything you need to know before connecting your context.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportTenth}
            transition={{ delay: 0.08, duration: 0.55 }}
            className="mt-14 overflow-hidden rounded-[18px] border border-white/[0.07] bg-[#111111]"
          >
            {faqItems.map((item, index) => {
              const active = activeIndex === index;

              return (
                <div
                  key={item.question}
                  className={`${
                    index !== faqItems.length - 1
                      ? "border-b border-white/[0.06]"
                      : ""
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={active}
                    onClick={() =>
                      setActiveIndex(active ? null : index)
                    }
                    className="group flex w-full items-center justify-between gap-6 px-5 py-5 text-left sm:px-6"
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`hidden text-[8px] font-medium tabular-nums sm:block ${
                          active
                            ? "text-[#ff8067]/65"
                            : "text-white/14"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className={`text-[11px] font-medium transition-colors sm:text-[12px] ${
                          active
                            ? "text-white/70"
                            : "text-white/45 group-hover:text-white/65"
                        }`}
                      >
                        {item.question}
                      </span>
                    </div>

                    <span
                      className={`flex size-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        active
                          ? "border-[#ff7657]/15 bg-[#ff7657]/10"
                          : "border-white/[0.06] bg-white/[0.02]"
                      }`}
                    >
                      <ChevronDown
                        size={12}
                        className={`transition-all duration-300 ${
                          active
                            ? "rotate-180 text-[#ff8067]"
                            : "text-white/25"
                        }`}
                      />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {active && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          height: {
                            duration: 0.28,
                          },
                          opacity: {
                            duration: 0.2,
                          },
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-6 sm:px-6 sm:pl-[66px]">
                          <p className="max-w-[650px] text-[10px] leading-5 text-white/25 sm:text-[11px]">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>

          <motion.p
            variants={fadeUpSmall}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={{ delay: 0.12, duration: 0.5 }}
            className="mt-8 text-center text-[9px] text-white/17"
          >
            Still have questions? We&apos;re here to help.
          </motion.p>
        </div>
      </PageContainer>
    </section>
  );
}