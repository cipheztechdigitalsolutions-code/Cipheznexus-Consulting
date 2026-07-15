export type TestimonialProps = {
  quote: React.ReactNode;
  name: string;
  role: string;
  initials: string;
};

export default function Testimonial({
  quote,
  name,
  role,
  initials,
}: TestimonialProps) {
  return (
    <div className="mt-12 border border-gold/[0.28] bg-[linear-gradient(160deg,rgba(245,196,81,0.06),transparent)] p-8 md:p-12">
      <p className="m-0 mb-7 max-w-[34ch] text-[clamp(22px,2.6vw,32px)] font-semibold leading-[1.32] tracking-[-0.02em]">
        {quote}
      </p>
      <div className="flex items-center gap-3.5">
        <div className="grid h-11 w-11 place-items-center bg-[linear-gradient(135deg,#F5C451,#C79A2E)] font-extrabold text-ink">
          {initials}
        </div>
        <div>
          <div className="text-[15px] font-bold">{name}</div>
          <div className="font-mono text-[12px] text-mute2">{role}</div>
        </div>
      </div>
    </div>
  );
}
