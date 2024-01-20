import mongoose from 'mongoose';
const UserSchema = new mongoose.Schema(
  {
    UserName: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    EmailId: {
      type: String,
      required: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'password is required'],
    },
  },
  { timestamps: true }
);

export const user = mongoose.model('userDetails', UserSchema);
