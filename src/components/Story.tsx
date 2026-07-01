import { Reveal } from "@/components/Reveal";

export function Story() {
  return (
    <section
      id="story"
      className="mx-auto flex max-w-[1320px] flex-wrap gap-[clamp(28px,5vw,80px)] px-[clamp(20px,5vw,64px)] py-[clamp(72px,10vw,130px)]"
    >
      <Reveal as="div" className="flex-[0_1_240px] min-w-[200px]">
        <div className="text-[13px] font-semibold uppercase tracking-[0.16em] text-accent">
          The story so far
        </div>
      </Reveal>
      <Reveal as="div" className="max-w-[820px] flex-[3_1_480px]">
        <p className="font-display text-[clamp(21px,2.6vw,31px)] font-medium leading-[1.4] tracking-[-0.012em] text-deep-body">
          Fifteen years. Six sectors. Dozens of organisations at the moment
          where something new needed to exist. I&apos;ve founded schools,
          built fintech growth teams, led nonprofit turnarounds, and helped
          founders turn a product idea into something people actually use.{" "}
          <span className="text-accent">
            I don&apos;t consult from the outside. I get in and build.
          </span>
        </p>
        <p className="mt-[clamp(26px,3vw,34px)] max-w-[62ch] font-body text-[clamp(16px,1.7vw,18.5px)] font-normal leading-[1.68] text-muted-2">
          Right now I&apos;m based in Cape Town, working as a fractional COO
          for a tech startup in the neurodivergent education space. I&apos;m
          looking for my next substantive role — the kind where the problem
          is real, the founding team is honest, and the blank page is still
          mostly blank.
        </p>
      </Reveal>
    </section>
  );
}
