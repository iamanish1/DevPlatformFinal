import mongoose from "mongoose";

const HackathonSchema = new mongoose.Schema({
  HackthonType: {
    type: String,  // Corrected here
    enum: ["offline", "online"],
    required: true,
  },
  hackthontheme: {
    type: String,  // Corrected here
    required: true,
  },
  hackthondescription: {
    type: String,  // Corrected here
    required: true,
  },
  hackthonbanner: {
    type: String,  // Corrected here
    required: true,
  },
  hostedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AuthUser",
    required: true,
  },
  hackthoncollegeName: {
    type: String,  // Corrected here
    required: true,
  },
  hackthonlocation: {
    type: String,  // Corrected here
    required: true,
  },
  hackthonprize : {
    type: Number,
    required: true,
    validate: {
      validator: Number.isInteger,  // Ensures that the value is an integer
      message: '{VALUE} is not an integer value!',
    }, //
  },
  hackthonrules : {
    type : String,
    required : true , //
  }
});

const Hackathon = mongoose.model("Hackathon", HackathonSchema);

export default Hackathon;
