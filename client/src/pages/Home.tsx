/**
 * Everest Consultoria - Home Page
 * Design: Dark Theme Corporate
 * - Space Mono for headings
 * - DM Sans for body text
 * - Full dark theme throughout
 * - Hero: background image only (no text overlay, image already has watermark)
 * - Investimentos section hidden
 */

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowDown, ChevronLeft, ChevronRight } from "lucide-react";
import { timelineData } from "@/data/timeline";
import { clients } from "@/data/clients";
import { useCountUp } from "@/hooks/useCountUp";
import { useInView } from "@/hooks/useInView";

const HERO_BG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663056892984/mnIStCJLFIgwObUq.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0, 0, 0.2, 1] as const } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } }
};

/* ─── Navigation ─── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Sobre", href: "#sobre" },
    { label: "Trajetória", href: "#trajetoria" },
    { label: "Clientes", href: "#clientes" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-950/95 backdrop-blur-md shadow-sm border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="font-mono text-lg font-bold tracking-tight px-3 py-1 border-2 text-white border-white/50">
            everest.co
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wider uppercase transition-colors duration-300 text-white/80 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className={`w-6 h-0.5 bg-white transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-white transition-all ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-white transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-gray-950 border-t border-gray-800 shadow-lg">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium tracking-wider uppercase text-white/80 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

/* ─── Hero Section ─── */
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end justify-center pb-16">
      {/* Background image - already contains the watermark/branding */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${HERO_BG}")` }}
      >
        {/* Subtle dark overlay to ensure readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Border frame */}
      <div
        className="absolute inset-4 md:inset-8 pointer-events-none"
        style={{ border: "3px groove rgba(23, 7, 7, 0.6)" }}
      />

      {/* Minimal CTA buttons at bottom */}
      <motion.div
        className="relative z-10 flex items-center justify-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.7 }}
      >
        <a
          href="#trajetoria"
          className="px-6 py-3 bg-gray-900/80 text-white text-sm tracking-[0.2em] uppercase border border-white/30 hover:bg-white hover:text-gray-900 transition-all duration-300"
        >
          Nossa Trajetória
        </a>
        <a
          href="#contato"
          className="px-6 py-3 bg-white/10 text-white text-sm tracking-[0.2em] uppercase border border-white/50 hover:bg-white hover:text-gray-900 transition-all duration-300"
        >
          Contato
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown className="w-5 h-5 text-white/60" />
      </motion.div>
    </section>
  );
}

