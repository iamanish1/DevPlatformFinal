// protectedRoutes.js
import express from "express";
import protect from "../Middleware/JwtVerification.js";
const protectedRoutes = express.Router();

protectedRoutes.use(protect); // Apply 'protect' middleware to all routes in this file

// Example: Add your protected routes
protectedRoutes.get("/dashboard", (req, res) => {
  res.status(200).json({ message: "Welcome to the protected dashboard!" });
});

export default protectedRoutes;
