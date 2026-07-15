"use client";

/**
 * Self-contained, on-brand SVG "product" visuals used in the hero band.
 * Three kinds: an AI agent chat, an automation pipeline, and a live dashboard.
 * They render as crisp vector art (no external image dependency) with a subtle
 * 3D tilt on hover.
 */

type Kind = "agent" | "automation" | "dashboard";

const GOLD = "#F5C451";
const TEAL = "#2DD4BF";

function Agent() {
  return (
    <svg viewBox="0 0 320 300" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <rect width="320" height="300" fill="#0B0E17" />
      <g fill="none" stroke="rgba(255,255,255,0.05)">
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={i} x1="0" y1={i * 40} x2="320" y2={i * 40} />
        ))}
      </g>
      {/* incoming bubble */}
      <g>
        <rect x="26" y="40" width="150" height="34" rx="8" fill="rgba(255,255,255,0.06)" />
        <rect x="40" y="52" width="110" height="4" rx="2" fill="rgba(237,239,244,0.5)" />
        <rect x="40" y="62" width="70" height="4" rx="2" fill="rgba(237,239,244,0.3)" />
      </g>
      {/* agent reply */}
      <g>
        <rect x="120" y="92" width="174" height="52" rx="8" fill="rgba(245,196,81,0.14)" stroke="rgba(245,196,81,0.35)" />
        <rect x="134" y="106" width="130" height="4" rx="2" fill={GOLD} opacity="0.8" />
        <rect x="134" y="118" width="146" height="4" rx="2" fill="rgba(245,196,81,0.5)" />
        <rect x="134" y="130" width="90" height="4" rx="2" fill="rgba(245,196,81,0.35)" />
      </g>
      {/* tool call chip */}
      <g>
        <rect x="26" y="164" width="120" height="26" rx="13" fill="rgba(45,212,191,0.12)" stroke="rgba(45,212,191,0.4)" />
        <circle cx="42" cy="177" r="4" fill={TEAL} />
        <rect x="54" y="175" width="78" height="4" rx="2" fill={TEAL} opacity="0.8" />
      </g>
      {/* input bar */}
      <rect x="26" y="238" width="268" height="34" rx="17" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" />
      <circle cx="276" cy="255" r="11" fill={GOLD} />
      <path d="M271 255h10M277 251l4 4-4 4" stroke="#080A11" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Automation() {
  const nodes = [
    { x: 40, y: 80, c: TEAL },
    { x: 40, y: 220, c: TEAL },
    { x: 160, y: 150, c: GOLD },
    { x: 280, y: 80, c: GOLD },
    { x: 280, y: 220, c: TEAL },
  ];
  return (
    <svg viewBox="0 0 320 300" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <rect width="320" height="300" fill="#0A0D15" />
      <g stroke="rgba(245,196,81,0.4)" strokeWidth="1.5" fill="none">
        <path d="M40 80 Q100 80 160 150" />
        <path d="M40 220 Q100 220 160 150" />
        <path d="M160 150 Q220 80 280 80" />
        <path d="M160 150 Q220 220 280 220" />
      </g>
      {/* flowing dot */}
      <circle r="3.5" fill={GOLD}>
        <animateMotion dur="2.4s" repeatCount="indefinite" path="M40 80 Q100 80 160 150 Q220 80 280 80" />
      </circle>
      <circle r="3.5" fill={TEAL}>
        <animateMotion dur="2.8s" repeatCount="indefinite" path="M40 220 Q100 220 160 150 Q220 220 280 220" />
      </circle>
      {nodes.map((n, i) => (
        <g key={i}>
          <rect x={n.x - 22} y={n.y - 16} width="44" height="32" rx="7" fill="#0F1320" stroke={n.c} strokeOpacity="0.5" />
          <rect x={n.x - 12} y={n.y - 5} width="24" height="3" rx="1.5" fill={n.c} opacity="0.9" />
          <rect x={n.x - 12} y={n.y + 3} width="14" height="3" rx="1.5" fill={n.c} opacity="0.5" />
        </g>
      ))}
    </svg>
  );
}

function Dashboard() {
  const bars = [90, 130, 70, 160, 110, 180, 140];
  return (
    <svg viewBox="0 0 420 300" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <rect width="420" height="300" fill="#0B0E17" />
      {/* KPI tiles */}
      <g>
        <rect x="24" y="24" width="110" height="60" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.07)" />
        <text x="38" y="52" fill={GOLD} fontFamily="monospace" fontSize="22" fontWeight="700">68%</text>
        <rect x="38" y="62" width="60" height="4" rx="2" fill="rgba(237,239,244,0.25)" />
      </g>
      <g>
        <rect x="150" y="24" width="110" height="60" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.07)" />
        <text x="164" y="52" fill={TEAL} fontFamily="monospace" fontSize="22" fontWeight="700">1.2k</text>
        <rect x="164" y="62" width="70" height="4" rx="2" fill="rgba(237,239,244,0.25)" />
      </g>
      {/* line chart */}
      <g>
        <rect x="276" y="24" width="120" height="60" rx="8" fill="rgba(245,196,81,0.06)" stroke="rgba(245,196,81,0.25)" />
        <polyline points="286,72 304,58 322,64 340,44 358,50 376,34 388,40" fill="none" stroke={GOLD} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      {/* bar chart */}
      <g>
        {bars.map((h, i) => (
          <rect
            key={i}
            x={30 + i * 54}
            y={250 - h}
            width="30"
            height={h}
            rx="4"
            fill={i % 2 ? "rgba(45,212,191,0.55)" : "rgba(245,196,81,0.7)"}
          />
        ))}
        <line x1="24" y1="252" x2="400" y2="252" stroke="rgba(255,255,255,0.12)" />
      </g>
    </svg>
  );
}

export default function ProductVisual({
  kind,
  label,
}: {
  kind: Kind;
  label: string;
}) {
  return (
    <div className="group relative h-full w-full overflow-hidden border border-white/10 bg-[#0B0E17] [perspective:900px]">
      <div className="h-full w-full transition-transform duration-500 ease-out group-hover:[transform:rotateX(4deg)_rotateY(-4deg)_scale(1.04)]">
        {kind === "agent" && <Agent />}
        {kind === "automation" && <Automation />}
        {kind === "dashboard" && <Dashboard />}
      </div>
      <span className="pointer-events-none absolute bottom-3.5 left-4 bg-[rgba(6,8,15,0.6)] px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.08em] text-cloud">
        {label}
      </span>
    </div>
  );
}
