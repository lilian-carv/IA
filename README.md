# Numeratti — Diagnóstico de Escala Digital

Landing page premium para o produto **Diagnóstico de Escala Digital** da Numeratti.

## Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion (animações, scroll reveals, gráficos)
- Fontes via `next/font/google` — **Syne** (display) + **Outfit** (body)

## Rodando localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Estrutura

```
app/
  layout.tsx, page.tsx, globals.css
components/
  Navbar, Hero, StatsBar, ProblemSection, PillarSection,
  MethodologyFlowchart, DeliverableSection, GestoresSection,
  AboutSection, FinalCTA, Footer
  ui/ — GlowButton, RevealOnScroll, AnimatedCounter, RadarChart, DonutChart, BarChart, Particles
```

Todos os CTAs apontam para o WhatsApp comercial.
