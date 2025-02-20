import mongooes from "mongoose" ; 



const EventRegistartionSchema =  new mongooes.Schema({
    eventid : {
        type : mongooes.Schema.Types.ObjectId, 
        ref : "Event"
    }
    ,
    userId : {
        type : mongooes.Schema.Types.ObjectId,
        ref : "AuthUser"
    },
    name : {
        type : String,
        required : true,
    } , 
    email : {
        type : String,
        required : true,
    } ,
    contactNumber : {
        type : String,
        required : true,
    } ,
    registrationDate : {
        type : Date,
        default : Date.now,
    },
    status : {
        type : String,
        enum : ["Registered", "Cancelled"],
        default : "Registered",
    },
    confirmationEmailSent: { 
        type: Boolean, 
        default: false 
    }

}); 

// Ensure one user can register only once for the same event
RegistrationSchema.index({ eventId: 1, userId: 1 }, { unique: true });

const RegisterParticipant = mongooes.Model("RegisterParticipant", EventRegistartionSchema) ; 

export default RegisterParticipant ;
