import { Card, CardContent } from '@/components/ui/card';
import Button from './Button';

export interface IFProject {
  id: number;
  name: string;
  description: string;
  category: 'web' | 'analytics' | 'lowcode';
  techs?: string[];
  link?: string;
  githubLink?: string;
  reportLink?: string;
}

interface Props {
  project: IFProject;
}

const categoryIcon: Record<IFProject['category'], string> = {
  analytics: 'fa-solid fa-chart-simple',
  lowcode: 'fa-solid fa-code',
  web: 'fa-solid fa-window-restore',
};

const ProjectCard = ({ project }: Props) => {
  return (
    <Card className="border-0 bg-transparent h-full">
      <CardContent className="p-6 bg-[#252525] rounded-lg shadow-md flex flex-col justify-between h-full min-h-[420px] transition-all duration-300 hover:shadow-[0_0_20px_rgba(187,134,252,0.2)] hover:bg-[#2c2c2c]">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <i className={`${categoryIcon[project.category]} bg-gradient-to-r from-[#03dac6] to-[#bb86fc] bg-clip-text text-transparent text-lg`} />
            <span className="font-semibold bg-gradient-to-r from-[#bb86fc] to-[#cf6679] bg-clip-text text-transparent text-base leading-tight">
              {project.name}
            </span>
          </div>

          {project.techs && project.techs.length > 0 && (
            <div>
              <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">Recursos</span>
              <ul className="flex flex-wrap gap-1 mt-1">
                {project.techs.map((tech) => (
                  <li
                    key={tech}
                    className="bg-gradient-to-r from-[#03dac6] to-[#bb86fc] rounded-full px-2 py-0.5 text-[#1e1e1e] text-xs font-medium"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <p className="text-sm font-light leading-relaxed text-gray-300">
            {project.description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.githubLink && (
            <Button title="GitHub" icon="devicon-github-original" link={project.githubLink} />
          )}
          <Button
            title="Visualizar"
            icon="fa-solid fa-eye"
            link={project.link || `/report/${project.id}`}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
