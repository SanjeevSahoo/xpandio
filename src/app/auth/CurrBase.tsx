"use client";

import React, { useEffect } from "react";
import { appStore } from "@/_common/store/appStore";

const CurrBase = () => {
  const appBase = appStore((state) => state.appBase);

  return <div>Base Login : {appBase}</div>;
};

export default CurrBase;
