"use client";

type Tool = { name: string; logo: React.ReactNode };

const tools: Tool[] = [
  {
    name: "VEO",
    logo: (
      // Google G — official four-color mark
      <svg viewBox="0 0 48 48" width="22" height="22">
        <path fill="#4285F4" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
        <path fill="#34A853" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.37-.76-2.84-.76-4.59s.27-3.22.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
        <path fill="#EA4335" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
      </svg>
    ),
  },
  {
    name: "ElevenLabs",
    logo: (
      // ElevenLabs — waveform bars (brand identity)
      <svg viewBox="0 0 32 32" width="22" height="22" fill="none">
        <rect x="2"  y="10" width="5" height="12" rx="2.5" fill="white"/>
        <rect x="9"  y="4"  width="5" height="24" rx="2.5" fill="white"/>
        <rect x="16" y="8"  width="5" height="16" rx="2.5" fill="white" opacity="0.8"/>
        <rect x="23" y="12" width="5" height="8"  rx="2.5" fill="white" opacity="0.5"/>
      </svg>
    ),
  },
  {
    name: "Runway",
    logo: (
      // Runway — film frame with R
      <svg viewBox="0 0 32 32" width="22" height="22" fill="none">
        <rect x="3" y="3" width="26" height="26" rx="5" stroke="white" strokeWidth="2.5"/>
        <path d="M10 10h7a3.5 3.5 0 010 7h-7z" fill="white"/>
        <path d="M10 17h5l5 5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Kling",
    logo: (
      // Kling — K mark
      <svg viewBox="0 0 32 32" width="22" height="22" fill="none">
        <path d="M8 5v22" stroke="white" strokeWidth="2.8" strokeLinecap="round"/>
        <path d="M8 16L20 5" stroke="white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 16L20 27" stroke="white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Pika",
    logo: (
      // Pika — lightning bolt
      <svg viewBox="0 0 32 32" width="22" height="22" fill="none">
        <path d="M19 3L6 18h12l-5 11L25 14H13L19 3z" fill="white"/>
      </svg>
    ),
  },
  {
    name: "HeyGen",
    logo: (
      // HeyGen — avatar silhouette
      <svg viewBox="0 0 32 32" width="22" height="22" fill="none">
        <circle cx="16" cy="11" r="5.5" fill="white"/>
        <path d="M4 28c0-6.63 5.37-12 12-12s12 5.37 12 12" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Sora",
    logo: (
      // Sora / OpenAI — asterisk bloom
      <svg viewBox="0 0 32 32" width="22" height="22" fill="none">
        <path d="M16 3v26M3 16h26M6.8 6.8l18.4 18.4M25.2 6.8L6.8 25.2" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="16" cy="16" r="2.5" fill="white"/>
      </svg>
    ),
  },
  {
    name: "Seedance",
    logo: (
      // Seedance — seed + wave
      <svg viewBox="0 0 32 32" width="22" height="22" fill="none">
        <circle cx="16" cy="11" r="5.5" fill="white"/>
        <path d="M3 22c3-4 6-4 8 0s5 4 8 0s6-4 8 0" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      </svg>
    ),
  },
  {
    name: "Nano Banana",
    logo: (
      // Nano Banana — banana curve
      <svg viewBox="0 0 32 32" width="22" height="22" fill="none">
        <path d="M9 27C7 17 9 7 16 5c9-2 13 7 10 15" stroke="white" strokeWidth="2.8" strokeLinecap="round" fill="none"/>
        <path d="M9 27c6-2 12-5 16-12" stroke="white" strokeWidth="2.8" strokeLinecap="round" fill="none"/>
        <circle cx="9" cy="27" r="2" fill="white"/>
      </svg>
    ),
  },
];

const row1 = tools;
const row2 = [...tools].reverse();

function ToolChip({ tool }: { tool: Tool }) {
  return (
    <div
      className="flex items-center gap-3 px-4 py-2.5 rounded-full select-none flex-shrink-0 transition-opacity duration-200 hover:opacity-80"
      style={{
        background: "var(--surface-2)",
        border: "1px solid var(--border)",
      }}
    >
      <span
        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
        style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)" }}
      >
        {tool.logo}
      </span>
      <span className="text-sm font-semibold whitespace-nowrap" style={{ color: "var(--text)" }}>
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
      <div
        className="overflow-hidden mb-3"
        style={{ maskImage: "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)" }}
      >
        <div className="flex gap-3 logos-marquee-left" style={{ width: "max-content" }}>
          {[...row1, ...row1].map((tool, i) => (
            <ToolChip key={i} tool={tool} />
          ))}
        </div>
      </div>

      {/* Row 2 — slides right */}
      <div
        className="overflow-hidden"
        style={{ maskImage: "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)" }}
      >
        <div className="flex gap-3 logos-marquee-right" style={{ width: "max-content" }}>
          {[...row2, ...row2].map((tool, i) => (
            <ToolChip key={i} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
}
