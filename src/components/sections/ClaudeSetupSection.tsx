"use client";

import PageContainer from "@/components/layout/PageContainer";
import { ArrowRight, Check, Copy } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const SETUP_MESSAGE = "Let's setup Unabyss";

export default function ClaudeSetupSection() {
  const [copied, setCopied] = useState(false);
  const copyTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(SETUP_MESSAGE);
      setCopied(true);

      if (copyTimeout.current) {
        clearTimeout(copyTimeout.current);
      }
      copyTimeout.current = setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  useEffect(() => {
    return () => {
      if (copyTimeout.current) {
        clearTimeout(copyTimeout.current);
      }
    };
  }, []);

  return (
    <section className="relative bg-[#0c0c0c] py-24 sm:py-28 lg:py-32">
      <PageContainer>
        <div className="mx-auto max-w-[860px]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="text-center"
          >
            <p className="text-[10px] uppercase tracking-[0.22em] text-white/25">
              Connect
            </p>

            <h2 className="mt-4 text-balance text-[28px] font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-[36px] lg:text-[42px]">
              Add Unabyss to Claude in
              <br className="hidden sm:block" /> two steps
            </h2>

            <p className="mx-auto mt-4 max-w-[570px] text-[12px] leading-5 text-white/38 sm:text-[13px]">
              Unabyss is an official connector in Claude&apos;s directory.
              Add it in one click, send one message, and every conversation
              pulls your real context.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="rounded-[16px] border border-white/[0.07] bg-[#121212] p-5 sm:p-6"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-7 items-center justify-center rounded-full bg-[#ff6f52] text-[11px] font-semibold text-white">
                  1
                </span>

                <span className="text-[11px] font-medium text-white/40">
                  Connect Claude to Unabyss
                </span>
              </div>

              <div className="mt-6 rounded-[14px] border border-white/[0.07] bg-[#171717] p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex size-9 items-center justify-center rounded-[10px] bg-[#ff6f52] text-[11px] font-bold text-white">
                      U
                    </div>

                    <div>
                      <p className="text-[12px] font-medium text-white">
                        Unabyss
                      </p>

                      <p className="mt-0.5 text-[10px] text-white/30">
                        Official connector
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-[9px] text-emerald-400">
                    <Check size={11} />
                    Verified
                  </div>
                </div>

                <p className="mt-5 text-[11px] leading-5 text-white/38">
                  Finish signing up and onboarding right inside Claude.
                </p>

                <a
                  href="https://claude.ai"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 flex h-9 w-full items-center justify-center gap-2 rounded-[9px] bg-[#d97757] text-[11px] font-medium text-white transition-colors hover:bg-[#e68161]"
                >
                  Connect
                  <ArrowRight size={13} />
                </a>
              </div>

              <button
                type="button"
                className="mt-4 w-full rounded-[9px] border border-white/[0.07] bg-white/[0.025] px-4 py-2.5 text-[10px] text-white/40 transition-colors hover:bg-white/[0.05] hover:text-white/70"
              >
                Connect to a different agent
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.08, duration: 0.55 }}
              className="rounded-[16px] border border-white/[0.07] bg-[#121212] p-5 sm:p-6"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-7 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-[11px] font-semibold text-white">
                  2
                </span>

                <span className="text-[11px] font-medium text-white/40">
                  Finish setup
                </span>
              </div>

              <h3 className="mt-6 text-[17px] font-semibold tracking-[-0.025em] text-white">
                Say hello to finish setup
              </h3>

              <p className="mt-2 max-w-[330px] text-[11px] leading-5 text-white/35">
                Open a new chat in Claude and send this. Unabyss walks you
                through the rest right there.
              </p>

              <div className="mt-6 rounded-[11px] border border-white/[0.07] bg-[#171717] p-3">
                <div className="flex min-h-11 items-center gap-3 rounded-[8px] border border-white/[0.05] bg-[#111111] px-3">
                  <span className="flex-1 text-[11px] text-white/55">
                    {SETUP_MESSAGE}
                  </span>

                  <button
                    type="button"
                    onClick={handleCopy}
                    aria-label="Copy setup message"
                    className="flex size-8 items-center justify-center rounded-[7px] border border-white/[0.06] bg-white/[0.035] text-white/45 transition-colors hover:text-white"
                  >
                    {copied ? <Check size={13} /> : <Copy size={13} />}
                  </button>
                </div>

                {copied && (
                  <p className="mt-2 text-right text-[9px] text-emerald-400">
                    Copied
                  </p>
                )}
              </div>

              <a
                href="https://claude.ai"
                target="_blank"
                rel="noreferrer"
                className="mt-5 flex h-9 w-full items-center justify-center gap-2 rounded-[9px] bg-white text-[11px] font-medium text-black transition-colors hover:bg-zinc-200"
              >
                Continue in Claude
                <ArrowRight size={13} />
              </a>
            </motion.div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}