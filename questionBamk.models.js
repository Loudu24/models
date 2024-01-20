import mongoose from 'mongoose';
const questionbankSchema = new mongoose.Schema(
  {
    subject: {
      type: String,
      required: true,
    },
    branch: {
      type: String,
      required: true,
    },
    sem: {
      type: Number,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
export const Qbank = mongoose.model('Qbank', questionbankSchema);
