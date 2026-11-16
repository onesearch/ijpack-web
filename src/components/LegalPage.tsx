import Footer from "./Footer";
import Img from "./Img";
import { legalMeta, type Block, type LegalDoc } from "@/data/legal";

function officerText() {
  const parts = [`소속: ${legalMeta.company} ${legalMeta.officerDept}`, `전화: ${legalMeta.phone}`];
  if (legalMeta.email) parts.push(`이메일: ${legalMeta.email}`);
  return parts.join(" · ");
}

function BlockView({ block }: { block: Block }) {
  if (block.type === "p") {
    return <p style={{ margin: "0 0 10px" }}>{block.text === "__OFFICER__" ? officerText() : block.text}</p>;
  }
  if (block.type === "ul") {
    return (
      <ul style={{ margin: "0 0 10px", paddingLeft: "20px" }}>
        {block.items.map((item) => (
          <li key={item} style={{ margin: "4px 0" }}>{item}</li>
        ))}
      </ul>
    );
  }
  return (
    <div style={{ overflowX: "auto", margin: "0 0 10px" }}>
      <table style={{ borderCollapse: "collapse", width: "100%", minWidth: "520px", fontSize: "14px" }}>
        <thead>
          <tr>
            {block.head.map((h) => (
              <th key={h} style={{ textAlign: "left", padding: "10px 12px", background: "#F4F6F5", border: "1px solid #E2E6E3", color: "#181818" }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.rows.map((row) => (
            <tr key={row.join("|")}>
              {row.map((cell) => (
                <td key={cell} style={{ padding: "10px 12px", border: "1px solid #E2E6E3", verticalAlign: "top" }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <div id="site">
      <header style={{ borderBottom: "1px solid #E2E6E3", background: "#fff" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 24px", minHeight: "76px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
          <a href="/" aria-label="대림 아이제이팩 홈">
            <Img src="/assets/logo-primary.png" alt="대림 아이제이팩" style={{ height: "34px" }} />
          </a>
          <a className="lnk" href="/" style={{ fontSize: "14px", fontWeight: 700, color: "#181818" }}>← 홈으로</a>
        </div>
      </header>
      <main style={{ maxWidth: "860px", margin: "0 auto", padding: "56px 24px 96px" }}>
        <h1 style={{ margin: 0, fontSize: "clamp(26px,4vw,34px)", color: "#181818" }}>{doc.title}</h1>
        <p style={{ margin: "14px 0 6px", color: "#454B48" }}>{doc.intro}</p>
        <p style={{ margin: "0 0 36px", fontSize: "13px", color: "#6E7672" }}>
          공고일자 {legalMeta.announced} · 시행일자 {legalMeta.effective}
        </p>
        {doc.groups.map((group, gi) => (
          <div key={gi} style={{ marginBottom: "12px" }}>
            {group.heading && <h2 style={{ margin: "36px 0 8px", fontSize: "20px", color: "#181818" }}>{group.heading}</h2>}
            {group.sections.map((section) => (
              <section key={section.title} style={{ margin: "24px 0 0" }}>
                <h3 style={{ margin: "0 0 8px", fontSize: "17px", color: "#181818" }}>{section.title}</h3>
                {section.blocks.map((block, bi) => (
                  <BlockView key={bi} block={block} />
                ))}
              </section>
            ))}
          </div>
        ))}
      </main>
      <Footer />
    </div>
  );
}
