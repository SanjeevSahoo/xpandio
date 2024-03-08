import { NextResponse } from "next/server";
import { findProfileList } from "@/_common/db/mongodb/services/users";
import { BASE_DB_TYPE } from "@/_common/constants";

export async function GET() {
  try {
    const allProfiles =
      BASE_DB_TYPE === "mongodb" ? await findProfileList() : [];

    return NextResponse.json({ allProfiles }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
