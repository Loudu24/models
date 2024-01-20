import mongoose from 'mongoose';
const notesSchema = new mongoose.Schema(
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
export const Notes = mongoose.model('Notes', notesSchema);
