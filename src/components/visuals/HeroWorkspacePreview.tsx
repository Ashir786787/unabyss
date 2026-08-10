"use client";

import { motion } from "motion/react";
import { ArrowUp, ImageIcon, Plus, Sparkles } from "lucide-react";

const thumbnails = [
  "from-[#ff674d] via-[#fbad3c] to-[#532f8f]",
  "from-[#3b82f6] via-[#0ea5e9] to-[#07111f]",
  "from-[#f59e0b] via-[#ef4444] to-[#35154d]",
  "from-[#06b6d4] via-[#2563eb] to-[#080c18]",
];

export default function HeroWorkspacePreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.99 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.24, duration: 0.75 }}
      className="relative mx-auto mt-8 max-w-[980px]"
    >
      <div className="absolute inset-x-[12%] -bottom-8 h-20 bg-[#ff7657]/10 blur-[60px]" />

      <div className="relative overflow-hidden rounded-[14px] border border-white/[0.08] bg-[#101010] shadow-[0_35px_90px_rgba(0,0,0,0.65)]">
        <div className="relative aspect-[1.78/1] overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(125deg,#151b35_0%,#1d3557_18%,#e76f51_43%,#f4a261_53%,#264653_72%,#101010_100%)] opacity-80" />

          <div className="absolute inset-0 bg-black/15" />

          <div className="absolute left-[17%] top-[9%] h-[76%] w-[66%] overflow-hidden rounded-[8px] border border-black/40 bg-[#20201f] shadow-[0_24px_60px_rgba(0,0,0,0.55)]">
            <div className="flex h-8 items-center border-b border-white/[0.05] bg-[#191919] px-3">
              <div className="flex gap-1.5">
                <span className="size-[6px] rounded-full bg-[#ff5f57]" />
                <span className="size-[6px] rounded-full bg-[#febc2e]" />
                <span className="size-[6px] rounded-full bg-[#28c840]" />
              </div>

              <span className="mx-auto text-[8px] text-white/18">
                Claude
              </span>
            </div>

            <div className="flex h-[calc(100%-32px)] flex-col justify-between p-4 sm:p-5">
              <div>
                <div className="flex items-center gap-2">
                  <div className="flex size-6 items-center justify-center rounded-full bg-[#d97757]">
                    <Sparkles size={10} className="text-white" />
                  </div>

                  <span className="text-[9px] text-white/45">
                    Claude
                  </span>
                </div>

                <div className="mt-5 space-y-2 pl-8">
                  <div className="h-2 w-[42%] rounded-full bg-white/[0.09]" />
                  <div className="h-2 w-[64%] rounded-full bg-white/[0.05]" />
                </div>
              </div>

              <div className="rounded-[10px] border border-white/[0.06] bg-[#181818] p-3">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    className="flex size-7 items-center justify-center rounded-[7px] border border-white/[0.06] bg-white/[0.025]"
                  >
                    <Plus size={12} className="text-white/35" />
                  </button>

                  <span className="flex-1 text-[9px] text-white/22">
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

          <div className="absolute bottom-[7%] left-[8%] flex items-center gap-2 rounded-full border border-white/15 bg-black/60 px-2 py-1.5 backdrop-blur-md">
            <div className="size-7 rounded-full bg-[radial-gradient(circle_at_40%_35%,#ffd9c0,#ac6b4f_45%,#25120d_75%)]" />

            <div className="pr-1">
              <p className="text-[7px] font-medium text-white/70">
                Your context
              </p>

              <p className="text-[6px] text-white/25">
                connected
              </p>
            </div>
          </div>

          <div className="absolute bottom-[6%] right-[5%] grid w-[28%] grid-cols-4 gap-1.5">
            {thumbnails.map((gradient, index) => (
              <div
                key={index}
                className={`aspect-square rounded-[5px] bg-gradient-to-br ${gradient} p-[1px] shadow-md`}
              >
                <div className="flex size-full items-end rounded-[4px] bg-black/10 p-1">
                  <ImageIcon size={7} className="text-white/65" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}