import axios from "axios";

const judge0_api = process.env.judge0 + "/submissions"; // Ensure the correct endpoint
console.log("Judge0 API:", judge0_api);

const judge0_api_key = process.env.judge0_api_key;
console.log("Judge0 API Key:", judge0_api_key);

const runCodeonjudge0 = async (code, language_Id, expectedOutput) => {
  try {
    const submissionResponse = await axios.post(
      judge0_api,
      {
        source_code: code, // Fix: Use "source_code" instead of "code"
        language_id: language_Id, // Ensure this is correct
        expected_output: expectedOutput || null, // Fix: Ensure expectedOutput is string/null
        stdin: "", // Optional but recommended
        cpu_time_limit: 5, // Optional but useful
        memory_limit: 128000, // Optional but useful
      },
      {
        headers: {
          "X-RapidAPI-Key": judge0_api_key,
          "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
          "Content-Type": "application/json",
        },
        params: {
          base64_encoded: "false",
          wait: "true", // Fix: Ensure Judge0 waits for execution result
        },
      }
    );

    return submissionResponse.data;
  } catch (error) {
    console.error("Judge0 Execution Error:", error.response?.data || error.message);
    throw new Error("Failed to execute code.");
  }
};

export default runCodeonjudge0;
