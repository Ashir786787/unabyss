"use client";

import { ArrowUp, ImageIcon, Sparkles } from "lucide-react";
import { heroPreview } from "@/lib/animations";
import { motion } from "motion/react";

const thumbnails = [
  "from-[#ff743f] via-[#ffc857] to-[#5b2c83]",
  "from-[#1976d2] via-[#00b4d8] to-[#08111f]",
  "from-[#f39c12] via-[#e74c3c] to-[#3b165a]",
  "from-[#02c3bd] via-[#4361ee] to-[#0b1020]",
  "from-[#f6bd60] via-[#f28482] to-[#5f0f40]",
];

export default function HeroWorkspacePreview() {
  return (
    <motion.div
      variants={heroPreview}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.26, duration: 0.75 }}
      className="relative mx-auto mt-10 max-w-[1040px]"
    >
      <div className="absolute inset-x-[10%] -bottom-7 h-20 bg-[#ff7657]/10 blur-[60px]" />

      <div className="relative overflow-hidden rounded-[14px] border border-white/[0.08] bg-[#0f0f0f] shadow-[0_35px_90px_rgba(0,0,0,0.62)]">
        <div className="relative aspect-[1.86/1] overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(118deg,#15213f_0%,#19345c_18%,#e86b50_42%,#ffb347_55%,#2b5f73_73%,#101010_100%)]" />

          <div className="absolute inset-0 bg-black/10" />

          <div className="absolute left-[15%] top-[8%] h-[72%] w-[70%] overflow-hidden rounded-[7px] border border-black/45 bg-[#1b1b1b] shadow-[0_26px_65px_rgba(0,0,0,0.58)]">
            <div className="flex h-8 items-center border-b border-white/[0.05] bg-[#171717] px-3">
              <div className="flex gap-1.5">
                <span className="size-[6px] rounded-full bg-[#ff5f57]" />
                <span className="size-[6px] rounded-full bg-[#febc2e]" />
                <span className="size-[6px] rounded-full bg-[#28c840]" />
              </div>

              <div className="mx-auto flex items-center gap-1.5">
                <span className="size-[5px] rounded-full bg-[#d97757]" />
                <span className="text-[8px] text-white/22">
                  Claude
                </span>
              </div>
            </div>

            <div className="flex h-[calc(100%-32px)] flex-col justify-between p-4 sm:p-5">
              <div>
                <div className="flex items-center gap-2">
                  <div className="flex size-6 items-center justify-center rounded-full bg-[#d97757]">
                    <Sparkles size={10} className="text-white" />
                  </div>

                  <span className="text-[9px] text-white/50">
                    Claude
                  </span>
                </div>

                <div className="mt-5 space-y-2 pl-8">
                  <div className="h-2 w-[50%] rounded-full bg-white/[0.09]" />
                  <div className="h-2 w-[68%] rounded-full bg-white/[0.05]" />
                  <div className="h-2 w-[58%] rounded-full bg-white/[0.035]" />
                </div>
              </div>

              <div className="rounded-[10px] border border-white/[0.07] bg-[#151515] p-3">
                <div className="flex items-center gap-2">
                  <span className="flex-1 text-[9px] text-white/24">
                    Ask anything...
                  </span>

                  <button
                    type="button"
                    className="flex size-7 items-center justify-center rounded-[7px] bg-white"
                  >
                    <ArrowUp size={12} className="text-black" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-[6%] left-[4%] flex items-center gap-2 rounded-full border border-white/15 bg-black/60 px-2 py-1.5 backdrop-blur-md">
            <div className="size-8 rounded-full bg-[radial-gradient(circle_at_40%_35%,#f6d1b8,#a9684a_45%,#27120e_75%)]" />

            <div className="pr-1">
              <p className="text-[7px] font-medium text-white/75">
                Your context
              </p>

              <p className="text-[6px] text-white/28">
                connected
              </p>
            </div>
          </div>

          <div className="absolute bottom-[5%] left-1/2 grid w-[70%] -translate-x-1/2 grid-cols-5 gap-2">
            {thumbnails.map((gradient, index) => (
              <div
                key={index}
                className={`aspect-[1.35/1] rounded-[4px] bg-gradient-to-br ${gradient} p-[1px] shadow-[0_8px_20px_rgba(0,0,0,0.28)]`}
              >
                <div className="flex size-full items-end rounded-[3px] bg-black/10 p-1">
                  <ImageIcon size={7} className="text-white/65" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-3 text-center text-[8px] text-white/18">
        Context from every tool, available everywhere.
      </p>
    </motion.div>
  );
}