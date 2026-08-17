"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Copy, Monitor } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import ChatMock from "@/components/ui/ChatMock";
import ChatGPTMock from "@/components/visuals/ChatGPTMock";
import type { ConnectCta, ConnectPageData } from "@/data/connect";

function ToolLogo({ toolClass }: { toolClass: "claude" | "chatgpt" }) {
  if (toolClass === "claude") {
    return (
      <img
        src="/images/hero/claude-mark.svg"
        alt=""
        aria-hidden="true"
        className="size-4 shrink-0"
        width="16"
        height="16"
      />
    );
  }

  return (
    <img
      src="/images/tools/chatgpt.svg"
      alt=""
      aria-hidden="true"
      className="size-4 shrink-0 brightness-0"
      width="16"
      height="16"
    />
  );
}

function PrimaryButton({
  cta,
  toolClass,
  tool,
}: {
  cta: ConnectCta;
  toolClass: "claude" | "chatgpt";
  tool: string;
}) {
  const inner = (
    <>
      {cta.label}{" "}
      <ToolLogo toolClass={toolClass} /> {tool}
      <ArrowUpRight
        strokeWidth={1.8}
        className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </>
  );

  const className =
    "group inline-flex h-11 shrink-0 items-center gap-2 rounded-full bg-white px-5 text-[15px] font-medium whitespace-nowrap text-black no-underline transition-all hover:bg-white/90";

  return cta.external ? (
    <a
      href={cta.href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {inner}
    </a>
  ) : (
    <a href={cta.href} className={className}>
      {inner}
    </a>
  );
}

function SecondaryButton({ cta }: { cta: ConnectCta }) {
  return (
    <a
      href={cta.href}
      className="group inline-flex h-11 shrink-0 items-center gap-2 rounded-full border border-white/15 px-5 text-[15px] font-medium whitespace-nowrap text-white no-underline transition-colors hover:bg-white/5"
    >
      <Monitor className="size-4 shrink-0 opacity-70" aria-hidden="true" />
      {cta.label}
    </a>
  );
}

function CopyPrompt({ prompt }: { prompt: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(prompt);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = prompt;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div className="flex min-w-0 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-2">
      <span className="min-w-0 flex-1 truncate px-2 text-[15px] text-white/90">
        {prompt}
      </span>
      <button
        type="button"
        onClick={copy}
        className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-[13px] font-medium text-white transition-colors hover:bg-white/10"
      >
        {copied ? (
          <Check className="size-3.5 text-emerald-300" strokeWidth={2.2} />
        ) : (
          <Copy className="size-3.5" />
        )}
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}

export default function ConnectPageSection({ page }: { page: ConnectPageData }) {
  return (
    <>
      <section className="relative px-6 pb-8 pt-28 sm:px-10 sm:pt-32 lg:px-12">
        <div className="relative mx-auto max-w-[860px]">
          <Reveal className="flex flex-col items-center text-center">
            <span className="v2-print-label">{page.label}</span>
            <h1
              className="v2-print-display mt-5 max-w-[18ch] text-white"
              style={{
                fontSize: "clamp(38px, 5.4vw, 66px)",
                lineHeight: 1.08,
              }}
            >
              {page.title}
            </h1>
            <p className="mt-6 max-w-[54ch] text-[17px] font-light leading-[1.7] text-white/65 sm:text-[18px]">
              {page.subtitle}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative px-6 py-16 sm:px-10 sm:py-24 lg:px-12">
        <div className="relative mx-auto flex max-w-[1000px] flex-col gap-16 sm:gap-20">
          {page.steps.map((step, index) => {
            const showMock = Boolean(page.steps.length > 1 && index === 1);

            return (
              <Reveal
                key={step.title}
                className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14"
              >
                <div
                  className={`flex flex-col gap-4 ${
                    showMock && page.mockOnLeft ? "lg:order-2" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[var(--gold-muted)]/40 text-[15px] font-medium text-white">
                      {step.number}
                    </span>
                    <h2 className="text-[22px] font-medium text-white">
                      {step.title}
                    </h2>
                  </div>

                  <p className="text-[16px] font-light leading-[1.7] text-white/60">
                    {step.body}
                  </p>

                  {step.copyPrompt ? (
                    <div className="mt-1 flex flex-col gap-3">
                      <CopyPrompt prompt={step.copyPrompt} />
                    </div>
                  ) : null}

                  {step.primaryCta || step.secondaryCta ? (
                    <div className="mt-1 flex flex-wrap items-center gap-3">
                      {step.primaryCta ? (
                        <PrimaryButton
                          cta={step.primaryCta}
                          toolClass={page.toolClass}
                          tool={page.tool}
                        />
                      ) : null}
                      {step.secondaryCta ? (
                        <SecondaryButton cta={step.secondaryCta} />
                      ) : null}
                    </div>
                  ) : null}
                </div>

                {showMock ? (
                  <div
                    className={`mx-auto w-full max-w-[460px] ${
                      page.mockOnLeft ? "lg:order-1" : ""
                    }`}
                  >
                    {page.toolClass === "chatgpt" ? (
                      <ChatGPTMock title="Q3 launch status">
                        <div className="flex flex-col gap-[1.1cqw]">
                          <div className="h-[1.6cqw] w-[92%] rounded-[0.6cqw] bg-white/10" />
                          <div className="h-[1.6cqw] w-[64%] rounded-[0.6cqw] bg-white/[0.07]" />
                          <div className="h-[1.6cqw] w-[78%] rounded-[0.6cqw] bg-white/10" />
                        </div>
                      </ChatGPTMock>
                    ) : (
                      <ChatMock
                        title="Q3 launch status"
                        ratio="118 / 100"
                        zoom={1.3}
                      >
                        <div className="flex flex-col gap-[1.1cqw]">
                          <div className="h-[1.6cqw] w-[92%] rounded-[0.6cqw] bg-white/10" />
                          <div className="h-[1.6cqw] w-[64%] rounded-[0.6cqw] bg-white/[0.07]" />
                          <div className="h-[1.6cqw] w-[78%] rounded-[0.6cqw] bg-white/10" />
                        </div>
                      </ChatMock>
                    )}
                  </div>
                ) : null}
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="relative px-6 pb-24 sm:px-10 lg:px-12">
        <Reveal className="relative mx-auto flex max-w-[760px] flex-col items-center gap-6 text-center">
          <h2
            className="v2-print-display text-white"
            style={{ fontSize: "clamp(26px, 3.2vw, 40px)", lineHeight: 1.2 }}
          >
            {page.ctaTitle}
          </h2>
          <p className="max-w-[48ch] text-[17px] font-light leading-[1.7] text-white/60">
            {page.ctaBody}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={page.ctaPrimary.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 text-[15px] font-medium text-black no-underline transition-all hover:bg-white/90"
            >
              {page.ctaPrimary.label}
              <ArrowUpRight
                strokeWidth={1.8}
                className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href={page.ctaAlt.href}
              className="group inline-flex h-11 items-center gap-2 rounded-full border border-white/15 px-5 text-[15px] font-medium text-white no-underline transition-colors hover:bg-white/5"
            >
              {page.ctaAlt.label}
              <ArrowUpRight
                strokeWidth={1.8}
                className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
