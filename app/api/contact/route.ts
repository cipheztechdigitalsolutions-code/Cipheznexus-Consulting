import { NextResponse } from "next/server";

/**
 * Contact endpoint. Validates the payload and (in production) is where you'd
 * forward the lead to email / CRM / Slack. Kept dependency-free so the site is
 * deploy-ready on Vercel out of the box — wire up your provider below.
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const details = String(body.details ?? "").trim();

  if (!name || !email || !details) {
    return NextResponse.json(
      { error: "Please fill in your name, email and project details." },
      { status: 422 }
    );
  }

  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!validEmail) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 422 }
    );
  }

  // TODO: forward the lead — e.g. Resend, SendGrid, a webhook, or a CRM.
  // await sendEmail({ to: "hello@cipheznexus.com", ...body });
  console.log("[contact] new lead:", { name, email, company: body.company, details });

  return NextResponse.json({ ok: true });
}
