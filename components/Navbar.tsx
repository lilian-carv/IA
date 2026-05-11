"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import GlowButton from "./ui/GlowButton";
import Logo from "./ui/Logo";

const links = [
  { label: "O que é", href: "#o-que-e" },
  { label: "Para quem", href: "#para-quem" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Preços", href: "#precos" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 80], ["rgba(4,4,6,0)", "rgba(4,4,6,0.88)"]);
  const blur = useTransform(scrollY, [0, 80], ["blur(0px)", "blur(18px)"]);
  const border = useTransform(scrollY, [0, 80], ["rgba(255,255,255,0)", "rgba(255,255,255,0.07)"]);

  return (
    <motion.header
      style={{ background: bg, backdropFilter: blur, borderBottomColor: border }}
      className="fixed top-0 inset-x-0 z-50 border-b"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 md:h-20 flex items-center justify-between">
        <a href="#" className="flex items-center" aria-label="Numeratti">
          <Logo size={34} />
        </a>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium" style={{ color: "var(--text-muted)" }}>
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="transition-colors duration-200 hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>

        <GlowButton size="sm">Quero meu vídeo →</GlowButton>
      </div>
    </motion.header>
  );
}
