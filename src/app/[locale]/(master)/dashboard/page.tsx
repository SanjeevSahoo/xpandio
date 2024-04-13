import React from "react";

import AuthService from "@/_common/db/services/auth";

import { auth } from "@/app/[locale]/auth";
import AppLink from "../layout/AppLink";

async function Dashboard() {
  const session = await auth();

  let userId = 0;
  if (session && session.user && session.user._id) {
    userId = +session.user._id;
  } else {
    return <div>You are Not Authorized to Access Apps</div>;
  }
  const appResult = await AuthService.getUserAllApps(userId);
  const { data: appList } = appResult;
  if (!appResult || appResult.error) {
    return <div>Error Occured retreiving App List</div>;
  }
  if (appList.length < 0) {
    return <div>You donot have access to any App.</div>;
  }
  return (
    <div className="w-full overflow-auto grid items-center justify-evenly grid-cols-[repeat(auto-fit,250px)] gap-6 p-4">
      {appList.map((app) => (
        <AppLink key={app.id} app={app} />
      ))}
    </div>
  );
}

export default Dashboard;
