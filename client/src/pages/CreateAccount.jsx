import handshake from "..//assets/bg2.jpg"
import { Link } from "react-router-dom";
const CreateAccount = ()=>{
    
    return(

     <>
      <div className="flex justify-center items-center min-h-screen bg-white">
        <div className="h-[70vmin] w-[70vmin] bg-[#4C1A76] rounded-tl-[2vmin] rounded-bl-[2vmin] 
        flex justify-center items-center">
            <img src={handshake} alt="" className="rounded-tl-[2vmin] rounded-bl-[2vmin] "/>
        </div>
           <div className="h-[70vmin] w-[80vmin] bg-[#F5F5F5]  mt-[2vmin] mb-[2vmin]  
           flex items-center justify-center rounded-tr-[2vmin] rounded-br-[2vmin]">
              <form action="">
                 <div className="flex items-center flex-col gap-[3vmin]">
                    <div className="flex flex-col">
                        <label htmlFor="" className="font-poppins">User Name :</label>
                        <input type="text" className="h-[6.5vmin] w-[65vmin] rounded-[2vmin] 
                        focus:outline-none focus:ring-0 px-[2vmin] text-[2.5vmin] font-sans" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="" className="font-poppins">Email:</label>
                        <input type="email" className="h-[6.5vmin] w-[65vmin] rounded-[2vmin] 
                        focus:outline-none focus:ring-0 px-[2vmin] text-[2.5vmin] font-sans"  />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor=""className="font-poppins">Password :</label>
                        <input type="password"  className="h-[6.5vmin] w-[65vmin] rounded-[2vmin]
                        focus:outline-none focus:ring-0 px-[2vmin] text-[2.5vmin] font-sans"  />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor=""className="font-poppins">Confirm Password :</label>
                        <input type="password"  className="h-[6.5vmin] w-[65vmin] rounded-[2vmin]
                        focus:outline-none focus:ring-0 px-[2vmin] text-[2.5vmin] font-sans"  />
                    </div>
                    <div>
                        <div className="w-[64vmin] h-[6vmin] bg-[#4C1A76] flex justify-center items-center text-white
                        font-poppins rounded-[3vmin]">
                            <button>Create Account</button>
                        </div>
                        <div className="flex justify-center items-center mt-[2vmin]">
                            <p>Already have an account? <Link to="/LoginAccount" className="text-[#F76C21]">Login</Link></p>
                        </div>
                    </div>
                   
                 </div>
              </form>
           </div>
        </div>

    </>
    )
};

export default CreateAccount 