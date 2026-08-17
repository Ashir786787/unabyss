import Link from "next/link";
import BrandMark from "@/components/ui/BrandMark";
import type { CSSProperties, ReactNode } from "react";

const socialLinks: { label: string; href: string; icon: ReactNode }[] = [
  {
    label: "X (Twitter)",
    href: "https://x.com/unabyssapp",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/unabyss/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/unabyss/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
];

const footerGroups: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Product",
    links: [
      { label: "How it works", href: "/how-it-works" },
      { label: "Connect to Claude", href: "/connect-claude" },
      { label: "Connect to ChatGPT", href: "/connect-chatgpt" },
      { label: "Teams", href: "/teams" },
      { label: "Try now", href: "https://app.unabyss.com/register" },
      { label: "Log in", href: "https://app.unabyss.com/login" },
      { label: "FAQ", href: "/faq" },
      { label: "Book a call", href: "#" },
      { label: "Integrations", href: "/integrations" },
      { label: "Changelog", href: "/changelog" },
      { label: "Legacy", href: "/legacy" },
    ],
  },
  {
    title: "Compare",
    links: [
      { label: "vs. AI memory", href: "/unabyss-vs-llm-memory" },
      { label: "vs. Context files", href: "/unabyss-vs-context-files" },
      { label: "vs. Build your own", href: "/unabyss-vs-external-knowledge" },
    ],
  },
  {
    title: "Use cases",
    links: [
      { label: "Founders", href: "/unabyss-for-founders" },
      { label: "Builders", href: "/unabyss-for-builders" },
      { label: "Agencies", href: "/unabyss-for-agencies" },
      { label: "GTM", href: "/unabyss-for-gtm" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Unabyss Skills", href: "/skills" },
      { label: "Context vs memory", href: "/context-vs-memory" },
      { label: "Global instructions", href: "/global-instructions" },
      { label: "Referral program", href: "/referrals" },
      { label: "MCP docs", href: "/mcp-docs" },
      { label: "Blog", href: "/blog" },
      { label: "Jobs", href: "/jobs" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Security", href: "/security" },
    ],
  },
];

function FooterColumn({ group }: { group: (typeof footerGroups)[number] }) {
  return (
    <div className="flex min-w-[120px] flex-col gap-4">
      <span className="v2-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
        {group.title}
      </span>
      {group.links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="text-[14px] font-light text-white/70 no-underline transition-colors hover:text-white"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

export default function Footer() {
  return (
    <section className="relative px-6 pb-10 pt-20 sm:px-10 sm:pb-14 sm:pt-28 lg:px-12">
      <div className="mx-auto max-w-[1100px]">
        <div className="footer-slab-wrap relative mt-6">
          <div className="v2-gold-hover-pop brand-mark__pop" role="tooltip">
            <p
              className="text-center text-[12.5px] font-light italic leading-[1.7]"
              style={{ color: "var(--gold-text)" }}
            >
              abyss &mdash; from Latin <span className="not-italic">abyssus</span>:
              chaos, the bottomless, the immeasurable. un- &mdash; the opposite
              of.{" "}
              <span
                className="font-normal not-italic"
                style={{ color: "var(--gold-text-strong)" }}
              >
                Unabyss
              </span>{" "}
              &mdash; structure, order, clarity.
            </p>
          </div>

          <div className="v2-shine v2-shine--light v2-glass-panel rounded-[22px] p-8 sm:p-12">
            <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
              <div className="flex flex-1 flex-col gap-6">
                <div className="brand-mark v2-gold-hover-pop__trigger inline-flex w-fit">
                  <Link href="/" className="inline-flex items-center gap-3 no-underline">
                    <BrandMark className="size-7!" />
                    <span className="text-[20px] font-thin tracking-[var(--tracking-brand)] text-white">
                      UNABYSS
                    </span>
                  </Link>
                </div>

                <p className="max-w-[44ch] text-[14px] font-light leading-[1.7] text-white/60">
                  The universal context layer for AI tools. Your data. Your
                  rules. You decide who sees what. Structured once. Shared on
                  your terms.
                </p>

                <div className="mt-1 flex items-center gap-5">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="text-white/45 transition-colors hover:text-white"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>

                <div className="mt-auto flex flex-col gap-3">
                  <div className="v2-gold-hover-pop-wrap relative w-fit">
                    <a
                      href="/security"
                      aria-label="Security & Trust - SOC 2 Type II in progress, GDPR aligned"
                      className="compliance-badges v2-gold-hover-pop__trigger inline-flex w-fit items-center gap-3 rounded-[12px] border border-dashed border-white/20 px-2 py-1 no-underline transition-colors hover:border-white/40"
                    >
                      <img
                        src="/images/soc-type-2-small.png"
                        alt="SOC 2"
                        className="compliance-logo h-[72px] w-auto"
                      />
                      <img
                        src="/images/gdpr.svg"
                        alt="GDPR"
                        className="compliance-logo h-[72px] w-auto"
                      />
                    </a>
                    <div
                      className="compliance-badges__pop v2-gold-hover-pop"
                      role="tooltip"
                    >
                      <p
                        className="text-[12.5px] font-light leading-[1.7]"
                        style={{ color: "var(--gold-text)" }}
                      >
                        SOC 2 Type II{" "}
                        <span
                          className="italic"
                          style={{ color: "var(--gold-text-strong)" }}
                        >
                          (in progress)
                        </span>
                      </p>
                    </div>
                  </div>

                  <Link
                    href="/changelog/v1-16-0"
                    className="v2-mono text-[11px] tracking-[0.18em] text-white/35 no-underline transition-colors hover:text-white/55"
                  >
                    Unabyss-1.16.0 Karamba
                  </Link>
                </div>
              </div>

              <div className="flex flex-col gap-8">
                <div className="flex flex-wrap gap-12 sm:gap-16 lg:flex-nowrap">
                  <FooterColumn group={footerGroups[0]} />

                  <div className="flex min-w-[120px] flex-col gap-8">
                    <FooterColumn group={footerGroups[1]} />
                    <FooterColumn group={footerGroups[2]} />
                  </div>

                  <div className="flex min-w-[120px] flex-col gap-8">
                    <FooterColumn group={footerGroups[3]} />
                    <FooterColumn group={footerGroups[4]} />
                  </div>
                </div>

                <div className="flex justify-start">
                  <iframe
                    src="https://status.unabyss.com/badge?theme=dark"
                    width="300"
                    height="30"
                    frameBorder="0"
                    scrolling="no"
                    style={{ colorScheme: "normal" } as CSSProperties}
                    title="Unabyss status"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <span className="v2-mono text-center text-[11px] tracking-[0.18em] text-white/35">
            &copy; MMXXVI &middot; Unabyss. All rights reserved.
          </span>
        </div>
      </div>
    </section>
  );
}
