import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function CompareHero({
  label,
  title,
  subtitle,
  cta = true,
}: {
  label: string;
  title: string;
  subtitle: string;
  cta?: boolean;
}) {
  return (
    <section className="relative px-6 pb-8 pt-28 sm:px-10 sm:pt-32 lg:px-12">
      <div className="relative mx-auto max-w-[1100px]">
        <Reveal className="flex flex-col items-center text-center">
          <span className="v2-print-label">{label}</span>
          <h1
            className="v2-print-display mt-5 max-w-[20ch] text-white"
            style={{ fontSize: "clamp(32px, 4.2vw, 52px)", lineHeight: 1.15 }}
          >
            {title}
          </h1>
          <p className="mt-6 max-w-[62ch] text-[17px] font-light leading-[1.7] text-white/65 sm:text-[18px]">
            {subtitle}
          </p>
          {cta ? (
            <a
              href="https://app.unabyss.com/register"
              target="_blank"
              rel="noreferrer"
              className="group mt-8 inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 text-[15px] font-medium text-black no-underline transition-all hover:bg-white/90"
            >
              Start free - own your context
              <ArrowUpRight
                strokeWidth={1.8}
                className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
