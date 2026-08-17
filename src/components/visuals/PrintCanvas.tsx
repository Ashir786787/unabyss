"use client";

import { useEffect, useRef } from "react";

const PRINT_CONFIG = {
  spacing: 5,
  bite: 0,
  softGamma: 0.85,
  contrast: 2.3,
  posterizeSteps: 6,
  hardGamma: 1.25,
  cutoff: 0.07,
  inkAlpha: 0.89,
  maxRadius: 0.44,
  minRadius: 0.1,
  colorSaturation: 1.6,
  colorLighten: 1.3,
};

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function lerp(a: number, b: number, t: number) {
  return a + t * (b - a);
}

function colorize(r: number, g: number, b: number) {
  const lum = 0.299 * r + 0.587 * g + 0.114 * b;
  const c = (v: number) => clamp(v, 0, 255);
  return [
    c((lum + (r - lum) * PRINT_CONFIG.colorSaturation) * PRINT_CONFIG.colorLighten),
    c((lum + (g - lum) * PRINT_CONFIG.colorSaturation) * PRINT_CONFIG.colorLighten),
    c((lum + (b - lum) * PRINT_CONFIG.colorSaturation) * PRINT_CONFIG.colorLighten),
  ];
}

function toneCurve(value: number) {
  const e = clamp(value, 0, 1);
  const soft = Math.pow(e, PRINT_CONFIG.softGamma);
  let o = e;
  o = (o - 0.5) * PRINT_CONFIG.contrast + 0.5;
  o = clamp(o, 0, 1);
  const steps = Math.max(2, Math.round(PRINT_CONFIG.posterizeSteps));
  o = Math.round(o * (steps - 1)) / (steps - 1);
  o = Math.pow(o, PRINT_CONFIG.hardGamma);
  return lerp(soft, o, PRINT_CONFIG.bite);
}

function sample(
  data: Uint8ClampedArray,
  width: number,
  height: number,
  cx: number,
  cy: number,
  spacing: number
) {
  const c = Math.max(1, Math.floor(spacing / 2));
  const x0 = Math.max(0, Math.floor(cx - c));
  const x1 = Math.min(width - 1, Math.floor(cx + c));
  const y0 = Math.max(0, Math.floor(cy - c));
  const y1 = Math.min(height - 1, Math.floor(cy + c));
  let rSum = 0;
  let gSum = 0;
  let bSum = 0;
  let lumSum = 0;
  let count = 0;
  for (let y = y0; y <= y1; y++) {
    for (let x = x0; x <= x1; x++) {
      const i = (y * width + x) * 4;
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      rSum += r;
      gSum += g;
      bSum += b;
      lumSum += (0.299 * r + 0.587 * g + 0.114 * b) / 255;
      count++;
    }
  }
  if (!count) {
    return { tone: toneCurve(0), r: 0, g: 0, b: 0 };
  }
  return {
    tone: toneCurve(lumSum / count),
    r: Math.round(rSum / count),
    g: Math.round(gSum / count),
    b: Math.round(bSum / count),
  };
}

function drawHalftone(
  ctx: CanvasRenderingContext2D,
  data: Uint8ClampedArray,
  width: number,
  height: number,
  color: boolean
) {
  ctx.fillStyle = "#0a0a0a";
  ctx.fillRect(0, 0, width, height);
  const spacing = PRINT_CONFIG.spacing;
  const radiusMax = spacing * PRINT_CONFIG.maxRadius;
  const radiusWide = spacing * (PRINT_CONFIG.maxRadius + 0.06);
  const radiusMin = spacing * PRINT_CONFIG.minRadius;
  for (let y = spacing / 2; y < height; y += spacing) {
    for (let x = spacing / 2; x < width; x += spacing) {
      const cell = sample(data, width, height, x, y, spacing);
      const tone = cell.tone;
      if (tone < PRINT_CONFIG.cutoff) {
        continue;
      }
      const w = tone * radiusMax;
      const v = Math.max(radiusMin, tone * radiusWide);
      const radius = lerp(w, v, PRINT_CONFIG.bite);
      const alpha = lerp(
        PRINT_CONFIG.inkAlpha * tone,
        PRINT_CONFIG.inkAlpha * (0.42 + tone * 0.58),
        PRINT_CONFIG.bite
      );
      if (color) {
        const [cr, cg, cb] = colorize(cell.r, cell.g, cell.b);
        ctx.fillStyle = `rgba(${cr}, ${cg}, ${cb}, ${alpha})`;
      } else {
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
      }
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}

function drawImageToCanvas(canvas: HTMLCanvasElement, image: HTMLImageElement, color: boolean) {
  const rect = canvas.parentElement?.getBoundingClientRect();
  const width = Math.max(1, Math.round(rect?.width ?? 0));
  const height = Math.max(1, Math.round(rect?.height ?? 0));
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return;
  }
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  const off = document.createElement("canvas");
  off.width = width;
  off.height = height;
  const octx = off.getContext("2d");
  if (!octx) {
    return;
  }
  const scale = Math.max(width / image.width, height / image.height);
  const dw = width / scale;
  const dh = height / scale;
  const dx = (image.width - dw) / 2;
  const dy = (image.height - dh) / 2;
  octx.drawImage(image, dx, dy, dw, dh, 0, 0, width, height);
  const data = octx.getImageData(0, 0, width, height).data;
  drawHalftone(ctx, data, width, height, color);
}

type PrintCanvasProps = {
  src: string;
  className?: string;
};

export default function PrintCanvas({ src, className = "" }: PrintCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const baseRef = useRef<HTMLCanvasElement>(null);
  const hoverRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const base = baseRef.current;
    const hover = hoverRef.current;
    if (!container || !base || !hover) {
      return;
    }

    let cancelled = false;
    let baseImage: HTMLImageElement | null = null;
    let hoverImage: HTMLImageElement | null = null;

    const draw = () => {
      if (baseImage) {
        drawImageToCanvas(base, baseImage, false);
      }
      if (hoverImage) {
        drawImageToCanvas(hover, hoverImage, true);
      }
    };

    const loadImage = (image: HTMLImageElement) => {
      image.src = src;
      image.onload = () => {
        if (!cancelled) {
          draw();
        }
      };
    };

    baseImage = new Image();
    hoverImage = new Image();
    loadImage(baseImage);
    loadImage(hoverImage);

    const observer = new ResizeObserver(draw);
    observer.observe(container);

    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, [src]);

  return (
    <div ref={containerRef} className={`group relative h-full w-full bg-[#0a0a0a] ${className}`}>
      <canvas ref={baseRef} className="block h-full w-full" aria-hidden="true" />
      <canvas
        ref={hoverRef}
        className="absolute inset-0 block h-full w-full opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
        aria-hidden="true"
      />
      <div className="v2-print-grain pointer-events-none absolute inset-0" aria-hidden="true" />
    </div>
  );
}
