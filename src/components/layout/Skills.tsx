interface Skill {
  name: string;
  icon: string;
  imgSrc?:string
}

interface Props {
  skills: Skill[];
  title: string;
  icon: string;
}

const Skills = ({ skills, title, icon }: Props) => {
  return (
    <>
      <div className="mb-4 p-0 rounded font-bold w-36 flex items-center">
        <i
          className={`${icon} bg-gradient-to-r from-[#03dac6] to-[#bb86fc] bg-clip-text text-transparent text-xl m-1 mr-2`}
        />
        <h3 className="bg-gradient-to-r from-[#bb86fc] to-[#cf6679] bg-clip-text text-transparent text-xl">
          {title}
        </h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-center mb-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#252525] rounded-lg p-6 text-center shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg"
          >
            
            <i className={skill.icon + ' text-teal-400 text-4xl mb-2'}></i>
            { !skill.icon ? <img src={skill?.imgSrc}/> : null }
            <p className="text-white">{skill.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;
