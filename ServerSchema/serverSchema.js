import mongoose from "mongoose"

const {Schema,model}= mongoose

const UserSchema = Schema({
    first_name:{
        type: String,
        required: true
    }, 
    last_name:{
        type:String,
    },
    school:{
        type:Boolean,
        default:false
    },
    date_of_birth:{
        type:Date,
        
    }
})
const UserModel=model("User", UserSchema)
export default UserModel