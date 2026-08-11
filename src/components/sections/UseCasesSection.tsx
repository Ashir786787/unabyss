"use client";

import PageContainer from "@/components/layout/PageContainer";
import { useCases } from "@/data/use-cases";
import { fadeUp, fadeUpSmall, fadeUpTwelve, viewportOnce, viewportQuarter } from "@/lib/animations";
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
      className="relative overflow-hidden bg-[#0c0c0c] py-28 sm:py-32 lg:py-36"
    >
      <div className="pointer-events-none absolute left-1/2 top-[44%] h-[650px] w-[940px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,118,87,0.05),transparent_70%)]" />

      <PageContainer className="relative">
        <div className="mx-auto max-w-[1000px]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportQuarter}
            transition={{ duration: 0.55 }}
            className="text-center"
          >
            <p className="text-[9px] uppercase tracking-[0.24em] text-white/18">
              Use cases
            </p>

            <h2 className="mt-4 text-balance text-[30px] font-semibold leading-[1.03] tracking-[-0.045em] text-white sm:text-[40px] lg:text-[48px]">
              One memory for every
              <br className="hidden sm:block" /> way you work.
            </h2>

            <p className="mx-auto mt-5 max-w-[600px] text-[11px] leading-5 text-white/28 sm:text-[12px]">
              Use the same context across research, development, sales,
              writing and everyday AI workflows.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUpTwelve}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={{ delay: 0.08, duration: 0.5 }}
            className="mt-10 flex flex-wrap justify-center gap-2"
          >
            {useCases.map((useCase) => {
              const active = activeId === useCase.id;

              return (
                <button
                  key={useCase.id}
                  type="button"
                  onClick={() => setActiveId(useCase.id)}
                  className={`rounded-full border px-4 py-2 text-[9px] font-medium transition-all duration-200 ${
                    active
                      ? "border-[#ff7657]/25 bg-[#ff7657]/10 text-[#ff8a73]"
                      : "border-white/[0.06] bg-white/[0.02] text-white/25 hover:bg-white/[0.04] hover:text-white/50"
                  }`}
                >
                  {useCase.label}
                </button>
              );
            })}
          </motion.div>

          <div className="mt-8 overflow-hidden rounded-[18px] border border-white/[0.07] bg-[#111111]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeUseCase.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.24 }}
                className="grid min-h-[470px] lg:grid-cols-[0.86fr_1.14fr]"
              >
                <div className="border-b border-white/[0.06] p-6 sm:p-8 lg:border-b-0 lg:border-r">
                  <div className="flex size-10 items-center justify-center rounded-[11px] border border-[#ff7657]/12 bg-[#ff7657]/10">
                    <Sparkles size={15} className="text-[#ff8067]" />
                  </div>

                  <p className="mt-7 text-[8px] uppercase tracking-[0.14em] text-[#ff8067]/60">
                    {activeUseCase.label}
                  </p>

                  <h3 className="mt-3 max-w-[340px] text-[22px] font-semibold leading-[1.08] tracking-[-0.035em] text-white/82">
                    {activeUseCase.title}
                  </h3>

                  <p className="mt-4 max-w-[370px] text-[10px] leading-5 text-white/26">
                    {activeUseCase.description}
                  </p>

                  <div className="mt-7 space-y-3">
                    {activeUseCase.points.map((point) => (
                      <div key={point} className="flex items-start gap-3">
                        <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-400/10">
                          <Check size={9} className="text-emerald-400" />
                        </div>

                        <p className="text-[9px] leading-5 text-white/34">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-center p-5 sm:p-8">
                  <div className="w-full max-w-[530px] overflow-hidden rounded-[15px] border border-white/[0.07] bg-[#151515] shadow-[0_26px_60px_rgba(0,0,0,0.22)]">
                    <div className="flex h-10 items-center border-b border-white/[0.06] bg-[#171717] px-3">
                      <div className="flex gap-1.5">
                        <span className="size-[6px] rounded-full bg-[#ff5f57]" />
                        <span className="size-[6px] rounded-full bg-[#febc2e]" />
                        <span className="size-[6px] rounded-full bg-[#28c840]" />
                      </div>

                      <span className="mx-auto text-[8px] text-white/18">
                        AI workspace
                      </span>
                    </div>

                    <div className="p-4 sm:p-5">
                      <div className="rounded-[10px] border border-white/[0.06] bg-[#191919] p-3">
                        <div className="flex items-center">
                          <Search size={11} className="text-white/25" />

                          <p className="ml-2 text-[8px] text-white/28">
                            Searching connected context
                          </p>

                          <span className="ml-auto size-1.5 rounded-full bg-emerald-400" />
                        </div>
                      </div>

                      <div className="mt-4 rounded-[11px] border border-[#ff7657]/12 bg-[#ff7657]/[0.035] p-4">
                        <div className="flex items-center gap-2">
                          <Sparkles size={11} className="text-[#ff8067]" />

                          <span className="text-[8px] font-medium text-[#ff8a73]">
                            Context found
                          </span>
                        </div>

                        <div className="mt-4 space-y-3">
                          <div className="rounded-[9px] border border-white/[0.05] bg-[#151515] p-3">
                            <div className="h-1.5 w-[55%] rounded-full bg-white/[0.09]" />
                            <div className="mt-2 h-1.5 w-[80%] rounded-full bg-white/[0.035]" />
                          </div>

                          <div className="rounded-[9px] border border-white/[0.05] bg-[#151515] p-3">
                            <div className="h-1.5 w-[42%] rounded-full bg-white/[0.09]" />
                            <div className="mt-2 h-1.5 w-[68%] rounded-full bg-white/[0.035]" />
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 rounded-[11px] border border-white/[0.06] bg-[#171717] p-4">
                        <div className="flex items-center gap-2">
                          <div className="flex size-6 items-center justify-center rounded-full bg-[#d97757]">
                            <Sparkles size={10} className="text-white" />
                          </div>

                          <span className="text-[8px] font-medium text-white/42">
                            AI response
                          </span>
                        </div>

                        <div className="mt-4 space-y-2">
                          <div className="h-1.5 rounded-full bg-white/[0.07]" />
                          <div className="h-1.5 w-[92%] rounded-full bg-white/[0.045]" />
                          <div className="h-1.5 w-[72%] rounded-full bg-white/[0.03]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.p
            variants={fadeUpSmall}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            transition={{ delay: 0.12, duration: 0.5 }}
            className="mt-8 text-center text-[9px] text-white/18"
          >
            Switch workflows without rebuilding your context.
          </motion.p>
        </div>
      </PageContainer>
    </section>
  );
}