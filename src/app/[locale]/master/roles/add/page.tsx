import React, { Suspense } from "react";
import RoleFormWrapper from "./RoleFormWrapper";

function AddRole() {
  return (
    <div className="p-4">
      <Suspense fallback={<div>Loading Form Data...</div>}>
        <RoleFormWrapper />
      </Suspense>
    </div>
  );
}

export default AddRole;
