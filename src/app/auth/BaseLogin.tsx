"use client";

import React, { useEffect } from "react";
import { appStore } from "@/_common/store/appStore";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

interface IProps {
  newAppBase: string;
}
const BaseLogin = (props: IProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const { newAppBase } = props;
  const appBase = appStore((state) => state.appBase);
  const appMode = appStore((state) => state.appMode);
  const setAppBase = appStore((state) => state.setAppBase);
  const setAppMode = appStore((state) => state.setAppMode);

  useEffect(() => {
    setAppBase(newAppBase);
  }, []);

  useEffect(() => {
    if (searchParams.has("appmode")) {
      let newAppMode = searchParams.get("appmode");

      if (!(newAppMode && newAppMode.trim().length > 0)) {
        newAppMode = "Default";
      }
      if (newAppMode !== "Default") {
        newAppMode = "Detached";
      }

      if (pathname === "/") {
        newAppMode = "Default";
      }

      if (newAppMode && appMode !== newAppMode.trim()) {
        setAppMode(newAppMode);
      }
    } else {
      if (appMode !== "Default") {
        setAppMode("Default");
      }
      if (appMode === "Detached") {
        const params = new URLSearchParams(searchParams);
        params.set("appmode", appMode);
        router.replace(`${pathname}?${params.toString()}`);
      }
    }
  }, [searchParams, appMode, pathname]);
  return (
    <div>
      Base Login : {appBase}, {appMode}
    </div>
  );
};

export default BaseLogin;
