import express from "express" ; 
import authentication from "../controller/authRegisterController.js";
import authLoginUser from "../controller/authLoginController.js";

const  Routes = express.Router();

Routes.post("/authentication", authentication)
Routes.post("/authLoginUser",authLoginUser)




export default Routes;