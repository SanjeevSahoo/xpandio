import React from "react";
import SideBarToggler from "./SideBarToggler";
import SelectedMenuTitle from "./SelectedMenuTitle";
import NotificationToggler from "./NotificationToggler";
import ThemeToggler from "@/_common/components/ThemeToggler";
import ProfileMenu from "./ProfileMenu";
import SettingsToggler from "./SettingsToggler";
import LogoutTimer from "../../auth/LogoutTimer";
import { auth } from "@/app/[locale]/auth";

async function Header() {
  const session = await auth();

  return (
    <div className="flex justify-between items-center bg-card shadow-md border-[1px]">
      <div className="flex items-center justify-start gap-2 w-[200px] px-1">
        <SideBarToggler />
        <SelectedMenuTitle />
      </div>
      <div className="flex items-center justify-between gap-2 ">
        <LogoutTimer session={session} />
        <NotificationToggler />
        <ThemeToggler />
        <SettingsToggler>
          <ProfileMenu />
        </SettingsToggler>
      </div>
    </div>
  );
}

export default Header;
