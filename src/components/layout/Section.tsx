interface Props {
  children?: any;
  title: string;
  id: string;
}

const Section = ({ children, title, id }: Props) => {
  return (
    <section id={id} className="bg-0 rounded-lg px-10 py-6 pt- mb-12">
      <h2 className="text-[#bb86fc] border-b-2 border-[#cf6679] pb-2 mb-4 mt-12 font-bold text-xl">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;
