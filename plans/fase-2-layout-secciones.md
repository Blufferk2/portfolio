# Fase 2: Layout y Secciones (Esqueleto)

## Overview

Estructurar el portfolio single-page con todas las secciones componentizadas, navegación funcional con anchor links, y dualidad (official/honest) trabajando en cada sección. **Sin diseño visual** — solo estructura y funcionalidad.

## Objetivo

> "Single page navegable con todas las secciones" — WORKFLOW.md

El usuario puede:
1. Navegar entre secciones con anchor links (smooth scroll)
2. Ver contenido dual (placeholder) en cada sección
3. Toggle entre modos official/honest y ver cambios en todas las secciones
4. Experiencia consistente en desktop y mobile

---

## Arquitectura de Componentes

```
src/
├── app/
│   ├── layout.tsx           # Ya existe (DualityProvider)
│   ├── page.tsx             # MODIFICAR: Componer secciones
│   └── globals.css          # MODIFICAR: Añadir smooth scroll
│
├── components/
│   ├── duality/             # Ya existe (Fase 1)
│   │
│   ├── layout/              # CREAR
│   │   ├── index.ts
│   │   ├── Header.tsx       # Nav con anchor links
│   │   ├── Footer.tsx       # Links + hints
│   │   └── Section.tsx      # Wrapper reutilizable
│   │
│   └── sections/            # CREAR
│       ├── index.ts
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── PlaygroundGrid.tsx
│       └── Contact.tsx
```

---

## Secciones y Contenido Dual

### 1. Header/Navigation

```tsx
// No dual content, pero responde a theme
<Header>
  <Logo>Dídac Soler</Logo>
  <Nav>
    <Link href="#lab">Lab</Link>
    <Link href="#about">About</Link>
    <Link href="#contact">Contact</Link>
  </Nav>
</Header>
```

**Comportamiento:**
- Posición estática (no sticky en Fase 2)
- Links con smooth scroll a secciones
- Responsive: horizontal en todos los tamaños (3 links caben)

### 2. Hero Section

```tsx
<Hero>
  <Label>
    <Dual official="Design Engineer" honest="Pixel Pusher Since 2004" />
  </Label>
  <Title>
    <Dual
      official="Crafting interfaces where design and code converge. 20+ years of visual design, now learning to build."
      honest="Llevo 20 años moviendo píxeles de un lado a otro. Ahora también escribo código para moverlos más rápido."
    />
  </Title>
  <Meta>Barcelona · 2026</Meta>
</Hero>
```

### 3. Playground/Lab Section (`#lab`)

```tsx
<PlaygroundGrid id="lab">
  <SectionHeader>
    <Title>
      <Dual official="Interface Lab" honest="Experimentos Raros" />
    </Title>
    <Count>6 experiments</Count>
  </SectionHeader>

  <Grid> {/* 1 col mobile, 2 cols tablet, 3 cols desktop */}
    {placeholderItems.map(item => (
      <PlaygroundCard>
        <CardTitle>
          <Dual official={item.title.official} honest={item.title.honest} />
        </CardTitle>
        <CardDescription>
          <Dual official={item.desc.official} honest={item.desc.honest} />
        </CardDescription>
        <DemoArea /> {/* Placeholder gris */}
      </PlaygroundCard>
    ))}
  </Grid>
</PlaygroundGrid>
```

**Placeholder Cards (6):**

| # | Official | Honest |
|---|----------|--------|
| 1 | Breathing Type | Texto que respira |
| 2 | Now | El reloj que no para |
| 3 | Force Field | Puntos que te siguen |
| 4 | Autograph | Firma automágica |
| 5 | Dissolve | Píxeles escapando |
| 6 | Gravity | Letras que caen |

### 4. About Section (`#about`)

```tsx
<About id="about">
  <SectionHeader>
    <Title>About</Title>
  </SectionHeader>

  <Bio>
    <Dual
      official="Creative Director with 20+ years in graphic design, branding, and art direction. Transitioning into Design Engineering because I believe the best design is built, not just delivered."
      honest="He hecho de todo: logos, webs, apps, branding... Ahora me he cansado de entregar Figmas y esperar a que alguien los construya mal. Así que lo hago yo."
    />
  </Bio>

  <SkillsList>
    {skills.map(skill => (
      <SkillBadge>
        <Dual official={skill.official} honest={skill.honest} />
      </SkillBadge>
    ))}
  </SkillsList>
</About>
```

### 5. Contact Section (`#contact`)

```tsx
<Contact id="contact">
  <SectionHeader>
    <Title>
      <Dual official="Get in Touch" honest="Escríbeme" />
    </Title>
  </SectionHeader>

  <CTA>
    <Dual
      official="Available for freelance projects and collaborations."
      honest="Si tienes algo interesante, hablamos."
    />
  </CTA>

  <Links>
    <Link href="mailto:...">Email</Link>
    <Link href="https://twitter.com/k2di">Twitter</Link>
    <Link href="https://github.com/blufferk2">GitHub</Link>
  </Links>
</Contact>
```

### 6. Footer

```tsx
<Footer>
  <Hint>
    <Dual
      official="Press D to toggle mode"
      honest="Pulsa D para ver la verdad"
    />
  </Hint>
  <Copyright>© 2026</Copyright>
</Footer>
```

---

## Acceptance Criteria

### Funcionales

- [x] **Header**: Logo + 3 nav links (Lab, About, Contact)
- [x] **Hero**: Label + Title + Meta con contenido dual
- [x] **Lab/Playground**: Grid de 6 cards con título, descripción y área demo placeholder
- [x] **About**: Bio + lista de skills con contenido dual
- [x] **Contact**: CTA + links sociales
- [x] **Footer**: Hint de toggle + copyright

