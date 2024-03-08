import { models, model, Schema } from "mongoose";
import { IUser } from "@/_common/types/IUser";

const userSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const User = models.User || model<IUser>("User", userSchema);

export default User;
