import NeuralCanvas from "./NeuralCanvas";
import ProductVisual from "./ProductVisual";
import Reveal from "./Reveal";

const STATS = [
  { value: "40+", label: "Projects shipped" },
  { value: "−68", suffix: "%", label: "Avg. response time" },
  { value: "10", suffix: "wk", label: "Zero to launch" },
  { value: "<1d", label: "Reply time" },
];

export default function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-shell px-6 pt-20 md:px-10 md:pt-24">
      {/* 3D neural sphere */}
      <NeuralCanvas className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[560px] w-full opacity-90" />

      <div className="relative z-10 flex flex-col items-start text-left md:items-end md:text-right">
        <Reveal>
          <div className="mb-8 flex items-center gap-3 font-mono text-[12.5px] uppercase tracking-[0.14em] text-gold">
            <span className="h-2 w-2 animate-blink bg-gold" />
            AI Systems for Business
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="m-0 mb-7 max-w-[15ch] text-[clamp(46px,7vw,92px)] font-extrabold leading-[0.98] tracking-[-0.045em]">
            AI that actually <span className="text-gold">moves your numbers.</span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="m-0 mb-10 max-w-[52ch] text-[19px] leading-[1.62] text-mute">
            We design, build and ship AI systems for businesses that need
            results, not experiments.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 bg-gold px-[26px] py-4 font-mono text-[13px] uppercase tracking-[0.03em] text-ink transition-all hover:gap-[18px] hover:bg-gold-bright"
          >
            Get a quote
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </Reveal>
      </div>

      {/* stats */}
      <Reveal delay={120}>
        <div className="mt-20 grid grid-cols-2 border-y border-white/10 md:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`px-0 py-[26px] ${i !== 0 ? "md:pl-[26px]" : ""} ${
                i < 3 ? "md:border-r border-white/[0.06]" : ""
              } ${i % 2 === 0 && i < 2 ? "border-r border-white/[0.06] md:border-r" : ""}`}
            >
              <div className="text-[38px] font-extrabold tracking-[-0.03em]">
                {s.value}
                {s.suffix && <span className="text-gold">{s.suffix}</span>}
              </div>
              <div className="mt-1.5 font-mono text-[11.5px] uppercase tracking-[0.06em] text-faint">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* image band */}
      <Reveal delay={160}>
        <div className="mt-14 grid h-[300px] grid-cols-1 gap-3.5 sm:grid-cols-3 sm:[grid-template-columns:1fr_1fr_1.4fr]">
          <ProductVisual kind="agent" label="AI agent" />
          <div className="hidden sm:block">
            <ProductVisual kind="automation" label="Automation" />
          </div>
          <div className="hidden sm:block">
            <ProductVisual kind="dashboard" label="Shipped product" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
