import type { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  title: string;
  id: string;
}

const Section = ({ children, title, id }: Props) => {
  return (
    <section id={id} className="rounded-lg px-5 py-6 mb-12 scroll-mt-16">
      <h2 className="text-[#bb86fc] border-b-2 border-[#cf6679] pb-2 mb-6 mt-10 font-bold text-2xl tracking-wide">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;
