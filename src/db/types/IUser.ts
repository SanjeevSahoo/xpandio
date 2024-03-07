import { Document } from "mongoose";

export type TUser = {
  email: string;
  password: string;
  avatar: string;
};

export interface IUser extends TUser, Document {}
