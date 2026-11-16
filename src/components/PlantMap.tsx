const PLANT2_ADDRESS = "경기도 화성시 비봉면 양노남길 46-29";
const query = encodeURIComponent(PLANT2_ADDRESS);

// Google Maps embed of Plant 2 (keyless embed URL — no API key needed).
// The embed has its own "지도에서 열기" link; don't overlay controls on Google's logo/attribution.
export default function PlantMap() {
  return (
    <div style={{ border: "1px solid #E2E6E3", borderRadius: "12px", overflow: "hidden", height: "240px", background: "#F1F4F1" }}>
      <iframe
        title="제2공장 위치 (Google 지도)"
        src={`https://www.google.com/maps?q=${query}&hl=ko&z=16&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        style={{ border: 0, width: "100%", height: "100%", display: "block" }}
        allowFullScreen
      />
    </div>
  );
}
