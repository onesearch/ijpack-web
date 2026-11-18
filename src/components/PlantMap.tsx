"use client";

import { useEffect, useRef, useState } from "react";

const PLANT2_ADDRESS = "경기도 화성시 비봉면 양노남길 46-29";
const query = encodeURIComponent(PLANT2_ADDRESS);

const links = [
  { label: "네이버 지도", href: `https://map.naver.com/p/search/${query}` },
  { label: "카카오맵", href: `https://map.kakao.com/?q=${query}` },
  { label: "구글 지도", href: `https://www.google.com/maps/search/?api=1&query=${query}` },
];

// Google Maps embed of Plant 2 (keyless embed URL — no API key needed).
// A static address card sits underneath the iframe so a slow or failed load never shows a broken box:
// the iframe only starts loading near the viewport and fades in once it has actually loaded.
export default function PlantMap() {
  const box = useRef<HTMLDivElement>(null);
  const [load, setLoad] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={box} style={{ position: "relative", border: "1px solid #E2E6E3", borderRadius: "12px", overflow: "hidden", height: "240px", background: "#F1F4F1" }}>
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "center", gap: "12px", padding: "20px" }}>
        <div>
          <div style={{ fontSize: "13px", color: "#6E7672" }}>제2공장</div>
          <div style={{ fontSize: "15px", fontWeight: 700, color: "#181818", lineHeight: 1.5 }}>{PLANT2_ADDRESS}</div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {links.map((l) => (
            <a key={l.label} className="btn" href={l.href} target="_blank" rel="noopener noreferrer" style={{ padding: "10px 14px", minHeight: "44px", display: "inline-flex", alignItems: "center", borderRadius: "6px", border: "1px solid #8A938E", background: "#fff", color: "#181818", fontSize: "14px", fontWeight: 700 }}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
      {load && (
        <iframe
          title="제2공장 위치 (Google 지도)"
          src={`https://www.google.com/maps?q=${query}&hl=ko&z=16&output=embed`}
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={() => setReady(true)}
          style={{ position: "absolute", inset: 0, border: 0, width: "100%", height: "100%", display: "block", opacity: ready ? 1 : 0, pointerEvents: ready ? "auto" : "none", transition: "opacity .4s" }}
          allowFullScreen
        />
      )}
    </div>
  );
}
