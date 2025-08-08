import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const hijabSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    ratings: {
      average: { type: Number, default: 0 },
      count: { type: Number, default: 0 },
    },
  },
  {
    timestamps: true,
  }
);

const Hijab = mongoose.model("Hijab", hijabSchema);

export default Hijab;
