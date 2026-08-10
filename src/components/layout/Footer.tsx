import PageContainer from "./PageContainer";
import { ArrowRight } from "lucide-react";

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
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-[#0b0b0b]">
      <PageContainer>
        <div className="py-20 sm:py-24">
          <div className="rounded-[18px] border border-white/[0.07] bg-[#111111] px-6 py-10 text-center sm:px-10">
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/20">
              Your context is ready
            </p>

            <h2 className="mx-auto mt-4 max-w-[570px] text-[27px] font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-[34px]">
              Stop explaining yourself to AI.
            </h2>

            <p className="mx-auto mt-4 max-w-[500px] text-[11px] leading-5 text-white/30">
              Connect once and give every AI tool the context it needs to
              continue your work.
            </p>

            <a
              href="https://app.unabyss.com"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex h-9 items-center gap-2 rounded-full bg-white px-5 text-[10px] font-medium text-black"
            >
              Start free
              <ArrowRight size={11} />
            </a>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-[1.3fr_2fr]">
            <div>
              <a href="#top" className="flex items-center gap-2">
                <span className="flex size-7 items-center justify-center rounded-[7px] bg-[#ff6f52] text-[9px] font-bold text-white">
                  U
                </span>

                <span className="text-[13px] font-semibold text-white">
                  unabyss
                </span>
              </a>

              <p className="mt-4 max-w-[280px] text-[10px] leading-5 text-white/25">
                One context layer for every AI tool you use.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-3">
              {footerColumns.map((column) => (
                <div key={column.title}>
                  <p className="text-[9px] uppercase tracking-[0.14em] text-white/20">
                    {column.title}
                  </p>

                  <div className="mt-4 space-y-3">
                    {column.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="block text-[10px] text-white/30 transition-colors hover:text-white/60"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-3 border-t border-white/[0.06] pt-6 text-[9px] text-white/18 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Unabyss. All rights reserved.</p>

            <p>Built for connected AI workflows.</p>
          </div>
        </div>
      </PageContainer>
    </footer>
  );
}