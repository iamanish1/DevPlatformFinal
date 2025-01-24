// protectedRoutes.js
import express from "express";
import protect from "../Middleware/JwtVerification.js";
import verifyToken from "../Middleware/JwtVerification.js";
const protectedRoutes = express.Router();

protectedRoutes.use(protect); // Apply 'protect' middleware to all routes in this file

// Example: Add your protected routes
protectedRoutes.post("/protectedRoute",verifyToken) ; 


export default protectedRoutes;
