/**
 * Everest Consultoria - Home Page
 * Design: Corporate Brutalist Elegance
 * - Space Mono for headings (architectural feel)
 * - DM Sans for body text
 * - Wide letter-spacing on labels
 * - Dark hero with groove border, light content sections, dark footer
 * - Blue accents (#1a56db) on light sections
 */

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, ArrowDown, ChevronLeft, ChevronRight } from "lucide-react";
import { timelineData } from "@/data/timeline";
import { clients } from "@/data/clients";
import { useCountUp } from "@/hooks/useCountUp";
import { useInView } from "@/hooks/useInView";

const HERO_BG = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663056892984/mnIStCJLFIgwObUq.png";
const INVESTMENT_BG = "https://private-us-east-1.manuscdn.com/sessionFile/sqD0ckL0cmWOns3FFB409f/sandbox/ocsvl9It0hj5DZVPgiCBKY-img-1_1770784123000_na1fn_aW52ZXN0bWVudC1iZw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvc3FEMGNrTDBjbVdPbnMzRkZCNDA5Zi9zYW5kYm94L29jc3ZsOUl0MGhqNURaVlBnaUNCS1ktaW1nLTFfMTc3MDc4NDEyMzAwMF9uYTFmbl9hVzUyWlhOMGJXVnVkQzFpWncuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Crqb54qFl~TFyIAtFsW6wKuSZ3EZ4xh1cObtiGyQmLNrGDeuApduC3ouWCUvvZBbTW5czKJBWXtGX6NWuB8p4pBkburUD8UORcxxTiYJ7ai9~u3eTKWRrZy6zTWOHLfcwIWkOyzNR194kdqs5Ym71I9O-8FkDZtvoIBkCF9XOkSVTWfd0KNqkX4uxKlXiZANJPAcXbBapgFDPflr3ZlbFdK1QQhFSUYGbkWkM3wI0HVkPuK1wIU7ZDc4Bof7Z6poeSK7LAdxvHihYFv2kUf8yniC2oVvelUruzRP49JZd84oktOghc4s3RFDW3Pukc4YcfuFJK2b8VAwSDkZLoI8nQ__";

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
    { label: "Investimentos", href: "#investimentos" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span
            className={`font-mono text-lg font-bold tracking-tight px-3 py-1 border-2 transition-colors duration-300 ${
              scrolled
                ? "text-gray-900 border-gray-900"
                : "text-white border-white"
            }`}
          >
            everest.co
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wider uppercase transition-colors duration-300 ${
                scrolled
                  ? "text-gray-700 hover:text-blue-700"
                  : "text-white/90 hover:text-white"
              }`}
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
          <span className={`w-6 h-0.5 transition-all ${scrolled ? "bg-gray-900" : "bg-white"} ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 transition-all ${scrolled ? "bg-gray-900" : "bg-white"} ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 transition-all ${scrolled ? "bg-gray-900" : "bg-white"} ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium tracking-wider uppercase text-gray-700 hover:text-blue-700"
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
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${HERO_BG}")` }}
      >
        {/* Dark overlay with greenish tint */}
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(31, 41, 5, 0.65)" }} />
      </div>

      {/* Border frame */}
      <div
        className="absolute inset-4 md:inset-8 pointer-events-none"
        style={{ border: "3px groove rgba(23, 7, 7, 0.6)" }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center text-white px-4"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <motion.p
          variants={fadeUp}
          className="text-sm md:text-base tracking-[0.3em] uppercase mb-6 text-gray-300 font-extrabold"
        >
          Desde 1987
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="font-mono text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
        >
          Negócios Imobiliários
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="text-lg md:text-xl text-gray-300 mb-10"
        >
          Com os melhores nomes do mercado
        </motion.p>
        <motion.div variants={fadeUp} className="flex items-center justify-center gap-4">
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
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
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
    <section id="sobre" className="py-24 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left column */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="font-mono text-sm tracking-[0.3em] uppercase text-gray-400 mb-4">
              EVEREST.CO
            </motion.p>
            <motion.div variants={fadeUp} ref={yearsRef} className="mb-8">
              <span className="font-mono text-7xl md:text-8xl font-bold text-gray-900">{yearsCount}</span>
              <span className="text-2xl text-gray-500 ml-2">anos</span>
            </motion.div>
            <motion.p variants={fadeUp} className="text-lg text-gray-600 leading-relaxed">
              Acompanhando o desenvolvimento da cidade de São Paulo, sempre com o viés de buscar terrenos em novas regiões.
            </motion.p>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="font-mono text-3xl font-bold text-gray-900 mb-6">
              Nosso Serviço
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed mb-6">
              Representamos proprietários ou compradores, organizando a oferta no mercado conforme produto, demanda, legalização, informações urbanísticas, legislação, vocação do imóvel e potencial construtivo.
            </motion.p>
            <motion.div variants={fadeUp} className="space-y-4 mb-8">
              <p className="text-gray-600 leading-relaxed">
                Profundo conhecimento da legislação, das novidades de movimentos urbanos e dispositivos de desenvolvimento da cidade como{" "}
                <span className="text-blue-700 font-medium">operações urbanas</span> e{" "}
                <span className="text-blue-700 font-medium">áreas incentivadas</span>.
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h3 className="text-sm tracking-[0.2em] uppercase text-gray-400 font-medium mb-3">
                Relacionamento com
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Incorporadoras, construtoras, fundos de investimentos, bancos, investidores institucionais e privados, gestoras, family offices e empresas de vendas.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-700 mt-2 shrink-0" />
                <p className="text-gray-600">Contrato de exclusividade</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-700 mt-2 shrink-0" />
                <p className="text-gray-600">Compradores</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-700 mt-2 shrink-0" />
                <p className="text-gray-600">Vendedores</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-700 mt-2 shrink-0" />
                <p className="text-gray-600">Estudo profundo do imóvel</p>
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
        <span className="font-mono text-4xl font-bold text-blue-700">{entry.year}</span>
        <div className="h-0.5 bg-blue-700 mt-2" />
      </div>

      {/* Card */}
      <div className="bg-white border border-gray-200 p-6 h-[400px] flex flex-col shadow-sm hover:shadow-md transition-shadow">
        <p className="text-xs text-gray-400 font-mono mb-2">{entry.period}</p>
        <h3 className="font-mono text-lg font-bold text-gray-900 mb-3">{entry.title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1 overflow-hidden">
          {entry.description}
        </p>
        <div className="border-t border-gray-100 pt-4">
          <p className="text-xs text-gray-500 leading-relaxed mb-3 line-clamp-3">{entry.details}</p>
          {entry.area && (
            <div className="mb-3">
              <span className="text-xs tracking-wider uppercase text-gray-400">Área</span>
              <p className="font-mono text-sm font-bold text-gray-900">{entry.area}</p>
            </div>
          )}
          <div className="flex flex-wrap gap-1.5">
            {entry.companies.map((company) => (
              <span
                key={company}
                className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded"
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
    <section id="trajetoria" className="py-24 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={stagger}
          className="text-center mb-12"
        >
          <motion.p variants={fadeUp} className="text-sm tracking-[0.2em] uppercase text-blue-700 font-medium mb-4">
            1987 — 2025
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-mono text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nossa Trajetória
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-600 max-w-2xl mx-auto">
            Principais negócios realizados ao longo de quase quatro décadas no mercado imobiliário.
          </motion.p>
        </motion.div>

        {/* Navigation arrows */}
        <div className="flex justify-end gap-2 mb-6">
          <button
            onClick={() => scroll("left")}
            className="p-2 border border-gray-300 hover:border-blue-700 hover:text-blue-700 transition-colors rounded"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 border border-gray-300 hover:border-blue-700 hover:text-blue-700 transition-colors rounded"
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

        <p className="text-center text-sm text-gray-400 mt-4">
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
    <section id="clientes" className="py-24 bg-white border-y border-gray-200" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} className="text-sm tracking-[0.2em] uppercase text-blue-700 font-medium mb-4">
            Clientes
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-mono text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Quem Confia em Nós
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-600 max-w-2xl mx-auto">
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
              className="flex items-center justify-center p-6 bg-gray-50 rounded border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all h-20"
            >
              <span className="font-mono text-sm font-bold text-gray-500 tracking-wider uppercase">
                {client.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Investimentos Section ─── */
function InvestimentosSection() {
  const { count: areaCount, ref: areaRef } = useCountUp(327000, 2500);
  const { count: partCount, ref: partRef } = useCountUp(20, 2000);
  const { ref: sectionRef, isInView } = useInView(0.2);

  return (
    <section id="investimentos" className="py-24 bg-gray-900 text-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="text-sm tracking-[0.2em] uppercase text-blue-400 font-medium mb-4">
              Investimentos
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-mono text-3xl md:text-4xl font-bold mb-6">
              Aconcágua Empreendimentos
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-300 leading-relaxed mb-6">
              Através da Aconcágua Empreendimentos, investimos em 20% de imóvel de 327.000m² adquirido da Jive Investments.
            </motion.p>
            <motion.p variants={fadeUp} className="text-gray-400 leading-relaxed">
              Posteriormente vendemos nossa participação para os sócios, consolidando nossa atuação também como investidores no mercado imobiliário.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={stagger}
            className="grid grid-cols-2 gap-6"
          >
            <motion.div
              variants={fadeUp}
              ref={areaRef}
              className="bg-gray-800/50 border border-gray-700 p-8 text-center rounded"
            >
              <span className="font-mono text-4xl md:text-5xl font-bold text-white">
                {areaCount.toLocaleString("pt-BR")}
              </span>
              <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mt-3">
                M² de Terreno
              </p>
            </motion.div>
            <motion.div
              variants={fadeUp}
              ref={partRef}
              className="bg-gray-800/50 border border-gray-700 p-8 text-center rounded"
            >
              <span className="font-mono text-4xl md:text-5xl font-bold text-blue-400">
                {partCount}%
              </span>
              <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mt-3">
                Participação
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Contato Section ─── */
function ContatoSection() {
  const { ref: sectionRef, isInView } = useInView(0.2);

  return (
    <section id="contato" className="py-24 bg-white" ref={sectionRef}>
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-sm tracking-[0.2em] uppercase text-blue-700 font-medium mb-4">
            Contato
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-mono text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Vamos Conversar
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-600 mb-10">
            Entre em contato para discutir oportunidades de negócios imobiliários.
          </motion.p>
          <motion.a
            variants={fadeUp}
            href="mailto:robertomiozzo@hotmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-700 text-white text-sm tracking-[0.15em] uppercase font-medium hover:bg-blue-800 transition-colors rounded"
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
    <footer className="bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <span className="font-mono text-lg font-bold tracking-tight px-3 py-1 border-2 border-white/30">
              everest.co
            </span>
          </div>

          <div className="flex items-center gap-6">
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
          </div>

          <p className="text-sm text-gray-500">
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
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SobreSection />
      <TrajetoriaSection />
      <ClientesSection />
      <InvestimentosSection />
      <ContatoSection />
      <Footer />
    </div>
  );
}
