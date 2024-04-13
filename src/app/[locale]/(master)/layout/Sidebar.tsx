"use client";

import { appStore } from "@/_common/store/appStore";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Support from "./Support";
import TMenu from "@/_common/types/TMenu";

function Sidebar() {
  const appDrawerStatus = appStore((state) => state.appDrawerStatus);
  const selectedApp = appStore((state) => state.selectedApp);
  const [menuList, setMenuList] = useState<TMenu[]>([]);
  const drawerStatusClass = appDrawerStatus.sidebar
    ? " w-[280px] "
    : " w-[55px] ";

  const drawerSubStatusClass = appDrawerStatus.sidebar ? " flex " : " hidden ";

  useEffect(() => {
    console.log(selectedApp);
  }, [selectedApp]);
  return (
    <div
      className={`duration-500 bg-accent text-accent-foreground  h-full z-10 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] grid grid-rows-[auto_1fr_auto] overflow-hidden border-[1px]  ${drawerStatusClass}`}
    >
      <div className="h-[60px] grid grid-cols-[auto_1fr] w-full overflow-hidden">
        <div className="flex items-center justify-center w-[55px]  bg-primary text-primary-foreground   rounded-t-md ">
          <Image
            src={"/images/logo/xpandio_logo.png"}
            alt="Profile"
            width="38"
            height="38"
          />
        </div>
        <div
          className={`uppercase text-lg font-bold text-center flex justify-center items-center   ${drawerSubStatusClass}`}
        >
          Xpandio App
        </div>
      </div>
      <div className="relative h-full w-full overflow-y-auto">
        <div className="grid grid-cols-[auto_1fr] h-full w-full overflow-hidden hover:overflow-auto ">
          <div className="flex items-center justify-center w-[55px]  bg-primary text-primary-foreground">
            &nbsp;
          </div>
          <div className={`${drawerSubStatusClass}`}>&nbsp;</div>
        </div>
        <div className="absolute top-0 left-0 h-full w-full overflow-hidden hover:overflow-auto  text-primary-foreground">
          sss
        </div>
      </div>
      <div className="h-[45px] grid grid-cols-[auto_1fr] overflow-hidden ">
        <div className="flex items-center justify-center w-[55px]  bg-primary text-primary-foreground   rounded-b-md ">
          <Support />
        </div>
        <div className={`${drawerSubStatusClass}`}></div>
      </div>
    </div>
  );
}

export default Sidebar;
