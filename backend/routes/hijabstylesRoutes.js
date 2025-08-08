import express from "express";
import { getAllHijabstyles } from "../controllers/hijabstyleController.js";

const router = express.Router();

router.get("/", getAllHijabstyles);

export default router;