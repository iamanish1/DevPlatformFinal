import express from "express" ;
import { RegisterForEvent } from "../controller/EventRegistrationController.js";
import authenticateUser from "../Middleware/AuthMidellware.js";

const  RegisterRoutes = express.Router() ; 

RegisterRoutes.post("/register", authenticateUser ,RegisterForEvent)

export default RegisterRoutes;  // Exporting the router for the registration routes.