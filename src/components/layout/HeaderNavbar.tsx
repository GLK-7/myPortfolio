import me from '../../assets/me.jfif';
import Contacts from './Contacts';
import { useState } from 'react';

const HeaderNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="relative bg-cover bg-center text-white text-center py-8 shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-b from-[#6200ee] to-[#3700b3]"></div>

        <div className="relative z-10">
          <div className="w-36 h-36 rounded-full border-4 border-[#03dac6] overflow-hidden mx-auto mb-4 shadow-lg">
            <img
              src={me}
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
                <p className="text-2xl text-[#1e1e1e]">Analista de Dados</p>
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

      {/* Navbar sempre sticky */}
      <nav className="bg-gradient-to-b from-[#3700b3] to-[#3400a8] py-4 shadow-md z-50 sticky top-0 left-0 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center">
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-[#bb86fc] focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      isOpen
                        ? 'M6 18L18 6M6 6l12 12'
                        : 'M4 6h16M4 12h16M4 18h16'
                    }
                  />
                </svg>
              </button>
            </div>

            <ul className="hidden md:flex justify-center flex-1 space-x-4">
              <li>
                <a
                  href="#projects"
                  className="text-[#bb86fc] font-bold transition duration-300 ease-in-out hover:text-[#03dac6] hover:bg-white/10 px-4 py-2 rounded"
                >
                  Projetos
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-[#bb86fc] font-bold transition duration-300 ease-in-out hover:text-[#03dac6] hover:bg-white/10 px-4 py-2 rounded"
                >
                  Habilidades
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-[#bb86fc] font-bold transition duration-300 ease-in-out hover:text-[#03dac6] hover:bg-white/10 px-4 py-2 rounded"
                >
                  Sobre mim
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="text-[#bb86fc] font-bold transition duration-300 ease-in-out hover:text-[#03dac6] hover:bg-white/10 px-4 py-2 rounded"
                >
                  Formação
                </a>
              </li>
              <li>
                <a
                  href="#experiences"
                  className="text-[#bb86fc] font-bold transition duration-300 ease-in-out hover:text-[#03dac6] hover:bg-white/10 px-4 py-2 rounded"
                >
                  Experiências
                </a>
              </li>
            </ul>
          </div>

          {isOpen && (
            <ul className="md:hidden flex flex-col justify-center flex-wrap items-center gap-2">
              <li>
                <a
                  href="#projects"
                  className="block text-[#bb86fc] font-bold transition duration-300 ease-in-out hover:text-[#03dac6] hover:bg-white/10 px-4 py-2 rounded"
                >
                  Projetos
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="block text-[#bb86fc] font-bold transition duration-300 ease-in-out hover:text-[#03dac6] hover:bg-white/10 px-4 py-2 rounded"
                >
                  Habilidades
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block text-[#bb86fc] font-bold transition duration-300 ease-in-out hover:text-[#03dac6] hover:bg-white/10 px-4 py-2 rounded"
                >
                  Sobre mim
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="block text-[#bb86fc] font-bold transition duration-300 ease-in-out hover:text-[#03dac6] hover:bg-white/10 px-4 py-2 rounded"
                >
                  Formação
                </a>
              </li>
              <li>
                <a
                  href="#experiences"
                  className="block text-[#bb86fc] font-bold transition duration-300 ease-in-out hover:text-[#03dac6] hover:bg-white/10 px-4 py-2 rounded"
                >
                  Experiências
                </a>
              </li>
            </ul>
          )}
        </div>

        {/* Onda decorativa abaixo do navbar */}
        <div className="wave-container absolute w-full bottom-[-20px] overflow-hidden leading-none">
          <svg
            className="wave"
            viewBox="0 0 500 100"
            preserveAspectRatio="none"
            style={{ height: '20px', width: '100%' }}
          >
            <defs>
              <linearGradient
                id="waveGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: '#3400a8', stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: '#3200a3', stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
            <path
              d="M0,50 C150,150 350,0 500,50 L500,00 L0,0 Z"
              style={{ stroke: 'none', fill: 'url(#waveGradient)' }}
            />
          </svg>
        </div>
      </nav>
    </>
  );
};

export default HeaderNavbar;
