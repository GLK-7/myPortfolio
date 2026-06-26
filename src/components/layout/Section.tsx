import { useEffect, useRef, type ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  title: string;
  id: string;
}

const Section = ({ children, title, id }: Props) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.classList.add('section-hidden');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove('section-hidden');
          el.classList.add('section-visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.08 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id={id} className="px-0 py-4 mb-6 scroll-mt-16">
      {/* Título da seção */}
      <div className="flex items-center gap-3 mb-5">
        <h2 className="text-xl font-bold tracking-wide text-white">{title}</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-[#bb86fc] via-[#03dac6] to-transparent opacity-50" />
      </div>
      {children}
    </section>
  );
};

export default Section;
