import nodemailer from "nodemailer" ; 



const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      
        user: "devhubs526@gmail.com" ,// Load email from env
        pass: "pmvn racv akjt friz", // Load app password from env

    },
});



// Function to send email
const sendConfirmationEmail = async (email , eventTitle)=> {
       const mailoptions = {
        from: "devhubs526@gmail.com" ,
        to: email,
        subject: "Event Registration Confirmation",
        text: `You have successfully registered for the event: ${eventTitle}. See you there!`,
       }

       await transporter.sendMail(mailoptions)
       console.log("Email sent successfully")
}

export default sendConfirmationEmail;  // Export the function for use in other parts of the application.