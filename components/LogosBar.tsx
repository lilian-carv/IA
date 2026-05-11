"use client";

type Tool = {
  name: string;
  logo: React.ReactNode;
  accent: string;
};

const tools: Tool[] = [
  {
    name: "Google VEO 3",
    accent: "#4285F4",
    logo: (
      // Google G — four-color path
      <svg viewBox="0 0 48 48" width="26" height="26">
        <path fill="#4285F4" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
        <path fill="#34A853" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.37-.76-2.84-.76-4.59s.27-3.22.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
        <path fill="#EA4335" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
        <path fill="none" d="M0 0h48v48H0z"/>
      </svg>
    ),
  },
  {
    name: "ElevenLabs",
    accent: "#f97316",
    logo: (
      // ElevenLabs waveform bars (their actual icon style)
      <svg viewBox="0 0 36 36" width="26" height="26" fill="none">
        <rect x="3"  y="12" width="5" height="12" rx="2.5" fill="#f97316"/>
        <rect x="10" y="6"  width="5" height="24" rx="2.5" fill="#f97316"/>
        <rect x="17" y="9"  width="5" height="18" rx="2.5" fill="#f97316" opacity="0.85"/>
        <rect x="24" y="13" width="5" height="10" rx="2.5" fill="#f97316" opacity="0.65"/>
        <rect x="31" y="16" width="3" height="4"  rx="1.5" fill="#f97316" opacity="0.45"/>
      </svg>
    ),
  },
  {
    name: "Runway Gen-4",
    accent: "#a3a3a3",
    logo: (
      // Runway — minimalist film-frame "R"
      <svg viewBox="0 0 36 36" width="26" height="26" fill="none">
        <rect x="4" y="4" width="28" height="28" rx="6" stroke="white" strokeWidth="2.5"/>
        <path d="M11 11h8a4 4 0 0 1 0 8h-8z" fill="white"/>
        <path d="M11 19h6l5 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Kling AI",
    accent: "#c084fc",
    logo: (
      // Kling — stylised K with energy spark
      <svg viewBox="0 0 36 36" width="26" height="26" fill="none">
        <path d="M8 6v24" stroke="#c084fc" strokeWidth="3" strokeLinecap="round"/>
        <path d="M8 18L22 6" stroke="#c084fc" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 18L22 30" stroke="#c084fc" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="28" cy="8" r="3" fill="#f0abfc"/>
      </svg>
    ),
  },
  {
    name: "Pika 2.2",
    accent: "#38bdf8",
    logo: (
      // Pika — lightning bolt in brand blue
      <svg viewBox="0 0 36 36" width="26" height="26" fill="none">
        <path d="M21 4L7 20h13l-5 12L29 16H16L21 4z" fill="#38bdf8" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "HeyGen",
    accent: "#10b981",
    logo: (
      // HeyGen — avatar silhouette with "H" feel
      <svg viewBox="0 0 36 36" width="26" height="26" fill="none">
        <circle cx="18" cy="12" r="6" fill="#10b981"/>
        <path d="M5 32c0-7.18 5.82-13 13-13s13 5.82 13 13" stroke="#10b981" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Sora",
    accent: "#e2e8f0",
    logo: (
      // Sora / OpenAI — bloom/asterisk
      <svg viewBox="0 0 36 36" width="26" height="26" fill="none">
        <path d="M18 4v28M4 18h28M8.1 8.1l19.8 19.8M27.9 8.1L8.1 27.9" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="18" cy="18" r="3" fill="white"/>
      </svg>
    ),
  },
  {
    name: "Seedance 2.0",
    accent: "#2dd4bf",
    logo: (
      // Seedance — seed + wave (ByteDance style)
      <svg viewBox="0 0 36 36" width="26" height="26" fill="none">
        <circle cx="18" cy="13" r="6" fill="#2dd4bf"/>
        <path d="M4 24c3-5 7-5 10 0s7 5 10 0s7-5 10 0" stroke="#2dd4bf" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      </svg>
    ),
  },
  {
    name: "Nano Banana",
    accent: "#fbbf24",
    logo: (
      // Nano Banana — banana curve
      <svg viewBox="0 0 36 36" width="26" height="26" fill="none">
        <path
          d="M10 30 C8 18 10 8 18 6 C28 4 30 14 26 22"
          stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" fill="none"
        />
        <path
          d="M10 30 C16 28 22 24 26 22"
          stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" fill="none"
        />
        <circle cx="10" cy="30" r="2" fill="#fbbf24"/>
      </svg>
    ),
  },
];

// Row 1 = original order, Row 2 = reversed for opposite feel
const row1 = tools;
const row2 = [...tools].reverse();

function ToolChip({ tool }: { tool: Tool }) {
  return (
    <div
      className="flex items-center gap-3 px-4 py-2.5 rounded-full select-none flex-shrink-0"
      style={{
        background: "var(--surface-2)",
        border: "1px solid var(--border)",
      }}
    >
      <span
        className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
        style={{ background: `${tool.accent}18`, border: `1px solid ${tool.accent}33` }}
      >
        {tool.logo}
      </span>
      <span
        className="text-sm font-semibold whitespace-nowrap"
        style={{ color: "var(--text)" }}
      >
        {tool.name}
      </span>
    </div>
  );
}

export default function LogosBar() {
  return (
    <section
      className="py-14 md:py-16 border-y overflow-hidden"
      style={{ borderColor: "var(--border)", background: "var(--surface)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-10">
        <p
          className="text-center text-xs uppercase tracking-[0.22em] font-semibold"
          style={{ color: "var(--text-dim)" }}
        >
          As melhores IAs do mundo gerando seus vídeos
        </p>
      </div>

      {/* Row 1 — slides left */}
      <div className="overflow-hidden mb-3" style={{ maskImage: "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)" }}>
        <div className="flex gap-3 logos-marquee-left" style={{ width: "max-content" }}>
          {[...row1, ...row1].map((tool, i) => (
            <ToolChip key={i} tool={tool} />
          ))}
        </div>
      </div>

      {/* Row 2 — slides right */}
      <div className="overflow-hidden" style={{ maskImage: "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)" }}>
        <div className="flex gap-3 logos-marquee-right" style={{ width: "max-content" }}>
          {[...row2, ...row2].map((tool, i) => (
            <ToolChip key={i} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
}
