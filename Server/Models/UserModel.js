import mongoose from "mongoose"; 

const UserSchema = new mongoose.Schema({
    username : {
        type : String,
        required : false ,
        unique : true
    },
    email : {
         type : String,
         required : true,
         unique : true
    }, 
    password : {
        type : String,
        required : true
    }
}); 

const AuthUser = mongoose.model("AuthUser", UserSchema);

export default AuthUser; 