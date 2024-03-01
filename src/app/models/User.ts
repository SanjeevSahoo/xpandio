import mongoose, { Schema } from "mongoose";
mongoose.connect(process.env.MONGODB_URL as string);
mongoose.Promise = global.Promise;

const userSchema = new Schema(
  {
    name: String,
    email: String,
    role: String,
    status: String,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
