import { Router } from "express";
import { getBanners, getBanner, createBanner, updateBanner, deleteBanner } from "../controllers/banner.controllers";
const router = Router();

router.get("/", getBanners);
router.get("/:id", getBanner);
router.post("/", createBanner);
router.put("/:id", updateBanner);
router.delete("/:id", deleteBanner);

export default router;
