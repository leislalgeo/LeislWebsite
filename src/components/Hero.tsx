import { Reveal } from "@/components/Reveal";

export function Hero() {
  return (
    <section id="top" className="bg-warm-white">
      <div className="mx-auto flex max-w-[1320px] flex-wrap items-center gap-[clamp(36px,5vw,80px)] px-[clamp(20px,5vw,64px)] pt-[clamp(120px,16vh,180px)] pb-[clamp(64px,9vw,110px)]">
        <Reveal
          as="div"
          className="flex-[1.25_1_440px]"
        >
          <h1 className="font-display text-[clamp(44px,7.4vw,90px)] font-extrabold leading-[0.97] tracking-[-0.025em] text-heading">
            <span className="block">You have the vision.</span>
            <span className="block">I build the rest.</span>
          </h1>
          <p className="mt-[clamp(26px,3.5vw,36px)] font-body text-[clamp(18px,2.1vw,23px)] font-normal tracking-[0.005em] text-muted-1">
            Leisl Algeo. Builder. Founder. Operator.
          </p>
          <p className="mt-4 font-display text-[clamp(20px,2.5vw,28px)] font-semibold tracking-[-0.01em] text-ink">
            Strategy is just a story. I make it real.
          </p>
          <p className="mt-[22px] max-w-[47ch] font-body text-[clamp(16px,1.7vw,18.5px)] leading-[1.62] text-muted-2">
            I work with founders and leaders building something new —
            organisations that need someone who can hold the vision and build
            the thing at the same time.
          </p>
          <a
            href="#contact"
            className="mt-[clamp(32px,4vw,42px)] inline-flex items-center gap-[11px] rounded-full bg-accent px-8 py-4 text-[16.5px] font-semibold text-warm-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-hover"
          >
            Let&apos;s talk <span aria-hidden className="text-[17px]">→</span>
          </a>
        </Reveal>

        <Reveal as="div" className="flex-[1_1_320px]">
          <div className="relative ml-auto max-w-[430px]">
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[14px] bg-gradient-to-br from-[#e8ddca] to-[#ddd0bd]" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[14px] shadow-[0_30px_60px_-30px_rgba(35,33,28,0.35)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/headshot.png"
                alt="Leisl Algeo"
                loading="eager"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
