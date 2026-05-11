"use client";
import RevealOnScroll from "./ui/RevealOnScroll";

const steps = [
  {
    num: "01",
    icon: "📝",
    title: "Envie seu briefing",
    desc: "Preencha um formulário simples ou mande uma mensagem no WhatsApp. Pode ser uma ideia, um texto ou um roteiro. Sem reunião, sem complicação.",
    detail: "Resposta em até 2h úteis",
  },
  {
    num: "02",
    icon: "🤖",
    title: "IA produz seu vídeo",
    desc: "Nossa equipe usa as melhores ferramentas de IA — Runway, HeyGen, ElevenLabs e GPT-4o — para criar um vídeo profissional do zero.",
    detail: "Roteiro + visual + narração + legenda",
  },
  {
    num: "03",
    icon: "🚀",
    title: "Receba e publique",
    desc: "Você recebe o arquivo final em até 48h por WhatsApp ou Google Drive. Pronto para subir no Meta Ads, Instagram, YouTube ou landing page.",
    detail: "Entrega em MP4 · alta resolução",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="como-funciona"
      className="py-24 md:py-32"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <RevealOnScroll className="text-center mb-16">
          <span className="tag mb-6 inline-flex">Como funciona</span>
          <h2
            className="display text-white text-3xl md:text-5xl mt-4 max-w-xl mx-auto"
            style={{ lineHeight: 1.05, letterSpacing: "-0.035em" }}
          >
            Três passos.{" "}
            <span className="grad-text">48 horas.</span>{" "}
            Vídeo no ar.
          </h2>
        </RevealOnScroll>

        {/* Steps with connector line */}
        <div className="relative">
          {/* Connector (desktop) */}
          <div
            className="hidden lg:block absolute top-16 left-0 right-0 h-px"
            style={{
              background: "linear-gradient(90deg, transparent 10%, var(--border) 20%, var(--border) 80%, transparent 90%)",
            }}
            aria-hidden
          />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <RevealOnScroll key={step.num} delay={i * 0.12}>
                <div
                  className="relative rounded-2xl p-8 h-full"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                  }}
                >
                  {/* Step number bubble */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-sm mb-6 relative z-10"
                    style={{ background: "var(--grad-accent)" }}
                  >
                    {step.num}
                  </div>

                  <div className="text-3xl mb-4">{step.icon}</div>

                  <h3 className="text-white font-semibold text-lg mb-3">{step.title}</h3>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
                    {step.desc}
                  </p>

                  <div
                    className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full"
                    style={{
                      background: "rgba(34,211,238,0.08)",
                      color: "var(--accent-2)",
                      border: "1px solid rgba(34,211,238,0.2)",
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent-2)" }} />
                    {step.detail}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
