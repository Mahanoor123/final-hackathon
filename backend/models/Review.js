import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  hijabId: { type: mongoose.Schema.Types.ObjectId, ref: "HijabStyle" },
  rating: { type: Number, min: 1, max: 5 },
  comment: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Review", reviewSchema)