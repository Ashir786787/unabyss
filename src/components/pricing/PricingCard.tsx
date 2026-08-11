import { BillingPeriod, PricingPlan } from "@/data/pricing";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";

type PricingCardProps = {
  plan: PricingPlan;
  billingPeriod: BillingPeriod;
};

export default function PricingCard({
  plan,
  billingPeriod,
}: PricingCardProps) {
  const price =
    billingPeriod === "monthly"
      ? plan.monthlyPrice
      : plan.yearlyPrice;

  return (
    <div
      className={`relative flex h-full flex-col overflow-hidden rounded-[18px] border transition-all duration-300 ${
        plan.highlighted
          ? "border-[#ff7657]/25 bg-[#15110f] shadow-[0_24px_70px_rgba(255,118,87,0.055)]"
          : "border-white/[0.07] bg-[#111111]"
      }`}
    >
      {plan.highlighted && (
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#ff7657] to-transparent" />
      )}

      <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden">
        <Image
          src={plan.image}
          alt={plan.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex min-h-[30px] items-start justify-between gap-3">
          <h3 className="text-[13px] font-semibold text-white/75">
            {plan.name}
          </h3>

          {plan.badge && (
            <span className="rounded-full border border-[#ff7657]/18 bg-[#ff7657]/10 px-2.5 py-1 text-[7px] font-medium text-[#ff8a73]">
              {plan.badge}
            </span>
          )}
        </div>

        <p className="mt-3 min-h-[44px] text-[9px] leading-5 text-white/24">
          {plan.description}
        </p>

        <div className="mt-6">
          <div className="flex items-end gap-1.5">
            <span className="text-[34px] font-semibold tracking-[-0.055em] text-white">
              ${price}
            </span>

            {price > 0 && (
              <span className="mb-1.5 text-[8px] text-white/20">
                / month
              </span>
            )}
          </div>

          <div className="mt-1 min-h-[16px]">
            {billingPeriod === "yearly" && price > 0 && (
              <p className="text-[8px] text-emerald-400/60">
                Billed annually
              </p>
            )}
          </div>
        </div>

        <a
          href="https://app.unabyss.com"
          target="_blank"
          rel="noreferrer"
          className={`mt-6 flex h-10 items-center justify-center gap-2 rounded-[10px] text-[9px] font-medium transition-all duration-200 ${
            plan.highlighted
              ? "bg-[#ff7657] text-white hover:bg-[#ff8067]"
              : "border border-white/[0.07] bg-white/[0.03] text-white/48 hover:bg-white/[0.06] hover:text-white/70"
          }`}
        >
          {plan.buttonLabel}
          <ArrowRight size={10} />
        </a>

        <div className="my-6 h-px bg-white/[0.06]" />

        <div className="flex-1">
          <p className="text-[8px] uppercase tracking-[0.14em] text-white/17">
            Includes
          </p>

          <div className="mt-4 space-y-3">
            {plan.features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-2.5"
              >
                <div className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-emerald-400/[0.08]">
                  <Check
                    size={8}
                    className="text-emerald-400/80"
                  />
                </div>

                <p className="text-[8px] leading-4 text-white/28">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}