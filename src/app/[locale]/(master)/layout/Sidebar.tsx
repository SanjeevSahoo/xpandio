"use client";

import { appStore } from "@/_common/store/appStore";
import React, { useState } from "react";
import Image from "next/image";
import { Switch } from "@/_common/components/ui/switch";
import { Label } from "@/_common/components/ui/label";

function Sidebar() {
  const appDrawerStatus = appStore((state) => state.appDrawerStatus);

  const drawerStatusClass = appDrawerStatus.sidebar
    ? " w-[280px] "
    : " w-[55px] ";

  const drawerSubStatusClass = appDrawerStatus.sidebar ? " flex " : " hidden ";
  return (
    <div
      className={`duration-500 bg-accent text-accent-foreground shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] h-full z-10  grid grid-rows-[auto_1fr_auto] overflow-hidden border-[1px]  ${drawerStatusClass}`}
    >
      <div className="h-[60px] grid grid-cols-[auto_1fr] w-full overflow-hidden">
        <div className="flex items-center justify-center w-[55px]  bg-primary text-primary-foreground   rounded-t-md shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
          <Image
            src={"/images/logo/xpandio_icon.png"}
            alt="Profile"
            width="40"
            height="40"
          />
        </div>
        <div
          className={`uppercase text-lg font-bold text-center flex justify-center items-center   ${drawerSubStatusClass}`}
        >
          Xpandio App
        </div>
      </div>
      <div className=" grid grid-cols-[auto_1fr] h-full w-full overflow-hidden hover:overflow-auto">
        <div className="flex items-center justify-center w-[55px]  bg-primary text-primary-foreground   shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
          sdf
        </div>
        <div className={`${drawerSubStatusClass}`}>s</div>
      </div>
      <div className="grid grid-cols-[auto_1fr] overflow-hidden ">
        <div className="flex items-center justify-center w-[55px]  bg-primary text-primary-foreground   rounded-b-md shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
          sdf
        </div>
        <div className={`${drawerSubStatusClass}`}></div>
      </div>
    </div>
  );
}

export default Sidebar;
