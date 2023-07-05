import mongoose from "mongoose";
const connectDb = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL as string)
    }catch(error){
        throw new Error("Error connecting to the database")
    }
}


export default connectDb