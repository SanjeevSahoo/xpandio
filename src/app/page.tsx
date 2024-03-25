import Form from "@/app/auth/form";
import BaseLogin from "./auth/BaseLogin";
import Logo from "./(master)/layout/Logo";
import Copyright from "./(master)/layout/Copyright";

const Root = () => {
  return (
    <main className="h-screen w-screen overflow-auto flex justify-center items-center  bg-[url(/images/background/xpandio_bg_light.jpg)] bg-cover">
      <div className="max-w-[1920px] max-h-[1080px] xl:min-w-[1240px] xl:min-h-[650px] w-full h-full  xl:w-[80%] xl:h-[85%] shadow-lg rounded-sm border-[2px] grid grid-cols-[2fr_3fr] items-center justify-evenly">
        <div className="w-full h-full grid grid-rows-[auto_1fr_auto] items-center bg-white">
          <div className="w-full h-[50px] flex justify-start items-center p-8">
            <Logo />
          </div>
          <div className="p-8">
            <Form />
          </div>
          <div className="p-2 p-x-8 flex justify-start items-center">
            <Copyright />
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center p-2 bg-blue-50">
          <BaseLogin newAppBase="/" />
        </div>
      </div>
    </main>
  );
};

export default Root;
