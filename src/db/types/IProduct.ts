import { Types } from "mongoose";

interface IProduct {
  _id: Types.ObjectId;
  name: string;
  description: string;
  price: number;
  createdAt: String;
  updatedAt: String;
}

export default IProduct;
