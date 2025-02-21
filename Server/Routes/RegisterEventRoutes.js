import express from "express" ;
import { CancelEventRegistration, RegisterForEvent } from "../controller/EventRegistrationController.js";
import authenticateUser from "../Middleware/AuthMidellware.js";

const  RegisterRoutes = express.Router() ; 

RegisterRoutes.post("/register", authenticateUser ,RegisterForEvent)
RegisterRoutes.delete("/cancel/:eventId", authenticateUser, CancelEventRegistration)

export default RegisterRoutes;  // Exporting the router for the registration routes.