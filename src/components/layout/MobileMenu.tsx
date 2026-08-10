"use client";

import { navigationItems } from "@/data/navigation";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative lg:hidden">
      <button
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
        className="flex size-7 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.025] text-white/65"
      >
        {isOpen ? <X size={13} /> : <Menu size={13} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.18 }}
              className="fixed left-4 right-4 top-14 z-50 rounded-[14px] border border-white/[0.08] bg-[#111111] p-3 shadow-2xl"
            >
              <nav className="flex flex-col">
                {navigationItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-[9px] px-3 py-2.5 text-[11px] text-white/55 transition-colors hover:bg-white/[0.04] hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="mt-3 grid grid-cols-2 gap-2 border-t border-white/[0.06] pt-3">
                <a
                  href="https://app.unabyss.com/login"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 items-center justify-center rounded-full border border-white/[0.08] text-[10px] text-white/60"
                >
                  Log in
                </a>

                <a
                  href="https://app.unabyss.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 items-center justify-center rounded-full bg-white text-[10px] font-medium text-black"
                >
                  Start free
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}