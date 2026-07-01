const links = [
  { href: "#story", label: "The story so far" },
  { href: "#work", label: "Things I've built" },
  { href: "#how", label: "How I work" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-[60] border-b border-ink/[0.07] bg-warm-white/82 backdrop-blur-[14px]">
      <div className="flex items-center justify-between px-[clamp(20px,5vw,64px)] py-[18px]">
        <a
          href="#top"
          className="font-display text-lg font-bold tracking-[-0.01em] text-ink"
        >
          Leisl Algeo
        </a>
        <nav className="flex items-center gap-[clamp(14px,2vw,30px)]">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden text-[14.5px] font-medium text-muted-1 transition-colors duration-200 hover:text-ink sm:inline"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-accent px-5 py-[9px] text-[14.5px] font-semibold text-warm-white transition-all duration-200 hover:-translate-y-px hover:bg-accent-hover"
          >
            Let&apos;s talk
          </a>
        </nav>
      </div>
    </header>
  );
}
