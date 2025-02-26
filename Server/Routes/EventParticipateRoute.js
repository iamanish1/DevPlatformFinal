import express from "express" ; 
import EventParticipation from "../controller/EventParticipationController.js";

const ParticipateRoutes = express.Router() ; 

ParticipateRoutes.post("/participate", EventParticipation)


export default ParticipateRoutes;  // Exporting the router for the participation routes.