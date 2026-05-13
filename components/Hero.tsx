"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import GlowButton from "./ui/GlowButton";
import Particles from "./ui/Particles";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const yContent = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden pt-28 md:pt-36 pb-24"
      style={{ background: "radial-gradient(ellipse at 70% 0%, #0D0B1A 0%, #040406 60%)" }}
    >
      {/* Dot grid */}
      <div className="dot-grid absolute inset-0" aria-hidden />

      {/* Glow orbs */}
      <div
        className="orb w-[700px] h-[700px] -top-60 -right-60"
        style={{ background: "radial-gradient(circle, rgba(129,140,248,0.22), transparent 60%)" }}
        aria-hidden
      />
      <div
        className="orb w-[500px] h-[500px] bottom-[-200px] -left-40"
        style={{ background: "radial-gradient(circle, rgba(129,140,248,0.12), transparent 60%)" }}
        aria-hidden
      />

      <Particles count={18} />

      <motion.div style={{ opacity, y: yContent }} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left column — copy */}
          <div className="lg:col-span-6">
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="show"
            >
              <span className="tag mb-8 inline-flex">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-2 animate-pulse" style={{ background: "var(--accent-2)" }} />
                Vídeos com IA · Entrega em prazo ágil
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="display text-white text-[40px] sm:text-5xl lg:text-[54px] xl:text-[62px]"
              style={{ lineHeight: 1.02, letterSpacing: "-0.035em" }}
            >
              Produção de Vídeos com{" "}
              <span style={{ color: "var(--accent)" }}>Inteligência Artificial</span>
              <br />
              para Anúncios que vendem.
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-7 text-lg md:text-xl leading-relaxed max-w-xl"
              style={{ color: "var(--text-muted)" }}
            >
              Envie seu briefing, a Numeratti produz um{" "}
              <span className="text-white font-semibold">vídeo profissional com IA</span> e entrega pronto para anúncios, redes sociais e landing pages.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <GlowButton size="lg">
                Quero meu vídeo →
              </GlowButton>
              <a
                href="#como-funciona"
                className="ghost-btn px-6 py-4 text-sm"
              >
                Como funciona
              </a>
            </motion.div>

            <motion.ul
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm"
              style={{ color: "var(--text-muted)" }}
            >
              {[
                "Roteiro + vídeo inclusos",
                "Legenda e narração IA",
              ].map((s) => (
                <li key={s} className="flex items-center gap-2">
                  <CheckIcon />
                  {s}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Right column — video */}
          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="lg:col-span-6 relative"
          >
            <VideoFrame />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function VideoFrame() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleSound = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  return (
    <div className="relative">
      {/* Wide ambient glow behind */}
      <div
        className="absolute -inset-6 rounded-3xl blur-3xl"
        style={{ background: "linear-gradient(135deg, rgba(129,140,248,0.4), rgba(129,140,248,0.25))", zIndex: 0 }}
        aria-hidden
      />

      {/* Outer pulsing ring */}
      <div
        className="absolute -inset-[3px] rounded-[20px]"
        style={{
          background: "linear-gradient(135deg, rgba(129,140,248,0.7), rgba(129,140,248,0.5))",
          animation: "video-ring-pulse 3s ease-in-out infinite",
          zIndex: 0,
        }}
        aria-hidden
      />

      {/* Frame */}
      <div
        className="relative rounded-[18px] overflow-hidden"
        style={{
          background: "#000",
          zIndex: 1,
        }}
      >
        {/* Video — 16:9, plays automatically, looped, no controls */}
        <video
          ref={videoRef}
          src="/hero-video.mp4?v=2"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          controls={false}
          disablePictureInPicture
          aria-label="Vídeo demo Numeratti IA"
          className="block w-full h-auto cursor-pointer"
          style={{ aspectRatio: "16 / 9" }}
          onClick={toggleSound}
        />

        {/* Sound toggle */}
        <button
          type="button"
          onClick={toggleSound}
          aria-label={muted ? "Ativar som" : "Desativar som"}
          className="absolute bottom-3 right-3 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
          style={{
            background: "rgba(0,0,0,0.55)",
            border: "1px solid rgba(255,255,255,0.15)",
            backdropFilter: "blur(8px)",
            zIndex: 2,
          }}
        >
          {muted ? <MutedIcon /> : <SoundIcon />}
        </button>
      </div>

      {/* Floating badges */}
      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-4 -left-4 px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 shadow-xl z-10"
        style={{
          background: "var(--surface-2)",
          border: "1px solid rgba(129,140,248,0.35)",
          color: "var(--text)",
          backdropFilter: "blur(12px)",
        }}
      >
        <span className="text-base">⚡</span>
        Entrega ágil
      </motion.div>

      <motion.div
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        className="absolute -top-4 -right-4 px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-xl z-10"
        style={{
          background: "rgba(129,140,248,0.12)",
          border: "1px solid rgba(129,140,248,0.3)",
          color: "var(--accent-2)",
          backdropFilter: "blur(12px)",
        }}
      >
        <span>✦</span>
        100% IA
      </motion.div>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "var(--accent-2)", flexShrink: 0 }}>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function MutedIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="white" />
      <line x1="23" y1="9" x2="17" y2="15" />
      <line x1="17" y1="9" x2="23" y2="15" />
    </svg>
  );
}

function SoundIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="white" />
      <path d="M15.54 8.46a5 5 0 010 7.07" />
      <path d="M19.07 4.93a10 10 0 010 14.14" />
    </svg>
  );
}
