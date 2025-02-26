import mongooes from "mongoose";

const leaderboardSchema = new mongooes.Schema({
  eventID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "RegisterParticipant",
    required: true,
  },
  participant : [{
    userID : {
        type : mongoose.Schema.Types.ObjectId,
        ref: "RegisterParticipant",
        required: true,
    },
    score : {
        type : Number,
        required: true,
        default: 0,
    },
    rank : {
        type : Number,
        required: true,
        default: 0,
    },
}
  ]
}, {timeseries: true}) ; 


const Leaderboard = mongooes.model("Leaderboard", leaderboardSchema);

export default Leaderboard;
