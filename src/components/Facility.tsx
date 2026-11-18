import Img from "./Img";

// 03 — production equipment photos.
export default function Facility() {
  return (
    <section id="facility" style={{ background: "#F8FAF8", padding: "96px 0", borderTop: "1px solid #E2E6E3" }}>
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
    <div data-reveal="">
    <div style={{ fontFamily: "var(--font-mono)", fontSize: "12px", letterSpacing: ".16em", color: "#66A52C" }}>03 — FACILITY</div>
    <h2 style={{ margin: "14px 0 0", fontSize: "38px", fontWeight: "900", letterSpacing: "-.03em", color: "#181818" }}><span data-ko="">생산 설비</span><span data-en="">Production line</span></h2>
    <p style={{ margin: "16px 0 0", maxWidth: "640px", fontSize: "17px", color: "#6E7672" }}><span data-ko="">그라비어 인쇄기, 라미네이터, 슬리터, 제대기를 갖춘 일괄 생산 체계입니다.</span><span data-en="">Gravure press, laminator, slitter and bag-making machines under one roof.</span></p>
    </div>
    <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "16px", marginTop: "40px" }}>
    <figure data-reveal="" className="hov" style={{ margin: "0", border: "1px solid #E2E6E3", borderRadius: "12px", overflow: "hidden", background: "#fff" }}><Img src="/assets/photos/gravure-press.webp" alt="" sizes="(max-width: 520px) 100vw, (max-width: 768px) 50vw, 380px" style={{ width: "100%", height: "220px", objectFit: "cover", display: "block" }} /><figcaption style={{ padding: "14px 16px", fontSize: "14px", fontWeight: "700", color: "#181818" }}><span data-ko="">그라비어 인쇄기</span><span data-en="">Gravure press</span></figcaption></figure>
    <figure data-reveal="" className="hov" style={{ margin: "0", border: "1px solid #E2E6E3", borderRadius: "12px", overflow: "hidden", background: "#fff" }}><Img src="/assets/photos/flexo-press.webp" alt="" sizes="(max-width: 520px) 100vw, (max-width: 768px) 50vw, 380px" style={{ width: "100%", height: "220px", objectFit: "cover", display: "block" }} /><figcaption style={{ padding: "14px 16px", fontSize: "14px", fontWeight: "700", color: "#181818" }}><span data-ko="">라미네이터 · 합지</span><span data-en="">Laminator</span></figcaption></figure>
    <figure data-reveal="" className="hov" style={{ margin: "0", border: "1px solid #E2E6E3", borderRadius: "12px", overflow: "hidden", background: "#fff" }}><Img src="/assets/photos/slitter.webp" alt="" sizes="(max-width: 520px) 100vw, (max-width: 768px) 50vw, 380px" style={{ width: "100%", height: "220px", objectFit: "cover", display: "block" }} /><figcaption style={{ padding: "14px 16px", fontSize: "14px", fontWeight: "700", color: "#181818" }}><span data-ko="">슬리터 · 재단</span><span data-en="">Slitter</span></figcaption></figure>
    <figure data-reveal="" className="hov" style={{ margin: "0", border: "1px solid #E2E6E3", borderRadius: "12px", overflow: "hidden", background: "#fff" }}><Img src="/assets/photos/bagmaker-1.webp" alt="" sizes="(max-width: 520px) 100vw, (max-width: 768px) 50vw, 380px" style={{ width: "100%", height: "220px", objectFit: "cover", display: "block" }} /><figcaption style={{ padding: "14px 16px", fontSize: "14px", fontWeight: "700", color: "#181818" }}><span data-ko="">제대기 A라인</span><span data-en="">Bag-making line A</span></figcaption></figure>
    <figure data-reveal="" className="hov" style={{ margin: "0", border: "1px solid #E2E6E3", borderRadius: "12px", overflow: "hidden", background: "#fff" }}><Img src="/assets/photos/bagmaker-3.webp" alt="" sizes="(max-width: 520px) 100vw, (max-width: 768px) 50vw, 380px" style={{ width: "100%", height: "220px", objectFit: "cover", display: "block" }} /><figcaption style={{ padding: "14px 16px", fontSize: "14px", fontWeight: "700", color: "#181818" }}><span data-ko="">제대기 B라인</span><span data-en="">Bag-making line B</span></figcaption></figure>
    </div>
    </div>
    </section>
  );
}
