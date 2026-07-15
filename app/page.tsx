import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ServiceCard, { Service } from "@/components/ServiceCard";
import ProcessStep, { Step } from "@/components/ProcessStep";
import WorkCard, { Work } from "@/components/WorkCard";
import Testimonial from "@/components/Testimonial";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

const SERVICES: Service[] = [
  {
    code: "S/01",
    title: "AI Agents & Assistants",
    description:
      "Custom agents that handle support, research, sales and ops, grounded in your data with retrieval and tool use.",
  },
  {
    code: "S/02",
    title: "Workflow Automation",
    description:
      "We wire your tools together and let AI run the repetitive work: pipelines, document handling, reporting.",
  },
  {
    code: "S/03",
    title: "Web & App Development",
    description:
      "Fast, modern web and mobile products with AI built in, from MVP to scale.",
  },
];

const STEPS: Step[] = [
  { num: "01", title: "Discover", description: "We learn your workflow and where AI actually helps." },
  { num: "02", title: "Build", description: "We design and ship a working system, not a slide deck." },
  { num: "03", title: "Support", description: "We stay on to monitor, improve and scale what we built." },
];

const WORK: Work[] = [
  { title: "Fintech support agent", tag: "AI agent · RAG", metricLabel: "Response time", metricValue: "−68%" },
  { title: "Logistics invoicing automation", tag: "Automation", metricLabel: "Manual work saved", metricValue: "20 hrs/wk" },
  { title: "AI research platform", tag: "Product build · web app", metricLabel: "Zero to launch", metricValue: "10 wks" },
];

function SectionIndex({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 font-mono text-[12.5px] uppercase tracking-[0.1em] text-gold md:mb-0">
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-ink">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -right-40 -top-56 h-[640px] w-[640px] rounded-full bg-[radial-gradient(circle,rgba(245,196,81,0.09),transparent_68%)]" />

      <Nav />

      <main>
        <Hero />

        {/* SERVICES */}
        <section id="services" className="mx-auto max-w-shell px-6 py-24 md:px-10 md:py-[104px]">
          <Reveal>
            <div className="mb-12 grid gap-6 md:grid-cols-[200px_1fr] md:gap-14">
              <SectionIndex>01 / What we build</SectionIndex>
              <h2 className="m-0 max-w-[18ch] text-[clamp(32px,3.8vw,50px)] font-extrabold leading-[1.02] tracking-[-0.03em]">
                Systems that run in production, not slide decks.
              </h2>
            </div>
          </Reveal>
          <div className="border-t border-white/10">
            {SERVICES.map((s, i) => (
              <Reveal key={s.code} delay={i * 90}>
                <ServiceCard {...s} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* HOW WE WORK */}
        <section id="about" className="border-t border-white/[0.07] bg-panel">
          <div className="mx-auto max-w-shell px-6 py-24 md:px-10 md:py-[104px]">
            <div className="grid gap-6 md:grid-cols-[200px_1fr] md:gap-14">
              <Reveal>
                <SectionIndex>02 / How we work</SectionIndex>
              </Reveal>
              <div className="grid border-t border-white/10 md:grid-cols-3">
                {STEPS.map((s, i) => (
                  <Reveal key={s.num} delay={i * 110}>
                    <ProcessStep {...s} />
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="mx-auto max-w-shell px-6 py-24 md:px-10 md:py-[104px]">
          <Reveal>
            <div className="mb-12 grid gap-6 md:grid-cols-[200px_1fr] md:gap-14">
              <SectionIndex>03 / Selected work</SectionIndex>
              <h2 className="m-0 max-w-[20ch] text-[clamp(28px,3vw,40px)] font-extrabold leading-[1.06] tracking-[-0.03em]">
                Results, not experiments.
              </h2>
            </div>
          </Reveal>
          <div className="border-t border-white/10">
            {WORK.map((w, i) => (
              <Reveal key={w.title} delay={i * 90}>
                <WorkCard {...w} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <Testimonial
              initials="DK"
              name="David Kim"
              role="COO · fintech client"
              quote={
                <>
                  &ldquo;CiphezNexus built our support agent in six weeks. It now{" "}
                  <span className="text-gold">resolves two-thirds of tickets automatically.</span>&rdquo;
                </>
              }
            />
          </Reveal>
        </section>

        {/* CONTACT */}
        <section id="contact" className="border-t border-white/[0.07] bg-panel">
          <div className="mx-auto max-w-shell px-6 py-24 md:px-10 md:py-[104px]">
            <div className="grid gap-6 md:grid-cols-[200px_1fr] md:gap-14">
              <Reveal>
                <SectionIndex>04 / Contact</SectionIndex>
              </Reveal>
              <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:gap-16">
                <Reveal>
                  <div>
                    <h2 className="m-0 mb-5 max-w-[14ch] text-[clamp(34px,4.4vw,56px)] font-extrabold leading-none tracking-[-0.035em]">
                      Tell us about your project.
                    </h2>
                    <p className="m-0 mb-9 max-w-[42ch] text-[17px] leading-[1.62] text-mute2">
                      We usually reply within a day, with a clear read on where AI
                      actually helps.
                    </p>

                    <div className="border-t border-white/10">
                      <a
                        href="https://wa.me/10000000000"
                        className="flex items-center gap-4 border-b border-white/[0.08] px-1 py-6 transition-all hover:pl-3"
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F5C451" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 11.5a8.4 8.4 0 0 1-12.3 7.4L3 21l2.2-5.6A8.4 8.4 0 1 1 21 11.5Z" />
                          <path d="M9 9c0 3 2.5 6 6 6" />
                        </svg>
                        <span>
                          <span className="block text-[15px] font-bold">WhatsApp</span>
                          <span className="block font-mono text-[12px] text-mute2">
                            Fastest way to reach us
                          </span>
                        </span>
                      </a>
                      <a
                        href="mailto:hello@cipheznexus.com"
                        className="flex items-center gap-4 border-b border-white/[0.08] px-1 py-6 transition-all hover:pl-3"
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#14B8A6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="5" width="18" height="14" rx="2" />
                          <path d="m3 7 9 6 9-6" />
                        </svg>
                        <span>
                          <span className="block text-[15px] font-bold">hello@cipheznexus.com</span>
                          <span className="block font-mono text-[12px] text-mute2">
                            Project inquiries
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={100}>
                  <ContactForm />
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
