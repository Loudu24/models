import mongoose from 'mongoose';
const qPaperSchema = new mongoose.Schema(
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
export const Qpaper = mongoose.model('Qpaper', qPaperSchema);
