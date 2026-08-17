import { type RefObject } from "react";
import { Maximize2, Minimize2, Volume2 } from "lucide-react";
import MockStage from "@/components/visuals/MockStage";
import { type Demo } from "@/data/demos";

function formatTime(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

export type LoomVisualProps = {
  demo: Demo;
  soundOn: boolean;
  seconds: number;
  expanded: boolean;
  visible: boolean;
  onToggleSound: () => void;
  onToggleFullscreen: () => void;
  bubbleRef: RefObject<HTMLVideoElement | null>;
};

export default function LoomVisual({
  demo,
  soundOn,
  seconds,
  expanded,
  visible,
  onToggleSound,
  onToggleFullscreen,
  bubbleRef,
}: LoomVisualProps) {
  return (
    <div
      role="button"
      tabIndex={0}
      aria-label="Play recording with sound"
      onClick={onToggleSound}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onToggleSound();
        }
      }}
      className={`@container w-full cursor-pointer overflow-hidden rounded-[0.8cqw] border border-white/10 bg-[#14110f] isolate [container-type:inline-size] [box-shadow:0_1.6cqw_4cqw_-1.4cqw_rgba(0,0,0,0.55)] ${
        expanded
          ? "fixed inset-0 z-[9999] m-auto aspect-[16/9] w-[min(80vw,142.222vh,1300px)] cursor-default [box-shadow:0_4cqw_10cqw_-2cqw_rgba(0,0,0,0.8)]"
          : "relative aspect-[16/9] max-[639px]:aspect-[4/6] max-[639px]:rounded-[22px]"
      }`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 scale-[1.04] bg-cover bg-center"
        style={{ backgroundImage: `url(${demo.cover})` }}
      />

      <div
        aria-hidden="true"
        className="absolute -inset-px bg-[radial-gradient(120%_90%_at_50%_0%,rgba(0,0,0,0.1),rgba(0,0,0,0.42)_70%),linear-gradient(180deg,rgba(0,0,0,0.15),rgba(0,0,0,0.35))]"
      />

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onToggleFullscreen();
        }}
        aria-label={expanded ? "Exit full screen" : "Expand to full screen"}
        className="absolute right-[14px] top-[14px] z-[4] grid size-[27px] place-items-center rounded-full border border-white/20 bg-[#14110f]/20 text-white opacity-40 transition-[background-color,opacity] duration-200 [backdrop-filter:blur(6px)] hover:bg-[#14110f]/85 hover:opacity-100 max-[639px]:hidden"
      >
        {expanded ? (
          <Minimize2 className="size-[14px]" strokeWidth={2} />
        ) : (
          <Maximize2 className="size-[14px]" strokeWidth={2} />
        )}
      </button>

      <div className="absolute inset-0 z-[1] flex items-center justify-center p-[5cqw] pb-[6cqw]">
        <div className="flex h-full aspect-[150/100] w-auto max-w-full flex-col overflow-hidden rounded-[1.4cqw] border border-white/[0.08] bg-[#262624] text-[#ecebe4] shadow-[0_2.5cqw_6cqw_-2cqw_rgba(0,0,0,0.55)] [font-family:Lexend,var(--font-geist-sans),sans-serif] [font-weight:300] [--mock-text:#ecebe4] [--mock-muted:#9c9a92] [--mock-faint:#6f6d67]">
          <MockStage key={demo.id} demo={demo} />
        </div>
      </div>

      <div className="pointer-events-none absolute left-[14px] top-[14px] z-[4] flex h-[26px] items-center gap-[5px] rounded-full border border-white/20 bg-[#14110f]/60 px-[10px] text-white [backdrop-filter:blur(6px)] [font-family:var(--font-mono-v2),ui-monospace,monospace] text-[10px] leading-none [font-variant-numeric:tabular-nums]">
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
          key={demo.video}
          muted={!soundOn || !visible}
          autoPlay
          loop
          playsInline
          poster={demo.poster}
          className="size-full object-cover"
        >
          <source src={demo.video} type="video/webm" />
        </video>
      </div>

      <div
        className="absolute bottom-[3cqw] left-[8cqw] z-[2] [clip-path:inset(-30cqw_-30cqw_-30cqw_0)]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onToggleSound}
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
          <img
            src={
              demo.tool === "Claude"
                ? "/images/hero/claude-mark.svg"
                : demo.tool === "ChatGPT"
                  ? "/images/tools/chatgpt.svg"
                  : "/images/tools/cursor.svg"
            }
            alt={demo.tool}
            className="size-[1.3cqw] object-contain [filter:brightness(0)_invert(1)] max-[639px]:size-[13px]"
          />
          {demo.tool}
        </span>
      </div>
    </div>
  );
}
