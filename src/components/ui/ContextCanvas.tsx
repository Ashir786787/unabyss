"use client";

import { useEffect, useRef } from "react";

function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  gold: boolean;
};

type Frame = {
  nodes: Node[];
  edges: [number, number][];
  hubs: number[];
};

function buildFrame(width: number, height: number, seed: number): Frame {
  const rand = mulberry32(seed);
  const count = 26;
  const nodes: Node[] = [];

  for (let i = 0; i < count; i++) {
    nodes.push({
      x: rand() * width,
      y: rand() * height,
      vx: (rand() - 0.5) * 0.24,
      vy: (rand() - 0.5) * 0.24,
      r: 1.2 + rand() * 1.6,
      gold: rand() > 0.82,
    });
  }

  const edges: [number, number][] = [];

  for (let i = 0; i < count; i++) {
    for (let j = i + 1; j < count; j++) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;

      if (dx * dx + dy * dy < width * 0.05 * (width * 0.05)) {
        edges.push([i, j]);
      }
    }
  }

  const hubs = [3, 11, 19].map((index) => index % count);

  return { nodes, edges, hubs };
}

export default function ContextCanvas() {
  const baseRef = useRef<HTMLCanvasElement>(null);
  const hoverRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<Frame | null>(null);
  const sizeRef = useRef({ width: 0, height: 0, dpr: 1 });
  const reducedRef = useRef(false);

  useEffect(() => {
    const base = baseRef.current;
    const hover = hoverRef.current;

    if (!base || !hover) {
      return;
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    reducedRef.current = reduced;

    const seed = Date.now() % 1e9;

    const resize = () => {
      const rect = base.parentElement?.getBoundingClientRect();

      if (!rect) {
        return;
      }

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = rect.width;
      const height = rect.height;

      sizeRef.current = { width, height, dpr };

      base.width = Math.round(width * dpr);
      base.height = Math.round(height * dpr);
      hover.width = Math.round(width * dpr);
      hover.height = Math.round(height * dpr);

      frameRef.current = buildFrame(width, height, seed);
    };

    const draw = (canvas: HTMLCanvasElement, bright: boolean) => {
      const ctx = canvas.getContext("2d");

      if (!ctx) {
        return;
      }

      const { width, height, dpr } = sizeRef.current;
      const frame = frameRef.current;

      if (!frame) {
        return;
      }

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);

      for (const [a, b] of frame.edges) {
        ctx.strokeStyle = bright
          ? "rgba(255, 255, 255, 0.10)"
          : "rgba(255, 255, 255, 0.045)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(frame.nodes[a].x, frame.nodes[a].y);
        ctx.lineTo(frame.nodes[b].x, frame.nodes[b].y);
        ctx.stroke();
      }

      for (const node of frame.nodes) {
        ctx.fillStyle = bright
          ? node.gold
            ? "rgba(251, 191, 36, 0.5)"
            : "rgba(255, 255, 255, 0.28)"
          : "rgba(255, 255, 255, 0.14)";
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        ctx.fill();
      }

      const pulse = (Math.sin(Date.now() / 900) + 1) / 2;

      for (const index of frame.hubs) {
        const node = frame.nodes[index];

        ctx.strokeStyle = bright
          ? `rgba(251, 191, 36, ${0.28 - pulse * 0.16})`
          : "rgba(255, 255, 255, 0.05)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 9 + pulse * 10, 0, Math.PI * 2);
        ctx.stroke();
      }
    };

    const tick = () => {
      const frame = frameRef.current;

      if (frame) {
        const { width, height } = sizeRef.current;

        for (const node of frame.nodes) {
          node.x += node.vx;
          node.y += node.vy;

          if (node.x < 0 || node.x > width) {
            node.vx *= -1;
          }

          if (node.y < 0 || node.y > height) {
            node.vy *= -1;
          }
        }
      }

      draw(base, false);
      draw(hover, true);
    };

    resize();
    window.addEventListener("resize", resize);
    const observer = new ResizeObserver(resize);
    observer.observe(base.parentElement as Element);

    if (reduced) {
      tick();
    } else {
      const raf = requestAnimationFrame(function loop() {
        tick();
        requestAnimationFrame(loop);
      });

      return () => {
        cancelAnimationFrame(raf);
        observer.disconnect();
        window.removeEventListener("resize", resize);
      };
    }

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="group relative h-full w-full bg-[#0a0a0a]">
      <canvas ref={baseRef} className="block h-full w-full" aria-hidden="true" />
      <canvas
        ref={hoverRef}
        className="absolute inset-0 block h-full w-full opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
        aria-hidden="true"
      />
      <div
        className="v2-print-grain pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{ opacity: 0.12 }}
      />
    </div>
  );
}
