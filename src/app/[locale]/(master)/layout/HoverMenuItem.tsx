"use client";

import TMenu from "@/_common/types/TMenu";
import { File, ChevronDown, ChevronUp, Minus, LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { menuStore } from "./store/menuStore";
import { MENU_ICONS } from "./constant";
import { appStore } from "@/_common/store/appStore";

interface IProps {
  menu: TMenu;
  menuList: TMenu[];
  isChild: boolean;
  isRootItem: boolean;
}

function HoverMenuItem(props: IProps) {
  const { menu, menuList, isChild, isRootItem } = props;
  const pathname = usePathname();
  const router = useRouter();
  const selectedMenu = menuStore((state) => state.selectedMenu);
  const setSelectedMenu = menuStore((state) => state.setSelectedMenu);
  const childMenus = menuList.filter((item) => item.mas_id === menu.id);
  const [childState, setChildState] = useState(false);
  const childClass = childState ? "" : " hidden ";
  const firstMenuClass = menu.id === menuList[0].id ? "" : "";
  const isSelected = menu.menu_url === pathname && selectedMenu.id === menu.id;

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
          onClick={handleChildOpen}
          className={`grid grid-cols-[auto_auto] h-[45px] w-full group cursor-pointer   ${firstMenuClass}`}
        >
          <div className="w-[47px] flex justify-center items-center  ">
            {getIconFile(menu)}
          </div>
          <div className={`w-[4px]  ${selectedClassTick}`}>&nbsp;</div>
          <div
            className={`h-[45px] w-[230px] hidden group-hover:grid grid-cols-[auto_1fr_auto] absolute  left-[50px]   items-center pl-2 gap-1 font-bold text-sm  ${selectedClassText}`}
          >
            {isChild && <Minus className="h-3 w-3" />}
            {!isChild && <div className="w-0" />}
            {menu.name}
            <div
              className={`w-[35px] flex justify-center items-center  ${selectedClassText}`}
            >
              {childState ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </div>
          </div>
        </li>
        <ul className={`${childClass}`}>
          {childMenus.map((menuItem) => (
            <HoverMenuItem
              key={menuItem.id}
              menu={menuItem}
              menuList={menuList}
              isChild={true}
              isRootItem={false}
            />
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
      className={`grid grid-cols-[auto_auto]   h-[45px] w-full group cursor-pointer   ${firstMenuClass}`}
    >
      <div className="w-[47px] flex justify-center items-center  ">
        {getIconFile(menu)}
      </div>
      <div className={`w-[4px]  ${selectedClassTick}`}>&nbsp;</div>
      <div
        className={` h-[45px] w-[230px] hidden group-hover:flex absolute  left-[50px] justify-start items-center pl-2 gap-1 font-bold text-sm  ${selectedClassText}`}
      >
        {menu.name}
      </div>
    </li>
  );
}

export default HoverMenuItem;
