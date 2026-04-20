import { Resend } from "resend";

function readNotificationConfig() {
  const apiKey = process.env.RESEND_API_KEY || "";
  const from = process.env.CONTACT_NOTIFY_FROM || process.env.EMAIL_FROM || "";

  const recipients = [
    process.env.CONTACT_NOTIFY_TO,
    process.env.ADMIN_EMAIL,
    process.env.ADMIN_EMAILS,
  ]
    .filter(Boolean)
    .flatMap((value) => String(value).split(","))
    .map((email) => email.trim())
    .filter(Boolean);

  const uniqueRecipients = [...new Set(recipients)];

  return {
    apiKey,
    from,
    recipients: uniqueRecipients,
    enabled: Boolean(apiKey && from && uniqueRecipients.length > 0),
  };
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderLeadHtml(lead) {
  const safe = {
    id: escapeHtml(lead.id),
    name: escapeHtml(lead.name),
    email: escapeHtml(lead.email),
    service: escapeHtml(lead.service || ""),
    budget: escapeHtml(lead.budget || ""),
    message: escapeHtml(lead.message),
    createdAt: escapeHtml(lead.createdAt),
  };

  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #111;">
      <h2 style="margin: 0 0 12px;">🔔 Lead mới từ form liên hệ</h2>
      <p style="margin: 0 0 12px;">Bạn vừa nhận được một khách hàng mới để liên hệ.</p>
      <table cellpadding="6" cellspacing="0" border="0" style="border-collapse: collapse;">
        <tr><td><strong>Lead ID</strong></td><td>${safe.id}</td></tr>
        <tr><td><strong>Thời gian</strong></td><td>${safe.createdAt}</td></tr>
        <tr><td><strong>Tên</strong></td><td>${safe.name}</td></tr>
        <tr><td><strong>Email</strong></td><td>${safe.email}</td></tr>
        <tr><td><strong>Dịch vụ</strong></td><td>${safe.service || "(không có)"}</td></tr>
        <tr><td><strong>Ngân sách</strong></td><td>${safe.budget || "(không có)"}</td></tr>
      </table>
      <div style="margin-top: 12px;">
        <strong>Nội dung:</strong>
        <p style="white-space: pre-wrap; margin: 6px 0 0;">${safe.message}</p>
      </div>
    </div>
  `;
}

export async function notifyNewLead(lead) {
  const config = readNotificationConfig();

  if (!config.enabled) {
    return {
      ok: false,
      skipped: true,
      reason: "missing-notify-config",
      details: {
        hasApiKey: Boolean(config.apiKey),
        hasFrom: Boolean(config.from),
        recipientCount: config.recipients.length,
      },
    };
  }

  try {
    const resend = new Resend(config.apiKey);

    const result = await resend.emails.send({
      from: config.from,
      to: config.recipients,
      subject: `Lead mới: ${lead.name} (${lead.email})`,
      html: renderLeadHtml(lead),
    });

    return {
      ok: true,
      skipped: false,
      provider: "resend",
      to: config.recipients,
      id: result?.data?.id || null,
    };
  } catch (error) {
    return {
      ok: false,
      skipped: false,
      reason: "notify-send-failed",
      error: error?.message || String(error),
    };
  }
}
