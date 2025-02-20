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
  },
  hostedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AuthUser",
    required: true,
  },
  hostedByName: {
    type: String,
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
  createdAt: {
    // Fixed the typo here
    type: Date,
    default: Date.now,
    index: true,
  },
  refrenceId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    refPath: "eventType",
  },
  numberofParticipant: {
    type: Number,
    required: false,
    default: 0,
    min: 0,
    max: 10000, // Adjusted the maximum value to 10,000 participants
  },
  eventRules: [
    {
      rules: {
        type: String,
        required: true,
      },
    },
  ],
  eventPrize: [
    {
      position: { type: Number, required: true }, // 1st, 2nd, 3rd
      reward: { type: String, required: true }, // Prize amount or description
    },
  ],

  eventImage: {
    type: String,
    required: true,
  },
  eventProcess: {
    type: String,
    default: function () {
      const defaultProcesses = {
        bug_hunt_arena:
          "In Bug Hunt Arena, participants compete by solving reported bugs in a project. After registering for an event, you’ll get access to the project details and a list of existing bugs. Your task is to analyze the bugs, understand their cause, and submit an optimized solution. Each solution is reviewed and compared with AI-generated fixes. Rankings are determined based on efficiency, code quality, and problem-solving speed. The best-performing participants earn points, badges, and monetary rewards. Compete with others, improve your debugging skills, and climb the leaderboard by solving complex bugs efficiently.",
        debugging_duel: "Debbuging Duel",
        code_battle: "Code Battle",
      };

      return (
        defaultProcesses[this.eventType] ||
        "General event process will be shared upon registration."
      );
    },
  },
});

const Event = mongoose.model("Event", EventSchema);

export default Event;
