import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import UserModel from "./ServerSchema/serverSchema.js"




const app = express()

dotenv.config()
app.use(cors())
app.use(express.json())

const port =  process.env.PORT||8000

const url = process.env.DB_URL

mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(()=>{
    //successful connection message
    console.log("Database connected successfully")
}).catch((error)=>{
    console.log(error)
})

///home route
app.get("/",(req,res)=>{
    res.send("Welcome to User Server API")
})
//Get all Users on database
app.get("/Users",async(req,res)=>{
    const User= await UserModel.find({});

    if (User){

       return res.status(200).json({
            message:"Fetch all Users from database",
            data: User
        })
    }else{
       return res.status(400).json({
            message:"Failed to fetch Users from database"
        })
    }

})


//Create a new User into the database
app.post("/create",async(req,res)=>{
    const{first_name, last_name,school,date_of_birth}=req.body
    const createUser = await UserModel.create({
        first_name,
        last_name,
        school,
        date_of_birth
    })
    if(createUser){
        return res.status(200).json({
            message:"User created successfully",
            data: createUser
        
        })
    }else{
        return{
            message:"Failed to create a new User",
            
        }
    }
})

app.listen(port,() => {
    console.log(`Simple server running at ${port}`)
});
