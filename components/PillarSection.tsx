"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import RevealOnScroll from "./ui/RevealOnScroll";

const pillars = [
  {
    n: "01",
    title: "Oferta e Posicionamento",
    desc: "Avaliamos clareza de proposta de valor, diferenciação real e fit com a dor do cliente. Antes de promover, é preciso ter algo promovível.",
    keyword: "Oferta",
    points: ["Proposta de valor", "Diferenciação", "Fit com a dor"],
  },
  {
    n: "02",
    title: "Funil e Jornada de Conversão",
    desc: "Mapeamos cada ponto de contato — da primeira impressão à venda. Identificamos onde o lead trava, hesita ou desiste.",
    keyword: "Funil",
    points: ["Pontos de contato", "Bloqueios", "Taxa de conversão"],
  },
  {
    n: "03",
    title: "Ativos e Comunicação",
    desc: "Análise de criativos, copy, landing pages e materiais de venda. Avaliamos o que comunica autoridade e o que afasta o cliente certo.",
    keyword: "Ativos",
    points: ["Criativos", "Copy & páginas", "Materiais de venda"],
  },
  {
    n: "04",
    title: "Canais e Infraestrutura de Dados",
    desc: "Pixel, conversões offline, CRM, GA4, atribuição. Sem dados confiáveis, decisões viram chute. Auditamos o que você consegue medir de verdade.",
    keyword: "Dados",
    points: ["Tracking & CAPI", "CRM e atribuição", "GA4 e dashboards"],
  },
  {
    n: "05",
    title: "Operação e Capacidade de Escala",
    desc: "Time comercial, atendimento, processos. Mais leads sem operação preparada vira gargalo. Verificamos se o motor aguenta o tráfego.",
    keyword: "Operação",
    points: ["Time comercial", "SLA de atendimento", "Capacidade de entrega"],
  },
];

export default function PillarSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(pillars.length - 1) * 100}%`]);

  return (
    <section
      id="solucao"
      ref={ref}
      className="relative bg-cream"
      style={{ height: `${pillars.length * 75}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
        <div className="grid-bg-dark absolute inset-0 opacity-40 pointer-events-none" />

        {/* Compact heading row */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full pt-24 md:pt-28 pb-4 md:pb-6">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div className="max-w-3xl">
              <RevealOnScroll>
                <span className="tag tag-light">A Solução</span>
              </RevealOnScroll>
              <RevealOnScroll delay={0.1}>
                <h2 className="display display-tight text-ink text-2xl md:text-4xl lg:text-[44px] mt-3 leading-[1]">
                  Auditamos os 5 pilares que determinam o{" "}
                  <span className="kw">sucesso</span> da sua mídia
                </h2>
              </RevealOnScroll>
            </div>
            <StepIndicator total={pillars.length} progress={scrollYProgress} />
          </div>
        </div>

        {/* Horizontal scroller fills remaining space */}
        <div className="relative flex-1 min-h-0 pb-10 md:pb-14">
          <motion.div style={{ x }} className="absolute inset-0 flex">
            {pillars.map((p, i) => (
              <PillarPanel
                key={p.n}
                pillar={p}
                next={pillars[i + 1]}
                isLast={i === pillars.length - 1}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PillarPanel({
  pillar,
  next,
  isLast,
}: {
  pillar: (typeof pillars)[number];
  next?: (typeof pillars)[number];
  isLast: boolean;
}) {
  return (
    <div className="w-screen shrink-0 flex items-center relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full grid lg:grid-cols-12 gap-6 lg:gap-10 items-center">
        {/* Big number */}
        <div className="lg:col-span-5">
          <div className="text-orange-primary text-[10px] uppercase tracking-[0.3em] font-bold mb-2">
            Pilar {pillar.n} de 05
          </div>
          <div className="display display-tight text-[120px] md:text-[180px] lg:text-[200px] leading-[0.8] text-ink tabular-nums">
            {pillar.n}
          </div>
          <div className="display text-orange-primary text-2xl md:text-3xl mt-1">
            / {pillar.keyword}
          </div>
        </div>

        {/* Card */}
        <div className="lg:col-span-7">
          <div className="cream-card p-6 md:p-8">
            <h3 className="display display-tight text-ink text-2xl md:text-3xl leading-[1.05] mb-3">
              {pillar.title}
            </h3>
            <p className="text-ink/65 text-sm md:text-base leading-relaxed">
              {pillar.desc}
            </p>

            <ul className="mt-5 grid sm:grid-cols-3 gap-2.5">
              {pillar.points.map((pt) => (
                <li
                  key={pt}
                  className="flex items-center gap-2 text-xs md:text-sm text-ink/70 bg-cream-dark/60 rounded-xl px-3 py-2 border border-orange-primary/15"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-primary shrink-0" />
                  {pt}
                </li>
              ))}
            </ul>

            {/* Footer linking to next */}
            <div className="mt-5 pt-4 border-t border-ink/10 flex items-center justify-between gap-3 text-xs">
              <span className="uppercase tracking-[0.2em] text-ink/45 font-semibold">
                {String(parseInt(pillar.n))} de {pillars.length} pilares
              </span>
              {next ? (
                <span className="inline-flex items-center gap-2 text-orange-primary font-semibold uppercase tracking-[0.18em]">
                  Próximo: {next.keyword}
                  <ArrowRight />
                </span>
              ) : (
                <span className="inline-flex items-center gap-2 text-emerald-600 font-semibold uppercase tracking-[0.18em]">
                  Pilar final
                  <CheckIcon />
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Connector arrow between panels */}
      {!isLast && <PanelConnector />}
    </div>
  );
}

function PanelConnector() {
  return (
    <div
      aria-hidden
      className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 items-center"
    >
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
        <defs>
          <radialGradient id="connectorGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E8740C" stopOpacity="0.4" />
            <stop offset="70%" stopColor="#E8740C" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="28" cy="28" r="28" fill="url(#connectorGlow)" />
        <circle cx="28" cy="28" r="18" fill="#FDF8F3" stroke="#E8740C" strokeWidth="1.5" />
        <path
          d="M22 28h12m0 0l-4-4m4 4l-4 4"
          stroke="#E8740C"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function StepIndicator({
  total,
  progress,
}: {
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  return (
    <div className="flex items-center gap-3">
      {Array.from({ length: total }).map((_, i) => {
        const at = i / (total - 1);
        const w = useTransform(progress, [at - 0.1, at, at + 0.1], [12, 36, 12]);
        const bg = useTransform(progress, [0, at, 1], ["#11111122", "#E8740C", "#E8740C"]);
        return (
          <motion.span
            key={i}
            style={{ width: w, background: bg }}
            className="h-1.5 rounded-full"
          />
        );
      })}
    </div>
  );
}
