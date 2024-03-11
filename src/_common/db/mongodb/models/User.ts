import { models, model, Schema } from "mongoose";
import { IUser } from "@/_common/types/IUser";

const userSchema: Schema = new Schema({
  emp_id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  base_loc: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  emp_type: {
    type: String,
    required: true,
  },
  sap_status: {
    type: String,
    required: true,
  },
  createdBy: {
    type: String,
  },
  createdAt: {
    type: String,
  },
  designation: {
    type: String,
  },
  email: {
    type: String,
  },
  gender: {
    type: String,
  },
  grade: {
    type: String,
  },
  mobile: {
    type: String,
  },
  rfid: {
    type: String,
    unique: true,
  },
  separation_date: {
    type: String,
  },
  unique_no: {
    type: String,
    unique: true,
  },
  updatedBy: {
    type: String,
  },
  updatedAt: {
    type: String,
  },
  allowed_domain_login: {
    type: String,
  },
});

const User = models.User || model<IUser>("User", userSchema);

export default User;
