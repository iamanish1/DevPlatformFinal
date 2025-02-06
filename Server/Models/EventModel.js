import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
  eventTitle: {
    type: String,
    required: true,
  },
  eventType: {
    type: String,
    required: true,
    enum: [
      "bug_hunt_arena",
      "hackathon",
      "debugging_duel",
      "code_battle",
      "speed_guidance",
      "quiz",
    ],
  },
  eventDescription: {
    type: String,
    required: true,
  },
  hostedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AuthUser",
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  createdAt: {  // Fixed the typo here
    type: Date,
    default: Date.now,
    index: true,
  },
  refrenceId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    refPath: "eventType",
  },
});

const Event = mongoose.model("Event", EventSchema);

export default Event;
