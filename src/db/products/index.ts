import Product from "../models/Product";
import connectMongo from "../mongo";

const findProductList = async () => {
  let retVal = { error: false, errorMessage: "", data: {} };
  try {
    await connectMongo();
    await Product.create({
      name: "Samsung",
      description: "Samsung Phone",
      price: 23424,
    });
    const products = await Product.find({});
    retVal.data = { ...products };
  } catch (err) {
    console.log(err);
    retVal = { error: true, errorMessage: "Unknown DB Error", data: {} };
  }
  return retVal;
};

export { findProductList };
