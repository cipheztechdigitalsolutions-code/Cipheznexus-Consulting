export type Step = {
  num: string;
  title: string;
  description: string;
};

export default function ProcessStep({ num, title, description }: Step) {
  return (
    <div className="border-b border-white/[0.08] py-9 md:border-b-0 md:border-r md:px-7 md:py-10 md:[&:first-child]:pl-0 md:[&:last-child]:border-r-0 md:[&:last-child]:pr-0">
      <div className="mb-[18px] font-mono text-[44px] font-medium leading-none text-gold/90">
        {num}
      </div>
      <h3 className="m-0 mb-2 text-[19px] font-bold">{title}</h3>
      <p className="m-0 text-[14.5px] leading-[1.6] text-mute2">{description}</p>
    </div>
  );
}
