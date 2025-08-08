import express from "express";
import { getAllHijabs } from "../controllers/hijabControllers.js";

const router = express.Router();

router.get("/", getAllHijabs)

export default router;