"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

const WHATSAPP =
  "https://api.whatsapp.com/send?phone=558581486404&text=Olá! Tenho interesse no Diagnóstico de Escala Digital.";

type Props = {
  children: ReactNode;
  href?: string;
  className?: string;
  size?: "md" | "lg";
};

export default function GlowButton({ children, href = WHATSAPP, className = "", size = "md" }: Props) {
  const sizing = size === "lg" ? "px-10 py-5 text-base" : "px-8 py-4 text-sm";
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 320, damping: 20 }}
      className={`glow-btn ${sizing} ${className}`}
    >
      <span className="relative z-10 font-semibold tracking-wide">{children}</span>
    </motion.a>
  );
}
