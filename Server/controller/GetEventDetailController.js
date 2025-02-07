import Event from "../Models/EventModel.js";
import BugHuntArena from "../Models/BugHuntEventModel.js";
import Hackathon from "../Models/HackthonEventModel.js";
import DebuggingDuel from "../Models/DebbugingDuelModel.js";
import SpeedGuidance from "../Models/SpeedGuidanceModel.js";
import Quiz from "../Models/QuizeEvent.js";
import CodeBattle from "../Models/CodeBattelModel.js";

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