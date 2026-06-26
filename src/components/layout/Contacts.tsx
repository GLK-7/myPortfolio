interface ContactLink {
  href: string;
  ariaLabel: string;
  icon: string;
  external?: boolean;
}

const links: ContactLink[] = [
  {
    href: 'mailto:gabriel.godoitb@gmail.com',
    ariaLabel: 'Enviar e-mail para Gabriel Lino',
    icon: 'fa-solid fa-envelope',
  },
  {
    href: 'https://github.com/GLK-7',
    ariaLabel: 'Perfil GitHub de Gabriel Lino',
    icon: 'devicon-github-original',
    external: true,
  },
  {
    href: 'https://www.linkedin.com/in/glgodoi',
    ariaLabel: 'Perfil LinkedIn de Gabriel Lino',
    icon: 'fa-brands fa-linkedin-in',
    external: true,
  },
];

const Contacts = () => {
  return (
    <ul className="flex justify-center items-center gap-3 mt-5">
      {links.map(({ href, ariaLabel, icon, external }) => (
        <li key={href}>
          <a
            href={href}
            aria-label={ariaLabel}
            target={external ? '_blank' : undefined}
            rel={external ? 'noreferrer' : undefined}
            className="
              w-12 h-12 rounded-full flex items-center justify-center
              bg-gradient-to-r from-[#03dac6] to-[#bb86fc]
              text-[#1e1e1e] text-xl
              transition-all duration-300 ease-in-out
              hover:scale-110 hover:shadow-[0_0_16px_rgba(3,218,198,0.5)]
              hover:from-[#bb86fc] hover:to-[#03dac6]
            "
          >
            <i className={icon} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Contacts;
