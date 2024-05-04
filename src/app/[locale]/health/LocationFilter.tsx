"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/_common/components/ui/select";
import THealthLocation from "@/_common/types/health/THealthLocation";
import React from "react";

interface IProps {
  locations: THealthLocation[];
  selectedLocation: number;
  setSelectedLocation: React.Dispatch<React.SetStateAction<number>>;
}

function LocationFilter(props: IProps) {
  const { locations, selectedLocation, setSelectedLocation } = props;
  return (
    <Select
      onValueChange={(selValue) => {
        setSelectedLocation(+selValue);
      }}
      value={selectedLocation.toString()}
    >
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select Location" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {locations.map((item) => (
            <SelectItem key={item.id} value={item.id.toString()}>
              {item.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default LocationFilter;
