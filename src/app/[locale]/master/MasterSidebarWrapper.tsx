import React from "react";
import Sidebar from "../layout/Sidebar";
import { auth } from "../auth";
import AccessService from "@/_common/db/services/access";
import { DEFAULT_APP } from "@/_common/constants";

const APP_ID = 0;

async function MasterSidebarWrapper() {
  const session = await auth();
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
  return <Sidebar app={DEFAULT_APP} menuList={menuData} />;
}

export default MasterSidebarWrapper;
