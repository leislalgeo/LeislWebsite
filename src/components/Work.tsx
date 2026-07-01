import Image from "next/image";
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
      "I started Launchpad because the kind of early childhood education I believed in didn't exist in the communities I was working in. I built three multilingual Montessori preschools from the ground up — finding the spaces, hiring the teachers, writing the curriculum, managing the finances, and keeping the doors open. I found the capital to grow the business and had a successful exit. It taught me how to take an idea and turn it into a living, breathing organisation.",
  },
  {
    index: "02",
    name: "GoTyme Bank",
    role: "Founding Growth Team",
    logo: "/logos/gotyme.png",
    logoWidth: 72,
    logoHeight: 42,
    description:
      "GoTyme was one of the first fully digital banks in South Africa, and I joined at the moment when the product existed but the growth engine didn't. I hired and managed a team of 50 Tyme Ambassadors deployed across the country, and was part of the team that took the bank from zero customers to over a million in under two years. At the core of it was a simple human belief — that financial access and literacy shouldn't be a privilege. Helping build something that made that real for people, inside a fast-moving commercial environment, is where I understood that purpose and profit don't have to pull in opposite directions.",
  },
  {
    index: "03",
    name: "African Leadership Academy",
    role: "Programme Director",
    logo: "/logos/ala.png",
    logoWidth: 140,
    logoHeight: 36,
    description:
      "ALA has over 1,000 alumni across the globe — young Africans who left the continent to study and build skills, and who want to come back and make a meaningful contribution. My job was to build the system that made that possible: a network of internships and career opportunities, sourced across the continent, that gave alumni a real pathway home. Delivering that against a Mastercard Foundation grant meant holding two things at once — the rigour that a funder of that scale expects, and a programme that actually worked for the people it was designed to serve. That balance is something I've carried into every role since.",
  },
  {
    index: "04",
    name: "Dalza",
    role: "Fractional COO",
    logo: "/logos/dalza.png",
    logoWidth: 62,
    logoHeight: 46,
    description:
      "Dalza is a mobile platform connecting parents, teachers, and practitioners around children with neurodivergent needs. I've just come into the business and I'm in the work of understanding what's been built, where the gaps are, and what the organisation needs to move from early traction to sustainable growth. My mandate is to build the operational infrastructure and go-to-market foundations that give the product — and the team — the best possible chance of making a lasting difference for the families who need it.",
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
                <Image
                  src={study.logo}
                  alt={study.name}
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
