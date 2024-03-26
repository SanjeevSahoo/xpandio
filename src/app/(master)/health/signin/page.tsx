import BaseLogin from "@/app/auth/BaseLogin";
import LoginForm from "@/app/auth/LoginForm";

const Root = () => {
  return (
    <main className=" items-center justify-center h-screen w-screen grid grid-rows-[auto_1fr]">
      <LoginForm />
      <BaseLogin newAppBase="/health" />
    </main>
  );
};

export default Root;
