import mongoose from 'mongoose';

const QuizSchema = new mongoose.Schema({
    category: { type: String, required: true },
    questions: [
        {
            question: { type: String, required: true },
            language: { type: String },
            answer: { type: String, required: true } // Added answer field
        },
    ],
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
});

const Quiz = mongoose.model('Quiz', QuizSchema);

export default Quiz; 