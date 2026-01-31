import Link from 'next/link';

const navItems = [
  { href: '#lab', label: 'Lab' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  return (
    <header className="mb-20 flex items-baseline justify-between">
      <Link href="/" className="text-base font-semibold text-[var(--text)]">
        Dídac Soler
      </Link>
      <nav className="flex gap-6">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text)]"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
