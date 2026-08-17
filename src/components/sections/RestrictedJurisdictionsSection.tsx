import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

const sanctionedJurisdictions = [
  "Belarus",
  "Cuba",
  "Iran",
  "North Korea (DPRK)",
  "Syria",
  "Russia",
  "Crimea (temporarily occupied region of Ukraine)",
  "Donetsk, Luhansk, Zaporizhzhia and Kherson (temporarily occupied regions of Ukraine)",
];

export default function RestrictedJurisdictionsSection() {
  return (
    <>
      <section className="relative px-6 pb-10 pt-28 sm:px-10 sm:pt-32 lg:px-12">
        <div className="relative mx-auto max-w-[820px]">
          <Reveal className="flex flex-col items-start gap-3">
            <span className="v2-print-label">Legal</span>
            <h1
              className="v2-print-display max-w-[20ch] text-white"
              style={{ fontSize: "clamp(32px, 4.4vw, 54px)", lineHeight: 1.15 }}
            >
              Restricted jurisdictions
            </h1>
            <p className="mt-2 max-w-[60ch] text-[15px] font-light leading-[1.7] text-white/60 sm:text-[16px]">
              The Service may not be used by persons or entities that are
              located in, organized in, or resident in a restricted
              jurisdiction, or that are listed on a sanctions list maintained by
              the European Union, the United Nations, the US Department of the
              Treasury (OFAC) or the United Kingdom (OFSI), as described in
              section 3.9 of the{" "}
              <Link
                href="/terms"
                className="text-[var(--gold-text)] no-underline underline-offset-4 transition-colors hover:opacity-80"
              >
                Terms and Conditions
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative px-6 py-10 sm:px-10 sm:py-14 lg:px-12">
        <div className="relative mx-auto max-w-[820px]">
          <Reveal>
            <div className="flex flex-col gap-4">
              <h2
                className="v2-print-display text-white"
                style={{ fontSize: "clamp(20px, 2.6vw, 28px)", lineHeight: 1.3 }}
              >
                Jurisdictions currently subject to comprehensive sanctions or
                embargoes
              </h2>
              <p className="max-w-[60ch] text-[14.5px] font-light leading-[1.75] text-white/70">
                For the purposes of section 3.9 of the Terms and Conditions, the
                following jurisdictions are, as of the date of this page,
                subject to comprehensive trade or economic sanctions or an
                embargo under EU, UN, US or UK law:
              </p>
              <ul className="flex flex-col gap-2.5">
                {sanctionedJurisdictions.map((jurisdiction) => (
                  <li
                    key={jurisdiction}
                    className="flex gap-3 text-[14.5px] font-light leading-[1.7] text-white/70"
                  >
                    <span
                      className="mt-[10px] size-1 shrink-0 rounded-full bg-white/30"
                      aria-hidden="true"
                    />
                    <span>{jurisdiction}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="mt-14">
            <div className="flex flex-col gap-4">
              <h2
                className="v2-print-display text-white"
                style={{ fontSize: "clamp(20px, 2.6vw, 28px)", lineHeight: 1.3 }}
              >
                Non-cooperative tax jurisdictions
              </h2>
              <p className="max-w-[60ch] text-[14.5px] font-light leading-[1.75] text-white/70">
                A restricted jurisdiction also includes any jurisdiction listed
                in Annex I of the Council conclusions on the EU list of
                non-cooperative jurisdictions for tax purposes, as updated from
                time to time. The current list is available on the official EU
                website.
              </p>
            </div>
          </Reveal>

          <Reveal className="mt-14">
            <div className="flex flex-col gap-4 rounded-[18px] border border-white/[0.08] bg-white/[0.02] p-6">
              <h2
                className="v2-print-display text-white"
                style={{ fontSize: "clamp(20px, 2.4vw, 26px)", lineHeight: 1.3 }}
              >
                Updates and questions
              </h2>
              <p className="max-w-[60ch] text-[14.5px] font-light leading-[1.75] text-white/70">
                This page is updated periodically. If your access is affected
                because a jurisdiction is added to this list, Unabyss will
                notify you at least 14 days in advance, where the applicable law
                permits. Questions about this page can be sent to{" "}
                <a
                  href="mailto:legal@unabyss.com"
                  className="text-[var(--gold-text)] no-underline underline-offset-4 transition-colors hover:opacity-80"
                >
                  legal@unabyss.com
                </a>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
