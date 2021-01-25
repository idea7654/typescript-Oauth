import mongoose from "mongoose";
const userSchema: mongoose.Schema = new mongoose.Schema({
  googleId: String,
});

module.exports = mongoose.model("User", userSchema);
