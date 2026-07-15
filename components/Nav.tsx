"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-3">
      <span className="grid h-8 w-8 place-items-center border border-gold/50 bg-gold/[0.08]">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#F5C451" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 12h4l2-5 4 10 2-5h4" />
        </svg>
      </span>
      <span className="text-[18px] font-extrabold tracking-[-0.02em]">
        CiphezNexus <span className="text-gold">Consulting</span>
      </span>
    </a>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-lg transition-colors ${
        scrolled
          ? "border-white/10 bg-ink/85"
          : "border-white/[0.07] bg-ink/70"
      }`}
    >
      <nav className="mx-auto flex max-w-shell items-center justify-between gap-6 px-6 py-4 md:px-10 md:py-5">
        <Logo />

        <div className="hidden items-center gap-9 font-mono text-[12.5px] uppercase tracking-[0.04em] text-faint md:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-cloud">
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden bg-gold px-[18px] py-[11px] font-mono text-[12.5px] uppercase tracking-[0.04em] text-ink transition-colors hover:bg-gold-bright md:inline-block"
        >
          Get a quote
        </a>

        {/* mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center border border-white/12 text-cloud md:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* mobile menu */}
      {open && (
        <div className="border-t border-white/10 bg-ink/95 px-6 pb-6 pt-2 md:hidden">
          <div className="flex flex-col font-mono text-[13px] uppercase tracking-[0.04em] text-mute">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/[0.06] py-4 transition-colors hover:text-cloud"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-5 bg-gold px-[18px] py-3 text-center text-ink"
            >
              Get a quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
