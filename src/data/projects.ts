// Definição da interface para um projeto
interface Project {
  name: string;
  description: string;
  category: 'web' | 'analytics' | 'lowcode'; // Usando union types para categorias
}

// Exportação da lista de projetos com o tipo definido
export const projects: Project[] = [
  {
    name: 'Projeto Alpha',
    description:
      'Uma plataforma inovadora para gestão de projetos, focada em colaboração e eficiência.',
    category: 'web',
  },
  {
    name: 'Sistema de Gestão de Tarefas',
    description:
      'Uma ferramenta completa para organizar tarefas, priorizar atividades e aumentar a produtividade.',
    category: 'web',
  },
  {
    name: 'Aplicativo de Receitas',
    description:
      'Um aplicativo intuitivo que oferece receitas diversificadas, dicas de culinária e planejamento de refeições.',
    category: 'web',
  },
  {
    name: 'Plataforma de E-learning',
    description:
      'Uma plataforma interativa de aprendizado online, com cursos variados e recursos para engajar alunos.',
    category: 'web',
  },
  {
    name: 'Portal de Vagas',
    description:
      'Um site que conecta candidatos a oportunidades de emprego, com suporte para criação de currículos e dicas de entrevistas.',
    category: 'web',
  },
  {
    name: 'Rede Social para Profissionais',
    description:
      'Uma rede social voltada para o networking, permitindo que profissionais compartilhem experiências e construam conexões.',
    category: 'web',
  },
  {
    name: 'Sistema de Controle Financeiro',
    description:
      'Uma ferramenta que ajuda usuários a monitorar despesas, criar orçamentos e otimizar suas finanças pessoais.',
    category: 'web',
  },
  {
    name: 'App de Monitoramento de Saúde',
    description:
      'Um aplicativo que rastreia indicadores de saúde, oferece dicas de bem-estar e integra dados de dispositivos wearables.',
    category: 'web',
  },
  {
    name: 'Ferramenta de Análise de Dados',
    description:
      'Um software avançado para coleta e análise de dados, ideal para empresas que buscam insights estratégicos.',
    category: 'analytics',
  },
  {
    name: 'Jogo Educativo de Matemática',
    description:
      'Um jogo interativo que ensina conceitos matemáticos de forma divertida e envolvente para crianças.',
    category: 'web',
  },
  {
    name: 'Dashboard de Indicadores de Desempenho',
    description:
      'Uma ferramenta de visualização que fornece insights em tempo real sobre métricas chave de negócios.',
    category: 'analytics',
  },
  {
    name: 'Gerador de Aplicativos Low Code',
    description:
      'Uma plataforma que permite aos usuários criar aplicativos personalizados sem precisar de conhecimento avançado de programação.',
    category: 'lowcode',
  },
  {
    name: 'Analisador de Sentimentos',
    description:
      'Um sistema que analisa feedbacks de clientes e extrai sentimentos, ajudando na melhoria de produtos e serviços.',
    category: 'analytics',
  },
  {
    name: 'Construtor de Sites Low Code',
    description:
      'Uma ferramenta que facilita a criação de sites responsivos utilizando uma interface de arrastar e soltar.',
    category: 'lowcode',
  },
  {
    name: 'Sistema de Recomendação de Produtos',
    description:
      'Um algoritmo que sugere produtos com base nas preferências e comportamento do usuário.',
    category: 'analytics',
  },
  {
    name: 'Plataforma de Automação de Marketing',
    description:
      'Um sistema que ajuda empresas a automatizar suas campanhas de marketing e a analisar resultados em tempo real.',
    category: 'lowcode',
  },
  {
    name: 'App de Gestão de Equipes',
    description:
      'Uma ferramenta que facilita a colaboração entre membros da equipe e a organização de projetos.',
    category: 'web',
  },
  {
    name: 'Sistema de Feedback de Clientes',
    description:
      'Uma plataforma que coleta e analisa feedback de clientes para ajudar empresas a entender melhor suas necessidades.',
    category: 'analytics',
  },
  {
    name: 'Editor de Documentos Online',
    description:
      'Uma aplicação que permite a edição colaborativa de documentos em tempo real, com recursos de compartilhamento.',
    category: 'web',
  },
];
