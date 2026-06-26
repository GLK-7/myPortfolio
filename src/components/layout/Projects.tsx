import { useState, useEffect, useCallback } from 'react';
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
import { IFProject } from '../layout/ProjectCard';

interface Props {
  projects: IFProject[];
}

type Category = IFProject['category'] | '';

const tabs: { value: Category; icon: string; label: string }[] = [
  { value: 'analytics', icon: 'fa-solid fa-chart-simple', label: 'Analytics' },
  { value: 'web', icon: 'fa-solid fa-window-restore', label: 'Web' },
];

const Projects = ({ projects }: Props) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [activeTab, setActiveTab] = useState<Category>('analytics');

  const filteredProjects =
    activeTab === ''
      ? projects
      : projects.filter((p) => p.category === activeTab);

  // Atualiza contador quando api ou filtro mudam
  useEffect(() => {
    if (!api) return;
    api.scrollTo(0, true); // sem animação para evitar flash
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
  }, [api, filteredProjects.length]);

  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap() + 1);
  }, [api]);

  useEffect(() => {
    if (!api) return;
    api.on('select', onSelect);
    return () => { api.off('select', onSelect); };
  }, [api, onSelect]);

  return (
    <div>
      <Tabs
        value={activeTab}
        onValueChange={(v) => setActiveTab(v as Category)}
        className="mb-6"
      >
        <TabsList className="bg-transparent gap-2 flex flex-wrap justify-start h-auto p-0">
          {tabs.map(({ value, icon, label }) => (
            <TabsTrigger
              key={value}
              value={value}
              className="bg-[#252525] data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#3700b3] data-[state=active]:to-[#6200ee] px-4 py-2 rounded transition-all duration-200"
            >
              <i className={`${icon} mr-2 text-sm`} />
              <span className="text-sm">{label}</span>
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {filteredProjects.length === 0 ? (
        <div className="text-center py-12 text-gray-400">
          <i className="fa-solid fa-folder-open text-4xl mb-3 block opacity-40" />
          <p>Nenhum projeto nesta categoria.</p>
        </div>
      ) : (
        <>
          <Carousel
            className="w-full"
            setApi={setApi}
            opts={{ align: 'start' }}
          >
            <CarouselContent className="-ml-1">
              {filteredProjects.map((project) => (
                <CarouselItem
                  key={project.id}
                  className="pl-1 md:basis-1/2 lg:basis-1/3 h-full"
                >
                  <div className="p-1 h-full">
                    <ProjectCard project={project} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-[#252525] border-0 hover:bg-[#03dac6] hover:text-[#1e1e1e] ml-4 transition-colors duration-200" />
            <CarouselNext className="bg-[#252525] border-0 hover:bg-[#03dac6] hover:text-[#1e1e1e] mr-4 transition-colors duration-200" />
          </Carousel>

          <div className="py-3 text-center text-sm text-gray-500">
            {current} de {count}
          </div>
        </>
      )}
    </div>
  );
};

export default Projects;
