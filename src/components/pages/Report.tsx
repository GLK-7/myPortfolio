import { useParams, Link } from 'react-router-dom';
import { projects } from '../../data/projects';
import { reports } from '../../data/reports';
import { IFProject } from '../layout/ProjectCard';

/* ── Barra de navegação da página de relatório ───────────── */
interface TopBarProps {
  title?: string;
}

const TopBar = ({ title }: TopBarProps) => (
  <nav
    className="sticky top-0 z-50 border-b border-white/5 backdrop-blur-md"
    style={{ background: 'rgba(13,13,26,0.90)' }}
  >
    <div className="max-w-[1100px] mx-auto px-5 h-12 flex items-center justify-between">
      <Link
        to="/"
        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200"
        aria-label="Voltar para o portfólio"
      >
        <i className="ph ph-arrow-left text-base" />
        Portfólio
      </Link>

      <div className="flex items-center gap-2">
        {title && (
          <span className="hidden sm:block text-xs text-gray-500 max-w-[260px] truncate">
            {title}
          </span>
        )}
        {/* Badge Power BI */}
        <div className="flex items-center gap-1.5 bg-[#13131f] border border-white/5 rounded-full px-3 py-1">
          <i className="ms-Icon ms-Icon--PowerBILogo text-[#f2c811] text-sm" />
          <span className="text-xs text-gray-400 font-medium">Power BI</span>
        </div>
        <img
          src="https://github.com/glk-7.png"
          className="w-7 h-7 rounded-full border border-[#03dac6]/50"
          alt="Gabriel Lino"
        />
      </div>
    </div>
  </nav>
);

/* ── Página de erro ──────────────────────────────────────── */
const NotFound = () => (
  <div className="min-h-screen bg-[#0d0d1a] text-white flex flex-col">
    <TopBar />
    <div className="flex-1 flex flex-col items-center justify-center gap-6 px-4 text-center">
      <div className="w-16 h-16 rounded-2xl bg-[#13131f] border border-white/5 flex items-center justify-center">
        <i className="ms-Icon ms-Icon--PowerBILogo text-[#f2c811] text-3xl" />
      </div>
      <div>
        <h1 className="text-xl font-bold text-white mb-2">Relatório não encontrado</h1>
        <p className="text-gray-400 text-sm max-w-sm">
          O relatório que você procura não existe ou foi removido.
        </p>
      </div>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold
                   bg-gradient-to-r from-[#3700b3] to-[#6200ee] text-white
                   hover:shadow-[0_0_16px_rgba(98,0,238,0.5)] transition-all duration-200"
      >
        <i className="ph ph-arrow-left" />
        Voltar ao portfólio
      </Link>
    </div>
  </div>
);

/* ── Página principal ────────────────────────────────────── */
const Report = () => {
  const { id } = useParams<{ id: string }>();
  const projectId = parseInt(id ?? '', 10);
  const project: IFProject | undefined = projects.find((p) => p.id === projectId);
  const report = reports.find((r) => r.id === projectId);

  if (!project || !project.reportLink) return <NotFound />;

  return (
    <div className="min-h-screen bg-[#0d0d1a] text-white flex flex-col">
      <TopBar title={project.name} />

      <main className="flex-1 max-w-[1100px] mx-auto w-full px-5 py-6 flex flex-col gap-6">

        {/* Cabeçalho do projeto */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#f2c811]/10 flex items-center justify-center">
              <i className="ms-Icon ms-Icon--PowerBILogo text-[#f2c811] text-base" />
            </div>
            <h1 className="text-xl font-bold text-white">{project.name}</h1>
          </div>
          <p className="text-gray-400 text-sm font-light leading-relaxed pl-10">
            {project.description}
          </p>
        </div>

        {/* iframe do relatório */}
        <div
          className="w-full rounded-xl overflow-hidden border border-white/5
                     shadow-[0_0_40px_rgba(98,0,238,0.2)]"
          style={{ aspectRatio: '16/9' }}
        >
          <iframe
            src={report?.embedcode}
            title={project.name}
            className="w-full h-full"
            allowFullScreen
          />
        </div>

        {/* Bloco de insights */}
        {report?.insights && (
          <div className="bg-[#13131f] rounded-xl border border-white/5 overflow-hidden">
            {/* Header do bloco */}
            <div className="flex items-center gap-2 px-5 py-4 border-b border-white/5">
              <i className="fa-solid fa-lightbulb text-[#bb86fc] text-sm" />
              <h2 className="font-semibold text-white text-sm">Designs e Insights</h2>
            </div>

            <div className="px-5 py-4 flex flex-col gap-4">
              <p className="text-gray-300 text-sm leading-relaxed font-light">
                {report.insights}
              </p>

              {/* Métricas */}
              {report.insightsList && report.insightsList.length > 0 && (
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">
                    Métricas apresentadas
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {report.insightsList.map((ins) => (
                      <li key={ins}>
                        <span
                          className="flex items-center gap-1.5 bg-[#1e1e2e] border border-[#03dac6]/20
                                     rounded-full px-3 py-1 text-xs text-gray-300 font-medium"
                        >
                          <i className="fa-solid fa-chart-line text-[#03dac6] text-[10px]" />
                          {ins}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tech badges do projeto */}
        {project.techs && project.techs.length > 0 && (
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-gray-600 uppercase tracking-widest">Recursos</span>
            {project.techs.map((tech) => (
              <span
                key={tech}
                className="text-[11px] px-2.5 py-1 rounded-full font-medium
                           bg-[#bb86fc] text-[#0d0d1a]"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Rodapé da página */}
        <div className="flex items-center justify-between pt-2 border-t border-white/5">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200"
          >
            <i className="ph ph-arrow-left text-sm" />
            Ver outros projetos
          </Link>
          <a
            href={project.reportLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold
                       bg-[#1e1e2e] text-gray-300 border border-white/10
                       hover:bg-gradient-to-r hover:from-[#3700b3] hover:to-[#6200ee]
                       hover:text-white hover:border-transparent
                       hover:shadow-[0_0_12px_rgba(98,0,238,0.4)]
                       transition-all duration-200"
          >
            <i className="ms-Icon ms-Icon--PowerBILogo text-[#f2c811]" />
            Abrir no Power BI
          </a>
        </div>

      </main>
    </div>
  );
};

export default Report;
