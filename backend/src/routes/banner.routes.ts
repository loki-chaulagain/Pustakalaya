import { Router } from "express";
import { getBanners, getBanner, createBanner, updateBanner, deleteBanner } from "../controllers/banner.controllers";
const router = Router();
import multer from "multer";
const fileUpload = multer();

router.get("/", getBanners);
router.get("/:id", getBanner);
router.post("/", fileUpload.single("image"), createBanner);
router.put("/:id", updateBanner);
router.delete("/:id", deleteBanner);

export default router;
