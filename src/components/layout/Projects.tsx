import { useState, useEffect, useCallback } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from '../../components/ui/carousel';
import ProjectCard from './ProjectCard';
import { IFProject } from '../layout/ProjectCard';

interface Props {
  projects: IFProject[];
}

type Category = IFProject['category'] | '';

const tabs: { value: Category; icon: string; label: string }[] = [
  { value: 'analytics', icon: 'fa-solid fa-chart-simple',    label: 'Analytics' },
  { value: 'web',       icon: 'fa-solid fa-window-restore',  label: 'Web'       },
];

const Projects = ({ projects }: Props) => {
  const [api, setApi]               = useState<CarouselApi>();
  const [current, setCurrent]       = useState(0);
  const [count, setCount]           = useState(0);
  const [activeTab, setActiveTab]   = useState<Category>('analytics');

  const filteredProjects =
    activeTab === '' ? projects : projects.filter(p => p.category === activeTab);

  // Reseta e relê os snaps após o DOM atualizar (rAF garante isso)
  useEffect(() => {
    if (!api) return;
    const raf = requestAnimationFrame(() => {
      api.scrollTo(0, true);
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap() + 1);
    });
    return () => cancelAnimationFrame(raf);
  }, [api, activeTab]); // activeTab como dep — dispara sempre que a aba muda

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
      {/* Tabs */}
      <div className="flex gap-2 mb-5 flex-wrap">
        {tabs.map(({ value, icon, label }) => {
          const isActive = activeTab === value;
          return (
            <button
              key={value}
              onClick={() => setActiveTab(value)}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold
                transition-all duration-200 border
                ${isActive
                  ? 'bg-gradient-to-r from-[#3700b3] to-[#6200ee] border-[#bb86fc]/40 text-white shadow-[0_0_16px_rgba(98,0,238,0.4)]'
                  : 'bg-[#13131f] border-white/5 text-gray-400 hover:border-white/15 hover:text-white'
                }
              `}
            >
              <i className={`${icon} text-xs`} />
              {label}
            </button>
          );
        })}
      </div>

      {filteredProjects.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          <i className="fa-solid fa-folder-open text-3xl mb-3 block opacity-30" />
          <p className="text-sm">Nenhum projeto nesta categoria.</p>
        </div>
      ) : (
        <>
          <Carousel className="w-full" setApi={setApi} opts={{ align: 'start' }}>
            <CarouselContent className="-ml-1">
              {filteredProjects.map(project => (
                <CarouselItem
                  key={project.id}
                  className="pl-1 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1 h-full">
                    <ProjectCard project={project} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-[#13131f] border-white/10 text-white hover:bg-[#03dac6] hover:text-[#0d0d1a] hover:border-transparent ml-3 transition-all duration-200" />
            <CarouselNext    className="bg-[#13131f] border-white/10 text-white hover:bg-[#03dac6] hover:text-[#0d0d1a] hover:border-transparent mr-3 transition-all duration-200" />
          </Carousel>

          {/* Indicador de progresso */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex gap-1.5">
              {Array.from({ length: count }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => api?.scrollTo(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current - 1
                      ? 'w-6 bg-[#03dac6]'
                      : 'w-1.5 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Ir para slide ${i + 1}`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500">{current}/{count}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Projects;
