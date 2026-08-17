import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { jobPostings } from "@/data/jobs";

export default function JobsSection() {
  return (
    <>
      <section className="relative px-6 pb-10 pt-28 sm:px-10 sm:pt-32 lg:px-12">
        <div className="relative mx-auto max-w-[860px]">
          <Reveal className="flex flex-col items-center text-center">
            <span className="v2-print-label">Careers</span>
            <h1
              className="v2-print-display mt-5 max-w-[18ch] text-white"
              style={{ fontSize: "clamp(38px, 5.4vw, 66px)", lineHeight: 1.05 }}
            >
              Jobs at Unabyss
            </h1>
            <p className="mt-6 max-w-[64ch] text-[17px] font-light leading-[1.75] text-white/65 sm:text-[18px]">
              We&apos;re a small team moving fast. If you&apos;ve ever wanted
              to join a startup while it&apos;s still early&mdash;before the
              layers of process pile on&mdash;this is that kind of moment.
              Unabyss is growing quickly. We just raised pre-seed, we&apos;re
              shipping real product, and we need people who like owning
              problems end-to-end and learning in the open. No need for a
              perfect CV line-by-line match; we care more that you care about
              the work. Below are the open roles right now. Click through for
              the full write-up&mdash;what you&apos;d actually do, what we
              expect, and what you get in return. If something sounds like you,
              we&apos;d love to hear from you.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative px-6 py-14 sm:px-10 sm:py-20 lg:px-12">
        <div className="relative mx-auto grid max-w-[1100px] grid-cols-1 gap-5 md:grid-cols-2">
          {jobPostings.map((job, index) => (
            <Reveal key={job.slug} delay={index * 80}>
              <a
                href={`/jobs/${job.slug}`}
                className="v2-shine v2-shine--light v2-glass-panel group flex h-full flex-col rounded-[22px] p-6 no-underline sm:p-7"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="v2-mono rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-white/55">
                    {job.roleType}
                  </span>
                  <span className="v2-mono rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-white/55">
                    {job.level}
                  </span>
                  <span className="v2-mono rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-white/55">
                    {job.schedule}
                  </span>
                </div>

                <h2 className="mt-5 text-[22px] font-medium leading-snug text-white sm:text-[24px]">
                  {job.title}
                </h2>

                <p className="mt-2 text-[13px] font-light text-white/45">
                  {job.location}
                </p>

                <p className="mt-4 flex-1 text-[15px] font-light leading-[1.7] text-white/60">
                  {job.description}
                </p>

                <div className="mt-6 flex items-center gap-2 border-t border-white/[0.07] pt-5">
                  <span className="inline-flex h-9 items-center gap-1.5 rounded-full border border-white/15 px-4 text-[13px] font-medium text-white transition-colors group-hover:bg-white/[0.06]">
                    View role
                    <ArrowUpRight
                      size={15}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
