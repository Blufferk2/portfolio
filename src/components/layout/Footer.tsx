import { Dual } from '@/components/duality';

export function Footer() {
  return (
    <footer className="flex items-center justify-between border-t border-[var(--border)] pt-8">
      <p className="font-mono text-[11px] text-[var(--text-muted)]">
        <Dual
          official="Press D to toggle mode"
          honest="Pulsa D para ver la verdad"
        />
      </p>
      <span className="text-[11px] text-[var(--text-muted)]">© 2026</span>
    </footer>
  );
}
