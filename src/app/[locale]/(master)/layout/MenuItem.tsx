"use client";

import TMenu from "@/_common/types/TMenu";
import { File, ChevronDown, ChevronUp } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface IProps {
  menu: TMenu;
  menuList: TMenu[];
}

function MenuItem(props: IProps) {
  const { menu, menuList } = props;
  const router = useRouter();
  const childMenus = menuList.filter((item) => item.mas_id === menu.id);
  const [childState, setChildState] = useState(false);
  const childClass = childState ? "" : " hidden ";

  const handleChildOpen = () => {
    setChildState((oldState) => !oldState);
  };

  const handleMenuOpen = (menuUrl: string) => {
    router.replace(menuUrl);
  };

  if (childMenus.length > 0) {
    return (
      <>
        <li
          onClick={handleChildOpen}
          className="grid grid-cols-[auto_1fr_auto]  gap-2 h-[35px] w-full group cursor-pointer hover:bg-card"
        >
          <div className="w-[50px] flex justify-center items-center  ">
            <File className="h-5 w-5 text-primary-foreground group-hover:text-card-foreground" />
          </div>
          <div className="flex justify-start items-center   font-semibold text-sm group-hover:font-bold">
            {menu.name}
          </div>
          <div className="w-[35px] flex justify-center items-center">
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
        handleMenuOpen(menu.menu_url);
      }}
      className="grid grid-cols-[auto_1fr_auto]  gap-2 h-[35px] w-full group cursor-pointer hover:bg-card border"
    >
      <div className="w-[50px] flex justify-center items-center  ">
        <File className="h-5 w-5 text-primary-foreground group-hover:text-card-foreground" />
      </div>
      <div className="flex justify-start items-center   font-semibold text-sm group-hover:font-bold">
        {menu.name}
      </div>
      <div className="w-[30px]">&nbsp;</div>
    </li>
  );
}

export default MenuItem;
