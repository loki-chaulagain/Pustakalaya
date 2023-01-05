import { Router } from "express";
import { getSizes, createSize, deleteSize } from "../controllers/size.controllers";
const router = Router();

router.get("/", getSizes);
router.post("/", createSize);
router.delete("/:id", deleteSize);

export default router;
