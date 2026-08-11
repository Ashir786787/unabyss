"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import {
  AudioLines,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Forward,
  Mic,
  PanelLeft,
  Plus,
  Volume2,
} from "lucide-react";

const videos = [
  {
    id: "founder-ceo",
    category: "Founders",
    title: "CEO weekly report",
    src: "/videos/founder-ceo-report.webm",
    cover: "/images/hero/cover-ceo-report.webp",
    poster: "/images/hero/marcin-poster.jpg",
  },
  {
    id: "builder-infra",
    category: "Builders",
    title: "Infra decision review",
    src: "/videos/builder-gcp-review.webm",
    cover: "/images/hero/cover-infra-review.webp",
    poster: "/images/hero/marcin-poster.jpg",
  },
  {
    id: "agency-portfolio",
    category: "Agencies",
    title: "Client portfolio status",
    src: "/videos/agency-client-context.webm",
    cover: "/images/hero/cover-client-portfolio.webp",
    poster: "/images/hero/marcin-poster.jpg",
  },
  {
    id: "founder-investor",
    category: "Founders",
    title: "Investor update",
    src: "/videos/founder-investor-update.webm",
    cover: "/images/hero/cover-investor-update.webp",
    poster: "/images/hero/marcin-poster.jpg",
  },
  {
    id: "builder-billing",
    category: "Builders",
    title: "Billing + deploy check",
    src: "/videos/builder-billing-deploy.webm",
    cover: "/images/hero/cover-billing-deploy.webp",
    poster: "/images/hero/marcin-poster.jpg",
  },
  {
    id: "agency-weekly",
    category: "Agencies",
    title: "Client weekly report",
    src: "/videos/agency-weekly-report.webm",
    cover: "/images/hero/cover-client-weekly.webp",
    poster: "/images/hero/marcin-poster.jpg",
  },
  {
    id: "gtm-marketing",
    category: "GTM",
    title: "Marketing report",
    src: "/videos/gtm-marketing-report.webm",
    cover: "/images/hero/cover-marketing-report.webp",
    poster: "/images/hero/marcin-poster.jpg",
  },
  {
    id: "founder-linkedin",
    category: "Founders",
    title: "LinkedIn strategy",
    src: "/videos/founder-linkedin.webm",
    cover: "/images/hero/cover-infra-review.webp",
    poster: "/images/hero/marcin-poster.jpg",
  },
  {
    id: "builder-repo",
    category: "Builders",
    title: "Repo scaffold",
    src: "/videos/builder-repo-scaffold.webm",
    cover: "/images/hero/cover-repo-scaffold.webp",
    poster: "/images/hero/marcin-poster.jpg",
  },
  {
    id: "gtm-ads",
    category: "GTM",
    title: "Performance ad tests",
    src: "/videos/gtm-performance-ads.webm",
    cover: "/images/hero/cover-performance-ads.webp",
    poster: "/images/hero/marcin-poster.jpg",
  },
];

const CARD_WIDTH = 192;

