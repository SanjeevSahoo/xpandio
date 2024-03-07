import { findProfileList } from "@/db/users";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const allProfiles = await findProfileList();

    return NextResponse.json({ allProfiles }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
