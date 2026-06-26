import Section from '../layout/Section';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../../data/projects';
import { reports } from '../../data/reports';
import { IFProject } from '../layout/ProjectCard';

const ReportTopBar = () => (
  <div className="gap-4 items-center justify-between px-4 flex flex-row h-14 bg-gradient-to-tr from-[#3700b3] to-[#6200ee] w-full shadow-md">
    <Link to="/" aria-label="Voltar para a página inicial" className="hover:text-[#03dac6] transition-colors">
      <i className="ph ph-arrow-left text-2xl" />
    </Link>
    <div className="flex flex-row items-center gap-2">
      <span className="text-[#03dac6] font-medium">Relatórios Power BI</span>
      <img
        src="https://github.com/glk-7.png"
        className="w-8 h-8 rounded-full border-2 border-[#03dac6]"
        alt="avatar"
      />
    </div>
  </div>
);

const Report = () => {
  const { id } = useParams<{ id: string }>();
  const projectId = parseInt(id ?? '', 10);
  const project: IFProject | undefined = projects.find((p) => p.id === projectId);
  const report = reports.find((r) => r.id === projectId);

  if (!project || !project.reportLink) {
    return (
      <div className="flex flex-col min-h-screen">
        <ReportTopBar />
        <Section title="Relatório não encontrado" id="not-found">
          <p className="text-gray-300 mb-4">
            O relatório que procura não existe ou foi removido.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#03dac6] hover:text-[#bb86fc] transition-colors duration-200"
          >
            <i className="ph ph-arrow-left" />
            Voltar à tela inicial
          </Link>
        </Section>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <ReportTopBar />

      <Section title={project.name} id="report">
        <p className="font-light text-gray-300 mb-6">{project.description}</p>

        <div className="w-full flex flex-col gap-6">
          {/* iframe responsivo */}
          <div className="w-full max-w-[1180px] aspect-video rounded-lg overflow-hidden shadow-[0_0_32px_rgba(98,0,238,0.3)]">
            <iframe
              src={report?.embedcode}
              title={project.name}
              className="w-full h-full"
              allowFullScreen
            />
          </div>

          {/* Insights */}
          {report?.insights && (
            <div className="bg-[#252525] rounded-lg p-6">
              <h3 className="bg-gradient-to-r from-[#bb86fc] to-[#03dac6] bg-clip-text text-transparent text-xl font-bold mb-3">
                Designs e Insights
              </h3>
              <p className="font-light text-gray-300 leading-relaxed">{report.insights}</p>

              {report.insightsList && report.insightsList.length > 0 && (
                <div className="mt-4">
                  <p className="bg-gradient-to-r from-[#bb86fc] to-[#03dac6] bg-clip-text text-transparent font-semibold mb-2">
                    Algumas métricas apresentadas
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {report.insightsList.map((ins) => (
                      <li
                        key={ins}
                        className="flex items-center gap-1 bg-[#2c2c2c] rounded-full px-3 py-1 text-sm text-gray-300"
                      >
                        <i className="ph ph-dot-outline text-[#03dac6]" />
                        {ins}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </Section>
    </div>
  );
};

export default Report;