/* ─── Sobre Section ─── */
function SobreSection() {
  const { count: yearsCount, ref: yearsRef } = useCountUp(38, 2000);
  const { ref: sectionRef, isInView } = useInView(0.2);

  return (
    <section id="sobre" className="py-24 bg-gray-950" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left column */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="font-mono text-sm tracking-[0.3em] uppercase text-gray-500 mb-4">
              EVEREST.CO
            </motion.p>
            <motion.div variants={fadeUp} ref={yearsRef} className="mb-8">
              <span className="font-mono text-7xl md:text-8xl font-bold text-white">{yearsCount}</span>
              <span className="text-2xl text-gray-500 ml-2">anos</span>
            </motion.div>
            <motion.p variants={fadeUp} className="text-lg text-gray-400 leading-relaxed">
              Acompanhando o desenvolvimento da cidade de São Paulo, sempre com o viés de buscar terrenos em novas regiões.
            </motion.p>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="font-mono text-3xl font-bold text-white mb-6">
              Nosso Serviço
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-400 leading-relaxed mb-6">
              Representamos proprietários ou compradores, organizando a oferta no mercado conforme produto, demanda, legalização, informações urbanísticas, legislação, vocação do imóvel e potencial construtivo.
            </motion.p>
            <motion.div variants={fadeUp} className="space-y-4 mb-8">
              <p className="text-gray-400 leading-relaxed">
                Profundo conhecimento da legislação, das novidades de movimentos urbanos e dispositivos de desenvolvimento da cidade como{" "}
                <span className="text-blue-400 font-medium">operações urbanas</span> e{" "}
                <span className="text-blue-400 font-medium">áreas incentivadas</span>.
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h3 className="text-sm tracking-[0.2em] uppercase text-gray-500 font-medium mb-3">
                Relacionamento com
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Incorporadoras, construtoras, fundos de investimentos, bancos, investidores institucionais e privados, gestoras, family offices e empresas de vendas.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                <p className="text-gray-400">Contrato de exclusividade</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                <p className="text-gray-400">Compradores</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                <p className="text-gray-400">Vendedores</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0" />
                <p className="text-gray-400">Estudo profundo do imóvel</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Timeline Card ─── */
function TimelineCard({ entry, index }: { entry: typeof timelineData[0]; index: number }) {
  return (
    <div className="min-w-[320px] max-w-[360px] shrink-0 snap-start">
      {/* Year header */}
      <div className="mb-4">
        <span className="font-mono text-4xl font-bold text-blue-400">{entry.year}</span>
        <div className="h-0.5 bg-blue-400 mt-2" />
      </div>

      {/* Card */}
      <div className="bg-gray-900 border border-gray-800 p-6 h-[400px] flex flex-col hover:border-gray-700 transition-colors">
        <p className="text-xs text-gray-500 font-mono mb-2">{entry.period}</p>
        <h3 className="font-mono text-lg font-bold text-white mb-3">{entry.title}</h3>
        <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-1 overflow-hidden">
          {entry.description}
        </p>
        <div className="border-t border-gray-800 pt-4">
          <p className="text-xs text-gray-500 leading-relaxed mb-3 line-clamp-3">{entry.details}</p>
          {entry.area && (
            <div className="mb-3">
              <span className="text-xs tracking-wider uppercase text-gray-500">Área</span>
              <p className="font-mono text-sm font-bold text-white">{entry.area}</p>
            </div>
          )}
          <div className="flex flex-wrap gap-1.5">
            {entry.companies.map((company) => (
              <span
                key={company}
                className="text-xs px-2 py-1 bg-gray-800 text-gray-400 rounded"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Trajetória Section ─── */
function TrajetoriaSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { ref: sectionRef, isInView } = useInView(0.1);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 380;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="trajetoria" className="py-24 bg-gray-900" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={stagger}
          className="text-center mb-12"
        >
          <motion.p variants={fadeUp} className="text-sm tracking-[0.2em] uppercase text-blue-400 font-medium mb-4">
            1987 — 2025
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-mono text-4xl md:text-5xl font-bold text-white mb-4">
            Nossa Trajetória
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-400 max-w-2xl mx-auto">
            Principais negócios realizados ao longo de quase quatro décadas no mercado imobiliário.
          </motion.p>
        </motion.div>

        {/* Navigation arrows */}
        <div className="flex justify-end gap-2 mb-6">
          <button
            onClick={() => scroll("left")}
            className="p-2 border border-gray-700 text-gray-400 hover:border-blue-400 hover:text-blue-400 transition-colors rounded"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 border border-gray-700 text-gray-400 hover:border-blue-400 hover:text-blue-400 transition-colors rounded"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable timeline */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory timeline-scroll"
          style={{ scrollbarWidth: "thin" }}
        >
          {timelineData.map((entry, index) => (
            <TimelineCard key={`${entry.year}-${index}`} entry={entry} index={index} />
          ))}
        </div>

        <p className="text-center text-sm text-gray-600 mt-4">
          ← Arraste para ver mais →
        </p>
      </div>
    </section>
  );
}

/* ─── Clientes Section ─── */
function ClientesSection() {
  const { ref: sectionRef, isInView } = useInView(0.2);

  return (
    <section id="clientes" className="py-24 bg-gray-950 border-y border-gray-800" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} className="text-sm tracking-[0.2em] uppercase text-blue-400 font-medium mb-4">
            Clientes
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-mono text-4xl md:text-5xl font-bold text-white mb-4">
            Quem Confia em Nós
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-400 max-w-2xl mx-auto">
            Ao longo de quase quatro décadas, construímos relacionamentos sólidos com as principais empresas do mercado imobiliário brasileiro.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={stagger}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center"
        >
          {clients.map((client) => (
            <motion.div
              key={client.name}
              variants={fadeUp}
              className="flex items-center justify-center p-6 bg-gray-900 rounded border border-gray-800 hover:border-blue-400/30 hover:bg-gray-900/80 transition-all h-20"
            >
              <span className="font-mono text-sm font-bold text-gray-400 tracking-wider uppercase">
                {client.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Contato Section ─── */
function ContatoSection() {
  const { ref: sectionRef, isInView } = useInView(0.2);

  return (
    <section id="contato" className="py-24 bg-gray-900" ref={sectionRef}>
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-sm tracking-[0.2em] uppercase text-blue-400 font-medium mb-4">
            Contato
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-mono text-4xl md:text-5xl font-bold text-white mb-6">
            Vamos Conversar
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-400 mb-10">
            Entre em contato para discutir oportunidades de negócios imobiliários.
          </motion.p>
          <motion.a
            variants={fadeUp}
            href="mailto:robertomiozzo@hotmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white text-sm tracking-[0.15em] uppercase font-medium hover:bg-blue-700 transition-colors rounded"
          >
            <Mail className="w-5 h-5" />
            robertomiozzo@hotmail.com
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top row: Logo + Navigation + Contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo & tagline */}
          <div>
            <span className="font-mono text-xl font-bold tracking-tight px-4 py-2 border-2 border-white/30 inline-block mb-4">
              everest.co
            </span>
            <p className="text-sm text-gray-500 leading-relaxed mt-4">
              Negócios imobiliários com os melhores nomes do mercado, desde 1987.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm tracking-[0.2em] uppercase text-gray-400 font-medium mb-4">
              Navegação
            </h4>
            <nav className="flex flex-col gap-3">
              <a href="#sobre" className="text-sm text-gray-500 hover:text-white transition-colors">Sobre</a>
              <a href="#trajetoria" className="text-sm text-gray-500 hover:text-white transition-colors">Trajetória</a>
              <a href="#clientes" className="text-sm text-gray-500 hover:text-white transition-colors">Clientes</a>
              <a href="#contato" className="text-sm text-gray-500 hover:text-white transition-colors">Contato</a>
            </nav>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-sm tracking-[0.2em] uppercase text-gray-400 font-medium mb-4">
              Contato
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:robertomiozzo@hotmail.com"
                className="flex items-center gap-3 text-sm text-gray-500 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" />
                robertomiozzo@hotmail.com
              </a>
              <a
                href="https://wa.me/+5511961918379"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-gray-500 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" />
                +55 (11) 96191-8379
              </a>
              <div className="flex items-start gap-3 text-sm text-gray-500">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>São Paulo, SP — Brasil</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* WhatsApp button */}
          <a
            href="https://wa.me/+5511961918379"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white text-sm tracking-wider uppercase font-medium transition-colors rounded"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </a>

          <p className="text-sm text-gray-600">
            © 2026 Everest Consultoria. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─── Main Page ─── */
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />
      <HeroSection />
      <SobreSection />
      <TrajetoriaSection />
      <ClientesSection />
      {/* Investimentos section hidden per request */}
      <ContatoSection />
      <Footer />
    </div>
  );
}
