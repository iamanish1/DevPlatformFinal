import RegisterParticipant from "../Models/EventRegistrationModel.js" ; 
import Event from "../Models/EventModel.js" ; 
import sendConfirmationEmail from "../utils/SendEmail.js";
import mongoose from "mongoose";



// Function to register a participant in an event

export const RegisterForEvent  = async(req, res) =>{
  try {
    const { eventId, name, email, contactNumber, collegename } = req.body;
    
    console.log("📌 Received Event ID:", eventId);

    // Validate eventId format
    if (!mongoose.Types.ObjectId.isValid(eventId)) {
      return res.status(400).json({ message: "Invalid event ID format" });
    }

    const userId = req.AuthUser.id;
    console.log("📌 Received User ID:", userId); // Debugging ✅

    // 🔹 Check if the user is already registered for THIS specific event
    const existingRegistration = await RegisterParticipant.findOne({ eventId, userId });

    if (existingRegistration) {
      return res.status(400).json({ message: "❌ You are already registered for this event!" });
    }

    // 🔹 Check if the event exists
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ message: "❌ Event not found!" });
    }
    console.log(`🔍 Before Registration: ${event.numberofParticipant} participants`);


    // 🔹 Check if event is full (Ensure participantCount is initialized in the DB)
    if (event.numberofParticipant  >= event.maxParticipants) {
      return res.status(400).json({ message: "❌ Event is full!" });
    }

    // 🔹 Create a new registration entry
    const registration = new RegisterParticipant({
      eventId,
      userId,
      name,
      email,
      contactNumber,
      collegename,
      status: "Registered",
      confirmationEmailSent: false, 
    });

    // 🔹 Save the registration
    await registration.save();

    // 🔹 Send confirmation email
    await sendConfirmationEmail(email, "Event Registration Confirmation");

    // 🔹 Mark email as sent
    registration.confirmationEmailSent = true;
    await registration.save();

     // ✅ Update number of participants
     const updatedEvent = await Event.findByIdAndUpdate(
      eventId,
      { $inc: { numberofParticipant: 1 } },  // Use `numberofParticipant`
      { new: true } // Return the updated document
    );

    console.log(`✅ After Registration: ${updatedEvent.numberofParticipant} participants`);



    res.status(201).json({
      message: "✅ Registration successful!",
      registration,
      statusCode: 201,
    });

  } catch (error) {
    console.error("❌ Registration Error:", error);
    res.status(500).json({ message: "❌ Server error!", error: error.message });
  }
}


// Cancel Event Registration

export const CancelEventRegistration  = async(req, res) =>{
  try {
      const { eventId, userId } = req.body;
      
      console.log("�� Received Event ID:", eventId);
      console.log("�� Received User ID:", userId);

      // Find and delete registration

      const registration = await RegisterParticipant.findOneAndDelete({ eventId, userId });
      
      if (!registration) {
        return res.status(404).json({ message: "�� Registration not found!" });
      }
  //  Dcreases the participant count 
      const updatedEvent = await Event.findByIdAndUpdate(
        eventId,
        { $inc: { numberofParticipant: -1 } },  // Use `numberofParticipant`
        { new: true } // Return the updated document
      );

      console.log(`�� After cancellation: ${updatedEvent.numberofParticipant} participants`);
      res.status(200).json({ message: "�� Registration cancelled!" });
  
  } catch (error) {
    res.status(500).json({ message: "server error!", error: error.message });
  }
}