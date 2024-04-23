"use client";

import TMenu from "@/_common/types/TMenu";
import { ChevronRight, LucideIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { menuStore } from "./store/menuStore";
import { MENU_ICONS } from "./constant";

interface IProps {
  menu: TMenu;
  menuList: TMenu[];
  level: number;
}

function HoverMenuItem(props: IProps) {
  const { menu, menuList, level } = props;
  const router = useRouter();
  const setSelectedMenu = menuStore((state) => state.setSelectedMenu);
  const childMenus = menuList.filter((item) => item.mas_id === menu.id);

  const firstMenuClass = menu.id === menuList[0].id ? "" : "";
  const groupName = level === 0 ? " group/0" : "group/1";
  const groupNameHoverTick =
    level === 0 ? " group-hover/0:bg-card " : "group-hover/1:bg-card ";
  const groupNameHoverGrid =
    level === 0 ? " group-hover/0:grid " : "group-hover/1:grid ";

  const groupNameHoverBlock =
    level === 0 ? " group-hover/0:block " : "group-hover/1:block ";

  const handleMenuOpen = (menu: TMenu) => {
    setSelectedMenu(menu);
    router.replace(menu.menu_url);
  };

  const getIconFile = (menu: TMenu) => {
    let CurrIcon = MENU_ICONS.default as LucideIcon;
    if (MENU_ICONS.hasOwnProperty(menu.menu_icon)) {
      CurrIcon = MENU_ICONS[
        menu.menu_icon as keyof typeof MENU_ICONS
      ] as LucideIcon;
    }

    return <CurrIcon className="h-5 w-5 text-primary-foreground" />;
  };

  if (childMenus.length > 0) {
    return (
      <>
        <li
          className={`grid ${groupName} grid-cols-[auto_auto_1fr] h-[45px] w-[280px] cursor-pointer bg-primary text-primary-foreground   ${firstMenuClass}`}
        >
          <div className="w-[47px] flex justify-center items-center  ">
            {getIconFile(menu)}
          </div>
          <div className={`w-[2px] ${groupNameHoverTick}`}>&nbsp;</div>
          <div
            className={`h-[45px] w-[230px] hidden ${groupNameHoverGrid} grid-cols-[1fr_auto] absolute  left-[50px] bg-primary text-primary-foreground    items-center pl-2 gap-1 font-bold text-sm `}
          >
            {menu.name}
            <div className={`w-[35px] flex justify-center items-center`}>
              <ChevronRight className="h-4 w-4" />
            </div>
          </div>
          <ul
            className={`absolute hidden left-[282px]  ${groupNameHoverBlock}`}
          >
            {childMenus.map((menuItem) => (
              <HoverMenuItem
                key={menuItem.id}
                menu={menuItem}
                menuList={menuList}
                level={level + 1}
              />
            ))}
          </ul>
        </li>
      </>
    );
  }

  return (
    <li
      onClick={() => {
        handleMenuOpen(menu);
      }}
      className={`grid ${groupName} grid-cols-[auto_auto_1fr_auto]   h-[45px] w-[280px] group cursor-pointer bg-primary text-primary-foreground   ${firstMenuClass}`}
    >
      <div className="w-[47px] flex justify-center items-center  ">
        {getIconFile(menu)}
      </div>
      <div className={`w-[2px] ${groupNameHoverTick}`}>&nbsp;</div>
      <div
        className={` h-[45px] w-[230px] hidden ${groupNameHoverGrid} grid-cols-[1fr_auto] absolute  left-[50px] justify-start bg-primary text-primary-foreground  items-center pl-2 gap-1 font-bold text-sm `}
      >
        {menu.name}
        <div className={`w-[35px]`}>&nbsp;</div>
      </div>
    </li>
  );
}

export default HoverMenuItem;
