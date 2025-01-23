import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Routes from "./Routes/authentiCationRoutes.js";
import { connectDb } from "./conectionDB.js";
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

//  Port Listening
const port = process.env.PORT || 5000;

//  Routes
app.use("/api", Routes)

//  Database Connection
connectDb() ; 

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
