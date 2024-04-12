"use client";

import { useSession } from "next-auth/react";
import React from "react";
import Image from "next/image";
import { Button } from "@/_common/components/ui/button";
import { appStore } from "@/_common/store/appStore";

function ProfileMenu() {
  const { data: session } = useSession();
  const appDrawerStatus = appStore((state) => state.appDrawerStatus);
  const setAppDrawerStatus = appStore((state) => state.setAppDrawerStatus);

  const handleSettingsToggle = () => {
    setAppDrawerStatus({
      sidebar: false,
      settings: !appDrawerStatus.settings,
      notification: false,
    });
  };

  return (
    <div
      className="grid grid-cols-[auto_1fr] items-center gap-1 w-[200px] cursor-pointer hover:bg-accent p-1"
      onClick={handleSettingsToggle}
    >
      <div>
        <Image
          src={"/images/profile/default_profile_icon.png"}
          alt="Profile"
          width="55"
          height="55"
        />
      </div>
      <div className="grid grid-rows-[1fr_auto] justify-start items-center overflow-hidden">
        <p className="text-[14px] text-primary font-semibold">
          {session?.user?.name}
        </p>
        <p className="text-[11px] text-muted-foreground">
          {session?.user?.designation}
        </p>
      </div>
    </div>
  );
}

export default ProfileMenu;
