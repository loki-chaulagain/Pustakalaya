import express from "express";
const router = express.Router();
import { createEventBanner, deleteEventBanner, getAllEventBanner } from "../controllers/eventBanner.controllers.js";

router.post("/", createEventBanner);
router.get("/", getAllEventBanner);
router.delete("/:id", deleteEventBanner);

export default router;
