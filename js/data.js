// Dados para o blog e outras seções dinâmicas
const blogPosts = [
  {
    id: 1,
    title: "O futuro da energia solar no Brasil",
    excerpt: "Como a energia solar está transformando a matriz energética do Brasil e gerando oportunidades econômicas.",
    image: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg",
    date: "15 de maio de 2025",
    tags: ["Energia Solar", "Inovação", "Economia"]
  },
  {
    id: 2,
    title: "Agricultura regenerativa: o que é e como implementar",
    excerpt: "Descubra como a agricultura regenerativa pode recuperar solos degradados e aumentar a produtividade de forma sustentável.",
    image: "https://images.pexels.com/photos/2254030/pexels-photo-2254030.jpeg",
    date: "28 de abril de 2025",
    tags: ["Agricultura", "Sustentabilidade", "Solo"]
  },
  {
    id: 3,
    title: "Construções verdes: tendências para 2026",
    excerpt: "As tendências mais promissoras em construção sustentável que estão redefinindo o mercado imobiliário brasileiro.",
    image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg",
    date: "10 de abril de 2025",
    tags: ["Construção", "Arquitetura", "Tendências"]
  },
  {
    id: 4,
    title: "Mobilidade elétrica: infraestrutura e desafios",
    excerpt: "Um panorama sobre a evolução da infraestrutura para veículos elétricos nas cidades brasileiras.",
    image: "https://images.pexels.com/photos/3738310/pexels-photo-3738310.jpeg",
    date: "2 de abril de 2025",
    tags: ["Mobilidade", "Carros Elétricos", "Infraestrutura"]
  },
  {
    id: 5,
    title: "Gestão inteligente da água em condomínios",
    excerpt: "Sistemas que estão revolucionando o consumo de água em condomínios e reduzindo custos para moradores.",
    image: "https://images.pexels.com/photos/1544376/pexels-photo-1544376.jpeg",
    date: "25 de março de 2025",
    tags: ["Água", "Condomínios", "IoT"]
  },
  {
    id: 6,
    title: "Biocombustíveis de terceira geração",
    excerpt: "Como as microalgas estão se tornando a próxima revolução em biocombustíveis sustentáveis.",
    image: "https://images.pexels.com/photos/1268511/pexels-photo-1268511.jpeg",
    date: "18 de março de 2025",
    tags: ["Biocombustíveis", "Inovação", "Pesquisa"]
  }
];

// Dados para os painéis de tecnologia
const tecnologias = {
  construcao: {
    titulo: "Construção Verde",
    descricao: "Métodos e materiais de construção que minimizam o impacto ambiental, economizam recursos e criam ambientes mais saudáveis para os ocupantes, desde a fase de projeto até a operação do edifício.",
    exemplos: [
      "Materiais eco-friendly e de baixo impacto ambiental",
      "Sistemas de captação e reuso de água da chuva",
      "Técnicas de iluminação e ventilação naturais",
      "Certificações como LEED, AQUA e Selo Casa Azul"
    ],
    imagem: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg"
  },
  agricultura: {
    titulo: "Agricultura Sustentável",
    descricao: "Práticas agrícolas que preservam o meio ambiente, promovem a biodiversidade, melhoram a saúde do solo e utilizam recursos de forma eficiente para garantir produtividade a longo prazo.",
    exemplos: [
      "Sistemas agroflorestais e permacultura",
      "Agricultura de precisão com sensores IoT",
      "Controle biológico de pragas",
      "Compostagem e uso de fertilizantes orgânicos"
    ],
    imagem: "https://images.pexels.com/photos/2255801/pexels-photo-2255801.jpeg"
  },
  transporte: {
    titulo: "Mobilidade Limpa",
    descricao: "Soluções de transporte que reduzem a emissão de poluentes e o consumo de combustíveis fósseis, promovendo a mobilidade urbana mais eficiente, acessível e com menor impacto ambiental.",
    exemplos: [
      "Veículos elétricos e híbridos",
      "Infraestrutura de carregamento rápido",
      "Sistemas de compartilhamento de bicicletas e patinetes",
      "Transporte público elétrico"
    ],
    imagem: "https://images.pexels.com/photos/3846205/pexels-photo-3846205.jpeg"
  }
};

// Dados adicionais conforme necessário