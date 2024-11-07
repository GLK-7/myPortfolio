
// Definição da interface para um projeto
interface Report {
    id: number;
    insights: string;
    embedcode: string;
  }
  
  
  // Exportação da lista de projetos com o tipo definido
  export const reports: Report[] = [
    {
      id:5,
      insights: "Os insights apresentados através dos visuais de Cartão foram selecionados devido à sua capacidade de fornecer de maneira concisa os totais de métricas relevantes para a análise de dados. Essas informações matriciais são essenciais para avaliar o desempenho da empresa, das equipes e dos recursos envolvidos.Os dados nos cartões, como valores e quantidades médias, desempenham um papel fundamental na formulação de orçamentos e na gestão de estoques. Eles permitem o acompanhamento e a adaptação às demandas dos clientes ao longo do tempo, contribuindo para uma abordagem estratégica e eficaz. Portanto, através dos visuais em formato de Cartão, é possível obter uma visão resumida e precisa das principais métricas. Isso facilita a tomada de decisões informadas e embasadas, além de possibilitar um monitoramento consistente do desempenho geral da empresa",
      embedcode: "https://app.powerbi.com/view?r=eyJrIjoiMjAzMGE2OGYtNDZkMS00NTg4LTg2OTctYTA1ZDFiOGE5ZTJmIiwidCI6IjJkZTM2MjM3LWYyYTEtNGUwNS1hY2U3LWJjMTUxNThlMTVlMSJ9"
    }
  ];
  