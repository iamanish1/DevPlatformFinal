import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import AuthUser from "../Models/UserModel.js";


const authLoginUser = async(req,res)=>{
     try {
        const {email, password} = req.body  ; 
        if(!email || !password) {
            return res.status(400).json({message: "Email and Password are required"});
        } ; 
      // Find the user by email 
      const user = await AuthUser.findOne({email}) ; 
      if(!user) {
             return res.status(404).json({message: "User not found"});
         } ;
         // Check the password
         const isMatch = await bcrypt.compare(password, user.password);
         if(!isMatch) {
             return res.status(400).json({message: "Invalid password"});
         } ; 
         // Generate JWT 
         const token = jwt.sign(
            {id: user._id},
             process.env.JWT_SECRET,
              {expiresIn: "30d"});
          // Set the token as a cookie (optional, for better security)
          res.cookie("token", token,{
             expires: new Date(Date.now() + 3600000 * 24 * 30),
             httpOnly: true,
             secure: process.env.NODE_ENV === "production", // Set to true for HTTPS only cookies
  
          });
          res.status(200).json({
            message: "Login successful",
            user: { username: user.username, email: user.email },
            token,
          });
          
        
     } catch (error) {
        console.error(error);
        res.status(500).json({
             message: "Internal server error", 
             error : error , 

         });
     }

}

export default authLoginUser ; 