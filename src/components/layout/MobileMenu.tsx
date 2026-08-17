"use client";

import { ArrowUpRight, ChevronDown, LogIn, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import BrandMark from "@/components/ui/BrandMark";

const links = [
  {
    label: "Use cases",
    href: "#use-cases",
    subLinks: [
      { label: "Founders", href: "/unabyss-for-founders" },
      { label: "Builders", href: "/unabyss-for-builders" },
      { label: "Agencies", href: "/unabyss-for-agencies" },
      { label: "GTM", href: "/unabyss-for-gtm" },
    ],
  },
  { label: "How it works", href: "/how-it-works" },
  { label: "Teams", href: "/teams" },
  { label: "Pricing", href: "/#pricing" },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [showUseCases, setShowUseCases] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
        className="v2-shine v2-glass-panel flex size-10 shrink-0 items-center justify-center rounded-[24px] text-white/80 transition-colors hover:text-white sm:hidden"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-[#0d0d0d]/95 backdrop-blur-xl">
          <div className="flex items-center justify-between px-4 pt-4 sm:px-6">
            <div
              role="group"
              aria-label="Unabyss brand"
              className="v2-shine v2-glass-panel flex h-10 items-center rounded-[24px] px-4"
            >
              <Link href="/" className="flex items-center gap-2 rounded-lg px-1 py-0.5">
                <BrandMark />
                <span className="text-[14px] font-thin tracking-[var(--tracking-brand)] text-white">
                  UNABYSS
                </span>
              </Link>
            </div>

            <button
              type="button"
              aria-label="Close menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(false)}
              className="v2-shine v2-glass-panel flex size-10 shrink-0 items-center justify-center rounded-[24px] text-white/80 transition-colors hover:text-white"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-center gap-1 px-6">
            {links.map((link) => {
              const withSubLinks = "subLinks" in link && link.subLinks;
              if (withSubLinks) {
                return (
                  <div key={link.label}>
                    <button
                      type="button"
                      aria-expanded={showUseCases}
                      onClick={() => setShowUseCases((current) => !current)}
                      className="flex h-14 w-full items-center justify-between border-b border-white/[0.06] text-[20px] font-light text-white/70 transition-colors hover:text-white"
                    >
                      {link.label}
                      <ChevronDown
                        size={18}
                        className={`shrink-0 text-white/45 transition-transform duration-200 ${
                          showUseCases ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {showUseCases && (
                      <div className="flex flex-col py-2">
                        {link.subLinks!.map((sub) => (
                          <a
                            key={sub.label}
                            href={sub.href}
                            onClick={() => setIsOpen(false)}
                            className="flex h-11 items-center rounded-[12px] pl-4 text-[16px] font-light text-white/55 transition-colors hover:bg-white/[0.04] hover:text-white"
                          >
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  onClick={() => setIsOpen(false)}
                  className="flex h-14 items-center border-b border-white/[0.06] text-[20px] font-light text-white/70 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="space-y-3 px-6 pb-8">
            <a
              href="https://app.unabyss.com/login"
              target="_blank"
              rel="noreferrer"
              className="flex h-11 items-center justify-center gap-2 rounded-full border border-white/15 text-[14px] text-white/80 transition-colors hover:bg-white/[0.04]"
            >
              Log in
              <LogIn size={15} />
            </a>

            <a
              href="https://app.unabyss.com/register"
              target="_blank"
              rel="noreferrer"
              className="group flex h-11 items-center justify-center gap-2 rounded-full bg-white text-[14px] font-medium text-black transition-transform hover:scale-[1.01]"
            >
              Try now
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
