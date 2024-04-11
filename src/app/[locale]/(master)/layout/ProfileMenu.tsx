"use client";

import { useSession } from "next-auth/react";
import React from "react";
import Image from "next/image";

function ProfileMenu() {
  const { data: session } = useSession();
  return (
    <div className="grid grid-cols-[auto_1fr] items-center gap-1 w-[200px]">
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
