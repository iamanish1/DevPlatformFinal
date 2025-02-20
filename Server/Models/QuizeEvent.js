import mongoose from 'mongoose';

const QuizSchema = new mongoose.Schema({
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
        
    quizcategory: { type: String, required: true },
    questions: [
        {
            question: { type: String, required: true },
            options: { type: "Array", required: true },
            answer: { type: String, required: true } // Added answer field
        },
    ],
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
});

const Quiz = mongoose.model('Quiz', QuizSchema);

export default Quiz; 