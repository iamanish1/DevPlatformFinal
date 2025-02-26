import runCodeonjudge0 from "./judge0Service.js";
import generateAiHint from "./aiHintService.js";
import axios from "axios";

const evaluateCode = async (
  userId,
  eventId,
  code,
  language_Id ,
  ProblemStatement,
  expectedOutput,
  retryCount
) => {
  try {
     console.log("🔍 Received Data:", { userId, eventId, code, language_Id, ProblemStatement, expectedOutput, retryCount });
    // ✅ Validate language_id

    if (language_id || isNaN(language_Id)) {
      console.error("Invalid or missing Language ID:", language_Id);
      return { success: false, message: "Language ID is missing or invalid." };
    }

    console.log("Language ID:", language_Id);

    // ✅ Run user code on Judge0
    const executionResult = await runCodeonjudge0(code, language_Id);
    if (!executionResult || executionResult.status?.id !== 3) {
      return { success: false, message: "Code execution failed. Try again later." };
    }

    console.log("Executed Result:", executionResult);

    // ✅ Extract actual output
    const actualOutput = executionResult.stdout?.trim() || "";
    console.log("Actual Output:", actualOutput);

    // ✅ AI Solution Generation (DeepSeek)
    const deepSeekApi = process.env.ai_model_Uri;
    const deepseekApiKey = process.env.ai_model_key;

    const prompt = `You are an AI coding assistant. Generate a **correct and optimized solution** for the following problem in ${language_id}.
    --- Problem Statement ---
    ${ProblemStatement}
    Provide **only the code** with no explanations.`;

    let aiSolution = "";
    try {
      const aiResponse = await axios.post(
        deepSeekApi,
        {
          model: "deepseek-chat",
          messages: [{ role: "system", content: prompt }],
          temperature: 0.5,
          max_tokens: 300,
        },
        {
          headers: { Authorization: `Bearer ${deepseekApiKey}` },
        }
      );
      aiSolution = aiResponse.data.choices?.[0]?.message?.content?.trim() || "";
      console.log("AI Solution:", aiSolution);
    } catch (error) {
      console.error("AI Hint Generation Error:", error.message);
      return { success: false, message: "AI solution generation failed." };
    }

    // ✅ Run AI solution on Judge0
    const aiExecutionResult = await runCodeonjudge0(aiSolution, language_Id);
    if (!aiExecutionResult || aiExecutionResult.status?.id !== 3) {
      return { success: false, message: "AI solution execution failed. Try again later." };
    }

    console.log("AI Executed Result:", aiExecutionResult);

    // ✅ Extract AI output
    const aiActualOutput = aiExecutionResult.stdout?.trim() || "";
    console.log("AI Actual Output:", aiActualOutput);

    // ✅ Compare AI solution with user solution
    const isCorrect = actualOutput === expectedOutput.trim();
    let score = 0;

    if (isCorrect) {
      score += 40; // Accuracy (40%)
      score += compareCodeQuality(code, aiSolution) * 0.2; // Readability & Logic (20%)
      score += evaluateSpeed(executionResult.time) * 0.2; // Speed (20%)
      score += evaluateComplexity(code) * 0.2; // Complexity (20%)
    } else {
      // Apply penalty on wrong submission
      score = Math.max(0, score - retryCount * 2);

      // ✅ Generate AI hint
      const aiHint = await generateAiHint(code, executionResult.stderr, language_Id, expectedOutput);
      return { success: false, message: "Incorrect submission. Try again.", aiHint, aiSolution, score };
    }

    return { success: true, message: "Correct solution!", aiSolution, score };
  } catch (error) {
    console.error("Code Evaluation Error:", error);
    return { success: false, message: "An error occurred while evaluating the code." };
  }
};

// **Helper Functions**
const compareCodeQuality = (userCode, aiSolution) => {
  return userCode.length <= aiSolution.length * 1.2 ? 10 : 5;
};

const evaluateSpeed = (executionTime) => {
  if (!executionTime) return 5;
  if (executionTime < 1) return 10;
  if (executionTime < 2) return 7;
  return 5;
};

const evaluateComplexity = (code) => {
  const keywords = ["for", "while", "if", "switch", "function", "def"];
  const complexityScore = keywords.reduce((acc, keyword) => acc + (code.includes(keyword) ? 2 : 0), 0);
  return Math.min(complexityScore, 10);
};

export default evaluateCode;
