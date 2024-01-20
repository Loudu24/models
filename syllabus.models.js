import mongoose from 'mongoose';
const syllabusSchema = new mongoose.Schema(
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
export const Syllabus = mongoose.model('Syllabus', syllabusSchema);
