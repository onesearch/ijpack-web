"use client";

import { useEffect, useRef, useState } from "react";
import Counter from "./Counter";
import Img from "./Img";
import { useLang } from "./LangProvider";
import { portfolioItems, type PortfolioCategory } from "@/data/content";

type Filter = "all" | PortfolioCategory;

const filters: { value: Filter; ko: string; en: string }[] = [
  { value: "all", ko: "전체", en: "All" },
  { value: "meat", ko: "육가공 · 치킨", en: "Meat & chicken" },
  { value: "snack", ko: "스낵 · 제과", en: "Snacks" },
  { value: "noodle", ko: "면 · 간편식", en: "Noodles & meals" },
  { value: "other", ko: "생활 · 의료", en: "Household & medical" },
];

// "Show more" reveals this many grid rows at a time.
const ROWS_PER_STEP = 3;

// 02 — portfolio grid with category filter and row-based "show more".
export default function Portfolio() {
  const { lang } = useLang();
  const gridRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState<Filter>("all");
  const [rows, setRows] = useState(ROWS_PER_STEP);
  const [columns, setColumns] = useState(8);

  // The column count comes from CSS (it changes at the responsive breakpoints).
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const measure = () => {
      const count = getComputedStyle(grid).gridTemplateColumns.split(" ").filter(Boolean).length;
      if (count) setColumns(count);
    };
    const observer = new ResizeObserver(measure);
    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  const matching = portfolioItems.filter((item) => filter === "all" || item.category === filter);
  const step = columns * ROWS_PER_STEP;
  const limit = columns * rows;
  const visible = matching.slice(0, limit);
  const remaining = matching.length - visible.length;
  const collapsible = remaining === 0 && matching.length > step;

  function selectFilter(value: Filter) {
    setFilter(value);
    setRows(ROWS_PER_STEP);
  }

  function toggleMore() {
    if (remaining > 0) {
      setRows((r) => r + ROWS_PER_STEP);
      return;
    }
    setRows(ROWS_PER_STEP);
    const grid = gridRef.current;
    if (grid) window.scrollTo({ top: grid.getBoundingClientRect().top + window.scrollY - 140, behavior: "smooth" });
  }

  const moreLabel =
    remaining > 0
      ? lang === "en" ? `Show ${Math.min(step, remaining)} more` : `더보기 +${Math.min(step, remaining)}`
      : lang === "en" ? "Show less" : "접기";

  return (
    <section id="cases" style={{ padding: "96px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <div data-reveal="" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "24px", flexWrap: "wrap" }}>
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "12px", letterSpacing: ".16em", color: "#66A52C" }}>02 — PORTFOLIO</div>
            <h2 style={{ margin: "14px 0 0", fontSize: "38px", fontWeight: 900, letterSpacing: "-.03em", color: "#181818" }}><span data-ko="">납품사례</span><span data-en="">Portfolio</span></h2>
            <p style={{ margin: "14px 0 0", maxWidth: "620px", fontSize: "17px", color: "#6E7672" }}><span data-ko="">식품·제과·간편식·생활용품 분야에 납품한 연포장 사례입니다.</span><span data-en="">Flexible packaging delivered across food, confectionery, ready meals and household goods.</span></p>
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
            <Counter value={portfolioItems.length} style={{ fontSize: "56px", fontWeight: 900, letterSpacing: "-.035em", color: "#4F8420", lineHeight: 1 }} />
            <span style={{ fontSize: "22px", fontWeight: 700, color: "#4F8420" }}><span data-ko="">건</span><span data-en="">items</span></span>
          </div>
        </div>

        <div data-reveal="" role="group" aria-label={lang === "en" ? "Filter by category" : "분류별 보기"} style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "32px" }}>
          {filters.map((f) => {
            const active = f.value === filter;
            return (
              <button
                key={f.value}
                type="button"
                className="pf-chip"
                aria-pressed={active}
                onClick={() => selectFilter(f.value)}
                style={{ appearance: "none", cursor: "pointer", fontFamily: "inherit", fontSize: "14px", fontWeight: 700, padding: "9px 18px", borderRadius: "999px", whiteSpace: "nowrap", transition: "background .2s,color .2s,border-color .2s", border: `1px solid ${active ? "#79BC38" : "#E2E6E3"}`, background: active ? "#79BC38" : "#fff", color: active ? "#fff" : "#454B48" }}
              >
                <span data-ko="">{f.ko}</span>
                <span data-en="">{f.en}</span>
              </button>
            );
          })}
        </div>

        <div id="pf-grid" ref={gridRef} style={{ display: "grid", gridTemplateColumns: "repeat(8,minmax(0,1fr))", gap: "12px", marginTop: "28px" }}>
          {visible.map((item) => (
            <div key={item.src} className="pf" style={{ border: "1px solid #E2E6E3", borderRadius: "10px", background: "#fff", padding: "10px", aspectRatio: "1/1", overflow: "hidden", transition: "transform .35s cubic-bezier(.16,1,.3,1),box-shadow .35s,border-color .35s" }}>
              <Img src={item.src} alt={item.alt} sizes="(max-width: 520px) 33vw, (max-width: 768px) 25vw, 150px" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
            </div>
          ))}
        </div>
        {remaining > 0 && (
          <div style={{ height: "72px", marginTop: "-72px", position: "relative", pointerEvents: "none", background: "linear-gradient(180deg,rgba(255,255,255,0),#fff)" }} />
        )}

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginTop: "24px", flexWrap: "wrap" }}>
          {(remaining > 0 || collapsible) && (
            <button id="pf-more" type="button" className="btn" onClick={toggleMore} style={{ appearance: "none", cursor: "pointer", fontFamily: "inherit", fontSize: "16px", fontWeight: 700, padding: "15px 32px", borderRadius: "999px", border: "1px solid #E2E6E3", background: "#fff", color: "#181818", display: "inline-flex", alignItems: "center", gap: "10px", whiteSpace: "nowrap", transition: "background .2s,border-color .2s" }}>
              <span>{moreLabel}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "16px", height: "16px", flexShrink: 0, transform: remaining > 0 ? "none" : "rotate(180deg)" }} aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
            </button>
          )}
          <span aria-live="polite" style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "#98A09C" }}>
            {visible.length} / {matching.length}
          </span>
        </div>
        <p style={{ margin: "26px 0 0", fontSize: "13px", color: "#98A09C" }}><span data-ko="">※ 실제 납품 포장재 사례이며, 각 제품의 상표권은 해당 고객사에 있습니다.</span><span data-en="">※ Packaging delivered to clients. All trademarks belong to their respective owners.</span></p>
      </div>
    </section>
  );
}
