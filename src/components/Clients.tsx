import Counter from "./Counter";
import Img from "./Img";
import { clients } from "@/data/content";

// Client logo wall.
export default function Clients() {
  return (
    <section id="clients" style={{ background: "#F4FAEC", padding: "88px 0", borderTop: "1px solid #E2E6E3", borderBottom: "1px solid #E2E6E3" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <div data-reveal="" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "24px", flexWrap: "wrap" }}>
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "12px", letterSpacing: ".16em", color: "#66A52C" }}>CLIENTS</div>
            <h2 style={{ margin: "14px 0 0", fontSize: "38px", fontWeight: 900, letterSpacing: "-.03em", color: "#181818" }}><span data-ko="">함께하는 고객사</span><span data-en="">Brands we work with</span></h2>
            <p style={{ margin: "14px 0 0", maxWidth: "600px", fontSize: "17px", color: "#6E7672" }}><span data-ko="">식품, 생활용품, 의료·산업 분야 고객사의 포장재를 생산합니다.</span><span data-en="">We produce packaging for food, household, medical and industrial brands.</span></p>
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
            <Counter value={clients.length} style={{ fontSize: "56px", fontWeight: 900, letterSpacing: "-.035em", color: "#4F8420", lineHeight: 1 }} />
            <span style={{ fontSize: "22px", fontWeight: 700, color: "#4F8420" }}><span data-ko="">개사 이상</span><span data-en="">brands+</span></span>
          </div>
        </div>
        <div className="grid-6" style={{ display: "grid", gridTemplateColumns: "repeat(6,minmax(0,1fr))", gap: "16px", marginTop: "40px" }}>
          {clients.map((client) => (
            <div key={client.src} data-reveal="" className="hov" style={{ background: "#fff", border: "1px solid #E2E6E3", borderRadius: "12px", height: "104px", display: "flex", alignItems: "center", justifyContent: "center", padding: "16px" }}>
              <Img src={client.src} alt={client.name} style={{ maxHeight: "54px", maxWidth: "100%", objectFit: "contain" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
