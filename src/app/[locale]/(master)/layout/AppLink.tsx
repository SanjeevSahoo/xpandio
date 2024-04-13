"use client";

import { Button } from "@/_common/components/ui/button";
import TApp from "@/_common/types/TApp";
import React from "react";

interface IProps {
  app: TApp;
}

function AppLink(props: IProps) {
  const { app } = props;
  const handleAppSelection = () => {};
  return (
    <Button
      variant="ghost"
      onClick={() => {
        handleAppSelection();
      }}
    >
      <div className="grid overflow-hidden items-center justify-center shadow-lg p-2 rounded-md grid-rows-[1fr_1fr_1fr] h-[280px] bg-[#ffffffc9] hover:bg-blue-50 dark:bg-gray-600 dark:hover:bg-gray-500">
        <div className="flex flex-1 items-center justify-center p-4">
          {/* <img
            src={`${ASSET_BASE_URL}/images/logo/${app.LOGO_PATH}`}
            alt={app.SHT_NAME}
            width={screenType === "Popup" ? "45" : "100"}
          /> */}
        </div>
        <h3 className="flex flex-col items-center justify-center text-center  text-blue-900 dark:text-teal-100 text-md font-bold p-2">
          {app.name}
        </h3>
        <p className="flex item-center justify-center text-center text-xs font-normal text-slate-500 dark:text-slate-300">
          {app.short_desc}
        </p>
      </div>
    </Button>
  );
}

export default AppLink;
