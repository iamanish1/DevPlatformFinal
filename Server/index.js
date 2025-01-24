import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Routes from "./Routes/authentiCationRoutes.js";
import { connectDb } from "./conectionDB.js";
import protect from "./Middleware/JwtVerification.js";
import cookieParser from "cookie-parser";


const app = express();
app.use(express.json());
app.use(cookieParser());

dotenv.config();

const CorsOption = {
  origin: process.env.CLIENT_URL,
  credentials: true,
}

console.log("Frontend_Uri: " + process.env.CLIENT_URL);

app.use(cors(CorsOption));
//  Port Listening
const port = process.env.PORT || 5000;

//  Routes
app.use("/api", Routes)


//  Database Connection
connectDb() ; 

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
