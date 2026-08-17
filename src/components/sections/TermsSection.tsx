import Reveal from "@/components/ui/Reveal";
import {
  promotionTermsLinks,
  termsIntro,
  termsMeta,
  termsSections,
} from "@/data/terms";

export default function TermsSection() {
  return (
    <>
      <section className="relative px-6 py-24 sm:px-10 sm:py-32 lg:px-12">
        <div className="relative mx-auto max-w-[820px]">
          <Reveal className="mb-14">
            <div className="flex flex-col items-start gap-3">
              <div className="flex items-center gap-3">
                <span className="v2-mono text-[10.5px] font-medium uppercase tracking-[0.22em] text-white/45">
                  EN
                </span>
                <a
                  href="/regulamin"
                  className="v2-mono text-[10.5px] font-medium uppercase tracking-[0.22em] text-white/35 no-underline transition-colors hover:text-white/70"
                >
                  PL
                </a>
              </div>
              <h1
                className="v2-print-display max-w-[20ch] text-white"
                style={{ fontSize: "clamp(32px, 4.4vw, 54px)", lineHeight: 1.15 }}
              >
                Terms and Conditions
              </h1>
              <p className="max-w-[60ch] text-[15px] font-light leading-[1.7] text-white/60">
                {termsIntro}
              </p>
              <div className="v2-mono flex flex-col gap-1 text-[12px] tracking-[0.08em] text-white/40">
                <span>Last updated and published: {termsMeta.published}</span>
                <span>Effective date for existing Users: {termsMeta.effective}</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={60}>
            <div className="flex flex-col gap-2 rounded-[16px] border border-white/[0.08] bg-white/[0.02] p-5">
              <span className="v2-mono text-[10px] uppercase tracking-[0.2em] text-white/45">
                Promotion terms
              </span>
              {promotionTermsLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[13.5px] font-light text-white/65 no-underline transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-14 flex flex-col gap-10">
              {termsSections.map((section) => (
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

          <Reveal delay={160} className="mt-16">
            <div className="flex flex-col gap-5 rounded-[18px] border border-white/[0.08] bg-white/[0.02] p-6">
              <p className="text-[13.5px] font-light italic leading-[1.7] text-white/50">
                The project was co-financed by the European Funds. Technology and
                creativity should contribute to a better, more sustainable world
                — and that is what we are building.
              </p>
              <div className="flex items-center gap-4">
                <img
                  src="/images/pages/world-europe-red.svg"
                  alt="European Funds"
                  className="h-10 w-auto"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
