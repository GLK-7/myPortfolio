
// Definição da interface para um projeto
interface Project {
  id: number;
  name: string;
  description: string;
  category: 'web' | 'analytics' | 'lowcode'; // Usando union types para categorias
  techs?: string[]; // Lista simples de strings
  link?: string;
  githubLink?: string;
  reportLink?:string
}


// Exportação da lista de projetos com o tipo definido
export const projects: Project[] = [
  {
    id:1,
    name: 'Análise Exp. de dados Loggi',
    description:
      'O projeto analisou as entregas da Loggi no Distrito Federal, reorganizando e visualizando os dados para extrair insights valiosos sobre suas operações na região.',
    category: 'analytics',
    techs: ['Kaggle', 'Seaborn', 'Pandas', 'Matplotlib'],
    link: 'https://www.kaggle.com/code/glgodoi/an-lise-explorat-ria-de-dados-loggi-ebac',
    githubLink: 'https://github.com/GLK-7/aedLoggi'
  },
  {
    id:2,
    name: 'Secret Word',
    description:
      'Este é um jogo de adivinhação desenvolvido em React.js, onde os jogadores devem descobrir palavras letra por letra, com três tentativas e pontuação progressiva.',
    category: 'web',
    techs: ['React'],
    githubLink: 'https://github.com/GLK-7/secret-word',
    link:'https://secret-word-brown.vercel.app/'
  },
  {
    id:3,
    name: 'GitHub-Trending-Data-Collection',
    description:
      'O projeto coletou dados da seção "Trending" do GitHub por meio de web crawling com Python, capturando informações como nome, descrição e número de estrelas. Os dados foram salvos em um arquivo CSV para futuras análises de tendências.',
    category: 'analytics',
    techs: ['Kaggle','Pandas', 'BeautifulSoup', 'Requests'],
    githubLink: 'https://github.com/GLK-7/GitHub-Trending-Data-Collection',
    link:'https://www.kaggle.com/code/glgodoi/github-trending-data-collection'
  },
  {
    id:4,
    name: 'Credit EDA - SQL',
    description:
      'O projeto analisa dados de crédito com consultas SQL em Amazon Athena e S3 no Kaggle, usando pandas para visualizar resultados. Demonstra como integrar ferramentas de cloud computing para criar pipelines eficientes e gerar insights.',
    category: 'analytics',
    techs: ['Kaggle','Pandas', 'SQL', 'AWS', 'Matplotlib'],
    githubLink: 'https://github.com/GLK-7/Credit-EDA-EBAC',
    link:'https://www.kaggle.com/code/glgodoi/projeto-3-credit-eda-sql'
  },
  {
    id:5,
    name: 'Relatório de Vendas',
    description:
      'Este relatório exibe informações detalhadas sobre as vendas de produtos em geral. Este relatório inclui diversos visuais e cards com os principais insights de vendas.',
    category: 'analytics',
    techs: ['Power BI','Power Query'],
    githubLink: '',
    link:'',
    reportLink: 'https://app.powerbi.com/view?r=eyJrIjoiMjAzMGE2OGYtNDZkMS00NTg4LTg2OTctYTA1ZDFiOGE5ZTJmIiwidCI6IjJkZTM2MjM3LWYyYTEtNGUwNS1hY2U3LWJjMTUxNThlMTVlMSJ9'
  }

];
