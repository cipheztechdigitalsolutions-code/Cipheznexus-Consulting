export type Work = {
  title: string;
  tag: string;
  metricLabel: string;
  metricValue: string;
};

export default function WorkCard({ title, tag, metricLabel, metricValue }: Work) {
  return (
    <a
      href="#contact"
      className="grid grid-cols-[1fr_auto] items-center gap-4 border-b border-white/[0.08] py-[30px] transition-all hover:bg-gold/[0.04] hover:pl-2 md:grid-cols-[1fr_200px_200px] md:gap-8"
    >
      <div>
        <h3 className="m-0 mb-1.5 text-[21px] font-bold tracking-[-0.01em]">{title}</h3>
        <span className="font-mono text-[12px] uppercase tracking-[0.05em] text-faint">
          {tag}
        </span>
      </div>
      <div className="hidden font-mono text-[13px] text-mute2 md:block">
        {metricLabel}
      </div>
      <div className="text-right text-[26px] font-extrabold tracking-[-0.02em] text-gold">
        {metricValue}
      </div>
    </a>
  );
}
