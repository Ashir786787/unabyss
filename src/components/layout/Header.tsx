"use client";

import { ArrowUpRight, ChevronDown, LogIn } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const useCases = [
  {
    title: "Founders",
    description: "AI that knows your company",
  },
  {
    title: "Builders",
    description: "One context for every agent",
  },
  {
    title: "Agencies",
    description: "Live context per client",
  },
  {
    title: "GTM",
    description: "Marketing, sales & ops",
  },
];

export default function Header() {
  const [showUseCases, setShowUseCases] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-[116px] w-full max-w-[1820px] items-center justify-between px-6 lg:px-10 xl:px-12">
        <a
          href="#top"
          className="flex h-[50px] items-center gap-3 rounded-full border border-white/[0.08] bg-[#1b1b1b] px-6 transition-colors hover:bg-[#202020]"
        >
          <span className="grid grid-cols-3 gap-[2px]">
            {Array.from({ length: 9 }).map((_, index) => (
              <span
                key={index}
                className="size-[4px] rounded-full bg-white/45"
              />
            ))}
          </span>

          <span className="text-[15px] font-medium tracking-[0.36em] text-white/85">
            UNABYSS
          </span>
        </a>

        <div className="hidden items-center gap-4 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setShowUseCases(true)}
            onMouseLeave={() => setShowUseCases(false)}
          >
            <nav className="flex h-[50px] items-center rounded-full border border-white/[0.08] bg-[#1b1b1b] px-2">
              <button
                type="button"
                onClick={() => setShowUseCases((current) => !current)}
                className="flex h-[38px] items-center gap-2 rounded-full px-5 text-[14px] font-medium text-white/80 transition-colors hover:bg-white/[0.04] hover:text-white"
              >
                Use cases

                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${
                    showUseCases ? "rotate-180" : ""
                  }`}
                />
              </button>

              <a
                href="#how-it-works"
                className="flex h-[38px] items-center rounded-full px-5 text-[14px] text-white/60 transition-colors hover:text-white"
              >
                How it works
              </a>

              <a
                href="#teams"
                className="flex h-[38px] items-center rounded-full px-5 text-[14px] text-white/60 transition-colors hover:text-white"
              >
                Teams
              </a>

              <a
                href="#pricing"
                className="flex h-[38px] items-center rounded-full px-5 text-[14px] text-white/60 transition-colors hover:text-white"
              >
                Pricing
              </a>

              <a
                href="https://app.unabyss.com/login"
                target="_blank"
                rel="noreferrer"
                className="flex h-[38px] items-center gap-2 rounded-full px-5 text-[14px] text-white/60 transition-colors hover:text-white"
              >
                Log in
                <LogIn size={14} />
              </a>
            </nav>

            <AnimatePresence>
              {showUseCases && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -6,
                    scale: 0.985,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: -6,
                    scale: 0.985,
                  }}
                  transition={{
                    duration: 0.16,
                  }}
                  className="absolute right-0 top-[60px] w-[590px] rounded-[22px] border border-white/[0.08] bg-[#1b1b1b] p-6 shadow-[0_30px_70px_rgba(0,0,0,0.45)]"
                >
                  <div className="space-y-6">
                    {useCases.map((item) => (
                      <a
                        key={item.title}
                        href="#use-cases"
                        className="group flex items-center justify-between"
                      >
                        <span className="text-[16px] font-semibold text-white/85 transition-colors group-hover:text-white">
                          {item.title}
                        </span>

                        <span className="text-[13px] text-white/35 transition-colors group-hover:text-white/55">
                          {item.description}
                        </span>
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href="https://app.unabyss.com"
            target="_blank"
            rel="noreferrer"
            className="flex h-[50px] items-center gap-2 rounded-full bg-white px-6 text-[14px] font-semibold text-black transition-transform duration-200 hover:scale-[1.025]"
          >
            Try now
            <ArrowUpRight size={15} />
          </a>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}