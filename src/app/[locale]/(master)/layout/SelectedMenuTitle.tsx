"use client";

import React from "react";
import { menuStore } from "./store/menuStore";

function SelectedMenuTitle() {
  const selectedMenu = menuStore((state) => state.selectedMenu);
  return (
    <div className="font-normal text-primary text-left">
      {selectedMenu.name}
    </div>
  );
}

export default SelectedMenuTitle;
