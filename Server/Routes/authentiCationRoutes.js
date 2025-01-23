import express from "express" ; 
import authentication from "../controller/authenticateController.js";

const  Routes = express.Router();

Routes.post("/authentication", authentication)


export default Routes;