import Img from "./Img";

// 04 — certificates held.
export default function Certifications() {
  return (
    <section id="certs" style={{ padding: "96px 0" }}>
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
    <div data-reveal="">
    <div style={{ fontFamily: "var(--font-mono)", fontSize: "12px", letterSpacing: ".16em", color: "#66A52C" }}>04 — CERTIFICATION</div>
    <h2 style={{ margin: "14px 0 0", fontSize: "38px", fontWeight: "900", letterSpacing: "-.03em", color: "#181818" }}><span data-ko="">보유 인증</span><span data-en="">Certifications</span></h2>
    </div>
    <div className="grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: "20px", marginTop: "40px" }}>
    <div data-reveal="" className="hov" style={{ border: "1px solid #E2E6E3", borderRadius: "12px", padding: "18px", background: "#fff" }}>
    <div style={{ background: "#F8FAF8", borderRadius: "8px", padding: "10px", display: "flex", justifyContent: "center" }}><Img src="/assets/certs/iso9001.webp" alt="ISO 9001" style={{ maxHeight: "200px", objectFit: "contain" }} /></div>
    <h3 style={{ margin: "16px 0 0", fontSize: "18px", fontWeight: "900", color: "#181818" }}>ISO 9001:2015</h3>
    <p style={{ margin: "6px 0 0", fontSize: "14px", color: "#6E7672" }}><span data-ko="">품질경영시스템 · 한국생산성본부인증원<br />인증범위 : 포장재 및 합성수지 필름의 제조</span><span data-en="">Quality management system · KPC Certification<br />Scope: packaging materials &amp; resin film</span></p>
    </div>
    <div data-reveal="" className="hov" style={{ border: "1px solid #E2E6E3", borderRadius: "12px", padding: "18px", background: "#fff" }}>
    <div style={{ background: "#F8FAF8", borderRadius: "8px", padding: "10px", display: "flex", justifyContent: "center" }}><Img src="/assets/certs/iso14001.webp" alt="ISO 14001" style={{ maxHeight: "200px", objectFit: "contain" }} /></div>
    <h3 style={{ margin: "16px 0 0", fontSize: "18px", fontWeight: "900", color: "#181818" }}>ISO 14001:2015</h3>
    <p style={{ margin: "6px 0 0", fontSize: "14px", color: "#6E7672" }}><span data-ko="">환경경영시스템 · 한국생산성본부인증원<br />2022. 11. 인증 취득</span><span data-en="">Environmental management system · KPC<br />Certified Nov 2022</span></p>
    </div>
    <div data-reveal="" className="hov" style={{ border: "1px solid #E2E6E3", borderRadius: "12px", padding: "18px", background: "#fff" }}>
    <div style={{ background: "#F8FAF8", borderRadius: "8px", padding: "10px", display: "flex", justifyContent: "center" }}><Img src="/assets/certs/green-tech.webp" alt="녹색기술 인증서" style={{ maxHeight: "200px", objectFit: "contain" }} /></div>
    <h3 style={{ margin: "16px 0 0", fontSize: "18px", fontWeight: "900", color: "#4F8420" }}><span data-ko="">녹색기술 인증</span><span data-en="">Green Technology</span></h3>
    <p style={{ margin: "6px 0 0", fontSize: "14px", color: "#6E7672" }}><span data-ko="">제 GT-23-01587호 · 중소벤처기업부<br />알코올 용해성 우레탄 수지 잉크 적용 포장재 제조기술</span><span data-en="">GT-23-01587 · Ministry of SMEs and Startups<br />Alcohol-soluble urethane resin ink process</span></p>
    </div>
    <div data-reveal="" className="hov" style={{ border: "1px solid #E2E6E3", borderRadius: "12px", padding: "18px", background: "#fff" }}>
    <div style={{ background: "#F8FAF8", borderRadius: "8px", padding: "10px", display: "flex", justifyContent: "center" }}><Img src="/assets/certs/green-product.webp" alt="녹색기술제품 확인서" style={{ maxHeight: "200px", objectFit: "contain" }} /></div>
    <h3 style={{ margin: "16px 0 0", fontSize: "18px", fontWeight: "900", color: "#4F8420" }}><span data-ko="">녹색기술제품 확인</span><span data-en="">Green Tech Product</span></h3>
    <p style={{ margin: "6px 0 0", fontSize: "14px", color: "#6E7672" }}><span data-ko="">제 GTP-23-03315호 · 저유해성 포장재 (PDS, PE3, PED)<br />유효기간 2023. 01. 26. ~ 2026. 01. 25.</span><span data-en="">GTP-23-03315 · Low-hazard packaging (PDS, PE3, PED)<br />Valid 26 Jan 2023 – 25 Jan 2026</span></p>
    </div>
    </div>
    </div>
    </section>
  );
}
