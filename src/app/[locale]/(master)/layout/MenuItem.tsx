"use client";

import TMenu from "@/_common/types/TMenu";
import { File, ChevronDown, ChevronUp } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { menuStore } from "./store/menuStore";

interface IProps {
  menu: TMenu;
  menuList: TMenu[];
}

function MenuItem(props: IProps) {
  const { menu, menuList } = props;
  const pathname = usePathname();
  const router = useRouter();
  const selectedMenu = menuStore((state) => state.selectedMenu);
  const setSelectedMenu = menuStore((state) => state.setSelectedMenu);
  const childMenus = menuList.filter((item) => item.mas_id === menu.id);
  const [childState, setChildState] = useState(false);
  const childClass = childState ? "" : " hidden ";
  const firstMenuClass = menu.id === menuList[0].id ? "" : "";
  const isSelected = menu.menu_url === pathname && selectedMenu.id === menu.id;

  console.log(menu.menu_url, pathname, menu.id, selectedMenu.id);

  const selectedClassTick = isSelected ? " bg-card " : " group-hover:bg-card ";
  const selectedClassText = isSelected
    ? " bg-primary text-primary-foreground "
    : " group-hover:bg-primary group-hover:text-primary-foreground";
  const handleChildOpen = () => {
    setChildState((oldState) => !oldState);
  };

  const handleMenuOpen = (menu: TMenu) => {
    setSelectedMenu(menu);
    router.replace(menu.menu_url);
  };

  if (childMenus.length > 0) {
    return (
      <>
        <li
          onClick={handleChildOpen}
          className={`grid grid-cols-[auto_auto_1fr_auto] h-[45px] w-full group cursor-pointer   ${firstMenuClass}`}
        >
          <div className="w-[47px] flex justify-center items-center  ">
            <File className="h-5 w-5 text-primary-foreground " />
          </div>
          <div className={`w-[4px]  ${selectedClassTick}`}>&nbsp;</div>
          <div
            className={`flex justify-start items-center pl-2 font-bold text-sm  ${selectedClassText}`}
          >
            {menu.name}
          </div>
          <div
            className={`w-[35px] flex justify-center items-center  ${selectedClassText}`}
          >
            {childState ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </div>
        </li>
        <ul className={`${childClass}`}>
          {childMenus.map((menuItem) => (
            <MenuItem key={menuItem.id} menu={menuItem} menuList={menuList} />
          ))}
        </ul>
      </>
    );
  }
  return (
    <li
      onClick={() => {
        handleMenuOpen(menu);
      }}
      className={`grid grid-cols-[auto_auto_1fr_auto]   h-[45px] w-full group cursor-pointer   ${firstMenuClass}`}
    >
      <div className="w-[47px] flex justify-center items-center  ">
        <File className="h-5 w-5 text-primary-foreground " />
      </div>
      <div className={`w-[4px]  ${selectedClassTick}`}>&nbsp;</div>
      <div
        className={`flex justify-start items-center pl-2 font-bold text-sm  ${selectedClassText}`}
      >
        {menu.name}
      </div>
      <div
        className={`w-[35px] flex justify-center items-center  ${selectedClassText}`}
      >
        &nbsp;
      </div>
    </li>
  );
}

export default MenuItem;
