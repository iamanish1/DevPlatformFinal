import mongoose from "mongoose";

const HackthonSchema = new mongoose.Schema({
  HackthonType: {
    type: string,
    enum: ["offline", "online"],
    required: true,
  },
  theme : {
    type: String,
    required: true,
  },
  description : {
    type: String,
    required: true,
  },
  banner : {
    type: String,
    required: true,
  },
  hostedby : {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AuthUser",
    required: true,
  },
  collegeName : {
    type: String,
    required: true,
  },
  location : {
    type: String,
    required: true,
  },
});

const Hackthon = mongoose.model("Hackthon", HackthonSchema);

export default Hackthon;