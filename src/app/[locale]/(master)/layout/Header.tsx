import React from "react";
import SideBarToggler from "./SideBarToggler";
import SelectedMenuTitle from "./SelectedMenuTitle";
import SearchBox from "./SearchBox";
import NotificationToggler from "./NotificationToggler";
import ThemeToggler from "@/_common/components/ThemeToggler";
import ProfileMenu from "./ProfileMenu";

function Header() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center justify-between gap-2 w-[200px]">
        <SideBarToggler />
        <SelectedMenuTitle />
      </div>
      <div className="grid grid-cols-[1fr_auto_auto_auto] items-center justify-between gap-1 w-[450px]">
        <SearchBox />
        <NotificationToggler />
        <ThemeToggler />
        <ProfileMenu />
      </div>
    </div>
  );
}

export default Header;
