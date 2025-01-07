import devloperBanner from "../assets/DeveloperBanner2.jpg"
const EyeCatchSection = ()=>{
    return (
        <>
        <div className="h-[85vmin] w-full  flex justify-center items-center
        ">
           <div className="h-[70vmin] w-full bg-white ml-[4vmin] shadow-md  
           flex justify-center flex-col rounded-bl-[4vmin] rounded-tl-[4vmin]">
              <div>
                <h1 className="text-[8vmin] uppercase font-poppins font-bold text-[#4C1A76]
                ml-[5vmin]"
                >Coder Need Us </h1>
              </div>
              <div>
                <h1  className="text-[8vmin] uppercase font-poppins font-bold
                 ml-[5vmin] "
                >
                    And 
                </h1>
              </div>
              <div>
                <h1 className="text-[8vmin] uppercase font-poppins font-bold text-[#F76C21]
                 ml-[5vmin] mb-[7vmin]"
                >We Need Coder With Us...</h1>
              </div>
              <div className="flex justify-center mr-[5.8vmin] mb-[2vmin]">
                <button className="text-[3vmin] font-poppins bg-[#4C1A76] w-[50vmin]
                h-[7vmin] rounded-[4vmin] text-white font-bold"

                >
                Create Account Now 
                </button>
              </div>
           </div>
           <div className="h-[70vmin] w-[150vmin] mr-[4vmin]">
           <img src={devloperBanner} alt=""
              className="h-full w-full object-cover rounded-tr-[4vmin] rounded-br-[4vmin] shadow-md" />
           </div>
        </div>
        </>
    )
}
export default EyeCatchSection