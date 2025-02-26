import axios from "axios" ;

const judge0_api = process.env.judge0
console.log("judge0 api :" , judge0_api); 

const judge0_api_key = process.env.judge0_api_key
console.log("judge0 api key :" , judge0_api_key);

const runCodeonjudge0 = async (code , languageId, expectedOutput) =>{
    try {
        const submissionResponse = await axios.post(
            judge0_api,
            {
                code,
                language_id: languageId,
                expected_output: expectedOutput
            },
            {
                headers: {
                    'Authorization': `Bearer ${judge0_api_key}`
                }
            }
        )

        return submissionResponse.data;
    } catch (error) {
        console.error("Judge0 Execution Error:", error);
        throw new Error("Failed to execute code.");
    }
}