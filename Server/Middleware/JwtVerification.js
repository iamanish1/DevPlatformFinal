import Jwt from "jsonwebtoken" ; 

//  Middelware to verify token  :
const protect =  async(req , res , next ) =>{
    const token = req.cookies.authToken ; // get token from cookie 
    console.log("JWT Token:", token);
    if (!token) {
        return res.status(401).json({ message: 'Not authorized, token is required' });
    }
    try{
        // verify token 
        const decoded = Jwt.verify(token, process.env.JWT_SECRET);
        console.log(token) ; 
        req.user = decoded.user ; // add user to request
        next(); // move to next middleware or controller

    }
    catch(error){
        return res.status(401).json({ message: 'Token is invalid' });
    }
}

export default protect; 