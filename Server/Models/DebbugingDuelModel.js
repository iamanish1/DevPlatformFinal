import mongoose from 'mongoose'; 

const DebbugingDuelShema = new mongoose.Schema(
    {
        problem: { type: String, required: true },
        description: { type: String, required: true },
        buggyCodeFile: { type: String, required: true },
        hostedBy: { type: mongoose.Schema.Types.ObjectId, ref: "AuthUser", required: true },
    }
)

const DebuggingDuel = mongoose.Model("DebuggingDuel", DebbugingDuelShema)

export default DebuggingDuel;  // Exporting the schema for use in other parts of the application.  (e.g., routes, controllers, etc.)