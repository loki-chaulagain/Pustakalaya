import express from "express";
import { createBanner, deleteBanner, getAllBanner, getSingleBanner, updateBanner } from "../controllers/banner.controllers.js";
const router = express.Router();

router.post("/", createBanner);
router.get("/", getAllBanner);
router.put("/:id", updateBanner);
router.get("/:id", getSingleBanner);
router.delete("/:id", deleteBanner);

export default router;
