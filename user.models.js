import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt";
const UserSchema = new mongoose.Schema(
  {
    UserName: {
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
      required: true,
    },
    refreshToken:{
      type:String
    },
  
 
  },
  { timestamps: true }
);
UserSchema.pre("save",async function (next) {
  if (this.isModified("password")) {
    this.password=await bcrypt.hash(this.password,8)
    next()
  }
  
})
UserSchema.methods.isPasswordCorrect=async function (password) {
   return await bcrypt.compare(password,this.password)
  
}
UserSchema.methods.generateAcessToken=function name(params) {
  return jwt.sign(
    {
      _id:this._id,
      email:this.EmailId,
      user:this.UserName,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    }
  )
}
UserSchema.methods.generateRefreshToken=function name(params) {
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




export const userDetails = mongoose.model('userDetails', UserSchema);
