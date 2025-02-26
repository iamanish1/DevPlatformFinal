import axios from "axios";

const generateAiHint = async (
  userCode,
  errorMessage,
  language,
  expectedOutput
) => {
  try {
    const deepseekApi = process.env.ai_model_Uri;
    console.log("deepseekApi", deepseekApi);
    const deepseekApikey = process.env.ai_model_key;
    console.log("deepseekApikey", deepseekApikey);

    if (!deepseekApikey) {
      console.error(
        "Missing AI model API key. Please set it in your environment variables."
      );
      return "⚠️ AI hint generation failed. Please check your environment variables and try again.";
    }

    const prompt = `You are an expert coding mentor specializing in ${language}.
        A user has submitted a code that contains errors. Analyze the code, expected output, and error message.
        Identify the mistake and provide a clear, concise hint to guide the user.
        Do **not** reveal the full solution.
        
        User Code: ${userCode}
        Expected Output: ${expectedOutput}
        Error Message: ${errorMessage}
         
        **Your Task**:
        - Identify the **exact** mistake.
        - Explain it in **simple, clear** language.
        - Suggest a **precise correction** without solving the entire problem.
        
        Respond in a single helpful sentence.`;

    // AI request configuration
    const requestData = {
      model: "deepseek-chat",
      messages: [
        {
          role: "system",
          content: prompt,
        },
      ],
      temperature: 0.6, // Keep responses stable and helpful
      max_tokens: 120, // Allow detailed yet concise hints
    };

    // Make API request with retry system
    const maxretries = 4;
    for (let i = 0; i < maxretries; i++) {
      try {
        const response = await axios.post(deepseekApi, requestData, {
          headers: { Authorization: `Bearer ${deepseekApikey}` },
          timeout: 5000, // Set a timeout to avoid delays
        });

        // Extract AI-generated hint
        const aiHint = response.data.choices?.[0]?.message?.content?.trim();
        if (aiHint) return aiHint;
      } catch (error) {
        console.warn(`DeepSeek API attempt ${i + 1} failed:`, error.message);
        if (i === maxretries - 1) throw error;
      }
    }
  } catch (error) {
    console.error("AI Hint Generation Error:", error.message);
    return "⚠️ AI hint generation failed. Please check your code and try again.";
  }
};

export default generateAiHint;
