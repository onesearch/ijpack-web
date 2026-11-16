import PlantMap from "./PlantMap";

// Right column of the quote section: direct contacts, Plant 2 map, eco note.
export default function ContactAside() {
  return (
    <div data-reveal="" style={{ display: "grid", gap: "20px" }}>
    <div style={{ border: "1px solid #E2E6E3", borderTop: "3px solid #79BC38", borderRadius: "12px", padding: "28px", background: "#fff" }}>
    <h3 style={{ margin: "0", fontSize: "21px", fontWeight: "900", color: "#181818" }}><span data-ko="">담당 연락처</span><span data-en="">Direct contact</span></h3>
    <div style={{ display: "grid", gap: "16px", marginTop: "22px" }}>
    <div style={{ display: "flex", gap: "14px", alignItems: "center" }}><svg viewBox="0 0 24 24" fill="none" stroke="#66A52C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: "20px", height: "20px", flexShrink: "0" }} aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg><a href="tel:031-437-0146" style={{ fontFamily: "var(--font-mono)", fontSize: "16px", color: "#181818" }}>T. 031-437-0146</a></div>
    <div style={{ display: "flex", gap: "14px", alignItems: "center" }}><svg viewBox="0 0 24 24" fill="none" stroke="#66A52C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: "20px", height: "20px", flexShrink: "0" }} aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg><span style={{ fontSize: "15px", color: "#454B48" }}><span data-ko="">이메일 주소 확인 필요</span><span data-en="">Email address to be confirmed</span></span></div>
    <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}><svg viewBox="0 0 24 24" fill="none" stroke="#66A52C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: "20px", height: "20px", flexShrink: "0" }} aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg><span style={{ fontSize: "15px", color: "#454B48" }}><span data-ko=""><strong style={{ color: "#181818" }}>제1공장</strong> 경기도 안산시 상록구 도금단지2길 13<br /><strong style={{ color: "#181818" }}>제2공장</strong> 경기도 화성시 비봉면 양노남길 46-29</span><span data-en=""><strong style={{ color: "#181818" }}>Plant 1</strong> 13 Dogeumdanji 2-gil, Sangnok-gu, Ansan-si<br /><strong style={{ color: "#181818" }}>Plant 2</strong> 46-29 Yangno-namgil, Bibong-myeon, Hwaseong-si</span></span></div>
    <div style={{ display: "flex", gap: "14px", alignItems: "center" }}><svg viewBox="0 0 24 24" fill="none" stroke="#66A52C" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ width: "20px", height: "20px", flexShrink: "0" }} aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg><span style={{ fontSize: "15px", color: "#454B48" }}><span data-ko="">평일 09:00 – 18:00</span><span data-en="">Weekdays 09:00 – 18:00</span></span></div>
    </div>
    </div>
    <PlantMap />
    <div style={{ background: "#F4FAEC", border: "1px solid #D3EAB6", borderRadius: "12px", padding: "24px" }}>
    <span style={{ display: "inline-block", padding: "5px 12px", borderRadius: "999px", background: "#fff", border: "1px solid #D3EAB6", color: "#4F8420", fontSize: "13px", fontWeight: "700", whiteSpace: "nowrap" }}><span data-ko="">녹색기술 인증</span><span data-en="">Green certified</span></span>
    <p style={{ margin: "14px 0 0", fontSize: "15px", color: "#454B48" }}><span data-ko="">친환경 규격이 필요한 프로젝트라면 인증 자료를 함께 보내 드립니다.</span><span data-en="">Working to an eco spec? We will send our certification documents with the quote.</span></p>
    </div>
    </div>
  );
}
