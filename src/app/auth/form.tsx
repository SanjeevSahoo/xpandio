"use client";

import { login } from "@/app/auth/actions";
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
        variant="secondary"
        className="w-full"
        type="submit"
        disabled={formStatus.pending}
      >
        submit
      </Button>
      {formStatus.pending && <p className="text-red-500">Loading....</p>}
    </>
  );
};

const Form = () => {
  const [formState, formAction] = useFormState(login, loginInitialState);
  const pathname = usePathname();

  const handleFormAction = (formData: FormData) => {
    formData.set("username", encryptData(formData.get("username")));
    formData.set("password", encryptData(formData.get("password")));
    formAction(formData);
  };

  return (
    <form action={handleFormAction} className="space-y-4 w-full max-w-sm">
      <Input
        required
        name="pathname"
        placeholder="pathname"
        defaultValue={pathname}
        className="hidden"
      />
      <Input required name="username" placeholder="username" />
      <Input required name="password" type="password" placeholder="password" />
      <SubmitButton />
      {formState.message && <p className="text-red-500">Invalid Credentials</p>}
    </form>
  );
};

export default Form;
