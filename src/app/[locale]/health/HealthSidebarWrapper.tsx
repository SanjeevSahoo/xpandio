import React from "react";
import Sidebar from "../layout/Sidebar";
import { auth } from "../auth";
import AccessService from "@/_common/db/services/access";

const APP_ID = 1;

async function HealthSidebarWrapper() {
  const session = await auth();
  const appResult = await AccessService.getAppIdWiseApp(APP_ID);
  const { data: appData } = appResult;
  if (!appResult || appResult.error) {
    return <div>Error Occured retreiving App Data</div>;
  }
  if (!session || !session.user) {
    return <div>Not Session Data found. Please refresh</div>;
  }
  const menuResult = await AccessService.getAppWiseMenus(
    +session.user._id,
    APP_ID
  );
  const { data: menuData } = menuResult;
  if (!menuResult || menuResult.error) {
    return <div>Error Occured retreiving Menu Data</div>;
  }
  return <Sidebar app={appData} menuList={menuData} />;
}

export default HealthSidebarWrapper;
