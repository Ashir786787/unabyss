"use client";

import PageContainer from "@/components/layout/PageContainer";
import { faqItems } from "@/data/faq";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="relative bg-[#0c0c0c] py-24 sm:py-28 lg:py-32">
      <PageContainer>
        <div className="mx-auto max-w-[820px]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="text-center"
          >
            <p className="text-[10px] uppercase tracking-[0.22em] text-white/20">
              FAQ
            </p>

            <h2 className="mt-4 text-[28px] font-semibold leading-[1.06] tracking-[-0.045em] text-white sm:text-[36px] lg:text-[42px]">
              Questions, answered.
            </h2>

            <p className="mx-auto mt-4 max-w-[520px] text-[12px] leading-5 text-white/35 sm:text-[13px]">
              Everything you need to know before connecting your context.
            </p>
          </motion.div>

          <div className="mt-12 divide-y divide-white/[0.06] border-y border-white/[0.06]">
            {faqItems.map((item, index) => {
              const active = activeIndex === index;

              return (
                <div key={item.question}>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveIndex(active ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-5 py-5 text-left"
                  >
                    <span className="text-[12px] font-medium text-white/60 sm:text-[13px]">
                      {item.question}
                    </span>

                    <ChevronDown
                      size={15}
                      className={`shrink-0 text-white/30 transition-transform duration-300 ${
                        active ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {active && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-[700px] pb-5 text-[11px] leading-5 text-white/28">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}