"use client";

import PageContainer from "@/components/layout/PageContainer";
import PricingCard from "@/components/pricing/PricingCard";
import {
  BillingPeriod,
  pricingPlans,
} from "@/data/pricing";
import { motion } from "motion/react";
import { useState } from "react";

export default function PricingSection() {
  const [billingPeriod, setBillingPeriod] =
    useState<BillingPeriod>("yearly");

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-[#0c0c0c] py-24 sm:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-[35%] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,111,82,0.055),transparent_70%)]" />

      <PageContainer className="relative">
        <div className="mx-auto max-w-[1040px]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="text-center"
          >
            <p className="text-[10px] uppercase tracking-[0.22em] text-white/20">
              Pricing
            </p>

            <h2 className="mt-4 text-balance text-[28px] font-semibold leading-[1.06] tracking-[-0.045em] text-white sm:text-[36px] lg:text-[42px]">
              Start free. Upgrade when
              <br className="hidden sm:block" /> your context grows.
            </h2>

            <p className="mx-auto mt-4 max-w-[560px] text-[12px] leading-5 text-white/35 sm:text-[13px]">
              One shared memory across the AI tools and apps you already use.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.5 }}
            className="mt-8 flex justify-center"
          >
            <div className="flex items-center rounded-full border border-white/[0.07] bg-[#111111] p-1">
              <button
                type="button"
                onClick={() => setBillingPeriod("monthly")}
                className={`rounded-full px-4 py-2 text-[9px] font-medium transition-all ${
                  billingPeriod === "monthly"
                    ? "bg-white text-black"
                    : "text-white/30 hover:text-white/55"
                }`}
              >
                Monthly
              </button>

              <button
                type="button"
                onClick={() => setBillingPeriod("yearly")}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-[9px] font-medium transition-all ${
                  billingPeriod === "yearly"
                    ? "bg-white text-black"
                    : "text-white/30 hover:text-white/55"
                }`}
              >
                Yearly

                <span
                  className={`text-[7px] ${
                    billingPeriod === "yearly"
                      ? "text-emerald-600"
                      : "text-emerald-400/60"
                  }`}
                >
                  Save 20%
                </span>
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: 0.12, duration: 0.6 }}
            className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
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
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mt-8 text-center"
          >
            <p className="text-[9px] text-white/20">
              Change or cancel your plan whenever you need.
            </p>
          </motion.div>
        </div>
      </PageContainer>
    </section>
  );
}