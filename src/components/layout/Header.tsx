"use client";

import { ArrowUpRight, ChevronDown, LogIn } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import BrandMark from "@/components/ui/BrandMark";
import MobileMenu from "./MobileMenu";

const personas = ["Founders", "Builders", "Agencies", "GTM"];

export default function Header() {
  const [showUseCases, setShowUseCases] = useState(false);

  return (
    <nav className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4 sm:top-6 sm:px-6">
      <div className="flex w-full max-w-[1400px] items-center justify-between">
        <div
          role="group"
          aria-label="Unabyss brand"
          className="v2-shine v2-glass-panel pointer-events-auto flex h-10 min-h-10 items-center rounded-[24px] px-4"
        >
          <Link href="/" className="flex items-center gap-2 rounded-lg px-1 py-0.5">
            <BrandMark />
            <span className="text-[14px] font-thin tracking-[var(--tracking-brand)] text-white">
              UNABYSS
            </span>
          </Link>
        </div>

        <div className="pointer-events-auto flex items-center gap-2 sm:gap-3">
          <div
            className="relative hidden sm:block"
            role="group"
            aria-label="Primary navigation"
            onMouseEnter={() => setShowUseCases(true)}
            onMouseLeave={() => setShowUseCases(false)}
          >
            <div className="v2-shine v2-glass-panel flex h-10 min-h-10 items-center gap-9 rounded-[24px] px-[25px]">
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={showUseCases}
                onClick={() => setShowUseCases((current) => !current)}
                className="inline-flex h-8 items-center gap-1 text-[12px] text-white/75 transition-colors hover:text-white"
              >
                Use cases
                <ChevronDown
                  size={14}
                  className={`size-3.5 transition-transform duration-200 ${
                    showUseCases ? "rotate-180" : ""
                  }`}
                />
              </button>

              <a
                href="#how-it-works"
                className="inline-flex h-8 items-center text-[12px] text-white/75 transition-colors hover:text-white"
              >
                How it works
              </a>

              <a
                href="#teams"
                className="inline-flex h-8 items-center text-[12px] text-white/75 transition-colors hover:text-white"
              >
                Teams
              </a>

              <Link
                href="/#pricing"
                className="inline-flex h-8 items-center text-[12px] text-white/75 transition-colors hover:text-white"
              >
                Pricing
              </Link>

              <a
                href="https://app.unabyss.com/login"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-8 items-center gap-1.5 text-[12px] text-white/75 transition-colors hover:text-white"
              >
                Log in
                <LogIn size={14} />
              </a>
            </div>

            {showUseCases && (
              <div className="v2-glass-panel absolute right-0 top-[calc(100%+8px)] w-[240px] rounded-[20px] p-2 shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
                {personas.map((persona) => (
                  <a
                    key={persona}
                    href="#use-cases"
                    onClick={() => setShowUseCases(false)}
                    className="flex h-10 items-center rounded-[12px] px-4 text-[13px] text-white/70 transition-colors hover:bg-white/[0.06] hover:text-white"
                  >
                    {persona}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href="https://app.unabyss.com/register"
            target="_blank"
            rel="noreferrer"
            className="group hidden h-9 items-center gap-1.5 rounded-full border border-white/15 bg-white px-4 text-[12px] font-medium text-black backdrop-blur transition-all hover:bg-white/90 sm:inline-flex"
          >
            Try now
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>

          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}
