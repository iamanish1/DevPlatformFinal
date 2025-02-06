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
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
});

const Quiz = mongoose.model('Quiz', QuizSchema);

export default Quiz; 