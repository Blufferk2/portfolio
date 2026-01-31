import { Dual } from '@/components/duality';
import { Section } from '@/components/layout';

export function Hero() {
  return (
    <Section>
      <p className="mb-4 text-xs font-medium uppercase tracking-widest text-[var(--text-muted)]">
        <Dual official="Design Engineer" honest="Pixel Pusher Since 2004" />
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
    </Section>
  );
}
