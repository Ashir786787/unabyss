import type { CSSProperties, PropsWithChildren } from "react";
import {
  AudioLines,
  ChevronDown,
  Forward,
  Mic,
  PanelLeft,
  Plus,
} from "lucide-react";

type ChatMockProps = PropsWithChildren<{
  title: string;
  ratio?: string;
  zoom?: number;
  model?: string;
  className?: string;
}>;

export default function ChatMock({
  title,
  ratio = "116 / 100",
  zoom = 1.5,
  model = "Sonnet 5",
  className = "",
  children,
}: ChatMockProps) {
  const mockStyle = { "--clay": "#d97757" } as CSSProperties;

  return (
    <div className={`demo w-full ${className}`}>
      <div
        className="mock mx-auto w-full max-w-[940px] overflow-x-clip"
        style={mockStyle}
      >
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
            <header className="flex flex-none items-center justify-between px-[1.7cqw] py-[1.5cqw]">
              <div className="flex items-center gap-[1.5cqw]">
                <span className="flex items-center gap-[0.85cqw]">
                  <i className="size-[1.17cqw] rounded-full bg-[#FF5F57]" />
                  <i className="size-[1.17cqw] rounded-full bg-[#FEBC2E]" />
                  <i className="size-[1.17cqw] rounded-full bg-[#28C840]" />
                </span>
                <span className="inline-flex text-[#9c9a92]">
                  <PanelLeft className="size-[1.76cqw]" />
                </span>
                <button
                  type="button"
                  className="ml-[0.4cqw] inline-flex cursor-default items-center gap-[0.5cqw] rounded-[0.8cqw] border-0 bg-transparent px-[0.9cqw] py-[0.4cqw] text-[1.4cqw] font-normal text-[#ecebe4]"
                >
                  {title}
                  <span className="inline-flex text-[#9c9a92]">
                    <ChevronDown className="size-[1.24cqw]" />
                  </span>
                </button>
              </div>
              <div className="flex items-center">
                <span className="inline-flex text-[#9c9a92]">
                  <Forward className="size-[1.76cqw]" />
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

              <div className="flex-none px-[4cqw] pb-[1.2cqw] pt-[3cqw]">
                <div className="mx-auto w-full max-w-[62cqw] rounded-[1.7cqw] border border-white/10 bg-[#30302e] px-[1.6cqw] pb-[1.1cqw] pt-[1.5cqw] shadow-[0_0.4cqw_1.4cqw_-0.8cqw_rgba(0,0,0,0.25)]">
                  <div className="min-h-[2.6cqw] pb-[1.7cqw] text-[1.5cqw] font-light text-[#6f6d67]">
                    Write a message...
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex text-[#9c9a92]">
                      <Plus className="size-[1.76cqw]" />
                    </span>
                    <div className="flex items-center gap-[1.4cqw]">
                      <span className="flex items-center gap-[0.55cqw] text-[1.32cqw] text-[#9c9a92]">
                        <span className="text-[#ecebe4]">{model}</span>
                        Medium
                        <span className="inline-flex">
                          <ChevronDown className="size-[1.24cqw]" />
                        </span>
                      </span>
                      <span className="inline-flex text-[#9c9a92]">
                        <Mic className="size-[1.76cqw]" />
                      </span>
                      <span className="grid size-[2.1cqw] place-items-center rounded-[0.6cqw] text-[#9c9a92]">
                        <AudioLines className="size-[1.76cqw]" />
                      </span>
                    </div>
                  </div>
                </div>
                <p className="mx-auto mt-[1cqw] text-center text-[1.08cqw] text-[#6f6d67]">
                  Claude is AI and can make mistakes. Please double-check
                  responses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
