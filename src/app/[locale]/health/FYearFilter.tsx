"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/_common/components/ui/select";
import React from "react";

interface IProps {
  yearList: string[];
  selectedYear: string;
  setSelectedYear: React.Dispatch<React.SetStateAction<string>>;
}

function FYearFilter(props: IProps) {
  const { yearList, selectedYear, setSelectedYear } = props;

  return (
    <Select
      onValueChange={(selValue) => {
        setSelectedYear(selValue);
      }}
      value={selectedYear}
    >
      <SelectTrigger className="w-[150px]">
        <SelectValue placeholder="Select FYear" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {yearList.map((item) => (
            <SelectItem key={item} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default FYearFilter;
