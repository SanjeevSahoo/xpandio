import User from "@/app/models/User";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const users = await User.find();

    return NextResponse.json({ users }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
