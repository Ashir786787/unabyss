"use client";

import { useState } from "react";
import { ArrowUpRight, Gift, Plus, Sparkles } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import {
  referralFaqs,
  referralRewards,
  referralSteps,
} from "@/data/referrals";

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="flex flex-col gap-3">
      {referralFaqs.map((item, index) => {
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
                  {item.answer.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

const referralLink = "https://app.unabyss.com/settings/billing";

export default function ReferralsSection() {
  return (
    <>
      <section className="relative px-6 pb-12 pt-28 sm:px-10 sm:pt-32 lg:px-12">
        <div className="relative mx-auto max-w-[860px]">
          <Reveal className="flex flex-col items-center text-center">
            <span className="v2-print-label">Referrals</span>
            <h1
              className="v2-print-display mt-5 max-w-[18ch] text-white"
              style={{ fontSize: "clamp(38px, 5.4vw, 66px)", lineHeight: 1.05 }}
            >
              Give a friend a free month. Get one back.
            </h1>
            <p className="mt-6 max-w-[54ch] text-[17px] font-light leading-[1.7] text-white/65 sm:text-[18px]">
              Send someone your link. When they subscribe, they get their
              second month of Pro free - and we take a month of Pro off your
              next invoice. Refer 3 and we&apos;ll cover a month of Claude Pro
              for you.
            </p>
            <div className="mt-8 flex flex-col items-center gap-2">
              <a
                href={referralLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-11 items-center gap-2 rounded-full bg-white px-6 text-[15px] font-medium text-black no-underline transition-all hover:bg-white/90"
              >
                Get your link
                <ArrowUpRight
                  strokeWidth={1.8}
                  className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <p className="text-[12.5px] font-light text-white/40">
                Takes you to Referral rewards on your billing page - you&apos;ll
                be asked to sign in first if you&apos;re not.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative px-6 py-16 sm:px-10 sm:py-20 lg:px-12">
        <div className="relative mx-auto max-w-[900px]">
          <Reveal className="flex flex-col items-center text-center">
            <h2
              className="v2-print-display text-white"
              style={{ fontSize: "clamp(26px, 3.2vw, 38px)", lineHeight: 1.2 }}
            >
              Three steps, then nothing to chase
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {referralSteps.map((step, index) => (
              <Reveal key={step.number} delay={index * 80}>
                <div className="v2-shine v2-glass-panel relative h-full rounded-[20px] p-6">
                  <span
                    className="v2-mono text-[34px] font-medium"
                    style={{ color: "var(--gold-text)" }}
                  >
                    {step.number}
                  </span>
                  <h3 className="mt-4 text-[17px] font-medium text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] font-light leading-[1.7] text-white/60">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 py-16 sm:px-10 sm:py-20 lg:px-12">
        <div className="relative mx-auto max-w-[900px]">
          <Reveal className="flex flex-col items-center text-center">
            <span className="v2-print-label">The deal</span>
            <h2
              className="v2-print-display mt-3 text-white"
              style={{ fontSize: "clamp(26px, 3.2vw, 38px)", lineHeight: 1.2 }}
            >
              What each side gets
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {referralRewards.map((reward, index) => (
              <Reveal key={reward.title} delay={index * 80}>
                <div
                  className={`v2-shine v2-shine--gold h-full rounded-[20px] p-6 ${
                    reward.highlight
                      ? "v2-glass-panel v2-glass-panel--gold"
                      : "v2-glass-panel"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex size-10 items-center justify-center rounded-full border ${
                        reward.highlight
                          ? "border-[var(--gold-muted)]/40"
                          : "border-white/10 bg-white/[0.04]"
                      }`}
                    >
                      {reward.highlight ? (
                        <Gift className="size-4" style={{ color: "var(--gold-text)" }} />
                      ) : (
                        <Sparkles className="size-4 text-white/60" />
                      )}
                    </span>
                    <h3 className="text-[17px] font-medium text-white">
                      {reward.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-[14.5px] font-light leading-[1.7] text-white/60">
                    {reward.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 py-16 sm:px-10 sm:py-20 lg:px-12">
        <div className="relative mx-auto max-w-[760px]">
          <Reveal className="flex flex-col items-center text-center">
            <span className="v2-print-label">FAQ</span>
            <h2
              className="v2-print-display mt-3 text-white"
              style={{ fontSize: "clamp(26px, 3.2vw, 38px)", lineHeight: 1.2 }}
            >
              Questions
            </h2>
          </Reveal>
          <Reveal delay={80} className="mt-10">
            <FaqAccordion />
          </Reveal>
        </div>
      </section>

      <section className="relative px-6 pb-24 pt-10 sm:px-10 sm:pb-28 lg:px-12">
        <Reveal delay={120} className="relative mx-auto max-w-[820px]">
          <div className="v2-shine v2-shine--light v2-glass-panel v2-glass-panel--gold relative rounded-[28px] p-8 sm:p-10">
            <div
              className="pointer-events-none absolute -top-32 left-1/2 size-80 -translate-x-1/2 rounded-full"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(var(--gold-glow-rgb), 0.2), transparent 70%)",
              }}
              aria-hidden="true"
            />
            <div className="relative z-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col gap-2">
                <span className="v2-print-label">Referrals</span>
                <h2
                  className="v2-print-display mt-2 text-white"
                  style={{ fontSize: "clamp(24px, 3vw, 32px)", lineHeight: 1.25 }}
                >
                  Ready when you are
                </h2>
                <p className="max-w-[46ch] text-[15px] font-light leading-[1.7] text-white/60 sm:text-[16px]">
                  Your link never expires. Send it once, or send it to everyone
                  who&apos;s tired of re-explaining themselves to AI.
                </p>
              </div>
              <a
                href={referralLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 text-[15px] font-medium text-black no-underline transition-all hover:bg-white/90"
              >
                Get your link
                <ArrowUpRight
                  strokeWidth={1.8}
                  className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
