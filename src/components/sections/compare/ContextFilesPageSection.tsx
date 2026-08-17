import {
  ArrowRight,
  Clock,
  FileExclamationPoint,
  FileText,
  Upload,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import CompareHero from "@/components/sections/compare/CompareHero";
import CompareTable from "@/components/sections/compare/CompareTable";
import CompareAccordion from "@/components/sections/compare/CompareAccordion";
import CompareCta from "@/components/sections/compare/CompareCta";
import SectionHeader from "@/components/sections/compare/SectionHeader";
import { contextFilesCompareTable } from "@/data/compare-pages";

function StaleVisual() {
  return (
    <div
      className="grid place-items-center px-[6cqw] py-[7cqw]"
      style={{ containerType: "inline-size" }}
    >
      <div className="w-[82%] overflow-hidden rounded-[4cqw] border border-white/10 bg-[#161514]/[0.72] shadow-[0_4cqw_10cqw_-4cqw_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-[2.6cqw] border-b border-white/7 px-[3.6cqw] py-[3cqw]">
          <FileText className="size-[5cqw] text-[#efe7e0]" strokeWidth={1.6} />
          <span className="text-[4cqw] font-medium text-[#efe7e0]">
            company.md
          </span>
        </div>
        <div className="flex flex-col gap-[2.6cqw] px-[4cqw] py-[4cqw]">
          <span className="h-[2.8cqw] rounded-full bg-white/10" />
          <span className="h-[2.8cqw] rounded-full bg-white/10" />
          <span className="h-[2.8cqw] w-[55%] rounded-full bg-white/10" />
          <span className="mt-[4cqw] inline-flex items-center gap-[1.4cqw] self-start rounded-full bg-[#e0675a]/[0.12] px-[2.6cqw] py-[1.4cqw] text-[3.2cqw] font-semibold text-[#e0675a] [border:1px_solid_#e0675a52]">
            <Clock className="size-[3.4cqw]" />
            Updated 7 days ago
          </span>
        </div>
      </div>
    </div>
  );
}

function UploadTaxVisual() {
  return (
    <div
      className="flex flex-col items-center gap-[3cqw] px-[6cqw] py-[7cqw]"
      style={{ containerType: "inline-size" }}
    >
      <div className="flex items-center gap-[2.4cqw] rounded-[3cqw] border border-white/10 bg-[#161514]/[0.72] px-[4cqw] py-[2.6cqw] pr-[4cqw]">
        <FileText className="size-[4.4cqw] text-[#efe7e0]" strokeWidth={1.6} />
        <span className="text-[3.6cqw] font-medium text-[#efe7e0]">
          context.md
        </span>
      </div>
      <span className="grid place-items-center text-white/45">
        <ArrowRight className="size-[6cqw]" />
      </span>
      <div className="flex gap-[3cqw]">
        {["/images/tools/claude.svg", "/images/tools/chatgpt.svg", "/images/tools/cursor.svg"].map(
          (src) => (
            <span
              key={src}
              className="grid aspect-square w-[13cqw] place-items-center rounded-[2.6cqw] border border-white/8 bg-white/3"
            >
              <img
                src={src}
                alt=""
                aria-hidden="true"
                className="h-[48%] w-[48%] object-contain"
              />
            </span>
          ),
        )}
      </div>
      <span className="inline-flex items-center gap-[1.4cqw] self-center justify-center rounded-full bg-[#e0675a]/[0.12] px-[2.6cqw] py-[1.4cqw] text-[3.2cqw] font-semibold text-[#e0675a] [border:1px_solid_#e0675a52]">
        <Upload className="size-[3.4cqw]" />
        Re-upload, every tool
      </span>
    </div>
  );
}

function SliceVisual() {
  return (
    <div
      className="flex flex-col items-center gap-[3cqw] px-[6cqw] py-[7cqw]"
      style={{ containerType: "inline-size" }}
    >
      <div className="grid w-[46cqw] grid-cols-3 gap-[2.6cqw]">
        {["/images/tools/gmail.svg", "/images/tools/notion.svg", "/images/tools/linear.svg", "/images/tools/slack.svg", "/images/tools/github.svg", "/images/tools/google-drive.svg"].map(
          (src) => (
            <span
              key={src}
              className="grid aspect-square place-items-center rounded-[2.6cqw] border border-white/8 bg-white/3"
            >
              <img
                src={src}
                alt=""
                aria-hidden="true"
                className="h-[48%] w-[48%] object-contain"
              />
            </span>
          ),
        )}
      </div>
      <span className="grid place-items-center text-white/45">
        <ArrowRight className="size-[6cqw]" />
      </span>
      <div className="flex items-center gap-[2.4cqw] rounded-[3cqw] border border-white/10 bg-[#161514]/[0.72] px-[4cqw] py-[2.6cqw]">
        <FileExclamationPoint className="size-[4.4cqw] text-[#efe7e0]" strokeWidth={1.6} />
        <span className="text-[3.6cqw] font-medium text-[#efe7e0]">
          notes.md
        </span>
      </div>
      <span className="inline-flex items-center gap-[1.4cqw] self-center justify-center rounded-full bg-[#e0675a]/[0.12] px-[2.6cqw] py-[1.4cqw] text-[3.2cqw] font-semibold text-[#e0675a] [border:1px_solid_#e0675a52]">
        A slice
      </span>
    </div>
  );
}

const catchCards = [
  {
    title: "Stale within a week",
    body: "A context file is a snapshot. The moment you write it, the clock starts - after a week, it's often outdated. Updating it every time something changes takes a lot of time. Alternatively, you let your AI reason from last week's reality - worse output, and the gap grows every day.",
    visual: <StaleVisual />,
  },
  {
    title: "The upload tax",
    body: "You write it, then re-upload or re-paste it into every tool that needs it. Multiply by every file, every tool, every update. That's time you spend feeding AI instead of using it.",
    visual: <UploadTaxVisual />,
  },
  {
    title: "You can't write everything",
    body: "A file only holds what you remembered to type. Your real context is scattered across email, calendar, docs, and repos - far more than anyone sits down and writes out. The AI works from the slice you captured, not the full picture.",
    visual: <SliceVisual />,
  },
];

export default function ContextFilesPageSection() {
  return (
    <>
      <CompareHero
        label="Compare"
        title="Unabyss vs. context files"
        subtitle="A .md file with your bio, your company, your goals - handed to AI so it knows you. That's how a lot of people deliver context to AI these days. And for a while, it does the job."
      />

      <section className="relative px-6 py-20 sm:px-10 sm:py-28 lg:px-12">
        <div className="relative mx-auto max-w-[1100px]">
          <SectionHeader
            label="The catch"
            title="Three problems with context files"
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
            {catchCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 80} className="h-full">
                <div className="v2-shine v2-shine--light v2-card-glass relative flex h-full flex-col overflow-hidden rounded-[18px]">
                  <div className="relative grid items-center [aspect-ratio:7/5] [mask-image:linear-gradient(to_bottom,black_0%,black_82%,transparent_100%)]">
                    {card.visual}
                  </div>
                  <div className="flex flex-col gap-2 px-6 pb-6 pt-2">
                    <h3 className="text-[17px] font-medium leading-snug text-white">
                      {card.title}
                    </h3>
                    <p className="text-[15px] font-light leading-[1.65] text-white/60">
                      {card.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 py-16 sm:px-10 sm:py-20 lg:px-12">
        <div className="relative mx-auto max-w-[1100px]">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,2fr)] lg:gap-14">
            <Reveal className="flex flex-col items-start gap-3">
              <span className="v2-print-label">A better way</span>
              <h2
                className="v2-print-display max-w-[14ch] text-white"
                style={{ fontSize: "clamp(28px, 3.5vw, 44px)", lineHeight: 1.2 }}
              >
                Context that stays alive
              </h2>
            </Reveal>
            <Reveal delay={120} className="flex flex-col gap-6">
              <p className="text-[16px] font-light leading-[1.8] text-white/65 sm:text-[17px]">
                Unabyss connects to where your information already lives -
                Gmail, Calendar, Notion, GitHub, LinkedIn - and builds a
                structured context vault automatically, in under 90 seconds.
                Because it stays connected to your sources, it&apos;s always up to
                date.
              </p>
              <p className="text-[16px] font-light leading-[1.8] text-white/65 sm:text-[17px]">
                It also pulls from the AI tools and agents you connect - so what
                you work on in Claude, ChatGPT, or Cursor feeds back into your
                context too. A .md file can&apos;t do that. It has no idea what you
                did in any of them yesterday.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative px-6 py-16 sm:px-10 sm:py-20 lg:px-12">
        <div className="relative mx-auto max-w-[1100px]">
          <SectionHeader
            label="Side by side"
            title="Context files vs. Unabyss"
          />
          <Reveal>
            <CompareTable table={contextFilesCompareTable} leading="" />
          </Reveal>
        </div>
      </section>

      <section className="relative px-6 py-16 sm:px-10 sm:py-20 lg:px-12">
        <div className="relative mx-auto max-w-[1100px]">
          <SectionHeader
            label="Keeping it honest"
            title="When a context file is enough"
          />

          <div className="mt-10 grid gap-4 sm:gap-5 md:grid-cols-2">
            <Reveal className="h-full">
              <div className="v2-shine v2-shine--light v2-card-glass relative flex h-full flex-col gap-4 overflow-hidden rounded-[22px] p-7 sm:p-9">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/8 text-white/55">
                    <FileText className="size-4" strokeWidth={1.6} />
                  </span>
                  <h3 className="text-[16px] font-medium leading-snug text-white/80">
                    A context file is plenty when...
                  </h3>
                </div>
                <p className="text-[16px] font-light leading-[1.7] text-white/65 sm:text-[17px]">
                  Your situation barely changes and you only use one AI tool. A
                  simple .md file is fine - don&apos;t over-build.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200} className="h-full">
              <div className="v2-shine v2-shine--gold v2-glass-panel--gold relative flex h-full flex-col gap-4 overflow-hidden rounded-[22px] p-7 sm:p-9">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[var(--gold-muted)]/15">
                    <img
                      src="/images/pages/unabyss-mark.svg"
                      alt=""
                      aria-hidden="true"
                      className="size-5 object-contain"
                    />
                  </span>
                  <h3 className="text-[16px] font-medium leading-snug text-white">
                    Reach for Unabyss when...
                  </h3>
                </div>
                <p className="text-[16px] font-light leading-[1.7] text-white/65 sm:text-[17px]">
                  Your context moves - new projects, new priorities, multiple
                  tools - and you&apos;d rather it just stay current on its own.
                </p>
              </div>
            </Reveal>
          </div>

          <p className="mt-6 text-center text-[15px] font-light leading-[1.7] text-white/50">
            Start with the file - switch when it stops keeping up.
          </p>
        </div>
      </section>

      <section className="relative px-6 pb-16 pt-4 sm:px-10 lg:px-12">
        <div className="relative mx-auto max-w-[1100px]">
          <SectionHeader
            label="Compare"
            title="Comparing something else?"
            paragraph="Weighing Unabyss against another way of giving AI context?"
          />
          <CompareAccordion defaultIndex={1} />
        </div>
      </section>

      <CompareCta
        title="Ready to trade a stale file for context that stays current?"
        sub="Connect one source in under a minute."
      />
    </>
  );
}
