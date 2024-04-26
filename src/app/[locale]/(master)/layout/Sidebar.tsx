"use client";

import { appStore } from "@/_common/store/appStore";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Support from "./Support";
import TMenu from "@/_common/types/TMenu";
import { DEFAULT_APP } from "@/_common/constants";
import { useRouter } from "next/navigation";
import { getAppWiseMenus } from "@/_common/client-services/access";
import MenuItem from "./MenuItem";
import { menuStore } from "./store/menuStore";
import HoverMenuItem from "./HoverMenuItem";

function Sidebar() {
  console.log("Sidebar");
  const appDrawerStatus = appStore((state) => state.appDrawerStatus);
  const selectedApp = appStore((state) => state.selectedApp);
  const setSelectedApp = appStore((state) => state.setSelectedApp);
  const setSelectedMenu = menuStore((state) => state.setSelectedMenu);
  const router = useRouter();
  const [menuList, setMenuList] = useState<TMenu[]>([]);
  const drawerStatusClass = appDrawerStatus.sidebar
    ? " w-[280px] "
    : " w-[50px] ";

  const drawerSubStatusClass = appDrawerStatus.sidebar ? " flex " : " hidden ";
  // useEffect(() => {
  //   const arrPathList = pathname.split("/").filter((item) => item !== "");
  //   if (arrPathList.length > 0) {
  //     const currPath = `/${arrPathList[0]}`;
  //     if (currPath !== selectedApp.base_url) {
  //       getUrlWiseApp(currPath).then((res) => {
  //         if (!res.data.error) {
  //           setSelectedApp(res.data.data);
  //         } else {
  //           setSelectedApp(DEFAULT_APP);
  //           //router.replace(DEFAULT_APP.base_url);
  //         }
  //       });
  //     }
  //   }
  // }, [pathname, selectedApp]);

  useEffect(() => {
    console.log("Sidebar Rendered");
    getAppWiseMenus(selectedApp.id).then((res) => {
      if (!res.data.error) {
        setMenuList(res.data.data);
        if (res.data.data.length > 0) {
          setSelectedMenu(res.data.data[0]);
        }
      }
    });
  }, [selectedApp]);

  const renderMenu = (masId: number) => {
    const currMenuList = menuList.filter((item) => item.mas_id === masId);
    if (currMenuList.length > 0) {
      if (appDrawerStatus.sidebar) {
        return currMenuList.map((item) => (
          <MenuItem
            key={item.id}
            menu={item}
            menuList={menuList}
            isChild={false}
          />
        ));
      } else {
        return currMenuList.map((item) => (
          <HoverMenuItem
            key={item.id}
            menu={item}
            menuList={menuList}
            level={0}
          />
        ));
      }
    }
  };

  const handleGoHome = () => {
    setSelectedApp(DEFAULT_APP);
    router.replace(DEFAULT_APP.base_url);
  };
  return (
    <div
      className={`duration-500 bg-accent text-accent-foreground  h-full z-10 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] grid grid-rows-[auto_1fr_auto] overflow-hidden border-[1px]  ${drawerStatusClass}`}
    >
      <div className="h-[60px] grid grid-cols-[auto_1fr] w-full overflow-hidden">
        <div
          className="flex items-center justify-center w-[50px]  bg-primary text-primary-foreground   rounded-t-md cursor-pointer"
          onClick={handleGoHome}
        >
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
          {selectedApp.disp_name}
        </div>
      </div>
      {appDrawerStatus.sidebar && (
        <div className="relative h-full w-full overflow-y-auto">
          <div className="grid grid-cols-[auto_1fr] h-full w-full overflow-hidden hover:overflow-auto ">
            <div className="flex items-center justify-center w-[50px]  bg-primary text-primary-foreground">
              &nbsp;
            </div>
            <div className={`${drawerSubStatusClass}`}>&nbsp;</div>
          </div>
          <div className="absolute top-0 left-0 h-full w-full overflow-hidden hover:overflow-y-auto  text-primary">
            {menuList && menuList.length > 0 && renderMenu(menuList[0].mas_id)}
          </div>
        </div>
      )}
      {!appDrawerStatus.sidebar && (
        <div className="h-full w-full overflow-y-auto">
          <div className="grid grid-cols-[auto] h-full w-full overflow-hidden hover:overflow-y-auto ">
            <div className="flex items-center justify-center w-[50px]  bg-primary text-primary-foreground">
              <div className=" h-full w-full overflow-hidden hover:overflow-y-auto  text-primary">
                {menuList &&
                  menuList.length > 0 &&
                  renderMenu(menuList[0].mas_id)}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="h-[45px] grid grid-cols-[auto_1fr] overflow-hidden ">
        <div className="flex items-center justify-center w-[50px]  bg-primary text-primary-foreground   rounded-b-md ">
          <Support />
        </div>
        <div className={`${drawerSubStatusClass}`}></div>
      </div>
    </div>
  );
}

export default Sidebar;
