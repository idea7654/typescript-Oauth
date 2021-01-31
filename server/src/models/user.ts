import mongoose from "mongoose";

interface IUser extends mongoose.Document {
  email: string | undefined;
  name: string | undefined;
}

const userSchema: mongoose.Schema = new mongoose.Schema({
  email: String,
  name: String,
});

const User = mongoose.model<IUser>("User", userSchema);
export default User;
