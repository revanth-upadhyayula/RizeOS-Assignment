import { Schema, model } from "mongoose";
const UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
  bio: String,
  linkedin: String,
  skills: [String],
  walletAddress: String,
});
export default model("User", UserSchema);
