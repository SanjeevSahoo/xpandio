import Form from "@/app/auth/form";
import BaseLogin from "./auth/BaseLogin";

const Root = () => {
  return (
    <main className=" items-center justify-center h-screen w-screen grid grid-rows-[auto_1fr]">
      <Form />
      <BaseLogin newAppBase="/" />
    </main>
  );
};

export default Root;
