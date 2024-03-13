import mongoose from "./moggoseConDB.js";


const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required:[true, "user Name is required"]
    },
    email:{
        type:String,
        required:[true, "Email is Required"]
    },
    pass:{
        type:String,
        required:[true, "Password is Required"]
    }
},
{versionkey:false}
)

const userModel=mongoose.model("User", userSchema)

export default userModel