import { Router } from "express";
import { getColors, createColor, deleteColor } from "../controllers/color.controllers";
const router = Router();

router.get("/", getColors);
router.post("/", createColor);
router.delete("/:id", deleteColor);

export default router;
