import mongoose from 'mongoose';
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
      trim:true,
      index:true
    },
    avatar:{
      type:String, //cloudinary//
    },
    password: {
      type: String,
      required: [true, 'password is required'],
    },
    phoneNumber: {
      type:int,
      required:true
    },
    refreshToken:{
      type:String
    },
  },
 
  { timestamps: true }
);

export const user = mongoose.model('userDetails', UserSchema);
