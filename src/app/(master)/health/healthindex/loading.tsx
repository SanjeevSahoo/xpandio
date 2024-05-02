import React from "react";

function loading() {
  return (
    <div className="flex gap-2 justify-center items-center  h-screen p-2">
      <div className="grid grid-rows-[auto_1fr] gap-2 justify-center items-center h-[100px]">
        <div className="flex justify-center items-center">
          <div className="relative inline-flex">
            <div className="w-8 h-8 bg-primary rounded-full"></div>
            <div className="w-8 h-8 bg-primary rounded-full absolute top-0 left-0 animate-ping"></div>
            <div className="w-8 h-8 bg-primary rounded-full absolute top-0 left-0 animate-pulse"></div>
          </div>
        </div>
        <div className="font-semibold text-lg">
          Please Wait ...! Page is Loading from Server
        </div>
      </div>
    </div>
  );
}

export default loading;
