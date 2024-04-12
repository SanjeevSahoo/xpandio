"use client";

import { appStore } from "@/_common/store/appStore";
import React, { useEffect } from "react";

function Sidebar() {
  const appDrawerStatus = appStore((state) => state.appDrawerStatus);

  const drawerStatusClass = appDrawerStatus.sidebar
    ? " w-[250px] "
    : " w-[40px] ";
  return (
    <div
      className={`duration-500 shadow-lg h-full z-10 rounded-md grid grid-rows-[auto_1fr_auto] overflow-hidden bg-card text-card-foreground ${drawerStatusClass}`}
    >
      <div>Sidebar</div>
      <div className=" w-full h-full overflow-hidden hover:overflow-auto">
        {" "}
      </div>
      <div>sdf</div>
    </div>
  );
}

export default Sidebar;
