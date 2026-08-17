import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { renderInline } from "@/components/ui/LegalText";
import { regulaminMeta, regulaminSections } from "@/data/regulamin";

export default function RegulaminSection() {
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
                <span className="v2-mono rounded-full border border-white/15 px-2.5 py-1 text-[10.5px] font-medium uppercase tracking-[0.22em] text-white">
                  PL
                </span>
              </div>
              <h1
                className="v2-print-display max-w-[20ch] text-white"
                style={{ fontSize: "clamp(32px, 4.4vw, 54px)", lineHeight: 1.15 }}
              >
                Regulamin Unabyss
              </h1>
              <p className="max-w-[60ch] text-[15px] font-light leading-[1.7] text-white/60">
                <Link
                  href="/terms"
                  className="text-[var(--gold-text)] no-underline underline-offset-4 transition-colors hover:opacity-80"
                >
                  English version
                </Link>{" "}
                for the Terms and Conditions.
              </p>
              <div className="v2-mono flex flex-col gap-1 text-[12px] tracking-[0.08em] text-white/40">
                <span>{regulaminMeta.published}</span>
                <span>{regulaminMeta.effective}</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-14 flex flex-col gap-10">
              {regulaminSections.map((section) => (
                <div key={section.id}>
                  <h2
                    className="v2-print-display mb-4 text-white"
                    style={{ fontSize: "clamp(20px, 2.6vw, 28px)", lineHeight: 1.3 }}
                  >
                    {section.heading}
                  </h2>
                  <div className="flex flex-col gap-4">
                    {section.paragraphs.map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-[14.5px] font-light leading-[1.75] text-white/70 sm:text-[15px]"
                      >
                        {renderInline(paragraph)}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
