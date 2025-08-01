import express from "express";
const router = express.Router();
import auth from "../middleware/auth.js";
import User from "../models/user.js";
import Job from "../models/Job.js";
import tokenizer from "../utils/tokenizer.js";
const { matchScore } = tokenizer;

router.post("/match", auth, async (req, res) => {
  const user = await User.findById(req.user.id);
  const jobs = await Job.find();

  const scored = jobs.map(job => ({
    ...job._doc,
    matchScore: matchScore(user.bio, job.description),
  }));

  res.json(scored.sort((a, b) => b.matchScore - a.matchScore));
});

export default router;
