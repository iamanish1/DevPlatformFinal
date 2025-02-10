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
        problem: { type: String, required: true },
        description: { type: String, required: true },
        buggyCodeFile: { type: String, required: true },
        hostedBy: { type: mongoose.Schema.Types.ObjectId, ref: "AuthUser", required: true },
    }
)

const DebuggingDuel = mongoose.model("DebuggingDuel", DebbugingDuelShema); 

 export default DebuggingDuel ; 