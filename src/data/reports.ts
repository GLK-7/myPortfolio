// Definição da interface para um projeto
interface Report {
    id: number;
    insights: string;
    embedcode: string;
    insightsList?: string[];
  }
  
  
  // Exportação da lista de projetos com o tipo definido
  export const reports: Report[] = [
    {
      id:5,
      insights: "Os visuais foram escolhidos por sintetizarem métricas essenciais para avaliar o desempenho da empresa, equipes e recursos. Eles exibem dados como valores e médias, distribuições categóricas e periódicas auxiliando no orçamento e gestão de estoques, além de permitir o acompanhamento de demandas ao longo do tempo. Essa visão concisa e estratégica facilita a tomada de decisões informadas e o monitoramento constante do desempenho geral da empresa.",
      embedcode: "https://app.powerbi.com/view?r=eyJrIjoiMjAzMGE2OGYtNDZkMS00NTg4LTg2OTctYTA1ZDFiOGE5ZTJmIiwidCI6IjJkZTM2MjM3LWYyYTEtNGUwNS1hY2U3LWJjMTUxNThlMTVlMSJ9",
      insightsList: ['Total de vendas', 'Valor total de vendas', 'Clientes atendidos', 'Valor médio anual', 'Média de vendas por mês']
    },
    {
      id:6,
      insights: "O custo realizado refere-se às despesas efetivas, enquanto o custo orçado é o valor previsto. A diferença entre eles (desvio) indica superações ou economias, e a variação percentual mostra a proporção dessa diferença. Com modos claro e escuro, o relatório adapta-se às preferências do usuário, proporcionando uma melhor experiência. Ele analisa o desempenho financeiro dos gestores, destacando áreas de eficiência ou necessidade de melhoria. Os insights incluem a identificação de gestores que superam ou economizam no orçamento, avaliação da eficiência financeira e controle rigoroso do orçamento. A análise histórica ajuda a ajustar orçamentos futuros, promovendo transparência e responsabilidade fiscal.",
      embedcode: "https://app.powerbi.com/view?r=eyJrIjoiYTc4MjcxZjAtMTA2Yy00OGE5LTk4YTAtNmNlOGNiNTM0NjIwIiwidCI6IjJkZTM2MjM3LWYyYTEtNGUwNS1hY2U3LWJjMTUxNThlMTVlMSJ9",
      insightsList: ['Total orçado', 'Total realizado', 'Desvio', 'Variação percentual (V%)', 'Distribuição mensal do orçamento']
    },
    {
      id:7,
      insights: "A primeira página do relatório exibe gráficos interativos sobre a quantidade de avaliações e médias de notas de filmes populares, permitindo uma análise detalhada. Na página de detalhes, cada filme é mostrado individualmente, com informações sobre título, gênero, data de lançamento e elenco, destacando os principais membros e suas funções.",
      embedcode: "https://app.powerbi.com/view?r=eyJrIjoiZTYwZjIwNWUtOTg0OS00MjFmLTk2MTctMGM0NDY3ZmMxYThkIiwidCI6IjJkZTM2MjM3LWYyYTEtNGUwNS1hY2U3LWJjMTUxNThlMTVlMSJ9",
      insightsList: ['Total de votos', 'Nota média', 'Total de avaliações']
    }
  ];
  