"use client";

import React, { useEffect } from "react";
import { appStore } from "@/_common/store/appStore";

interface IProps {
  newAppBase: string;
}
const BaseLogin = (props: IProps) => {
  const { newAppBase } = props;
  const appBase = appStore((state) => state.appBase);
  const setAppBase = appStore((state) => state.setAppBase);
  useEffect(() => {
    if (appBase !== newAppBase) {
      setAppBase(newAppBase);
    }
  }, []);
  return <div>Base Login : {appBase}</div>;
};

export default BaseLogin;
