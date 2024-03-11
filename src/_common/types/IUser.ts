import { Document } from "mongoose";

export type TUser = {
  _id?: string;
  base_loc: string;
  createdBy: string;
  createdAt: string;
  designation: string;
  email: string;
  emp_id: string;
  emp_type: string;
  gender: string;
  grade: string;
  mobile: string;
  name: string;
  password: string;
  rfid: string;
  sap_status: string;
  separation_date: string;
  unique_no: string;
  updatedBy: string;
  updatedAt: string;
  username: string;
  allowed_domain_login: string;
};

export interface IUser extends TUser, Document {
  _id: string;
}
