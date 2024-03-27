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
    <div className="w-full grid grid-rows-[auto_1fr_auto] ">
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
                <div className="flex justify-center  items-center h-full p-6">
                  {app.showcase}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="w-full ">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full "
        >
          <CarouselContent>
            {APPS_SHOWCASE_LIST.map((app) => (
              <CarouselItem key={app.id} className="md:basis-1/2 lg:basis-1/4">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex w-[100px] h-[100px] items-center justify-center p-4 text-center">
                      {app.name}
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}

export default AppsShowcase;
