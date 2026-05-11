import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Numeratti — Vídeos Profissionais com IA em até 48h",
  description:
    "Envie seu briefing e receba um vídeo profissional produzido com Inteligência Artificial em até 48 horas. Pronto para anúncios, redes sociais e landing pages.",
  metadataBase: new URL("https://numeratti.com.br"),
  keywords: ["vídeo com IA", "vídeo para anúncios", "vídeo inteligência artificial", "produção de vídeo rápida", "Numeratti"],
  openGraph: {
    title: "Numeratti — Vídeos Profissionais com IA em até 48h",
    description:
      "Envie seu briefing e receba um vídeo profissional produzido com IA em até 48 horas.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="antialiased" style={{ background: "#040406", color: "#F0F0F8" }}>
        {children}
      </body>
    </html>
  );
}
