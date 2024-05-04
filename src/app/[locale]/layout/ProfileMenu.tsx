import React from "react";
import Image from "next/image";
import { auth } from "@/app/[locale]/auth";

async function ProfileMenu() {
  const session = await auth();
  return (
    <>
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
    </>
  );
}

export default ProfileMenu;
