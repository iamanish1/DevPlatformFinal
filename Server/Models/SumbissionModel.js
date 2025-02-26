import mongooes from "mongoose" ; 

const SubmissionSchema = new mongooes.Schema({
    participationId : {
        type : mongooes.Schema.Types.ObjectId,
        ref : "Participation",
        required : true
    },
    eventId : {
        type : mongooes.Schema.Types.ObjectId,
        ref : "RegisterParticipant",
        required : true,
    },
    code : {
        type : String,
        required : true
    }, 
    language_id : {
        type : Number ,
        required : true
    },
    executionOutput : {
        type : String,
       
    },
    executionerror : {
        type : String,
    },
    aiHint : {
        type : String,
    },
    accuracy : {
        type : Number,
        default : 0,
    },
    readability : {
        type : Number,
        default : 0,
    },
    logic : {
        type : Number,
        default : 0,
    },
    speed : {
        type : Number,
        default : 0,
    },
    finalScore : {
        type : Number,
        default : 0,
    },
    retries: {
        type: Number,
        default: 0,  // Submission attempt number
    },
    status: {
        type: String,
        enum: ["pending", "failed", "evaluated"],
        default: "pending",
    },
}, {timestamps: true});

const Submission = mongooes.model("Submission", SubmissionSchema);

export default Submission;  // Exporting the model for usage in other parts of the application.