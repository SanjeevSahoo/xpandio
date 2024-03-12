import { NextResponse } from "next/server";
import * as MongoDBUsers from "@/_common/db/mongodb/services/users";
import * as OracleDBUsers from "@/_common/db/oracledb/services/users";
import { BASE_DB_TYPE } from "@/_common/constants";

export async function GET() {
  try {
    const users =
      BASE_DB_TYPE === "mongodb"
        ? await MongoDBUsers.findUserList()
        : await OracleDBUsers.findUserList();

    return NextResponse.json({ users }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
