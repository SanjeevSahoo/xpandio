"use client";

import THealthLocation from "@/_common/types/health/THealthLocation";
import React, { useState } from "react";
import LocationFilter from "../LocationFilter";
import { Label } from "@/_common/components/ui/label";

import FYearFilter from "../FYearFilter";
import { Button } from "@/_common/components/ui/button";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";

interface IProps {
  locations: THealthLocation[];
  currFYear: string;
  yearList: string[];
}

function FilterLayout(props: IProps) {
  const { locations, currFYear, yearList } = props;
  const router = useRouter();
  const [selectedLocation, setSelectedLocation] = useState(
    locations.length > 0 ? locations[0].id : 0
  );
  const [selectedYear, setSelectedYear] = useState<string>(
    currFYear.toString()
  );

  const handleSearch = () => {
    router.replace(`/health/healthindex/${selectedYear}/${selectedLocation}`);
  };

  return (
    <div className="h-[55px] p-2 px-4 bg-card grid grid-cols-[auto_auto_auto_1fr] gap-4 items-center">
      <div className="w-[250px] flex items-center space-x-2">
        <Label>FY Year:</Label>
        <FYearFilter
          yearList={[...yearList]}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
        />
      </div>
      <div className="w-[300px] flex items-center space-x-2">
        <Label>Location:</Label>
        <LocationFilter
          locations={[...locations]}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
        />
      </div>
      <div>
        <Button
          onClick={handleSearch}
          variant="primary"
          className="w-[100px]"
          type="button"
        >
          <SearchIcon className="mr-2 h-4 w-4" /> Search
        </Button>
      </div>
    </div>
  );
}

export default FilterLayout;
