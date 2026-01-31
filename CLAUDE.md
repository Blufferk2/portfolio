# CLAUDE.md — Portfolio Dídac Soler

## Proyecto

Portfolio personal de Design Engineer. Single page con sistema de dualidad (oficial/honesto) que se revela mediante interacciones.

**Stack:** Next.js 14+ (App Router), TypeScript, Tailwind, Framer Motion, MDX

---

## Comandos

```bash
# Desarrollo
npm run dev          # Servidor local en localhost:3000

# Build
npm run build        # Build de producción
npm run start        # Servir build

# Calidad
npm run lint         # ESLint
npm run typecheck    # TypeScript check
```

---

## Estructura clave

```
app/                 # Páginas (App Router)
components/
  ├── ui/            # Componentes base reutilizables
  ├── sections/      # Hero, About, PlaygroundGrid, Contact
  ├── duality/       # Sistema de revelación (DualityProvider, DitherReveal, etc.)
  └── playground/    # Componentes para demos/experimentos
hooks/               # useMousePosition, useHold, useDither, useSound
content/playground/  # Archivos MDX de píldoras
styles/              # globals.css, dither.css
```

---

## Convenciones de código

- **TypeScript estricto** — No usar `any`
- **Componentes funcionales** — Con tipos explícitos para props
- **Tailwind primero** — CSS Modules solo para efectos complejos (dither, masks)
- **Nombrado:** PascalCase componentes, camelCase funciones/hooks, kebab-case archivos CSS

---

## Sistema de dualidad

El portfolio tiene dos capas de contenido:
- **Oficial (claro):** Copy profesional
- **Honesto (oscuro):** Verdad con humor

### Componente Dual
```tsx
<Dual
  official="Senior Design Engineer"
  honest="Llevo 20 años moviendo píxeles"
/>
```

### Mecánicas de revelación (por orden de intensidad)
1. Mouse quieto → micro-glitches sutiles (hint)
2. Mouse moviéndose → estela dither
3. Mouse rápido → estela más intensa
4. Hold sostenido → dither expand completo
5. Toggle → cambio global de modo

### Transiciones
Todas usan **efecto dither** (pixelación que se expande/contrae).

---

## Estilo visual

- **Modo claro:** Limpio, profesional
- **Modo oscuro:** La verdad, más crudo
- **Firma visual:** Dither effects
- **Vibe:** Minimal + techy + dev style
- **Esquinas:** Squircles (corner-shape: squircle) con fallback border-radius
- **Textura:** Noise overlay sutil (2% opacity)
- **NO:** Gradientes AI slop, clichés, animaciones que marean

### Squircles (CSS nativo)
```css
.card {
  border-radius: 24px; /* fallback */
  corner-shape: squircle; /* Chrome 139+ */
}
```

---

## Sistema de sonido

Portar el sistema de sonido del draft HTML (`index.html` de referencia). Características:

- Generado con Web Audio API (no archivos)
- `tick()` — hover sutil (bandpass 5500Hz, muy corto)
- `click()` — click más contundente (bandpass 4000Hz)
- Toggle con tecla, persistido en localStorage
- Lazy initialization del AudioContext
- Siempre opcional / mutable

---

## Performance

- Efectos son opt-in (si no interactúas, web normal)
- Lazy load para Three.js si se usa
- Sonidos con lazy loading
- Imágenes optimizadas con next/image

---

## Mobile

- Hold (tap sostenido) → dither expand
- Arrastrar dedo → estela dither
- NO micro-glitches (no hay hover)
- Toggle siempre disponible

---

## Archivos de referencia

- `PRD.md` — Requisitos completos del producto
- `PROJECT.md` — Decisiones técnicas
- `WORKFLOW.md` — Fases de desarrollo
- `reference-draft.html` — Draft HTML con sistema de sonido y paleta base para portar

Consulta estos archivos para contexto completo antes de implementaciones grandes.

---

## Skills de IA disponibles

Hay skills instaladas con buenas prácticas para animaciones y UI. **Antes de implementar animaciones o interacciones complejas:**

1. Revisar las skills disponibles en `/mnt/skills/` o donde estén configuradas
2. Buscar skills relacionadas con: animaciones, motion, UI, Framer Motion, CSS animations
3. Leer los principios y aplicarlos desde el inicio
4. Al terminar una fase de animación, revisar el código contra los principios de las skills

**Momento de consultar skills:**
- Fase 1 (Sistema de dualidad) → antes de implementar transiciones dither
- Fase 4 (Polish dualidad) → antes de estela, glitches, animaciones
- Fase 5 (Sonido) → si hay skill de audio/sonido
- Cualquier píldora con animación compleja

---

## Workflow con Dídac

1. Dídac describe qué quiere
2. Implemento y muestro
3. Dídac da feedback específico
4. Itero hasta satisfacción
5. Commit

**Dídac es Director Creativo** — Las decisiones visuales las toma él. Propón, pero no impongas estilo.
