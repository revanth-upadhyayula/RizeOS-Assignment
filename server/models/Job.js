import { Schema, model } from "mongoose";
const JobSchema = new Schema({
  title: String,
  description: String,
  skills: [String],
  budget: Number,
  poster: String,
});
export default model("Job", JobSchema);
