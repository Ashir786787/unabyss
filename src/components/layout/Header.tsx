"use client";

import { ArrowUpRight, ChevronDown, LogIn } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import BrandMark from "@/components/ui/BrandMark";
import MobileMenu from "./MobileMenu";

const personas = [
  { label: "Founders", blurb: "AI that knows your company", href: "/unabyss-for-founders" },
  { label: "Builders", blurb: "One context for every agent", href: "/unabyss-for-builders" },
  { label: "Agencies", blurb: "Live context per client", href: "/unabyss-for-agencies" },
  { label: "GTM", blurb: "Marketing, sales & ops", href: "/unabyss-for-gtm" },
];

export default function Header() {
  const [showUseCases, setShowUseCases] = useState(false);
  const [hoverUseCases, setHoverUseCases] = useState(false);
  const useCasesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showUseCases) {
      return;
    }
    const onPointerDown = (event: PointerEvent) => {
      if (!useCasesRef.current?.contains(event.target as Node)) {
        setShowUseCases(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowUseCases(false);
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [showUseCases]);

  const dropdownOpen = showUseCases || hoverUseCases;

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
            ref={useCasesRef}
            className="relative hidden sm:block"
            role="group"
            aria-label="Primary navigation"
            onMouseEnter={() => setHoverUseCases(true)}
            onMouseLeave={() => setHoverUseCases(false)}
          >
            <div className="v2-shine v2-glass-panel flex h-10 min-h-10 items-center gap-9 rounded-[24px] px-[25px]">
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
                onClick={() => setShowUseCases((current) => !current)}
                onMouseEnter={() => setHoverUseCases(true)}
                onMouseLeave={() => setHoverUseCases(false)}
                className="inline-flex h-8 items-center gap-1 text-[12px] text-white/75 transition-colors hover:text-white"
              >
                Use cases
                <ChevronDown
                  size={14}
                  className={`size-3.5 transition-transform duration-200 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <a
                href="/how-it-works"
                className="inline-flex h-8 items-center text-[12px] text-white/75 transition-colors hover:text-white"
              >
                How it works
              </a>

              <Link
                href="/teams"
                className="inline-flex h-8 items-center text-[12px] text-white/75 transition-colors hover:text-white"
              >
                Teams
              </Link>

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

            {dropdownOpen && (
              <div className="absolute inset-x-0 top-full mt-2">
                <div
                  role="presentation"
                  onMouseEnter={() => setHoverUseCases(true)}
                  onMouseLeave={() => setHoverUseCases(false)}
                  className="v2-shine v2-glass-panel flex flex-col gap-0.5 rounded-[18px] p-2"
                >
                  {personas.map((persona) => (
                    <a
                      key={persona.label}
                      href={persona.href}
                      onClick={() => setShowUseCases(false)}
                      className="group flex items-center justify-between gap-3 rounded-[12px] px-3 py-2.5 transition-colors hover:bg-white/8"
                    >
                      <span className="text-[13px] font-medium text-white/90 group-hover:text-white">
                        {persona.label}
                      </span>
                      <span className="text-[11px] font-light text-white/45 group-hover:text-white/60">
                        {persona.blurb}
                      </span>
                    </a>
                  ))}
                </div>
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
