import ProjectService from "@/_common/db/services/project";
import React from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";

export const dynamic = "force-dynamic";

interface IProps {
  searchParams: {
    app?: string;
    module?: string;
  };
}

async function Roles({ searchParams }: IProps) {
  const appId = searchParams.app ?? "-1";
  const moduleId = searchParams.module ?? "-1";
  const { data: roleList, error } = await ProjectService.getAllRoles(
    appId,
    moduleId
  );
  if (error) {
    return <div>Error Occured retreiving Role List</div>;
  }
  return <DataTable columns={columns} data={roleList} />;
}

export default Roles;
