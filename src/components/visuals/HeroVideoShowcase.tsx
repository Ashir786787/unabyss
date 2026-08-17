"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import LoomVisual from "@/components/visuals/LoomVisual";
import { demos } from "@/data/demos";

const CARD_WIDTH = 192;

export default function HeroVideoShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [soundOn, setSoundOn] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [canNavPrev, setCanNavPrev] = useState(false);
  const [canNavNext, setCanNavNext] = useState(false);
  const [visibility, setVisibility] = useState(1);

  const bubbleRef = useRef<HTMLVideoElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const soundOnRef = useRef(soundOn);
  const expandedRef = useRef(expanded);

  useEffect(() => {
    soundOnRef.current = soundOn;
  }, [soundOn]);

  useEffect(() => {
    expandedRef.current = expanded;
  }, [expanded]);

  const activeVideo = demos[activeIndex];

  useEffect(() => {
    const updateVisibility = () => {
      const hero = heroRef.current;
      if (!hero) {
        return;
      }
      const rect = hero.getBoundingClientRect();
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;
      if (rect.height === 0) {
        setVisibility(0);
        return;
      }
      const visible = Math.min(
        1,
        Math.max(
          0,
          (Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0)) /
            rect.height,
        ),
      );
      setVisibility(visible);
      if (visible <= 0.02 && soundOnRef.current && !expandedRef.current) {
        setSoundOn(false);
      }
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);
    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  useEffect(() => {
    const video = bubbleRef.current;
    if (!video) {
      return;
    }
    const scrolledOut = !expanded && visibility <= 0.02;
    video.muted = !soundOn || scrolledOut;
    video.volume = !soundOn || scrolledOut ? 0 : expanded ? 1 : visibility;
  }, [soundOn, expanded, visibility, activeIndex]);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) {
      return;
    }

    const updateNav = () => {
      const scrollable = rail.scrollWidth - rail.clientWidth - 4;
      setCanNavPrev(rail.scrollLeft > 0);
      setCanNavNext(rail.scrollLeft < scrollable);
    };

    updateNav();
    window.addEventListener("resize", updateNav);

    return () => window.removeEventListener("resize", updateNav);
  }, []);

  useEffect(() => {
    if (!soundOn) {
      return;
    }

    const interval = setInterval(() => {
      setSeconds((current) => current + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [soundOn]);

  useEffect(() => {
    if (soundOn && !expanded) {
      void bubbleRef.current?.play();
    }
  }, [soundOn, activeIndex, expanded]);

  useEffect(() => {
    if (!expanded) {
      return;
    }

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [expanded]);

  const selectVideo = (index: number) => {
    setActiveIndex(index);
    setSeconds(0);
  };

  const toggleSound = () => {
    setSoundOn((current) => !current);
  };

  const toggleFullscreen = () => {
    if (expanded) {
      const hero = heroRef.current;
      if (hero) {
        const rect = hero.getBoundingClientRect();
        const viewportHeight =
          window.innerHeight || document.documentElement.clientHeight;
        const visible =
          rect.height === 0
            ? 0
            : Math.min(
                1,
                Math.max(
                  0,
                  (Math.min(rect.bottom, viewportHeight) -
                    Math.max(rect.top, 0)) /
                    rect.height,
                ),
              );
        if (visible <= 0.02) {
          setSoundOn(false);
        }
      }
    }
    setExpanded((current) => !current);
  };

  const scrollRail = (direction: -1 | 1) => {
    railRef.current?.scrollBy({
      left: direction * CARD_WIDTH,
      behavior: "smooth",
    });
  };

  const scrollToThumb = (index: number) => {
    railRef.current?.scrollTo({
      left: index * CARD_WIDTH,
      behavior: "smooth",
    });
  };

  const loom = (
    <LoomVisual
      demo={activeVideo}
      soundOn={soundOn}
      seconds={seconds}
      expanded={expanded}
      visible={!expanded}
      onToggleSound={toggleSound}
      onToggleFullscreen={toggleFullscreen}
      bubbleRef={bubbleRef}
    />
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.24, duration: 0.7 }}
      className="mx-auto mt-10 w-full max-w-[1400px]"
    >
      <div ref={heroRef} className={expanded ? "hidden" : "block"}>
        {loom}
      </div>

      {expanded
        ? createPortal(
            <div className="fixed inset-0 z-[9998]">
              <button
                type="button"
                aria-label="Exit full screen"
                onClick={() => setExpanded(false)}
                className="absolute inset-0 block h-full w-full cursor-default bg-[#060505c2] [backdrop-filter:blur(3px)]"
              />
              <LoomVisual
                demo={activeVideo}
                soundOn={soundOn}
                seconds={seconds}
                expanded={expanded}
                visible={expanded}
                onToggleSound={toggleSound}
                onToggleFullscreen={toggleFullscreen}
                bubbleRef={bubbleRef}
              />
            </div>,
            document.body,
          )
        : null}

      <div className="relative mt-[20px] max-[639px]:mt-[14px]">
        <div
          className={`pointer-events-none absolute inset-y-0 left-0 z-[2] w-[64px] bg-[linear-gradient(90deg,var(--background),transparent)] opacity-0 transition-opacity duration-200 max-[639px]:hidden ${
            canNavPrev ? "opacity-100" : ""
          }`}
        />
        <div
          className={`pointer-events-none absolute inset-y-0 right-0 z-[2] w-[64px] bg-[linear-gradient(270deg,var(--background),transparent)] opacity-0 transition-opacity duration-200 max-[639px]:hidden ${
            canNavNext ? "opacity-100" : ""
          }`}
        />
        <button
          type="button"
          onClick={() => scrollRail(-1)}
          aria-label="Previous demo"
          className={`absolute left-2 top-1/2 z-[3] grid size-[38px] -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-[#14110f]/70 text-white [backdrop-filter:blur(8px)] transition-opacity duration-200 hover:border-white/40 hover:bg-[#14110f] max-[639px]:hidden ${
            canNavPrev
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }`}
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          onClick={() => scrollRail(1)}
          aria-label="Next demo"
          className={`absolute right-2 top-1/2 z-[3] grid size-[38px] -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-[#14110f]/70 text-white [backdrop-filter:blur(8px)] transition-opacity duration-200 hover:border-white/40 hover:bg-[#14110f] max-[639px]:hidden ${
            canNavNext
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }`}
        >
          <ChevronRight className="size-5" />
        </button>

        <div
          ref={railRef}
          onScroll={() => {
            const rail = railRef.current;
            if (!rail) {
              return;
            }
            const scrollable = rail.scrollWidth - rail.clientWidth - 4;
            setCanNavPrev(rail.scrollLeft > 0);
            setCanNavNext(rail.scrollLeft < scrollable);
          }}
          className="flex gap-3 overflow-x-auto px-0.5 py-1 [scrollbar-width:none] [scroll-snap-type:x_proximity] [&::-webkit-scrollbar]:hidden max-[639px]:-mx-6 max-[639px]:gap-[10px] max-[639px]:px-6 max-[639px]:[scroll-snap-type:x_mandatory] max-[639px]:[mask-image:linear-gradient(to_right,transparent_0,black_24px,black_calc(100%_-_42px),transparent_100%)] max-[639px]:[scroll-padding-left:24px]"
        >
          {demos.map((demo, index) => {
            const active = index === activeIndex;

            return (
              <button
                key={demo.id}
                type="button"
                onClick={() => selectVideo(index)}
                className={`flex w-[172px] flex-none snap-start flex-col gap-2 rounded-[14px] border p-2 text-left transition-all duration-200 max-[639px]:w-[132px] max-[639px]:gap-[6px] max-[639px]:rounded-[12px] ${
                  active
                    ? "border-[#f0cd8c]/75 bg-[#f0cd8c]/10"
                    : "border-white/10 bg-white/[0.03] hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.06]"
                }`}
              >
                <span
                  className="block aspect-[16/10] w-full rounded-lg bg-[#14110f] bg-cover bg-center"
                  style={{ backgroundImage: `url(${demo.cover})` }}
                />
                <span className="flex flex-col gap-0.5 px-0.5 pb-0.5 max-[639px]:gap-[1px]">
                  <span
                    className={`text-[10px] font-medium uppercase tracking-[0.08em] max-[639px]:text-[9px] ${
                      active ? "text-[#f0cd8c]/90" : "text-white/50"
                    }`}
                  >
                    {demo.category}
                  </span>
                  <span className="text-[13px] font-medium leading-[1.35] text-white/90 max-[639px]:text-[11.5px] max-[639px]:leading-[1.3]">
                    {demo.title}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-4 hidden justify-center gap-2 max-[639px]:flex">
          {demos.map((demo, index) => {
            const active = index === activeIndex;

            return (
              <button
                key={demo.id}
                type="button"
                onClick={() => scrollToThumb(index)}
                aria-label={demo.title}
                className={`h-1 rounded-full p-0 transition-all duration-300 ${
                  active ? "w-20 bg-white" : "w-6 bg-white/25 hover:bg-white/40"
                }`}
              />
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
