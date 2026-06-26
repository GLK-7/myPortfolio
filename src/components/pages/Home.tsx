import Section from '../layout/Section';
import Skills from '../layout/Skills';
import Projects from '../layout/Projects';
import { projects } from '../../data/projects';
import { webskills, analytcskills, lowCodeSkills } from '../../data/skills';
import Header from '../layout/Header';

const experienceItems = [
  { icon: 'ms-Icon ms-Icon--PowerBILogo', label: 'Dashboards com Power BI' },
  { icon: 'fa fa-bar-chart', label: 'Dashboards com Metabase BI' },
  { icon: 'devicon-git-plain', label: 'Versionamento com Git' },
  { icon: 'devicon-gitlab-plain', label: 'Documentações no GitLab' },
  { icon: 'devicon-vscode-plain', label: 'Construção de códigos com VS Code' },
  { icon: 'devicon-azuresqldatabase-plain', label: 'Elaboração de consultas SQL' },
  { icon: 'fa fa-tasks', label: 'Ritos Scrum' },
];

const klabinItems = [
  { icon: 'ms-Icon ms-Icon--PowerBILogo', label: 'Dashboards com Power BI' },
  { icon: 'fa-solid fa-database', label: 'ETL com API REST' },
  { icon: 'ms-Icon ms-Icon--PowerApps', label: 'Aplicativos com Power Apps' },
  { icon: 'ms-Icon ms-Icon--MicrosoftFlowLogo', label: 'Fluxos com Power Automate' },
  { icon: 'ms-Icon ms-Icon--SharepointLogo', label: 'Gestão do SharePoint da Equipe' },
  { icon: 'fa-solid fa-chalkboard-teacher', label: 'Instrutoria interna em Excel' },
  { icon: 'fa-solid fa-table', label: 'Consultoria em Excel' },
];

interface ExperienceTagProps {
  icon: string;
  label: string;
}

