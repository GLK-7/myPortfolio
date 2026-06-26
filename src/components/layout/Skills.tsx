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
    <div className="mb-8">
      <div className="mb-4 flex items-center gap-2">
        <i className={`${icon} bg-gradient-to-r from-[#03dac6] to-[#bb86fc] bg-clip-text text-transparent text-xl`} />
        <h3 className="bg-gradient-to-r from-[#bb86fc] to-[#cf6679] bg-clip-text text-transparent text-xl font-bold">
          {title}
        </h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#252525] rounded-lg p-5 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_16px_rgba(3,218,198,0.25)] hover:bg-[#2c2c2c]"
          >
            {skill.icon ? (
              <i className={`${skill.icon} text-[#03dac6] text-4xl mb-3 block`} />
            ) : skill.imgSrc ? (
              <img src={skill.imgSrc} alt={skill.name} className="w-10 h-10 mx-auto mb-3" />
            ) : null}
            <p className="text-white text-sm font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
