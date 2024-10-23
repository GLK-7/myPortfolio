import { Card, CardContent } from '@/components/ui/card';

interface Project {
  name: string;
  description: string;
  category: 'web' | 'analytics' | 'lowcode';
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
            } bg-gradient-to-r from-[#03dac6] to-[#bb86fc] bg-clip-text text-transparent md:text-xl m-1 mr-2`}
          />

          <span className="md:text-xl font-semibold bg-gradient-to-r from-[#bb86fc] to-[#cf6679] bg-clip-text text-transparent">
            {project.name}
          </span>
          <p className="mt-2">
            <span className="md:text-base font-light">{project.description}</span>
          </p>
        </div>
        <div className="gap-2 w-full flex flex-wrap md:flex-nowrap justify-center md:justify-start overflow-x-auto h-auto">
          <button className="bg-gradient-to-r from-[#3700b3] to-[#6200ee] text-white rounded py-1 pl-2 pr-3 w-full md:w-full h-10 flex-grow">
            <i className="devicon-github-original text-[#fff] m-1 mr-2" />
            GitHub
          </button>
          <button className="bg-gradient-to-br from-[#3700b3] to-[#6200ee] text-white rounded py-1 pl-2 pr-3 w-full md:w-full h-10 flex-grow">
            <i className="fa-solid fa-eye text-[#fff] m-1 mr-2" />
            Visualizar
          </button>
        </div>


      </CardContent>
    </Card>
  );
};

export default ProjectCard;
