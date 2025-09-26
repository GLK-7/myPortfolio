import Section from '../layout/Section';
import { useParams } from 'react-router-dom';
import { projects } from '../../data/projects';
import { reports } from '../../data/reports';
import { IFProject } from '../layout/ProjectCard';
import me from '../../assets/me.jfif';

const Report = () => {
  const { id } = useParams();
  const project: IFProject | undefined = projects.find((project) => project.id === parseInt(id ?? '', 10));
  const report = reports.find((report) => report.id === parseInt(id ?? '', 10));

  // Verifica se o projeto foi encontrado
  if (!project || !project.reportLink) {
    return (

        <div className='flex flex-col h-screen'>
            <div className="gap-4 items-center justify-between px-4 flex flex-row h-14 bg-gradient-to-tr from-[#3700b3] to-[#6200ee] w-full">
              <a href="/">
                <i className='ph ph-arrow-left text-2xl'></i>
              </a>
              <div className='flex flex-row items-center gap-2'>
                <span className='text-[#03dac6]'>Relatórios Power BI</span>
                <img src="https://github.com/glk-7.png" className='w-8 h-8 rounded-full'/>
              </div>
            </div>

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
      <div className="gap-4 items-center justify-between px-4 flex flex-row h-14 bg-gradient-to-tr from-[#3700b3] to-[#6200ee] w-full">
        <a href="/">
          <i className='ph ph-arrow-left text-2xl'></i>
        </a>
        <div className='flex flex-row items-center gap-2'>
          <span className='text-[#03dac6]'>Relatórios Power BI</span>
          <img src="https://github.com/glk-7.png" className='w-8 h-8 rounded-full'/>
        </div>
      </div>
      <Section title={project.name} id="projects">
        <span className="font-light">{project.description}</span>
        <div className="w-full flex flex-col my-4 h-full justify-left">
          <iframe
            src={report?.embedcode}
            className="w-full h-full max-h-[1920px] lg:max-h-[1920px] max-w-[1180px] aspect-video"
          />
          <div className='flex flex-col py-6 gap-4'>
            <h3 className='bg-gradient-to-r from-[#bb86fc] to-[#03dac6] bg-clip-text text-transparent text-2xl'>Designs e Insights</h3>
            <p className='font-light'>
              {report?.insights}
            </p>
            <p>
              <span className='bg-gradient-to-r from-[#bb86fc] to-[#03dac6] bg-clip-text text-transparent'>Algumas métricas aprensentadas</span>
              <ul className='font-light'>
                {report?.insightsList?.map((ins =>(
                  <li className=''><i className='ph ph-dot-outline'></i> {ins}</li>
                )))}
              </ul>
            </p>
          </div>
        </div>
      </Section>
    </div>

    
  );
};

export default Report;
