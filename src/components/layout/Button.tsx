
interface Props {
    icon: string
    title: string
    link?: string
}

const Button = ({icon, title, link}: Props)=>{
    return(
        <div className="flex-grow w-full hover:bg-[#1e1e1e] rounded transition duration-300 ease-in-out">
            <button 
            className="
                    md:w-full h-10 rounded py-1 pl-2 pr-3 w-full
                    bg-gradient-to-br from-[#3700b3] to-[#6200ee] text-white 
                    hover:text-transparent hover:bg-clip-text
                    hover:bg-gradient-to-r hover:from-[#bb86fc] hover:to-[#03dac6]" 
            onClick={()=>{link}}
        >
            <i className={`${icon} m-1 mr-2`} />
            {title}
            
        </button>
      </div>
      
          )
}

export default Button