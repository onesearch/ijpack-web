"use client";

import { useEffect } from "react";

// Fades in every `[data-reveal]` element as it enters the viewport.
// Content stays visible without JS: the hidden state only applies under `.reveal-ready`.
export default function ScrollReveal() {
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -6% 0px" },
    );

    const viewportBottom = window.innerHeight;
    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
      // Anything already on screen at load is shown immediately, not animated.
      if (el.getBoundingClientRect().top < viewportBottom) el.classList.add("in");
      else observer.observe(el);
    });
    document.documentElement.classList.add("reveal-ready");

    return () => observer.disconnect();
  }, []);

  return null;
}
