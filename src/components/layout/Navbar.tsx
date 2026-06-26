import { useState } from 'react';

interface NavbarProps {
  isHeaderVisible: boolean;
}

const navLinks = [
  { href: '#projects', label: 'Projetos' },
  { href: '#skills', label: 'Habilidades' },
  { href: '#about', label: 'Sobre mim' },
  { href: '#education', label: 'Formação' },
  { href: '#experiences', label: 'Experiência' },
];

const Navbar = ({ isHeaderVisible }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass =
    'font-bold text-white transition duration-300 ease-in-out hover:text-[#03dac6] hover:bg-white/10 px-4 py-2 rounded';

  return (
    <nav className="bg-gradient-to-tr from-[#3700b3] to-[#6200ee] py-3 sticky top-0 z-50 shadow-lg backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Avatar aparece quando o header some */}
          <div className="flex items-center w-10">
            {!isHeaderVisible && (
              <img
                src="https://github.com/glk-7.png"
                alt="foto de perfil"
                className="w-8 h-8 rounded-full border-2 border-[#03dac6] animate-fade-in"
              />
            )}
          </div>

          {/* Links desktop */}
          <ul className="hidden md:flex justify-center flex-1 gap-1">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className={linkClass}>
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Botão hambúrguer */}
          <div className="flex md:hidden items-center ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="focus:outline-none p-1"
            >
              <svg
                className="w-6 h-6 text-[#03dac6]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
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
        </div>

        {/* Menu mobile */}
        {isOpen && (
          <ul
            className="md:hidden flex flex-col items-center gap-1 pt-2 pb-1"
            onClick={() => setIsOpen(false)}
          >
            {navLinks.map(({ href, label }) => (
              <li key={href} className="w-full text-center">
                <a href={href} className={`block ${linkClass}`}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
