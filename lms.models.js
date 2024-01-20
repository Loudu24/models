import mongoose, { Schema, SchemaType } from "mongoose";
import  mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const lmsSchema=new mongoose.Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:"userDetails"
    },
    qpaper:{
        type:Schema.Types.ObjectId,
        ref:"Qpaper"
    },
    notes:{
        type:Schema.Types.ObjectId,
        ref:"Notes"
    },
    qbank:{
        type:Schema.Types.ObjectId,
        ref:"Qbank"
    },
    syllabus:{
        type:Schema.Types.ObjectId,
        ref:"Syllabus"
    },
  
},{timestamps:true})

export const Lms= mongoose.model("Lms",lmsSchema)