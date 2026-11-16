import Img from "./Img";

// Site footer with plant addresses.
export default function Footer() {
  return (
    <footer style={{ background: "#2A2E2C", padding: "44px 0", color: "#98A09C" }}>
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", display: "flex", justifyContent: "space-between", gap: "28px", flexWrap: "wrap", alignItems: "flex-end" }}>
    <div><Img src="/assets/logo-white.png" alt="대림 아이제이팩" style={{ height: "28px" }} /><p style={{ margin: "14px 0 0", fontSize: "14px", lineHeight: "1.8" }}><span data-ko="">친환경 비닐 · 연포장 전문 기업<br />제1공장 경기도 안산시 상록구 도금단지2길 13<br />제2공장 경기도 화성시 비봉면 양노남길 46-29 · 031-437-0146</span><span data-en="">Eco-friendly vinyl &amp; flexible packaging<br />Plant 1: 13 Dogeumdanji 2-gil, Sangnok-gu, Ansan-si<br />Plant 2: 46-29 Yangno-namgil, Bibong-myeon, Hwaseong-si · +82-31-437-0146</span></p></div>
    <div style={{ fontFamily: "var(--font-mono)", fontSize: "12px" }}>© 2026 DAELIM (IJPAK) CO., LTD.</div>
    </div>
    </footer>
  );
}
