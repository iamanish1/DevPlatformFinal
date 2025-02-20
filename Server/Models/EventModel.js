import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
  eventTitle: {
    type: String,
    required: true,
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
  eventDescription: {
    type: String,
  },
  hostedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AuthUser",
    required: true,
  },
  hostedByName: {
    type: String,
    required: true,
  },

  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  createdAt: {
    // Fixed the typo here
    type: Date,
    default: Date.now,
    index: true,
  },
  refrenceId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    refPath: "eventType",
  },
  numberofParticipant: {
    type: Number,
    required: false,
    default: 0,
    min: 0,
    max: 10000, // Adjusted the maximum value to 10,000 participants
  },
  eventRules: {
    type: [
      {
        rules: {
          type: String,
          required : true ,
         
        },
      },
    ],
    default: function () {
      const defaultRules = {
        bug_hunt_arena: [
          {
            rules:
              "Participants must fix the reported bugs within the given time.",
          },
          {
            rules:
              "Code should be optimized, well-documented, and follow best practices.",
          },
          {
            rules:
              "Solutions will be compared with AI-generated fixes for evaluation.",
          },
          {
            rules:
              "Ranking is based on efficiency, code quality, and problem-solving speed.",
          },
          {
            rules:
              "Plagiarism or using AI-generated/copied code will lead to disqualification.",
          },
          {
            rules:
              "Participants must submit fixes before the deadline; late submissions won’t be considered.",
          },
          {
            rules:
              "Final results will be based on automated and manual code reviews.",
          },
        ],
        debugging_duel: [
          {
            rules:
              "Time Limit: Each participant must submit their bug fixes within the given time frame. Late submissions won’t be considered.",
          },
          {
            rules:
              "Code Quality Matters: Solutions should not only fix the bug but also follow clean coding standards for better efficiency and readability.",
          },
          {
            rules:
              "No AI-Generated Code: You cannot use AI-generated or copied code. All submissions must be your original work.",
          },
          {
            rules:
              "Limited Attempts: You have a limited number of attempts to submit your solution, so review your code before submission.",
          },
          {
            rules:
              " Ranking Criteria: Scores are based on accuracy, speed, and optimization. Faster and cleaner fixes will rank higher.",
          },
          {
            rules:
              "Fair Play: No third-party assistance, collaboration, or external debugging tools allowed. Any violation will lead to disqualification.",
          },
        ],
        code_battle: [
          { rules: "Participants will receive a set of coding challenges." },
          {
            rules: "Solutions must pass all test cases, including edge cases.",
          },
          {
            rules:
              "No third-party libraries or pre-written code allowed unless specified.",
          },
          {
            rules:
              "Ranking is based on execution time, memory efficiency, and correctness.",
          },
          {
            rules:
              "Participants must submit their solutions before the deadline.",
          },
          { rules: "Plagiarism will lead to disqualification." },
          {
            rules: "Use of AI-generated or copied code is strictly prohibited.",
          },
        ],
        hackathon: [
          {
            rules:
              "Participants can compete individually or in teams as per event guidelines.",
          },
          {
            rules:
              "All submissions must be original and developed during the hackathon.",
          },
          {
            rules:
              "Pre-existing projects or code reuse is strictly prohibited.",
          },
          {
            rules:
              "Allowed technology stacks must be followed as per event requirements.",
          },
          {
            rules:
              "Participants must submit their projects before the deadline.",
          },
          {
            rules:
              "Submission must include project documentation and source code (if applicable).",
          },
          {
            rules:
              "Judging criteria include innovation, execution, usability, and presentation.",
          },
          {
            rules:
              "Plagiarism, cheating, or use of AI-generated/copied code will lead to disqualification.",
          },
          {
            rules:
              "Participants retain ownership of their projects but may allow organizers promotional rights.",
          },
          {
            rules:
              "All participants must maintain a professional and respectful environment throughout the event.",
          },
        ],
      };
      return (
        defaultRules[this.eventType] || [
          { rules: "Follow the event guidelines." },
        ]
      );
    },
  },
  eventPrize: [
    {
      position: { type: Number, required: true }, // 1st, 2nd, 3rd
      reward: { type: String, required: true },
  
    },
  ],
  eventImage: {
    type: String,
    required: true,
  },
  eventProcess: {
    type: String,
    default: function () {
      const defaultProcesses = {
        bug_hunt_arena:
          "In Bug Hunt Arena, participants compete by solving reported bugs in a project. After registering for an event, you’ll get access to the project details and a list of existing bugs. Your task is to analyze the bugs, understand their cause, and submit an optimized solution. Each solution is reviewed and compared with AI-generated fixes. Rankings are determined based on efficiency, code quality, and problem-solving speed. The best-performing participants earn points, badges, and monetary rewards. Compete with others, improve your debugging skills, and climb the leaderboard by solving complex bugs efficiently.",
        debugging_duel:
          "Participating in Debugging Duel is an exciting challenge for developers! First, register for the event to receive a pre-written code file containing hidden bugs. Your task is to identify and fix these issues within a limited time. Focus on writing clean, optimized, and efficient code while ensuring the program runs correctly. Once you submit your solution, it will be evaluated based on accuracy, optimization, and speed. The faster and more precise you are, the higher your ranking on the leaderboard. Compete against top coders, sharpen your debugging skills, and prove your expertise in real-world problem-solving!",
        code_battle:
          " Joining Code Battle is easy and thrilling! First, register for the event to receive a set of coding challenges. Each problem tests your logic, problem-solving skills, and coding efficiency. Write optimized solutions that pass all test cases, including edge cases, while ensuring minimal execution time and memory usage. Once you submit your solutions, they are evaluated based on accuracy, speed, and efficiency. The faster and more optimized your code, the higher your rank on the leaderboard. Compete with developers, sharpen your competitive coding skills, and win exciting rewards! Are you ready to prove your coding excellence?  ",
      };

      return (
        defaultProcesses[this.eventType] ||
        "General event process will be shared upon registration."
      );
    },
  },
});

const Event = mongoose.model("Event", EventSchema);

export default Event;
