import { Reveal } from "@/components/Reveal";

export function HowIWork() {
  return (
    <section
      id="how"
      className="mx-auto flex max-w-[1320px] flex-wrap gap-[clamp(28px,5vw,80px)] px-[clamp(20px,5vw,64px)] py-[clamp(72px,10vw,130px)]"
    >
      <div className="flex-[0_1_240px] min-w-[200px]">
        <div className="sticky top-[104px] text-[13px] font-semibold uppercase tracking-[0.16em] text-accent">
          How I work
        </div>
      </div>
      <div className="max-w-[820px] flex-[3_1_480px]">
        <Reveal as="p" className="font-display text-[clamp(21px,2.6vw,31px)] font-medium leading-[1.38] tracking-[-0.012em] text-deep-body">
          The organisations I&apos;m drawn to are building something — a new
          product, a new idea, a new way of solving a problem that hasn&apos;t
          been solved well enough yet. What they need is someone who can take
          that idea, refine it to market fit, and then build it.{" "}
          <span className="text-accent">That&apos;s where I come in.</span>
        </Reveal>
        <Reveal
          as="p"
          className="mt-[clamp(26px,3vw,34px)] max-w-[64ch] font-body text-[clamp(16px,1.7vw,18px)] font-normal leading-[1.72] text-muted-2"
        >
          I work as a fractional operator and programme leader — embedded in
          the business, not advising from the outside. Before anything else,
          I talk to people. I want to understand what they do, how they do
          it, what&apos;s working and what&apos;s quietly draining the
          organisation. I want to know where you&apos;re trying to go —
          whether that&apos;s launching a new programme, growing your user
          base, building a sustainable funding model, or getting the
          organisation ready for its next chapter — and what the culture
          needs to look like to get there. From that I build a clear plan,
          and then I get to work.
        </Reveal>
        <Reveal
          as="p"
          className="mt-[22px] max-w-[64ch] font-body text-[clamp(16px,1.7vw,18px)] font-normal leading-[1.72] text-muted-2"
        >
          I work with for-profit startups and nonprofits alike. The problems
          are different, the constraints are different, but the work is the
          same: take what exists, understand it honestly, and build
          what&apos;s needed next.
        </Reveal>
        <Reveal
          as="blockquote"
          className="mt-[clamp(40px,5vw,60px)] border-t border-ink/[0.14] pt-[clamp(28px,3vw,38px)]"
        >
          <p className="font-display text-[clamp(24px,3.4vw,42px)] font-semibold leading-[1.18] tracking-[-0.018em] text-heading">
            I don&apos;t hand you a roadmap and leave. I hold both —{" "}
            <span className="text-accent">
              and I stay until the thing is real.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
