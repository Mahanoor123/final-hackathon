import Hijab from "../models/Hijabs.js";
import Review from "../models/Reviews.js";

// Create review
export const createReview = async (req, res) => {
  try {
    const { rating, comment } = req.body;

    const review = await Review.create({
      rating,
      comment,
    });

    res.status(201).json({ success: true, review });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getProductReviews = async (req, res) => {
  try {
    const { hijabId } = req.params;
    const reviews = await Review.find({ hijab: hijabId })
      .populate("user", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json({ success: true, reviews });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
