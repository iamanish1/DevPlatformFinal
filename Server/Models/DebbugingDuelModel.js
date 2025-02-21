import mongoose from 'mongoose'; 

const DebbugingDuelShema = new mongoose.Schema(
    {     eventTitle: {
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
      
    
        problem: { type: String, required: true },
        description: { type: String, required: true },
        buggyCodeImage: { type: String, required: true },
        hostedBy: { type: mongoose.Schema.Types.ObjectId, ref: "AuthUser", required: true },
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
        startDate: {
          type: Date,
          required: true,
        },
        endDate: {
          type: Date,
          required: true,
        },
    }
)

const DebuggingDuel = mongoose.model("DebuggingDuel", DebbugingDuelShema); 

 export default DebuggingDuel ; 