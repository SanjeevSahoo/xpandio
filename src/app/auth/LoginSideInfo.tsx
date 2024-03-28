"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/_common/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import AppsShowcase from "./AppsShowcase";

function LoginSideInfo() {
  return (
    <Carousel
      className="w-[75%] lg:w-[88%] "
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 30000,
        }),
      ]}
    >
      <CarouselContent>
        <CarouselItem>
          <div className="flex justify-center  items-center h-full p-2">
            <AppsShowcase />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="flex justify-center  items-center h-full p-2">
            <p className="text-muted-foreground text-lg ">
              New / Upcoming Changes
            </p>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default LoginSideInfo;
