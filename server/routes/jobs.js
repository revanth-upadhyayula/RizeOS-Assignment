import { Router } from "express";
const router = Router();
import Job from "../models/Job.js";
import auth from "../middleware/auth.js";

router.get("/jobs", async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

router.post("/jobs", auth, async (req, res) => {
  const { title, description, skills, budget } = req.body;
  const job = await Job.create({ title, description, skills, budget, poster: req.user.id });
  res.json(job);
});

export default router;
