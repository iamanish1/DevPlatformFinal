import mongoose from "mongoose";

const HackathonSchema = new mongoose.Schema({
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

  HackthonType: {
    type: String,  // Corrected here
    enum: ["offline", "online"],
    required: true,
  },
  hackthontheme: {
    type : [
      {
        type : String, 
        required: true,
      }
    ]
  },
  hackthonlocation : {
    type : String,
    required : true,
  }, 
  hackthoncollegeName: {
    type: String,  // Corrected here
    required: true,
  },
  hostedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AuthUser",
    required: true,
  },

 
  hackthonlocation: {
    type: String,  // Corrected here
    required: true,
  },

  hackthonparticipation : {
    type : [
      {
      type : String,
      required: true,
    }
    ]
  },
  
  judgingCriteria : {
    type : [
      {
        type : String,
        required: true,
      }
    ]
  }
});

const Hackathon = mongoose.model("Hackathon", HackathonSchema);

export default Hackathon;
