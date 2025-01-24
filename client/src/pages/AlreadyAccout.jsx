import { useState } from "react";
import handshake from "..//assets/bg2.jpg"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios" ; 

const AlreadyAccount = ()=>{
    const [formData , setFormData] = useState({
        email: "",
        password:"",
    }) ; 
    const [error , setError] = useState("") ; 
    console.log(error) ; 
    const navigate = useNavigate() ; 

    const handleChange = (e) => {
        const updatedFormData = { ...formData, [e.target.name]: e.target.value };
        setFormData(updatedFormData);
    };


    const handleSubmit = async (e) => { 
        e.preventDefault();
        // validate form data
        if(!formData.email ||!formData.password){
            setError("Email and password  are required");
            return ; 
        }
        try {
            const response = await axios.post( "http://localhost:8000/api/authLoginUser", 
            {
                email: formData.email,
                password: formData.password,
            }, {
                withCredentials: true,
            }) ; 
            console.log(response.data);
            alert("Login successful")

            localStorage.setItem("authToken", response.data.token);
            navigate("/Events") // Navigate to the dashboard after successful login
            
        } catch (error) {
            if (error.response && error.response.data) {
                setError(error.response.data.message); // Display error from backend
              } else {
                setError("Something went wrong. Please try again.");
              }
            
        }
      


    }

    return (
        <>
          <div className="flex justify-center items-center min-h-screen bg-white">
                 <div className="h-[70vmin] w-[70vmin] bg-[#4C1A76] rounded-tl-[2vmin] rounded-bl-[2vmin] 
                 flex justify-center items-center">
                     <img src={handshake} alt="" className="rounded-tl-[2vmin] rounded-bl-[2vmin] "/>
                 </div>
                    <div className="h-[70vmin] w-[80vmin] bg-[#F5F5F5]  mt-[2vmin] mb-[2vmin]  
                    flex items-center justify-center rounded-tr-[2vmin] rounded-br-[2vmin]">
                       <form onSubmit={handleSubmit}>
                        <div className=" font-poppins text-[4vmin] flex justify-center mb-[8vmin] uppercase
                        font-bold">
                            <h1>Welcome To <span className="text-[#F76C21]">Dev</span> <span className="text-[#4C1A76]">Hubs</span> Again</h1>
                        </div>
                          <div className="flex items-center flex-col gap-[4vmin]">
                             <div className="flex flex-col">
                                 <label htmlFor="" className="font-poppins">User Name :</label>
                                 <input type="text"
                                  name="email"
                                  value={formData.email}
                                  onChange={handleChange}
                                  className="h-[6.5vmin] w-[65vmin] rounded-[2vmin] 
                                 focus:outline-none focus:ring-0 px-[2vmin] text-[2.5vmin] font-sans" />
                             </div>
                             <div className="flex flex-col">
                                 <label htmlFor=""className="font-poppins">Password :</label>
                                 <input type="password" 
                                  name="password"
                                  value={formData.password}
                                  onChange={handleChange}
                                  className="h-[6.5vmin] w-[65vmin] rounded-[2vmin]
                                 focus:outline-none focus:ring-0 px-[2vmin] text-[2.5vmin] font-sans"  />
                             </div>
                             <div>
                                 <div className="w-[64vmin] h-[6vmin] bg-[#4C1A76] flex justify-center items-center text-white
                                 font-poppins rounded-[3vmin] mt-[5vmin]">
                                     <button>Login Account</button>
                                 </div>
                                 <div className="flex justify-center items-center mt-[5vmin]">
                                     <p>Create a New account? <Link to="/createAccount" className="text-[#F76C21]">Account</Link></p>
                                 </div>
                             </div>
                            
                          </div>
                       </form>
                    </div>
                 </div>
        </>
    )
};

export default AlreadyAccount;