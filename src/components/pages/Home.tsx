import Section from '../layout/Section';
import Skills from '../layout/Skills';
import Projects from '../layout/Projects';
import { projects } from '../../data/projects';
import { webskills, analytcskills, lowCodeSkills } from '../../data/skills';

const Home = () => {
  return (
    <body>
      <main>
        <Section title="Projetos" id="projects">
          <Projects projects={projects} />
        </Section>

        <Section title="Habilidades" id="skills">
          <Skills
            skills={analytcskills}
            title="Analytics"
            icon="fa-solid fa-chart-simple"
          />
          <Skills
            skills={lowCodeSkills}
            title="Low Code"
            icon="fa-solid fa-code"
          />
          <Skills
            skills={webskills}
            title="Web"
            icon="fa-solid fa-window-restore"
          />
        </Section>

        <Section title="Sobre Mim" id="about">
          <p className="text-white leading-relaxed">
            Sou Analista de Dados em formação, Desenvolvedor Low Code e
            Desenvolvedor Web, graduado em Análise e Desenvolvimento de Sistemas
            pelo IFPR. Meu objetivo é contribuir com soluções tecnológicas em
            todos os projetos em que participo, sempre buscando aprimorar
            processos. Sou apaixonado por tecnologia e pela resolução de
            problemas. Já atuo profissionalmente com desenvolvimento de
            relatórios e indicadores corporativos, além de desenvolver soluções
            low code com as principais ferramentas da Microsoft, como Power Apps
            e Power Automate.
          </p>
        </Section>
        <Section title="Formação" id="education">
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-white leading-relaxed text-xs">
                05/2024 - [Previsão de término: 12/2024]
              </p>
              <p>
                <span className="font-bold bg-gradient-to-r from-[#bb86fc] to-[#cf6679] bg-clip-text text-transparent">
                  Analista de Dados – Curso Livre Profissionalizante
                </span>
              </p>
              <p className="font-light">
                EBAC - Escola Britânica de Artes Criativas e Tecnologia
              </p>
            </div>
            <div>
              <p className="text-white leading-relaxed text-xs">
                01/2019 - 03/2022
              </p>
              <p>
                <span className="font-bold bg-gradient-to-r from-[#bb86fc] to-[#cf6679] bg-clip-text text-transparent">
                  Tecnólogo em Análise e Desenvolvimento de Sistemas
                </span>
              </p>
              <p className="font-light">IFPR Instituto Federal do Paraná</p>
            </div>
          </div>
        </Section>
        <Section title="Experiência" id="experiences">
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-white leading-relaxed text-xs">
                06/2017 - Atual
              </p>

              <p>
                <span className="bg-gradient-to-r from-[#bb86fc] to-[#cf6679] bg-clip-text text-transparent font-bold">
                  Analista de Facilities (Power Platform | Power BI)
                </span>
              </p>
              <p>
                <span className="font-light">Klabin S/A</span>
              </p>
              <p className="text-base mt-6">
                Atuo na elaboração de relatórios e indicadores com Power BI,
                desenvolvolvimento de soluções low code usando ferramentas do
                Microsoft 365 para a área de Facilities. Abaixo algumas das
                minhas competências:
              </p>
              <ul className="ml-2 space-y-1 mt-4 text-base">
                <li className="flex items-center">
                  <i className="fa-solid fa-chart-line text-[#03dac6] mr-2" />
                  <span>Relatórios e dashboards em Power BI.</span>
                </li>

                <li className="flex items-center">
                  <i className="fa-solid fa-database text-[#03dac6] mr-2" />
                  <span>Importação de dados via API REST.</span>
                </li>
                <li className="flex items-center">
                  <i className="fa-solid fa-code text-[#03dac6] mr-2" />
                  <span>Desenvolvimento de soluções low code.</span>
                </li>
                <li className="flex items-center">
                  <i className="fa-solid fa-sync text-[#03dac6] mr-2" />
                  <span>Automatização de processos com Power Automate.</span>
                </li>
                <li className="flex items-center">
                  <i className="fa-solid fa-share-alt text-[#03dac6] mr-2" />
                  <span>Gestão e organização do SharePoint.</span>
                </li>
                <li className="flex items-center">
                  <i className="fa-solid fa-chalkboard-teacher text-[#03dac6] mr-2" />
                  <span>Instrutoria interna em Excel.</span>
                </li>
                <li className="flex items-center">
                  <i className="fa-solid fa-table text-[#03dac6] mr-2" />
                  <span>Consultoria em Excel</span>
                </li>
              </ul>
            </div>
          </div>
        </Section>

        <Section title="Contato" id="contact">
          <p>
            <i className="fas fa-envelope"></i> Email: gabriel.godoitb@gmail.com
          </p>
          <p>
            <i className="fab fa-linkedin"></i> LinkedIn:{' '}
            <a href="https://www.linkedin.com/in/glgodoi">
              linkedin.com/in/glgodoi
            </a>
          </p>
          <p>
            <i className="fab fa-github"></i> GitHub:{' '}
            <a href="https://github.com/glk-7">Gabriel Lino</a>
          </p>
        </Section>
      </main>
    </body>
  );
};

export default Home;
