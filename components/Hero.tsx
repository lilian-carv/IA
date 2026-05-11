"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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
        style={{ background: "radial-gradient(circle, rgba(124,92,252,0.22), transparent 60%)" }}
        aria-hidden
      />
      <div
        className="orb w-[500px] h-[500px] bottom-[-200px] -left-40"
        style={{ background: "radial-gradient(circle, rgba(34,211,238,0.12), transparent 60%)" }}
        aria-hidden
      />

      <Particles count={18} />

      <motion.div style={{ opacity, y: yContent }} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left column — copy */}
          <div className="lg:col-span-6 xl:col-span-7">
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="show"
            >
              <span className="tag mb-8 inline-flex">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-2 animate-pulse" style={{ background: "var(--accent-2)" }} />
                Vídeos com IA · Entrega em até 48h
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="display text-white text-[42px] sm:text-6xl lg:text-[64px] xl:text-[76px]"
              style={{ lineHeight: 0.96, letterSpacing: "-0.04em" }}
            >
              Vídeos que{" "}
              <span className="grad-text">vendem.</span>
              <br />
              Prontos em{" "}
              <span style={{ color: "var(--accent-2)" }}>48 horas.</span>
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
                "Briefing simples, sem reunião",
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
            className="lg:col-span-6 xl:col-span-5 relative"
          >
            <VideoFrame />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function VideoFrame() {
  return (
    <div className="relative">
      {/* Glow behind the video */}
      <div
        className="absolute inset-0 rounded-2xl blur-2xl scale-95"
        style={{ background: "linear-gradient(135deg, rgba(124,92,252,0.35), rgba(34,211,238,0.2))" }}
        aria-hidden
      />
      {/* Frame */}
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{
          border: "1px solid rgba(124,92,252,0.3)",
          background: "var(--surface)",
          boxShadow: "0 0 60px rgba(124,92,252,0.2), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        {/* Fake browser bar */}
        <div
          className="flex items-center gap-1.5 px-4 py-3"
          style={{ background: "var(--surface-2)", borderBottom: "1px solid var(--border)" }}
        >
          {["#EF4444", "#F59E0B", "#22C55E"].map((c) => (
            <span key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
          ))}
          <div
            className="ml-3 flex-1 rounded px-3 py-1 text-[11px] text-center"
            style={{ background: "var(--bg)", color: "var(--text-dim)" }}
          >
            numeratti.com.br · vídeo demo
          </div>
        </div>

        {/* Video */}
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <iframe
            src="https://drive.google.com/file/d/1VCqXFV1X0GL7hJBYB0mdXQkmu0rTSvA2/preview"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Vídeo demo Numeratti IA"
            className="absolute inset-0 w-full h-full"
            style={{ border: "none" }}
          />
        </div>
      </div>

      {/* Floating badge */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-5 -left-5 px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 shadow-xl"
        style={{
          background: "var(--surface-2)",
          border: "1px solid var(--border-hover)",
          color: "var(--text)",
        }}
      >
        <span className="text-base">⚡</span>
        Entregue em 48h
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
