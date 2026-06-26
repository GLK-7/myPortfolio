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
        inline-flex items-center gap-2 px-4 py-2 rounded font-medium text-sm
        bg-gradient-to-br from-[#3700b3] to-[#6200ee] text-white
        border border-transparent
        transition-all duration-300 ease-in-out
        hover:from-[#bb86fc] hover:to-[#03dac6] hover:text-[#1e1e1e]
        hover:shadow-md active:scale-95
      "
    >
      <i className={icon} />
      {title}
    </a>
  );
};

export default Button;