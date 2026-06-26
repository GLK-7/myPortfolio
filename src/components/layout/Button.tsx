interface Props {
  icon: string;
  title: string;
  link?: string;
}

const Button = ({ icon, title, link }: Props) => {
  return (
    <a
      href={link}
      target={link?.startsWith('http') ? '_blank' : '_self'}
      rel="noreferrer"
      className="
        inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold
        bg-[#1e1e2e] text-gray-300 border border-white/10
        transition-all duration-200 ease-in-out
        hover:bg-gradient-to-r hover:from-[#3700b3] hover:to-[#6200ee]
        hover:text-white hover:border-transparent hover:shadow-[0_0_12px_rgba(98,0,238,0.4)]
        active:scale-95
      "
    >
      <i className={icon} />
      {title}
    </a>
  );
};

export default Button;
