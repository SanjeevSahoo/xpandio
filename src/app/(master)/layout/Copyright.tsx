import { PUBLIC_COPYRIGHT_ORG } from "@/_common/constants";
import React from "react";
const currYear = new Date().getFullYear();
function Copyright() {
  return (
    <div className="text-[11px] font-normal text-muted-foreground">
      Copyright © {currYear} {PUBLIC_COPYRIGHT_ORG}
    </div>
  );
}

export default Copyright;
