import { ArrowUpRight, Check } from "lucide-react";
import PrintCanvas from "@/components/visuals/PrintCanvas";
import { type BillingPeriod, type PricingPlan } from "@/data/pricing";

type PricingCardProps = {
  plan: PricingPlan;
  billingPeriod: BillingPeriod;
};

export default function PricingCard({ plan, billingPeriod }: PricingCardProps) {
  const yearly = billingPeriod === "yearly";
  const price = yearly ? plan.yearlyPrice : plan.monthlyPrice;
  const strike = yearly ? plan.monthlyPrice : 0;

  return (
    <>
      <div
        className={`flex items-center justify-center gap-2 rounded-t-[22px] px-4 pb-[33px] pt-3 text-center${
          plan.highlighted ? "" : " invisible"
        }`}
        style={plan.highlighted ? { background: "#be5e3f" } : undefined}
        aria-hidden={plan.highlighted ? undefined : true}
      >
        <img
          src="/images/hero/claude-mark.svg"
          alt=""
          className="size-[18px] shrink-0"
          aria-hidden="true"
        />
        <p className="truncate text-[11.5px] font-medium tracking-[-0.01em] text-white">
          {plan.highlighted ? plan.banner : "placeholder"}
        </p>
      </div>

      <div
        className={`v2-shine v2-shine--light v2-card-glass relative isolate -mt-[22px] flex h-full w-full flex-1 flex-col overflow-hidden rounded-[22px]${
          plan.highlighted ? " border-0" : ""
        }`}
        style={plan.highlighted ? { background: "var(--card)" } : undefined}
      >
        <div className="relative z-[2] flex h-full flex-col">
          <div className="aspect-[16/9] w-full overflow-hidden">
            <PrintCanvas src={plan.image.src} />
          </div>

          <div className="flex flex-1 flex-col p-7">
            <h3 className="text-[18px] font-semibold text-white">{plan.name}</h3>
            <p className="mt-2 min-h-[36px] text-[12.5px] font-light leading-[1.5] text-white/55">
              {plan.description}
            </p>

            <div className="mt-6 min-h-[74px]">
              <div className="flex items-baseline gap-1.5">
                <span
                  className="v2-print-display text-white"
                  style={{ fontSize: "clamp(40px, 5vw, 52px)", lineHeight: 1 }}
                >
                  ${price}
                </span>
                <span className="text-[15px] font-light text-white/50">
                  {plan.perSeat ? "/seat/mo" : "/mo"}
                </span>
                {yearly && price > 0 ? (
                  <span className="ml-1 text-[13px] font-light text-white/30 line-through">
                    ${strike}
                  </span>
                ) : null}
              </div>
              <p className="mt-2 text-[12px] font-light text-white/45">
                {yearly ? "billed annually" : "billed monthly"}
              </p>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={plan.buttonHref ?? "https://app.unabyss.com/register"}
                className={`group inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-full text-[13px] font-medium transition-all ${
                  plan.highlighted
                    ? "bg-white text-black hover:bg-white/90"
                    : "border border-white/15 bg-white/[0.04] text-white hover:border-white/30 hover:bg-white/[0.08]"
                }`}
              >
                {plan.buttonLabel}
                <ArrowUpRight
                  strokeWidth={1.8}
                  className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>

            <div className="mt-3 flex min-h-[34px] items-center justify-center gap-2.5">
              {plan.noteAvatars ? (
                <>
                  <div className="flex shrink-0 -space-x-2">
                    {plan.noteAvatars.map((avatar) => (
                      <img
                        key={avatar}
                        src={avatar}
                        alt=""
                        className="size-8 rounded-full border-2 border-[#0a0a0a] object-cover"
                        loading="lazy"
                      />
                    ))}
                  </div>
                  <p className="text-[12.5px] font-light leading-[1.4] text-white/55">
                    {plan.note}{" "}
                    <a
                      href={plan.buttonHref ?? "/teams"}
                      className="font-medium text-white/85 underline underline-offset-2 transition-colors hover:text-white"
                    >
                      {plan.noteCta}
                    </a>
                  </p>
                </>
              ) : (
                <p className="flex items-center gap-1.5 text-[12.5px] font-medium text-white/70">
                  <Check strokeWidth={2.5} className="size-3.5 text-emerald-400/90" />
                  {plan.note}
                </p>
              )}
            </div>

            <div className="mt-7 flex flex-1 flex-col gap-3 border-t border-white/[0.08] pt-6">
              {plan.features.map((feature) => (
                <div key={feature} className="flex items-start gap-2.5">
                  <span
                    className={`mt-0.5 inline-flex size-[18px] flex-shrink-0 items-center justify-center rounded-full ${
                      plan.amberChecks
                        ? "bg-[rgba(245,197,24,0.14)] text-amber-200/90"
                        : "border border-white/15 bg-white/[0.05] text-white/80"
                    }`}
                  >
                    <Check strokeWidth={2.5} className="size-3" />
                  </span>
                  <span className="text-[13px] font-light leading-[1.5] text-white/75">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
