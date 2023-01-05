import { Router } from "express";
import { getContacts, getContact, createContact, updateContact, deleteContact } from "../controllers/contact.controllers";
const router = Router();

router.get("/", getContacts);
router.get("/:id", getContact);
router.post("/", createContact);
router.put("/:id", updateContact);
router.delete("/:id", deleteContact);

export default router;
