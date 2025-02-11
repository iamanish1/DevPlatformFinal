import mongoose  from "mongoose";


const SpeedGuidnaceSchema = new mongoose.Schema({
    eventTitle: {
        type : String ,
        required : true , 
    },
    eventDescription : {
      type : String ,
      required : true , 
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
    mentorshipTitle: { type: String, required: true },
    mentorshipDescription: { type: String, required: true },
    mentorshipActiveTime: { type: String, required: true },
});

const SpeedGudiance = mongoose.model("SpeedGudiance", SpeedGuidnaceSchema); 

export default SpeedGudiance; 