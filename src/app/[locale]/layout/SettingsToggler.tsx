"use client";

import React from "react";
import { appStore } from "@/_common/store/appStore";

function SettingsToggler({ children }: { children: React.ReactNode }) {
  const appDrawerStatus = appStore((state) => state.appDrawerStatus);
  const setAppDrawerStatus = appStore((state) => state.setAppDrawerStatus);

  const handleSettingsToggle = () => {
    setAppDrawerStatus({
      sidebar: false,
      settings: !appDrawerStatus.settings,
      notification: false,
    });
  };

  return (
    <div
      className="grid grid-cols-[auto_1fr] items-center gap-1 w-[200px] cursor-pointer hover:bg-accent p-1"
      onClick={handleSettingsToggle}
    >
      {children}
    </div>
  );
}

export default SettingsToggler;
