import Hijab from "../models/Hijabs.js";
import Review from "../models/Reviews.js";

// Create review
export const createReview = async (req, res) => {
  try {
    const { hijabId, rating, comment } = req.body;
    const userId = req.user.id;

    const hijab = await Hijab.findById(productId);
    if (!hijab) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    const alreadyReviewed = await Review.findOne({ product: productId, user: userId });
    if (alreadyReviewed) {
      return res.status(400).json({ success: false, message: "You already reviewed this product" });
    }

    const review = await Review.create({
      hijab: hijabId,
      user: userId,
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
