import runCodeonjudge0 from "./judge0Service.js";
import generateAiHint from "./aiHintService.js";

const evealuateCode = async (
  userId,
  eventId,
  userCode,
  language_Id,
  ProblemStatement,
  expectedOutput,
  retryCount
) => {
  try {
    const deepSeekApi = process.env.ai_model_Uri;
    const deepseekApiKey = process.env.ai_model_key;

    //  Run the user code
    const executionResult = await runCodeonjudge0(userCode, language_Id);
    if (!executionResult || executionResult.status !== "success") {
      return {
        success: false,
        message: "Code execution failed. Try again later.",
      };
    }
    console.log("exectued Result :", executionResult);
    // Extract Result
    const actualOuput = executionResult.result
      ? executionResult.stdout.trim()
      : null;
    console.log("Actual Output :", actualOuput);
    const errorMessage =
      executionResult.stderr || executionResult.compile_output || "";

    //  Genreate Ai solution for comparison with actual solution
    const prompt = `
          You are an AI coding assistant. Generate a **correct and optimized solution** for the following problem in ${languageId}.

        --- Problem Statement ---
        ${ProblemStatement}

        Provide **only the code** with no explanations.
        `;

        const aiResponse = await axios.post( deepSeekApi, {
            model: "deepseek-chat",
            messages: [{ role: "system", content: prompt }],
            temperature: 0.5,
            max_tokens: 300
        }, {
            headers: { "Authorization": `Bearer ${deepseekApiKey}` }
        });
        const aiSolution = aiResponse.data.choices[0].message.content.trim();
        console.log("Ai Solution :", aiSolution);

        // Run Ai solution 
        const aiExecutionResult = await runCodeonjudge0(aiSolution, language_Id);
        if (!aiExecutionResult || aiExecutionResult.status!== "success") {
          return {
            success: false,
            message: "AI solution execution failed. Try again later.",
          };
        }
        console.log("Ai exectued Result :", aiExecutionResult);
        // Extract Ai Result
        const aiActualOuput = aiExecutionResult.result
         ? aiExecutionResult.stdout.trim()
          : null;
        console.log("Ai Actual Output :", aiActualOuput);

        //  compare AI solution with user Solution 
         const isCorrect = actualOuput === expectedOutput ; 
         let score = 0 ; 
         if(isCorrect) {
            score += 40  // Accuracy (40%)
            score += comparecodequality(userCode, aiSolution)*0.2 // Readability & Logic (20%)
            score += evaluateSpeed(executionResult.time) * 0.2; // Speed (20%)
            score += evaluateComplexity(userCode) * 0.2; // Complexity (20%)
         }
         else {
              // **Step 6: Apply Penalty on Wrong Submission**
              score = Math.max(0, score - (retryCount * 2));

              // **Step 7: Generate AI Hint**
              const aiHint = await generateAiHint(userCode, errorMessage, language_Id, expectedOutput);
              return {
                  success: false,
                  message: "Incorrect submission. Try again.",
                  aiHint,
                  aiSolution,
                  score,
              };
         }
         return { success: true, message: "Correct solution!", aiSolution, score };
  } catch (error) {
    console.error("Code Evaluation Error:", error);
    return {
      success: false,
      message: "An error occurred while evaluating the code.",
    };
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


export default evealuateCode; 
