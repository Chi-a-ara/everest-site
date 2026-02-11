export interface TimelineEntry {
  year: string;
  period: string;
  title: string;
  description: string;
  details: string;
  area?: string;
  companies: string[];
}

export const timelineData: TimelineEntry[] = [
  {
    year: "1987",
    period: "1987-1993",
    title: "Início na Chácara Klabin",
    description: "O início de uma trajetória de sucesso no mercado imobiliário paulistano. Intermediamos terrenos para as principais incorporadoras da época, estabelecendo relações que perduram até hoje.",
    details: "Terrenos intermediados para Cyrela, Fenan, Spayshman, Barbara Engenharia, Construtora RFM, OAS e Encol na região da Chácara Klabin, um dos bairros mais valorizados de São Paulo.",
    companies: ["Cyrela", "Fenan", "Spayshman", "Barbara Engenharia", "RFM", "OAS", "Encol"]
  },
  {
    year: "1994",
    period: "1994",
    title: "Business Center Vila Olímpia",
    description: "Atuação estratégica na captação de investidores para um dos primeiros centros empresariais da região que se tornaria o coração financeiro de São Paulo.",
    details: "Atração de investidores para 2 andares do condomínio Inpar, antecipando o boom imobiliário da Vila Olímpia.",
    companies: ["Inpar"]
  },
  {
    year: "1996",
    period: "1996",
    title: "Chácara Santo Antonio",
    description: "Expansão para novas regiões da cidade, identificando oportunidades em áreas com alto potencial de valorização.",
    details: "Terreno de 1.000m² na Rua Alexandre Dumas para Barbara Engenharia.",
    area: "1.000m²",
    companies: ["Barbara Engenharia"]
  },
  {
    year: "1999",
    period: "1999",
    title: "Les Jardins - Alto dos Pinheiros",
    description: "Um dos maiores empreendimentos residenciais de alto padrão da época, em parceria com duas das maiores incorporadoras do país.",
    details: "Empreendimento residencial de luxo com 22.000m² de terreno, desenvolvido em parceria entre Cyrela e Tecnisa no nobre bairro do Alto dos Pinheiros.",
    area: "22.000m²",
    companies: ["Cyrela", "Tecnisa"]
  },
  {
    year: "2000",
    period: "2000",
    title: "W Torre - Ogilvy & Mather",
    description: "Intermediação de terreno para desenvolvimento corporativo que abrigaria uma das maiores agências de publicidade do mundo.",
    details: "Terreno de 5.000m² para a W Torre, destinado à sede da Ogilvy & Mather no Brasil.",
    area: "5.000m²",
    companies: ["W Torre"]
  },
  {
    year: "2001",
    period: "2001",
    title: "Aquarelle - Vila Andrade",
    description: "Identificação de oportunidade na região do Shopping Jardim Sul, antecipando o crescimento da zona sul.",
    details: "Terreno de 12.000m² na Vila Andrade para a MAC Engenharia, que desenvolveu o Edifício Aquarelle.",
    area: "12.000m²",
    companies: ["MAC Engenharia"]
  },
  {
    year: "2002",
    period: "2002-2005",
    title: "Operação Urbana Água Branca",
    description: "Profundo conhecimento da legislação urbanística permitiu identificar oportunidades únicas na Operação Urbana, resultando em múltiplos negócios de grande porte.",
    details: "Rail (11.800m²) com MAC Engenharia e Agra Incorporadora. Sphera (5.500m²) da Klabin Segall. Varanda Pompeia (4.350m²) e Pateo Pompeia da MAC Engenharia com Cyrela.",
    area: "11.800m² + 5.500m² + 4.350m²",
    companies: ["MAC Engenharia", "Agra", "Klabin Segall", "Cyrela"]
  },
  {
    year: "2007",
    period: "2007",
    title: "Fábrica Souza Cruz - Brás",
    description: "Operação complexa envolvendo antiga área industrial, em parceria com a CBRE, resultando em venda recorde em apenas 60 dias.",
    details: "Antiga fábrica da Souza Cruz na Rua da Alegria, com 11.400m² de terreno e 19.000m² de área construída. Vendido para Bracor em 60 dias com lucro expressivo. Desenvolvido o Call Center da Atento.",
    area: "11.400m² terreno / 19.000m² construído",
    companies: ["CBRE", "Bracor"]
  },
  {
    year: "2007",
    period: "2007",
    title: "Edifício Oceano - Guarujá",
    description: "Articulação entre duas grandes incorporadoras para desenvolvimento de empreendimento de frente para o mar.",
    details: "Intermediação entre Klabin Segall e Rossi Residencial para terreno da família Choffi, com 5.000m² de frente ao mar na Praia das Astúrias.",
    area: "5.000m²",
    companies: ["Klabin Segall", "Rossi"]
  },
  {
    year: "2010",
    period: "2010-2018",
    title: "Jive Investments",
    description: "Oito anos de exclusividade com a gestora, iniciando e consolidando sua área imobiliária.",
    details: "Precificação de imóveis da carteira de crédito e novas aquisições. Prédios no Itaim e Alto da Lapa para fundo de retrofit. Relacionamento que demonstra confiança e resultados consistentes.",
    companies: ["Jive Investments"]
  },
  {
    year: "2014",
    period: "2014",
    title: "Colégio Pitágoras - Belo Horizonte",
    description: "Expansão nacional com operação em Belo Horizonte para o setor educacional.",
    details: "Terreno de 7.000m² da Kroton Educação no bairro Cidade Jardim para a Construtora Garcia.",
    area: "7.000m²",
    companies: ["Kroton/Cogna", "Construtora Garcia"]
  },
  {
    year: "2016",
    period: "2016",
    title: "Programa Mais Médicos",
    description: "Agilidade e eficiência: contratos assinados em apenas 11 dias para atender prazo de edital federal.",
    details: "Contratados pela Cogna Educação para compra de terrenos em 7 cidades: Codó, Bacabal, Açailândia e Imperatriz (MA), Itapipoca, Quixadá e Canindé (CE).",
    companies: ["Cogna Educação"]
  },
  {
    year: "2022",
    period: "2022",
    title: "Hotel Praia Ipanema - Rio de Janeiro",
    description: "Atuação no mercado hoteleiro carioca, em operação que precedeu aquisição corporativa.",
    details: "Venda do Hotel Praia Ipanema para Bait Incorporadora, posteriormente adquirida pela Gafisa.",
    companies: ["Bait", "Gafisa"]
  },
  {
    year: "2025",
    period: "2025",
    title: "Ed. Centro Empresarial Mario Garnero",
    description: "Operação de grande porte no mercado de escritórios premium de São Paulo.",
    details: "Venda de 7 andares da Jive Mauá no Edifício Centro Empresarial Mario Garnero para grande investidor pessoa física.",
    companies: ["Jive Investments"]
  }
];
