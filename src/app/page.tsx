import BaseLogin from "./auth/BaseLogin";
import Logo from "./(master)/layout/Logo";
import Copyright from "./(master)/layout/Copyright";
import LoginForm from "@/app/auth/LoginForm";
import ThemeToggler from "@/_common/components/ThemeToggler";
import LoginSideInfo from "./auth/LoginSideInfo";

const Root = () => {
  return (
    <main className="relative h-screen w-screen overflow-auto flex justify-center items-center  bg-gradient !bg-cover !bg-center">
      <div className="bg-background text-foreground max-w-[1920px] max-h-[1080px] xl:min-w-[1240px] xl:min-h-[650px] w-full h-full  xl:w-[80%] xl:h-[85%] shadow-lg rounded-sm border-[2px] lg:grid lg:grid-cols-[2fr_3fr] items-center justify-evenly">
        <div className="w-full h-full grid grid-rows-[auto_1fr_auto] items-center ">
          <div className="w-full h-[50px] flex justify-start items-center p-8">
            <Logo />
          </div>
          <div className="p-14">
            <div className=" flex flex-col justify-center items-center">
              <p className="font-semibold text-xl p-2 text-primary">
                Welcome Back
              </p>
              <p className="font-normal text-sm p-2 text-muted-foreground">
                Please login using the information below
              </p>
              <LoginForm />
            </div>
          </div>
          <div className="p-2 px-4 flex justify-start items-center">
            <Copyright />
          </div>
        </div>
        <div className="lg:relative w-full h-full flex justify-center items-center p-4 bg-card text-card-foreground">
          <LoginSideInfo />
          <div className="absolute top-1 right-1">
            <BaseLogin newAppBase="/" />
            <ThemeToggler />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Root;
