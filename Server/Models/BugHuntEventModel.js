import mongoose from 'mongoose'; 

const BugHuntArenaSchema = new mongoose.Schema({
    eventTitle: {
        type :   mongoose.Schema.Types.ObjectId ,
        ref : 'Event',
        required : true,
    },
    eventDescription : {
        type :   mongoose.Schema.Types.ObjectId ,
        ref : 'Event',
        required : true,
    },
    problemDescription : {
        type : String,
        required : true,
    },
    projectTheme : {
        type : String,
        required : true,
    },
    techstack : {
        type : [String],
        required : true,
    },
    photo : {
        type :[String],
        required : false,
    },
    video : {
        type : [String],
        required : false,
    },
    hostedBy: { type: mongoose.Schema.Types.ObjectId, ref: "AuthUser", required: true },
})

const BugHuntArena = mongoose.model('BugHuntArena', BugHuntArenaSchema);

export default BugHuntArena; 