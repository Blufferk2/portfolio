import { Dual } from '@/components/duality';
import { Section } from '@/components/layout';

const placeholderItems = [
  {
    id: 'breathing',
    title: { official: 'Breathing Type', honest: 'Texto que respira' },
    desc: { official: 'Typography that inhales', honest: 'Letras con asma' },
  },
  {
    id: 'clock',
    title: { official: 'Now', honest: 'El reloj' },
    desc: { official: 'This exact moment', honest: 'Tic tac tic tac' },
  },
  {
    id: 'field',
    title: { official: 'Force Field', honest: 'Campo de puntos' },
    desc: { official: 'Particles react to you', honest: 'Te persiguen' },
  },
  {
    id: 'signature',
    title: { official: 'Autograph', honest: 'Firma automágica' },
    desc: { official: 'A signature draws itself', honest: 'Se dibuja sola' },
  },
  {
    id: 'dissolve',
    title: { official: 'Dissolve', honest: 'Escapismo' },
    desc: { official: 'Matter becoming data', honest: 'Píxeles huyendo' },
  },
  {
    id: 'gravity',
    title: { official: 'Gravity', honest: 'Gravedad' },
    desc: { official: 'Letters obey physics', honest: 'Letras que caen' },
  },
];

export function PlaygroundGrid() {
  return (
    <Section id="lab">
      <div className="mb-6 flex items-baseline justify-between">
        <h2 className="text-[11px] font-semibold uppercase tracking-widest text-[var(--text-muted)]">
          <Dual official="Interface Lab" honest="Experimentos Raros" />
        </h2>
        <span className="font-mono text-[11px] text-[var(--text-muted)]">
          6 experiments
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {placeholderItems.map((item) => (
          <article
            key={item.id}
            className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-6"
          >
            <h3 className="mb-1 text-sm font-medium text-[var(--text)]">
              <Dual official={item.title.official} honest={item.title.honest} />
            </h3>
            <p className="mb-4 text-xs text-[var(--text-muted)]">
              <Dual official={item.desc.official} honest={item.desc.honest} />
            </p>
            {/* Demo placeholder */}
            <div className="h-20 rounded-lg bg-[var(--text)]/[0.03]" />
          </article>
        ))}
      </div>
    </Section>
  );
}
