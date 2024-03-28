"use client";

import React from "react";
import HealthShowcase from "./showcase/HealthShowcase";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/_common/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const APPS_SHOWCASE_LIST = [
  {
    id: 1,
    name: "Occupational Health System",
    imgUrl: "",
    showcase: <HealthShowcase />,
  },
];

function AppsShowcase() {
  return (
    <div className="w-full h-full grid grid-rows-[auto_1fr_auto] p-2">
      <div className="text-muted-foreground text-lg p-2 flex justify-center items-center border-b-2">
        Available Apps
      </div>
      <div className="w-full ">
        <Carousel
          className="w-full "
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
        >
          <CarouselContent>
            {APPS_SHOWCASE_LIST.map((app) => (
              <CarouselItem key={app.id}>
                <div className="flex justify-center  items-center h-full w-full p-2 py-8 ">
                  {app.showcase}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}

export default AppsShowcase;
