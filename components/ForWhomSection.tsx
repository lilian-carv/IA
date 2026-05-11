"use client";
import RevealOnScroll from "./ui/RevealOnScroll";

const personas = [
  {
    icon: "📊",
    title: "Gestores de tráfego",
    desc: "Crie criativos para anúncios no Meta e Google sem depender de equipe de vídeo. Teste mais variações, mais rápido.",
    tags: ["Meta Ads", "Google Ads", "Criativos em escala"],
  },
  {
    icon: "🛒",
    title: "Donos de e-commerce",
    desc: "Vídeos de produto, depoimentos e demonstrações que aumentam a conversão — sem sessão de fotos ou estúdio.",
    tags: ["Produto", "Conversão", "Stories"],
  },
  {
    icon: "🎓",
    title: "Infoprodutores",
    desc: "Apresente seu curso ou mentoria com vídeos profissionais que geram autoridade e vendem sem você aparecer.",
    tags: ["Lançamento", "Autoridade", "Funil"],
  },
  {
    icon: "🏢",
    title: "Prestadores de serviços",
    desc: "Mostre o resultado do seu trabalho, explique seus diferenciais e feche mais clientes com vídeo.",
    tags: ["Portfólio", "Depoimentos", "Prospecção"],
  },
  {
    icon: "📍",
    title: "Negócios locais",
    desc: "Restaurantes, clínicas, academias e lojas que precisam de presença digital forte mas sem orçamento de produção.",
    tags: ["Reels", "Local", "Promoção"],
  },
  {
    icon: "🚀",
    title: "Agências de marketing",
    desc: "Escale a produção de vídeo para seus clientes com custo e prazo previsíveis. White-label disponível.",
    tags: ["White-label", "Escala", "Múltiplos clientes"],
  },
];

export default function ForWhomSection() {
  return (
    <section
      id="para-quem"
      className="py-24 md:py-32"
      style={{ background: "var(--surface)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <RevealOnScroll className="text-center mb-16">
          <span className="tag mb-6 inline-flex">Para quem é</span>
          <h2
            className="display text-white text-3xl md:text-5xl mt-4 max-w-2xl mx-auto"
            style={{ lineHeight: 1.05, letterSpacing: "-0.035em" }}
          >
            Se você precisa de vídeo para{" "}
            <span className="grad-text">vender mais,</span>{" "}
            é para você.
          </h2>
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {personas.map((p, i) => (
            <RevealOnScroll key={p.title} delay={i * 0.06}>
              <div
                className="glass-card p-6 h-full flex flex-col gap-4"
                style={{ background: "var(--surface-2)" }}
              >
                <div className="text-3xl">{p.icon}</div>
                <div>
                  <h3 className="text-white font-semibold text-base mb-2">{p.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {p.desc}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-[11px] font-medium"
                      style={{
                        background: "rgba(124,92,252,0.08)",
                        color: "var(--accent)",
                        border: "1px solid rgba(124,92,252,0.2)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
