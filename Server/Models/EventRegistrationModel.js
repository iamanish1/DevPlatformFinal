import mongoose from "mongoose";

const EventRegistrationSchema = new mongoose.Schema({
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
    required: true,  // Ensure eventId is always provided
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AuthUser",
    required: true,  // Ensure userId is always provided
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  registrationDate: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["Registered", "Cancelled"],
    default: "Registered",
  },
  collegename: {
    type: String,
    required: true,
  },
  confirmationEmailSent: { 
    type: Boolean, 
    default: false 
  }
});

// ✅ Ensure one user can register only once for the same event
EventRegistrationSchema.index({ eventId: 1, userId: 1 }, { unique: true });

const RegisterParticipant = mongoose.model("RegisterParticipant", EventRegistrationSchema);

export default RegisterParticipant;
