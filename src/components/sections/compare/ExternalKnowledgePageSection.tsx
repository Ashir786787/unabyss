import { ArrowUpRight, Check } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import CompareHero from "@/components/sections/compare/CompareHero";
import CompareTable from "@/components/sections/compare/CompareTable";
import CompareAccordion from "@/components/sections/compare/CompareAccordion";
import CompareCta from "@/components/sections/compare/CompareCta";
import SectionHeader from "@/components/sections/compare/SectionHeader";
import { externalKnowledgeCompareTable } from "@/data/compare-pages";

const fieldCards = [
  {
    src: "/images/tools/github.svg",
    alt: "GitHub",
    href: "https://github.com",
    title: "A GitHub repo as context",
    body: "Markdown files - your notes, project docs, decisions - kept in a repo and fed to AI. Version-controlled, yours, simple. But you write and maintain every file, and it describes a project, not the full picture of your work.",
  },
  {
    src: "/images/pages/andrej-karpathy.jpg",
    alt: "Andrej Karpathy",
    href: "https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f",
    title: "Karpathy's LLM Wiki",
    body: "A pattern - a viral idea file, not a product - where the LLM maintains interlinked markdown pages compiled from raw sources, with an ingest/query/lint loop. Elegant and compounding, but a setup you run and curate, and it leans on your discipline to feed and lint it.",
  },
  {
    src: "/images/pages/garry-tan.jpg",
    alt: "Garry Tan",
    href: "https://github.com/garry-tan/gbrain",
    title: "GBrain",
    body: "Garry Tan's open-source, local-first markdown + Postgres brain for AI agents. MCP-native, a real knowledge graph, impressive retrieval. But it's built to be operated by developers - CLI, embeddings, sync jobs, schema upkeep, a VPS. Day-one value is limited; the payoff compounds over months.",
  },
];

const amplifyCards = [
  {
    title: "Keep your repo or LLM Wiki",
    body: "For the deep, project-specific knowledge they're great at. Unabyss handles the layer that travels across every tool - who you are, what you're working on, how it all connects.",
  },
  {
    title: "Connect your GitHub",
    body: "As a source in Unabyss - your repo activity becomes structured, permissioned context usable in every AI tool, not just inside the repo.",
  },
  {
    title: "Export anytime",
    body: "Unabyss gives you your context as markdown, so nothing's locked in - drop it wherever you like.",
  },
];

export default function ExternalKnowledgePageSection() {
  return (
    <>
      <CompareHero
        label="Compare"
        title="Unabyss vs. building your own context system"
        subtitle="GitHub repos, Karpathy's LLM Wiki, GBrain - there's a whole wave of ways to give the AI context that you build and run yourself. Here's how they compare to a managed context layer."
      />

      <section className="relative px-6 py-20 sm:px-10 sm:py-28 lg:px-12">
        <div className="relative mx-auto max-w-[1100px]">
          <SectionHeader
            label="The field"
            title="What these tools actually are"
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
            {fieldCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 80} className="h-full">
                <div className="v2-shine v2-shine--light v2-card-glass flex h-full flex-col gap-4 rounded-[18px] p-6">
                  <div className="flex items-center gap-3.5">
                    <span className="flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5">
                      <img
                        src={card.src}
                        alt={card.alt}
                        className="size-full object-cover"
                      />
                    </span>
                    <a
                      href={card.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 text-[17px] font-medium leading-snug text-white no-underline transition-colors hover:text-[var(--gold-bright)]"
                    >
                      {card.title}
                      <ArrowUpRight
                        strokeWidth={1.8}
                        className="size-4 shrink-0 text-white/40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  </div>
                  <p className="text-[15px] font-light leading-[1.65] text-white/60">
                    {card.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-6 py-16 sm:px-10 sm:py-20 lg:px-12">
        <div className="relative mx-auto max-w-[1100px]">
          <SectionHeader label="Side by side" title="Where each one lands" />
          <Reveal>
            <CompareTable table={externalKnowledgeCompareTable} leading="" />
          </Reveal>
        </div>
      </section>

      <section className="relative px-6 py-16 sm:px-10 sm:py-20 lg:px-12">
        <div className="relative mx-auto max-w-[1100px]">
          <Reveal className="mx-auto flex max-w-[760px] flex-col items-center gap-3 text-center">
            <span className="v2-print-label">Not a replacement</span>
            <h2
              className="v2-print-display text-white"
              style={{ fontSize: "clamp(28px, 3.5vw, 44px)", lineHeight: 1.2 }}
            >
              We amplify these, not replace them
            </h2>
            <p className="mt-3 text-[16px] font-light leading-[1.75] text-white/60 sm:text-[17px]">
              This isn&apos;t rip-and-replace. The cleanest setups often combine two
              layers: a context layer for the full picture of you - automatic,
              cross-tool, always current - and one of these for a specific job.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
            {amplifyCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 80} className="h-full">
                <div className="v2-shine v2-shine--light v2-card-glass flex h-full flex-col gap-3 rounded-[18px] p-6">
                  <span className="flex size-9 items-center justify-center rounded-full bg-[var(--gold-muted)]/15 text-[var(--gold-bright)]">
                    <Check className="size-4" strokeWidth={2} />
                  </span>
                  <h3 className="text-[16px] font-medium leading-snug text-white">
                    {card.title}
                  </h3>
                  <p className="text-[15px] font-light leading-[1.65] text-white/60">
                    {card.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-[680px] text-center text-[15px] font-light leading-[1.7] text-white/55">
            A context file can&apos;t tell five different AI tools who you are. A
            self-hosted brain can&apos;t maintain itself without you. Different jobs
            - use the right layer for each.
          </p>
        </div>
      </section>

      <section className="relative px-6 py-16 sm:px-10 sm:py-20 lg:px-12">
        <div className="relative mx-auto max-w-[1100px]">
          <SectionHeader
            label="The real difference"
            title="Who gets to have this"
          />

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <div className="v2-shine v2-shine--light v2-card-glass flex h-full flex-col gap-3 rounded-[18px] p-6">
                <h3 className="text-[17px] font-medium leading-snug text-white">
                  Build-your-own context
                </h3>
                <p className="text-[15px] font-light leading-[1.65] text-white/60">
                  A developer privilege. It assumes a CLI, a database, and the
                  time to run it.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="v2-shine v2-shine--gold v2-glass-panel--gold flex h-full flex-col gap-3 rounded-[18px] p-6">
                <h3 className="text-[17px] font-medium leading-snug text-white">
                  Unabyss
                </h3>
                <p className="text-[15px] font-light leading-[1.65] text-white/60">
                  The same idea - owned, structured, cross-tool context - made
                  managed, so a founder, a marketer, or a consultant gets it
                  without operating infrastructure. Builders still get the depth
                  (MCP, REST, exports, and code context via GitHub / GitLab /
                  Linear). Everyone else finally gets in.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative px-6 pb-16 pt-4 sm:px-10 lg:px-12">
        <div className="relative mx-auto max-w-[1100px]">
          <SectionHeader
            label="Compare"
            title="Comparing something else?"
            paragraph="Weighing Unabyss against another way of giving AI context?"
          />
          <CompareAccordion defaultIndex={2} />
        </div>
      </section>

      <CompareCta
        title="Want owned, cross-tool context without running the infrastructure?"
        sub="Connect one source in under a minute."
      />
    </>
  );
}
