import ProjectService from "@/_common/db/services/project";
import { unstable_cache } from "next/cache";
import React from "react";
import RoleForm from "./RoleForm";

async function RoleFormWrapper() {
  const getCachedAllApps = unstable_cache(
    async () => ProjectService.getAllApps(),
    ["all-apps"],
    {
      revalidate: 604800, //60 * 60 * 24 * 7
      tags: ["all-apps"],
    }
  );
  const appListResult = await getCachedAllApps();
  const { data: appList } = appListResult;
  if (!appListResult || appListResult.error) {
    return <div>Error Occured retreiving App List</div>;
  }

  const getCachedAllModules = unstable_cache(
    async () => ProjectService.getAllModules(),
    ["all-modules"],
    {
      revalidate: 604800, //60 * 60 * 24 * 7
      tags: ["all-modules"],
    }
  );
  const moduleListResult = await getCachedAllModules();
  const { data: moduleList } = moduleListResult;
  if (!moduleListResult || moduleListResult.error) {
    return <div>Error Occured retreiving Module List</div>;
  }
  return <RoleForm appList={appList} moduleList={moduleList} />;
}

export default RoleFormWrapper;
