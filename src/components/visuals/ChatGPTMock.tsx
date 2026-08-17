import type { CSSProperties, PropsWithChildren } from "react";
import {
  ArrowUp,
  ChevronRight,
  Copy,
  Globe,
  Mic,
  PanelLeft,
  Plus,
  SlidersHorizontal,
  SquarePen,
  Upload,
} from "lucide-react";

type ChatGPTMockProps = PropsWithChildren<{
  title: string;
  ratio?: string;
  zoom?: number;
  className?: string;
}>;

export default function ChatGPTMock({
  title,
  ratio = "118 / 100",
  zoom = 1.3,
  className = "",
  children,
}: ChatGPTMockProps) {
  return (
    <div className={`demo w-full ${className}`}>
      <div className="mock mx-auto w-full max-w-[940px] overflow-x-clip">
        <div
          className="stage w-full [container-type:inline-size]"
          style={{ "--zoom": zoom } as CSSProperties}
        >
          <div
            className="win relative flex flex-col overflow-hidden rounded-[1.4cqw] border bg-[#262624] text-[#ecebe4] shadow-[0_2.5cqw_6cqw_-2cqw_rgba(0,0,0,0.55)]"
            style={{
              width: "calc(100% / var(--zoom))",
              aspectRatio: ratio,
            }}
          >
            <header className="flex flex-none items-center justify-between px-[1.7cqw] py-[1.4cqw]">
              <div className="flex items-center gap-[1cqw]">
                <span className="flex items-center gap-[0.85cqw]">
                  <i className="size-[1.17cqw] rounded-full bg-[#FF5F57]" />
                  <i className="size-[1.17cqw] rounded-full bg-[#FEBC2E]" />
                  <i className="size-[1.17cqw] rounded-full bg-[#28C840]" />
                </span>
                <span className="ml-[0.5cqw] inline-flex text-[#9c9a92]">
                  <PanelLeft className="size-[1.76cqw]" />
                </span>
                <span className="inline-flex text-[#9c9a92]">
                  <SquarePen className="size-[1.76cqw]" />
                </span>
                <span className="ml-[0.9cqw] text-[1.52cqw] font-medium text-[#ecebe4]">
                  ChatGPT
                </span>
                <span className="inline-flex text-[#9c9a92]">
                  <ChevronRight className="size-[1.52cqw]" />
                </span>
                <span className="text-[1.42cqw] font-light text-[#9c9a92]">
                  {title}
                </span>
              </div>
              <div className="flex items-center gap-[1.3cqw] text-[#9c9a92]">
                <span className="inline-flex">
                  <Upload className="size-[1.62cqw]" />
                </span>
                <span className="inline-flex">
                  <Copy className="size-[1.62cqw]" />
                </span>
              </div>
            </header>

            <div className="flex min-h-0 flex-1 flex-col">
              <div className="flex min-h-0 flex-1 flex-col justify-end overflow-hidden px-[4cqw] [mask-image:linear-gradient(to_bottom,transparent_0,#000_7%)]">
                <div className="mx-auto w-full max-w-[62cqw] text-[1.5cqw] leading-[1.62] text-[#ecebe4]">
                  <div className="flex flex-col gap-[2cqw] pb-[0.5cqw]">
                    {children}
                  </div>
                </div>
              </div>

              <div className="flex-none px-[4cqw] pb-[1.6cqw] pt-[3cqw]">
                <div className="mx-auto w-full max-w-[62cqw] rounded-[1.7cqw] border border-white/10 bg-[#30302e] px-[1.6cqw] pb-[1.3cqw] pt-[1.5cqw] shadow-[0_0.4cqw_1.4cqw_-0.8cqw_rgba(0,0,0,0.25)]">
                  <div className="min-h-[2.6cqw] pb-[1.7cqw] text-[1.5cqw] font-light text-[#6f6d67]">
                    <span
                      aria-hidden="true"
                      className="mr-[0.35cqw] inline-block size-[0.85cqw] rounded-full bg-[#ecebe4]/50"
                    />
                    Ask anything
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[1.25cqw] text-[#9c9a92]">
                      <span className="inline-flex">
                        <Plus className="size-[1.76cqw]" />
                      </span>
                      <span className="inline-flex">
                        <Globe className="size-[1.76cqw]" />
                      </span>
                      <span className="inline-flex">
                        <SlidersHorizontal className="size-[1.76cqw]" />
                      </span>
                      <span className="text-[1.34cqw] text-[#ecebe4]">Auto</span>
                    </div>
                    <div className="flex items-center gap-[1.25cqw] text-[#9c9a92]">
                      <span className="inline-flex">
                        <Mic className="size-[1.76cqw]" />
                      </span>
                      <span className="grid size-[2.1cqw] place-items-center rounded-[0.6cqw] bg-[#ecebe4] text-[#262624]">
                        <ArrowUp strokeWidth={2.4} className="size-[1.7cqw]" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
