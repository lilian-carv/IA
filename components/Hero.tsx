"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import GlowButton from "./ui/GlowButton";
import Particles from "./ui/Particles";
import { currentYear } from "@/lib/year";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yA = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const yB = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-premium-dark noise pt-28 md:pt-36 pb-32"
    >
      {/* Layered glow orbs */}
      <motion.div
        style={{ y: yA }}
        className="orb w-[640px] h-[640px] -top-40 -right-40"
        aria-hidden
      >
        <div className="w-full h-full rounded-full" style={{ background: "radial-gradient(circle, rgba(232,116,12,0.45), transparent 60%)" }} />
      </motion.div>
      <motion.div
        style={{ y: yB }}
        className="orb w-[520px] h-[520px] bottom-[-200px] left-[-160px]"
        aria-hidden
      >
        <div className="w-full h-full rounded-full" style={{ background: "radial-gradient(circle, rgba(232,116,12,0.28), transparent 60%)" }} />
      </motion.div>

      <div className="grid-bg absolute inset-0 opacity-60" />
      <Particles count={22} />

      {/* Decorative giant number */}
      <motion.div
        style={{ opacity }}
        aria-hidden
        className="deco-num absolute -right-10 md:right-10 top-24 text-[260px] md:text-[420px] text-white/[0.03] select-none"
      >
        {currentYear()}
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-primary/30 bg-orange-primary/10 text-orange-light text-xs font-semibold tracking-[0.18em] uppercase mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-orange-primary animate-pulse" />
              Decisões de mídia baseadas em dados
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="display text-white text-[44px] sm:text-6xl lg:text-7xl xl:text-[88px] leading-[0.95] tracking-tight max-w-5xl"
            >
              Antes de investir em tráfego pago,
              <br />
              descubra se sua empresa está{" "}
              <span className="relative inline-block">
                <span className="kw">pronta para escalar</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-0 right-0 -bottom-2 h-[3px] bg-orange-primary origin-left"
                />
              </span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-8 text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed"
            >
              Em {currentYear()}, o custo de mídia subiu <span className="text-white font-semibold">12%</span>. A margem de erro é quase zero. O{" "}
              <span className="text-white font-semibold">Diagnóstico de Escala Digital</span> audita os 5 pilares críticos do seu negócio e entrega um Score de Prontidão + Roadmap de 30 dias.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-10 flex flex-wrap items-center gap-5"
            >
              <GlowButton size="lg">
                Solicitar Meu Diagnóstico
                <span className="ml-1">→</span>
              </GlowButton>
              <a href="#metodologia" className="text-white/70 hover:text-white text-sm font-medium underline-offset-4 hover:underline transition">
                Como funciona →
              </a>
            </motion.div>

            <motion.ul
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/55"
            >
              {[
                "Entrega em até 5 dias úteis",
                "Mais de 40 pontos auditados",
                "Roadmap com responsáveis",
              ].map((s) => (
                <li key={s} className="flex items-center gap-2">
                  <CheckIcon /> {s}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Floating mini-score card */}
          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="lg:col-span-4 relative"
          >
            <FloatingScoreCard />
          </motion.div>
        </div>
      </motion.div>

    </section>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E8740C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function FloatingScoreCard() {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="glass p-6 max-w-sm mx-auto relative"
    >
      <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-orange-primary text-white text-[10px] uppercase tracking-[0.15em] font-bold shadow-lg">
        Preview
      </div>
      <div className="text-[10px] uppercase tracking-[0.22em] text-white/50 font-semibold">
        Score de Prontidão
      </div>
      <div className="display text-white text-6xl mt-2">
        57<span className="text-white/30 text-3xl">/100</span>
      </div>
      <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-semibold">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
        Ajustes Necessários
      </div>

      <div className="mt-6 space-y-3">
        {[
          { l: "Oferta", v: 62 },
          { l: "Funil", v: 45 },
          { l: "Dados", v: 38 },
        ].map((b, i) => (
          <div key={b.l}>
            <div className="flex justify-between text-[11px] text-white/60 mb-1">
              <span>{b.l}</span>
              <span>{b.v}</span>
            </div>
            <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${b.v}%` }}
                transition={{ delay: 1 + i * 0.2, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                className="h-full bg-gradient-to-r from-[#FFB060] to-[#E8740C]"
                style={{ boxShadow: "0 0 12px rgba(232,116,12,0.6)" }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
