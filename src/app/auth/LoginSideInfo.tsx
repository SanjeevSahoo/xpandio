"use client";

import { Card, CardContent } from "@/_common/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/_common/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

function LoginSideInfo() {
  return (
    <Carousel
      className="w-[85%] "
      plugins={[
        Autoplay({
          delay: 10000,
        }),
      ]}
    >
      <CarouselContent>
        <CarouselItem>
          <div className="p-1">
            <Card>
              <CardContent className="flex justify-center  items-center h-full p-6">
                <p className="text-muted-foreground text-lg ">Available Apps</p>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-1">
            <Card>
              <CardContent className="flex justify-center  items-center h-full p-6">
                <p className="text-muted-foreground text-lg ">
                  New / Upcoming Changes
                </p>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default LoginSideInfo;
