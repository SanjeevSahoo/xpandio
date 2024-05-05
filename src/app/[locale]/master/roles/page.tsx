import React, { Suspense } from "react";
import RoleSearchResult from "./RoleSearchResult";

export const dynamic = "force-dynamic";

interface IProps {
  searchParams: {
    app?: string;
    module?: string;
  };
}

function Roles({ searchParams }: IProps) {
  const appId = searchParams.app ?? "-1";
  const moduleId = searchParams.module ?? "-1";
  const key = JSON.stringify({ appId, moduleId });
  return (
    <Suspense key={key} fallback={<div>Loading Role Search Result ....</div>}>
      <RoleSearchResult appId={appId} moduleId={moduleId} />
    </Suspense>
  );
}

export default Roles;
