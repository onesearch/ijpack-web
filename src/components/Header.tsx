"use client";

import Img from "./Img";
import { useLang, type Lang } from "./LangProvider";

const navItems = [
  { href: "#products", ko: "제품", en: "Products" },
  { href: "#cases", ko: "납품사례", en: "Cases" },
  { href: "#facility", ko: "설비인증", en: "Facility" },
  { href: "#about", ko: "회사소개", en: "About" },
  { href: "#quote", ko: "견적문의", en: "Contact" },
];

function LangButton({ value }: { value: Lang }) {
  const { lang, setLang } = useLang();
  const active = lang === value;
  return (
    <button
      type="button"
      className="btn"
      aria-pressed={active}
      onClick={() => setLang(value)}
      style={{ appearance: "none", border: "none", cursor: "pointer", padding: "6px 12px", fontFamily: "inherit", fontSize: "12px", fontWeight: 700, background: active ? "#79BC38" : "#fff", color: active ? "#fff" : "#6E7672" }}
    >
      {value.toUpperCase()}
    </button>
  );
}

export default function Header() {
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 30, background: "rgba(255,255,255,.94)", backdropFilter: "blur(10px)", borderBottom: "1px solid #E2E6E3" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", minHeight: "76px", display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
        <a href="#top" style={{ display: "flex", alignItems: "center" }}>
          <Img src="/assets/logo-primary.webp" alt="대림 아이제이팩" preload style={{ height: "34px" }} />
        </a>
        <nav className="site-nav" style={{ display: "flex", alignItems: "center", gap: "22px", marginLeft: "auto", whiteSpace: "nowrap", flexShrink: 0 }}>
          {navItems.map((item) => (
            <a key={item.href} className="lnk" href={item.href} style={{ fontSize: "15px", fontWeight: 700, color: "#181818" }}>
              <span data-ko="">{item.ko}</span>
              <span data-en="">{item.en}</span>
            </a>
          ))}
        </nav>
        <div className="header-tools" style={{ display: "flex", alignItems: "center", gap: "14px", paddingLeft: "20px", flexShrink: 0, borderLeft: "1px solid #E2E6E3" }}>
          <div role="group" aria-label="Language" style={{ display: "flex", border: "1px solid #E2E6E3", borderRadius: "999px", overflow: "hidden" }}>
            <LangButton value="ko" />
            <LangButton value="en" />
          </div>
          <a className="btn header-tel" href="tel:031-704-8701" style={{ fontFamily: "var(--font-mono)", fontSize: "14px", fontWeight: 500, color: "#02538A", whiteSpace: "nowrap" }}>
            031-704-8701
          </a>
        </div>
      </div>
    </header>
  );
}
