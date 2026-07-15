"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const FIELD =
  "w-full border border-white/10 bg-white/[0.03] px-4 py-3 text-[15px] text-cloud outline-none transition-colors placeholder:text-faint focus:border-gold/60 focus:bg-white/[0.05]";
const LABEL =
  "mb-2 block font-mono text-[11.5px] uppercase tracking-[0.08em] text-faint";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error((await res.json().catch(() => ({})))?.error || "Something went wrong.");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-gold/30 bg-gold/[0.06] p-8">
        <div className="mb-3 grid h-11 w-11 place-items-center border border-gold/50 bg-gold/10">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F5C451" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h3 className="m-0 mb-2 text-[22px] font-bold">Message received.</h3>
        <p className="m-0 text-[15px] leading-[1.6] text-mute2">
          Thanks — we&apos;ll get back to you within a day. For anything urgent,
          reach us on WhatsApp.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 font-mono text-[12px] uppercase tracking-[0.05em] text-gold underline-offset-4 hover:underline"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={LABEL}>Name</label>
          <input id="name" name="name" required autoComplete="name" placeholder="Jane Doe" className={FIELD} />
        </div>
        <div>
          <label htmlFor="email" className={LABEL}>Email</label>
          <input id="email" name="email" type="email" required autoComplete="email" placeholder="jane@company.com" className={FIELD} />
        </div>
      </div>

      <div>
        <label htmlFor="company" className={LABEL}>Company</label>
        <input id="company" name="company" autoComplete="organization" placeholder="Company (optional)" className={FIELD} />
      </div>

      <div>
        <label htmlFor="details" className={LABEL}>Project details</label>
        <textarea id="details" name="details" required rows={5} placeholder="What are you trying to build or automate?" className={`${FIELD} resize-y`} />
      </div>

      {status === "error" && (
        <p className="m-0 font-mono text-[12.5px] text-red-400">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group inline-flex items-center justify-center gap-3 bg-gold px-[26px] py-4 font-mono text-[13px] uppercase tracking-[0.03em] text-ink transition-all hover:gap-[18px] hover:bg-gold-bright disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send project brief"}
        {status !== "submitting" && (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        )}
      </button>
    </form>
  );
}
