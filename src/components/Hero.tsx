import Counter from "./Counter";
import Img from "./Img";

// Hero with company tagline, CTAs and headline stats.
export default function Hero() {
  return (
    <section id="top" style={{ position: "relative", overflow: "hidden", background: "#0F1410" }}>
    <Img src="/assets/photos/building.png" alt="" preload sizes="100vw" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", opacity: ".5" }} />
    <div style={{ position: "absolute", inset: "0", background: "linear-gradient(100deg,rgba(15,20,16,.94) 34%,rgba(15,20,16,.55) 70%,rgba(15,20,16,.35))" }}></div>
    <div style={{ position: "absolute", top: "-140px", right: "-60px", width: "520px", height: "520px", background: "radial-gradient(circle,rgba(121,188,56,.35),transparent 62%)" }}></div>
    <div style={{ position: "relative", maxWidth: "1200px", margin: "0 auto", padding: "104px 24px 88px" }}>
    <div style={{ maxWidth: "660px" }}>
    <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "7px 15px", borderRadius: "999px", background: "rgba(121,188,56,.18)", border: "1px solid rgba(121,188,56,.45)", color: "#98CF62", fontSize: "13px", fontWeight: "700", whiteSpace: "nowrap" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: "15px", height: "15px", flexShrink: "0" }} aria-hidden="true"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg><span data-ko="">녹색기술인증 GT-23-01587</span><span data-en="">Green Tech Certified · GT-23-01587</span></span>
    <h1 style={{ margin: "22px 0 0", fontSize: "54px", fontWeight: "900", lineHeight: "1.14", letterSpacing: "-.03em", color: "#fff" }}>
    <span data-ko="">친환경 포장의 기준<br /><span style={{ color: "#98CF62" }}>대림 아이제이팩</span></span>
    <span data-en="">The standard for<br /><span style={{ color: "#98CF62" }}>eco-friendly packaging</span></span></h1>
    <p style={{ margin: "24px 0 0", fontSize: "18px", lineHeight: "1.75", color: "#C3CDC3" }}>
    <span data-ko="">비닐 제품과 연포장 제품의 생산과 인쇄에 전념한 전문 기업입니다. 알코올 용해성 우레탄 수지 잉크를 적용한 저유해성 포장재로 유기 화학물질 배출을 줄입니다.</span>
    <span data-en="">A specialist manufacturer of vinyl and flexible packaging. Our low-hazard packaging uses alcohol-soluble urethane resin inks that cut organic solvent emissions.</span></p>
    <div style={{ display: "flex", gap: "12px", marginTop: "32px", flexWrap: "wrap" }}>
    <a className="btn" href="#quote" style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "17px 30px", borderRadius: "8px", background: "#79BC38", color: "#fff", fontSize: "17px", fontWeight: "700", whiteSpace: "nowrap" }}><span data-ko="">견적문의</span><span data-en="">Request a quote</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: "18px", height: "18px", flexShrink: "0" }} aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
    <a className="btn" href="tel:031-437-0146" style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "17px 30px", borderRadius: "8px", border: "1px solid rgba(255,255,255,.35)", color: "#fff", fontFamily: "var(--font-mono)", fontSize: "17px", whiteSpace: "nowrap" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: "18px", height: "18px", flexShrink: "0" }} aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>031-437-0146</a>
    </div>
    </div>
    <div className="grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: "1px", marginTop: "72px", background: "rgba(255,255,255,.14)", border: "1px solid rgba(255,255,255,.14)", borderRadius: "14px", overflow: "hidden" }}>
    <div style={{ background: "rgba(15,20,16,.72)", padding: "22px 24px" }}><div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: ".12em", color: "#8D9A90" }}>CERTIFICATIONS</div><div style={{ display: "flex", alignItems: "baseline", gap: "4px", marginTop: "8px" }}><Counter value={4} style={{ fontSize: "38px", fontWeight: "900", color: "#fff", letterSpacing: "-.03em", lineHeight: "1" }} /><span style={{ fontSize: "17px", fontWeight: "700", color: "#98CF62" }}><span data-ko="">종</span><span data-en="">certs</span></span></div></div>
    <div style={{ background: "rgba(15,20,16,.72)", padding: "22px 24px" }}><div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: ".12em", color: "#8D9A90" }}>SINCE</div><div style={{ display: "flex", alignItems: "baseline", gap: "4px", marginTop: "8px" }}><Counter value={1992} plain style={{ fontSize: "38px", fontWeight: "900", color: "#fff", letterSpacing: "-.03em", lineHeight: "1" }} /><span style={{ fontSize: "17px", fontWeight: "700", color: "#fff" }}><span data-ko="">년</span><span data-en=""></span></span></div></div>
    <div style={{ background: "rgba(15,20,16,.72)", padding: "22px 24px" }}><div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: ".12em", color: "#8D9A90" }}>CLIENTS</div><div style={{ display: "flex", alignItems: "baseline", gap: "4px", marginTop: "8px" }}><Counter value={12} style={{ fontSize: "38px", fontWeight: "900", color: "#fff", letterSpacing: "-.03em", lineHeight: "1" }} /><span style={{ fontSize: "17px", fontWeight: "700", color: "#3FA9E0" }}>+</span></div></div>
    <div style={{ background: "rgba(15,20,16,.72)", padding: "22px 24px" }}><div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: ".12em", color: "#8D9A90" }}>SOLVENT</div><div style={{ display: "flex", alignItems: "baseline", gap: "4px", marginTop: "8px" }}><Counter value={0} style={{ fontSize: "38px", fontWeight: "900", color: "#98CF62", letterSpacing: "-.03em", lineHeight: "1" }} /><span style={{ fontSize: "17px", fontWeight: "700", color: "#98CF62" }}>g/㎡</span></div></div>
    </div>
    </div>
    </section>
  );
}
