"use client";

import { appStore } from "@/_common/store/appStore";
import React from "react";
import LogoutButton from "../../auth/LogoutButton";

function Settings() {
  const appDrawerStatus = appStore((state) => state.appDrawerStatus);

  const drawerStatusClass = appDrawerStatus.settings
    ? " right-0 "
    : " -right-[250px] ";
  return (
    <div
      className={`absolute top-[47px]  duration-500 h-[calc(100%-48px)] w-[250px] shadow-md grid grid-rows-[auto_1fr] bg-card text-card-foreground ${drawerStatusClass}`}
    >
      <div>Settings</div>
      <div className="flex items-start justify-center">
        <LogoutButton />
      </div>
    </div>
  );
}

export default Settings;
