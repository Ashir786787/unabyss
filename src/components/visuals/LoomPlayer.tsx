"use client";

import { useEffect, useRef, useState } from "react";
import LoomVisual from "@/components/visuals/LoomVisual";
import { type Demo } from "@/data/demos";

export default function LoomPlayer({ demo }: { demo: Demo }) {
  const [soundOn, setSoundOn] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [visibility, setVisibility] = useState(1);

  const bubbleRef = useRef<HTMLVideoElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const soundOnRef = useRef(soundOn);
  const expandedRef = useRef(expanded);

  useEffect(() => {
    soundOnRef.current = soundOn;
  }, [soundOn]);

  useEffect(() => {
    expandedRef.current = expanded;
  }, [expanded]);

  useEffect(() => {
    const updateVisibility = () => {
      const root = rootRef.current;
      if (!root) {
        return;
      }
      const rect = root.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rect.height === 0) {
        setVisibility(0);
        return;
      }
      const visible = Math.min(
        1,
        Math.max(0, (Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0)) / rect.height)
      );
      setVisibility(visible);
      if (visible <= 0.02 && soundOnRef.current && !expandedRef.current) {
        setSoundOn(false);
      }
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);
    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, []);

  useEffect(() => {
    const video = bubbleRef.current;
    if (!video) {
      return;
    }
    const scrolledOut = !expanded && visibility <= 0.02;
    video.muted = !soundOn || scrolledOut;
    video.volume = !soundOn || scrolledOut ? 0 : expanded ? 1 : visibility;
  }, [soundOn, expanded, visibility]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((current) => {
        if (!expanded && visibility <= 0.02) {
          return current;
        }
        return current + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [expanded, visibility]);

  useEffect(() => {
    if (soundOn && !expanded) {
      void bubbleRef.current?.play();
    }
  }, [soundOn, expanded]);

  useEffect(() => {
    if (!expanded) {
      return;
    }

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [expanded]);

  return (
    <div ref={rootRef}>
      {expanded ? (
        <div className="fixed inset-0 z-[9998]">
          <button
            type="button"
            aria-label="Exit full screen"
            onClick={() => setExpanded(false)}
            className="absolute inset-0 block h-full w-full cursor-default bg-[#060505c2] [backdrop-filter:blur(3px)]"
          />
          <LoomVisual
            demo={demo}
            soundOn={soundOn}
            seconds={seconds}
            expanded={expanded}
            visible={expanded}
            onToggleSound={() => setSoundOn((current) => !current)}
            onToggleFullscreen={() => setExpanded(false)}
            bubbleRef={bubbleRef}
          />
        </div>
      ) : null}
      <div className={expanded ? "hidden" : "block"}>
        <LoomVisual
          demo={demo}
          soundOn={soundOn}
          seconds={seconds}
          expanded={expanded}
          visible={!expanded}
          onToggleSound={() => setSoundOn((current) => !current)}
          onToggleFullscreen={() => setExpanded((current) => !current)}
          bubbleRef={bubbleRef}
        />
      </div>
    </div>
  );
}
