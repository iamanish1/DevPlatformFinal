import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Routes from "./Routes/authentiCationRoutes.js";
import { connectDb } from "./conectionDB.js";
import cookieParser from "cookie-parser";
import GetRoutes from "./Routes/GetEventRoutes.js"





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
app.use("/api", Routes)//  Add the GetRoutes here.  This will handle the Get requests for events.  The routes should be defined in GetEventRoutes.js.  This file should be in the Routes directory.  The file name should be GetEventRoutes.js.  The file should be in the same directory as the server.js file.  The server.js file should be in the root directory.  The routes
app.use("/api/getEvent", GetRoutes)
//  Database Connection
connectDb() ; 

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
