import mongoose from "mongoose";

const SpeedGuidnaceSchema = new mongoose.Schema({
  eventTitle: {
    type: String,
    required: true,
  },
  eventDescription: {
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

  mentorshipPersonName: { type: String, required: true },
  mentorshipDomain: { type: String, required: true },
  mentorshipActiveTime: { type: String, required: true },
  mentorshipType: { type: "String", enum: ["free", "paid"], required: true },
  mentorshipPrice: {
    type: "Number",
    required: function () {
      return this.mentorshipType === "paid";
    },
    default: 0,
  },
  eventStartTime: {
    type: String,
    reuired: true,
  },

  eventEndTime: {
    type: String,
    required: true,
  },
  eventStatus: {
    type: String,
    enum: ["Upcoming", "Live", "Ended"],
    default: "Upcoming",
  },
});

const SpeedGudiance = mongoose.model("SpeedGudiance", SpeedGuidnaceSchema);

export default SpeedGudiance;
