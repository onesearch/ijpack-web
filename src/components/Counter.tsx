"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  value: number;
  /** Render without thousands separators (e.g. a year). */
  plain?: boolean;
  style?: React.CSSProperties;
};

const DURATION_MS = 1100;

// Server-renders the final number (good for SEO / no-JS), then counts up from 0
// the first time it scrolls into view.
export default function Counter({ value, plain, style }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const animate = () => {
      const start = performance.now();
      const step = (now: number) => {
        const p = Math.min(1, (now - start) / DURATION_MS);
        setShown(Math.round(value * (1 - Math.pow(1 - p, 3))));
        if (p < 1) frame = requestAnimationFrame(step);
      };
      frame = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        animate();
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <span ref={ref} style={style}>
      {plain ? String(shown) : shown.toLocaleString("ko-KR")}
    </span>
  );
}
