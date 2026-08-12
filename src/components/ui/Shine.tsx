"use client";

import { useEffect } from "react";

export default function Shine() {
  useEffect(() => {
    let frame = 0;

    const onPointerMove = (event: PointerEvent) => {
      const target = (event.target as HTMLElement | null)?.closest?.(
        ".v2-shine",
      ) as HTMLElement | null;

      if (!target) {
        return;
      }

      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        const rect = target.getBoundingClientRect();
        target.style.setProperty(
          "--glass-shine-x",
          `${event.clientX - rect.left}px`,
        );
        target.style.setProperty(
          "--glass-shine-y",
          `${event.clientY - rect.top}px`,
        );
        target.setAttribute("data-shine-active", "");
      });
    };

    const onPointerOut = (event: PointerEvent) => {
      const target = (event.target as HTMLElement | null)?.closest?.(
        ".v2-shine",
      ) as HTMLElement | null;

      if (target) {
        target.removeAttribute("data-shine-active");
      }
    };

    document.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerout", onPointerOut, { passive: true });

    return () => {
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerout", onPointerOut);
      cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
