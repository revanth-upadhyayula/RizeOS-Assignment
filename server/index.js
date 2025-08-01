import express, { json } from "express";
import cors from "cors";
import { connect } from "mongoose";
import { config } from "dotenv";
import authRoutes from "./routes/auth.js";
import jobRoutes from "./routes/jobs.js";
import matchRoutes from "./routes/match.js";

config();
const app = express();
app.use(cors());
app.use(json());

connect(process.env.MONGO_URI);

app.use("/api", authRoutes);
app.use("/api", jobRoutes);
app.use("/api", matchRoutes);

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
