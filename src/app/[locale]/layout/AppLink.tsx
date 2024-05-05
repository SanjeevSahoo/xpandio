"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import TApp from "@/_common/types/project/TApp";

interface IProps {
  app: TApp;
}

function AppLink(props: IProps) {
  const { app } = props;

  return (
    <Link
      href={app.base_url}
      className=" cursor-pointer grid overflow-hidden items-center justify-center shadow-lg p-2 rounded-md grid-rows-[1fr_1fr_1fr] h-[280px] bg-card text-card-foreground hover:bg-accent hover:text-accent-foreground"
    >
      <div className="flex flex-1 items-center justify-center p-4">
        <Image
          src={`/images/logo/${app.logo_url}`}
          alt="Profile"
          width="78"
          height="78"
        />
      </div>
      <h3 className="flex flex-col items-center justify-center text-center  text-primary text-md font-bold p-2">
        {app.name}
      </h3>
      <p className="flex item-center justify-center text-center text-xs font-normal text-muted-foreground ">
        {app.short_desc}
      </p>
    </Link>
  );
}

export default AppLink;
