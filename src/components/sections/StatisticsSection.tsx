"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { useInView } from "@/lib/useInView";

const DURATION = 1200;

type CountUpProps = {
  target: number;
  suffix: string;
  label: string;
  nowrap?: boolean;
  gold?: boolean;
};

function formatFigure(value: number) {
  return value.toLocaleString("en-US");
}

function CountUp({ target, suffix, label, nowrap = false, gold = false }: CountUpProps) {
  const [ref, inView] = useInView<HTMLDivElement>();
  const [display, setDisplay] = useState(target);

  useEffect(() => {
    if (!inView) {
      return;
    }

    const start = performance.now();
    let frame = 0;

    const step = (now: number) => {
      const t = Math.min((now - start) / DURATION, 1);
      const ease = 1 - Math.pow(1 - t, 3);

      setDisplay(Math.round(target * ease));

      if (t < 1) {
        frame = requestAnimationFrame(step);
      }
    };

    frame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(frame);
  }, [inView, target]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <span
        className={`v2-print-display text-white${gold ? " figure-gold" : ""}`}
        style={{ fontSize: "clamp(40px, 6vw, 64px)", lineHeight: 1 }}
      >
        {formatFigure(display)}
        {suffix}
      </span>
      <span
        className={`mt-2 max-w-[16ch] text-[13px] font-light leading-[1.4] text-white/60${
          nowrap ? " whitespace-nowrap" : ""
        }`}
      >
        {label}
      </span>
    </div>
  );
}

export default function StatisticsSection() {
  return (
    <section className="relative px-6 py-20 sm:px-10 sm:py-28 lg:px-12">
      <div className="relative mx-auto max-w-[1100px]">
        <Reveal className="v2-shine v2-shine--light v2-card-glass relative overflow-hidden rounded-[22px] px-8 py-12 text-center sm:px-12 sm:py-14">
          <span className="v2-print-label">Proof</span>
          <h2
            className="v2-print-display mx-auto mt-4 max-w-[20ch] text-white"
            style={{
              fontSize: "clamp(26px, 3.4vw, 40px)",
              lineHeight: 1.2,
            }}
          >
            One context. Every tool.
          </h2>
          <p className="mt-2 text-[13px] font-light text-white/45">
            Working across
          </p>

          <div className="mt-6 flex flex-wrap items-start justify-center gap-x-12 gap-y-8">
            <CountUp target={10} suffix="+" label="AI tools" />
            <CountUp target={25} suffix="+" label="integrated apps" />
            <CountUp
              target={900000}
              suffix="+"
              label="memory sources saved by users"
              nowrap
              gold
            />
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href="/integrations"
              className="v2-shine v2-glass-panel group inline-flex h-12 items-center gap-2 rounded-full px-6 text-[14px] font-medium text-white no-underline transition-colors"
            >
              Explore all integrations
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
