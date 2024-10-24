import { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from '../../components/ui/carousel';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from './ProjectCard';

interface Project {
  name: string;
  description: string;
  category: 'web' | 'analytics' | 'lowcode';
}

interface Props {
  projects: Project[];
}

const Projects = ({ projects }: Props) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [isGrabbing, setIsGrabbing] = useState(false);
  const [activeTab, setActiveTab] = useState('');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  useEffect(() => {
    if (!api) return;
    // Atualiza os projetos filtrados com base na aba ativa
    setFilteredProjects(
      projects.filter((project) => project.category === activeTab)
    );
  }, [activeTab, projects]);

  // Use um useEffect separado para atualizar o count e o scroll do carrossel
  useEffect(() => {
    if (!api || filteredProjects.length === 0) return;

    // Usamos um pequeno atraso para garantir que a UI tenha atualizado antes de contar os slides
    setTimeout(() => {
      api.scrollTo(0); // Reseta o carrossel para o primeiro slide
      setCount(api.scrollSnapList().length); // Atualiza o total de slides
      setCurrent(1); // Define o slide atual como o primeiro
    }, 50); // Atraso de 50ms para garantir que a UI tenha tempo de renderizar
  }, [api, filteredProjects]);

  // Use um useEffect separado para o listener do 'select'
  useEffect(() => {
    if (!api) return;

    const updateCurrentSlide = () => setCurrent(api.selectedScrollSnap() + 1);
    api.on('select', updateCurrentSlide);

    // Cleanup do event listener quando o componente for desmontado ou o api mudar
    return () => {
      api.off('select', updateCurrentSlide);
    };
  }, [api]);

  return (
    <>
      <Tabs
        defaultValue=""
        className="my-6 flex flex-wrap justify-center w-full"
        value={activeTab}
        onValueChange={setActiveTab}
      >
        <TabsList className="bg-0 gap-2 w-full flex flex-wrap justify-center md:justify-start overflow-x-auto h-auto">
          <TabsTrigger
            className="bg-[#252525] flex-shrink-0 px-4 py-2"
            value="analytics"
          >
            <i className="fa-solid fa-chart-simple text-white text-[1em] m-1 mr-2" />
            <span className="text-base">Analytics</span>
          </TabsTrigger>

          {/*  
          <TabsTrigger
            className="bg-[#252525] flex-shrink-0 px-4 py-2"
            value="lowcode"
          >
            <i className="fa-solid fa-code text-white text-[1em] m-1 mr-2" />
            <span className="text-base">Low Code</span>
          </TabsTrigger>
          */}
          <TabsTrigger
            className="bg-[#252525] flex-shrink-0 px-4 py-2"
            value="web"
          >
            <i className="fa-solid fa-window-restore text-white text-[1em] m-1 mr-2" />
            <span className="text-base">Web</span>
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <Carousel
  className={`w-full cursor-${isGrabbing ? 'grabbing' : 'grab'}`}
  setApi={setApi}
  onMouseDown={() => setIsGrabbing(true)}
  onMouseUp={() => setIsGrabbing(false)}
  onMouseLeave={() => setIsGrabbing(false)}
>
        <CarouselContent className={'-ml-1'}>
          {filteredProjects.map((project) => (
            <CarouselItem
              key={project.name}
              className={`pl-1 md:basis-1/2 lg:basis-1/3`} // Altera o cursor baseado no estado
            >
              <div className="p-1 border-0">
                <ProjectCard project={project}/>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-[#1e1e1e] rounded border-0 ml-4 hover:bg-[#03dac6]" />
        <CarouselNext className="bg-[#1e1e1e] rounded border-[#1e1e1e] mr-4 hover:bg-[#03dac6]" />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground ">
        {current} de {count}
      </div>
    </>
  );
};

export default Projects;
