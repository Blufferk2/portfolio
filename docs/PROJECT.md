# Portfolio Personal de Dídac — Documentación Técnica

## Estado: 🟡 Pre-desarrollo

---

## Concepto Central: Sistema de Dualidad

### La metáfora
- **Modo claro = Fachada oficial** — Lo que dice un portfolio profesional
- **Modo oscuro = Verdad honesta** — Humor autocrítico + vulnerabilidad real

### Sistema de revelación por capas de intención

```
┌─────────────────────────────────────────────────────────────────┐
│  INTENCIÓN      │  GESTO              │  EFECTO                 │
├─────────────────────────────────────────────────────────────────┤
│  Pasiva         │  Mouse quieto       │  Micro-glitches (hint)  │
│  Curiosa        │  Mouse moviéndose   │  Estela dither sutil    │
│  Activa         │  Mouse rápido       │  Estela más intensa     │
│  Comprometida   │  Hold sostenido     │  Dither expand full     │
│  Fallback       │  Toggle global      │  Cambio completo        │
└─────────────────────────────────────────────────────────────────┘
```

### Transiciones
Todas las transiciones entre oficial/honesto usan **efecto dither** — pixelación que se expande/contrae. Es la firma visual del portfolio.

---

## Stack Técnico

### Core
- **Next.js 14+** (App Router) — Framework principal
- **TypeScript** — Tipado estricto
- **Tailwind CSS** — Utilidades + CSS Modules para lo custom
- **Framer Motion** — Animaciones y gestos

### Contenido
- **MDX** — Markdown + componentes React para las píldoras
- Archivos en `/content/playground/`
- Sin CMS externo

### Efectos visuales
- **CSS nativo** — Para lo performante (transforms, opacity, masks)
- **Canvas API** — Para efectos dither y estela
- **Three.js / OGL** — Puntual, solo si alguna píldora lo necesita

### Infra
- **Vercel** — Hosting + preview deploys
- **Umami** — Analytics (self-hosted en Vercel)
- **GitHub** — Repositorio

---

## Estructura de Proyecto

```
portfolio/
├── app/
│   ├── layout.tsx              # Layout global, providers
│   ├── page.tsx                # Home (todas las secciones)
│   └── playground/
│       └── [slug]/
│           └── page.tsx        # Página individual de píldora
│
├── components/
│   ├── ui/                     # Componentes base
│   ├── sections/               # Hero, About, PlaygroundGrid, Contact
│   ├── duality/                # Sistema de revelación
│   │   ├── DualityProvider.tsx
│   │   ├── DitherReveal.tsx
│   │   ├── GlitchHint.tsx
│   │   ├── TrailEffect.tsx
│   │   └── DualityToggle.tsx
│   └── playground/             # Componentes para demos
│
├── content/
│   └── playground/             # Archivos MDX
│       └── *.mdx
│
├── hooks/
│   ├── useMousePosition.ts
│   ├── useHold.ts
│   ├── useDither.ts
│   ├── useSound.ts
│   └── useDualityMode.ts
│
├── lib/
│   ├── mdx.ts                  # Cargar contenido MDX
│   └── utils.ts
│
├── styles/
│   ├── globals.css             # Tailwind + variables CSS
│   └── dither.css              # Efectos dither
│
├── public/
│   ├── sounds/
│   └── assets/
│
└── config/
    └── site.ts                 # Metadata, links sociales
```

---

## Secciones del Portfolio

| Sección | Descripción | Prioridad |
|---------|-------------|-----------|
| **Hero** | Nombre + tagline + efecto WOW | P0 |
| **About** | Bio con dualidad | P0 |
| **Playground** | Grid de píldoras | P0 |
| **Contacto** | CTA + links | P0 |

Todas las secciones tienen versión oficial y honesta.

---

## Decisiones de Diseño

### Pendientes (Dídac define)
- [ ] Paleta de colores (claro y oscuro)
- [ ] Tipografía
- [ ] Layout y espaciado
- [ ] Estilo de las cards del Playground

### Definidas
- ✅ Dither effects como firma visual
- ✅ Minimal + techy + dev style
- ✅ Microanimaciones sutiles
- ✅ Sonidos UI opcionales

---

## Gustos Estéticos Documentados

Cosas que resuenan con Dídac:
- ✓ Dither effects (texturas pixeladas, tech/dev vibe)
- ✓ UI sounds sutiles (tick hover, click)
- ✓ Exploraciones interactivas
- ✓ Minimalismo con personalidad
- ✓ Versión clara limpia / versión oscura como "la verdad"

---

## Referencias

- [Minh Pham](https://minhpham.design/) — Inspiración original dualidad
- [Abil Shrestha](https://abilshr.com) — Formato playground de píldoras

---

## Archivos Clave

| Archivo | Descripción |
|---------|-------------|
| `PRD.md` | Requisitos del producto |
| `PROJECT.md` | Este archivo — decisiones técnicas |
| `WORKFLOW.md` | Fases de desarrollo |
| `CLAUDE.md` | Instrucciones para Claude Code |

---

*Última actualización: 2026-01-31*
