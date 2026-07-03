import { Reveal } from "@/components/Reveal";

const SHOW_INDEX_NUMBERS = true;

const caseStudies = [
  {
    index: "01",
    name: "Launchpad Montessori",
    role: "Founder & Director",
    logo: "/logos/launchpad.png",
    logoWidth: 44,
    logoHeight: 44,
    description:
      "I started Launchpad because I had two young children and the kind of early childhood education that I wanted for them didn't exist yet. So I spent some time travelling the globe and finding best practice in the US and the UK, and ended up building three multilingual Montessori preschools from the ground up. I found the properties, built out inspirational classrooms, co-designed new curriculums, managed the hiring and finances and built the customer base up. I also raised capital for us to grow and ultimately, had a successful exit.",
  },
  {
    index: "02",
    name: "GoTyme Bank",
    role: "Founding Growth Team",
    logo: "/logos/gotyme.png",
    logoWidth: 72,
    logoHeight: 42,
    description:
      "GoTyme Bank is the first phygital bank in South Africa, a digital bank that had a physical presence in Pick n Pay and Boxer stores. I joined as the company came out of Deloitte where it was consulting to the global telco, MTN on a mobile money offering. Within a matter of months, I hired a team of 50 Tyme Ambassadors and deployed them across the country. We were part of the team that took the bank from zero to a million customers in just over a year. What I loved about this role was the dream that the founding team held and ultimately achieved: that financial access and literacy shouldn't be a privilege, but that we could make it real for millions of underbanked South Africans. Helping build something so deeply impactful inside such a fast-moving commercial environment helped me see that purpose and profit can be achieved at the same time.",
  },
  {
    index: "03",
    name: "African Leadership Academy",
    role: "Programme Director",
    logo: "/logos/ala.png",
    logoWidth: 140,
    logoHeight: 36,
    description:
      "ALA has over 1,000 alumni living across the globe. These are young Africans who left the continent to study and build skills that could be brought back home to build Africa. My job was to build a system to make that possible: a network of internships and career opportunities, sourced across the continent, that gave alumni a real pathway home. This programme was done with a Mastercard Foundation grant which taught me to have the rigour that a funder of that scale expects whilst delivering a programme that actually worked for the people it was designed to serve. Achieving that balance has been something I've carried with me ever since.",
  },
  {
    index: "04",
    name: "Dalza",
    role: "Fractional COO",
    logo: "/logos/dalza.png",
    logoWidth: 62,
    logoHeight: 46,
    description:
      "Once again, my experience as a mother has led me to a purpose-driven role: working as a fractional COO for a tech startup for children with neurodivergent needs. It's a new role where I'm digging in to understand what's been built, where the gaps are and what the organisation needs to move from proof of concept to sustainable growth. I'm focusing on building the operational infrastructure and go-to-market strategy that give the product, and the team, the best possible chance of making a lasting difference for the families who need it the most.",
  },
];

export function Work() {
  return (
    <section
      id="work"
      className="bg-oat bg-dot-light border-y border-ink/[0.06]"
    >
      <div className="mx-auto max-w-[1320px] px-[clamp(20px,5vw,64px)] py-[clamp(72px,10vw,130px)]">
        <Reveal
          as="div"
          className="mb-[clamp(40px,6vw,72px)] flex flex-wrap items-end justify-between gap-5"
        >
          <div>
            <div className="mb-[14px] text-[13px] font-semibold uppercase tracking-[0.16em] text-accent">
              Case studies
            </div>
            <h2 className="font-display text-[clamp(32px,4.6vw,60px)] font-extrabold leading-none tracking-[-0.022em] text-heading">
              Things I&apos;ve built
            </h2>
          </div>
          <div className="max-w-[32ch] text-[15px] text-muted-3">
            Four organisations, taken from an idea to a living, working
            thing.
          </div>
        </Reveal>

        {caseStudies.map((study, i) => (
          <Reveal
            key={study.name}
            as="div"
            className={`flex flex-wrap gap-[clamp(24px,4vw,64px)] rounded-md border-t border-ink/[0.14] px-[clamp(14px,2vw,26px)] py-[clamp(30px,4vw,46px)] transition-colors duration-[250ms] ease-out hover:bg-white/40 ${
              i === caseStudies.length - 1 ? "border-b border-b-ink/[0.14]" : ""
            }`}
          >
            <div className="flex-[1_1_300px]">
              {SHOW_INDEX_NUMBERS && (
                <div className="mb-[14px] font-display text-[15px] font-semibold tracking-[0.04em] text-accent">
                  {study.index}
                </div>
              )}
              <div className="mb-[22px] inline-flex h-[70px] items-center justify-center rounded-[14px] border border-ink/[0.08] bg-white px-5 shadow-[0_8px_22px_-14px_rgba(35,33,28,0.45)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={study.logo}
                  alt={`${study.name} logo`}
                  width={study.logoWidth}
                  height={study.logoHeight}
                  className="block h-auto w-auto"
                  style={{ height: study.logoHeight, width: "auto" }}
                />
              </div>
              <h3 className="font-display text-[clamp(26px,3.4vw,40px)] font-bold leading-[1.02] tracking-[-0.018em] text-heading">
                {study.name}
              </h3>
              <div className="mt-3 text-[13px] font-semibold uppercase tracking-[0.13em] text-accent">
                {study.role}
              </div>
            </div>
            <p className="flex-[1.15_1_360px] self-center font-body text-[clamp(15.5px,1.6vw,17.5px)] font-normal leading-[1.68] text-muted-1">
              {study.description}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
