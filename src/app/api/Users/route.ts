import { NextResponse } from "next/server";
import { findUserList } from "@/_common/db/mongodb/services/users";
import { BASE_DB_TYPE } from "@/_common/constants";

export async function GET() {
  try {
    const users = BASE_DB_TYPE === "mongodb" ? await findUserList() : [];

    return NextResponse.json({ users }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
