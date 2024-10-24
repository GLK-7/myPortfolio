import { Card, CardContent } from '@/components/ui/card';
import Button from './Button';

interface Project {
  name: string;
  description: string;
  category: 'web' | 'analytics' | 'lowcode';
  techs?: string[];
  link?: string;
  githubLink?: string;
}
interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  return (
    <Card className="border-0 bg-0 h-96 flex justify-center">
      <CardContent className="aspect-square p-6 bg-[#252525] rounded-lg shadow-md flex flex-col justify-between h-96 w-full">
        <div>
          <i
            className={`${
              project.category === 'analytics'
                ? 'fa-solid fa-chart-simple'
                : project.category === 'lowcode'
                ? 'fa-solid fa-code'
                : project.category === 'web'
                ? 'fa-solid fa-window-restore'
                : ''
            } bg-gradient-to-r from-[#03dac6] to-[#bb86fc] bg-clip-text text-transparent md:text-lg m-1 mr-2`}
          />

          <span className="md:text-lg font-semibold bg-gradient-to-r from-[#bb86fc] to-[#cf6679] bg-clip-text text-transparent">
            {project.name}
          </span>
          <div>
            <span className='text-sm font-light'>Recursos: </span>
            <ul className='flex gap-1 text-sm '>
              {project.techs?.map((tech)=>(
                <li className='bg-gradient-to-r from-[#03dac6] to-[#bb86fc] rounded-full px-2'>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-4 text-justify">
            <span className="md:text-base font-light">{project.description}</span>
          </p>
        </div>
        <div className='items-baseline'>
          
          <div className="mt-2 gap-2 w-full flex flex-wrap md:flex-nowrap justify-center md:justify-start overflow-x-auto h-auto">
            <Button title="GitHub" icon="devicon-github-original" link={project.githubLink}/>
            <Button title="Visualizar" icon="fa-solid fa-eye" link={project.link}/>
          </div>
        </div>
        


      </CardContent>
    </Card>
  );
};

export default ProjectCard;
