// Definição da interface para um projeto
interface Project {
  name: string;
  description: string;
  category: 'web' | 'analytics' | 'lowcode'; // Usando union types para categorias
  techs?: string[]; // Lista simples de strings
  link?: string;
  githubLink?: string;
}


// Exportação da lista de projetos com o tipo definido
export const projects: Project[] = [
  {
    name: 'Análise Exp. de dados Loggi',
    description:
      'O projeto analisou as entregas da Loggi no Distrito Federal, reorganizando e visualizando os dados para extrair insights valiosos sobre suas operações na região.',
    category: 'analytics',
    techs: ['Kaggle', 'Seaborn', 'Pandas', 'Matplotlib'],
    link: 'https://www.kaggle.com/code/glgodoi/an-lise-explorat-ria-de-dados-loggi-ebac',
    githubLink: 'https://github.com/GLK-7/aedLoggi'
  },
  {
    name: 'Secret Word',
    description:
      'Este é um jogo de adivinhação desenvolvido em React.js, onde os jogadores devem descobrir palavras letra por letra, com três tentativas e pontuação progressiva.',
    category: 'web',
    techs: ['React'],
    githubLink: 'https://github.com/GLK-7/secret-word',
    link:'https://secret-word-nooumj21g-glk-7s-projects.vercel.app/'
  },
  {
    name: 'GitHub-Trending-Data-Collection',
    description:
      'O projeto coletou dados da seção "Trending" do GitHub por meio de web crawling com Python, capturando informações como nome, descrição e número de estrelas. Os dados foram salvos em um arquivo CSV para futuras análises de tendências.',
    category: 'analytics',
    techs: ['Kaggle','Pandas', 'BeautifulSoup', 'Requests'],
    githubLink: 'https://github.com/GLK-7/GitHub-Trending-Data-Collection',
    link:'https://www.kaggle.com/code/glgodoi/github-trending-data-collection'
  }

];
