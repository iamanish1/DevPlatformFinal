import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Routes from "./Routes/authentiCationRoutes.js";
import { connectDb } from "./conectionDB.js";
import protect from "./Middleware/JwtVerification.js";
import cookieParser from "cookie-parser";
import protectedRoutes from "./Routes/ProtectedRoutes.js";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true })); // For URL-encoded requests

dotenv.config();

const CorsOption = {
  origin: process.env.CLIENT_URL,
  credentials: true,
}

console.log("Frontend_Uri: " + process.env.CLIENT_URL);

app.use(cors(CorsOption));
//  Port Listening
const port = process.env.PORT || 5000;
// Public routes (No middleware for login/register)
app.use("/api", Routes);


// Protected routes (Middleware applied)
app.use("/api/protected", protect, (req, res) => {
  res.json({ message: "Protected route accessed!" });
});

// Default fallback for undefined routes
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});


//  Database Connection
connectDb() ; 

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
