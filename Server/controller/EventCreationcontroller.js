import Event from "../Models/EventModel.js";
import BugHuntArena from "../Models/BugHuntEventModel.js";
import Hackathon from "../Models/HackthonEventModel.js";
import DebuggingDuel from "../Models/DebbugingDuelModel.js";
import SpeedGuidance from "../Models/SpeedGuidanceModel.js";
import Quiz from "../Models/QuizeEvent.js";
import CodeBattle from "../Models/CodeBattelModel.js";

// Function to create a specific event category
const EventCreation = async (req, res, Model, eventType) => {
  try {
    const specificEvent = new Model(req.body);
    console.log("Specific Event body:", specificEvent);
    await specificEvent.save();

    const event = new Event({
      eventTitle: req.body.eventTitle,
      eventType,
      hostedBy: req.body.hostedBy,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      referenceId: specificEvent._id,
      eventDescription: req.body.eventDescription,  // Fixed this line
      refrenceId: specificEvent._id,  // This lin


    });

    await event.save();
    res.status(200).json({
      message: "Event created successfully",
      event: event,
      statusCode: 200,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to create event",
      error: error.message,
      statusCode: 400,
    });
  }
};

// Event creation routes for different event types
export const createBugHuntArenaEvent = async (req, res) => {
  await EventCreation(req, res, BugHuntArena, "bug_hunt_arena");
};

export const createHackathonEvent = async (req, res) => {
  await EventCreation(req, res, Hackathon, "hackathon");
};

export const createDebuggingDuelEvent = async (req, res) => {
  await EventCreation(req, res, DebuggingDuel, "debugging_duel");
};

export const createCodeBattleEvent = async (req, res) => {
  await EventCreation(req, res, CodeBattle, "code_battle");
};

export const createSpeedGuidanceEvent = async (req, res) => {
  await EventCreation(req, res, SpeedGuidance, "speed_guidance");
};

export const createQuizEvent = async (req, res) => {
  await EventCreation(req, res, Quiz, "quiz");
};