const ExperienceTag = ({ icon, label }: ExperienceTagProps) => (
  <li className="flex items-center">
    <div className="bg-gradient-to-r from-[#bb86fc] to-[#cf6679] rounded-full px-4 py-1 flex items-center gap-2 text-[#1e1e1e] text-sm font-medium">
      <i className={icon} />
      {label}
    </div>
  </li>
);

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Section title="Projetos" id="projects">
          <Projects projects={projects} />
        </Section>

        <Section title="Habilidades" id="skills">
          <Skills skills={analytcskills} title="Analytics" icon="fa-solid fa-chart-simple" />
          <Skills skills={lowCodeSkills} title="Low Code" icon="fa-solid fa-code" />
          <Skills skills={webskills} title="Web" icon="fa-solid fa-window-restore" />
        </Section>

        <Section title="Sobre Mim" id="about">
          <p className="text-gray-300 leading-relaxed font-light">
            Sou Analista de Dados | BI, Desenvolvedor Low Code e Desenvolvedor Web, graduado em
            Análise e Desenvolvimento de Sistemas pelo IFPR. Meu objetivo é contribuir com soluções
            tecnológicas em todos os projetos em que participo, sempre buscando aprimorar processos.
            Sou apaixonado por tecnologia e pela resolução de problemas. Atuo com desenvolvimento de
            relatórios e indicadores corporativos com Power BI, análises com Notebooks Python, além
            de desenvolver soluções low code com as principais ferramentas da Microsoft, como Power
            Apps e Power Automate.
          </p>
        </Section>

        <Section title="Formação" id="education">
          <div className="flex flex-col gap-6">
            <div className="bg-[#252525] rounded-lg p-5 border-l-4 border-[#bb86fc]">
              <p className="text-gray-400 text-xs mb-1">05/2024 – 01/2025</p>
              <p className="font-bold bg-gradient-to-r from-[#bb86fc] to-[#cf6679] bg-clip-text text-transparent text-base">
                Analista de Dados – Curso Livre Profissionalizante
              </p>
              <p className="text-gray-300 font-light text-sm mt-1">
                EBAC - Escola Britânica de Artes Criativas e Tecnologia
              </p>
            </div>
            <div className="bg-[#252525] rounded-lg p-5 border-l-4 border-[#03dac6]">
              <p className="text-gray-400 text-xs mb-1">01/2019 – 03/2022</p>
              <p className="font-bold bg-gradient-to-r from-[#bb86fc] to-[#cf6679] bg-clip-text text-transparent text-base">
                Tecnólogo em Análise e Desenvolvimento de Sistemas
              </p>
              <p className="text-gray-300 font-light text-sm mt-1">IFPR – Instituto Federal do Paraná</p>
            </div>
          </div>
        </Section>

        <Section title="Experiência" id="experiences">
          <div className="flex flex-col gap-8">
            {/* Senai */}
            <div className="bg-[#252525] rounded-lg p-6 border-l-4 border-[#bb86fc]">
              <p className="text-gray-400 text-xs mb-1">06/2025 – Atual</p>
              <p className="font-bold bg-gradient-to-r from-[#bb86fc] to-[#cf6679] bg-clip-text text-transparent text-base">
                Analista de Business Intelligence
              </p>
              <p className="text-gray-300 font-light text-sm">Senai Soluções Digitais SC</p>
              <p className="text-gray-300 font-light mt-4 text-sm leading-relaxed">
                Desenvolvo relatórios e dashboards em Power BI de acordo com as demandas dos
                clientes, garantindo clareza na apresentação das informações e oferecendo suporte à
                tomada de decisão por meio de análises visuais eficientes.
              </p>
              <ul className="flex flex-wrap gap-2 mt-4">
                {experienceItems.map((item) => (
                  <ExperienceTag key={item.label} icon={item.icon} label={item.label} />
                ))}
              </ul>
            </div>

            <div className="h-px bg-gradient-to-r from-[#bb86fc] to-[#cf6679] opacity-40" />

            {/* Klabin */}
            <div className="bg-[#252525] rounded-lg p-6 border-l-4 border-[#03dac6]">
              <p className="text-gray-400 text-xs mb-1">06/2017 – 06/2025</p>
              <p className="font-bold bg-gradient-to-r from-[#bb86fc] to-[#cf6679] bg-clip-text text-transparent text-base">
                Analista de Facilities (Power Platform | Power BI)
              </p>
              <p className="text-gray-300 font-light text-sm">Klabin S/A</p>
              <p className="text-gray-300 font-light mt-4 text-sm leading-relaxed">
                Atuei usando ferramentas do Microsoft 365 para a área de Facilities.
              </p>
              <ul className="flex flex-wrap gap-2 mt-4">
                {klabinItems.map((item) => (
                  <ExperienceTag key={item.label} icon={item.icon} label={item.label} />
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section title="Contato" id="contact">
          <div className="flex flex-col gap-4">
            <a
              href="mailto:gabriel.godoitb@gmail.com"
              className="flex items-center gap-3 text-gray-300 hover:text-[#03dac6] transition-colors duration-300"
            >
              <i className="fas fa-envelope text-[#03dac6] text-lg w-5 text-center" />
              <span>gabriel.godoitb@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/glgodoi"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-gray-300 hover:text-[#03dac6] transition-colors duration-300"
            >
              <i className="fab fa-linkedin text-[#03dac6] text-lg w-5 text-center" />
              <span>linkedin.com/in/glgodoi</span>
            </a>
            <a
              href="https://github.com/glk-7"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-gray-300 hover:text-[#03dac6] transition-colors duration-300"
            >
              <i className="fab fa-github text-[#03dac6] text-lg w-5 text-center" />
              <span>github.com/GLK-7</span>
            </a>
          </div>
        </Section>
      </main>
    </>
  );
};

export default Home;
