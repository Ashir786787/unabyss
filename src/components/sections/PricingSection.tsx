"use client";

import PageContainer from "@/components/layout/PageContainer";
import PricingCard from "@/components/pricing/PricingCard";
import { BillingPeriod, pricingPlans } from "@/data/pricing";
import { fadeUp, fadeUpLarge, fadeUpSmall, fadeUpTwelve, viewportOnce, viewportQuarter, viewportTenth } from "@/lib/animations";
import { motion } from "motion/react";
import { useState } from "react";

export default function PricingSection() {
  const [billingPeriod, setBillingPeriod] =
    useState<BillingPeriod>("yearly");

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[#0c0c0c] py-28 sm:py-32 lg:py-36"
    >
      <div className="pointer-events-none absolute left-1/2 top-[38%] h-[700px] w-[980px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,118,87,0.05),transparent_70%)]" />

      <PageContainer className="relative">
        <div className="mx-auto max-w-[1100px]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportQuarter}
            transition={{ duration: 0.55 }}
            className="text-center"
          >
            <p className="text-[9px] uppercase tracking-[0.24em] text-white/18">
              Pricing
            </p>

            <h2 className="mt-4 text-balance text-[30px] font-semibold leading-[1.03] tracking-[-0.045em] text-white sm:text-[40px] lg:text-[48px]">
              Start free. Upgrade when
              <br className="hidden sm:block" /> your context grows.
            </h2>

            <p className="mx-auto mt-5 max-w-[590px] text-[11px] leading-5 text-white/28 sm:text-[12px]">
              Start with shared AI context and increase your limits as your
              workflow grows.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUpTwelve}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={{ delay: 0.08, duration: 0.5 }}
            className="mt-9 flex justify-center"
          >
            <div className="flex items-center rounded-full border border-white/[0.07] bg-[#111111] p-1">
              <button
                type="button"
                onClick={() => setBillingPeriod("monthly")}
                className={`h-8 rounded-full px-4 text-[8px] font-medium transition-all duration-200 ${
                  billingPeriod === "monthly"
                    ? "bg-white text-black"
                    : "text-white/25 hover:text-white/50"
                }`}
              >
                Monthly
              </button>

              <button
                type="button"
                onClick={() => setBillingPeriod("yearly")}
                className={`flex h-8 items-center gap-2 rounded-full px-4 text-[8px] font-medium transition-all duration-200 ${
                  billingPeriod === "yearly"
                    ? "bg-white text-black"
                    : "text-white/25 hover:text-white/50"
                }`}
              >
                Yearly

                <span
                  className={`text-[7px] ${
                    billingPeriod === "yearly"
                      ? "text-emerald-600"
                      : "text-emerald-400/55"
                  }`}
                >
                  Save 20%
                </span>
              </button>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUpLarge}
            initial="hidden"
            whileInView="visible"
            viewport={viewportTenth}
            transition={{ delay: 0.12, duration: 0.6 }}
            className="mt-11 grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
          >
            {pricingPlans.map((plan) => (
              <PricingCard
                key={plan.name}
                plan={plan}
                billingPeriod={billingPeriod}
              />
            ))}
          </motion.div>

          <motion.div
            variants={fadeUpSmall}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={{ delay: 0.14, duration: 0.5 }}
            className="mt-8 text-center"
          >
            <p className="text-[8px] text-white/17">
              Change or cancel your plan whenever you need.
            </p>
          </motion.div>
        </div>
      </PageContainer>
    </section>
  );
}