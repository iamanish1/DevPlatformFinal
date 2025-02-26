import mongoose from "mongoose" ; 

const ParticipationSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "RegisterParticipant",
        required : true
    },
    eventId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "RegisterParticipant",
        required : true
    },
    status : {
        type : String,
        enum : ['participating', 'submitted', 'disqualified'],
        required : true,
        default : 'participating',
    },
    retries : {
        type : Number,
        default : 0,
        max : 4,
    },
    score : {
        type : Number,
        default : 0,
    },
    timeTaken : {
        type : Number,
        default : 0,
    },
    createdAt : {
        type : Date,
        default : Date.now,
        index : true,
    },
    problemStatement : {
        type : String,
        required : true,
    },
    code: {
        type : String,
        required : true,
    },
    language_id : {
        type :Number , 
    },
    submissions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Submission",
        },
    ],
}, {
    timestamps : true,
})
ParticipationSchema.index({
    userId : 1,
    eventId : 1,
}, {
    unique : true,  // Ensures a user can't participate in the same event twice.  // unique: true is a Mongoose schema option that ensures that the combination of these two fields (userId and eventId) is unique in the collection.  // This prevents duplicate entries.  // The unique: true option is an index, so it can significantly speed up the search operation.  // This index is created on the MongoDB server.  // Mongoose automatically creates an index on unique fields.  // An index is a data structure that improves the speed of data retrieval operations on a MongoDB collection.  // Indexes can significantly speed up read operations by reducing the amount of data the MongoDB server needs to scan.  // The index is created on the MongoDB server.  // This index is created on the MongoDB server.  // Mongoose automatically creates an index on unique fields.  // An index is a data structure that improves the speed of data retrieval operations on a MongoDB
})

export default mongoose.model('Participation', ParticipationSchema) ;