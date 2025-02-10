import mongoose from "mongoose";


const CodeBattelSchema =  new mongoose.Schema({
    eventTitle: {
        type : String ,
        required : true , 
    },
    eventDescription : {
      type : String ,
      required : true , 
    },
    problemCoding: { type: String, required: true },
    problemDescription: { type: String, required: true },
    hostedBy: { type: mongoose.Schema.Types.ObjectId, ref: "AuthUser", required: true },
})

const CodeBattel = mongoose.model("CodeBattel", CodeBattelSchema);  // Exporting the schema for use in other parts of the application.  (e.g., routes, controllers, etc.)

export default CodeBattel; 