const SOCIAL = [
  {
    href: "#contact",
    label: "X",
    path: "M18.9 2H22l-7.3 8.3L23 22h-6.7l-5.2-6.8L5 22H2l7.8-8.9L1.5 2h6.8l4.7 6.2L18.9 2Zm-1.2 18h1.8L7.4 3.9H5.5L17.7 20Z",
    fill: true,
  },
  {
    href: "#contact",
    label: "LinkedIn",
    path: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3-.02-2.96-1.8-2.96-1.8 0-2.08 1.4-2.08 2.86V21h-4V9Z",
    fill: true,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-shell flex-wrap items-center justify-between gap-5 px-6 py-12 md:px-10">
        <div className="text-[26px] font-extrabold tracking-[-0.03em]">
          Building intelligent systems <span className="text-gold">that ship.</span>
        </div>
        <div className="flex items-center gap-7 font-mono text-[12px] text-faint">
          <div className="flex gap-2.5">
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="grid h-[38px] w-[38px] place-items-center border border-white/12 text-mute transition-colors hover:border-gold hover:text-gold"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
            <a
              href="https://wa.me/10000000000"
              aria-label="WhatsApp"
              className="grid h-[38px] w-[38px] place-items-center border border-white/12 text-mute transition-colors hover:border-gold hover:text-gold"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.4 8.4 0 0 1-12.3 7.4L3 21l2.2-5.6A8.4 8.4 0 1 1 21 11.5Z" />
                <path d="M9 9c0 3 2.5 6 6 6" />
              </svg>
            </a>
          </div>
          <span>A CiphezNexus company · © 2026</span>
        </div>
      </div>
    </footer>
  );
}
