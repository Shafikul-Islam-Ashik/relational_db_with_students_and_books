import mongoose from "mongoose";

// student schema
const studentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    roll: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    location: {
      type: String,
      trim: true,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      trim: true,
      enum: ["Male", "Female", "Custom"],
    },
    books: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Book",
      default: [],
    },
    team: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
      default: null,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// create student model
export default mongoose.model("Student", studentSchema);
