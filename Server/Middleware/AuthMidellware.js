import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const authenticateUser = (req, res, next) => {
    console.log("📌 Headers Received:", req.headers);  

    // Try both lowercase and uppercase keys
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

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.AuthUser = verified;
        console.log("✅ Verified User:", req.AuthUser);
        next();
    } catch (error) {
        console.log("❌ Token Verification Failed:", error.message);
        return res.status(400).json({ message: "Invalid token" });
    }
};

export default authenticateUser;