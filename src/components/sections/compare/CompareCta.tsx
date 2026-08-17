import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function CompareCta({
  title,
  sub,
}: {
  title: string;
  sub: string;
}) {
  return (
    <section className="relative px-6 pb-24 pt-16 sm:px-10 lg:px-12">
      <div className="relative mx-auto max-w-[1100px]">
        <Reveal>
          <div className="v2-shine v2-shine--gold v2-glass-panel--gold relative isolate overflow-hidden rounded-[26px] px-6 py-12 sm:px-12 sm:py-14">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-14">
              <p
                className="max-w-[34ch] text-center text-[20px] font-light leading-[1.4] text-white sm:text-left sm:text-[24px]"
                style={{ fontSize: "clamp(20px, 2.2vw, 24px)" }}
              >
                {title}
              </p>

              <div className="flex shrink-0 flex-col items-stretch gap-3">
                <span className="text-center text-[14px] font-normal leading-[1.4] text-white/85">
                  {sub}
                </span>
                <a
                  href="https://app.unabyss.com/register"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-white px-5 text-[15px] font-medium text-black no-underline transition-all hover:bg-white/90"
                >
                  Start free
                  <ArrowUpRight
                    strokeWidth={1.8}
                    className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
