import ContactAside from "./ContactAside";
import QuoteForm from "./QuoteForm";

// Contact section: quote form on the left, direct contacts on the right.
export default function Quote() {
  return (
    <section id="quote" style={{ padding: "96px 0" }}>
      <div className="split" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "minmax(0,1.5fr) minmax(0,1fr)", gap: "48px", alignItems: "start" }}>
        <div data-reveal="">
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "12px", letterSpacing: ".16em", color: "#66A52C" }}>CONTACT</div>
          <h2 style={{ margin: "14px 0 0", fontSize: "38px", fontWeight: "900", letterSpacing: "-.03em", color: "#181818" }}><span data-ko="">견적문의</span><span data-en="">Request a quote</span></h2>
          <p style={{ margin: "16px 0 0", maxWidth: "520px", fontSize: "17px", color: "#6E7672" }}><span data-ko="">규격과 수량을 남겨 주시면 담당자가 1영업일 내에 회신드립니다.</span><span data-en="">Send us your specs and quantity — we reply within one business day.</span></p>
          <QuoteForm />
        </div>
        <ContactAside />
      </div>
    </section>
  );
}
