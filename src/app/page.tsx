import { Dual, DualityToggle } from "@/components/duality";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg)] transition-colors duration-[var(--duration-base)]">
      <main className="mx-auto max-w-[var(--max-width)] px-6 py-16">
        {/* Header */}
        <header className="mb-20 flex items-baseline justify-between">
          <span className="text-base font-semibold text-[var(--text)]">
            Dídac Soler
          </span>
          <nav className="flex gap-6">
            <a
              href="#lab"
              className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text)]"
            >
              Lab
            </a>
            <a
              href="#about"
              className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text)]"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text)]"
            >
              Contact
            </a>
          </nav>
        </header>

        {/* Hero */}
        <section className="mb-20">
          <p className="mb-4 text-xs font-medium uppercase tracking-widest text-[var(--text-muted)]">
            <Dual
              official="Design Engineer"
              honest="Pixel Pusher Since 2004"
            />
          </p>
          <h1 className="mb-6 max-w-xl text-xl font-normal leading-relaxed text-[var(--text)]">
            <Dual
              official="Crafting interfaces where design and code converge. 20+ years of visual design, now learning to build."
              honest="Llevo 20 años moviendo píxeles de un lado a otro. Ahora también escribo código para moverlos más rápido."
            />
          </h1>
          <p className="font-mono text-xs text-[var(--text-muted)]">
            Barcelona · 2026
          </p>
        </section>

        {/* About preview */}
        <section id="about" className="mb-20">
          <h2 className="mb-6 text-[11px] font-semibold uppercase tracking-widest text-[var(--text-muted)]">
            About
          </h2>
          <p className="max-w-lg leading-relaxed text-[var(--text)]">
            <Dual
              official="Creative Director with 20+ years in graphic design, branding, and art direction. Transitioning into Design Engineering because I believe the best design is built, not just delivered."
              honest="He hecho de todo: logos, webs, apps, branding... Ahora me he cansado de entregar Figmas y esperar a que alguien los construya mal. Así que lo hago yo."
            />
          </p>
        </section>

        {/* Skills */}
        <section className="mb-20">
          <h2 className="mb-6 text-[11px] font-semibold uppercase tracking-widest text-[var(--text-muted)]">
            <Dual official="Skills" honest="Cosas que sé hacer" />
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              { official: "Visual Design", honest: "Hacer cosas bonitas" },
              { official: "UI/UX", honest: "Botones y formularios" },
              { official: "Design Systems", honest: "Obsesión por consistencia" },
              { official: "HTML/CSS", honest: "Divs y más divs" },
              { official: "JavaScript", honest: "console.log debugging" },
              { official: "React", honest: "useState everywhere" },
              { official: "Motion", honest: "Animaciones innecesarias" },
            ].map((skill, i) => (
              <span
                key={i}
                className="rounded-full bg-[var(--text)]/[0.03] px-3 py-1.5 text-xs text-[var(--text-muted)]"
              >
                <Dual official={skill.official} honest={skill.honest} />
              </span>
            ))}
          </div>
        </section>

        {/* Footer hint */}
        <footer className="border-t border-[var(--border)] pt-8">
          <p className="font-mono text-[11px] text-[var(--text-muted)]">
            <Dual
              official="Press D to toggle mode"
              honest="Pulsa D para ver la verdad"
            />
          </p>
        </footer>
      </main>

      {/* Toggle button */}
      <DualityToggle />
    </div>
  );
}
