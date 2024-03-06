import { model, models, Schema, Model, Types } from "mongoose";
import IProduct from "../types/IProduct";

const ProductSchema = new Schema<IProduct>(
  {
    _id: Types.ObjectId,
    name: String,
    description: String,
    price: Number,
    createdAt: String,
    updatedAt: String,
  },
  {
    timestamps: true,
  }
);
const Product = models.Product || model("Product", ProductSchema);
export default Product;
