import { Reveal } from "@/components/Reveal";

export function Story() {
  return (
    <section
      id="story"
      className="mx-auto flex max-w-[1320px] flex-wrap gap-[clamp(28px,5vw,80px)] px-[clamp(20px,5vw,64px)] py-[clamp(72px,10vw,130px)]"
    >
      <Reveal as="div" className="flex-[0_1_240px] min-w-[200px]">
        <h2 className="text-[13px] font-semibold uppercase tracking-[0.16em] text-accent">
          The story so far
        </h2>
      </Reveal>
      <Reveal as="div" className="max-w-[820px] flex-[3_1_480px]">
        <p className="font-display text-[clamp(21px,2.6vw,31px)] font-medium leading-[1.4] tracking-[-0.012em] text-deep-body">
          Fifteen years. Six sectors. Capturing dozens of organisations at
          the moment they were bringing something new to life. I&apos;ve
          founded schools, built fintech sales teams, led nonprofit
          turnarounds, and helped founders turn something that was just an
          idea into something people could actually use.{" "}
          <span className="text-accent">
            I don&apos;t sit at the periphery of an organisation. I get in
            and build.
          </span>
        </p>
        <p className="mt-[clamp(26px,3vw,34px)] max-w-[62ch] font-body text-[clamp(16px,1.7vw,18.5px)] font-normal leading-[1.68] text-muted-2">
          Right now, I&apos;m based in Cape Town, working as a fractional COO
          for a tech startup in the neurodivergent education and healthcare
          space. I&apos;m on the hunt for my next thing, a challenge where
          there&apos;s a big, juicy problem, there&apos;s a kickass team to
          build alongside, and a blank page for how to get there.
        </p>
      </Reveal>
    </section>
  );
}
