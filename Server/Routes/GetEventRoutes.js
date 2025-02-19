import express from "express";
import { getGeneralEvents, getEventByType, getEventById } from "../controller/GetEventDetailController.js";

const GetRoutes = express.Router();
GetRoutes.get("/general", getGeneralEvents);  // Fetch all general events
GetRoutes.get("/general/:eventType", getEventByType); // Fetch events based on eventType
GetRoutes.get("/general/specific/:refrenceId", getEventById)

export default GetRoutes;
