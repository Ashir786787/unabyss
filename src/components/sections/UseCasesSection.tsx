"use client";

import PageContainer from "@/components/layout/PageContainer";
import { useCases } from "@/data/use-cases";
import { Check, Search, Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function UseCasesSection() {
  const [activeId, setActiveId] = useState(useCases[0].id);

  const activeUseCase =
    useCases.find((useCase) => useCase.id === activeId) ?? useCases[0];

  return (
    <section
      id="use-cases"
      className="relative overflow-hidden bg-[#0c0c0c] py-24 sm:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-[45%] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,111,82,0.055),transparent_70%)]" />

      <PageContainer className="relative">
        <div className="mx-auto max-w-[940px]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="text-center"
          >
            <p className="text-[10px] uppercase tracking-[0.22em] text-white/20">
              Use cases
            </p>

            <h2 className="mt-4 text-balance text-[28px] font-semibold leading-[1.06] tracking-[-0.045em] text-white sm:text-[36px] lg:text-[42px]">
              One memory for every
              <br className="hidden sm:block" /> way you work.
            </h2>

            <p className="mx-auto mt-4 max-w-[590px] text-[12px] leading-5 text-white/35 sm:text-[13px]">
              Your context becomes useful wherever you need AI, without
              rebuilding the same background in every tool.
            </p>
          </motion.div>

          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {useCases.map((useCase) => {
              const active = activeId === useCase.id;

              return (
                <button
                  key={useCase.id}
                  type="button"
                  onClick={() => setActiveId(useCase.id)}
                  className={`rounded-full border px-4 py-2 text-[10px] font-medium transition-all ${
                    active
                      ? "border-[#ff6f52]/30 bg-[#ff6f52]/10 text-[#ff8a73]"
                      : "border-white/[0.06] bg-white/[0.02] text-white/30 hover:bg-white/[0.04] hover:text-white/55"
                  }`}
                >
                  {useCase.label}
                </button>
              );
            })}
          </div>

          <div className="mt-8 overflow-hidden rounded-[18px] border border-white/[0.07] bg-[#111111]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeUseCase.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="grid min-h-[430px] lg:grid-cols-[0.85fr_1.15fr]"
              >
                <div className="border-b border-white/[0.06] p-6 sm:p-8 lg:border-b-0 lg:border-r">
                  <div className="flex size-10 items-center justify-center rounded-[11px] bg-[#ff6f52]/15">
                    <Sparkles size={16} className="text-[#ff8067]" />
                  </div>

                  <p className="mt-7 text-[10px] uppercase tracking-[0.14em] text-[#ff8067]/60">
                    {activeUseCase.label}
                  </p>

                  <h3 className="mt-3 max-w-[330px] text-[22px] font-semibold leading-[1.12] tracking-[-0.035em] text-white">
                    {activeUseCase.title}
                  </h3>

                  <p className="mt-4 max-w-[360px] text-[11px] leading-5 text-white/30">
                    {activeUseCase.description}
                  </p>

                  <div className="mt-6 space-y-3">
                    {activeUseCase.points.map((point) => (
                      <div key={point} className="flex items-center gap-3">
                        <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-400/10">
                          <Check size={10} className="text-emerald-400" />
                        </div>

                        <p className="text-[10px] text-white/40">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-center p-5 sm:p-8">
                  <div className="w-full max-w-[520px] overflow-hidden rounded-[14px] border border-white/[0.07] bg-[#151515]">
                    <div className="flex h-9 items-center border-b border-white/[0.06] px-3">
                      <div className="flex gap-1.5">
                        <span className="size-[6px] rounded-full bg-[#ff5f57]" />
                        <span className="size-[6px] rounded-full bg-[#febc2e]" />
                        <span className="size-[6px] rounded-full bg-[#28c840]" />
                      </div>

                      <span className="mx-auto text-[9px] text-white/20">
                        AI workspace
                      </span>
                    </div>

                    <div className="p-4 sm:p-5">
                      <div className="rounded-[10px] border border-white/[0.06] bg-[#191919] p-3">
                        <div className="flex items-center">
                          <Search size={12} className="text-white/30" />

                          <p className="ml-2 text-[9px] text-white/35">
                            Searching connected context
                          </p>

                          <span className="ml-auto size-1.5 rounded-full bg-emerald-400" />
                        </div>
                      </div>

                      <div className="mt-4 rounded-[10px] border border-[#ff6f52]/15 bg-[#ff6f52]/[0.04] p-4">
                        <div className="flex items-center gap-2">
                          <Sparkles size={12} className="text-[#ff8067]" />

                          <span className="text-[9px] font-medium text-[#ff8a73]">
                            Context found
                          </span>
                        </div>

                        <div className="mt-4 space-y-3">
                          <div className="rounded-[8px] border border-white/[0.05] bg-[#151515] p-3">
                            <div className="h-2 w-[55%] rounded-full bg-white/[0.1]" />
                            <div className="mt-2 h-1.5 w-[80%] rounded-full bg-white/[0.04]" />
                          </div>

                          <div className="rounded-[8px] border border-white/[0.05] bg-[#151515] p-3">
                            <div className="h-2 w-[42%] rounded-full bg-white/[0.1]" />
                            <div className="mt-2 h-1.5 w-[68%] rounded-full bg-white/[0.04]" />
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 rounded-[10px] border border-white/[0.06] bg-[#171717] p-4">
                        <div className="flex items-center gap-2">
                          <div className="flex size-6 items-center justify-center rounded-full bg-[#d97757]">
                            <Sparkles size={10} className="text-white" />
                          </div>

                          <span className="text-[9px] font-medium text-white/50">
                            AI response
                          </span>
                        </div>

                        <div className="mt-4 space-y-2">
                          <div className="h-2 rounded-full bg-white/[0.07]" />
                          <div className="h-2 w-[92%] rounded-full bg-white/[0.05]" />
                          <div className="h-2 w-[72%] rounded-full bg-white/[0.04]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}