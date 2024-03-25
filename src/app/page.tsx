import Form from "@/app/auth/form";
import BaseLogin from "./auth/BaseLogin";
import Image from "next/image";

const Root = () => {
  return (
    <main className="h-screen w-screen overflow-auto flex justify-center items-center  bg-[url(/images/background/xpandio_bg_light.jpg)]">
      <div className="absolute max-w-[1920px] max-h-[1080px] xl:min-w-[1240px] xl:min-h-[650px] w-full h-full  xl:w-[80%] xl:h-[85%] shadow-md rounded-sm border-[2px] grid grid-cols-[2fr_3fr] items-center justify-evenly bg-white">
        <div className="w-full h-full flex justify-center items-center p-2 bg-white">
          <Form />
        </div>
        <div className="w-full h-full flex justify-center items-center p-2 bg-blue-50">
          <BaseLogin newAppBase="/" />
        </div>
      </div>
    </main>
  );
};

export default Root;
