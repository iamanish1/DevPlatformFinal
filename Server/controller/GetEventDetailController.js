import Event from "../Models/EventModel.js";
import BugHuntArena from "../Models/BugHuntEventModel.js";
import Hackathon from "../Models/HackthonEventModel.js";
import DebuggingDuel from "../Models/DebbugingDuelModel.js";
import SpeedGuidance from "../Models/SpeedGuidanceModel.js";
import Quiz from "../Models/QuizeEvent.js";
import CodeBattle from "../Models/CodeBattelModel.js";
import mongoose from "mongoose";

const eventModels = {
  bug_hunt_arena: BugHuntArena,
  hackathon: Hackathon,
  debugging_duel: DebuggingDuel,
  speed_guidance: SpeedGuidance,
  quiz: Quiz,
  code_battle: CodeBattle
};

export const getGeneralEvents = async (req, res) => {
  try {
    const events = await Event.find({}).lean(); // Fetch all events

    if (!events || events.length === 0) {
      return res.status(404).json({
        message: "No events found",
        statusCode: 404,
      });
    }

    return res.status(200).json({
      message: "Fetched all events successfully",
      events: events,
      statusCode: 200,
    });

  } catch (error) {
    res.status(500).json({
      message: "Error fetching events",
      error: error.message,
      statusCode: 500,
    });
  }
};

// Now for the specific eventype 

 export const getEventByType = async(req,res) =>{
     try {
         const {eventType} = req.params
         const Model = eventModels[eventType];
         if(!Model){
           return res.status(404).json({
             message: "Event type not found",
             statusCode: 404,
           });
         }
         const events = await Model.find({}).lean();
         if (!events || events.length === 0) {
           return res.status(404).json({
             message: `No ${eventType} events found`,
             statusCode: 404,
           });
         }
         return res.status(200).json({
           message: `Fetched all ${eventType} events successfully`,
           events: events,
           statusCode: 200,
         });
     } catch (error) {
       res.status(500).json({
         message: "Error fetching events",
         error: error.message,
         statusCode: 500,
       });
     }
 }


// specific event get based on id

export const getEventById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("🟢 Received Event ID:", id); // Debugging

    // Ensure ID is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      console.log("🔴 Invalid Event ID:", id);
      return res.status(400).json({
        message: "Invalid Event ID",
        statusCode: 400,
      });
    }

    // Directly fetch event by ID (no need to create ObjectId manually)
    const event = await Event.findById(id).lean();
    console.log("🟢 Fetched Event:", event); // Debugging

    if (!event) {
      console.log("🔴 Event Not Found:", id);
      return res.status(404).json({
        message: "Event not found",
        statusCode: 404,
      });
    }

    return res.status(200).json({
      message: "Fetched event successfully",
      event,
      statusCode: 200,
    });

  } catch (error) {
    console.error("🔥 Error fetching event:", error);
    return res.status(500).json({
      message: "Error fetching event",
      error: error.message,
      statusCode: 500,
    });
  }
};
