import React from "react";
import SideBarToggler from "./SideBarToggler";
import SelectedMenuTitle from "./SelectedMenuTitle";
import SearchBox from "./SearchBox";
import NotificationToggler from "./NotificationToggler";
import ThemeToggler from "@/_common/components/ThemeToggler";
import ProfileMenu from "./ProfileMenu";

function Header() {
  return (
    <div className="flex justify-between items-center bg-card shadow-md">
      <div className="flex items-center justify-between gap-2 w-[200px] px-1">
        <SideBarToggler />
        <SelectedMenuTitle />
      </div>
      <div className="flex items-center justify-between gap-2 ">
        <NotificationToggler />
        <ThemeToggler />
        <ProfileMenu />
      </div>
    </div>
  );
}

export default Header;
