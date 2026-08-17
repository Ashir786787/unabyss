"use client";

import { useRef, useState, type CSSProperties } from "react";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import PricingCard from "@/components/pricing/PricingCard";
import { type BillingPeriod, pricingPlans } from "@/data/pricing";
import { tools } from "@/data/tools";

export default function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("yearly");
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToPlan = (index: number) => {
    const child = scrollRef.current?.children[index] as HTMLElement | undefined;
    child?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  };

  return (
    <section className="relative isolate overflow-hidden px-6 py-32 sm:px-10 sm:py-40 lg:px-12">
      <div id="pricing" className="relative z-10 mx-auto max-w-[1100px] scroll-mt-24">
        <Reveal className="mb-10 flex flex-col items-center text-center">
          <span className="v2-print-label">Pricing</span>
          <h2
            className="v2-print-display mt-5 text-white sm:whitespace-nowrap"
            style={{ fontSize: "clamp(26px, 4vw, 48px)", lineHeight: 1.2 }}
          >
            Start free. Then pick your plan.
          </h2>
          <p className="mt-5 max-w-[52ch] text-[14.5px] font-light leading-[1.7] text-white/65">
            Every plan starts with a 7-day free trial. Scale up as you connect
            more agents and accounts.
          </p>

          <div
            className="mt-8 inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1"
            role="group"
            aria-label="Billing period"
          >
            <button
              type="button"
              onClick={() => setBillingPeriod("monthly")}
              aria-pressed={billingPeriod === "monthly"}
              className={`rounded-full px-4 py-1.5 text-[12.5px] font-medium transition-colors ${
                billingPeriod === "monthly"
                  ? "bg-white text-black"
                  : "text-white/60 hover:text-white/90"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBillingPeriod("yearly")}
              aria-pressed={billingPeriod === "yearly"}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12.5px] font-medium transition-colors ${
                billingPeriod === "yearly"
                  ? "bg-white text-black"
                  : "text-white/60 hover:text-white/90"
              }`}
            >
              Annual
              <span className="rounded-full bg-black/10 px-1.5 py-0.5 text-[9.5px] font-semibold uppercase tracking-[0.08em] text-black/70">
                Save up to 20%
              </span>
            </button>
          </div>
        </Reveal>

        <div
          ref={scrollRef}
          className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-6 px-6 pb-2 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-3 md:items-stretch md:gap-5 md:overflow-visible md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden"
        >
          {pricingPlans.map((plan, index) => (
            <Reveal
              key={plan.name}
              delay={120 + index * 90}
              className="flex h-full w-[90%] max-w-[400px] shrink-0 snap-start flex-col md:w-auto md:max-w-none"
            >
              <PricingCard plan={plan} billingPeriod={billingPeriod} />
            </Reveal>
          ))}
        </div>

        <div className="mt-5 flex justify-center gap-2 md:hidden">
          {pricingPlans.map((plan, index) => {
            const active = Boolean(plan.highlighted);
            return (
              <button
                key={plan.name}
                type="button"
                aria-label={`Show ${plan.name} plan`}
                aria-current={active}
                onClick={() => scrollToPlan(index)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  active
                    ? "w-20 bg-white"
                    : "w-6 bg-white/25 hover:bg-white/40"
                }`}
              />
            );
          })}
        </div>

        <Reveal delay={400}>
          <div className="v2-shine v2-glass-panel relative mt-5 flex w-full flex-col gap-3 overflow-visible rounded-2xl p-3 sm:flex-row sm:items-center sm:gap-5 sm:py-3 sm:pr-3 sm:pl-6">
            <span className="w-full shrink-0 text-center text-[10.5px] font-medium uppercase tracking-[0.22em] text-white/55 sm:w-auto sm:text-left">
              Works with
            </span>
            <div className="min-w-0 flex-1">
              <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
                <div
                  className="v2-marquee-track flex w-max items-center gap-6"
                  style={{ "--marquee-duration": "55s" } as CSSProperties}
                >
                  {[...tools, ...tools].map((tool, index) => (
                    <div
                      key={`${tool.name}-${index}`}
                      className="flex shrink-0 items-center gap-3 pr-2"
                    >
                      <span
                        className="inline-flex shrink-0 items-center justify-center border font-medium text-foreground/85 ring-1 ring-inset rounded-[10px] border-white/10 bg-white/[0.04] ring-white/[0.03] size-9 text-[13px]"
                        style={{ "--brand": tool.brand } as CSSProperties}
                        title={tool.name}
                        aria-label={tool.name}
                      >
                        <img
                          src={tool.src}
                          alt=""
                          loading="lazy"
                          className="size-[62%] object-contain"
                        />
                      </span>
                      <span className="whitespace-nowrap text-[14px] font-light text-foreground/70">
                        {tool.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={480} className="mt-10 hidden sm:block">
          <p className="mb-4 text-center text-[10.5px] font-medium uppercase tracking-[0.22em] text-white/55">
            Connect in seconds
          </p>
          <div className="mx-auto flex max-w-[620px] items-center gap-4">
            <a
              href="https://app.unabyss.com/register"
              target="_blank"
              rel="noreferrer"
              aria-label="Connect Claude to Unabyss"
              className="claude-connect-card group relative flex flex-1 cursor-pointer items-center gap-4 overflow-hidden rounded-xl px-6 py-5 text-left shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              <img
                src="/images/tools/claude.svg"
                alt=""
                aria-hidden="true"
                width={44}
                height={44}
                className="size-11 shrink-0"
              />

              <span className="flex min-w-0 flex-1 flex-col items-start gap-1">
                <span className="block text-[17px] font-semibold leading-tight text-white">
                  Connect Claude to Unabyss
                </span>
                <span className="block text-[14px] text-white/85 sm:whitespace-nowrap">
                  Finish signing up and onboarding right inside Claude
                </span>
                <span className="mt-0.5 inline-flex shrink-0 items-center gap-1 rounded-full bg-white/90 px-1.5 py-px text-[11px] font-semibold text-[#9a3f22]">
                  <BadgeCheck className="size-3 shrink-0" />
                  Official connector
                </span>
              </span>

              <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-white px-4 py-2 text-[14px] font-semibold text-[#9a3f22]">
                Connect
                <ArrowUpRight className="size-4 shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          </div>

          <div className="mt-4 flex justify-center">
            <a
              href="https://app.unabyss.com/register"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer rounded-md px-2 py-1 text-[13px] font-medium text-white/55 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              Connect to a different agent
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
