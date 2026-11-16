"use client";

import { useState } from "react";

const labelStyle: React.CSSProperties = { display: "block", fontSize: "14px", fontWeight: 700, color: "#181818", marginBottom: "8px" };
const fieldStyle: React.CSSProperties = { width: "100%", fontFamily: "inherit", fontSize: "16px", color: "#181818", background: "#fff", padding: "13px 14px", border: "1px solid #E2E6E3", borderRadius: "6px", outline: "none", transition: "border-color .2s,box-shadow .2s" };

export const enquiryTypes = ["연포장 · 파우치", "비닐 · 합성수지 필름", "인쇄 의뢰", "친환경 인증 자료 요청", "기타"];

type Status = "idle" | "sending" | "sent" | "needs-consent" | "error";

const messages: Record<Exclude<Status, "idle" | "sending">, { tone: "ok" | "error"; ko: string; en: string }> = {
  sent: { tone: "ok", ko: "문의가 접수되었습니다. 담당자가 1영업일 내에 회신드립니다.", en: "Thank you — we will reply within one business day." },
  "needs-consent": { tone: "error", ko: "개인정보 수집 및 이용에 동의해 주세요.", en: "Please agree to the privacy policy." },
  error: { tone: "error", ko: "전송에 실패했습니다. 잠시 후 다시 시도하시거나 031-437-0146으로 연락해 주세요.", en: "Sending failed. Please try again later or call +82-31-437-0146." },
};

function Label({ ko, en, required }: { ko: string; en: string; required?: boolean }) {
  return (
    <span style={labelStyle}>
      <span data-ko="">{ko}</span>
      <span data-en="">{en}</span>
      {required && <span style={{ color: "#C23B2E" }}> *</span>}
    </span>
  );
}

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (!data.get("agree")) {
      setStatus("needs-consent");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data)),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const message = status === "idle" || status === "sending" ? null : messages[status];

  return (
    <form onSubmit={onSubmit} style={{ marginTop: "36px", display: "grid", gap: "22px" }}>
      <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "22px" }}>
        <label>
          <Label ko="회사명" en="Company" required />
          <input className="fld" name="company" required maxLength={100} autoComplete="organization" placeholder="(주)아이제이팩" style={fieldStyle} />
        </label>
        <label>
          <Label ko="담당자" en="Contact name" required />
          <input className="fld" name="name" required maxLength={50} autoComplete="name" placeholder="성함" style={fieldStyle} />
        </label>
      </div>
      <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: "22px" }}>
        <label>
          <Label ko="이메일" en="Email" required />
          <input className="fld" type="email" name="email" required maxLength={200} autoComplete="email" placeholder="name@company.co.kr" style={fieldStyle} />
        </label>
        <label>
          <Label ko="문의 유형" en="Enquiry type" />
          <span style={{ position: "relative", display: "block" }}>
            <select className="fld" name="type" defaultValue="" style={{ ...fieldStyle, appearance: "none", paddingRight: "40px" }}>
              <option value="">선택해 주세요</option>
              {enquiryTypes.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
            <svg viewBox="0 0 24 24" fill="none" stroke="#6E7672" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)", width: "16px", height: "16px", pointerEvents: "none" }} aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
          </span>
        </label>
      </div>
      <label>
        <Label ko="문의 내용" en="Message" />
        <textarea className="fld" name="message" rows={6} maxLength={5000} placeholder="필요한 규격(폭×길이×두께), 소재, 인쇄 색수와 수량을 적어 주세요" style={{ ...fieldStyle, resize: "vertical", lineHeight: 1.7 }} />
      </label>
      {/* Honeypot: hidden from people, filled in by most spam bots. */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px" }} />
      <label style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "#6E7672", cursor: "pointer" }}>
        <input type="checkbox" name="agree" value="yes" style={{ width: "18px", height: "18px", accentColor: "#79BC38", cursor: "pointer" }} />
        <span data-ko="">개인정보 수집 및 이용에 동의합니다</span>
        <span data-en="">I agree to the privacy policy</span>
      </label>
      <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", alignItems: "center" }}>
        <button type="submit" className="btn" disabled={status === "sending"} style={{ appearance: "none", border: "none", cursor: status === "sending" ? "wait" : "pointer", padding: "16px 34px", borderRadius: "6px", background: "#79BC38", color: "#fff", fontFamily: "inherit", fontSize: "17px", fontWeight: 700, whiteSpace: "nowrap", opacity: status === "sending" ? 0.7 : 1 }}>
          <span data-ko="">{status === "sending" ? "보내는 중…" : "문의 보내기"}</span>
          <span data-en="">{status === "sending" ? "Sending…" : "Send enquiry"}</span>
        </button>
        <a className="btn" href="tel:031-437-0146" style={{ padding: "16px 30px", borderRadius: "6px", border: "1px solid #E2E6E3", background: "#fff", color: "#181818", fontSize: "17px", fontWeight: 700, whiteSpace: "nowrap" }}>
          <span data-ko="">전화 상담 031-437-0146</span>
          <span data-en="">Call +82-31-437-0146</span>
        </a>
      </div>
      <div role="status" aria-live="polite">
        {message && (
          <div style={message.tone === "ok"
            ? { padding: "16px 20px", borderRadius: "8px", background: "#E9F5DA", border: "1px solid #D3EAB6", color: "#4F8420", fontWeight: 700 }
            : { padding: "16px 20px", borderRadius: "8px", background: "#FBE9E7", border: "1px solid #F2CFCA", color: "#8E2A20", fontWeight: 700 }}>
            <span data-ko="">{message.ko}</span>
            <span data-en="">{message.en}</span>
          </div>
        )}
      </div>
    </form>
  );
}
