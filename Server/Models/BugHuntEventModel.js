import mongoose from 'mongoose'; 

const BugHuntArenaSchema = new mongoose.Schema({
    eventTitle: {
        type :  String ,
        required : true,
    },
    eventDescription : {
        type :   String ,
        required : true,
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
    
    problemDescription : {
        type : String,
        required : true,
    },
    projectTheme : {
        type : String,
        required : true,
    },
    techstack : {
        type : [String],
        required : true,
    },
    photo : {
        type :[String],
        required : false,
    },
    video : {
        type : [String],
        required : false,
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
      startDate: {
        type: Date,
        required: true,
      },
      endDate: {
        type: Date,
        required: true,
      },
    hostedBy: { type: mongoose.Schema.Types.ObjectId, ref: "AuthUser", required: true },
})

const BugHuntArena = mongoose.model('BugHuntArena', BugHuntArenaSchema);

export default BugHuntArena; 