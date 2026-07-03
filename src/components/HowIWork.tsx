import { Reveal } from "@/components/Reveal";

export function HowIWork() {
  return (
    <section
      id="how"
      className="mx-auto flex max-w-[1320px] flex-wrap gap-[clamp(28px,5vw,80px)] px-[clamp(20px,5vw,64px)] py-[clamp(72px,10vw,130px)]"
    >
      <div className="flex-[0_1_240px] min-w-[200px]">
        <h2 className="sticky top-[104px] text-[13px] font-semibold uppercase tracking-[0.16em] text-accent">
          How I work
        </h2>
      </div>
      <div className="max-w-[820px] flex-[3_1_480px]">
        <Reveal as="p" className="font-display text-[clamp(21px,2.6vw,31px)] font-medium leading-[1.38] tracking-[-0.012em] text-deep-body">
          The organisations I&apos;m drawn to are building something; a new
          product, a new idea, a new way of solving a problem that hasn&apos;t
          been solved well enough yet. What they need is someone who can take
          that idea, refine it to market fit, and then build it.{" "}
          <span className="text-accent">That&apos;s what I love doing.</span>
        </Reveal>
        <Reveal
          as="p"
          className="mt-[clamp(26px,3vw,34px)] max-w-[64ch] font-body text-[clamp(16px,1.7vw,18px)] font-normal leading-[1.72] text-muted-2"
        >
          I work on a fractional or part-time basis and my M.O. is to get in
          and get my hands dirty. I don&apos;t stand on the outside and offer
          ideas, I make them happen. My point of departure is talking to
          people. I want to understand what they do, how they do it,
          what&apos;s working and what&apos;s quietly draining the
          organisation. I want to know where you&apos;re trying to go;
          whether that&apos;s raising capital, growing to a million customers
          or creating meaningful change in a community. Once I understand
          that, I work backwards to help you achieve your goals. It&apos;s
          also really important to me to help grow the team that I work
          with, to build their capacity and ultimately help them reach their
          personal career goals.
        </Reveal>
        <Reveal
          as="p"
          className="mt-[22px] max-w-[64ch] font-body text-[clamp(16px,1.7vw,18px)] font-normal leading-[1.72] text-muted-2"
        >
          I work with for-profits and nonprofits alike. Whilst the problems
          are different, the work is the same: take what is there,
          understand it honestly and build the road to get where we want to
          go.
        </Reveal>
        <Reveal
          as="blockquote"
          className="mt-[clamp(40px,5vw,60px)] border-t border-ink/[0.14] pt-[clamp(28px,3vw,38px)]"
        >
          <p className="font-display text-[clamp(24px,3.4vw,42px)] font-semibold leading-[1.18] tracking-[-0.018em] text-heading">
            I don&apos;t hand you a map and leave.{" "}
            <span className="text-accent">
              I stay until we make the thing real.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
