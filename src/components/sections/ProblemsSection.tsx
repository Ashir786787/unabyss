import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import ContextCanvas from "@/components/ui/ContextCanvas";

const agents = [
  { name: "Claude", src: "/images/tools/claude.svg" },
  { name: "ChatGPT", src: "/images/tools/chatgpt.svg" },
  { name: "Cursor", src: "/images/tools/cursor.svg" },
  { name: "Gemini", src: "/images/tools/gemini.svg" },
];

const sources = [
  { name: "Slack", src: "/images/tools/slack.svg" },
  { name: "Gmail", src: "/images/tools/gmail.svg" },
  { name: "Notion", src: "/images/tools/notion.svg" },
  { name: "Calendar", src: "/images/tools/google-calendar.svg" },
  { name: "GitHub", src: "/images/tools/github.svg" },
];

export default function ProblemsSection() {
  return (
    <section className="relative px-6 py-24 sm:px-10 sm:py-32 lg:px-12">
      <div className="relative mx-auto max-w-[1100px]">
        <Reveal className="mb-12 flex flex-col items-center text-center">
          <span className="v2-print-label">The gap</span>
          <h2
            className="v2-print-display mt-5 text-white"
            style={{
              fontSize: "clamp(32px, 4.4vw, 54px)",
              lineHeight: 1.2,
            }}
          >
            Two gaps, every day
          </h2>
        </Reveal>

        <Reveal
          delay={120}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5"
        >
          <div className="v2-shine v2-shine--light v2-card-glass flex flex-col gap-5 rounded-[18px] p-6 sm:p-7">
            <div className="prob-agents">
              {agents.map((agent) => (
                <span key={agent.name} className="prob-node" title={agent.name}>
                  <img src={agent.src} alt={agent.name} loading="lazy" />
                </span>
              ))}
            </div>

            <div>
              <h3 className="text-[20px] font-medium text-white/90 sm:text-[22px]">
                Your AI tools don&apos;t talk to each other
              </h3>
              <p className="mt-3 text-[13.5px] font-light leading-[1.7] text-white/60">
                You run ChatGPT for some things, Claude for others, maybe Cursor
                or Gemini too - and each is a blank slate to the rest. What you
                figured out in one is invisible to the next.
              </p>
            </div>
          </div>

          <div className="v2-shine v2-shine--light v2-card-glass flex flex-col gap-5 rounded-[18px] p-6 sm:p-7">
            <div className="prob-sources">
              {sources.map((source) => (
                <span key={source.name} className="prob-chip" title={source.name}>
                  <img src={source.src} alt={source.name} loading="lazy" />
                  {source.name}
                </span>
              ))}
            </div>

            <div>
              <h3 className="text-[20px] font-medium text-white/90 sm:text-[22px]">
                Your context lives where AI can&apos;t see it
              </h3>
              <p className="mt-3 text-[13.5px] font-light leading-[1.7] text-white/60">
                Your work is sitting in Slack, Gmail, Notion, Calendar, GitHub -
                but AI can&apos;t extract information from there, so you keep
                re-explaining what&apos;s already written down somewhere.
              </p>
            </div>
          </div>

          <blockquote className="v2-shine v2-shine--light v2-card-glass grid grid-cols-1 items-stretch overflow-hidden rounded-[18px] sm:grid-cols-[0.9fr_1.1fr] md:col-span-2">
            <div className="aspect-[5/3] w-full sm:aspect-auto sm:h-full sm:min-h-full">
              <ContextCanvas />
            </div>

            <div className="flex flex-col justify-center gap-6 p-7 sm:p-9">
              <p
                className="v2-print-display text-center text-white sm:text-left"
                style={{
                  fontSize: "clamp(22px, 2.8vw, 34px)",
                  lineHeight: 1.25,
                }}
              >
                Your context is everywhere - and your AI sees none of it.
              </p>

              <div>
                <a
                  href="https://app.unabyss.com/register"
                  className="group flex h-11 w-full shrink-0 items-center justify-center gap-1.5 rounded-full bg-white px-5 text-[13px] font-medium text-black transition-all hover:bg-white/90 sm:inline-flex sm:w-auto"
                >
                  Start now
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
