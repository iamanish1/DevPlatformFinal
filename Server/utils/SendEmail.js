import nodemailer from "nodemailer" ; 


const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "animetra14@gmail.com",
        pass: "iamanish@2005" ,
    },
});

// Function to send email
const sendConfirmationEmail = async (email , eventTitle)=> {
       const mailoptions = {
        from: process.env.GMAIL_USERNAME,
        to: email,
        subject: "Event Registration Confirmation",
        text: `You have successfully registered for the event: ${eventTitle}. See you there!`,
       }

       await transporter.sendMail(mailoptions)
       console.log("Email sent successfully")
}

export default sendConfirmationEmail;  // Export the function for use in other parts of the application.