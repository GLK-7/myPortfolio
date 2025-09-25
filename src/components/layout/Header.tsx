import { useState, useEffect, useRef } from 'react';
import me from '../../assets/me.jfif';
import Contacts from './Contacts';
import Navbar from './Navbar';

const Header = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const headerRef = useRef(null);

  // Função para observar a visibilidade do header
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeaderVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Ativa quando 10% do header sai da tela
    );

    if (headerRef.current) observer.observe(headerRef.current);

    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
    };
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className="relative bg-cover bg-center text-white text-center py-8 shadow-lg"
      >
        {/* Gradiente sobre a imagem de fundo */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#3700b3] to-[#6200ee] z-0"></div>

        {/* Conteúdo do header */}
        <div className="relative z-10">
          <div className="w-36 h-36 rounded-full border-4 border-[#03dac6] overflow-hidden mx-auto mb-4 shadow-lg">
            <img
              src="https://github.com/glk-7.png"
              alt="foto de perfil"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-white text-4xl font-bold tracking-wide mb-4">
            Gabriel Lino
          </h1>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="flex justify-center items-center rounded-full">
              <div className="flex justify-center items-center rounded-full bg-gradient-to-r from-[#03dac6] to-[#bb86fc] px-4 py-1">
                <i className="fa-solid fa-chart-simple text-[#1e1e1e] text-xl mr-2"></i>
                <p className="text-2xl text-[#1e1e1e]">Analista de Dados | BI</p>
              </div>
            </div>
            <div className="flex justify-center items-center rounded-full">
              <div className="flex justify-center items-center rounded-full bg-gradient-to-r from-[#03dac6] to-[#bb86fc] px-4 py-1">
                <i className="fa-solid fa-code text-[#1e1e1e] text-xl mr-2"></i>
                <p className="text-2xl text-[#1e1e1e]">Desenvolvedor</p>
              </div>
            </div>
          </div>
          <Contacts />
        </div>
      </header>

      {/* Navbar recebe a prop de visibilidade do header */}
      <Navbar isHeaderVisible={isHeaderVisible} />
    </>
  );
};

export default Header;

