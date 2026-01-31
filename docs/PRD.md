# PRD — Portfolio Personal Dídac Soler

## 1. Objetivo

**¿Para qué existe este portfolio?**
- Conseguir trabajo como Design Engineer (empleo)
- Conseguir clientes freelance

**Resultado esperado:**
Posicionarse como Design Engineer senior con 20+ años de experiencia en diseño, ahora también capaz de construir. Demostrar craft a través de experimentos, no de case studies tradicionales.

---

## 2. Audiencia

**¿Quién va a ver esto?**
- Recruiters de empresas tech
- CTOs / Hiring managers
- Otros diseñadores / Design Engineers
- Clientes potenciales

**Nivel técnico de la audiencia:** Técnico (entienden código)

---

## 3. Mensaje Principal

**¿Qué debe quedar claro en 5 segundos?**
> 20 años de experiencia, top level, atención al detalle

**Diferenciador (ventaja competitiva):**
- Viene del diseño (20 años), no del código — ve cosas que los devs no ven
- Usa IA como superpoder — vibecoding, más rápido que dev tradicional
- Experiencia en branding/print — entiende marca, no solo UI

---

## 4. Concepto Central: Sistema de Dualidad

### La idea
Dos versiones de todo el contenido:
- **Capa Oficial (modo claro):** Lo que dice un portfolio profesional
- **Capa Honesta (modo oscuro):** La verdad con humor autocrítico + vulnerabilidad real

### Tono de la capa honesta
Mezcla de:
- Humor autocrítico suave → "He sobrevivido 20 años de 'hazlo más grande'"
- Vulnerabilidad real → "A veces no tengo ni idea de lo que hago"

### Mecánica de revelación (por capas de intención)

| Intención del usuario | Gesto | Efecto | Intensidad |
|-----------------------|-------|--------|------------|
| **Pasiva** | Mouse quieto en zona | Micro-glitches sutiles (hint) | Apenas perceptible |
| **Curiosa** | Mouse moviéndose | Estela dither que revela y se desvanece | Sutil pero visible |
| **Activa** | Mouse rápido | Estela más intensa/larga | Evidente |
| **Comprometida** | Hold (click/tap sostenido) | Dither expand desde punto de contacto | Full reveal |
| **Fallback** | Toggle global | Cambio completo de modo | Control total |

### Comportamiento en mobile
- Scroll normal: Sin efectos (no interrumpir lectura)
- Tap sostenido: Dither expand desde el dedo
- Arrastrar dedo: Estela dither
- Toggle: Cambio completo

**Nota:** Micro-glitches de "erosión por atención" solo en desktop (no hay hover en mobile).

---

## 5. Contenido

### Estructura (Single page con posible expansión)

| Sección | Contenido | Dualidad |
|---------|-----------|----------|
| **Hero** | Nombre, tagline, primera impresión WOW | ✅ Sí |
| **About** | Quién eres, 20 años de experiencia, diferenciador | ✅ Sí |
| **Playground** | Grid de píldoras/experimentos | ✅ Sí (títulos y descripciones) |
| **Contacto** | CTA, email, links sociales | ✅ Sí |

### Formato del Playground
- NO case studies tradicionales
- Experimentos, componentes, animaciones, mini demos
- Estilo "mira lo que hice" de Twitter
- Se va llenando con el tiempo
- Cada píldora puede tener su URL individual para compartir

### Para lanzar v1
- 3-5 píldoras/experimentos
- Mix de: componentes UI con animaciones, visuales experimentales (shaders, WebGL), interacciones con datos

**Referencia de formato:** [Abil Shrestha](https://abilshr.com)

---

## 6. Estilo Visual

**Dirección:**
- Versión oficial: Clara, limpia, profesional
- Versión honesta: Oscura, la verdad debajo
- Base minimal + techy + dev style
- Dither effects como firma visual
- Microanimaciones

**Modo claro/oscuro:** Toggle (usuario elige) — también actúa como switch oficial/honesto

**Paleta de colores:** Por definir (iterativo)

**Tipografía:** Por definir (iterativo)

---

## 7. Funcionalidades

### Interactividad
- Sistema de dualidad completo (ver sección 4)
- Sonido UI sutil (efectos, NO música)
- Easter eggs (1-2 sutiles)
- Toggle modo claro/oscuro

### Sonido
- Clicks sutiles
- Feedback de interacciones
- El efecto dither podría tener sonido asociado
- Siempre opcional / mutable

---

## 8. Requisitos Técnicos

**Idioma:** Inglés (principal)

**Dispositivos:** Desktop y mobile igual de importantes

**Performance:** Balance entre velocidad y efectos visuales. Los efectos son opt-in, si no interactúas ves la web normal.

**Accesibilidad:** WCAG AA como objetivo

**SEO:** Buenas prácticas sin comprometer estética ni UX

**Analytics:** Umami (self-hosted en Vercel) — básico, privacy-friendly

---

## 9. Fuera de Alcance (NO hacer)

- ❌ Blog como sección separada (el Playground absorbe todo contenido)
- ❌ Música automática (solo efectos de sonido)
- ❌ Testimonials
- ❌ Lista de clientes/logos
- ❌ Case studies tradicionales largos
- ❌ AI slop (gradientes morado-rosa genéricos)
- ❌ Clichés tipo "passionate about design"
- ❌ Animaciones excesivas que marean

---

## 10. Stack Técnico

| Capa | Tecnología |
|------|------------|
| Framework | Next.js 14+ (App Router) |
| Styling | Tailwind CSS + CSS Modules |
| Animaciones | Framer Motion + CSS + Three.js puntual |
| Contenido | MDX local |
| Analytics | Umami (self-hosted en Vercel) |
| Hosting | Vercel |
| Lenguaje | TypeScript |

---

## 11. Dominio y Hosting

**Dominio:** Por decidir (didacsoler.com es opción)

**Hosting:** Vercel

---

*Última actualización: 2026-01-31*
