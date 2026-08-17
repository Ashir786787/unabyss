import {
  ArrowRight,
  ArrowUpRight,
  CreditCard,
  FileText,
  Lock,
  Mail,
  MessageSquare,
  Quote,
  RefreshCw,
  TrendingUp,
  TriangleAlert,
  Layers,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import CompareHero from "@/components/sections/compare/CompareHero";
import CompareTable from "@/components/sections/compare/CompareTable";
import CompareAccordion from "@/components/sections/compare/CompareAccordion";
import CompareCta from "@/components/sections/compare/CompareCta";
import SectionHeader from "@/components/sections/compare/SectionHeader";
import {
  llmMemoryBasicsTable,
  llmMemoryCompareTable,
} from "@/data/compare-pages";

const siloLogos = [
  "/images/tools/claude.svg",
  "/images/tools/chatgpt.svg",
  "/images/tools/gemini.svg",
];

const siloRows: { icon: typeof Mail; label: string }[] = [
  { icon: Mail, label: "mail" },
  { icon: MessageSquare, label: "msg" },
  { icon: FileText, label: "doc" },
  { icon: Mail, label: "mail" },
];

function SiloedVisual() {
  return (
    <div
      className="flex items-start justify-center gap-[4cqw] px-[6cqw] py-[8cqw]"
      style={{ containerType: "inline-size" }}
    >
      {siloLogos.map((logo) => (
        <div
          key={logo}
          className="flex flex-1 max-w-[26cqw] flex-col items-center gap-[3cqw]"
        >
          <span className="flex size-[12cqw] flex-none items-center justify-center rounded-full border border-white/10 bg-white/6">
            <img
              src={logo}
              alt=""
              aria-hidden="true"
              className="h-[56%] w-[56%] object-contain"
            />
          </span>
          <div className="flex w-full flex-col gap-[2.4cqw] rounded-[3.4cqw] border border-white/10 bg-[#161514]/[0.72] p-[3cqw]">
            {siloRows.map((row) => (
              <span
                key={row.label}
                className="flex items-center gap-[2cqw] text-white/45"
              >
                <row.icon strokeWidth={1.7} className="size-[4cqw]" />
                <span className="h-[2.2cqw] flex-1 rounded-full bg-white/14" />
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ShallowVisual() {
  return (
    <div
      className="grid place-items-center px-[6cqw] py-[7cqw]"
      style={{ containerType: "inline-size" }}
    >
      <div className="w-[74%] overflow-hidden rounded-[4cqw] border border-white/10 bg-[#161514]/[0.72] shadow-[0_4cqw_10cqw_-4cqw_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-[2.6cqw] border-b border-white/7 px-[3.6cqw] py-[3cqw]">
          <img
            src="/images/tools/claude.svg"
            alt=""
            aria-hidden="true"
            className="size-[5cqw] object-contain"
          />
          <span className="text-[4cqw] font-medium text-[#efe7e0]">Claude</span>
        </div>
        <div className="flex flex-col gap-[3cqw] px-[4cqw] py-[4cqw]">
          <span className="max-w-[82%] self-end rounded-[3.2cqw] rounded-br-[1cqw] bg-white/10 px-[3.6cqw] py-[3cqw] text-[3.7cqw] font-light leading-[1.4] text-[#efe7e0]">
            What did the team decide in Slack yesterday?
          </span>
          <span className="max-w-[82%] self-start rounded-[3.2cqw] rounded-bl-[1cqw] border border-white/10 bg-white/3 px-[3.6cqw] py-[3cqw] text-[3.7cqw] font-light leading-[1.4] text-[#a39e98]">
            I don&apos;t remember anything from your Slack.
          </span>
        </div>
      </div>
    </div>
  );
}

const lockedTiles = [
  "/images/tools/gmail.svg",
  "/images/tools/slack.svg",
  "/images/tools/notion.svg",
  "/images/tools/google-drive.svg",
  "/images/tools/linear.svg",
  "/images/tools/github.svg",
];

function LockedInVisual() {
  return (
    <div
      className="grid place-items-center px-[6cqw] py-[7cqw]"
      style={{ containerType: "inline-size" }}
    >
      <div className="relative w-full overflow-hidden rounded-[4cqw] border border-white/10 bg-[#161514]/[0.72] shadow-[0_4cqw_10cqw_-4cqw_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-[2.6cqw] border-b border-white/7 px-[3.6cqw] py-[3cqw]">
          <img
            src="/images/tools/chatgpt.svg"
            alt=""
            aria-hidden="true"
            className="size-[5cqw] object-contain"
          />
          <span className="text-[4cqw] font-medium text-[#efe7e0]">ChatGPT</span>
        </div>
        <div className="grid grid-cols-3 gap-[2.8cqw] px-[4cqw] py-[4cqw]">
          {lockedTiles.map((src) => (
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
          ))}
        </div>
        <div
          className="absolute inset-[4cqw] flex flex-col items-center justify-center gap-[1.8cqw] rounded-[3cqw] bg-[#141312]/[0.55]"
          aria-hidden="true"
        >
          <span className="grid size-[11cqw] place-items-center rounded-full bg-[#e0675a] text-black shadow-[0_0_4cqw_rgba(224,103,90,0.55)]">
            <Lock className="size-[5.2cqw]" strokeWidth={2} />
          </span>
        </div>
      </div>
    </div>
  );
}

function VaultVisual() {
  return (
    <div
      className="flex flex-col items-center gap-[3.5cqw] px-[6cqw] py-[7cqw]"
      style={{ containerType: "inline-size" }}
    >
      <div className="flex gap-[3cqw]">
        {["/images/tools/notion.svg", "/images/tools/gmail.svg", "/images/tools/github.svg", "/images/tools/slack.svg"].map(
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
      <span className="grid place-items-center text-white/45">
        <ArrowRight className="size-[6cqw]" />
      </span>
      <div className="flex w-fit min-w-[52cqw] max-w-full items-center gap-[3cqw] rounded-[3.4cqw] border border-[var(--gold-rim)] bg-[#281f14]/[0.9] p-[3cqw] pr-[6cqw] shadow-[0_3cqw_9cqw_-3cqw_rgba(0,0,0,0.5)]">
        <span className="grid size-[10cqw] flex-none place-items-center rounded-[2.8cqw] bg-[#e0a65a]/[0.16]">
          <img
            src="/images/pages/unabyss-mark.svg"
            alt="Unabyss"
            className="h-[58%] w-[58%] object-contain"
          />
        </span>
        <span className="flex flex-col gap-[0.6cqw]">
          <span className="text-[3.8cqw] font-medium text-[#efe7e0]">
            Your context vault
          </span>
          <span className="truncate text-[3cqw] text-[#a39e98]">
            One profile - you own it
          </span>
        </span>
      </div>
    </div>
  );
}

function PriceHikeVisual() {
  return (
    <div
      className="grid place-items-center px-[6cqw] py-[7cqw]"
      style={{ containerType: "inline-size" }}
    >
      <div className="w-full overflow-hidden rounded-[4cqw] border border-white/10 bg-[#161514]/[0.72] shadow-[0_4cqw_10cqw_-4cqw_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-[2.6cqw] border-b border-white/7 px-[3.6cqw] py-[3cqw]">
          <CreditCard className="size-[5cqw] text-[#efe7e0]" strokeWidth={1.6} />
          <span className="text-[4cqw] font-medium text-[#efe7e0]">Billing</span>
        </div>
        <div className="flex flex-col gap-[2.6cqw] px-[4cqw] py-[4cqw]">
          <div className="flex items-center justify-between gap-[3cqw]">
            <span className="text-[3.8cqw] font-medium text-[#efe7e0]">
              Pro plan
            </span>
            <span className="flex items-center gap-[2cqw]">
              <span className="text-[4.4cqw] font-semibold text-[#7c7873] line-through">
                $20
              </span>
              <ArrowRight className="size-[4cqw] text-white/45" />
              <span className="text-[4.4cqw] font-semibold text-[#e0675a]">
                $60
              </span>
            </span>
          </div>
          <span className="mt-[4cqw] inline-flex items-center gap-[1.4cqw] self-start rounded-full bg-[#e0675a]/[0.12] px-[2.6cqw] py-[1.4cqw] text-[3.2cqw] font-semibold text-[#e0675a] [border:1px_solid_#e0675a52]">
            <TrendingUp className="size-[3.4cqw]" />
            +200% / mo
          </span>
        </div>
      </div>
    </div>
  );
}

function ProductChangeVisual() {
  return (
    <div
      className="grid place-items-center px-[6cqw] py-[7cqw]"
      style={{ containerType: "inline-size" }}
    >
      <div className="w-full overflow-hidden rounded-[4cqw] border border-white/10 bg-[#161514]/[0.72] shadow-[0_4cqw_10cqw_-4cqw_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-[2.6cqw] border-b border-white/7 px-[3.6cqw] py-[3cqw]">
          <Layers className="size-[5cqw] text-[#efe7e0]" strokeWidth={1.6} />
          <span className="text-[4cqw] font-medium text-[#efe7e0]">Models</span>
        </div>
        <div className="flex flex-col gap-[2.6cqw] px-[4cqw] py-[4cqw]">
          <div className="flex items-center justify-between gap-[3cqw] rounded-[2.8cqw] border border-white/8 bg-white/3 px-[3.2cqw] py-[2.8cqw]">
            <span className="text-[3.8cqw] font-medium text-[#7c7873] line-through">
              GPT-5
            </span>
            <span className="inline-flex items-center gap-[1.4cqw] rounded-full bg-[#e0675a]/[0.12] px-[2.6cqw] py-[1.4cqw] text-[3.2cqw] font-semibold text-[#e0675a] [border:1px_solid_#e0675a52]">
              <TriangleAlert className="size-[3.4cqw]" />
              Deprecated
            </span>
          </div>
          <div className="flex items-center justify-between gap-[3cqw] rounded-[2.8cqw] border border-white/8 bg-white/3 px-[3.2cqw] py-[2.8cqw]">
            <span className="text-[3.8cqw] font-medium text-[#efe7e0]">
              GPT-5.4
            </span>
            <span className="inline-flex items-center gap-[1.4cqw] rounded-full bg-white/6 px-[2.6cqw] py-[1.4cqw] text-[3.2cqw] font-semibold text-[#a39e98] [border:1px_solid_rgba(255,255,255,0.08)]">
              Replacing
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ForcedOfflineVisual() {
  return (
    <div
      className="relative grid place-items-center px-[3cqw] py-[3cqw]"
      style={{ containerType: "inline-size" }}
    >
      <img
        src="/images/pages/world-europe-red.svg"
        alt=""
        aria-hidden="true"
        className="block h-auto w-full drop-shadow-[0_2cqw_6cqw_rgba(0,0,0,0.4)]"
      />
      <span className="absolute left-1/2 top-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-[2cqw] rounded-full border border-[rgba(224,103,90,0.5)] bg-[#141312]/[0.82] px-[4cqw] py-[2.4cqw] text-[4cqw] font-semibold text-white shadow-[0_2cqw_8cqw_rgba(0,0,0,0.45)] backdrop-blur-sm">
        <Lock className="size-[4.4cqw] text-[#e0675a]" strokeWidth={2} />
        Blocked
      </span>
    </div>
  );
}

const riskCards = [
  {
    title: "Price hike",
    body: "Terms change, and your only copy of context is on the other side of the paywall.",
    visual: <PriceHikeVisual />,
  },
  {
    title: "Product change",
    body: "A model is deprecated or a memory feature is reworked, and your accumulated context shifts with it.",
    visual: <ProductChangeVisual />,
  },
  {
    title: "Forced offline",
    body: "Regulation, outage, or geopolitics can take a model down overnight - with no notice.",
    visual: <ForcedOfflineVisual />,
  },
];

export default function LlmMemoryPageSection() {
  return (
    <>
      <CompareHero
        label="Compare"
        title="Unabyss vs. built-in AI memory"
        subtitle="ChatGPT, Claude, Gemini, and Perplexity all remember you now. Built-in memory is genuinely useful - convenient, mostly automatic, and good at light personalization inside one tool. But it has its limits."
      />

      <section className="relative px-6 py-16 sm:px-10 sm:py-20 lg:px-12">
        <div className="relative mx-auto max-w-[1100px]">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-14">
            <Reveal className="flex flex-col items-start gap-3">
              <span className="v2-print-label">First, the basics</span>
              <h2
                className="v2-print-display max-w-[14ch] text-white"
                style={{ fontSize: "clamp(28px, 3.5vw, 44px)", lineHeight: 1.2 }}
              >
                What memory is and how to use it
              </h2>
              <p className="mt-3 text-[16px] font-light leading-[1.75] text-white/60 sm:text-[17px]">
                A quick intro, so we&apos;re comparing the same thing. Built-in
                memory is a per-tool feature that re-injects things it has
                picked up about you - from your chats, the files you attach or
                upload, and (increasingly) the apps you connect - back into
                future conversations.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <CompareTable table={llmMemoryBasicsTable} leading="Tool" />
              <p className="mt-4 text-[13px] font-light leading-[1.6] text-white/40">
                Behavior shifts often - treat specifics as version-dependent.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative px-6 py-20 sm:px-10 sm:py-28 lg:px-12">
        <div className="relative mx-auto max-w-[1100px]">
          <SectionHeader
            label="The ceiling"
            title="Where built-in memory stops"
            paragraph="Your context belongs to the tool, not to you. What ChatGPT learns stays in ChatGPT. Claude's memory can't help Cursor. Any portability stops at the vendor's walls."
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
            <Reveal delay={80} className="h-full">
              <div className="v2-shine v2-shine--light v2-card-glass relative flex h-full flex-col overflow-hidden rounded-[18px]">
                <div
                  className="relative grid items-center [aspect-ratio:7/5] [mask-image:linear-gradient(to_bottom,black_0%,black_82%,transparent_100%)]"
                >
                  <SiloedVisual />
                </div>
                <div className="flex flex-col gap-2 px-6 pb-6 pt-2">
                  <h3 className="text-[17px] font-medium leading-snug text-white">
                    Siloed
                  </h3>
                  <p className="text-[15px] font-light leading-[1.65] text-white/60">
                    Every tool keeps its own partial picture. None of them share
                    what they know about you.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={160} className="h-full">
              <div className="v2-shine v2-shine--light v2-card-glass relative flex h-full flex-col overflow-hidden rounded-[18px]">
                <div className="relative grid items-center [aspect-ratio:7/5] [mask-image:linear-gradient(to_bottom,black_0%,black_82%,transparent_100%)]">
                  <ShallowVisual />
                </div>
                <div className="flex flex-col gap-2 px-6 pb-6 pt-2">
                  <h3 className="text-[17px] font-medium leading-snug text-white">
                    Shallow
                  </h3>
                  <p className="text-[15px] font-light leading-[1.65] text-white/60">
                    Built from what you fed that one tool - not a structured
                    picture of everything across your work.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={240} className="h-full">
              <div className="v2-shine v2-shine--light v2-card-glass relative flex h-full flex-col overflow-hidden rounded-[18px]">
                <div className="relative grid items-center [aspect-ratio:7/5] [mask-image:linear-gradient(to_bottom,black_0%,black_82%,transparent_100%)]">
                  <LockedInVisual />
                </div>
                <div className="flex flex-col gap-2 px-6 pb-6 pt-2">
                  <h3 className="text-[17px] font-medium leading-snug text-white">
                    Locked in
                  </h3>
                  <p className="text-[15px] font-light leading-[1.65] text-white/60">
                    The more context one tool holds, the more it costs you to
                    leave. Your history becomes a lock-in.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative px-6 py-16 sm:px-10 sm:py-20 lg:px-12">
        <div className="relative mx-auto max-w-[1100px]">
          <SectionHeader label="The alternative" title="A context layer you own" />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            <Reveal delay={100} className="sm:col-span-2 sm:row-span-2">
              <div className="v2-shine v2-shine--gold v2-glass-panel--gold relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-[22px] p-7 sm:p-9">
                <VaultVisual />
                <div className="flex flex-col gap-2">
                  <h3 className="text-[20px] font-medium leading-snug text-white sm:text-[22px]">
                    One vault you own
                  </h3>
                  <p className="text-[15px] font-light leading-[1.7] text-white/60 sm:text-[16px]">
                    Context is pre-extracted from where your information already
                    lives and structured into a single profile you control - not
                    memory trapped inside one vendor.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="v2-shine v2-shine--light v2-card-glass relative flex h-full flex-col gap-4 overflow-hidden rounded-[22px] p-7">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[var(--gold-muted)]/15 text-[var(--gold-bright)]">
                  <Layers className="size-4" strokeWidth={1.6} />
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[16px] font-medium leading-snug text-white">
                    Served over MCP
                  </h3>
                  <p className="text-[14px] font-light leading-[1.7] text-white/60">
                    Connect once. Every authorized tool pulls fresh context on
                    demand over MCP, in every session.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={280}>
              <div className="v2-shine v2-shine--light v2-card-glass relative flex h-full flex-col gap-4 overflow-hidden rounded-[22px] p-7">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[var(--gold-muted)]/15 text-[var(--gold-bright)]">
                  <TrendingUp className="size-4" strokeWidth={1.6} />
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[16px] font-medium leading-snug text-white">
                    Up to 10x fewer tokens
                  </h3>
                  <p className="text-[14px] font-light leading-[1.7] text-white/60">
                    It scores and pulls only the lines that answer the question,
                    instead of dumping raw context the AI has to process.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={360}>
              <div className="v2-shine v2-shine--light v2-card-glass relative flex h-full flex-col gap-4 overflow-hidden rounded-[22px] p-7">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[var(--gold-muted)]/15 text-[var(--gold-bright)]">
                  <RefreshCw className="size-4" strokeWidth={1.6} />
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[16px] font-medium leading-snug text-white">
                    Every tool, every session
                  </h3>
                  <p className="text-[14px] font-light leading-[1.7] text-white/60">
                    The same picture follows you into every AI tool you use - no
                    re-explaining, no outdated md. files.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative px-6 py-16 sm:px-10 sm:py-20 lg:px-12">
        <div className="relative mx-auto max-w-[1100px]">
          <SectionHeader
            label="Side by side"
            title="Built-in memory vs. Unabyss"
          />
          <Reveal>
            <CompareTable table={llmMemoryCompareTable} leading="" />
          </Reveal>
          <p className="mt-4 text-[13px] font-light leading-[1.6] text-white/40">
            Some go further - Perplexity carries context across its own models,
            Gemini can import history from rivals. But it still ends at that
            vendor&apos;s edge.
          </p>
        </div>
      </section>

      <section className="relative px-6 py-20 sm:px-10 sm:py-28 lg:px-12">
        <div className="relative mx-auto max-w-[1100px]">
          <SectionHeader
            label="The risk nobody prices in"
            title="One provider, one point of failure"
            paragraph="Put all your context inside one provider and your work depends on forces neither of you controls."
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
            {riskCards.map((card, index) => (
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

          <div className="mt-12 grid gap-4 sm:mt-14 sm:gap-5 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,3fr)]">
            <Reveal className="flex items-start p-2 sm:p-4 lg:py-6 lg:pr-8">
              <h3 className="whitespace-nowrap text-[17px] font-light leading-[1.25] text-white/85 sm:text-[19px]">
                Real life example:
              </h3>
            </Reveal>
            <div className="flex flex-col gap-4 sm:gap-5">
              <Reveal delay={160}>
                <div className="v2-shine v2-shine--light v2-card-glass relative overflow-hidden rounded-[22px] p-7 sm:p-9">
                  <Quote className="size-8 text-white/15" strokeWidth={1.4} />
                  <p className="mt-4 text-[16px] font-light leading-[1.8] text-white/72 sm:text-[17px]">
                    In June 2026, a U.S. government export-control order forced
                    Anthropic to pull Claude Fable 5 and Mythos 5 offline
                    worldwide - overnight, with no notice. Anthropic opposed the
                    order and still had to comply; businesses that had built
                    workflows around those models lost them the same night. The
                    lesson isn&apos;t that a vendor made a bad call - it&apos;s that a
                    model you depend on can disappear for reasons no one saw
                    coming, and anything you parked inside it goes dark with it.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="v2-shine v2-shine--gold v2-glass-panel--gold relative flex flex-col items-center gap-4 overflow-hidden rounded-[22px] p-7 text-center sm:flex-row sm:items-start sm:p-9 sm:text-left">
                  <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[var(--gold-muted)]/15 sm:mt-0.5">
                    <img
                      src="/images/pages/unabyss-mark.svg"
                      alt="Unabyss"
                      className="size-7 object-contain"
                    />
                  </span>
                  <div className="flex flex-1 flex-col items-center gap-4 sm:items-start">
                    <p className="text-[16px] font-light leading-[1.7] text-white/80 sm:text-[17px]">
                      Owning your context is how you stay independent of any
                      single provider - and of whatever happens to it.
                    </p>
                    <a
                      href="https://app.unabyss.com/register"
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex h-11 items-center gap-1.5 rounded-full bg-white px-5 text-[14px] font-medium text-black no-underline transition-all hover:bg-white/90"
                    >
                      <span className="sm:hidden">Start free</span>
                      <span className="hidden sm:inline">
                        Own your context - start free
                      </span>
                      <ArrowUpRight
                        strokeWidth={1.8}
                        className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-6 py-16 sm:px-10 sm:py-20 lg:px-12">
        <div className="relative mx-auto max-w-[1100px]">
          <SectionHeader label="Keeping it honest" title="You can use both" />

          <div className="mt-10 grid gap-4 sm:gap-5 md:grid-cols-2">
            <Reveal className="h-full">
              <div className="v2-shine v2-shine--light v2-card-glass relative flex h-full flex-col gap-4 overflow-hidden rounded-[22px] p-7 sm:p-9">
                <div className="flex items-center gap-3">
                  <span className="flex shrink-0 items-center">
                    {[
                      "/images/tools/chatgpt.svg",
                      "/images/tools/claude.svg",
                      "/images/tools/gemini.svg",
                      "/images/tools/perplexity.svg",
                    ].map((src, index) => (
                      <img
                        key={src}
                        src={src}
                        alt=""
                        aria-hidden="true"
                        className="size-8 rounded-full border border-white/10 bg-[#161514] object-contain p-1.5"
                        style={{ zIndex: 4 - index, marginLeft: index ? "-10px" : undefined }}
                      />
                    ))}
                  </span>
                  <h3 className="text-[16px] font-medium leading-snug text-white/80">
                    Built-in memory is plenty when...
                  </h3>
                </div>
                <p className="text-[16px] font-light leading-[1.7] text-white/65 sm:text-[17px]">
                  You live in one assistant and just need it to remember a few
                  preferences. That&apos;s it - don&apos;t over-engineer it.
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
                  Your context matters more than any one tool - you want to own
                  it, control exactly what&apos;s shared, stay independent of a
                  single provider, and have every AI work from the same
                  foundation.
                </p>
              </div>
            </Reveal>
          </div>

          <p className="mt-6 text-center text-[15px] font-light leading-[1.7] text-white/50">
            Plenty of people use both - and that&apos;s completely fine.
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
          <CompareAccordion defaultIndex={0} />
        </div>
      </section>

      <CompareCta
        title="Ready to own your context instead of renting it from one provider?"
        sub="Connect one source in under a minute."
      />
    </>
  );
}
