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
        type:String,
        
    },
    date_of_birth:{
        type:String,
        
    }
})
const UserModel=model("User", UserSchema)
export default UserModel
