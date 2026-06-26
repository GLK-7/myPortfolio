import Section from '../layout/Section';
import Skills from '../layout/Skills';
import Projects from '../layout/Projects';
import { projects } from '../../data/projects';
import { webskills, analytcskills, lowCodeSkills } from '../../data/skills';
import Header from '../layout/Header';

/* ── Dados de experiência ────────────────────────────────── */
const senaiItems = [
  { icon: 'ms-Icon ms-Icon--PowerBILogo', label: 'Dashboards com Power BI' },
  { icon: 'fa fa-bar-chart',              label: 'Dashboards com Metabase BI' },
  { icon: 'devicon-git-plain',            label: 'Versionamento com Git' },
  { icon: 'devicon-gitlab-plain',         label: 'Documentações no GitLab' },
  { icon: 'devicon-vscode-plain',         label: 'Construção de código com VS Code' },
  { icon: 'devicon-azuresqldatabase-plain', label: 'Consultas SQL' },
  { icon: 'fa fa-tasks',                  label: 'Ritos Scrum' },
];

const klabinItems = [
  { icon: 'ms-Icon ms-Icon--PowerBILogo',       label: 'Dashboards com Power BI' },
  { icon: 'fa-solid fa-database',               label: 'ETL com API REST' },
  { icon: 'ms-Icon ms-Icon--PowerApps',         label: 'Aplicativos com Power Apps' },
  { icon: 'ms-Icon ms-Icon--MicrosoftFlowLogo', label: 'Fluxos com Power Automate' },
  { icon: 'ms-Icon ms-Icon--SharepointLogo',    label: 'Gestão do SharePoint' },
  { icon: 'fa-solid fa-chalkboard-teacher',     label: 'Instrutoria interna em Excel' },
  { icon: 'fa-solid fa-table',                  label: 'Consultoria em Excel' },
];

/* ── Componentes auxiliares ──────────────────────────────── */
interface TagProps { icon: string; label: string; }

const Tag = ({ icon, label }: TagProps) => (
  <li className="flex items-center">
    <span className="flex items-center gap-1.5 bg-[#1e1e2e] border border-[#bb86fc]/20 rounded-full px-3 py-1 text-xs text-gray-300 font-medium">
      <i className={`${icon} text-[#bb86fc] text-xs`} />
      {label}
    </span>
  </li>
);

interface ExperienceCardProps {
  period: string;
  role: string;
  company: string;
  description: string;
  items: { icon: string; label: string }[];
  accent: string;
}

const ExperienceCard = ({ period, role, company, description, items, accent }: ExperienceCardProps) => (
  <div className={`relative pl-6 timeline-line`} style={{ '--tw-border-opacity': '1' } as React.CSSProperties}>
    {/* Dot na linha */}
    <div
      className="absolute left-[-5px] top-1 w-3 h-3 rounded-full border-2 border-[#0d0d1a]"
      style={{ background: accent }}
    />
    <div className="bg-[#13131f] rounded-xl p-5 border border-white/5 hover:border-white/10 transition-colors duration-300">
      <span className="text-[10px] font-medium tracking-widest uppercase" style={{ color: accent }}>
        {period}
      </span>
      <p className="font-bold text-white mt-0.5 text-base">{role}</p>
      <p className="text-gray-400 text-sm font-light mb-3">{company}</p>
      <p className="text-gray-300 text-sm leading-relaxed mb-4">{description}</p>
      <ul className="flex flex-wrap gap-2">
        {items.map(item => <Tag key={item.label} {...item} />)}
      </ul>
    </div>
  </div>
);

