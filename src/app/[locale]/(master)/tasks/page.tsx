import { getUserCount } from "@/_common/db/mysqldb/services/auth";
import React from "react";

async function Dashboard() {
  const countData = await getUserCount();
  return <div>Task Dashboard {countData.data}</div>;
}

export default Dashboard;
