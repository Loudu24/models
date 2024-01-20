import mongoose from "mongoose";
const lmsSchema=new mongoose.Schema({
  
},{timestamps:true})

export const Lms= mongoose.model("Lms",lmsSchema)