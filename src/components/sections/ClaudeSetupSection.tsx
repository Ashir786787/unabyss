"use client";

import PageContainer from "@/components/layout/PageContainer";
import { fadeLeft, fadeRight, fadeUp, fadeUpSmall, viewportFifth, viewportOnce, viewportQuarter } from "@/lib/animations";
import { Check, Copy, ExternalLink } from "lucide-react";
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

      copyTimeout.current = setTimeout(() => {
        setCopied(false);
      }, 1600);
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
    <section className="relative overflow-hidden bg-[#0c0c0c] py-28 sm:py-32 lg:py-36">
      <div className="pointer-events-none absolute left-1/2 top-[46%] h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,111,82,0.055),transparent_68%)]" />

      <PageContainer className="relative">
        <div className="mx-auto max-w-[980px]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportQuarter}
            transition={{ duration: 0.55 }}
            className="text-center"
          >
            <p className="text-[9px] uppercase tracking-[0.24em] text-white/18">
              Connect
            </p>

            <h2 className="mt-4 text-balance text-[30px] font-semibold leading-[1.03] tracking-[-0.045em] text-white sm:text-[40px] lg:text-[48px]">
              Add Unabyss to Claude
              <br className="hidden sm:block" /> in two steps
            </h2>

            <p className="mx-auto mt-5 max-w-[610px] text-[11px] leading-5 text-white/32 sm:text-[12px]">
              Add Unabyss from Claude&apos;s connector directory, then send one
              message to finish setup.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportFifth}
              transition={{ duration: 0.55 }}
              className="overflow-hidden rounded-[18px] border border-white/[0.07] bg-[#111111]"
            >
              <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4">
                <div className="flex items-center gap-3">
                  <span className="flex size-7 items-center justify-center rounded-full bg-[#ff7657] text-[10px] font-semibold text-white">
                    1
                  </span>

                  <div>
                    <p className="text-[10px] font-medium text-white/60">
                      Connect Claude
                    </p>

                    <p className="mt-0.5 text-[8px] text-white/20">
                      Add Unabyss from connectors
                    </p>
                  </div>
                </div>

                <span className="rounded-full border border-emerald-400/15 bg-emerald-400/[0.06] px-2 py-1 text-[8px] text-emerald-400/75">
                  Official
                </span>
              </div>

              <div className="p-5">
                <div className="overflow-hidden rounded-[13px] border border-white/[0.07] bg-[#161616]">
                  <div className="flex h-9 items-center border-b border-white/[0.05] px-3">
                    <div className="flex gap-1.5">
                      <span className="size-[6px] rounded-full bg-[#ff5f57]" />
                      <span className="size-[6px] rounded-full bg-[#febc2e]" />
                      <span className="size-[6px] rounded-full bg-[#28c840]" />
                    </div>

                    <span className="mx-auto text-[8px] text-white/18">
                      Claude connectors
                    </span>
                  </div>

                  <div className="p-4">
                    <div className="flex items-center justify-between rounded-[11px] border border-white/[0.06] bg-[#1a1a1a] p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex size-10 items-center justify-center rounded-[10px] bg-[#ff7657] text-[11px] font-bold text-white">
                          U
                        </div>

                        <div>
                          <p className="text-[11px] font-medium text-white/70">
                            Unabyss
                          </p>

                          <p className="mt-1 text-[8px] text-white/22">
                            Shared AI context
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 text-[8px] text-emerald-400/70">
                        <Check size={10} />
                        Verified
                      </div>
                    </div>

                    <p className="mt-4 text-[9px] leading-4 text-white/28">
                      Connect Unabyss to give Claude access to the same context
                      you use across your tools.
                    </p>

                    <a
                      href="https://claude.ai"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 flex h-9 w-full items-center justify-center gap-2 rounded-[9px] bg-[#d97757] text-[10px] font-medium text-white transition-colors hover:bg-[#e68161]"
                    >
                      Connect
                      <ExternalLink size={11} />
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  className="mt-4 w-full rounded-[9px] border border-white/[0.06] bg-white/[0.02] px-4 py-2.5 text-[9px] text-white/30 transition-colors hover:bg-white/[0.04] hover:text-white/55"
                >
                  Connect to a different AI
                </button>
              </div>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportFifth}
              transition={{ delay: 0.08, duration: 0.55 }}
              className="overflow-hidden rounded-[18px] border border-white/[0.07] bg-[#111111]"
            >
              <div className="flex items-center gap-3 border-b border-white/[0.06] px-5 py-4">
                <span className="flex size-7 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.025] text-[10px] font-semibold text-white/65">
                  2
                </span>

                <div>
                  <p className="text-[10px] font-medium text-white/60">
                    Finish setup
                  </p>

                  <p className="mt-0.5 text-[8px] text-white/20">
                    Send one message in Claude
                  </p>
                </div>
              </div>

              <div className="p-5">
                <div className="overflow-hidden rounded-[13px] border border-white/[0.07] bg-[#161616]">
                  <div className="flex h-9 items-center border-b border-white/[0.05] px-3">
                    <div className="flex gap-1.5">
                      <span className="size-[6px] rounded-full bg-[#ff5f57]" />
                      <span className="size-[6px] rounded-full bg-[#febc2e]" />
                      <span className="size-[6px] rounded-full bg-[#28c840]" />
                    </div>

                    <span className="mx-auto text-[8px] text-white/18">
                      Claude
                    </span>
                  </div>

                  <div className="p-4">
                    <p className="text-[13px] font-semibold tracking-[-0.02em] text-white/72">
                      Say hello to finish setup
                    </p>

                    <p className="mt-2 text-[9px] leading-4 text-white/26">
                      Start a new Claude conversation and send this message.
                    </p>

                    <div className="mt-5 rounded-[10px] border border-white/[0.06] bg-[#111111] p-3">
                      <div className="flex min-h-11 items-center gap-3">
                        <span className="flex-1 text-[10px] text-white/50">
                          {SETUP_MESSAGE}
                        </span>

                        <button
                          type="button"
                          onClick={handleCopy}
                          aria-label="Copy setup message"
                          className="flex size-8 items-center justify-center rounded-[7px] border border-white/[0.06] bg-white/[0.025] text-white/35 transition-colors hover:text-white/60"
                        >
                          {copied ? (
                            <Check size={12} className="text-emerald-400" />
                          ) : (
                            <Copy size={12} />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="mt-3 min-h-[14px]">
                      {copied && (
                        <p className="text-right text-[8px] text-emerald-400/70">
                          Copied
                        </p>
                      )}
                    </div>

                    <a
                      href="https://claude.ai"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 flex h-9 w-full items-center justify-center gap-2 rounded-[9px] bg-white text-[10px] font-medium text-black transition-colors hover:bg-zinc-200"
                    >
                      Continue in Claude
                      <ExternalLink size={11} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.p
            variants={fadeUpSmall}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={{ delay: 0.12, duration: 0.5 }}
            className="mt-7 text-center text-[9px] text-white/18"
          >
            Setup takes less than a minute.
          </motion.p>
        </div>
      </PageContainer>
    </section>
  );
}