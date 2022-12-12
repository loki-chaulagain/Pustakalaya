import express from "express";
import { createBlog, deleteBlog, getAllBlog, getSingleBlog, updateBlog } from "../controllers/blog.controller.js";
const router = express.Router();

router.post("/", createBlog);
router.get("/", getAllBlog);
router.put("/:id", updateBlog);
router.get("/:id", getSingleBlog);
router.delete("/:id", deleteBlog);

export default router;
