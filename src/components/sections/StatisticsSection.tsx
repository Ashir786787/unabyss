"use client";

import PageContainer from "@/components/layout/PageContainer";
import { fadeUp, viewportQuarter } from "@/lib/animations";
import { motion } from "motion/react";

const statistics = [
  {
    value: "800K+",
    label: "items synced",
  },
  {
    value: "25+",
    label: "connected apps",
  },
  {
    value: "10+",
    label: "AI tools",
  },
  {
    value: "1",
    label: "shared memory",
  },
];

export default function StatisticsSection() {
  return (
    <section className="relative bg-[#0c0c0c] py-20 sm:py-24 lg:py-28">
      <PageContainer>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportQuarter}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-[920px]"
        >
          <div className="grid overflow-hidden rounded-[16px] border border-white/[0.07] bg-[#111111] sm:grid-cols-2 lg:grid-cols-4">
            {statistics.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex min-h-[145px] flex-col items-center justify-center px-6 py-8 text-center ${
                  index !== statistics.length - 1
                    ? "border-b border-white/[0.06] sm:border-b-0 sm:border-r"
                    : ""
                }`}
              >
                <p className="text-[30px] font-semibold tracking-[-0.045em] text-white sm:text-[34px]">
                  {stat.value}
                </p>

                <p className="mt-2 text-[10px] uppercase tracking-[0.14em] text-white/25">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </PageContainer>
    </section>
  );
}