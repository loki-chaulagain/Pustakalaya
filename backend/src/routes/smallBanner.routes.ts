import { Router } from "express";
import { getSmallBanners, getSmallBanner, createSmallBanner, updateSmallBanner, deleteSmallBanner } from "../controllers/smallBanner.controllers";
const router = Router();

router.get("/", getSmallBanners);
router.get("/:id", getSmallBanner);
router.post("/", createSmallBanner);
router.put("/:id", updateSmallBanner);
router.delete("/:id", deleteSmallBanner);

export default router;
