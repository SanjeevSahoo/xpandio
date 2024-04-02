import BaseLogin from "@/app/[locale]/auth/BaseLogin";
import LoginForm from "@/app/[locale]/auth/LoginForm";

const Root = () => {
  return (
    <main className=" items-center justify-center h-screen w-screen grid grid-rows-[auto_1fr]">
      <LoginForm />
      <BaseLogin newAppBase="/health" />
    </main>
  );
};

export default Root;
