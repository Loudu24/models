import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt";
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim:true,
      index:true
    },
    EmailId: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      trim:true
      
    },
    avatar: {
      type: String, // cloudinary url
      required: true,},

    password: {
      type: String,
      required: [true, 'password is required'],
    },
    phoneNumber: {
      type:Number,
      required:true
    },
    Photo:{
      type: String, // cloudinary url
     
    },
    refreshToken:{
      type:String
    },
  
 
  },
  { timestamps: true }
);
UserSchema.pre("save",async function (next) {
  if (this.isModified("password")) {
    this.password=await bcrypt.hash(this.password,10)
    next()
  }
  
})
UserSchema.methods.isPasswordCorrect=async function (password) {
   return await bcrypt.compare(password,this.password)
  
}
UserSchema.methods.generateAcessToken=function () {
  return jwt.sign(
    {
      _id:this._id,
      EmailId:this.EmailId,
      username:this.username,
      phoneNumber:this.phoneNumber
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    }
  )
}
UserSchema.methods.generateRefreshToken=function () {
  return jwt.sign(
    {
      _id:this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    }
  )
}




export const User = mongoose.model('User', UserSchema);
