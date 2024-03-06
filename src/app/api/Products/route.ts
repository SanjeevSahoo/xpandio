import { findProductList } from "@/db/products";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const products = await findProductList();

    return NextResponse.json({ products }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
