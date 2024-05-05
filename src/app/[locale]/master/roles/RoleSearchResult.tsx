import ProjectService from "@/_common/db/services/project";
import React from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";

interface IProps {
  appId: string;
  moduleId: string;
}
async function RoleSearchResult(props: IProps) {
  const { appId, moduleId } = props;
  const { data: roleList, error } = await ProjectService.getAllRoles(
    appId,
    moduleId
  );
  if (error) {
    return <div>Error Occured retreiving Role List</div>;
  }
  return <DataTable columns={columns} data={roleList} />;
}

export default RoleSearchResult;