function formatTime(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

export default function HeroVideoShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [soundOn, setSoundOn] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [canNavPrev, setCanNavPrev] = useState(false);
  const [canNavNext, setCanNavNext] = useState(false);

  const bubbleRef = useRef<HTMLVideoElement>(null);
  const railRef = useRef<HTMLDivElement>(null);

  const activeVideo = videos[activeIndex];

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) {
      return;
    }

    const updateNav = () => {
      const scrollable =
        rail.scrollWidth - rail.clientWidth - 4;
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
    if (soundOn) {
      void bubbleRef.current?.play();
    }
  }, [soundOn]);

  const selectVideo = (index: number) => {
    setActiveIndex(index);
    setSeconds(0);
  };

  const toggleSound = () => {
    setSoundOn((current) => !current);
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.24, duration: 0.7 }}
      className="mx-auto mt-10 w-full max-w-[1400px]"
    >
      <div
        role="button"
        tabIndex={0}
        aria-label="Play recording with sound"
        onClick={toggleSound}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggleSound();
          }
        }}
        className="@container relative aspect-[16/9] w-full cursor-pointer overflow-hidden rounded-[0.8cqw] border border-white/10 bg-[#14110f] isolate [box-shadow:0_1.6cqw_4cqw_-1.4cqw_rgba(0,0,0,0.55)] max-[639px]:aspect-[4/6] max-[639px]:rounded-[22px]"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 scale-[1.04] bg-cover bg-center"
          style={{ backgroundImage: `url(${activeVideo.cover})` }}
        />

        <div
          aria-hidden="true"
          className="absolute -inset-px bg-[radial-gradient(120%_90%_at_50%_0%,rgba(0,0,0,0.1),rgba(0,0,0,0.42)_70%),linear-gradient(180deg,rgba(0,0,0,0.15),rgba(0,0,0,0.35))]"
        />

        <div className="absolute inset-0 z-[1] flex items-center justify-center p-[5cqw] pb-[6cqw]">
          <div className="flex h-full aspect-[150/100] w-auto max-w-full flex-col overflow-hidden rounded-[1.4cqw] border border-white/[0.08] bg-[#262624] text-[#ecebe4] shadow-[0_2.5cqw_6cqw_-2cqw_rgba(0,0,0,0.55)] [font-family:Lexend,var(--font-geist-sans),sans-serif] [font-weight:300]">
            <div className="flex flex-none items-center justify-between px-[1.7cqw] py-[1.5cqw]">
              <div className="flex items-center gap-[1.5cqw]">
                <span className="flex items-center gap-[0.85cqw]">
                  <i className="size-[1.17cqw] rounded-full" style={{ background: "#FF5F57" }} />
                  <i className="size-[1.17cqw] rounded-full" style={{ background: "#FEBC2E" }} />
                  <i className="size-[1.17cqw] rounded-full" style={{ background: "#28C840" }} />
                </span>
                <PanelLeft className="size-[1.76cqw] text-[#9c9a92]" />
                <button
                  type="button"
                  tabIndex={-1}
                  className="ml-[0.4cqw] flex items-center gap-[0.5cqw] rounded-[0.8cqw] bg-transparent px-[0.9cqw] py-[0.4cqw] text-[1.4cqw] font-normal text-[#ecebe4]"
                >
                  {activeVideo.title}
                  <ChevronDown className="size-[1.24cqw] text-[#9c9a92]" />
                </button>
              </div>
              <Forward className="size-[1.76cqw] text-[#9c9a92]" />
            </div>

            <div className="flex min-h-0 flex-1 flex-col items-center justify-center gap-[2.4cqw] px-[4cqw] pb-[5cqw]">
              <div className="flex items-center gap-[0.8cqw] rounded-[1cqw] border border-white/10 bg-white/[0.06] py-[0.55cqw] pl-[0.6cqw] pr-[1.1cqw] text-[1.32cqw] text-[#ecebe4]">
                <span className="grid size-[1.9cqw] place-items-center rounded-[0.45cqw] bg-[#1f1e1d]">
                  <Image
                    src="/images/hero/claude-mark.svg"
                    alt=""
                    width={256}
                    height={257}
                    className="size-[1.25cqw] object-contain"
                  />
                </span>
                Mark as urgent
              </div>
              <p className="mt-[0.6cqw] text-center font-serif text-[3.4cqw] leading-[1.1] text-[#ecebe4]">
                Good morning, Marcin
              </p>
            </div>

            <div className="flex-none px-[4cqw] pb-[1.2cqw] pt-[3cqw]">
              <div className="mx-auto max-w-[62cqw] rounded-[1.7cqw] border border-white/10 bg-[#30302e] p-[1.6cqw] pb-[1.1cqw] [box-shadow:0_0.4cqw_1.4cqw_-0.8cqw_rgba(0,0,0,0.25)]">
                <div className="min-h-[2.6cqw] pb-[1.7cqw] text-[1.5cqw] font-light text-[#6f6d67]">
                  Write a message...
                </div>
                <div className="flex items-center justify-between">
                  <Plus className="size-[1.76cqw] text-[#9c9a92]" />
                  <div className="flex items-center gap-[1.4cqw]">
                    <span className="flex items-center gap-[0.55cqw] text-[1.32cqw] text-[#9c9a92]">
                      <span className="text-[#ecebe4]">Sonnet 5</span>
                      Medium
                      <ChevronDown className="size-[1.24cqw] text-[#9c9a92]" />
                    </span>
                    <Mic className="size-[1.76cqw] text-[#9c9a92]" />
                    <span className="grid size-[2.1cqw] place-items-center rounded-[0.6cqw] text-[#9c9a92]">
                      <AudioLines className="size-[1.76cqw]" />
                    </span>
                  </div>
                </div>
              </div>
              <p className="mx-auto mt-[1cqw] text-center text-[1.08cqw] text-[#6f6d67]">
                Claude is AI and can make mistakes. Please double-check responses.
              </p>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute left-[14px] top-[14px] z-[4] flex h-[26px] items-center gap-[5px] rounded-full border border-white/20 bg-[#14110f]/60 px-[10px] text-white [backdrop-filter:blur(6px)] [font-family:var(--font-geist-mono),ui-monospace,monospace] text-[10px] leading-none [font-variant-numeric:tabular-nums]">
          <span
            className={`size-[6px] rounded-full bg-[#f0433a] [box-shadow:0_0_4px_rgba(240,67,58,0.7)] ${
              soundOn ? "animate-pulse" : ""
            }`}
          />
          {formatTime(seconds)}
        </div>

        <div className="absolute bottom-[3cqw] left-[3cqw] z-[3] size-[10cqw] overflow-hidden rounded-full border-[0.32cqw] border-white bg-[#ffffffeb] [box-shadow:0_1.2cqw_3cqw_-0.8cqw_rgba(0,0,0,0.7)] max-[639px]:size-[19cqw]">
          <video
            ref={bubbleRef}
            key={activeVideo.src}
            muted={!soundOn}
            autoPlay
            loop
            playsInline
            poster={activeVideo.poster}
            className="size-full object-cover"
          >
            <source src={activeVideo.src} type="video/webm" />
          </video>
        </div>

        <div
          className="absolute bottom-[3cqw] left-[8cqw] z-[2] [clip-path:inset(-30cqw_-30cqw_-30cqw_0)]"
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            onClick={toggleSound}
            className={`flex items-center gap-[0.48cqw] whitespace-nowrap rounded-r-full border border-white/70 bg-[#fffffff0] py-[0.64cqw] pl-[5cqw] pr-[1.12cqw] text-[#14110f] [font-family:Lexend,var(--font-geist-sans),sans-serif] text-[0.96cqw] font-medium leading-none [backdrop-filter:blur(6px)] [box-shadow:0_0.6cqw_1.6cqw_-0.6cqw_rgba(0,0,0,0.5)] [transition-property:transform] [transition-duration:0.5s] [transition-timing-function:cubic-bezier(0.2,0.7,0.2,1)] max-[639px]:py-[2.2cqw] max-[639px]:pl-[11cqw] max-[639px]:pr-[3.6cqw] max-[639px]:text-[3.2cqw] ${
              soundOn ? "-translate-x-[120%]" : "translate-x-0"
            }`}
          >
            <Volume2 className="size-[1.24cqw] max-[639px]:size-[4cqw]" />
            Tap for sound
          </button>
        </div>

        <div className="pointer-events-none absolute bottom-[3cqw] right-[3cqw] z-[4] flex items-center gap-[0.65cqw] rounded-full border border-white/20 bg-[#14110f]/60 px-[1.15cqw] py-[0.5cqw] text-[#fff] [backdrop-filter:blur(6px)] [font-family:Lexend,var(--font-geist-sans),sans-serif] text-[1cqw] font-medium leading-none whitespace-nowrap max-[639px]:inset-auto max-[639px]:bottom-auto max-[639px]:left-[14px] max-[639px]:top-[14px] max-[639px]:right-[14px] max-[639px]:h-[26px] max-[639px]:gap-[6px] max-[639px]:px-[12px] max-[639px]:text-[10px]">
          <span className="opacity-70">Unabyss in</span>
          <span className="flex items-center gap-[0.4cqw]">
            <Image
              src="/images/hero/claude-mark.svg"
              alt="Claude"
              width={256}
              height={257}
              className="size-[1.3cqw] object-contain max-[639px]:size-[13px]"
            />
            Claude
          </span>
        </div>
      </div>

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
          {videos.map((video, index) => {
            const active = index === activeIndex;

            return (
              <button
                key={video.id}
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
                  style={{ backgroundImage: `url(${video.cover})` }}
                />
                <span className="flex flex-col gap-0.5 px-0.5 pb-0.5 max-[639px]:gap-[1px]">
                  <span
                    className={`text-[10px] font-medium uppercase tracking-[0.08em] max-[639px]:text-[9px] ${
                      active ? "text-[#f0cd8c]/90" : "text-white/50"
                    }`}
                  >
                    {video.category}
                  </span>
                  <span className="text-[13px] font-medium leading-[1.35] text-white/90 max-[639px]:text-[11.5px] max-[639px]:leading-[1.3]">
                    {video.title}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-4 hidden justify-center gap-2 max-[639px]:flex">
          {videos.map((video, index) => {
            const active = index === activeIndex;

            return (
              <button
                key={video.id}
                type="button"
                onClick={() => scrollToThumb(index)}
                aria-label={video.title}
                className={`h-1 rounded-full p-0 transition-all duration-300 ${
                  active
                    ? "w-20 bg-white"
                    : "w-6 bg-white/25 hover:bg-white/40"
                }`}
              />
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
