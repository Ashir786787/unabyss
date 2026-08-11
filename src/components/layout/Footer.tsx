import PageContainer from "./PageContainer";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "Use Cases", href: "#use-cases" },
      { label: "Integrations", href: "#integrations" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "#blog" },
      { label: "Documentation", href: "#" },
      { label: "Support", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-[#0a0a0a]">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 bg-[radial-gradient(circle,rgba(255,118,87,0.05),transparent_70%)]" />

      <PageContainer className="relative">
        <div className="py-24 sm:py-28">
          <div className="relative overflow-hidden rounded-[22px] border border-white/[0.07] bg-[#111111] px-6 py-14 text-center sm:px-10 sm:py-16">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,118,87,0.07),transparent_70%)]" />

            <div className="relative">
              <p className="text-[9px] uppercase tracking-[0.22em] text-white/18">
                Your context is ready
              </p>

              <h2 className="mx-auto mt-4 max-w-[650px] text-[30px] font-semibold leading-[1.03] tracking-[-0.045em] text-white sm:text-[40px] lg:text-[46px]">
                Stop explaining yourself
                <br className="hidden sm:block" /> to AI.
              </h2>

              <p className="mx-auto mt-5 max-w-[520px] text-[10px] leading-5 text-white/26 sm:text-[11px]">
                Connect once and give every AI tool the context it needs to
                continue your work.
              </p>

              <a
                href="https://app.unabyss.com"
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex h-10 items-center gap-2 rounded-full bg-white px-5 text-[9px] font-semibold text-black transition-transform duration-200 hover:scale-[1.025]"
              >
                Start free
                <ArrowRight size={10} />
              </a>
            </div>
          </div>

          <div className="mt-16 grid gap-12 md:grid-cols-[1.2fr_2fr]">
            <div>
              <a
                href="#top"
                className="inline-flex items-center gap-3 rounded-full border border-white/[0.07] bg-[#111111] px-4 py-2.5"
              >
                <span className="grid grid-cols-3 gap-[2px]">
                  {Array.from({ length: 9 }).map((_, index) => (
                    <span
                      key={index}
                      className="size-[3px] rounded-full bg-white/35"
                    />
                  ))}
                </span>

                <span className="text-[10px] font-medium tracking-[0.28em] text-white/68">
                  UNABYSS
                </span>
              </a>

              <p className="mt-5 max-w-[300px] text-[9px] leading-5 text-white/22">
                One context layer for the AI tools you already use.
              </p>

              <a
                href="https://app.unabyss.com"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-[8px] text-white/25 transition-colors hover:text-white/50"
              >
                Open Unabyss
                <ArrowUpRight size={9} />
              </a>
            </div>

            <div className="grid gap-9 sm:grid-cols-3">
              {footerColumns.map((column) => (
                <div key={column.title}>
                  <p className="text-[8px] uppercase tracking-[0.15em] text-white/17">
                    {column.title}
                  </p>

                  <div className="mt-4 space-y-3">
                    {column.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="block text-[9px] text-white/25 transition-colors duration-200 hover:text-white/55"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-3 border-t border-white/[0.06] pt-6 text-[8px] text-white/14 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Unabyss. All rights reserved.</p>

            <p>Built for connected AI workflows.</p>
          </div>
        </div>
      </PageContainer>
    </footer>
  );
}