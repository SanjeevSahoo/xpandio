import Image from "next/image";
import React from "react";

function HealthShowcase() {
  return (
    <div className="h-[500px] w-full grid grid-rows-[auto_1fr] items-center justify-center backdrop-blur-xl  rounded-xl shadow-xl p-2 pt-8">
      <div className="text-center w-full flex justify-center items-center">
        <Image
          src="/images/showcase/health_light.png"
          height={350}
          width={450}
          alt="Health App"
        />
      </div>
      <div className="grid grid-rows-[auto_1fr] items-center ">
        <p className="text-primary text-lg font-semibold underline text-center p-2">
          Occupational Health App
        </p>
        <div className="text-primary text-sm text-center p-2">
          An app for Tracking employee Occupational Health related data, it
          includes Periodic Health Checkout , Audiometry , OPD Appointment
          tracking, etc
        </div>
      </div>
    </div>
  );
}

export default HealthShowcase;
