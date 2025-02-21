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
    // Step 1: Convert input dates to UTC format
    const startDate = new Date(req.body.startDate);
    const endDate = new Date(req.body.endDate);

    // Ensure the dates are valid
    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
      return res.status(400).json({
        message: "Invalid date format",
        statusCode: 400,
      });
    }

    // Normalize dates to avoid time zone mismatches
    startDate.setUTCHours(0, 0, 0, 0);
    endDate.setUTCHours(23, 59, 59, 999);

    console.log("🚀 Normalized Start Date:", startDate.toISOString());
    console.log("🚀 Normalized End Date:", endDate.toISOString());

    // Step 2: Check if an event with the same title, host, and overlapping time exists
    const existingEvent = await Event.findOne({
      eventTitle: req.body.eventTitle,
      eventType : req.body.eventType,
      hostedBy: req.body.hostedBy,
      $or: [
        { 
          startDate: { $lte: endDate }, 
          endDate: { $gte: startDate } 
        }, // Overlapping dates
        { endDate: { $gt: new Date() } } // Event still active
      ],
    }).lean();

    console.log("🔎 Existing Event:", existingEvent);

    if (existingEvent) {
      return res.status(400).json({
        message: "❌ Event already exists or is still active.",
        statusCode: 400,
      });
    }

    // Step 3: Create specific event entry
    const specificEvent = new Model(req.body);
    console.log("✅ Specific Event Body:", specificEvent);
    await specificEvent.save();

    // Step 4: Create event in the general event collection
    const event = new Event({
      eventTitle: req.body.eventTitle,
      eventType : req.body.eventType,
      hostedBy: req.body.hostedBy,
      startDate : req.body.startDate,
      endDate : req.body.endDate,
      referenceId: specificEvent._id,
      eventDescription: req.body.eventDescription,
      refrenceId: specificEvent._id,
      quizcategory : req.body.quizcategory,
      mentorshipPersonName : req.body.mentorshipPersonName,
      mentorshipDomain : req.body.mentorshipDomain,
      mentorshipTitle : req.body.mentorshipTitle,
      mentorshipDescription : req.body.mentorshipDescription,
      mentorshipActiveTime : req.body.mentorshipActiveTime,
      problemCoding : req.body.problemCoding, 
      problemDescription : req.body.problemDescription,
      problem : req.body.problem, 
      description : req.body.description, 
      buggyCodeImage : req.body.buggyCodeImage,
      HakthonType : req.body.HakthonType,
      hackthondescription : req.body.hackthondescription,
      hackthonlocation : req.body.hackthonlocation,
      hackthonbanner : req.body.hackthonbanner,
      hackthoncollegename : req.body.hackthoncollegename,
      hackthonprize : req.body.hackthonprize,
      hackthonrules : req.body.hackthonrules,
      numberofParticipant : req.body.numberofParticipant , 
      eventRules : req.body.eventRules , 
      eventPrize  : req.body.eventPrize , 
      eventImage : req.body.eventImage , 
      hostedByName : req.body.hostedByName ,
      maxParticipants : req.body.maxParticipants ,
      eventStartTime : req.body.eventStartTime ,
      eventEndTime : req.body.eventEndTime ,
      eventStatus : req.body.eventStatus ,

    });

    await event.save();

    res.status(200).json({
      message: "✅ Event created successfully",
      event,
      statusCode: 200,
    });

  } catch (error) {
    console.error("❌ Error creating event:", error);
    res.status(500).json({
      message: "Failed to create event",
      error: error.message,
      statusCode: 500,
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
