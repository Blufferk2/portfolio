import { Dual } from '@/components/duality';
import { Section } from '@/components/layout';

const links = [
  { href: 'mailto:hola@didacsoler.com', label: 'Email' },
  { href: 'https://twitter.com/k2di', label: 'Twitter' },
  { href: 'https://github.com/blufferk2', label: 'GitHub' },
];

export function Contact() {
  return (
    <Section id="contact">
      <h2 className="mb-6 text-[11px] font-semibold uppercase tracking-widest text-[var(--text-muted)]">
        <Dual official="Get in Touch" honest="Escríbeme" />
      </h2>

      <p className="mb-6 max-w-md text-[var(--text)]">
        <Dual
          official="Available for freelance projects and collaborations."
          honest="Si tienes algo interesante, hablamos."
        />
      </p>

      <div className="flex gap-6">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text)]"
          >
            {link.label}
          </a>
        ))}
      </div>
    </Section>
  );
}
