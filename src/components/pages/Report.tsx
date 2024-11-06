import Section from '../layout/Section';
import { useParams } from 'react-router-dom';
import { projects } from '../../data/projects';
import { IFProject } from '../layout/ProjectCard';

const Report = () => {
  const { id } = useParams();
  const project: IFProject | undefined = projects.find((project) => project.id === parseInt(id ?? '', 10));

  // Verifica se o projeto foi encontrado
  if (!project || !project.reportLink) {
    return (

        <div className='flex flex-col h-screen'>
            <div className='h-32 bg-white w-full' />

            <Section title="Relatório não encontrado" id="projects">
                <span className='text-white'>O relatório que procura não existe ou foi removido!</span>
            </Section>
        </div>
  );
  }

  return ( 
    <div className='flex flex-col h-screen'>
    <div className='h-14 bg-gradient-to-tr from-[#3700b3] to-[#6200ee] w-full' />
      <Section title={project.name} id="projects">
        <span className='text-white'>{project.description}</span>
      </Section>
    </div>
    
  );
};

export default Report;
