"use client";
import RevealOnScroll from "./ui/RevealOnScroll";

const cases = [
  {
    emoji: "📱",
    category: "Anúncio de produto",
    title: "E-commerce de moda",
    desc: "Vídeo de 30s com apresentação de produto, narração e call-to-action. Taxa de clique 2,4× maior que foto estática.",
    badge: "Meta Ads",
  },
  {
    emoji: "🏋️",
    category: "Vídeo institucional",
    title: "Academia local",
    desc: "Apresentação da estrutura, diferenciais e oferta de matrícula. Usado em anúncio de Instagram e na landing page.",
    badge: "Institucional",
  },
  {
    emoji: "🎓",
    category: "Lançamento de infoproduto",
    title: "Curso online",
    desc: "Vídeo de VSL de 60s com avatar IA apresentando o curso, depoimentos e bônus. Converteu 9,3% na landing page.",
    badge: "VSL",
  },
  {
    emoji: "🍕",
    category: "Promoção de negócio local",
    title: "Restaurante",
    desc: "Reels de 15s com imagens do cardápio, animação e oferta de fim de semana. Atingiu 40 mil views orgânicos.",
    badge: "Reels",
  },
  {
    emoji: "🏠",
    category: "Prestação de serviço",
    title: "Imobiliária",
    desc: "Vídeo de apresentação de imóvel com narração profissional e tour animado. Reduziu custo de produção em 80%.",
    badge: "Captação",
  },
  {
    emoji: "💼",
    category: "Agência de marketing",
    title: "Múltiplos clientes",
    desc: "Agência que usa a Numeratti para produzir vídeos de 6 clientes por mês com custo 5× menor que produtora tradicional.",
    badge: "White-label",
  },
];

export default function ExamplesSection() {
  return (
    <section
      className="py-24 md:py-32"
      style={{ background: "var(--surface)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <RevealOnScroll className="text-center mb-16">
          <span className="tag mb-6 inline-flex">Casos de uso</span>
          <h2
            className="display text-white text-3xl md:text-5xl mt-4 max-w-2xl mx-auto"
            style={{ lineHeight: 1.05, letterSpacing: "-0.035em" }}
          >
            Quem está usando e{" "}
            <span className="grad-text">o que está conseguindo.</span>
          </h2>
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cases.map((c, i) => (
            <RevealOnScroll key={c.title} delay={i * 0.06}>
              <div
                className="glass-card p-6 h-full flex flex-col gap-3"
                style={{ background: "var(--surface-2)" }}
              >
                {/* Top row */}
                <div className="flex items-start justify-between gap-2">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                  >
                    {c.emoji}
                  </div>
                  <span
                    className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider"
                    style={{
                      background: "rgba(124,92,252,0.1)",
                      color: "var(--accent)",
                      border: "1px solid rgba(124,92,252,0.2)",
                    }}
                  >
                    {c.badge}
                  </span>
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-wider font-semibold mb-1" style={{ color: "var(--text-dim)" }}>
                    {c.category}
                  </p>
                  <h3 className="text-white font-semibold text-base">{c.title}</h3>
                </div>

                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {c.desc}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
