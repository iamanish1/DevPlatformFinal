import Event from "../Models/EventModel.js";
import RegisterParticipant from "../Models/EventRegistrationModel.js";
import generateAiHint from "../Services/aiHintService.js";
import runCodeonjudge0 from "../Services/judge0Service.js";
import evealuateCode from "../Services/CodeEvealuationService.js";
import ParticipationModel from "../Models/ParticipationModel.js";

const EventParticipation = async (req, res) => {
  try {
    const { userId, eventId, code, language_id, problemStatement , } = req.body;
    // Validate event existence
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({
        message: "Event not found",
      });
    }
    // Validate user existence
    const user = await ParticipationModel.findOne({ userId, eventId });
    if (user && user.attempts >= 3) {
      return res.status(400).json({
        message: "User already participated in this event",
      });
    }
    //  Execute user  Sumbit code
    const judgeResult = await runCodeonjudge0(code, language_id);
    console.log("Judge Result:", judgeResult);
    const { output, executionTime, errorMessage } = judgeResult;

    //  Generate  Ai solution for problem statment
    const aiHint = await generateAiHint(event.problemStatement);
    console.log("AI Hint:", aiHint);

    //  Evaluate user's code
    const evaluationResult = await evealuateCode(code, aiHint, output);
    console.log("Evaluation Result:", evaluationResult);
    //  Save user's result to database
    const participation = new ParticipationModel({
      userId,
      eventId,
      problemStatement,
      code,
      language_id,
      accuracy: evaluationResult.accuracy,
      readability: evaluationResult.readability,
      complexity: evaluationResult.complexity,
      speed: evaluationResult.speed,
      finalScore: evaluationResult.finalScore,
      retries: evaluationResult.retries, // Used for retry penalty
      status: evaluationResult.status, // "Accepted" or "Failed"
      aiHint: evaluationResult.aiHint, // AI-generated hint (if incorrect)
      submittedAt: new Date(),
    });
    await participation.save();
    res.status(201).json({
      message: "User Participation created successfully",
      participation,
      finalScore: evaluationResult.finalScore,
      accuracy: evaluationResult.accuracy,
      readability: evaluationResult.readability,
      complexity: evaluationResult.complexity,
      speed: evaluationResult.speed,
      retries: evaluationResult.retries,
      status: evaluationResult.status,
      aiHint: evaluationResult.aiHint,
    });
  } catch (error) {
    res.status(404).json({
      message: "Event Particpation error occur ",
      error: error.message,
      statusCode: 404,
    });
  }
};

export default EventParticipation;
