interface Skill {
  name: string;
  icon: string;
  imgSrc?: string;
}

interface Props {
  skills: Skill[];
  title: string;
  icon: string;
}

const Skills = ({ skills, title, icon }: Props) => {
  return (
    <div>
      {/* Subtítulo da categoria */}
      <div className="flex items-center gap-2 mb-3">
        <i className={`${icon} text-[#03dac6] text-sm`} />
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest">{title}</h3>
      </div>

      {/* Grid de cards */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="
              group bg-[#13131f] rounded-xl p-3 text-center
              border border-white/5
              transition-all duration-300
              hover:-translate-y-1 hover:border-[#bb86fc]/30
              hover:shadow-[0_4px_20px_rgba(187,134,252,0.15)]
            "
          >
            {skill.icon ? (
              <i className={`${skill.icon} text-[#03dac6] text-2xl mb-2 block transition-colors duration-300 group-hover:text-[#bb86fc]`} />
            ) : skill.imgSrc ? (
              <img src={skill.imgSrc} alt={skill.name} className="w-7 h-7 mx-auto mb-2" />
            ) : null}
            <p className="text-gray-400 text-[11px] font-medium leading-tight group-hover:text-white transition-colors duration-300">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
