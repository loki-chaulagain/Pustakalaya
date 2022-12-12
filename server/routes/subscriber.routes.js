import express from "express";
import { createSubscriber, deleteSubscriber, getAllSubscriber } from "../controllers/subscriber.controllers.js";
const router = express.Router();

router.post("/", createSubscriber);
router.get("/", getAllSubscriber);
router.delete("/:id", deleteSubscriber);

export default router;
