import express from "express" ; 
import authentication from "../controller/authRegisterController.js";
import authLoginUser from "../controller/authLoginController.js";
import logoutUser from "../controller/LogoutController.js";


const  Routes = express.Router();

Routes.post("/authentication", authentication)
Routes.post("/authLoginUser",authLoginUser)
Routes.post("/logout", logoutUser)




export default Routes;