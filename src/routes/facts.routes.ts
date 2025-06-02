import { Router } from "express";
import { addFact, getFacts, getRandomFact } from "../controllers/facts.controller";

const router = Router()

router.get("/", getFacts)
router.get("/random", getRandomFact)
router.post("/add", addFact)

export default router;