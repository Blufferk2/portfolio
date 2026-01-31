import { Dual } from '@/components/duality';
import { Section } from '@/components/layout';

const skills = [
  { official: 'Visual Design', honest: 'Hacer cosas bonitas' },
  { official: 'UI/UX', honest: 'Botones y formularios' },
  { official: 'Design Systems', honest: 'Obsesión por consistencia' },
  { official: 'HTML/CSS', honest: 'Divs y más divs' },
  { official: 'JavaScript', honest: 'console.log debugging' },
  { official: 'React', honest: 'useState everywhere' },
  { official: 'Motion', honest: 'Animaciones innecesarias' },
];

export function About() {
  return (
    <Section id="about">
      <h2 className="mb-6 text-[11px] font-semibold uppercase tracking-widest text-[var(--text-muted)]">
        About
      </h2>

      <p className="mb-8 max-w-lg leading-relaxed text-[var(--text)]">
        <Dual
          official="Creative Director with 20+ years in graphic design, branding, and art direction. Transitioning into Design Engineering because I believe the best design is built, not just delivered."
          honest="He hecho de todo: logos, webs, apps, branding... Ahora me he cansado de entregar Figmas y esperar a que alguien los construya mal. Así que lo hago yo."
        />
      </p>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="rounded-full bg-[var(--text)]/[0.03] px-3 py-1.5 text-xs text-[var(--text-muted)]"
          >
            <Dual official={skill.official} honest={skill.honest} />
          </span>
        ))}
      </div>
    </Section>
  );
}
