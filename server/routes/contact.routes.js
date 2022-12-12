import express from "express";
import { createContact, deleteContact, getAllContact, getSingleContact, updateContact } from "../controllers/contact.controllers.js";
const router = express.Router();

router.post("/", createContact);
router.get("/", getAllContact);
router.put("/:id", updateContact);
router.get("/:id", getSingleContact);
router.delete("/:id", deleteContact);

export default router;
