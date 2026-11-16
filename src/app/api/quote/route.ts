// Receives the quote form and emails it to the sales inbox via Resend (https://resend.com).
// Required env: RESEND_API_KEY, QUOTE_TO_EMAIL. Optional: QUOTE_FROM_EMAIL (a sender on a
// domain verified in Resend; defaults to Resend's test sender, which only delivers to your own account).

const LIMITS = { company: 100, name: 50, email: 200, type: 50, message: 5000 } as const;
type Field = keyof typeof LIMITS;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "invalid_json" }, { status: 400 });
  }

  // Honeypot filled → pretend success so bots don't retry.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return Response.json({ ok: true });
  }

  const fields = {} as Record<Field, string>;
  for (const key of Object.keys(LIMITS) as Field[]) {
    const raw = body[key];
    const value = typeof raw === "string" ? raw.trim() : "";
    if (value.length > LIMITS[key]) return Response.json({ error: `too_long:${key}` }, { status: 400 });
    fields[key] = value;
  }
  if (!fields.company || !fields.name || !EMAIL_RE.test(fields.email)) {
    return Response.json({ error: "missing_fields" }, { status: 400 });
  }
  if (body.agree !== "yes") {
    return Response.json({ error: "consent_required" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.QUOTE_TO_EMAIL;
  if (!apiKey || !to) {
    console.error("[quote] RESEND_API_KEY / QUOTE_TO_EMAIL not set — enquiry not delivered");
    return Response.json({ error: "not_configured" }, { status: 503 });
  }

  const rows: [string, string][] = [
    ["회사명", fields.company],
    ["담당자", fields.name],
    ["이메일", fields.email],
    ["문의 유형", fields.type || "-"],
    ["문의 내용", fields.message || "-"],
  ];
  const html = `<h2>홈페이지 견적문의</h2><table cellpadding="6" style="border-collapse:collapse">${rows
    .map(([k, v]) => `<tr><th align="left" valign="top">${k}</th><td style="white-space:pre-wrap">${escapeHtml(v)}</td></tr>`)
    .join("")}</table>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.QUOTE_FROM_EMAIL || "IJPAK Website <onboarding@resend.dev>",
      to: to.split(",").map((s) => s.trim()),
      reply_to: fields.email,
      subject: `[견적문의] ${fields.company} · ${fields.name}`,
      html,
      text: rows.map(([k, v]) => `${k}: ${v}`).join("\n"),
    }),
  });

  if (!res.ok) {
    console.error("[quote] Resend error", res.status, await res.text());
    return Response.json({ error: "send_failed" }, { status: 502 });
  }
  return Response.json({ ok: true });
}
