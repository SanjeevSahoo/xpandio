import AuthService from "@/_common/db/services/auth";
import { unstable_cache } from "next/cache";
import React from "react";

const getCachedUser = unstable_cache(
  async (id) => AuthService.getUserAllApps(id),
  ["my-app-user"],
  {
    revalidate: 20,
  }
);

async function page() {
  const appResult = await getCachedUser(2);
  const { data: appList } = appResult;
  if (!appResult || appResult.error) {
    return Response.json(
      { error: "Error Occured retreiving App List" },
      { status: 500 }
    );
  }
  if (appList.length < 0) {
    return Response.json(
      { error: "You donot have access to any App." },
      { status: 500 }
    );
  }
  return (
    <div>{JSON.stringify([...appList.map((item) => item.disp_name)])}</div>
  );
}

export default page;
