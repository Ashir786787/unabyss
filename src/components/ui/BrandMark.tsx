import type { CSSProperties } from "react";

type Dot = {
  x: number;
  y: number;
  dx: string;
  dy: string;
  dur: string;
  delay: string;
};

const dots: Dot[] = [
  { x: 4, y: 4, dx: "38px", dy: "-8px", dur: "1.4s", delay: "-0.6s" },
  { x: 12, y: 4, dx: "-16px", dy: "-18px", dur: "1.6s", delay: "-2.5s" },
  { x: 20, y: 4, dx: "52px", dy: "10px", dur: "1.4s", delay: "-2.3s" },
  { x: 28, y: 4, dx: "22px", dy: "22px", dur: "2.1s", delay: "-0.9s" },
  { x: 4, y: 12, dx: "-22px", dy: "8px", dur: "2.7s", delay: "-2.7s" },
  { x: 12, y: 12, dx: "32px", dy: "-14px", dur: "3.6s", delay: "-3.2s" },
  { x: 20, y: 12, dx: "-10px", dy: "20px", dur: "2.9s", delay: "-2.8s" },
  { x: 28, y: 12, dx: "28px", dy: "-22px", dur: "1.6s", delay: "-0.2s" },
  { x: 4, y: 20, dx: "-20px", dy: "-12px", dur: "3.3s", delay: "-0.7s" },
  { x: 12, y: 20, dx: "46px", dy: "4px", dur: "1.7s", delay: "-1.2s" },
  { x: 20, y: 20, dx: "-16px", dy: "-22px", dur: "1.8s", delay: "-0.9s" },
  { x: 28, y: 20, dx: "24px", dy: "16px", dur: "2s", delay: "-0.2s" },
  { x: 4, y: 28, dx: "-14px", dy: "12px", dur: "2.4s", delay: "-1.8s" },
  { x: 12, y: 28, dx: "66px", dy: "-6px", dur: "2.7s", delay: "-3.4s" },
  { x: 20, y: 28, dx: "8px", dy: "-26px", dur: "1.7s", delay: "-0.8s" },
  { x: 28, y: 28, dx: "36px", dy: "18px", dur: "1s", delay: "-0.1s" },
];

type BrandMarkProps = {
  scattered?: boolean;
  className?: string;
};

export default function BrandMark({
  scattered = false,
  className = "",
}: BrandMarkProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={`v2-logo-mark size-5 shrink-0 ${scattered ? "scattered" : ""} ${className}`}
    >
      <g fill="#ffffff">
        {dots.map((dot) => (
          <g
            key={`${dot.x}-${dot.y}`}
            className="v2-dot-shift"
            style={{ "--dx": dot.dx, "--dy": dot.dy } as CSSProperties}
          >
            <circle
              className="v2-dot"
              cx={dot.x}
              cy={dot.y}
              r="3"
              style={{ "--dur": dot.dur, "--delay": dot.delay } as CSSProperties}
            />
          </g>
        ))}
      </g>
    </svg>
  );
}
