"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import GlowButton from "./ui/GlowButton";
import Logo from "./ui/Logo";

export default function Navbar() {
  const { scrollY } = useScroll();
  const bg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(10,10,10,0)", "rgba(10,10,10,0.7)"]
  );
  const blur = useTransform(scrollY, [0, 80], ["blur(0px)", "blur(14px)"]);
  const border = useTransform(
    scrollY,
    [0, 80],
    ["rgba(255,255,255,0)", "rgba(255,255,255,0.08)"]
  );

  return (
    <motion.header
      style={{ background: bg, backdropFilter: blur, borderBottomColor: border }}
      className="fixed top-0 inset-x-0 z-50 border-b"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 md:h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <Logo size={36} />
          <div className="hidden sm:block leading-tight pl-2 border-l border-white/15">
            <div className="text-[10px] uppercase tracking-[0.22em] text-orange-primary font-semibold">
              Diagnóstico de Escala
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8 text-sm text-white/70">
          <a href="#problema" className="hover:text-white transition">Problema</a>
          <a href="#solucao" className="hover:text-white transition">Solução</a>
          <a href="#metodologia" className="hover:text-white transition">Metodologia</a>
          <a href="#entregavel" className="hover:text-white transition">Entregável</a>
          <a href="#sobre" className="hover:text-white transition">Sobre</a>
        </nav>

        <GlowButton size="md">Solicitar Diagnóstico</GlowButton>
      </div>
    </motion.header>
  );
}
