import Img from "./Img";

// 05 — company story and timeline.
export default function About() {
  return (
    <section id="about" style={{ background: "#0F1410", padding: "96px 0", position: "relative", overflow: "hidden" }}>
    <div style={{ position: "absolute", top: "-120px", left: "-120px", width: "480px", height: "480px", background: "radial-gradient(circle,rgba(121,188,56,.28),transparent 64%)" }}></div>
    <div className="split" style={{ position: "relative", maxWidth: "1200px", margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.08fr)", gap: "56px", alignItems: "center" }}>
    <div data-reveal="" style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(255,255,255,.14)" }}><Img src="/assets/photos/building.png" alt="아이제이팩 사옥" sizes="(max-width: 1024px) 100vw, 560px" style={{ width: "100%", height: "400px", objectFit: "cover", display: "block" }} /></div>
    <div data-reveal="">
    <div style={{ fontFamily: "var(--font-mono)", fontSize: "12px", letterSpacing: ".16em", color: "#98CF62" }}>05 — ABOUT</div>
    <h2 style={{ margin: "14px 0 0", fontSize: "36px", fontWeight: "900", letterSpacing: "-.03em", color: "#fff", lineHeight: "1.25" }}><span data-ko="">대림산업에서 분리한<br />친환경 포장 전문 기업</span><span data-en="">A packaging specialist<br />spun off from DAELIM</span></h2>
    <p style={{ margin: "20px 0 0", fontSize: "16px", color: "#C3CDC3" }}><span data-ko="">글로벌 기류에 맞춰 친환경 제품 생산 및 지속 가능성에 대한 기업의 사회적 책임을 다하기 위해, 모회사인 대림산업으로부터 친환경 포장재 사업 부문을 분리하여 (주)아이제이팩을 설립하였습니다.</span><span data-en="">IJPAK was established by separating the eco-friendly packaging division from its parent company DAELIM, to meet global sustainability standards and corporate social responsibility.</span></p>
    <p style={{ margin: "14px 0 0", fontSize: "16px", color: "#C3CDC3" }}><span data-ko="">브랜드의 가치를 한층 높이고 소비자들과 함께 더 의미 있는 경험을 만들어가는 길에 (주)아이제이팩이 함께 하겠습니다.</span><span data-en="">We help brands raise their value and build more meaningful experiences with their customers.</span></p>
    <div style={{ display: "grid", gap: "12px", marginTop: "30px", paddingTop: "26px", borderTop: "1px solid rgba(255,255,255,.14)" }}>
    <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}><span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", fontWeight: "700", color: "#98CF62", flex: "0 0 46px" }}>1992</span><span style={{ fontSize: "15px", color: "#E4EAE4" }}><span data-ko="">5월 대림산업 설립(모회사)</span><span data-en="">May — DAELIM founded (parent company)</span></span></div>
    <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}><span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", fontWeight: "700", color: "#98CF62", flex: "0 0 46px" }}>2016</span><span style={{ fontSize: "15px", color: "#E4EAE4" }}><span data-ko="">6월 아이제이 설립(자회사) · 9월 삼방 제대기 도입 · 12월 무용제 드라이기 도입(국내 1호기)</span><span data-en="">Jun — IJ established · Sep — 3-side seal bag machine · Dec — first solvent-free dryer in Korea</span></span></div>
    <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}><span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", fontWeight: "700", color: "#98CF62", flex: "0 0 46px" }}>2019</span><span style={{ fontSize: "15px", color: "#E4EAE4" }}><span data-ko="">9월 슬리터기 도입</span><span data-en="">Sep — Slitter installed</span></span></div>
    <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}><span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", fontWeight: "700", color: "#98CF62", flex: "0 0 46px" }}>2020</span><span style={{ fontSize: "15px", color: "#E4EAE4" }}><span data-ko="">삼방 제대기 확장</span><span data-en="">3-side seal bag machines expanded</span></span></div>
    <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}><span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", fontWeight: "700", color: "#98CF62", flex: "0 0 46px" }}>2021</span><span style={{ fontSize: "15px", color: "#E4EAE4" }}><span data-ko="">(주)아이제이팩 설립</span><span data-en="">IJPAK Co., Ltd. established</span></span></div>
    <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}><span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", fontWeight: "700", color: "#98CF62", flex: "0 0 46px" }}>2022</span><span style={{ fontSize: "15px", color: "#E4EAE4" }}><span data-ko="">11월 ISO 9001 · 14001 인증서 취득 · 12월 매출 300억 달성(대림&amp;아이제이팩)</span><span data-en="">Nov — ISO 9001 and 14001 certified · Dec — KRW 30bn revenue (DAELIM &amp; IJPAK)</span></span></div>
    <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}><span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", fontWeight: "700", color: "#98CF62", flex: "0 0 46px" }}>2023</span><span style={{ fontSize: "15px", color: "#E4EAE4" }}><span data-ko="">1월 녹색기술 · 녹색기술제품 인증서 취득 · 12월 플렉소 인쇄기 도입</span><span data-en="">Jan — Green Technology and Green Product certified · Dec — Flexo press installed</span></span></div>
    </div>
    </div>
    </div>
    </section>
  );
}
