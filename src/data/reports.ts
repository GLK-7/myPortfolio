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
    }
  ];
  