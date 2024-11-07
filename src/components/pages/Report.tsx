import Section from '../layout/Section';
import { useParams } from 'react-router-dom';
import { projects } from '../../data/projects';
import { reports } from '../../data/reports';
import { IFProject } from '../layout/ProjectCard';

const Report = () => {
  const { id } = useParams();
  const project: IFProject | undefined = projects.find((project) => project.id === parseInt(id ?? '', 10));
  const report = reports.find((report) => report.id === parseInt(id ?? '', 10));

  // Verifica se o projeto foi encontrado
  if (!project || !project.reportLink) {
    return (

        <div className='flex flex-col h-screen'>
            <div className='h-14 bg-gradient-to-tr from-[#3700b3] to-[#6200ee] w-full' />

            <Section title="Relatório não encontrado" id="projects">
                <span className='text-white'>O relatório que procura não existe ou foi removido!</span>
                <p className="mt-4">
                  <a href="/">Voltar a tela inicial</a>
                </p>
            </Section>
        </div>
  );
  }

  return ( 
    <div className="flex-grow min-h-screen md:min-h-0 md:h-full">
      <div className="h-14 bg-gradient-to-tr from-[#3700b3] to-[#6200ee] w-full" />
      <Section title={project.name} id="projects">
        <span className="text-white">{project.description}</span>
        <div className="w-full flex my-4 h-full justify-left">
          <iframe
            src={report?.embedcode}
            className="w-full h-full max-h-[1920px] lg:max-h-[1920px] max-w-[1280px] aspect-video"
          />
          <p>
            {report?.insights}
          </p>
        </div>
      </Section>
    </div>

    
  );
};

export default Report;
