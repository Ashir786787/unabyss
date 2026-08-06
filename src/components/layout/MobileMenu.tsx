"use client";

import { navigationItems } from "@/data/navigation";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
        className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-colors hover:bg-white/[0.08]"
      >
        {isOpen ? <X size={18} /> : <Menu size={18} />}
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
              className="fixed inset-0 top-[73px] z-40 bg-black/70 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-x-5 top-[82px] z-50 overflow-hidden rounded-2xl border border-white/10 bg-[#151515] p-3 shadow-2xl"
            >
              <nav className="flex flex-col">
                {navigationItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm text-white/70 transition-colors hover:bg-white/[0.05] hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="mt-3 grid grid-cols-2 gap-2 border-t border-white/10 pt-3">
                <a
                  href="#login"
                  className="flex h-10 items-center justify-center rounded-full border border-white/10 text-sm font-medium text-white/80"
                >
                  Log in
                </a>

                <a
                  href="#pricing"
                  className="flex h-10 items-center justify-center rounded-full bg-white text-sm font-medium text-black"
                >
                  Get started
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
