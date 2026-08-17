"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { ArrowUpRight, Check, Clock, X } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import ChatMock from "@/components/ui/ChatMock";
import { useInView } from "@/lib/useInView";

const COLD_TARGET = 192.4;
const WARM_TARGET = 6.8;
const RUN_DURATION = 2400;

function formatTime(totalSeconds: number) {
  if (totalSeconds < 60) {
    return `${totalSeconds.toFixed(1)}s`;
  }

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);

  return `${minutes}m ${seconds}s`;
}

export default function DifferenceSection() {
  const [gridRef, inView] = useInView<HTMLDivElement>();
  const [coldDisplay, setColdDisplay] = useState("0.0s");
  const [warmDisplay, setWarmDisplay] = useState("0.0s");

  useEffect(() => {
    if (!inView) {
      return;
    }

    let frame = 0;

    const step = (now: number) => {
      const t = Math.min((now - start) / RUN_DURATION, 1);
      const ease = 1 - Math.pow(1 - t, 3);

      setColdDisplay(formatTime(COLD_TARGET * ease));
      setWarmDisplay(formatTime(WARM_TARGET * ease));

      if (t < 1) {
        frame = requestAnimationFrame(step);
      }
    };

    const start = performance.now();
    frame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(frame);
  }, [inView]);

  return (
    <section className="relative px-6 py-24 sm:px-10 sm:py-32 lg:px-12">
      <div className="relative mx-auto max-w-[1100px]">
        <Reveal className="mb-12 flex flex-col items-center text-center">
          <span className="v2-print-label">The difference</span>
          <h2
            className="v2-print-display mt-5 max-w-[20ch] text-white"
            style={{
              fontSize: "clamp(30px, 4vw, 48px)",
              lineHeight: 1.2,
            }}
          >
            Don&apos;t answer questions - just work.
          </h2>
        </Reveal>

        <div
          ref={gridRef}
          style={{ "--v2-reveal-delay": "120ms" } as CSSProperties}
          className={`v2-reveal grid grid-cols-1 gap-6 md:grid-cols-2 ${
            inView ? "is-revealed" : ""
          }`}
        >
          <div className="ww-col">
            <div className="ww-note ww-note--cold">
              <X className="size-4" />
              Without Unabyss
            </div>

              <div className="ww-stage ww-stage--noted">
                <div className="ww-window ww-window--cold">
                  <ChatMock title="Client follow-up" />
                </div>
              </div>

              <div
                className="ww-hud ww-hud--cold"
                aria-label="Time to answer without Unabyss"
              >
                <Clock className="ww-hud__icon" />
                <span className="ww-hud__time">{coldDisplay}</span>
              </div>
            </div>

            <div className="ww-col order-first md:order-none">
              <div className="ww-note ww-note--warm">
                <Check className="size-4" />
                With Unabyss
              </div>

              <div className="ww-stage ww-stage--noted">
                <div className="ww-window ww-window--warm">
                  <ChatMock title="Client follow-up">
                    <div className="flex flex-col gap-[1.6cqw]">
                      <p className="self-end max-w-[80%] rounded-[1.6cqw] rounded-br-[0.5cqw] border border-white/10 bg-white/[0.06] px-[1.5cqw] py-[1cqw] text-[1.5cqw] font-light leading-[1.5] text-[#ecebe4]">
                        Can you prepare the follow-up for this client?
                      </p>
                      <p className="self-start max-w-[80%] rounded-[1.6cqw] rounded-bl-[0.5cqw] border border-white/10 bg-white/[0.06] px-[1.5cqw] py-[1cqw] text-[1.5cqw] font-light leading-[1.5] text-[#ecebe4]">
                        I found your client notes and the latest thread.
                        Here&apos;s the follow-up.
                      </p>
                    </div>
                  </ChatMock>
                </div>
              </div>

              <div
                className="ww-hud ww-hud--warm"
                aria-label="Time to answer with Unabyss"
              >
                <Clock className="ww-hud__icon" />
                <span className="ww-hud__time">{warmDisplay}</span>
              </div>
            </div>
          </div>

          <Reveal
            delay={200}
          className="v2-shine v2-shine--light v2-card-glass mx-auto mt-20 flex max-w-[900px] flex-col items-center gap-5 rounded-[18px] px-6 py-6 sm:mt-28 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-8"
        >
          <div className="flex flex-col items-center gap-1.5 text-center sm:items-start sm:text-left">
            <h3 className="text-[19px] font-medium leading-snug text-white sm:text-[20px]">
              What you tell one AI, they all know.
            </h3>
            <p className="max-w-[52ch] text-[14px] font-light leading-[1.6] text-white/60 sm:text-[15px]">
              No copy-pasting between tools that don&apos;t talk.
            </p>
          </div>

          <div className="w-full shrink-0 sm:w-auto">
            <a
              href="https://app.unabyss.com/register"
              className="group flex h-11 w-full shrink-0 items-center justify-center gap-1.5 rounded-full bg-white px-5 text-[13px] font-medium text-black transition-all hover:bg-white/90 sm:inline-flex sm:w-auto"
            >
              Start now
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
