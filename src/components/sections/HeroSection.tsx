import { ArrowUpRight } from "lucide-react";
import PhBadge from "@/components/ui/PhBadge";
import { Marquee } from "@/components/ui/Marquee";
import { tools } from "@/data/tools";

const heroIcons = [
  { name: "Claude", src: "/images/tools/claude.svg" },
  { name: "ChatGPT", src: "/images/tools/chatgpt.svg" },
  { name: "OpenClaw", src: "/images/tools/openclaw.svg" },
];

export default function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[70vh] flex-col justify-center overflow-hidden px-6 pb-16 pt-36 sm:px-10 sm:pt-44 lg:px-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 45% at 50% 38%, rgba(255,255,255,0.06), transparent 70%)",
        }}
      />

      <div className="mx-auto flex max-w-[1100px] flex-col items-center text-center">
        <div className="mb-7">
          <div className="pointer-events-auto flex items-center gap-2">
            <PhBadge period="day" className="relative z-10" />
            <PhBadge period="week" className="relative z-0 hidden sm:block" />
            <PhBadge period="month" className="relative z-0 hidden sm:block" />
          </div>
        </div>

        <h1 className="v2-print-display w-full break-words leading-[1.14] text-white text-[clamp(30px,7.4vw,38px)] max-sm:max-w-[calc(100vw_-_3rem)] sm:w-auto sm:text-balance sm:text-[clamp(32px,4.8vw,60px)]">
          One memory for all your apps and AI agents{" "}
          <span className="ml-[0.1em] inline-flex items-center gap-[0.3em] align-middle">
            {heroIcons.map((icon) => (
              <img
                key={icon.name}
                src={icon.src}
                alt={icon.name}
                className="inline-block h-[0.8em] w-[0.8em] shrink-0 object-contain"
                loading="eager"
                decoding="async"
              />
            ))}
          </span>
        </h1>

        <p className="mt-7 hidden max-w-[52ch] text-[15px] font-light leading-[1.7] text-white/70 sm:block sm:text-[16px]">
          What you tell Claude, ChatGPT already knows - Unabyss gives every AI
          one shared memory, built from your work and the tools you use daily. No
          re-explaining.
        </p>

        <div className="mt-9">
          <a
            href="https://app.unabyss.com/register"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex h-12 items-center gap-1.5 rounded-full bg-white px-6 text-[14px] font-medium text-black transition-all hover:bg-white/90 sm:inline-flex sm:w-auto"
          >
            Start free now
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>

      <Marquee tools={tools} counter="900,000+">
        <a
          href="https://elevenlabs.io/text-to-speech"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-1.5 no-underline opacity-80 transition-opacity hover:opacity-100 sm:gap-2.5"
        >
          <span className="text-[8.5px] font-medium uppercase leading-none tracking-[0.18em] text-white/45 sm:text-[10.5px] sm:tracking-[0.22em]">
            Backed by
          </span>
          <img
            src="/images/elevenlabs-grants.webp"
            alt="ElevenLabs Grants"
            className="h-2.5 w-auto sm:h-4"
            loading="lazy"
            decoding="async"
          />
        </a>
      </Marquee>
    </section>
  );
}
