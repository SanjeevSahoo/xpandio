"use client";

import TMenu from "@/_common/types/TMenu";
import React from "react";

interface IProps {
  menu: TMenu;
  menuList: TMenu[];
}

function MenuItem(props: IProps) {
  const { menu, menuList } = props;
  const childMenus = menuList.filter((item) => item.mas_id === menu.id);
  if (childMenus.length > 0) {
    return (
      <li>
        {menu.name}
        <ul>
          {childMenus.map((menuItem) => (
            <MenuItem key={menuItem.id} menu={menuItem} menuList={menuList} />
          ))}
        </ul>
      </li>
    );
  }
  return <li>{menu.name}</li>;
}

export default MenuItem;
