import express from "express";
const router = express.Router();
import { createCategory, deleteCategory, getAllCategory, getSingleCategory, updateCategory } from "../controllers/category.controllers.js";

router.post("/", createCategory);
router.get("/", getAllCategory);
router.put("/:id", updateCategory);
router.get("/:id", getSingleCategory);
router.delete("/:id", deleteCategory);

export default router;
