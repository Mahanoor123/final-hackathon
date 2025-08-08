import express from "express";
import { createReview, getProductReviews } from "../controllers/reviewControllers.js";
import { ProtectedMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", ProtectedMiddleware, createReview); 
router.get("/:productId", getProductReviews); 

export default router;
