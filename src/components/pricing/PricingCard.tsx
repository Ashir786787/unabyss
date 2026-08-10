import { BillingPeriod, PricingPlan } from "@/data/pricing";
import { ArrowRight, Check } from "lucide-react";

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
      className={`relative flex h-full flex-col rounded-[16px] border p-5 transition-colors ${
        plan.highlighted
          ? "border-[#ff6f52]/30 bg-[#15110f]"
          : "border-white/[0.07] bg-[#111111]"
      }`}
    >
      {plan.badge && (
        <div className="absolute right-4 top-4 rounded-full border border-[#ff6f52]/20 bg-[#ff6f52]/10 px-2.5 py-1 text-[8px] font-medium text-[#ff8a73]">
          {plan.badge}
        </div>
      )}

      <div>
        <h3 className="text-[14px] font-semibold text-white">
          {plan.name}
        </h3>

        <p className="mt-2 min-h-[40px] text-[10px] leading-5 text-white/28">
          {plan.description}
        </p>
      </div>

      <div className="mt-6">
        <div className="flex items-end gap-1">
          <span className="text-[32px] font-semibold tracking-[-0.05em] text-white">
            ${price}
          </span>

          {price > 0 && (
            <span className="mb-1.5 text-[9px] text-white/25">
              / month
            </span>
          )}
        </div>

        {billingPeriod === "yearly" && price > 0 && (
          <p className="mt-1 text-[9px] text-emerald-400/65">
            Billed annually
          </p>
        )}

        {price === 0 && (
          <p className="mt-1 text-[9px] text-white/20">
            No credit card required
          </p>
        )}
      </div>

      <a
        href="https://app.unabyss.com"
        target="_blank"
        rel="noreferrer"
        className={`mt-6 flex h-9 items-center justify-center gap-2 rounded-[9px] text-[10px] font-medium transition-all ${
          plan.highlighted
            ? "bg-[#ff6f52] text-white hover:bg-[#ff8067]"
            : "border border-white/[0.07] bg-white/[0.035] text-white/60 hover:bg-white/[0.07] hover:text-white"
        }`}
      >
        {plan.buttonLabel}

        <ArrowRight size={11} />
      </a>

      <div className="my-6 h-px bg-white/[0.06]" />

      <div className="flex-1">
        <p className="text-[9px] uppercase tracking-[0.13em] text-white/20">
          Includes
        </p>

        <div className="mt-4 space-y-3">
          {plan.features.map((feature) => (
            <div
              key={feature}
              className="flex items-start gap-2.5"
            >
              <div className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-emerald-400/10">
                <Check
                  size={9}
                  className="text-emerald-400"
                />
              </div>

              <p className="text-[9px] leading-4 text-white/35">
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}