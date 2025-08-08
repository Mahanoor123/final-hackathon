import HijabStyle from "../models/HijabStyle.js";
import Review from "../models/Review.js";
import mongoose from "mongoose";

export const addReview = async (req, res) => {
  try {
    const { hijabId, userId, rating, comment } = req.body;

    if (!hijabId || !rating || !comment) {
      return res
        .status(400)
        .json({ success: false, message: "Missing fields" });
    }

    const newReview = await Review.create({
      hijab: hijabId,
      user: userId,
      rating,
      comment,
    });

    // Calculate avg rating & review count
    const stats = await Review.aggregate([
      { $match: { hijab: new mongoose.Types.ObjectId(hijabId) } },
      {
        $group: {
          _id: "$hijab",
          avgRating: { $avg: "$rating" },
          reviewCount: { $sum: 1 },
        },
      },
    ]);
    
    // Update HijabStyle
    if (stats.length > 0) {
      await HijabStyle.findByIdAndUpdate(hijabId, {
        avgRating: stats[0].avgRating,
        reviewCount: stats[0].reviewCount,
      });
    }

    res.status(201).json({
      success: true,
      message: "Review added successfully",
      data: newReview,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

// GET Reviews for a Product
export const getReviewsByProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const reviews = await Review.find({ product: productId }).populate(
      "user",
      "name"
    );

    res.status(200).json({
      success: true,
      count: reviews.length,
      data: reviews,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};
