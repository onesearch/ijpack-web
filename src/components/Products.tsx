import Img from "./Img";

// 01 — product lines.
export default function Products() {
  return (
    <section id="products" style={{ padding: "96px 0" }}>
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
    <div data-reveal="">
    <div style={{ fontFamily: "var(--font-mono)", fontSize: "12px", letterSpacing: ".16em", color: "#66A52C" }}>01 — PRODUCTS</div>
    <h2 style={{ margin: "14px 0 0", fontSize: "38px", fontWeight: "900", letterSpacing: "-.03em", color: "#181818" }}><span data-ko="">비닐 · 연포장 · 인쇄</span><span data-en="">Vinyl · Flexible packaging · Printing</span></h2>
    <p style={{ margin: "16px 0 0", maxWidth: "640px", fontSize: "17px", color: "#6E7672" }}><span data-ko="">포장재 및 합성수지 필름의 제조 — 원료 선정부터 인쇄, 합지, 제대까지 자사 공정으로 수행합니다.</span><span data-en="">Manufacture of packaging materials and synthetic resin film — printing, lamination and bag making in house.</span></p>
    </div>
    <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "24px", marginTop: "48px" }}>
    <div data-reveal="" className="hov" style={{ background: "#fff", border: "1px solid #E2E6E3", borderTop: "3px solid #79BC38", borderRadius: "12px", padding: "22px" }}>
    <div style={{ height: "200px", borderRadius: "8px", background: "#F1F4F1", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}><Img src="/assets/packs/pack-2.webp" alt="" style={{ maxHeight: "180px", objectFit: "contain" }} /></div>
    <h3 style={{ margin: "18px 0 0", fontSize: "21px", fontWeight: "900", color: "#181818" }}><span data-ko="">연포장 · 파우치</span><span data-en="">Flexible pouches</span></h3>
    <p style={{ margin: "8px 0 0", fontSize: "15px", color: "#6E7672" }}><span data-ko="">식품·생활용품 파우치, 스탠드백, 지퍼백. 다층 합지 및 실링 강도 검사.</span><span data-en="">Food and household pouches, stand-up bags, zipper bags.</span></p>
    </div>
    <div data-reveal="" className="hov" style={{ background: "#fff", border: "1px solid #E2E6E3", borderTop: "3px solid #79BC38", borderRadius: "12px", padding: "22px" }}>
    <div style={{ height: "200px", borderRadius: "8px", background: "#F1F4F1", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}><Img src="/assets/packs/pack-4.webp" alt="" style={{ maxHeight: "180px", objectFit: "contain" }} /></div>
    <h3 style={{ margin: "18px 0 0", fontSize: "21px", fontWeight: "900", color: "#181818" }}><span data-ko="">비닐 · 합성수지 필름</span><span data-en="">Vinyl &amp; resin film</span></h3>
    <p style={{ margin: "8px 0 0", fontSize: "15px", color: "#6E7672" }}><span data-ko="">PE·PP 필름, 봉투, 산업용 시트. 두께와 폭 주문 제작.</span><span data-en="">PE/PP film, bags and industrial sheeting, made to order.</span></p>
    </div>
    <div data-reveal="" className="hov" style={{ background: "#fff", border: "1px solid #E2E6E3", borderTop: "3px solid #79BC38", borderRadius: "12px", padding: "22px" }}>
    <div style={{ height: "200px", borderRadius: "8px", background: "#F1F4F1", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}><Img src="/assets/packs/pack-6.webp" alt="" style={{ maxHeight: "180px", objectFit: "contain" }} /></div>
    <h3 style={{ margin: "18px 0 0", fontSize: "21px", fontWeight: "900", color: "#181818" }}><span data-ko="">인쇄 · 저유해성 잉크</span><span data-en="">Printing with low-hazard ink</span></h3>
    <p style={{ margin: "8px 0 0", fontSize: "15px", color: "#6E7672" }}><span data-ko="">그라비어·플렉소 인쇄. 알코올 용해성 우레탄 수지 잉크 적용(PDS, PE3, PED).</span><span data-en="">Gravure and flexo printing with alcohol-soluble urethane resin inks (PDS, PE3, PED).</span></p>
    </div>
    </div>
    </div>
    </section>
  );
}
