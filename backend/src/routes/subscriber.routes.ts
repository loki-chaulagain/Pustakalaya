import { Router } from "express";
import { getSubscribers, createSubscriber, deleteSubscriber } from "../controllers/subscriber.controllers";
const router = Router();

router.get("/", getSubscribers);
router.post("/", createSubscriber);
router.delete("/:id", deleteSubscriber);

export default router;
