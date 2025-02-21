import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import AuthUser from "../Models/UserModel.js"; // Import the user model

dotenv.config();

export const authenticateUser = async (req, res, next) => {
    try {
        console.log("📌 Headers Received:", req.headers);  

        const authHeader = req.headers["authorization"] || req.headers["Authorization"];
        
        if (!authHeader) {
            console.log("❌ No Authorization header found");
            return res.status(401).json({ message: "Access denied. No token provided" });
        }

        if (!authHeader.startsWith("Bearer ")) {
            console.log("❌ Authorization header does not start with 'Bearer '");
            return res.status(401).json({ message: "Invalid token format" });
        }

        // Extract token after "Bearer "
        const token = authHeader.split(" ")[1]; 
        console.log("📌 Extracted Token:", token);  

        // Verify JWT Token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("✅ Decoded Token Payload:", decoded);  

        // Fetch user from database using the decoded ID
        const user = await AuthUser.findById(decoded.id).select("-password");
        if (!user) {
            console.log("❌ User not found in DB");
            return res.status(404).json({ message: "User not found" });
        }

        // Attach full user object to req.AuthUser
        req.AuthUser = user;
        console.log("✅ Authenticated User:", req.AuthUser);

        next();
    } catch (error) {
        console.log("❌ Token Verification Failed:", error.message);
        return res.status(401).json({ message: "Invalid or expired token" });
    }
};

export default authenticateUser;
