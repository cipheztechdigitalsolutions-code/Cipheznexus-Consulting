export type Service = {
  code: string;
  title: string;
  description: string;
};

export default function ServiceCard({ code, title, description }: Service) {
  return (
    <div className="group grid grid-cols-1 items-baseline gap-4 border-b border-white/[0.08] py-8 transition-colors hover:bg-gold/[0.03] md:grid-cols-[200px_1fr_2fr] md:gap-10 md:px-4">
      <div className="font-mono text-[12.5px] tracking-[0.06em] text-gold">{code}</div>
      <h3 className="m-0 text-[22px] font-bold tracking-[-0.01em]">{title}</h3>
      <p className="m-0 text-[15.5px] leading-[1.6] text-mute2">{description}</p>
    </div>
  );
}
