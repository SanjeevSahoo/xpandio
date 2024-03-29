"use client";

import { login } from "@/app/[locale]/auth/actions";
import { useFormState, useFormStatus } from "react-dom";
import { Input } from "@/_common/components/ui/input";
import { Button } from "@/_common/components/ui/button";
import { usePathname } from "next/navigation";
import { encryptData } from "@/_common/utils/crypto";

const loginInitialState = {
  message: "",
  errors: {
    username: "",
    password: "",
    credentials: "",
    unknown: "",
  },
};

const SubmitButton = () => {
  const formStatus = useFormStatus();
  return (
    <>
      <Button
        variant="primary"
        className="w-full"
        type="submit"
        disabled={formStatus.pending}
      >
        Sign In
      </Button>
      {formStatus.pending && <p className="text-red-500">Loading....</p>}
    </>
  );
};

const LoginForm = () => {
  const [formState, formAction] = useFormState(login, loginInitialState);
  const pathname = usePathname();

  const handleFormAction = (formData: FormData) => {
    formData.set("username", encryptData(formData.get("username")));
    formData.set("password", encryptData(formData.get("password")));
    formAction(formData);
  };

  return (
    <form action={handleFormAction} className="space-y-4 w-full ">
      <Input
        required
        name="pathname"
        placeholder="pathname"
        defaultValue={pathname}
        className="hidden"
      />
      <Input required name="username" placeholder="Your Username" />
      <Input
        required
        name="password"
        type="password"
        placeholder="Your Password"
      />
      <div className="py-2">
        <SubmitButton />
      </div>
      {formState.message && <p className="text-red-500">Invalid Credentials</p>}
    </form>
  );
};

export default LoginForm;
