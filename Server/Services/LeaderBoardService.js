import ParticipationModel from "../Models/ParticipationModel.js";
import RegisterParticipant from "../Models/EventRegistrationModel.js";

const getLeaderboard = async( eventId , limit = 40) =>{
    try {
         // Fetch all user participation records for the event
         const partticpants = await ParticipationModel.find({eventId: eventId}) ; 
         console.log("particpant :" , partticpants) ; 
         if(partticpants.length ===0) {
            return { error: "No participants found for this event." };
         }
          // Fetch user details
          const users = await Promise.all(particpants.map(async (p) => {
            const user = await RegisterParticipant.findById(p.userId).select("-password");
            return user;
          }));
           // Sort participants based on multiple ranking criteria
           participants.sort((a, b) => {
            if (b.score !== a.score) return b.score - a.score; // 1️ Highest Score Wins
            if (b.accuracy !== a.accuracy) return b.accuracy - a.accuracy; // 2️ Accuracy
            if (b.readability !== a.readability) return b.readability - a.readability; // 3️ Readability & Complexity
            if (b.logic !== a.logic) return b.logic - a.logic; // 4️ Logic
            if (b.speed !== a.speed) return b.speed - a.speed; // 5️ Speed
            return a.retries - b.retries; // 6️ Fewer Retries Win (Penalty System)
        });

         // Assign ranks dynamically

         let leaderBoard  = [] ; 
         let currentrank = 1 ; 
         for(let i=1 ; i<participants.length ; i++){
            let user = users.find(u => u._id.toString() === participants[i].userID.toString());
            let previousParticipant = leaderBoard[i - 1];
            // Assign rank (check if previous participant had the same score)

            if (
                i > 0 &&
                participants[i].score === previousParticipant.score &&
                participants[i].accuracy === previousParticipant.accuracy &&
                participants[i].readability === previousParticipant.readability &&
                participants[i].logic === previousParticipant.logic &&
                participants[i].speed === previousParticipant.speed &&
                participants[i].retries === previousParticipant.retries
            ) {
                currentrank = previousParticipant.rank; // Same rank if all values match
            } else {
                currentrank = i + 1; // Otherwise, assign a new rank
            }
            leaderboard.push({
                rank: currentRank,
                userID: participants[i].userID,
                username: user ? user.username : "Unknown",
                score: participants[i].score,
                accuracy: participants[i].accuracy,
                readability: participants[i].readability,
                logic: participants[i].logic,
                speed: participants[i].speed,
                retries: participants[i].retries
            });
         }
        return leaderBoard ;  

    } catch (error) {
        console.error("Leaderboard Error:", error);
        return { error: "Error fetching leaderboard!" };
    }
}

export default getLeaderboard;