import { useState } from 'react';

interface NavbarProps {
  isHeaderVisible: boolean;
}

const navLinks = [
  { href: '#projects',    label: 'Projetos'    },
  { href: '#skills',      label: 'Habilidades' },
  { href: '#about',       label: 'Sobre mim'   },
  { href: '#education',   label: 'Formação'    },
  { href: '#experiences', label: 'Experiência' },
];

const Navbar = ({ isHeaderVisible }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass =
    'text-sm font-medium text-gray-300 transition-all duration-200 hover:text-white px-3 py-1.5 rounded-lg hover:bg-white/8';

  return (
    <nav className="sticky top-0 z-50 border-b border-white/5 backdrop-blur-md"
         style={{ background: 'rgba(13,13,26,0.85)' }}>
      <div className="max-w-[1100px] mx-auto px-5">
        <div className="flex items-center justify-between h-12">

          {/* Avatar quando o header some */}
          <div className="w-8 flex-shrink-0">
            {!isHeaderVisible && (
              <img
                src="https://github.com/glk-7.png"
                alt="Gabriel Lino"
                className="w-7 h-7 rounded-full border border-[#03dac6]/60 animate-fade-in"
              />
            )}
          </div>

          {/* Links desktop */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className={linkClass}>{label}</a>
              </li>
            ))}
          </ul>

          {/* Hambúrguer mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="md:hidden p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/8 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Menu mobile */}
        {isOpen && (
          <div
            className="md:hidden border-t border-white/5 py-2"
            onClick={() => setIsOpen(false)}
          >
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="block text-sm font-medium text-gray-300 hover:text-white px-3 py-2 rounded-lg hover:bg-white/8 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
