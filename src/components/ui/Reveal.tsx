"use client";

import type { CSSProperties, PropsWithChildren } from "react";
import { useInView } from "@/lib/useInView";

type RevealProps = PropsWithChildren<{
  delay?: number;
  y?: number;
  className?: string;
}>;

export default function Reveal({
  children,
  delay = 0,
  y = 28,
  className = "",
}: RevealProps) {
  const [ref, inView] = useInView<HTMLDivElement>();

  const style: CSSProperties = {
    "--v2-reveal-delay": `${delay}ms`,
    "--v2-reveal-y": `${y}px`,
  } as CSSProperties;

  return (
    <div
      ref={ref}
      style={style}
      className={`v2-reveal ${inView ? "is-revealed" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
