const Contacts = () => {
  return (
    <>
      <div className="items-center mt-4">
        <ul className="flex justify-center items-center gap-2">
          <li className="w-12 h-12 rounded-full flex items-center justify-center">
            <a
              href="mailto:gabriel.godoitb@gmail.com"
              alt="mailto:gabriel.godoitb@gmail.com"
              className="bg-gradient-to-r from-[#03dac6] to-[#bb86fc] cursor-pointer w-full h-12 flex items-center justify-center transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#1e1e1e] hover:to-[#1e1e1e] rounded-full group"
            >
              <i className="fa-solid fa-envelope text-[#1e1e1e] text-[1.5rem] transition duration-300 ease-in-out group-hover:bg-gradient-to-r group-hover:from-[#03dac6] group-hover:to-[#bb86fc] group-hover:bg-clip-text group-hover:text-transparent" />
            </a>
          </li>
          <li className="w-12 h-12 rounded-full flex items-center justify-center">
            <a
              href="https://github.com/GLK-7"
              alt="https://github.com/GLK-7"
              target="_blank"
              className="bg-gradient-to-r from-[#03dac6] to-[#bb86fc] cursor-pointer w-12 h-12 flex items-center justify-center transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#1e1e1e] hover:to-[#1e1e1e] rounded-full group"
            >
              <i className="devicon-github-original text-[#1e1e1e] text-[2.0rem] transition duration-300 ease-in-out group-hover:bg-gradient-to-r group-hover:from-[#03dac6] group-hover:to-[#bb86fc] group-hover:bg-clip-text group-hover:text-transparent" />
            </a>
          </li>
          <li className="w-12 h-12 rounded-full flex items-center justify-center">
            <a
              href="https://www.linkedin.com/in/glgodoi"
              alt="https://www.linkedin.com/in/glgodoi"
              target="_blank"
              className="bg-gradient-to-r from-[#03dac6] to-[#bb86fc] cursor-pointer w-full h-12 flex items-center justify-center transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#1e1e1e] hover:to-[#1e1e1e] rounded-full group"
            >
              <i className="fa-brands fa-linkedin-in text-[#1e1e1e] text-[1.5rem] transition duration-300 ease-in-out group-hover:bg-gradient-to-r group-hover:from-[#03dac6] group-hover:to-[#bb86fc] group-hover:bg-clip-text group-hover:text-transparent" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Contacts;
