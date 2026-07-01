import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { Work } from "@/components/Work";
import { HowIWork } from "@/components/HowIWork";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="bg-warm-white bg-dot-light">
        <Hero />
        <Story />
        <Work />
        <HowIWork />
        <Contact />
      </main>
    </>
  );
}
