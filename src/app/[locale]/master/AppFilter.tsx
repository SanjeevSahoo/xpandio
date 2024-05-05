"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/_common/components/ui/select";
import TApp from "@/_common/types/project/TApp";
import React from "react";

interface IProps {
  appList: TApp[];
  selectedApp: string;
  setSelectedApp: React.Dispatch<React.SetStateAction<string>>;
}

function AppFilter(props: IProps) {
  const { appList, selectedApp, setSelectedApp } = props;

  return (
    <Select
      onValueChange={(selValue) => {
        setSelectedApp(selValue);
      }}
      value={selectedApp}
    >
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select Application" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value={"-1"}>All Applications</SelectItem>
          <SelectItem value={"0"}>Master</SelectItem>
          {appList.map((item) => (
            <SelectItem key={item.id.toString()} value={item.id.toString()}>
              {item.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default AppFilter;
