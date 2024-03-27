"use client";

import React, { ReactNode } from "react";
import SafetyShowcase from "./showcase/SafetyShowcase";
import HealthShowcase from "./showcase/HealthShowcase";
import { Card, CardContent } from "@/_common/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/_common/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const APPS_SHOWCASE_LIST = [
  {
    id: 1,
    name: "Environment Health and Safety",
    imgUrl: "",
    showcase: <SafetyShowcase />,
  },
  {
    id: 2,
    name: "Health System",
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
                <div className="flex justify-center  items-center h-full ">
                  {app.showcase}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="w-full p-2">
        <Carousel
          opts={{
            align: "start",
          }}
        >
          <CarouselContent className="grid grid-cols-4 ">
            {APPS_SHOWCASE_LIST.map((app) => (
              <CarouselItem key={app.id}>
                <Card>
                  <CardContent className="grid w-full h-[90px] items-center justify-center  text-center pt-4 p-4 text-sm">
                    {app.name}
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}

export default AppsShowcase;
