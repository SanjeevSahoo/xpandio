import BaseLogin from "@/app/auth/BaseLogin";
import Form from "@/app/auth/form";

const Root = () => {
  return (
    <main className=" items-center justify-center h-screen w-screen grid grid-rows-[auto_1fr]">
      <Form />
      <BaseLogin newAppBase="/health" />
    </main>
  );
};

export default Root;
