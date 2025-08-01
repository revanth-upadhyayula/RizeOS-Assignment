import { Router } from "express";
import { hash, compare } from "bcryptjs";
import pkg from "jsonwebtoken";
import User from "../models/user.js";

const { sign } = pkg;
const router = Router();

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const hashed = await hash(password, 10);
  const user = await User.create({ name, email, password: hashed });
  res.json(user);
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await compare(password, user.password))) return res.sendStatus(401);
  const token = sign({ id: user._id }, process.env.JWT_SECRET);
  res.json({ token });
});

export default router;