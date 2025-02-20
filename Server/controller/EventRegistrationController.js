import RegisterParticipant from "../Models/EventRegistrationModel.js" ; 
import Event from "../Models/EventModel.js" ; 
import sendConfirmationEmail from "../utils/SendEmail.js";
import mongoose from "mongoose";



// Function to register a participant in an event

export const RegisterForEvent  = async(req, res) =>{
  try {
    const { eventId, name , email , contactNumber, collegename } = req.body ;
     
    console.log("📌 Received Event ID:", eventId);

    // Validate eventId format
    if (!mongoose.Types.ObjectId.isValid(eventId)) {
      return res.status(400).json({ message: "Invalid event ID format" });
    }

    const userId = req.AuthUser.id
    console.log("��� Received User ID:", userId); // Debugging

    // check if the user is already registered
    const existingRegistration = await RegisterParticipant.findOne({ eventId, userId });
    if (existingRegistration) {
      return res.status(400).json(
        { message: "You are already registered for this event" }
      );
    }

    // check if the event exists
    const event = await Event.findById(eventId);
    console.log("Event " + event)
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

      // ✅ Check if event is full
      if (event.participantCount >= event.maxParticipants) {
        return res.status(400).json({ message: "Event is full" });
    }

    // create a new registration
    const registration = new RegisterParticipant({
      eventId,
      userId,
      name,
      email,
      contactNumber,
      collegename,
    });

    // save the registration
    await registration.save();

    // send confirmation email
    await sendConfirmationEmail(email, "Event Registration Confirmation");

    // ✅ Update participant count
    await Event.findByIdAndUpdate(eventId, { $inc: { participantCount: 1 } });

    res.status(201).json({
        message: "�� Registration successful",
        registration,
        statusCode: 201,
  
    });
    
  } catch (error) {
    res.status(500).json(
        { message: "Server error", 
        error : error.message }
    );
  }
}