"use client";
import RevealOnScroll from "./ui/RevealOnScroll";

const tools = [
  { name: "HeyGen", icon: "🎭" },
  { name: "Runway", icon: "🎬" },
  { name: "Pika", icon: "⚡" },
  { name: "Synthesia", icon: "🤖" },
  { name: "OpenAI", icon: "🧠" },
  { name: "ElevenLabs", icon: "🔊" },
];

export default function LogosBar() {
  return (
    <section
      className="py-14 md:py-16 border-y"
      style={{ borderColor: "var(--border)", background: "var(--surface)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <RevealOnScroll>
          <p
            className="text-center text-xs uppercase tracking-[0.2em] font-semibold mb-10"
            style={{ color: "var(--text-dim)" }}
          >
            Ferramentas de IA usadas nos nossos vídeos
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.05}>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {tools.map(({ name, icon }) => (
              <div
                key={name}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-200 hover:text-white"
                style={{
                  border: "1px solid var(--border)",
                  color: "var(--text-muted)",
                  background: "var(--surface-2)",
                }}
              >
                <span className="text-base">{icon}</span>
                {name}
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
