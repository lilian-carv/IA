"use client";
import RevealOnScroll from "./ui/RevealOnScroll";

const tools = [
  {
    name: "VEO 3",
    color: "#4285F4",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
        <polygon points="5,3 19,12 5,21" fill="white" />
      </svg>
    ),
  },
  {
    name: "Seedance 2.0",
    color: "#0D9488",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M8 12c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4" />
      </svg>
    ),
  },
  {
    name: "Nano Banana",
    color: "#D97706",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    name: "Kling AI",
    color: "#7C3AED",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4l8 8-8 8" />
        <path d="M12 4h8" />
        <path d="M12 12h6" />
        <path d="M12 20h8" />
      </svg>
    ),
  },
  {
    name: "Runway Gen-4",
    color: "#1E293B",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <circle cx="8" cy="12" r="2" fill="white" stroke="none" />
        <line x1="13" y1="9" x2="19" y2="9" />
        <line x1="13" y1="12" x2="17" y2="12" />
        <line x1="13" y1="15" x2="19" y2="15" />
      </svg>
    ),
  },
  {
    name: "Pika 2.2",
    color: "#0EA5E9",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="white">
        <path d="M13 2L4.09 12.26 11 11l-2 11 8.91-10.26L11 13l2-11z" />
      </svg>
    ),
  },
  {
    name: "HeyGen",
    color: "#059669",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.58-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    name: "Sora",
    color: "#111827",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M9 12h6M12 9l3 3-3 3" />
      </svg>
    ),
  },
  {
    name: "ElevenLabs",
    color: "#EA580C",
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1v22M6 5v14M18 5v14M3 9v6M21 9v6" />
      </svg>
    ),
  },
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
            As melhores IAs do mundo gerando seus vídeos
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.05}>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {tools.map(({ name, color, icon }) => (
              <div
                key={name}
                className="flex items-center gap-2.5 pl-2 pr-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105"
                style={{
                  border: "1px solid var(--border)",
                  color: "var(--text-muted)",
                  background: "var(--surface-2)",
                }}
              >
                <span
                  className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: color }}
                >
                  {icon}
                </span>
                <span className="font-semibold text-[13px]" style={{ color: "var(--text)" }}>
                  {name}
                </span>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
