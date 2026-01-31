# Workflow de Desarrollo — Portfolio Dídac

## Filosofía de Trabajo

- **Iterativo:** Código ↔ Diseño ↔ Código
- **Incremental:** Cada fase produce algo funcional
- **Dídac es Director Creativo:** Las decisiones visuales las toma él
- **Claude Code implementa:** Traduce visión a código

---

## Fases de Desarrollo

### Fase 0: Setup
**Objetivo:** Tener el proyecto listo para desarrollar

**Tareas:**
- [ ] Crear repo en GitHub
- [ ] `npx create-next-app@latest` (TypeScript, Tailwind, App Router)
- [ ] Configurar estructura de carpetas
- [ ] Primer deploy a Vercel (vacío)
- [ ] Configurar ESLint + Prettier

**Entregable:** Repo funcionando, URL de preview activa

**Duración estimada:** 1 sesión

---

### Fase 1: Sistema de Dualidad
**Objetivo:** La mecánica core funcionando antes de diseñar nada

**Tareas:**
- [ ] `DualityProvider` — contexto global para modo oficial/honesto
- [ ] CSS variables para los dos temas (claro/oscuro)
- [ ] Toggle global funcionando
- [ ] Hold básico con dither expand
- [ ] Componente `<Dual>` para envolver contenido con dos versiones

**Entregable:** Página de prueba donde el toggle y hold funcionan

**Duración estimada:** 2-3 sesiones

**Criterio de éxito:** 
```tsx
<Dual
  official="Senior Design Engineer"
  honest="Llevo 20 años moviendo píxeles"
/>
```
Este componente funciona y responde a toggle + hold.

---

### Fase 2: Layout y Secciones (Esqueleto)
**Objetivo:** Estructura completa con contenido placeholder

**Tareas:**
- [ ] Layout global con toggle visible
- [ ] Hero con contenido dual placeholder
- [ ] About con contenido dual placeholder
- [ ] Playground grid (cards vacías)
- [ ] Contacto placeholder
- [ ] Navegación (si aplica)

**Entregable:** Single page navegable con todas las secciones

**Duración estimada:** 2 sesiones

**Nota:** SIN diseño visual todavía — solo estructura y dualidad funcionando.

---

### Fase 3: Diseño Visual
**Objetivo:** Definir y aplicar la identidad visual

**Quién lidera:** Dídac

**Tareas:**
- [ ] Explorar tipografía (Figma o código)
- [ ] Definir paleta de colores (claro y oscuro)
- [ ] Espaciado y layout
- [ ] Estilo de cards del Playground
- [ ] Microanimaciones base
- [ ] Aplicar diseño al esqueleto

**Entregable:** Portfolio con identidad visual definida

**Duración estimada:** Variable (iterativo)

**Proceso:**
1. Dídac explora en Figma o directamente en código
2. Claude Code implementa
3. Dídac revisa y ajusta
4. Repetir hasta satisfacción

---

### Fase 4: Polish del Sistema de Dualidad
**Objetivo:** Añadir las capas extra de interacción

**Tareas:**
- [ ] Estela al mover mouse (velocidad variable)
- [ ] Micro-glitches por atención (hints)
- [ ] Transiciones dither refinadas
- [ ] Ajuste de timing y easing
- [ ] Comportamiento mobile (hold, arrastrar)

**Entregable:** Sistema de dualidad completo y pulido

**Duración estimada:** 2-3 sesiones

**Orden de implementación:**
1. Estela básica
2. Velocidad variable de estela
3. Micro-glitches en hover quieto
4. Refinamiento de dither expand

---

### Fase 5: Sonido UI
**Objetivo:** Añadir feedback auditivo sutil

**Tareas:**
- [ ] Elegir/crear sonidos (clicks, whoosh, glitch)
- [ ] Hook `useSound` con lazy loading
- [ ] Sonido en toggle
- [ ] Sonido en hover (opcional, muy sutil)
- [ ] Sonido en dither reveal
- [ ] Control de volumen / mute global

**Entregable:** Sonidos integrados y opcionales

**Duración estimada:** 1-2 sesiones

---

### Fase 6: Contenido Real
**Objetivo:** Reemplazar placeholders con contenido final

**Quién lidera:** Dídac

**Tareas:**
- [ ] Copy Hero (oficial + honesto)
- [ ] Copy About (oficial + honesto)
- [ ] Copy Contacto (oficial + honesto)
- [ ] Crear 3-5 píldoras MDX reales
- [ ] Assets (imágenes, videos de demos si hay)

**Entregable:** Portfolio con contenido real

**Duración estimada:** Variable

---

### Fase 7: Testing y Optimización
**Objetivo:** Asegurar calidad antes de lanzar

**Tareas:**
- [ ] Performance audit (Lighthouse)
- [ ] Testing en dispositivos reales (mobile)
- [ ] Testing en navegadores (Chrome, Safari, Firefox)
- [ ] Accesibilidad (WCAG AA)
- [ ] SEO meta tags
- [ ] Open Graph images
- [ ] Favicon

**Entregable:** Portfolio listo para producción

**Duración estimada:** 1-2 sesiones

---

### Fase 8: Analytics y Deploy Final
**Objetivo:** Lanzar

**Tareas:**
- [ ] Setup Umami en Vercel
- [ ] Conectar dominio (cuando esté decidido)
- [ ] Deploy final
- [ ] Verificar todo en producción

**Entregable:** 🚀 Portfolio live

---

## Cómo Trabajar con Claude Code

### Patrón general por fase

```
1. Dídac describe qué quiere (texto, sketch, referencia)
2. Claude Code implementa
3. Dídac prueba y da feedback
4. Claude Code ajusta
5. Repetir hasta satisfacción
6. Commit y siguiente tarea
```

### Tips para sesiones efectivas

- **Empezar con `/clear`** — Contexto limpio cada sesión
- **Una tarea a la vez** — No mezclar fases
- **Describir el "qué", no el "cómo"** — Claude propone implementación
- **Feedback específico** — "Más sutil", "Más rápido", "El timing está mal"
- **Commits frecuentes** — Cada pieza funcional se commitea

### Qué hacer si algo no funciona

1. Describir el problema específico
2. Si es visual: screenshot o grabación
3. Si es comportamiento: pasos para reproducir
4. Claude Code debuggea e itera

---

## Checklist Pre-Lanzamiento

- [ ] Todas las secciones tienen contenido real
- [ ] Dualidad funciona en desktop y mobile
- [ ] Sonidos funcionan (y se pueden mutear)
- [ ] Performance > 90 en Lighthouse
- [ ] Funciona en Chrome, Safari, Firefox
- [ ] Funciona en iPhone y Android
- [ ] Meta tags SEO configurados
- [ ] Open Graph configurado
- [ ] Favicon configurado
- [ ] Analytics funcionando
- [ ] Dominio conectado
- [ ] SSL activo

---

*Última actualización: 2026-01-31*
