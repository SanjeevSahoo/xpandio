"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/_common/components/ui/select";
import TModule from "@/_common/types/project/TModule";
import React from "react";

interface IProps {
  moduleList: TModule[];
  selectedModule: string;
  setSelectedModule: React.Dispatch<React.SetStateAction<string>>;
}

function ModuleFilter(props: IProps) {
  const { moduleList, selectedModule, setSelectedModule } = props;

  return (
    <Select
      onValueChange={(selValue) => {
        setSelectedModule(selValue);
      }}
      value={selectedModule}
    >
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select Module" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value={"-1"}>All Modules</SelectItem>
          {moduleList.map((item) => (
            <SelectItem key={item.id.toString()} value={item.id.toString()}>
              {item.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default ModuleFilter;
