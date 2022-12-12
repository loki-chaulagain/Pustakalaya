import express from "express";
import { createBook, deleteBook, getAllBook, getSingleBook, updateBook } from "../controllers/book.controllers.js";
const router = express.Router();

router.post("/", createBook);
router.get("/", getAllBook);
router.put("/:id", updateBook);
router.get("/:id", getSingleBook);
router.delete("/:id", deleteBook);

export default router;
