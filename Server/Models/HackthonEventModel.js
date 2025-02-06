import mongoose from "mongoose";

const HackathonSchema = new mongoose.Schema({
  HackthonType: {
    type: String,  // Corrected here
    enum: ["offline", "online"],
    required: true,
  },
  theme: {
    type: String,  // Corrected here
    required: true,
  },
  description: {
    type: String,  // Corrected here
    required: true,
  },
  banner: {
    type: String,  // Corrected here
    required: true,
  },
  hostedby: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AuthUser",
    required: true,
  },
  collegeName: {
    type: String,  // Corrected here
    required: true,
  },
  location: {
    type: String,  // Corrected here
    required: true,
  },
});

const Hackathon = mongoose.model("Hackathon", HackathonSchema);

export default Hackathon;
