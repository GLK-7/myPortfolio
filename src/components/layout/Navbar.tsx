import { useState } from 'react';
import me from '../../assets/me.jfif';

const Navbar = ({ isHeaderVisible }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-tr from-[#3700b3] to-[#6200ee] py-4 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Imagem de perfil quando o header sumir */}
          <div className='flex items-center'>
            <img
              src={me}
              alt="foto de perfil"
              className={`${
                isHeaderVisible ? 'hidden' : 'block'
              } transition-all duration-300 w-8 h-8 rounded-full border-2 border-[#03dac6]`}
              
            />
          </div>

          {/* Botão de hambúrguer para dispositivos móveis */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#] focus:outline-none"
            >
              <svg
                className="w-6 h-6 text-[#03dac6]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>

          {/* Links de navegação para desktop centralizados */}
          <ul className="hidden md:flex justify-center flex-1 space-x-4">
            <li>
              <a
                href="#projects"
                className="text-[#] font-bold transition duration-300 ease-in-out hover:text-[#03dac6] hover:bg-white/10 px-4 py-2 rounded"
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-[#] font-bold transition duration-300 ease-in-out hover:text-[#03dac6] hover:bg-white/10 px-4 py-2 rounded"
              >
                Habilidades
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-[#] font-bold transition duration-300 ease-in-out hover:text-[#03dac6] hover:bg-white/10 px-4 py-2 rounded"
              >
                Sobre mim
              </a>
            </li>
            <li>
              <a
                href="#education"
                className="text-[#] font-bold transition duration-300 ease-in-out hover:text-[#03dac6] hover:bg-white/10 px-4 py-2 rounded"
              >
                Formação
              </a>
            </li>
            <li>
              <a
                href="#experiences"
                className="text-[#] font-bold transition duration-300 ease-in-out hover:text-[#03dac6] hover:bg-white/10 px-4 py-2 rounded"
              >
                Experiência
              </a>
            </li>
          </ul>
        </div>

        {/* Menu de hambúrguer para dispositivos móveis */}
        {isOpen && (
          <ul
            className="md:hidden flex flex-col justify-center flex-wrap items-center gap-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <li>
              <a
                href="#projects"
                className="block text-[#] font-bold transition duration-300 ease-in-out hover:text-[#03dac6] hover:bg-white/10 px-4 py-2 rounded"
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="block text-[#] font-bold transition duration-300 ease-in-out hover:text-[#03dac6] hover:bg-white/10 px-4 py-2 rounded"
              >
                Habilidades
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block text-[#] font-bold transition duration-300 ease-in-out hover:text-[#03dac6] hover:bg-white/10 px-4 py-2 rounded"
              >
                Sobre mim
              </a>
            </li>
            <li>
              <a
                href="#education"
                className="block text-[#] font-bold transition duration-300 ease-in-out hover:text-[#03dac6] hover:bg-white/10 px-4 py-2 rounded"
              >
                Formação
              </a>
            </li>
            <li>
              <a
                href="#experiences"
                className="block text-[#] font-bold transition duration-300 ease-in-out hover:text-[#03dac6] hover:bg-white/10 px-4 py-2 rounded"
              >
                Experiência
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
