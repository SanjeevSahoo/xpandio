"use client";

import { appStore } from "@/_common/store/appStore";
import React, { useEffect } from "react";

function Settings() {
  const appDrawerStatus = appStore((state) => state.appDrawerStatus);
  useEffect(() => {
    console.log("settings", appDrawerStatus);
  }, [appDrawerStatus]);
  const drawerStatusClass = appDrawerStatus.settings
    ? " right-0 "
    : " -right-[250px] ";
  return (
    <div
      className={`absolute top-[47px] right-0 duration-500 h-[calc(100%-48px)] w-[250px] shadow-md grid grid-rows-[auto_1fr] bg-card text-card-foreground ${drawerStatusClass}`}
    >
      <div>Settings</div>
      <div className="flex items-end justify-end">data</div>
    </div>
  );
}

export default Settings;
