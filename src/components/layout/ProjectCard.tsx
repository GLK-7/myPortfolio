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

const categoryMeta: Record<IFProject['category'], { icon: string; color: string }> = {
  analytics: { icon: 'fa-solid fa-chart-simple', color: '#bb86fc' },
  lowcode:   { icon: 'fa-solid fa-code',          color: '#03dac6' },
  web:       { icon: 'fa-solid fa-window-restore', color: '#cf6679' },
};

const ProjectCard = ({ project }: Props) => {
  const meta = categoryMeta[project.category];

  return (
    <Card className="border-0 bg-transparent h-full">
      <CardContent
        className="
          p-5 bg-[#13131f] rounded-xl border border-white/5
          flex flex-col justify-between h-full min-h-[340px]
          transition-all duration-300
          hover:-translate-y-1 hover:border-white/10
          hover:shadow-[0_8px_32px_rgba(187,134,252,0.12)]
        "
      >
        <div className="flex flex-col gap-3">
          {/* Cabeçalho */}
          <div className="flex items-start gap-2">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
              style={{ background: `${meta.color}22` }}
            >
              <i className={`${meta.icon} text-sm`} style={{ color: meta.color }} />
            </div>
            <span className="font-semibold text-white text-sm leading-snug">{project.name}</span>
          </div>

          {/* Tech badges */}
          {project.techs && project.techs.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {project.techs.map(tech => (
                <span
                  key={tech}
                  className="text-[10px] px-2 py-0.5 rounded-full font-medium text-[#0d0d1a]"
                  style={{ background: `${meta.color}` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Descrição */}
          <p className="text-gray-400 text-xs leading-relaxed font-light">
            {project.description}
          </p>
        </div>

        {/* Botões */}
        <div className="flex gap-2 mt-4 flex-wrap">
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
