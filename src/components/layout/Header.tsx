import { useState, useEffect, useRef } from 'react';
import Contacts from './Contacts';
import Navbar from './Navbar';

const Header = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsHeaderVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const el = headerRef.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className="relative text-white text-center py-12 shadow-lg overflow-hidden"
      >
        {/* Fundo gradiente */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#3700b3] via-[#4a00c8] to-[#6200ee] z-0" />

        {/* Partículas decorativas sutis */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-6 left-1/4 w-32 h-32 rounded-full bg-[#03dac6] blur-3xl" />
          <div className="absolute bottom-4 right-1/4 w-24 h-24 rounded-full bg-[#bb86fc] blur-3xl" />
        </div>

        {/* Conteúdo */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-36 h-36 rounded-full border-4 border-[#03dac6] overflow-hidden mb-5 shadow-[0_0_24px_rgba(3,218,198,0.4)]">
            <img
              src="https://github.com/glk-7.png"
              alt="foto de perfil de Gabriel Lino"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>

          <h1 className="text-white text-4xl font-bold tracking-wide mb-5">
            Gabriel Lino
          </h1>

          <div className="flex flex-wrap justify-center items-center gap-2">
            <div className="flex items-center rounded-full bg-gradient-to-r from-[#03dac6] to-[#bb86fc] px-5 py-1.5 shadow-md">
              <i className="fa-solid fa-chart-simple text-[#1e1e1e] text-lg mr-2" />
              <p className="text-lg text-[#1e1e1e] font-semibold">Analista de Dados | BI</p>
            </div>
            <div className="flex items-center rounded-full bg-gradient-to-r from-[#bb86fc] to-[#03dac6] px-5 py-1.5 shadow-md">
              <i className="fa-solid fa-code text-[#1e1e1e] text-lg mr-2" />
              <p className="text-lg text-[#1e1e1e] font-semibold">Desenvolvedor</p>
            </div>
          </div>

          <Contacts />
        </div>
      </header>

      <Navbar isHeaderVisible={isHeaderVisible} />
    </>
  );
};

export default Header;