### Navegación

- [x] Click en nav link → smooth scroll a sección
- [x] URL actualiza hash al hacer click (no al scroll)
- [x] Scroll offset considera altura del header si fuera sticky (preparar con `scroll-mt-*`)

### Dualidad

- [x] Toggle (botón o tecla D) cambia contenido en TODAS las secciones
- [x] Transición de colores suave entre modos
- [x] Estado persiste en localStorage

### Responsive

- [x] Mobile: Grid 1 columna, nav horizontal (cabe)
- [x] Tablet (sm/md): Grid 2 columnas
- [x] Desktop (lg+): Grid 3 columnas
- [x] Toggle accesible en mobile (posición actual ok)

### Código

- [x] Componentes extraídos en `components/sections/` y `components/layout/`
- [x] Barrel exports (`index.ts`) para imports limpios
- [x] Semantic HTML: `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`
- [x] IDs únicos para anchor links: `#lab`, `#about`, `#contact`

---

## Archivos a Crear

### `src/components/layout/Section.tsx`

```tsx
interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={`mb-20 scroll-mt-20 ${className}`}
    >
      {children}
    </section>
  );
}
```

### `src/components/layout/Header.tsx`

```tsx
'use client';

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
        {navItems.map(item => (
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
```

### `src/components/layout/Footer.tsx`

```tsx
import { Dual } from '@/components/duality';

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] pt-8 flex justify-between items-center">
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
```

### `src/components/sections/Hero.tsx`

```tsx
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
```

### `src/components/sections/PlaygroundGrid.tsx`

```tsx
import { Dual } from '@/components/duality';
import { Section } from '@/components/layout';

const placeholderItems = [
  { id: 'breathing', title: { official: 'Breathing Type', honest: 'Texto que respira' }, desc: { official: 'Typography that inhales', honest: 'Letras con asma' } },
  { id: 'clock', title: { official: 'Now', honest: 'El reloj' }, desc: { official: 'This exact moment', honest: 'Tic tac tic tac' } },
  { id: 'field', title: { official: 'Force Field', honest: 'Campo de puntos' }, desc: { official: 'Particles react to you', honest: 'Te persiguen' } },
  { id: 'signature', title: { official: 'Autograph', honest: 'Firma automágica' }, desc: { official: 'A signature draws itself', honest: 'Se dibuja sola' } },
  { id: 'dissolve', title: { official: 'Dissolve', honest: 'Escapismo' }, desc: { official: 'Matter becoming data', honest: 'Píxeles huyendo' } },
  { id: 'gravity', title: { official: 'Gravity', honest: 'Gravedad' }, desc: { official: 'Letters obey physics', honest: 'Letras que caen' } },
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
        {placeholderItems.map(item => (
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
```

### `src/components/sections/About.tsx`

```tsx
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
```

### `src/components/sections/Contact.tsx`

```tsx
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
        {links.map(link => (
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
```

---

## Archivos a Modificar

### `src/app/globals.css`

Añadir smooth scroll:

```css
html {
  scroll-behavior: smooth;
}
```

### `src/app/page.tsx`

Refactorizar a composición de componentes:

```tsx
import { Header, Footer } from '@/components/layout';
import { Hero, PlaygroundGrid, About, Contact } from '@/components/sections';
import { DualityToggle } from '@/components/duality';

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg)] transition-colors">
      <main className="mx-auto max-w-[var(--max-width)] px-6 py-16">
        <Header />
        <Hero />
        <PlaygroundGrid />
        <About />
        <Contact />
        <Footer />
      </main>
      <DualityToggle />
    </div>
  );
}
```

---

## Testing Checklist

### Manual

- [x] Abrir en localhost:3000
- [x] Click en cada link de nav → scroll suave a sección correcta
- [x] Toggle con botón → todos los `<Dual>` cambian
- [x] Toggle con tecla D → mismo comportamiento
- [x] Refrescar página → modo persiste
- [x] Resize a mobile → grid se adapta a 1 columna
- [x] Resize a tablet → grid 2 columnas
- [x] Resize a desktop → grid 3 columnas

### Keyboard

- [x] Tab navega por links y toggle
- [x] Enter activa links
- [x] D funciona cuando no hay input focused

### Código

- [x] `npm run lint` pasa
- [x] `npm run typecheck` pasa
- [x] `npm run build` exitoso

---

## Decisiones Tomadas

| Decisión | Elección | Razón |
|----------|----------|-------|
| Naming sección | "Lab" en UI, `#lab` ID | Corto para nav, "Interface Lab" como título |
| Header sticky | No (estático) | Fase 2 es estructura, sticky es diseño |
| Smooth scroll | Sí, CSS básico | UX fundamental, no es "diseño visual" |
| Cards placeholders | Con título + desc + área demo | Muestra estructura final |
| Número de cards | 6 | Coincide con reference-draft.html |
| Contact vs Footer | Separados | Contact es sección navegable, Footer es meta |

---

## Out of Scope (Fases Posteriores)

- ❌ Animaciones Framer Motion (Fase 4)
- ❌ Efectos dither en transiciones (Fase 4)
- ❌ Sonidos UI (Fase 5)
- ❌ Contenido real/final (Fase 6)
- ❌ Nav active states con scroll (Fase 3)
- ❌ Header sticky (Fase 3)
- ❌ Cards interactivas/clickables (Fase 6+)

---

## Referencias

- `docs/WORKFLOW.md:55-70` — Definición de Fase 2
- `docs/reference-draft.html` — Estructura HTML de referencia
- `docs/PROJECT.md` — Decisiones técnicas
- `src/app/page.tsx` — Implementación actual (Fase 1)
- `src/components/duality/` — Sistema de dualidad existente
