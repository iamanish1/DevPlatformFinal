import mongoose  from "mongoose";


const SpeedGuidnaceSchema = new mongoose.Schema({
    mentorshipPersonName: { type: String, required: true },
    mentorshipDomain: { type: String, required: true },
    mentorshipTitle: { type: String, required: true },
    mentorshipDescription: { type: String, required: true },
    mentorshipActiveTime: { type: String, required: true },
});

const SpeedGudiance = mongoose.model("SpeedGudiance", SpeedGuidnaceSchema); 

export default SpeedGudiance; 