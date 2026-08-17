import Reveal from "@/components/ui/Reveal";

export type LegalDocumentSectionType = {
  title: string;
  paragraphs: string[];
};

type LegalDocumentSectionProps = {
  title: string;
  intro?: string;
  lastUpdated?: string;
  sections: LegalDocumentSectionType[];
  langSwitcher?: boolean;
};

export default function LegalDocumentSection({
  title,
  intro,
  lastUpdated,
  sections,
  langSwitcher = false,
}: LegalDocumentSectionProps) {
  return (
    <section className="relative px-6 py-24 sm:px-10 sm:py-32 lg:px-12">
      <div className="relative mx-auto max-w-[820px]">
        <Reveal className="mb-14">
          <div className="flex flex-col items-start gap-3">
            {langSwitcher ? (
              <span className="v2-mono text-[10.5px] font-medium uppercase tracking-[0.22em] text-white/45">
                EN &middot; PL
              </span>
            ) : null}
            <h1
              className="v2-print-display max-w-[20ch] text-white"
              style={{ fontSize: "clamp(32px, 4.4vw, 54px)", lineHeight: 1.15 }}
            >
              {title}
            </h1>
            {intro ? (
              <p className="max-w-[60ch] text-[15px] font-light leading-[1.7] text-white/60">
                {intro}
              </p>
            ) : null}
            {lastUpdated ? (
              <p className="v2-mono text-[12px] tracking-[0.08em] text-white/40">
                Last updated: {lastUpdated}
              </p>
            ) : null}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="flex flex-col gap-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2
                  className="v2-print-display mb-4 text-white"
                  style={{ fontSize: "clamp(20px, 2.6vw, 28px)", lineHeight: 1.3 }}
                >
                  {section.title}
                </h2>
                <div className="flex flex-col gap-4">
                  {section.paragraphs.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-[14.5px] font-light leading-[1.75] text-white/70 sm:text-[15px] [&_a]:text-[var(--gold-text)] [&_a]:underline-offset-4 whitespace-pre-line"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
