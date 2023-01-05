import { Router } from "express";
import { getReviews, getReview, createReview, deleteReview } from "../controllers/review.controllers";
const router = Router();

router.get("/", getReviews);
router.get("/:id", getReview);
router.post("/", createReview);
router.delete("/:id", deleteReview);

export default router;