/* ── Página principal ────────────────────────────────────── */
const Home = () => {
  return (
    <>
      <Header />
      <main>

        <Section title="Projetos" id="projects">
          <Projects projects={projects} />
        </Section>

        <Section title="Habilidades" id="skills">
          <div className="flex flex-col gap-6">
            <Skills skills={analytcskills} title="Analytics"  icon="fa-solid fa-chart-simple"   />
            <Skills skills={lowCodeSkills} title="Low Code"   icon="fa-solid fa-code"            />
            <Skills skills={webskills}     title="Web"        icon="fa-solid fa-window-restore"  />
          </div>
        </Section>

        <Section title="Sobre Mim" id="about">
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            {/* Avatar lateral */}
            <div className="flex-shrink-0 mx-auto sm:mx-0">
              <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-[#bb86fc]/40 shadow-[0_0_20px_rgba(187,134,252,0.2)]">
                <img
                  src="https://github.com/glk-7.png"
                  alt="Gabriel Lino"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Texto */}
            <div className="bg-[#13131f] rounded-xl p-5 border border-white/5 flex-1">
              <p className="text-gray-300 leading-relaxed text-sm font-light">
                Sou <span className="text-[#bb86fc] font-medium">Analista de Dados | BI</span>,{' '}
                <span className="text-[#03dac6] font-medium">Desenvolvedor Low Code</span> e{' '}
                <span className="text-[#cf6679] font-medium">Desenvolvedor Web</span>, graduado em
                Análise e Desenvolvimento de Sistemas pelo IFPR. Apaixonado por tecnologia e pela
                resolução de problemas, atuo com Power BI, Python, Power Apps e Power Automate,
                sempre buscando entregar soluções eficientes e bem estruturadas.
              </p>
            </div>
          </div>
        </Section>

        <Section title="Formação" id="education">
          <div className="flex flex-col gap-4 pl-6 timeline-line">
            {[
              {
                period:  '05/2024 – 01/2025',
                title:   'Analista de Dados – Curso Livre Profissionalizante',
                school:  'EBAC – Escola Britânica de Artes Criativas e Tecnologia',
                accent:  '#bb86fc',
              },
              {
                period:  '01/2019 – 03/2022',
                title:   'Tecnólogo em Análise e Desenvolvimento de Sistemas',
                school:  'IFPR – Instituto Federal do Paraná',
                accent:  '#03dac6',
              },
            ].map((edu) => (
              <div key={edu.title} className="relative">
                <div
                  className="absolute left-[-23px] top-2 w-3 h-3 rounded-full border-2 border-[#0d0d1a]"
                  style={{ background: edu.accent }}
                />
                <div className="bg-[#13131f] rounded-xl p-4 border border-white/5 hover:border-white/10 transition-colors duration-300">
                  <span className="text-[10px] font-medium tracking-widest uppercase" style={{ color: edu.accent }}>
                    {edu.period}
                  </span>
                  <p className="font-bold text-white mt-0.5 text-sm">{edu.title}</p>
                  <p className="text-gray-400 text-xs font-light mt-0.5">{edu.school}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Experiência" id="experiences">
          <div className="flex flex-col gap-5">
            <ExperienceCard
              period="06/2025 – Atual"
              role="Analista de Business Intelligence"
              company="Senai Soluções Digitais SC"
              description="Desenvolvo relatórios e dashboards em Power BI de acordo com as demandas dos clientes, garantindo clareza na apresentação das informações e suporte à tomada de decisão."
              items={senaiItems}
              accent="#bb86fc"
            />
            <ExperienceCard
              period="06/2017 – 06/2025"
              role="Analista de Facilities — Power Platform | Power BI"
              company="Klabin S/A"
              description="Atuei com ferramentas do Microsoft 365 para a área de Facilities, desenvolvendo aplicativos, fluxos e dashboards para otimizar processos internos."
              items={klabinItems}
              accent="#03dac6"
            />
          </div>
        </Section>

        <Section title="Contato" id="contact">
          <div className="bg-[#13131f] rounded-xl p-6 border border-white/5 flex flex-col sm:flex-row gap-4 flex-wrap">
            {[
              {
                href:  'mailto:gabriel.godoitb@gmail.com',
                icon:  'fas fa-envelope',
                label: 'gabriel.godoitb@gmail.com',
                color: '#03dac6',
              },
              {
                href:    'https://www.linkedin.com/in/glgodoi',
                icon:    'fab fa-linkedin',
                label:   'linkedin.com/in/glgodoi',
                color:   '#bb86fc',
                external: true,
              },
              {
                href:    'https://github.com/glk-7',
                icon:    'fab fa-github',
                label:   'github.com/GLK-7',
                color:   '#cf6679',
                external: true,
              },
            ].map(({ href, icon, label, color, external }) => (
              <a
                key={href}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noreferrer' : undefined}
                className="flex items-center gap-3 flex-1 min-w-[200px] group"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                  style={{ background: `${color}22` }}
                >
                  <i className={`${icon} text-lg`} style={{ color }} />
                </div>
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-200 break-all">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </Section>

      </main>
    </>
  );
};

export default Home;
